import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beyonic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showEditModal = false;
  showDeleteModal = false;

  rowToDelete!: string;
  rowToEdit!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteRow(rowId: string) {
    this.rowToDelete = rowId;
    this.showDeleteModal = true;
  }

  handleEditRow(rowId: string) {
    this.rowToEdit = rowId;
    this.showEditModal = true;
  }

  handleRowDeletion() {
    console.log(this.rowToDelete);
    this.showDeleteModal = false;
  }

  handleEditDeletion() {
    console.log(this.rowToEdit);
    this.showEditModal = false;
  }

}
