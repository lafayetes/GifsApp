import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  //! Es importante recordar que en el shared module ocupamos los componentes generales y para poder manejarlos en otros modulos es necesario exportarlo
  exports:[
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
