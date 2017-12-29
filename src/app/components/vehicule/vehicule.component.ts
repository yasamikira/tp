import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../../service/vehicule.service'
import { Vehicule } from '../../model/vehicule';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  isEdit:boolean=false;
  showSaveBtn:boolean=false;

  currentV:Vehicule;
  listV:Vehicule[];

  constructor(private vehiculeService:VehiculeService) { }

  ngOnInit() {
    this.getAllVehicule();
  }

  setCancelBtn(){
    this.isEdit=false;
    this.showSaveBtn=false;  
  }

  setNewVehicule(){
    this.showSaveBtn=true;
    this.currentV=new Vehicule();
  }

  setEditVehicule(id:number){
    this.isEdit=true;
    this.showSaveBtn=true;
    this.getVehiculeById(id);
  }
  
  getAllVehicule(){
    this.vehiculeService.getVehicules().subscribe(v=>{
        this.listV=v;
    });
  }
  getVehiculeById(id:number){
    this.vehiculeService.getVehicule(id).subscribe(v=>{
        this.currentV=v;
    });
  }
  saveVehicule(){
    if(this.isEdit)
      this.vehiculeService.updateVehicule(this.currentV).subscribe(Vehicule=>{
        this.currentV=Vehicule;
        this.getAllVehicule();
      });
    else
      this.vehiculeService.addVehicule(this.currentV).subscribe(Vehicule=>{
        this.currentV=Vehicule;
        this.getAllVehicule();
      });
      this.setCancelBtn();
   }
  setDeleteVehicule(id:number){
      var r=confirm("Voulez-vous vraiment supprimer cet élément ?");
      console.log(r);
      if(r===true)
        this.vehiculeService.deleteVehicule(id).subscribe( Vehicule =>{
          this.getAllVehicule();
        });
        
      
    }


}
