import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(private titleService: Title) {

  } 
  
  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Vega y Ortiz S.A.S.');
  }
}
