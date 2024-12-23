import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-centro-de-acopio',
  templateUrl: './centro-de-acopio.component.html',
  styleUrl: './centro-de-acopio.component.css'
})
export class CentroDeAcopioComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Centro de Acopio');
  }
}
