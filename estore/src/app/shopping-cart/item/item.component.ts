import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<number>();
  @Output() quantityChange = new EventEmitter<{
    productId: number;
    quantity: number;
  }>();

  OnRemoveClick(productId: number): void {
    this.remove.emit(productId);
  }

  onQuantityChange(): void {
    if (this.item && this.item.productId) {
      this.quantityChange.emit({
        productId: this.item.productId,
        quantity: this.item.quantity,
      });
    }
  }
}
