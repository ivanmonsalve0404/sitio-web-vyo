import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-redes-equipos',
  templateUrl: './redes-equipos.component.html',
  styleUrl: './redes-equipos.component.css'
})
export class RedesEquiposComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Mantenimiento a redes eléctricas, de fibra óptica, equipos generadores de energía a Diésel y motores del sistema contra incendios - Vega y Ortiz S.A.S.');
  }
}
