import { Component, OnInit } from '@angular/core';
import { Groupe } from '../../model/groupe';
import { GroupeService } from '../../service/groupe.service'

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  isEdit:boolean=false;
  showSaveBtn:boolean=false;

  currentG:Groupe;
  listG:Groupe[];

  constructor(private GroupeService:GroupeService) { }

  ngOnInit() {
    this.getAllGroupe();
  }

  setCancelBtn(){
    this.isEdit=false;
    this.showSaveBtn=false;  
  }

  setNewGroupe(){
    this.showSaveBtn=true;
    this.currentG=new Groupe();
  }

  setEditGroupe(id:number){
    this.isEdit=true;
    this.showSaveBtn=true;
    this.getGroupeById(id);
  }
  
  getAllGroupe(){
    this.GroupeService.getGroupes().subscribe(v=>{
        this.listG=v;
    });
  }
  getGroupeById(id:number){
    this.GroupeService.getGroupe(id).subscribe(v=>{
        this.currentG=v;
    });
  }
  saveGroupe(){
    if(this.isEdit)
      this.GroupeService.updateGroupe(this.currentG).subscribe(Groupe=>{
        this.currentG=Groupe;
        this.getAllGroupe();
      });
    else
      this.GroupeService.addGroupe(this.currentG).subscribe(Groupe=>{
        this.currentG=Groupe;
        this.getAllGroupe();
      });
      this.setCancelBtn();
   }
  setDeleteGroupe(id:number){
      var r=confirm("Voulez-vous vraiment supprimer cet élément ?");
      console.log(r);
      if(r===true)
        this.GroupeService.deleteGroupe(id).subscribe( Groupe =>{
          this.getAllGroupe();
        });
        
      
    }


}
