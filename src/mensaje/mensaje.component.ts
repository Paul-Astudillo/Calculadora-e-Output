import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {
  @Input() name = 'Paul Mensaje';

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() {}

  ngOnInit() {}
}
