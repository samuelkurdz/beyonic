import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      valueDate: 'string',
      transactionID: 'string',
      movementType: 'string',
      amount: 2000000,
      status: 'Active'
    },
  ];

  @Output() triggerDeleteRow = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
