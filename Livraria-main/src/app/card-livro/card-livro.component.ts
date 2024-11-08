import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livro } from '../Interface/interface';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  livro: Livro = {
    id: '',
    capa: '',
    titulo: '',
    autor: '',
    paginas: '',
    nota: ''
  }

  @Output() eventoExcluir: EventEmitter<Livro> = new EventEmitter<Livro>();

  @Output() eventoEditar: EventEmitter<string> = new EventEmitter<string>()

  excluirLivro() {
    this.eventoExcluir.emit()
  }

  editarLivro(id: string) {
    debugger
    this.eventoEditar(id)
  }

}
