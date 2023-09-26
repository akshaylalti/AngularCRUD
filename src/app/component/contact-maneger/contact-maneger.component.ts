import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/model/IContact';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-contact-maneger',
  templateUrl: './contact-maneger.component.html',
  styleUrls: ['./contact-maneger.component.css']
})
export class ContactManegerComponent implements OnInit {
  public loading:boolean = false;
  public contacts: IContact[] =[];
  public errorMessage:string | null =null;
  constructor( private serviceService:ServiceService) { }

  ngOnInit(): void {
   this.getAllContactFromServer();
  }

  public getAllContactFromServer(){
    this.loading = true;
    this.serviceService.getAllContact().subscribe((data:IContact[])=>{
      this.contacts=data;
      this.loading =false;
    },(error)=>{
      this.errorMessage = error;
      this.loading = false;
    });
  }
  deleteData(contactId:string){
    if(contactId){
      this.serviceService.deleteContact(contactId).subscribe((data:{})=>{
        this.getAllContactFromServer();
      },(error)=>{
        this.errorMessage=error;
      })
    }
  }
}
