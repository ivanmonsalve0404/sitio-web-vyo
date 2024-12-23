import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionServiceComponent } from './shared/accordion-service/accordion-service.component';
import { CompanyProfileComponent } from './shared/company-profile/company-profile.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ContactFormComponent } from './core/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './features/project/project.component';
import { ObrasCivilesComponent } from './features/project/lines/obras-civiles/obras-civiles.component';
import { MantenimientosLocativosComponent } from './features/project/lines/mantenimientos-locativos/mantenimientos-locativos.component';
import { RehabilitacionRepresasComponent } from './features/project/lines/rehabilitacion-represas/rehabilitacion-represas.component';
import { AvisoLegalComponent } from './shared/aviso-legal/aviso-legal.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { EquiposMaquinariaComponent } from './features/project/lines/equipos-maquinaria/equipos-maquinaria.component';
import { RedesEquiposComponent } from './features/project/lines/redes-equipos/redes-equipos.component';
import { TopografiaSuministrosComponent } from './features/project/lines/topografia-suministros/topografia-suministros.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccordionServiceComponent,
    CompanyProfileComponent,
    ContactFormComponent,
    ProjectComponent,
    ObrasCivilesComponent,
    MantenimientosLocativosComponent,
    RehabilitacionRepresasComponent,
    AvisoLegalComponent,
    BackButtonComponent,
    EquiposMaquinariaComponent,
    RedesEquiposComponent,
    TopografiaSuministrosComponent,
    PoliticasComponent,
    GaleriaRionegroComponent,
    SoleraRionegroComponent,
    ComedorPortatilComponent,
    AmpliacionBodegaSecaComponent,
    CentroDeAcopioComponent,
    CerramientosPerimetralesYLaminasFiltrantesComponent,
    RemodelacionZonaBbqComponent,
    PortalAdministrativoComponent,
    MantenimientoLocativoColegioLdComponent,
    EvacuacionSedimentosCamaraDeValvulasComponent,
    LimpiezaSedimentosTunjitaValleComponent,
    LimpiezaSedimentosTunjitaMonteComponent,
    RehabilitacionChivorIComponent,
    RehabilitacionChivorIiComponent,
    BatimetriaComponent,
    CatastroComponent,
    InstalacionRedFibraOpticaComponent,
    MantenimientoPlantasDieselComponent,
    AlquilerMaquinariaChivorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    Title,
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
