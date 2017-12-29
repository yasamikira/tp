import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Groupe } from '../model/groupe';

@Injectable()
export class GroupeService {

  constructor(public http:Http) { 
    console.log("groupe service ....");
  }
   headers = new Headers({'Content-Type': 'application/json'});
   options = new RequestOptions({headers: this.headers});

  getGroupes(){
    return this.http.get('http://localhost:8080/groupe/all').map(res => res.json());
  }
  addGroupe(c:Groupe){
    return this.http.put('http://localhost:8080/groupe/',c,this.options).map(res => res.json());
  }
  deleteGroupe(id:number){
    return this.http.delete('http://localhost:8080/groupe/'+id).map(res => res.json());
  }
  updateGroupe(c:Groupe){
    return this.http.post('http://localhost:8080/groupe/',c,this.options).map(res => res.json());
  }
  getGroupe(id:number){
    return this.http.get('http://localhost:8080/groupe/'+id).map(res => res.json());
  }
}

