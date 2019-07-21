import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MoviesComponent } from '../components/movies/movies.component';
import { InfoComponent } from '../components/info/info.component';
import { MainComponent } from '../components/main/main.component';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "movies", component: MoviesComponent},
  {path: "info", component: InfoComponent}
  // { path: "home", component: HomeComponent,children:[
  //   { path: "login", component: LoginComponent},
  //   { path: "about", component: AboutComponent },
  //   { path: "info", component: InfoComponent }
  // ]}, 
  // { path: "registration", component: RegistrationComponent },
  // { path: "shopping", component: ShoppingComponent,children:[
  //     { path: "cart", component: CartComponent},
  //     { path: "products", component: ProductsComponent },
  // ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})]
  //exports: [RouterModule]
})
export class RoutingModule { }
