import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { TableItem } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'beyonic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  showEditModal = false;
  showDeleteModal = false;

  rowToDelete!: string;
  rowToEdit!: TableItem;

  tableValues: TableItem[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataStorage: DataService
  ) { }

  ngOnInit(): void {

    this.dataStorage.currentData
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (rows) => this.tableValues = rows,
    });

  }

  handleDeleteRow(rowId: string) {
    this.rowToDelete = rowId;
    this.showDeleteModal = true;
  }

  handleEditRow(rowId: TableItem) {
    this.rowToEdit = {...rowId};
    this.showEditModal = true;
  }

  handleRowDeletion() {
    const rows = this.tableValues.filter(row => row.id !== this.rowToDelete);
    this.dataStorage.updateData(rows);
    this.showDeleteModal = false;
  }

  handleRowUpdate(updateInfo: TableItem) {
    console.log(this.rowToEdit, this.tableValues);
    const rows = this.tableValues.map(row => row.id === updateInfo.id ? updateInfo : row);


    this.dataStorage.updateData(rows);
    this.showEditModal = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  

}
