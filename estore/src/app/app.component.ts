import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './shopping-cart/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    SignInComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Estore';

  loggedInStatus: boolean | undefined;

  links: any = [];

  constructor() {
    this.links = ['home', 'about', 'services', 'protected'];
  }
  convertToBoolean(result: string): boolean {
    let status = false;
    if (result == 'true') {
      status = true;
    }
    return status;
  }

  ngOnInit() {
    console.log('Router container component ngOnint is getting invoked');
    let strStatus: string | null = localStorage.getItem('loggedInStatus');
    console.log(' in routerocntainer strStatus =' + strStatus);
    if (strStatus != null) {
      this.loggedInStatus = true;
      //this.convertToBoolean(strStatus);
      console.log(this.loggedInStatus);
    }
  }
}
