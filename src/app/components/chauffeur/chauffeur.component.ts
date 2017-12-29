import { Component, OnInit } from '@angular/core';
import { Chauffeur } from '../../model/chauffeur';
import { ChauffeurService } from '../../service/chauffeur.service';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

  isEdit:boolean=false;
  showSaveBtn:boolean=false;

  currentC:Chauffeur;
  listC:Chauffeur[];

  constructor(private ChauffeurService:ChauffeurService) { }

  ngOnInit() {
    this.getAllChauffeur();
  }

  setCancelBtn(){
    this.isEdit=false;
    this.showSaveBtn=false;  
  }

  setNewChauffeur(){
    this.showSaveBtn=true;
    this.currentC=new Chauffeur();
  }

  setEditChauffeur(id:number){
    this.isEdit=true;
    this.showSaveBtn=true;
    this.getChauffeurById(id);
  }
  
  getAllChauffeur(){
    this.ChauffeurService.getChauffeurs().subscribe(v=>{
        this.listC=v;
    });
  }
  getChauffeurById(id:number){
    this.ChauffeurService.getChauffeur(id).subscribe(v=>{
        this.currentC=v;
    });
  }
  saveChauffeur(){
    if(this.isEdit)
      this.ChauffeurService.updateChauffeur(this.currentC).subscribe(Chauffeur=>{
        this.currentC=Chauffeur;
        this.getAllChauffeur();
      });
    else
      this.ChauffeurService.addChauffeur(this.currentC).subscribe(Chauffeur=>{
        this.currentC=Chauffeur;
        this.getAllChauffeur();
      });
      this.setCancelBtn();
   }
  setDeleteChauffeur(id:number){
      var r=confirm("Voulez-vous vraiment supprimer cet élément ?");
      console.log(r);
      if(r===true)
        this.ChauffeurService.deleteChauffeur(id).subscribe( Chauffeur =>{
          this.getAllChauffeur();
        });
        
      
    }


}
