import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-accordion-service",
  templateUrl: "./accordion-service.component.html",
  styleUrls: ["./accordion-service.component.css"],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('out', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden',
        padding: '0'
      })),
      transition('in <=> out', [
        animate('200ms ease-in-out')
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void <=> *', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class AccordionServiceComponent implements OnInit {
  selectedIndex: number | null = null;
  activeStates: boolean[] = [];
  defaultImage = {
    imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/c_fill,w_750,h_500,g_auto/v1728444315/RCI_56_obvfgv_rzcoqh.jpg",
    imageTitle: "Nuestros Servicios",
    imageDescription: "Conoce nuestra gama completa de servicios profesionales"
  };

  accordionItems = [
    {
      title: "Obras civiles, cimentación y remodelación de edificaciones",
      content: "Diseñamos y construimos proyectos de obras civiles de alta calidad, abarcando cimentación profunda y superficial, así como remodelación de edificaciones residenciales, comerciales e industriales. Utilizamos materiales de última generación y aplicamos técnicas de ingeniería innovadoras para garantizar estructuras seguras y duraderas.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731545493/file_5_fbbxus.jpg",
      imageTitle: "Remodelación Colegio Leonardo DaVinci",
      imageDescription: "Obras civiles, cimentación y remodelación de edificaciones."
    },
    {
      title: "Mantenimientos locativos",
      content: "Brindamos servicios especializados de mantenimiento locativo para empresas, instituciones y hogares. Nos encargamos de reparaciones, refuerzos estructurales, acabados y adecuaciones, garantizando espacios funcionales y estéticos.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731545582/file_6_emk39b.jpg",
      imageTitle: "Mantenimiento Colegio Leonardo DaVinci",
      imageDescription: "Mantenimientos Locativos."
    },
    {
      title: "Rehabilitación de infraestructura en represas y sus túneles",
      content: "Expertos en rehabilitación de represas y túneles, ofrecemos soluciones que prolongan la vida útil de la infraestructura hidráulica. Realizamos reparaciones estructurales, impermeabilización y mantenimiento correctivo con tecnología avanzada para asegurar un funcionamiento eficiente y seguro de estos sistemas críticos.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731545703/file_7_rvi8cg.jpg",
      imageTitle: "Rehabilitación del túnel superior de la conducción I y II, de la Central Hidroeléctrica Chivor",
      imageDescription: "Rehabilitación de infraestructura en represas y sus túneles."
    },
    {
      title: "Servicios de topografía y suministros industriales",
      content: "Ofrecemos servicios de topografía precisa y suministro de equipos industriales para el desarrollo de proyectos de construcción y obra civil. Contamos con tecnología de punta para levantamientos topográficos, replanteos y monitoreo, así como una amplia gama de suministros industriales para garantizar la calidad de cada proyecto.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731545209/file_3_xpunwn.jpg",
      imageTitle: "Batimetría y Catastro | Central Hidroeléctrica Chivor",
      imageDescription: "Servicios de topografía y suministros industriales."
    },
    {
      title: "Mantenimiento a redes eléctricas, de ﬁbra óptica, equipos generadores de energía a Diésel y motores del sistema contra incendios",
      content: "Realizamos mantenimiento integral de redes eléctricas y de fibra óptica, así como de equipos generadores Diésel y motores de sistemas contra incendios. Nuestros servicios garantizan continuidad operativa, eficiencia energética y seguridad en infraestructuras críticas industriales y comerciales.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731545439/file_4_bvjonb.jpg",
      imageTitle: "Instalación de Red de Fibra Óptica | Casa de Máquinas - Central Hidroeléctrica Chivor",
      imageDescription: "Mantenimiento a redes eléctricas, de ﬁbra óptica, equipos generadores de energía a Diésel y motores del sistema contra incendios."
    },
    {
      title: "Logística para movilización y gestión de alquiler de equipos y maquinaria pesada",
      content: "Optimiza tus proyectos con nuestros servicios de logística y alquiler de maquinaria pesada. Ofrecemos transporte, gestión de equipos especializados y asesoría para maximizar la eficiencia en obras civiles e industriales. Contamos con maquinaria moderna y personal experto para garantizar un servicio confiable y puntual.",
      imageUrl: "https://res.cloudinary.com/dyjf6o0iw/image/upload/v1731544614/file_2_b76udf.jpg",
      imageTitle: "Suministro de Maquinaria Pesada y Equipos",
      imageDescription: "Logística para movilización y gestión de alquiler de equipos y maquinaria pesada."
    }
  ];

  constructor() {
    this.activeStates = new Array(this.accordionItems.length).fill(false);
  }

  ngOnInit(): void { }

  toggleAccordion(index: number): void {
    if (this.activeStates[index]) {
      this.activeStates[index] = false;
      this.selectedIndex = null;
    } else {
      this.activeStates = this.activeStates.map(() => false);
      this.activeStates[index] = true;
      this.selectedIndex = index;
    }
  }

  isActive(index: number): boolean {
    return this.activeStates[index];
  }

  getShadowClass(index: number | null): string {
    if (index === null) {
      return '';
    }
    return `shadow-${index + 1}`;
  }

  getCurrentImage() {
    return this.selectedIndex !== null
      ? this.accordionItems[this.selectedIndex]
      : this.defaultImage;
  }
}