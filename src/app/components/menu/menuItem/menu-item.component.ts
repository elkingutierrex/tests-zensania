import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: []
})
export class MenuItemComponent implements OnInit {

  urlActivate
  idItem:number
  item

  constructor(  private _menu : MenuService 
              , private route: ActivatedRoute
              , private router : Router ) { }

  ngOnInit(): void {
    this.idItem = parseInt(this.route.snapshot.paramMap.get('id'));
   
    this.getItemById( this.idItem );
  }


  getItemById(id){
    this.item = this._menu.arrayData[id] ;
    console.log(this.item)
  }

  updateItem(item){
    this._menu.updateItem(  this.idItem, item );
  }

  deleteItem( item){
    this._menu.deleteItem(  this.idItem, item );
  }



  backPage( ){
    this.router.navigateByUrl(`/home`)
  }

}
