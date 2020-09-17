
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


const routes : Routes = [
    {path: 'home', component: MenuComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home' }

]


@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot (  routes )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
  
