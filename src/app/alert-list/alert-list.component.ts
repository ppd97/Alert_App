import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AreasService } from '../services/areas.service';
import { AlertType} from '../core/models/alert-type.model'
import { PassDataService } from '../services/pass-data.service';
import { WeatherServices } from '../services/weather.services';
@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

  alertTypes!: AlertType[];

  title = 'interview-app';
  areasData!:any;
  alertSubmit!:string;
  areaSubmit!:string;
  constructor(private passData:PassDataService,private formBuilder: FormBuilder,private router:Router,private weatherServices: WeatherServices, private areaServices:AreasService) {}
 
  AlertInfo=this.formBuilder.group({
    alertSelect:[null,Validators.required],
    areaSelect:[null,Validators.required]
  })
  allAreas:Array <any>=new Array();
  public ngOnInit() {
    
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });
    this.areaServices.getAreas().subscribe(data=>{
      this.areasData=data
      for (const [key] of Object.entries(this.areasData.areas)) 
      {
          this.allAreas.push(key)
      }
      
      console.log("All Areas",this.allAreas)
    })
  }
 
  onSubmit()
  {
    this.alertSubmit=this.AlertInfo.controls.alertSelect.value;
    //console.log("Before Alert Submit", this.alertSubmit)
    this.passData.sendMessage(this.alertSubmit);
    this.areaSubmit=this.AlertInfo.controls.areaSelect.value;
    this.router.navigate(['datadisplay',this.areaSubmit])
  }
}




