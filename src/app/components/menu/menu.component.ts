import { Component, OnInit } from '@angular/core';
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

}
