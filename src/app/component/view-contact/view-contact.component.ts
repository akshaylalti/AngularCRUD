import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IContact } from 'src/app/model/IContact';
import { IGroup } from 'src/app/model/IGroup';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  public loading:boolean = false;
  public contactId: string | null = null;
  public contact:IContact = {} as IContact;
  public errorMessage:string | null =null;
  public groupId: string | null =null;
  public group:IGroup={} as IGroup;
  constructor( private activatedRoute:ActivatedRoute, private serviceService:ServiceService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId = param.get('contactId');
    });
    if (this.contactId){
      this.loading = true;
      this.serviceService.getContact(this.contactId).subscribe((data:IContact)=>{
        this.contact =data;
        this.loading =false;
        // this.serviceService.getAllGroup().subscribe((data:IGroup)=>{
        //   this.group =data;

      // })
      },(error)=>{
        this.errorMessage =error;
        this.loading = false;
      });
    }
  }
  public  isNotEmpty(){
    return Object.keys(this.contact).length>0;
  }
}