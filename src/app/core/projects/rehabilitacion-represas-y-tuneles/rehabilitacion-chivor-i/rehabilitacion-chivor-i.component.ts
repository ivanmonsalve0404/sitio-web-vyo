import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rehabilitacion-chivor-i',
  templateUrl: './rehabilitacion-chivor-i.component.html',
  styleUrl: './rehabilitacion-chivor-i.component.css'
})
export class RehabilitacionChivorIComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Rehabilitación Chivor I');
  }
}
