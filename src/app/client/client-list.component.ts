import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'ils-client-list',
    templateUrl: "./client-list.component.html",
    styleUrls: ["./client-list.component.scss"]
})
export class ClientListComponent {
    length: number = 50;
    pageIndex: number = 0;
    pageSize: number = 50;
    pageSizeOptions: number[] = [25, 50, 100];

    displayedColumns = ['id', 'name'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

    addClient(): void {

    }

    onPage(event) {
        console.log("sds");
    }
}

export interface Element {
    id: number;
    name: string;
}

const ELEMENT_DATA: Element[] = [
    { id: 1, name: 'Gayan' },
    { id: 2, name: 'Wasana' }
];
