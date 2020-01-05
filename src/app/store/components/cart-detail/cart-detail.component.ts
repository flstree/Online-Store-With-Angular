import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from '../../../model/services/users/userRepo.service';
import { User } from '../../../model/entities/user';
import { CartService } from '../../../model/services/cart.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderRepository } from '../../../model/services/orders/order-repo.service';
import { Order } from '../../../model/services/orders/order.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  user: User;
  orderData: FormGroup;
  submitted: boolean = false;
  termsAccepted: boolean = false;
  orderSent: boolean = false;

  constructor(private _user: UserRepositoryService,public order: Order, public _cart: CartService, private router: Router, public _order: OrderRepository) { 
    this.user = this._user.getUser('westresd');
  }

  ngOnInit() {
    this.orderData = new FormGroup({
      firstname: new FormControl(this.user.firstname, [Validators.required]),
      lastname: new FormControl(this.user.lastname, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      address: new FormControl(this.user.location.address, [Validators.required]),
      city: new FormControl(this.user.location.city, [Validators.required]),
      zip: new FormControl(this.user.location.zip, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
      country: new FormControl(this.user.location.country, [Validators.required]),
      ordernote: new FormControl("")
    });
  }

  submitOrder(){
    this.order.name = this.orderData.value.firstname + ' ' + this.orderData.value.lastname;
    this.order.address = this.orderData.value.address;
    this.order.city = this.orderData.value.city;
    this.order.state = this.orderData.value.state;
    this.order.country = this.orderData.value.country;
    this.order.zip = this.orderData.value.zip;
    /* this.order.cart = {};
    this.order.cart.lines = this._cart.lines;
    this.order.cart.itemCount = this._cart.itemCount;
    this.order.cart.cartPrice = this._cart.cartPrice; */

    this.submitted = true;
    if( this.orderData.valid && this.termsAccepted){
      this._order.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = true;
      })
    }
  }

  acceptTerms(checked){
    this.termsAccepted = checked;
  }

  gotoStore(){
    this.router.navigate(['store']);
  }

}
