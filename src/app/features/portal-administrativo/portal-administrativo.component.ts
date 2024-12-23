import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portal-administrativo',
  templateUrl: './portal-administrativo.component.html',
  styleUrl: './portal-administrativo.component.css'
})
export class PortalAdministrativoComponent {
  constructor(private titleService: Title) {

  } 
  
  ngOnInit(): void {
    this.titleService.setTitle('Portal Administrativo - Vega y Ortiz S.A.S.');
  }
}
