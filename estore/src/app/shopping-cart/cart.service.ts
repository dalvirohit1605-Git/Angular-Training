import { Injectable } from '@angular/core';
import { Item } from './models/Item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'shoppingCart';

  // ✅ Add item to cart
  addToCart(product: Item): void {
    const storedCart = JSON.parse(
      sessionStorage.getItem(this.storageKey) || '[]'
    );
    const cart: Item[] = Array.isArray(storedCart) ? storedCart : [];

    const existing = cart.find((i) => i.productId === product.productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  // ✅ Get all cart items
  getCartItems(): Item[] {
    try {
      const storedCart = JSON.parse(
        sessionStorage.getItem(this.storageKey) || '[]'
      );
      return Array.isArray(storedCart) ? storedCart : [];
    } catch {
      return [];
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    const cart = this.getCartItems();

    const item = cart.find((i) => i.productId === productId);
    if (item) {
      item.quantity = quantity > 0 ? quantity : 1;
    }

    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  getProductQuantity(productId: number): number {
    const cart = this.getCartItems() || []; // ensure cart is not null or undefined
    const item = cart.find((i) => i.productId === productId);
    return item ? item.quantity : 1; // return 0 if product not found
  }

  // ✅ Remove single product
  removeFromCart(productId: number): void {
    const cart = this.getCartItems().filter((i) => i.productId !== productId);
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  // ✅ Clear cart
  clearCart(): void {
    sessionStorage.removeItem(this.storageKey);
  }

  // ✅ Calculate total price
  getTotalPrice(): number {
    const cart = this.getCartItems();
    return cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
  }
}
