import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseProjectComponent } from './project.component';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { ProjectsDashboardService } from './projects.service';
import { FuseWidgetModule } from '../../../../../core/components/widget/widget.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../../../../../core/modules/material.module';

const routes: Routes = [
    {
        path     : 'apps/dashboards/project',
        component: FuseProjectComponent,
        resolve  : {
            data: ProjectsDashboardService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        NgxChartsModule,
        MaterialModule,
    ],
    declarations: [
        FuseProjectComponent
    ],
    providers   : [
        ProjectsDashboardService
    ]
})
export class ProjectModule
{
}

