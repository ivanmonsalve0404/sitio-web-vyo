import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-obras-civiles',
  templateUrl: './obras-civiles.component.html',
  styleUrl: './obras-civiles.component.css'
})
export class ObrasCivilesComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Obras civiles, cimentación y remodelación de edificaciones - Vega y Ortiz S.A.S.');
  }
}
