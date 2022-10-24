import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatSnackBarModule
    ],
    declarations: [
      AuthFormComponent
    ],
    exports: [
      AuthFormComponent
    ]
  
})
export class SharedModule {}