import { Component, OnInit } from '@angular/core';
import {TimeTable} from 'src/app/models/time-table'
import {HomeServiceService} from 'src/app/service/home-service.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  timeTable = TimeTable;
  hour: any;
  percent:number;
  
  

  constructor(private homeServics:HomeServiceService) { }

  ngOnInit(): void {
    

    this.setAllDefault()


    //////DEBUG///////
    // let i=0
    // setInterval(()=>{
    //   i=i+1
    //   console.log(i)
    //   this.OverTime(i)
    //   if(i>=24){
    //     i=1
    //   }
    // },2000)
    /////DEBUG//////

    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    }, 1000);

  }

  private updateDate(date){
    this.hour = date.getHours();
    this.homeServics.setDate(date)
    this.OverTime(this.hour)

    
  }

  onChange(item, event) {
    let data = this.timeTable.find(element => element.value == item.value)
    if(event.checked){
      data.checked = true
      //console.log(data)
    }else{
      data.checked = false
    }
  }

  OverTime(hour){

    if(hour>=8 && hour<= 12){
      //console.log("8-12")//debug 8-12AM
      if(hour==12){
        this.timeTable[0].over = true
        this.timeTable[0].status = "Over"
      }else{
        this.timeTable[0].status = "Running"
      }
      
    }

    if(hour>=12 && hour<=14){
      //console.log("12-14")//debug 12-2PM
      if(hour==14){
        this.timeTable[1].over = true
        this.timeTable[1].status = "Over"
      }else{
        this.setPreviousOver(1)
        this.timeTable[1].status = "Running"
      }
      
    }

    if(hour>=14 && hour<=16){
      //console.log("14-16")//debug 2-4PM
      if(hour==16){
        this.timeTable[2].over = true
        this.timeTable[2].status = "Over"
      }else{
        this.setPreviousOver(2)
        this.timeTable[2].status = "Running"
      }
      
    }

    if(hour>=16 && hour <=18){
      //console.log("16-18")//debug 4-6PM
      if(hour==18){
        this.timeTable[3].over = true
        this.timeTable[3].status = "Over"
      }else{
        this.setPreviousOver(3)
        this.timeTable[3].status = "Running"
      }
      
    }

    if(hour>=18 && hour<=22){
      //console.log("18-22")//debug 6-10PM
      if(hour==22){
        this.timeTable[4].over = true
        this.timeTable[4].status = "Over"
      }else{
        this.setPreviousOver(4)
        this.timeTable[4].status = "Running"
      }
      
    }
    if(hour>=22 && hour<=23){
      //console.log("22-23")//debug 10-11PM
      if(hour==23){
        this.timeTable[5].over = true
        this.timeTable[5].status = "Over"
      }else{
        this.setPreviousOver(5)
        this.timeTable[5].status = "Running"
      }
      
    }
    if(hour==23){
      this.setPreviousOver(6)
      this.timeTable[6].status = "Running"
    }
    if(hour==1){
      this.timeTable[6].over = true
      this.timeTable[6].status = "Over"
    }
    if(hour>1 && hour<8){
      //this.timeTable[7].over = true
      this.setAllDefault()
    }
  }

  setAllDefault(){
    this.timeTable.map((e)=> {
      e.over=false;
      e.status = ""
    })
  }

  setPreviousOver(n){
    for(let i =0; i<n; i++){
      this.timeTable[i].over = true
      this.timeTable[i].status = "Over"
    }
  }
    
 

}
