import { Component, OnInit } from '@angular/core';
import { TableItem } from 'src/app/interfaces';

@Component({
  selector: 'beyonic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableHeaders: string[] = ['Value Date', 'Transaction ID', 'Movement type', 'Amount', 'Status', 'Action'];

  tableValues: TableItem[] = [
    {
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
    {
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
    {
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
