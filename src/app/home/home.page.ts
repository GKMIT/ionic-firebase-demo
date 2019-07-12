import { Component } from '@angular/core';
import { PushNotificationService } from '../providers/push-notification.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform, private pushNotificationService: PushNotificationService) { }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.platform.ready().then(() => {
      this.pushNotificationService.subscribeToTopic('home');
    });
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.platform.ready().then(() => {
      this.pushNotificationService.unsubscribeFromTopic('home');
    });
  }
}
