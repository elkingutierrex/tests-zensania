import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MenuService } from '../menu.service';

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
  total: number = 0;

  constructor(public _menu: MenuService) { }

  ngOnInit(): void {
    this.getdata();
 
  }

  getdata(){

    this._menu.getData().subscribe(result => {
      this.arrayData = result['result']['items']
      this.total = this.arrayData.length;
    })

  }

  changeData( item ){
    item.swEdit = !item.swEdit;

    if( !item.swEdit ){
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Update Success',
          showConfirmButton: false,
          timer: 1500
        })

    }
  }

  deleteItem( i, tittle  ){


    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete; '" + tittle + "' ?" ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.arrayData.splice(i,1); 
        this.total = this.arrayData.length;

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
      
  }




}
