import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): any {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar(): any {
    this.valor--;
  }
}
