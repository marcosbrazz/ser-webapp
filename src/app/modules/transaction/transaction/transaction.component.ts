import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, group, animate, query } from '@angular/animations';
import { ExpenseService } from 'src/app/shared/services/expense.service';

@Component({
  selector: 'sknet-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  animations: [
    trigger('sideContentAnimation', [
      transition(':enter', [
        // we set the width of the outer container to 0, and hide the
        // overflow (so the inner container won't be visible)
        style({ width: '0px', overflow: 'hidden' }),
        group([
          // we animate the outer container width to it's original value
          animate('250ms ease-out', style({ width: '!' })),
          // in the same time we translate the inner element all the
          // way from left to right
          query('.row', [
            style({ transform: 'translateX(-110%)' }),
            group([animate('250ms ease-out', style({ transform: 'translateX(-0%)' }))]),
          ]),
        ]),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        group([
          animate('250ms ease-out', style({ width: '0' })),
          query('.row', [
            style({ transform: 'translateX(-0%)' }),
            group([animate('250ms ease-out', style({ transform: 'translateX(-110%)' }))]),
          ]),
        ]),
      ]),
    ])
  ]
})
export class TransactionComponent implements OnInit {

  onReview;
  expenses: Array<any>;
  
  constructor(private expService: ExpenseService) { 
  }

  ngOnInit() {
    this.expService.get().subscribe(
      (result) => {
        this.expenses = result;
        this.onReview = this.expenses.pop();
      },
      (error) => console.log(error)
    );
  }

  next() {
    this.onReview = this.expenses.pop();
  }

}
