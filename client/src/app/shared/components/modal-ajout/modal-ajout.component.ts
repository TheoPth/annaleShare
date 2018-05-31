import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal-ajout',
  templateUrl: './modal-ajout.component.html',
  styleUrls: ['./modal-ajout.component.css']
})
export class ModalAjoutComponent implements OnInit {
  @Input() idReason : string;
  @Input() placeHolder? : string;
  @Input() title: string;
  @Output() pickedEvent: EventEmitter<string> = new EventEmitter<string>();
  public nomAjout: string;
  constructor() { }

  ngOnInit() {
    this.placeHolder = "";
  }

  emitPick(): void {
    this.pickedEvent.emit(this.nomAjout);
  }

}
