import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/model/IContact';
import { IGroup } from 'src/app/model/IGroup';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public loading: boolean =false;
  public contact:IContact ={} as IContact;
  public errorMessage: string | null =null;
  public group:IGroup[] = {} as IGroup[];
  constructor(private serviceService:ServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.serviceService.getAllGroup().subscribe((data:IGroup[])=>{
      this.group =data;
    }, (error)=>{
      this.errorMessage =error;
    });
  }
  createSubmite(){
    this.serviceService.createContact(this.contact).subscribe((data:IContact)=>{
      this.router.navigate(['/']).then;
    },(error)=>{
      this.errorMessage =error;
      this.router.navigate(['/contacts/add']).then;
    });
  }

}
