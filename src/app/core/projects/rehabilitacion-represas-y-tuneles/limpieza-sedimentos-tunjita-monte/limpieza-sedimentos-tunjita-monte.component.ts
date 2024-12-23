import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-limpieza-sedimentos-tunjita-monte',
  templateUrl: './limpieza-sedimentos-tunjita-monte.component.html',
  styleUrl: './limpieza-sedimentos-tunjita-monte.component.css'
})
export class LimpiezaSedimentosTunjitaMonteComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Limpieza de Sedimentos Tunjita Monte');
  }
}
