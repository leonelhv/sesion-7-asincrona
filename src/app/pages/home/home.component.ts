import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dado: number = 0;
  lista: number[] = [1, 2, 3, 4, 5, 6];
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
}
