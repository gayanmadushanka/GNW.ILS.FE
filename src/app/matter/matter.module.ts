import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MatterComponent } from './matter.component';

@NgModule({
    imports: [SharedModule],
    declarations: [MatterComponent],
    exports: []
})
export class MatterModule {

}