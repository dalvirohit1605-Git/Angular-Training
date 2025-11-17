import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: any = [
    {
      id: 1,
      title: 'Lotus',
      description: 'Wedding flower',
      price: 24,
      likes: 800,
      imageurl: '/assets/images/lotus.jpg',
      discount: 3,
      stock: 2,
    },
    {
      id: 2,
      title: 'Rose',
      description: 'Valentine flower',
      price: 14,
      likes: 4000,
      imageurl: '/assets/images/rose.jpg',
      discount: 10,
      stock: 4,
    },
    {
      id: 3,
      title: 'Jasmine',
      description: 'Smelling flower',
      price: 3,
      likes: 9000,
      imageurl: '/assets/images/jasmine.jpg',
      discount: 7,
      stock: 0,
    },
    {
      id: 4,
      title: 'Tulip',
      description: 'Beautiful flower',
      price: 16,
      likes: 3000,
      imageurl: '/assets/images/tulip.jpg',
      discount: 5,
      stock: 2,
    },
    {
      id: 5,
      title: 'Lily',
      description: 'Delicate flower',
      price: 9,
      likes: 6000,
      imageurl: '/assets/images/lily.jpg',
      discount: 0,
      stock: 0,
    },
    {
      id: 6,
      title: 'Marigold',
      description: 'Festival flower',
      price: 4,
      likes: 56000,
      imageurl: '/assets/images/marigold.jpg',
      discount: 20,
      stock: 6,
    },
  ];

  constructor() {}

  getAllProducts(): any {
    return this.list;
  }

  getProductById(id: number): any {
    console.log('selected product id=' + id);
    return this.list.find((p: any) => {
      return p.id == id;
    });
  }

  updateProduct(prod: any): void {
    let index = this.list.findIndex((p: any) => p.id == prod.id);
    if (index != -1) this.list[index] = prod;
  }
}
