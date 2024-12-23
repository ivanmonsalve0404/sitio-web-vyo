import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-solera-rionegro',
  templateUrl: './solera-rionegro.component.html',
  styleUrl: './solera-rionegro.component.css'
})
export class SoleraRionegroComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Solera PCH Rionegro');
  }
}
