import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * Annotation2
   */
  /* template: `
      <h1>{{title}}</h1>
      <h2>{{hero}} details!
  ` */

  /**
   * Annotation5
   */
  /* template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
  ` */

  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero }}
    </li>
  </ul>
`
})
export class AppComponent {
  /**
   * Annotation1
   */
  //title = 'My First Angular App';

  /**
   * Annotation2
   */
  /* title = 'Tour of Heros';
  hero = 'WindStorm'; */

  /**
   * Annotation3
   */
  /* title = 'Tour of Heroes';
  myHero = 'Windstorm'; */

  /**
   * Annotation4
   * 
   * @type {string}
   * @memberof AppComponent
   */
  /* title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  } */

  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
