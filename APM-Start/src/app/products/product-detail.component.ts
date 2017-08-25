import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  // selector: 'pm-product-detail', Displaying components view as part of routing so selector not required
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';

  product: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
