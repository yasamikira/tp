import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Vehicule } from '../model/vehicule';

@Injectable()
export class VehiculeService {

  constructor(public http:Http) { 
    console.log("vehicule service ....");
  }
   headers = new Headers({'Content-Type': 'application/json'});
   options = new RequestOptions({headers: this.headers});

  getVehicules(){
    return this.http.get('http://localhost:8080/vehicule/all').map(res => res.json());
  }
  addVehicule(c:Vehicule){
    return this.http.put('http://localhost:8080/vehicule/',c,this.options).map(res => res.json());
  }
  deleteVehicule(id:number){
    return this.http.delete('http://localhost:8080/vehicule/'+id).map(res => res.json());
  }
  updateVehicule(c:Vehicule){
    return this.http.post('http://localhost:8080/vehicule/',c,this.options).map(res => res.json());
  }
  getVehicule(id:number){
    return this.http.get('http://localhost:8080/vehicule/'+id).map(res => res.json());
  }
}

