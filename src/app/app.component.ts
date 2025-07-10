import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChartComponent } from "./components/chart/chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seller-transactions-front';
}
