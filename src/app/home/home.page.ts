import { Component } from '@angular/core';
import { PushNotificationService } from '../providers/push-notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pushNotificationService: PushNotificationService) { }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.pushNotificationService.subscribeToTopic('home');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.pushNotificationService.unsubscribeFromTopic('home');
  }
}
