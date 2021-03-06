import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private platform: Platform, private fcm: FCM, public alertController: AlertController) {
    this.initialize();
  }

  initialize() {
    this.platform.ready().then(() => {
      this.fcm.getToken().then(token => {
        // backend.registerToken(token);
        console.log(token);
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
        // backend.registerToken(token);
      });
    });
  }

  subscribeToTopic(topic) {
    this.platform.ready().then(() => {
      this.fcm.subscribeToTopic(topic);
    });
  }

  unsubscribeFromTopic(topic) {
    this.platform.ready().then(() => {
      this.fcm.unsubscribeFromTopic(topic);
    });
  }

  read() {
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
        this.presentAlert(data.title, data.body);
      });
    });
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
