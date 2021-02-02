import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {CarsComponent} from './components/main/cars/cars.component';
import {CreateComponent} from './components/main/create/create.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cars', component: CarsComponent},
      {path: 'create', component: CreateComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
