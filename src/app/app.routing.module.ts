
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menuItem/menu-item.component';
import { ListadoComponent } from './components/listado/listado.component';


const routes : Routes = [
    {path: 'home', component: ListadoComponent, 
      children:[
        { path:'', component: MenuComponent },
        { path:':id', component: MenuItemComponent }
      ]

    },

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
  
