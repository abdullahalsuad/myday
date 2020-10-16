import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date:String;

  constructor(private homeServics:HomeServiceService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.date = this.homeServics.getDate().toString()
      //this.updateDate.split("T",2)[0]
      this.date = this.date.split("G",2)[0]
    },1000)
    
  }

}
