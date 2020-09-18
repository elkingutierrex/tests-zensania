import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import Swal from 'sweetalert2';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  
  arrayData = [];
  actualPage: number = 1;
  itemsPerPage : number = 5;


  constructor(public _menu: MenuService,
              public router: Router) { }

  ngOnInit(): void {
   
  }


  deleteItem( i, item ){
   this._menu.deleteItem( i, item );    
  }

  editItem( id ){
    this.router.navigateByUrl(`/home/${id}`)
  }




}
