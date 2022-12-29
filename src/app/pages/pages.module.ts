import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DadoComponent } from './components/dado/dado.component';

@NgModule({
  declarations: [HomeComponent, DadoComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class PagesModule {}
