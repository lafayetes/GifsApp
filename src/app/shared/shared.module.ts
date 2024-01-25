import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  //! Es importante recordar que en el shared module ocupamos los componentes generales y para poder manejarlos en otros modulos es necesario exportarlo
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
