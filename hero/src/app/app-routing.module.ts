import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesDetailsComponent } from './components/heroes-details/heroes-details.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
   children: [
     {
    path: 'dashpath',
    component: DashComponent
     },
     {
     path: 'heroespath',
     component: HeroesComponent
     },

     {
      path: 'heroesdetailspath',
      component: HeroesDetailsComponent
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
