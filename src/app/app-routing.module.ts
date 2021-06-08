import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { VendedorComponent } from './Components/vendedor/vendedor.component';
import { ProductPageComponent } from './Components/product-page/product-page.component'
import { CotizarComponent } from './Components/cotizar/cotizar.component'

const routes: Routes = [
  { path:'', component: HomePageComponent},
  { path:'des-producto', component: ProductPageComponent},
  { path:'productos', component: ProductListComponent},
  { path:'nosotros', component: AboutComponent},
  { path:'contacto', component: ContactComponent},
  { path:'vendedor', component: VendedorComponent},
  { path:'cotizacion', component: CotizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
