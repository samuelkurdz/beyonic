import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TableItem } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'beyonic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableHeaders: string[] = ['Value Date', 'Transaction ID', 'Movement type', 'Amount', 'Status', 'Action'];

  tableValues!: Observable<TableItem[]>;

  @Output() triggerDeleteRow = new EventEmitter<string>();
  @Output() triggerEditRow = new EventEmitter<TableItem>();

  constructor(
    private dataStorage: DataService
  ) { }

  ngOnInit(): void {
    this.tableValues = this.dataStorage.currentData;
  }

}
