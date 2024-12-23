import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catastro',
  templateUrl: './catastro.component.html',
  styleUrl: './catastro.component.css'
})
export class CatastroComponent {
  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Proyectos - Catastro');
  }
}
