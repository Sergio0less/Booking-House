import { Component, OnInit, Input } from '@angular/core';
//NOTA: hay error porque el valor "product" aun no existe en el html, así que tiene que estár
//seteado dentro del componente, en este caso en el "product.component.ts"

import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }
  
  agregarCotiza(){
    this.productService.agregarCotiza(this.data);

  }

}
