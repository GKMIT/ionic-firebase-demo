import { Injectable } from '@angular/core';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcrashlyticsService {

  constructor(private platform: Platform, private firebaseCrashlytics: FirebaseCrashlytics) {
    this.initialize();
  }

  initialize() {
    this.platform.ready().then(() => {
      console.log('platform ready');
      try {
        const crashlytics = this.firebaseCrashlytics.initialise();
        crashlytics.crash();
        crashlytics.logException('my caught exception');
      } catch (error) {
        console.log('Error starting firebaseCrashlytics', error);
      }
    });
  }

}
