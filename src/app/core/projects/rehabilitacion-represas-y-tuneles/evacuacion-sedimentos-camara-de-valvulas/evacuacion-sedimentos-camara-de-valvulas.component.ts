import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-evacuacion-sedimentos-camara-de-valvulas',
  templateUrl: './evacuacion-sedimentos-camara-de-valvulas.component.html',
  styleUrl: './evacuacion-sedimentos-camara-de-valvulas.component.css'
})
export class EvacuacionSedimentosCamaraDeValvulasComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Evacuación de Sedimentos Cámara de Válvulas');
  }
}
