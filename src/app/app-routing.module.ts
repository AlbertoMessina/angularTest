import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { GreengrocerListComponent } from './greengrocer-list/greengrocer-list.component';
import { HomeComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreengrocerComponent } from './greengrocer/greengrocer.component';

// qui si definiscono tutte le route dell'applicazione è un oggetto che contienre i path (url) delle route
//dell'applicazione
const routes: Routes = [
  //sulle rout chiedere differenza tra prefix e full
 {path:'', redirectTo:'/home' , pathMatch: 'full'},
 {path:'home' , component: HomeComponent},
 {path: 'greengrocers', component: GreengrocerListComponent},
 {path: 'greengrocers/:id', component: GreengrocerComponent},
 {path: 'fruits',component: FruitListComponent},
 {path: '**'  , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent = [
  FruitListComponent, 
  GreengrocerListComponent,
  PageNotFoundComponent,
  HomeComponent,
  GreengrocerComponent];
