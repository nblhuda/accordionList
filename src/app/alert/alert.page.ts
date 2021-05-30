import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertctrl: AlertController) 
  { 

  }

  ngOnInit() {
  }

  CreatePrompt()
  {
    this.alertctrl.create({
      header: "Bayaran Permit",
      inputs:[
        {
 
          placeholder: "Tarikh Bayaran", 
          type:"date",
          name: "date"
        },
        {
          placeholder: "Amaun", 
          name:"amaun",
          type:"text"
        },
        {
 
          placeholder: "Tujuan", 
          type:"text",
          name: "tujuan"
        },
        {
 
          label:"Catatan",
          placeholder: "catatan", 
          type:"text",
          name: "Catatan"
        }
      ],
      buttons:[
        {
          text:"Cancel",
        },
        {
          text:"OK",
        }
        
      ]
    }).then((promptEement)=>{
      promptEement.present();
    })
  }
}
