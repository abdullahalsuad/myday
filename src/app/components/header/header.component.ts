import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date:any;
  hours:any;
  minutes:any;
  seconds:any;
  ampm="AM";


  constructor(private homeServics:HomeServiceService) {
    setInterval(()=>{
      this.date = this.homeServics.getDate()
      //this.updateDate.split("T",2)[0]
      // this.date = this.date.split("G",2)[0]
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
      
      if(this.hours > 12){
        this.hours = this.hours - 12;
    }

    if(this.hours >= 12){
      this.ampm ="PM"
  }

     
     this.hours = (this.hours < 10) ? "0" + this.hours : this.hours
     this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes
     this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds
    },1000)
   }

  ngOnInit(): void {
    
    
  }


}
