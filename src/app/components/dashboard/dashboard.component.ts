import { Component } from '@angular/core';
import { IfElse, Orders, Users } from '../IfElse';
import * as Highcharts from 'highcharts';
import { IfelseService } from 'src/app/services/ifelse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  //standalone: true,
})
export class DashboardComponent {

  ifElse1: IfElse[] = [];
  users: Users[] = [];
  orders:Orders[] = [];
  ifElse:any;
  errorMessage="";
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  data = [1, 2, 3, 4];

  highcharts = Highcharts;
  


  chartOptions1: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      
        
      },
      
      
    ],
  }

  chartOptions2: Highcharts.Options = {
    series: [
      {
        type: 'bar',
        data: this.data,
      
        
      },
      
      
      
    ],
  }
  

  
  chartOptions3: Highcharts.Options = {
    series: [
      {
        type: 'column',
        data: this.data,
      
        
      },
      
      
      
    ],
  }




  
  constructor(private ifelseService: IfelseService) {}
  ngOnInit() {
    this.ifElse = this.ifelseService.getAll().subscribe(
      ifelsedata=> {
        this.ifElse = ifelsedata;
        this.ifElse1 = this.ifElse.top_cards;
        this.users = this.ifElse.new_users;
        this.orders = this.ifElse.recent_orders;

        //console.log(this.users)
      },

     

      error => {
        this.errorMessage = error;
      }
    );
  }

  onClick(customer:any,product:any)
  {
    alert('Customer: ' + customer + '\n '+'Product' + product)
  }

  
}
