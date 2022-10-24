import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './containers/login/login.component';

import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule
    ],
    declarations: [
    LoginComponent
  ]
})
export class LoginModule {}