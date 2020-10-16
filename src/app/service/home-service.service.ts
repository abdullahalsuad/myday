import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  date: any= new Date();
 

  constructor() { }

  setDate(d){
    this.date = d
    
  }
  getDate(){
    
    return this.date;
  }

}
