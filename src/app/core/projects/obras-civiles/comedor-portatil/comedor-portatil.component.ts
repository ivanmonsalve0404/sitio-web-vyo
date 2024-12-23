import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comedor-portatil',
  templateUrl: './comedor-portatil.component.html',
  styleUrl: './comedor-portatil.component.css'
})
export class ComedorPortatilComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Comedor Portatil');
  }
}
