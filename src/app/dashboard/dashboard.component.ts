import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Labels pour le graphique
  public doughnutChartLabels: string[] = ['Crédits Accordés', 'Crédits Refusés'];
  // Données factices (par exemple : 70% accordés, 30% refusés)
  public doughnutChartData: number[] = [70, 30];
  public doughnutChartType: string = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

}
