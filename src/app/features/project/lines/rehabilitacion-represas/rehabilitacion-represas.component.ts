import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rehabilitacion-represas',
  templateUrl: './rehabilitacion-represas.component.html',
  styleUrl: './rehabilitacion-represas.component.css'
})
export class RehabilitacionRepresasComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Rehabilitación de infraestructura en represas y sus túneles - Vega y Ortiz S.A.S.');
  }
}
