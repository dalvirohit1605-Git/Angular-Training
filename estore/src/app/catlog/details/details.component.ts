import { Component, OnInit , Input} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  @Input () product: Product|undefined;
  //Callback function

  onUpdate(data:any){
    if(this.product != undefined)
        this.product.likes=data.count;
    }
}