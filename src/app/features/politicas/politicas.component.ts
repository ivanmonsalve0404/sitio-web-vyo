import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface PDFDocument {
  title: string;
  description: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {
  @Input() documents: PDFDocument[] = [
    {
      title: 'Certificación ISO 9001:2015 - ISO 14001:2015 - ISO 45001:2018',
      description: 'Estándares para calidad, ambiente y seguridad ocupacional.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política de Sistema de Gestión Integrado',
      description: 'Directrices para integrar calidad, ambiente y seguridad.',
      pdfUrl: 'https://drive.google.com/file/d/1cw6JskNtPyX6DL20F2uXmc48P6W7WIFr/view?usp=sharing'
    },
    {
      title: 'Política de No Alcohol, Drogas y Tabaquismo',
      description: 'Compromiso con un entorno laboral seguro y saludable.',
      pdfUrl: '/assets/documentos/presentacion-estrategica.pdf'
    },
    {
      title: 'Política de Seguridad Vial',
      description: 'Medidas para garantizar la seguridad en desplazamientos laborales.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política de Prevención Acoso Laboral',
      description: 'Compromiso con un ambiente laboral respetuoso y libre de acoso.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política de Desconexión Laboral',
      description: 'Garantía del derecho a desconectarse fuera del horario laboral.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política de Protección de Datos Personales',
      description: 'Normas para manejar y proteger datos personales.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política para Empleados de corta duración',
      description: 'Lineamientos para empleados contratados por períodos breves.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    },
    {
      title: 'Política de Derechos Humanos',
      description: 'Compromiso con el respeto y promoción de los derechos humanos.',
      pdfUrl: '/assets/documentos/manual-procedimientos.pdf'
    }
  ];

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Certificación y Políticas - Vega y Ortiz S.A.S.');
  }
}
