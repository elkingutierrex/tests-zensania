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

  constructor(public _menu: MenuService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){

    this._menu.getData().subscribe(result => {
      this.arrayData = result['result']['items']
    })

  }

}
