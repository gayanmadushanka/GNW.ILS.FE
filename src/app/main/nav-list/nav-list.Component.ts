import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ils-nav-list',
    templateUrl: './nav-list.Component.html',
    styleUrls: ['./nav-list.Component.scss']
})
export class NavListComponent {
    @Input() items;

    @Output() itemClick = new EventEmitter;

    onItemClick(item: any, event: MouseEvent): void {
        event.preventDefault();
        this.itemClick.emit(item);
    }
}