import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})

//Datos importantes: En html para poner una referencia y asi no llamar si es que no fuese necesario el formModule de angular  se puede referencia un input con el simbolo de # y asi obtener el value:
// (keyup.enter)="searchTag(txtTagInput.value)"  ==> Datazo en angular puedes utilizar el keyup.enter para que ejecute una accion cuando se apriete enter
// Ese txtTagInput viene siendo la referencia que se coloca en el html
export class SearchBoxComponent {
  constructor(private gifsService:GifsService) { }
  // esta es la manera sin  utilizar el view Child
  // searchTag(newTag:string){
    //   console.log({newTag});

    // }
    //Esta es la manera con viewChild
    @ViewChild('txtTagInput')
    public tagInput!:ElementRef<HTMLInputElement>;
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value ='';

    console.log({newTag});

  }
}
