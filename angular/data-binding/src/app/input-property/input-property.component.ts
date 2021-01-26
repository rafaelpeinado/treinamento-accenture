import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: ['nomeCurso'] // outra forma de usar o @Input
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  // @Input('nome') o 'nome' é opcional. Se não for colocado
  // será o nome do input será o mesmo da variável
  @Input('nome') nomeCurso = '';

  constructor() { }

  ngOnInit(): void {
  }

}
