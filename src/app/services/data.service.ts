import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableItem } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<TableItem[]>([
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      valueDate: '2022-01-14',
      transactionID: '1480636527',
      movementType: 'Airtime',
      amount: 2000000,
      status: 'Error'
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      valueDate: '2022-01-15',
      transactionID: '1380636587',
      movementType: 'Collection',
      amount: 2000000,
      status: 'Active'
    },
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      valueDate: '2022-01-24',
      transactionID: '1484634587',
      movementType: 'Money Transfer',
      amount: 2000000,
      status: 'Active'
    },
  ]);

  currentData = this.dataSource.asObservable();

  constructor() { }

  updateData(data: TableItem[]) {
    this.dataSource.next(data);
  }

}
