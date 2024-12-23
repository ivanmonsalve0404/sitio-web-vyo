import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mantenimientos-locativos',
  templateUrl: './mantenimientos-locativos.component.html',
  styleUrl: './mantenimientos-locativos.component.css'
})
export class MantenimientosLocativosComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Mantenimientos locativos - Vega y Ortiz S.A.S.');
  }
}
