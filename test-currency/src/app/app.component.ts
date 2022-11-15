import { Component, OnInit } from '@angular/core';
import { CurrencyapidateService } from './currencyapidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test-currency';
 

  constructor(){}


  // ngOnInit(){
  //   this.api.getCurrencyData().subscribe((data) => {
  //     console.log(data);
  //   })
  // }
}


