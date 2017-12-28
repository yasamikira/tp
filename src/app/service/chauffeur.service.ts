import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { Chauffeur } from '../model/chauffeur';

@Injectable()
export class ChauffeurService {

  constructor(public http:Http) { 
    console.log("chauffeur service ....");
  }
   headers = new Headers({'Content-Type': 'application/json'});
   options = new RequestOptions({headers: this.headers});

  getChauffeurs(){
    return this.http.get('http://localhost:8080/chauffeur/all');//.map(res => res.json());
  }
  addChauffeur(c:Chauffeur){
    return this.http.put('http://localhost:8080/chauffeur/',c,this.options);//.map(res => res.json());
  }
  deleteChauffeur(id:string){
    return this.http.delete('http://localhost:8080/chauffeur/'+id);//.map(res => res.json());
  }
  updateChauffeur(c:Chauffeur){
    return this.http.post('http://localhost:8080/chauffeur/',c,this.options);//.map(res => res.json());
  }
  getChauffeur(id:string){
    return this.http.get('http://localhost:8080/chauffeur/'+id);//.map(res => res.json());
  }
}

