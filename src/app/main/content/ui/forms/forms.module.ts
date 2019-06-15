import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { FuseFormsComponent } from './forms.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
    {
        path     : 'ui/forms',
        component: FuseFormsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        SweetAlert2Module,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseFormsComponent
    ]
})
export class UIFormsModule
{
}
