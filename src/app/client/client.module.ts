import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ClientListComponent } from './client-list.component';
import { ClientComponent } from './client.component';

@NgModule({
    imports: [MatTableModule, MatFormFieldModule, MatIconModule,
        MatProgressBarModule, MatPaginatorModule, MatDatepickerModule],
    declarations: [ClientListComponent, ClientComponent],
    exports: [ClientListComponent]
})
export class ClientModule {

}