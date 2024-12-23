import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mantenimiento-locativo-colegio-ld',
  templateUrl: './mantenimiento-locativo-colegio-ld.component.html',
  styleUrl: './mantenimiento-locativo-colegio-ld.component.css'
})
export class MantenimientoLocativoColegioLdComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Mantenimiento Locativo Colegio LD');
  }
}
