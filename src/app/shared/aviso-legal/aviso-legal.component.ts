import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.css'
})
export class AvisoLegalComponent {
  constructor(private titleService: Title) {

  } 
  
  ngOnInit(): void {
    this.titleService.setTitle('Aviso legal y políticas - Vega y Ortiz S.A.S.');
  }
}
