import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-batimetria',
  templateUrl: './batimetria.component.html',
  styleUrl: './batimetria.component.css'
})
export class BatimetriaComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Batimetría');
  }
}
