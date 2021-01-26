import {Component, Input, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): void {
    /*console.log(this.campoValorInput.nativeElement.value);
    this.valor++;*/
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar(): void {
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
  }
}
