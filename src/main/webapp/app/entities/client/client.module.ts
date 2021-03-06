import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShaurmaStoreSharedModule } from '../../shared';
import { ShaurmaStoreAdminModule } from '../../admin/admin.module';
import {
    ClientService,
    ClientPopupService,
    ClientComponent,
    ClientDetailComponent,
    ClientDialogComponent,
    ClientPopupComponent,
    ClientDeletePopupComponent,
    ClientDeleteDialogComponent,
    clientRoute,
    clientPopupRoute,
} from './';

const ENTITY_STATES = [
    ...clientRoute,
    ...clientPopupRoute,
];

@NgModule({
    imports: [
        ShaurmaStoreSharedModule,
        ShaurmaStoreAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ClientComponent,
        ClientDetailComponent,
        ClientDialogComponent,
        ClientDeleteDialogComponent,
        ClientPopupComponent,
        ClientDeletePopupComponent,
    ],
    entryComponents: [
        ClientComponent,
        ClientDialogComponent,
        ClientPopupComponent,
        ClientDeleteDialogComponent,
        ClientDeletePopupComponent,
    ],
    providers: [
        ClientService,
        ClientPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaurmaStoreClientModule {}
