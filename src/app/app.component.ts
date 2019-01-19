import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import * as firebase from 'firebase';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-blog';

    constructor () {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyCgbaKIZR_lNi5bH9cnNKHVDgs_FKTsGJY',
            authDomain: 'angular-blog-b2f6b.firebaseapp.com',
            databaseURL: 'https://angular-blog-b2f6b.firebaseio.com',
            projectId: 'angular-blog-b2f6b',
            storageBucket: 'angular-blog-b2f6b.appspot.com',
            messagingSenderId: '943097510828'
        };
        firebase.initializeApp(config);
    }
}
