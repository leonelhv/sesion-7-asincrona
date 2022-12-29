import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
})
export class DadoComponent {
  dado: number = 0;
  prevUsado: number = 0;
  lanzar() {
    const numero = this.numeroRandom();
    if (numero === this.prevUsado) {
      this.lanzar();
    }
    this.prevUsado = numero;
    this.dado = numero;
  }
  numeroRandom(): number {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }
  reiniciar() {
    this.dado = 0;
    this.prevUsado = 0;
  }
}
