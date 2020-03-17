import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction/transaction.component';
import { GridModule, ButtonModule } from 'carbon-components-angular';


@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    GridModule,
    ButtonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
