import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../model/IContact';
import { IGroup } from '../model/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private serviceUrl: string =`http://localhost:9000`;
  constructor( private httpClient:HttpClient) { 
  }
  //get all contact
  public getAllContact(): Observable<IContact[]>{
    let Url:string = `${this.serviceUrl}/contacts`;
    return this.httpClient.get<IContact[]>(Url).pipe(catchError(this.handleError));
  }

  // get Single conttact
  public getContact(contactID:string): Observable<IContact>{
    let Url:string = `${this.serviceUrl}/contacts/${contactID}`;
    return this.httpClient.get<IContact>(Url).pipe(catchError(this.handleError));
  }

  //create  contact
  public createContact(contact:IContact): Observable<IContact>{
    let Url:string = `${this.serviceUrl}/contacts`;
    return this.httpClient.post<IContact>(Url,contact).pipe(catchError(this.handleError));
  }

   //update  contact
   public updateContact(contact:IContact,contactID:string): Observable<IContact>{
    let Url:string = `${this.serviceUrl}/contacts/${contactID}`;
    return this.httpClient.put<IContact>(Url,contact).pipe(catchError(this.handleError));
  }

  //delete  contact
  public deleteContact(contactID:string): Observable<IContact>{
    let Url:string = `${this.serviceUrl}/contacts/${contactID}`;
    return this.httpClient.delete<IContact>(Url).pipe(catchError(this.handleError));
  } 

  //get all group
  public getAllGroup(): Observable<IGroup[]>{
    let Url:string = `${this.serviceUrl}/groups`;
    return this.httpClient.get<IGroup[]>(Url).pipe(catchError(this.handleError));
  }

   //get single group
   public getGroup(): Observable<IGroup>{
    let Url:string = `${this.serviceUrl}/groups`;
    return this.httpClient.get<IGroup>(Url).pipe(catchError(this.handleError));
  }

  // Error handling
  handleError(error:any) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
