import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-limpieza-sedimentos-tunjita-valle',
  templateUrl: './limpieza-sedimentos-tunjita-valle.component.html',
  styleUrl: './limpieza-sedimentos-tunjita-valle.component.css'
})
export class LimpiezaSedimentosTunjitaValleComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Limpieza de Sedimentos Tunjita Valle');
  }
}
