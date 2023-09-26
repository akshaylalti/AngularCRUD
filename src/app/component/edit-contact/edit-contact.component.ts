import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Router } from '@angular/router';
import { IContact } from 'src/app/model/IContact';
import { IGroup } from 'src/app/model/IGroup';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public loading:boolean = false;
  public contactId:string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage:string | null =null;
  public groups: IGroup[] = [] as IGroup[];
  constructor( private activateRoute:ActivatedRoute, 
    private serviceService:ServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.loading =true;
    this.activateRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId = param.get('contactId');
    });
    if(this.contactId){
      this.serviceService.getContact(this.contactId).subscribe((data:IContact)=>{
        this.contact = data;
        this.loading = false;
        this.serviceService.getAllGroup().subscribe((data:IGroup[])=>{
          this.groups = data;
        });
      }, (error)=>{
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }
  public onSubmit(){
    if(this.contactId){
      this.serviceService.updateContact(this.contact,this.contactId).subscribe((data:IContact)=>{
        this.router.navigate(['/']).then();
      },(error)=>{
        this.errorMessage =error;
        this.router.navigate(['/contacts/edit/${this.contactId}']).then();
      });
    }
  }
}

