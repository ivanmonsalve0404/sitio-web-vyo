import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rehabilitacion-chivor-ii',
  templateUrl: './rehabilitacion-chivor-ii.component.html',
  styleUrl: './rehabilitacion-chivor-ii.component.css'
})
export class RehabilitacionChivorIiComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Rehabilitación Chivor II');
  }
}
