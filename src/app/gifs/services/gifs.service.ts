import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifsSearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[]=[];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'SjYXXKCb7AtsUxgmOjDGu2wsDC8oFUqg';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('GIFS loaded');
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter((oltTag) => oltTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history'))return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')! );
    if(this._tagsHistory.length===0) return;

    this.searchTag(this._tagsHistory[0]);
  }

  // Esta es la forma rudimentaria de hacer una peticion
  //  async searchTag(tag:string) : Promise<void> {
  //     if (tag.length === 0) return;
  //     this.organizeHistory(tag);

  //     fetch('https://api.giphy.com/v1/gifs/search?api_key=SjYXXKCb7AtsUxgmOjDGu2wsDC8oFUqg&q=valorant&limit=10')
  //       .then(resp => resp.json())
  //       .then(data=> console.log(data));
  //     //this._tagsHistory.unshift(tag);
  //   }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)


    this.http.get<GifsSearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;


      })

    //this._tagsHistory.unshift(tag);
  }

}
