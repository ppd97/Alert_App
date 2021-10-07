import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataDisplayService } from '../services/data-display.service';
import { _MatTableDataSource } from '@angular/material/table';
import { PassDataService } from '../services/pass-data.service';


export class properties
{
    areaDesc!: String
    affectedZones!: string;
    event!: string
}   
export interface features
{
    properties:properties
}   
export interface details
{
    features:features[]
}
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})


export class DataDisplayComponent implements OnInit {
  area!:any;
  alert!:string;
  datas=<details>{};
  spinner=true;
  alertSelected!:string;
  notAvail!:string;
  count:number=0;
  ELEMENT_DATA:Array<properties>=new Array<properties>();
  //dataSource=new MatTableDataSource<details>(this.datas);
  //@Input()recieved!:String;
  displayedColumns: string[]=['areaDesc','affectedZones','event'];
  constructor(private route:ActivatedRoute, private passData:PassDataService,private dataService:DataDisplayService) { }

  ngOnInit() {
    this.passData.getMessage().subscribe(message=>{
      this.alertSelected=message;
      // console.log("Alert::::",message)
    })
    this.route.paramMap.subscribe(param =>{
      this.area=param.get('area')
    });
   
      
    this.dataService.getData(this.area).subscribe((res:any)=>
    {
      this.datas=res;
   
      for(let i of this.datas['features'])
      {
       
        let getData: properties=new properties()
        
        getData= 
          {areaDesc:i.properties.areaDesc,
           affectedZones:i.properties.affectedZones, 
           event:i.properties.event}
           if(getData.event!=this.alertSelected)
           {
             //console.log(this.notAvail);
             this.count++;
           }
           else{
             this.ELEMENT_DATA.push(getData)
           }
      }
      if(this.count!=0)
      {
        this.notAvail='"Alert Not Available"';
        alert(this.notAvail)
        
      }
      
      this.spinner=false;
    })

  }
  dataSource = this.ELEMENT_DATA;

}


