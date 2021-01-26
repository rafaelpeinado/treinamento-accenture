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

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
