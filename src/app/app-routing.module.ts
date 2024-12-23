import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectComponent } from './features/project/project.component';
import { ObrasCivilesComponent } from './features/project/lines/obras-civiles/obras-civiles.component';
import { MantenimientosLocativosComponent } from './features/project/lines/mantenimientos-locativos/mantenimientos-locativos.component';
import { RehabilitacionRepresasComponent } from './features/project/lines/rehabilitacion-represas/rehabilitacion-represas.component';
import { TopografiaSuministrosComponent } from './features/project/lines/topografia-suministros/topografia-suministros.component';
import { RedesEquiposComponent } from './features/project/lines/redes-equipos/redes-equipos.component';
import { EquiposMaquinariaComponent } from './features/project/lines/equipos-maquinaria/equipos-maquinaria.component';
import { AvisoLegalComponent } from './shared/aviso-legal/aviso-legal.component';
import { PoliticasComponent } from './features/politicas/politicas.component';
import { GaleriaRionegroComponent } from './core/projects/obras-civiles/galeria-rionegro/galeria-rionegro.component';
import { SoleraRionegroComponent } from './core/projects/obras-civiles/solera-rionegro/solera-rionegro.component';
import { ComedorPortatilComponent } from './core/projects/obras-civiles/comedor-portatil/comedor-portatil.component';
import { AmpliacionBodegaSecaComponent } from './core/projects/obras-civiles/ampliacion-bodega-seca/ampliacion-bodega-seca.component';
import { CentroDeAcopioComponent } from './core/projects/obras-civiles/centro-de-acopio/centro-de-acopio.component';
import { CerramientosPerimetralesYLaminasFiltrantesComponent } from './core/projects/obras-civiles/cerramientos-perimetrales-y-laminas-filtrantes/cerramientos-perimetrales-y-laminas-filtrantes.component';
import { RemodelacionZonaBbqComponent } from './core/projects/obras-civiles/remodelacion-zona-bbq/remodelacion-zona-bbq.component';
import { PortalAdministrativoComponent } from './features/portal-administrativo/portal-administrativo.component';
import { MantenimientoLocativoColegioLdComponent } from './core/projects/mantenimientos-locativos/mantenimiento-locativo-colegio-ld/mantenimiento-locativo-colegio-ld.component';
import { EvacuacionSedimentosCamaraDeValvulasComponent } from './core/projects/rehabilitacion-represas-y-tuneles/evacuacion-sedimentos-camara-de-valvulas/evacuacion-sedimentos-camara-de-valvulas.component';
import { LimpiezaSedimentosTunjitaValleComponent } from './core/projects/rehabilitacion-represas-y-tuneles/limpieza-sedimentos-tunjita-valle/limpieza-sedimentos-tunjita-valle.component';
import { LimpiezaSedimentosTunjitaMonteComponent } from './core/projects/rehabilitacion-represas-y-tuneles/limpieza-sedimentos-tunjita-monte/limpieza-sedimentos-tunjita-monte.component';
import { RehabilitacionChivorIComponent } from './core/projects/rehabilitacion-represas-y-tuneles/rehabilitacion-chivor-i/rehabilitacion-chivor-i.component';
import { RehabilitacionChivorIiComponent } from './core/projects/rehabilitacion-represas-y-tuneles/rehabilitacion-chivor-ii/rehabilitacion-chivor-ii.component';
import { BatimetriaComponent } from './core/projects/topografia-suministros/batimetria/batimetria.component';
import { CatastroComponent } from './core/projects/topografia-suministros/catastro/catastro.component';
import { InstalacionRedFibraOpticaComponent } from './core/projects/redes-equipos/instalacion-red-fibra-optica/instalacion-red-fibra-optica.component';
import { MantenimientoPlantasDieselComponent } from './core/projects/redes-equipos/mantenimiento-plantas-diesel/mantenimiento-plantas-diesel.component';
import { AlquilerMaquinariaChivorComponent } from './core/projects/equipos-maquinaria/alquiler-maquinaria-chivor/alquiler-maquinaria-chivor.component';

const routes: Routes = [
  { path: "inicio", component: HomeComponent },
  { path: "proyectos", component: ProjectComponent },
  { path: "documentacion", component: PoliticasComponent },
  { path: "portal-administrativo", component: PortalAdministrativoComponent },

  { path: "proyectos/obras-civiles", component: ObrasCivilesComponent },
  { path: "proyectos/mantenimientos-locativos", component: MantenimientosLocativosComponent },
  { path: "proyectos/rehabilitacion-represas", component: RehabilitacionRepresasComponent },
  { path: "proyectos/topografia-y-suministros", component: TopografiaSuministrosComponent },
  { path: "proyectos/redes-y-equipos", component: RedesEquiposComponent },
  { path: "proyectos/equipos-y-maquinaria", component: EquiposMaquinariaComponent },

  { path: "proyectos/obras-civiles/galeria-rionegro", component: GaleriaRionegroComponent },
  { path: "proyectos/obras-civiles/solera-rionegro", component: SoleraRionegroComponent },
  { path: "proyectos/obras-civiles/comedor-portatil", component: ComedorPortatilComponent },
  { path: "proyectos/obras-civiles/ampliacion-bodega-seca", component: AmpliacionBodegaSecaComponent },
  { path: "proyectos/obras-civiles/centro-de-acopio", component: CentroDeAcopioComponent },
  { path: "proyectos/obras-civiles/cerramientos-perimetrales-y-laminas-filtrantes", component: CerramientosPerimetralesYLaminasFiltrantesComponent },
  { path: "proyectos/obras-civiles/remodelacion-zona-bbq", component: RemodelacionZonaBbqComponent },

  { path: "proyectos/mantenimientos-locativos/mantenimiento-locativo-colegio-ld", component: MantenimientoLocativoColegioLdComponent },
  
  { path: "proyectos/rehabilitacion-represas-y-tuneles/evacuacion-sedimentos-camara-de-valvulas", component: EvacuacionSedimentosCamaraDeValvulasComponent },
  { path: "proyectos/rehabilitacion-represas-y-tuneles/limpieza-sedimentos-tunjita-valle", component: LimpiezaSedimentosTunjitaValleComponent },
  { path: "proyectos/rehabilitacion-represas-y-tuneles/limpieza-sedimentos-tunjita-monte", component: LimpiezaSedimentosTunjitaMonteComponent },
  { path: "proyectos/rehabilitacion-represas-y-tuneles/rehabilitacion-chivor-i", component: RehabilitacionChivorIComponent },
  { path: "proyectos/rehabilitacion-represas-y-tuneles/rehabilitacion-chivor-ii", component: RehabilitacionChivorIiComponent },

  { path: "proyectos/topografia-suministros/batimetria", component: BatimetriaComponent },
  { path: "proyectos/topografia-suministros/catastro", component: CatastroComponent },

  { path: "proyectos/redes-equipos/instalacion-red-fibra-optica", component: InstalacionRedFibraOpticaComponent },
  { path: "proyectos/redes-equipos/mantenimiento-plantas-diesel", component: MantenimientoPlantasDieselComponent },

  { path: "proyectos/equipos-maquinaria/alquiler-maquinaria-chivor", component: AlquilerMaquinariaChivorComponent },


  { path: "aviso-legal", component: AvisoLegalComponent },

  /**Rutas obligatorias */
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
