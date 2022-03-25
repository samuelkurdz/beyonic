import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'beyonic-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter<string>();
  @Output() deleteConfirmation = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
