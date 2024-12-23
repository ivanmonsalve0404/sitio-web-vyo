import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-galeria-rionegro',
  templateUrl: './galeria-rionegro.component.html',
  styleUrl: './galeria-rionegro.component.css'
})
export class GaleriaRionegroComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Galeria PCH Rionegro');
  }
}
