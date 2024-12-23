import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-equipos-maquinaria',
  templateUrl: './equipos-maquinaria.component.html',
  styleUrl: './equipos-maquinaria.component.css'
})
export class EquiposMaquinariaComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Logística para movilización y gestión de alquiler de equipos y maquinaria pesada - Vega y Ortiz S.A.S.');
  }
}
