import { Component } from '@angular/core';
import {LoggerService} from "./logger/logger.service";
import {Item} from "./item";

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome !
      </h1>
        <ng-template #tt>
            <h2>some content</h2>
        </ng-template>
        <div *ngTemplateOutlet="tt"></div>
        <app-list [items]="items" [userItem]="myItem"></app-list>
        
        <ng-template #myItem let-item let-x="counter">
            <li style="color: blue">
                {{x}}<input type="text" [value]="item.title"/>
            </li>
        </ng-template>
    </div>

    
  `,
  styles: []
})
export class AppComponent {

  constructor(private logSvc: LoggerService) {
    logSvc.log('AppComponent: constructor');

    setInterval(()=> {
        this.items = [...this.items, {title: 'new'}]
    }, 2000);
  }

  items: Item[] = [
      { title: 'item1'},
      { title: 'item2'},
      { title: 'item3'}
  ]
}
