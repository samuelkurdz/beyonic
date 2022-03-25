import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableItem } from 'src/app/interfaces';

@Component({
  selector: 'beyonic-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Input() tableRow!: TableItem;
  @Output() closeModal = new EventEmitter<string>();
  @Output() editConfirmation = new EventEmitter<TableItem>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.tableRow);
  }

  submitEditForm(form: NgForm) {

    if (form.invalid) {
      alert('form is invalid');
      return;
    }
    const updateData: TableItem = {
      ...this.tableRow, ...form.value
    }
    this.editConfirmation.emit(updateData);
  }

}
