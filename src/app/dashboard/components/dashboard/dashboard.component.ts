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

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteRow(rowId: string) {
    this.rowToDelete = rowId;
    this.showDeleteModal = true;
  }

  handleRowDeletion() {
    console.log(this.rowToDelete);
    this.showDeleteModal = false;
  }

}
