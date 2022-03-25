import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'beyonic-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<string>();
  @Output() editConfirmation = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
