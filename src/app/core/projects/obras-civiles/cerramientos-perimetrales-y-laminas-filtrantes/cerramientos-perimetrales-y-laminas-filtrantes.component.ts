import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cerramientos-perimetrales-y-laminas-filtrantes',
  templateUrl: './cerramientos-perimetrales-y-laminas-filtrantes.component.html',
  styleUrl: './cerramientos-perimetrales-y-laminas-filtrantes.component.css'
})
export class CerramientosPerimetralesYLaminasFiltrantesComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Cerramientos Perimetrales y láminas filtrantes');
  }
}
