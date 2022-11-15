import { Component, OnInit } from '@angular/core';
import { CurrencyapidateService, CurrencyRates, Rate } from '../currencyapidate.service';

@Component({
  selector: 'app-header-eur',
  templateUrl: './header-eur.component.html',
  styleUrls: ['./header-eur.component.scss']
})
export class HeaderEurComponent implements OnInit {

  public rates: Rate = {
    UAH: 0,
    USD: 0,
    EUR: 0,
  };

  constructor(private api:CurrencyapidateService) { }

  ngOnInit(): void {
    this.api.getCurrencyEUR().subscribe( (data: CurrencyRates) => {
      this.rates = data.rates
    });
  }

}
