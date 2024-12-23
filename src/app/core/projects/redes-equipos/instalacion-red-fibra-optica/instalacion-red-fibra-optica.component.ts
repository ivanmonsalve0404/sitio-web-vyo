import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-instalacion-red-fibra-optica',
  templateUrl: './instalacion-red-fibra-optica.component.html',
  styleUrl: './instalacion-red-fibra-optica.component.css'
})
export class InstalacionRedFibraOpticaComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Instalación Red Fibra Óptica');
  }
}
