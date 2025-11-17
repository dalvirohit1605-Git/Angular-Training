import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Item as CartItem } from '../models/Item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // ✅ Fetch all items + total
  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  updateQuantity(event: { productId: number; quantity: number }): void {
    this.cartService.updateQuantity(event.productId, event.quantity);
    this.loadCart(); // refresh items + total
  }

  // ✅ When remove button clicked
  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.loadCart(); // Refresh the list + total
  }

  // ✅ When Clear Cart clicked
  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }
}
