import { SelectedTag } from './../models/selected-tag.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class GetQuotesService {

  // alternative for cors:
  // 1 - https://crossorigin.me/
  // 2 - https://cors-anywhere.herokuapp.com/

  baseUrl: string = "https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/";
  rdmQuote: string = "random/quote";
  tag: string = "tag";
  findQuote: string = "search/quote?query=";

  // share data
  private bs = new BehaviorSubject<SelectedTag[]>([]);
  currentBs = this.bs.asObservable();
  
  constructor(private _http: HttpClient) {}

  shareBs(tagData){
    this.bs.next(tagData);
  }

  getRdmQuote() {
    return this._http.get(this.baseUrl + this.rdmQuote);
  }

  getTagsService(){
    return this._http.get(this.baseUrl + this.tag);
  }

  searchThisTagService(val){
    return this._http.get(this.baseUrl + this.tag + "/" + val);
  }

  findQuoteService(val){
    return this._http.get(this.baseUrl + this.findQuote + val);
  }
  
}
