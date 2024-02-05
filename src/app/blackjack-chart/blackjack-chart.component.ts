import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartOptions, ChartType} from "chart.js";
import {BlackjackGameResult} from "../../models/BlackjackGameResult";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-blackjack-chart',
  templateUrl: './blackjack-chart.component.html',
  styleUrls: ['./blackjack-chart.component.scss']
})
export class BlackjackChartComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective, { static: true }) myChart?: BaseChartDirective;

  @Input() gameResults?: BlackjackGameResult[]
  @Input() startingAmount?: number
  @Input() goal?: number

  constructor() { }

  public lineChartType: ChartType = 'line';

  public data: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Balance',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };
  opts: ChartOptions = {
    responsive: true
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.gameResults && this.startingAmount) {
      const labels: string[] = ['0']
      const balances: number[] = [this.startingAmount]
      this.gameResults?.map((result, index)  => {
        labels.push((index + 1).toString())
        balances.push(result.endBalance)
      })
      this.data.labels = labels
      this.data.datasets[0].data = balances
    }

    if (this.goal) {
      this.opts = {
        responsive: true,
        scales: {
          y: {
            min: 0,
            max: this.goal
          }
        }
      }
    }
    this.myChart?.update(0)
  }
}
