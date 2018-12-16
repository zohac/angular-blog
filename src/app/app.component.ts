import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: "Mon premier post",
      content: "Ad tempor tempor commodo duis commodo labore dolore deserunt. Quis labore occaecat minim deserunt commodo. Id dolore excepteur tempor occaecat eiusmod dolore sint non sit quis incididunt. Et aliqua voluptate reprehenderit do magna labore. Laboris elit et non irure ea ad ad culpa sint eu voluptate sit irure Lorem.",
      loveIts: 5,
      created_at: new Date('2018-12-14T09:45')
    },
    {
      title: "Mon second post",
      content: "Ad tempor tempor commodo duis commodo labore dolore deserunt. Quis labore occaecat minim deserunt commodo. Id dolore excepteur tempor occaecat eiusmod dolore sint non sit quis incididunt. Et aliqua voluptate reprehenderit do magna labore. Laboris elit et non irure ea ad ad culpa sint eu voluptate sit irure Lorem.",
      loveIts: -3,
      created_at: new Date('2018-12-15T15:02')
    },
    {
      title: "Mon troisième post",
      content: "Ad tempor tempor commodo duis commodo labore dolore deserunt. Quis labore occaecat minim deserunt commodo. Id dolore excepteur tempor occaecat eiusmod dolore sint non sit quis incididunt. Et aliqua voluptate reprehenderit do magna labore. Laboris elit et non irure ea ad ad culpa sint eu voluptate sit irure Lorem.",
      loveIts: 0,
      created_at: new Date('2018-12-16T12:03')
    },
    {
      title: "Mon quatrième post",
      content: "Ad tempor tempor commodo duis commodo labore dolore deserunt. Quis labore occaecat minim deserunt commodo. Id dolore excepteur tempor occaecat eiusmod dolore sint non sit quis incididunt. Et aliqua voluptate reprehenderit do magna labore. Laboris elit et non irure ea ad ad culpa sint eu voluptate sit irure Lorem.",
      loveIts: 2,
      created_at: new Date()
    }
  ];
}
