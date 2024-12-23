import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mantenimiento-plantas-diesel',
  templateUrl: './mantenimiento-plantas-diesel.component.html',
  styleUrl: './mantenimiento-plantas-diesel.component.css'
})
export class MantenimientoPlantasDieselComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Mantenimiento Plantas Diesel');
  }
}
