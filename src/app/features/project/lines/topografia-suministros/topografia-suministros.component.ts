import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-topografia-suministros',
  templateUrl: './topografia-suministros.component.html',
  styleUrl: './topografia-suministros.component.css'
})
export class TopografiaSuministrosComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Servicios de topografía y suministros industriales - Vega y Ortiz S.A.S.');
  }
}
