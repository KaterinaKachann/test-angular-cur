import { Component, OnInit } from '@angular/core';
import { CurrencyapidateService, CurrencyRates, Rate } from '../currencyapidate.service';

@Component({
  selector: 'app-header-usd',
  templateUrl: './header-usd.component.html',
  styleUrls: ['./header-usd.component.scss']
})
export class HeaderUsdComponent implements OnInit {

  public rates: Rate = {
    UAH: 0,
    USD: 0,
    EUR: 0,
  };

  constructor(private api:CurrencyapidateService) { }

  ngOnInit(): void {
    this.api.getCurrencyUSD().subscribe( (data: CurrencyRates) => {
      this.rates = data.rates
    });
  }

}
