import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './logged-in-guard.service';
import { createComponent } from '@angular/core';
import { DashboardComponent } from './bi/dashboard/dashboard.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { DeleteComponent } from './delete/delete.component';
import { PieChartComponent } from './bi/pie-chart/pie-chart.component';
import { BarchartComponent } from './bi/barchart/barchart.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CreateComponent } from './create/create.component';
export const childRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'bar', component: BarchartComponent },
  { path: 'pie', component: PieChartComponent },
];

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: MentoringComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myCart', component: CartComponent },
  //Nested Routing
  { path: 'dashboard', component: DashboardComponent, children: childRoutes },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard],
  }, //secure Routing
  //injectable service

  { path: 'lists', component: ListComponent },
  { path: 'lists/:id', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent }, ///Paramterized Routing
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'create', component: CreateComponent },
];
