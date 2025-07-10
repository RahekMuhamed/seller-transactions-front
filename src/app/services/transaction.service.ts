import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8000/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(sellerId: string) {
    return this.http.get(this.apiUrl, {
      params: {
        seller_id: sellerId,
        page: '1',
        per_page: '10'
      },
      headers: {Token:'ABC'}
    });
  }
}