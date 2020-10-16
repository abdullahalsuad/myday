import { Component, OnInit } from '@angular/core';
import {TimeTable} from 'src/app/models/time-table'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  timeTable = TimeTable;
  hour: any;
  second:any;
  

  constructor() { }

  ngOnInit(): void {

    this.setAllDefault()

    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    }, 1000);

  }

  private updateDate(date){
    this.hour = date.getHours();
    this.OverTime(this.hour)
  }

  onChange(item, event) {
    let data = this.timeTable.find(element => element.value == item.value)
    if(event.checked){
      data.checked = true
      console.log(data)
    }else{
      data.checked = false
    }
  }

  OverTime(hour){
    if( hour== 12){
      this.timeTable[0].over = true
      this.timeTable[0].status = "Over"
    }else if(hour==14){
      this.timeTable[1].over = true
      this.timeTable[1].status = "Over"
    }else if(hour==16){
      this.timeTable[2].over = true
      this.timeTable[2].status = "Over"
    }else if(hour==18){
      this.timeTable[3].over = true
      this.timeTable[3].status = "Over"
    }else if(hour==22){
      this.timeTable[4].over = true
      this.timeTable[4].status = "Over"
    }else if(hour==23){
      this.timeTable[5].over = true
      this.timeTable[5].status = "Over"
    }else if(hour==1){
      this.timeTable[6].over = true
      this.timeTable[6].status = "Over"
    }else if(hour>=1 && hour<8){
      //this.timeTable[7].over = true
      this.setAllDefault()
    }
  }

  setAllDefault(){
    this.timeTable.map((e)=> {
      e.over=false;
      e.status = "running"
    })
  }
    
 

}
