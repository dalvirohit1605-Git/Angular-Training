import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CounterComponent } from '../counter/counter.component';
import { CartService } from '../shopping-cart/cart.service';
import { CustomModule } from '../custom/custom.module';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CounterComponent, CustomModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentProductId!: number;
  @Input() product!: Product;
  prooductQuantity!: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // ✅ inject it
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.currentProductId = idParam ? +idParam : 0;
    if (this.currentProductId) {
      this.product = this.productService.getProductById(this.currentProductId);
    }
  }

  onUpdate(data: any) {
    if (this.product != undefined) this.product.likes = data.count;
  }
  addToCart(): void {
    if (!this.product) {
      console.error('Product details not found');
      return;
    }

    const cartItem = {
      productId: this.product.id,
      title: this.product.title,
      price: this.product.price,
      quantity: 1,
      imageUrl: this.product.imageurl,
    };
    this.cartService.addToCart(cartItem);
    const quantity = this.cartService.getProductQuantity(cartItem.productId);
    alert(`${quantity}` + ` ` + `${this.product.title} added to cart!`);
  }

  goToUpdate(): void {
    const id = this.currentProductId;
    this.router.navigate(['./update/', id]);
  }

  goToDelete(id: number): void {
    this.router.navigate(['./delete/', id]);
  }
}
