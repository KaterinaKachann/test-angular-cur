import { Component, OnInit } from '@angular/core';
import { CurrencyapidateService, Rate } from '../currencyapidate.service';

export type CurrencyValue = {
  [key in 'USD' | 'EUR' | 'UAH'] : Rate
}

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {

  public currancy: CurrencyValue = {
    USD: {
      UAH: 0,
      USD: 0,
      EUR: 0,
    },
    UAH: {
      UAH: 0,
      USD: 0,
      EUR: 0,
    },
    EUR: {
      UAH: 0,
      USD: 0,
      EUR: 0,
    }
  }

  inputA = 1;
  selectA: string = 'UAH';

  inputB = 0;
  selectB: string = 'USD';


  constructor(private api: CurrencyapidateService) {}

  calculateA() {
    this.inputA = Number((this.inputB * (this.currancy as any)[this.selectB][this.selectA]).toFixed(2))
  }

  calculateB() {
    this.inputB = Number((this.inputA * (this.currancy as any)[this.selectA][this.selectB]).toFixed(2))
  }

  ngOnInit(): void {
    this.api.getCurrencyUSD().subscribe((data) => {
      this.currancy.USD = data.rates;
    });
    this.api.getCurrencyEUR().subscribe((data) => {
      this.currancy.EUR = data.rates;
    });
    this.api.getCurrencyUAH().subscribe((data) => {
      this.currancy.UAH = data.rates;
      this.inputB = data.rates.USD;
    });

  }
}
