import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { patrimonio } from '../Models/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "http://localhost:3000/api/productos";
  //SI DE UNA LLAMADA GRANDE TE TRAE UN MONTON DE DATOS --> ESTO PUEDE SERVIR PARA CREAR NUESTROS TEMPLATES
                         //patrimonio porque así se llama nuestra interface en carpeta "Models"
  /*variable-->*/ products: patrimonio[] | undefined ; /*en caso de que el producto no esté definido */
cotizar_items: patrimonio[] | undefined; //arreglo de los items que están en el carrito o apartado de cotizar
constructor( private http:HttpClient ){ 
  this.cotizar_items = [];
}
  
  getProduct(){
    return this.http.get<patrimonio[]>(this.API_URL);
  }
  agregarCotiza(alquiler:patrimonio){
    this.cotizar_items.push(alquiler);
    console.log(this.cotizar_items);
  }
}
