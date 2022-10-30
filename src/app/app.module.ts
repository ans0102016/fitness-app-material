import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';

import { AppComponent } from './containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// feature modules
import { AuthModule } from '../auth/auth.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

export const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
