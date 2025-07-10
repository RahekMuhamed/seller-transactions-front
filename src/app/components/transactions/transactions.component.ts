import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  sellerId: string = '';
  transactions: any[] = [];
  hasSearched: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private transactionService: TransactionService) {}

  getTransactions() {
    if (!this.sellerId) return;

    this.loading = true;
    this.errorMessage = '';
    this.transactions = [];
    this.hasSearched = false;

    this.transactionService.getTransactions(this.sellerId).subscribe({
      next: (res: any) => {
        this.transactions = res.data?.transactions || [];
        this.loading = false;
        this.hasSearched = true;
      },
      error: (err) => {
        console.error('Error fetching transactions:', err);
        this.errorMessage = 'Failed to load transactions. Please try again.';
        this.loading = false;
        this.hasSearched = true;
      }
    });
  }
}