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
  /*variable-->*/ products: patrimonio[] = []; /*en caso de que el producto no esté definido */
cotizar_items: patrimonio[] =[]; //arreglo de los items que están en el carrito o apartado de cotizar
constructor( private http:HttpClient ){ 
  this.cotizar_items = [];
}
  
  getProduct(){
    return this.http.get<patrimonio[]>(this.API_URL);
  }

  getCotizacion(){
    return this.cotizar_items = JSON.parse(localStorage.getItem('cotizacion') || '{}')
  }

  agregarCotiza(alquiler:patrimonio)
  {
    alquiler.qty_c = 1

    if(localStorage.getItem('cotizacion') == null){
     this.cotizar_items?.push(alquiler);
    localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items)) 
    }
    else if(this.isDuplicated(alquiler._id)) {
      this.cotizar_items = JSON.parse(localStorage.getItem('cotizacion') || '{}')
      this.cotizar_items[this.isDuplicatedId(alquiler._id)].qty_c++;
      localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items))

    }

    else{
      this.cotizar_items = JSON.parse(localStorage.getItem('cotizacion') || '{}')
      this.cotizar_items?.push(alquiler);
    localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items)) 
    }

    console.log(this.cotizar_items)
  }

  isDuplicated(id:any){
    for(var i=0; i<=this.cotizar_items.length -1; i++){
      if(id == this.cotizar_items[i]._id){
        return true;
      }
    }
    return false;
  }
  isDuplicatedId(id:any){
    for(var i=0; i<=this.cotizar_items.length -1; i++){
      if(id == this.cotizar_items[i]._id){
        return i;
      }
    }
    return 0;
  }
}
