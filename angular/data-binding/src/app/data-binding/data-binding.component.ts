import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.training';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  nomeDoCurso = 'Angular';
  valorInicial = 15;

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): any {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent): any {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor: string): any {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): any {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento): any {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
