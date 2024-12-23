import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alquiler-maquinaria-chivor',
  templateUrl: './alquiler-maquinaria-chivor.component.html',
  styleUrl: './alquiler-maquinaria-chivor.component.css'
})
export class AlquilerMaquinariaChivorComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Alquiler Maquinaria Chivor');
  }
}
