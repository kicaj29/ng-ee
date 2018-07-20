import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-list',
  template: `
    <ul>
        <ng-container #container>
        </ng-container>
        
        <ng-template #defautItem let-jack>
            <li>
                {{jack.title}}
            </li>
        </ng-template>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() set items(_items) {
      _items.forEach((item, index) => {
          this.container.createEmbeddedView(
              this.userItem || this.defautItem,
              {
                  $implicit: item,
                  counter: index
              });
      });
  }

  @Input() userItem: TemplateRef<any>;
  @ViewChild('defautItem') defautItem: TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
}
