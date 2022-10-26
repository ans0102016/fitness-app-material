import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RegisterComponent } from './containers/register/register.component';

import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}