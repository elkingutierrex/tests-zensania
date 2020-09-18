import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  arrayData:any = [];

  constructor( private http: HttpClient,
              private router: Router) { }

  url:string = 'https://datos.gob.es/apidata/catalog/distribution';


  getData(){

    return this.http.get(this.url).subscribe(result =>{
      this.arrayData = result['result']['items']
    })

  }

  deleteItem( i, item ){

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete; '" + item.tittle + "' ?" ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.arrayData.splice(i,1); 
        this.router.navigateByUrl(`/home`)
     

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
      
  }


  updateItem( i, data ){
    
    this.arrayData.forEach( (item, index) =>{
      if( i == index ){
        item = data;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Update Success',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl(`/home`);
      }
    })
    
  }


}
