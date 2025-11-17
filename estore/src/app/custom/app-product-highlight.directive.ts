import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../product';

@Directive({
  selector: '[appAppProductHighlight]',
})
export class AppProductHighlightDirective implements OnInit {
  @Input('appAppProductHighlight') product!: Product;

  constructor(private eleRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    if (this.product.stock === 0) {
      this.render.setStyle(this.eleRef.nativeElement, 'opacity', '0.5');
    }
    if (this.product.discount === 0) {
      this.render.setStyle(
        this.eleRef.nativeElement,
        'border',
        '2px solid gold'
      );
      this.render.setStyle(this.eleRef.nativeElement, 'color', 'red');
    }
  }
}
