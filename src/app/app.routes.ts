
import { Routes } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ChartComponent } from './components/chart/chart.component';

export const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'sales-summary', component: ChartComponent },
];