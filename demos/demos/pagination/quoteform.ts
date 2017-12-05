import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quoteform',
  template: `
    <input type="text" (keyup.enter)="submission.emit(quote)" [(ngModel)]="quote" />
  `
})
export default class QuoteForm {
  @Input() quote: string = ''
  @Output() submission = new EventEmitter<string>()
}