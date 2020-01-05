import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/components/checkout/checkout.component';
import { StoreDetailComponent } from './store/components/store-detail/store-detail.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "store", component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "item/:id", component: StoreDetailComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "cart", component: CartDetailComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "checkout", component: CheckoutComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "**", redirectTo: "/store"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsletterComponent,
    BreadcrumbComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule, StoreModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
