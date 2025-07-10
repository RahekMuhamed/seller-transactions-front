import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesSummaryService {

   private apiUrl = 'http://localhost:8000/api/sellers/transactions-summary';

  constructor(private http: HttpClient) {}

  getSalesSummary(sellerId: string, dateRange: string = '') {
    return this.http.get<any>(this.apiUrl, {
      params: {
        seller_id: sellerId,
        date_range: dateRange
      },
      headers: {
        Token: 'ABC'
      }
    });
  }
}