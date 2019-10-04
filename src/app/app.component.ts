import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  count =1;
 
 listProducts :Array<any>=[];
 

  /*countValue(mytext:string){

    let v= Number.parseInt(mytext);
    this.count += v;

  }*/

  calcul(name:string,price=0){

   price = price*0.18;
   this.listProducts.push({name,price});
   console.log(this.listProducts)

  }

  filterProducts(event){

    console.log("event",event.target.value)
  
     this.listProducts.filter(x=>{
       
      return (x.name !== '' && x.price !== 0) ;

    });


  }

}
