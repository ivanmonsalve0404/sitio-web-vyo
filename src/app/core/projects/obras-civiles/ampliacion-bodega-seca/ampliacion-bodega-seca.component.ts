import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ampliacion-bodega-seca',
  templateUrl: './ampliacion-bodega-seca.component.html',
  styleUrl: './ampliacion-bodega-seca.component.css'
})
export class AmpliacionBodegaSecaComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Ampliación Bodega Seca');
  }
}
