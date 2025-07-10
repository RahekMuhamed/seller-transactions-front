import { Component } from '@angular/core';
import { SalesSummaryService } from '../../services/sales-summary.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

interface SalesDay {
  date: string;
  total_income: number;
  seller_id: string;
  seller_name: string;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  sellerId: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Total Income',
        fill: true,
        tension: 0.3,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.1)'
      }
    ]
  };

  chartType: ChartType = 'line';
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };

  constructor(private summaryService: SalesSummaryService) {}

  loadChart() {
    if (!this.sellerId) return;

    this.loading = true;
    this.errorMessage = '';
    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];

    this.summaryService.getSalesSummary(this.sellerId).subscribe({
      next: (res: any) => {
        const days: SalesDay[] = res.data?.days || [];

        this.chartData.labels = days.map(day => day.date);
        this.chartData.datasets[0].data = days.map(day => day.total_income);

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading sales summary:', err);
        this.errorMessage = 'Failed to load sales summary. Please try again.';
        this.loading = false;
      }
    });
  }
}