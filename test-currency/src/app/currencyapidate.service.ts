import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Rate{
 UAH: number;
 USD: number;
 EUR: number;
} 
export interface CurrencyRates {
  base: string;
  data: string;
  rates: Rate;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidateService {
  
  constructor(private http:HttpClient) {}

  getCurrencyUSD(): Observable<CurrencyRates>{
    let url = 'https://api.exchangerate.host/latest?base=USD'
    return this.http.get<CurrencyRates>(url);
  }

  getCurrencyEUR(): Observable<CurrencyRates>{
    let url = 'https://api.exchangerate.host/latest?base=EUR'
    return this.http.get<CurrencyRates>(url);
  }

  getCurrencyUAH(): Observable<CurrencyRates> {
    let url = 'https://api.exchangerate.host/latest?base=UAH'
    return this.http.get<CurrencyRates>(url);
  }
}
