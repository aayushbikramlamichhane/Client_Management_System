import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string= '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick(){
    this.onBtnClick.emit('admin');
  }
}
