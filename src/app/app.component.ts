import { Component } from '@angular/core';

@Component({
  selector: 'ils-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode: string = 'side';
  items$: any = [{
    name: "Client",
    icon: "folder"
  }, {
    name: "Matter",
    icon: "folder"
  }];

  onItemClick(item: any): void {
    console.log('dfd');
    // this.store.dispatch(new MenuActions.MenuItemClick(item, this.desktopRoute));
  }
}