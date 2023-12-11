import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isWeb:boolean=false;

  constructor(private platform: Platform) {
    platform.ready().then(() =>{
      this.isWeb =this.platform.is('desktop');
    })
  }
}
