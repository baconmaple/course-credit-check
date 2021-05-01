import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CreditService } from './../services/credit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  CreditInfo = null


  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredit()
  }

  getCredit() {
    this.creditService.creditChecking('60010105').subscribe({
      next: response => {
        console.log(response)
        this.CreditInfo = response
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
