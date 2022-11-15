import { Component, OnInit } from '@angular/core';
import { CurrencyapidateService, CurrencyRates, Rate} from '../currencyapidate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public rates: Rate = {
    UAH: 0,
    USD: 0,
    EUR: 0,
  };

  constructor(private api:CurrencyapidateService) {}

  ngOnInit(): void {
    
  }

}
