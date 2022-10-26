import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: () => import('./login/login.module').then(x => x.LoginModule) },
            { path: 'register', loadChildren: () => import('./register/register.module').then(x => x.RegisterModule) }
        ]
    }
];

const firebaseConfig = {
    apiKey: "AIzaSyAsFaVGjXbh7X7qt6O4PxZAuNBzfTaUOqc",
    authDomain: "fitness-app-material.firebaseapp.com",
    databaseURL: "https://fitness-app-material-default-rtdb.firebaseio.com",
    projectId: "fitness-app-material",
    storageBucket: "fitness-app-material.appspot.com",
    messagingSenderId: "1090864677747",
    appId: "1:1090864677747:web:0c9293ec2d7c416bf5bb06",
    measurementId: "G-KNFD8F9EPM"
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}