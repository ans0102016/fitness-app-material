import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {
    constructor(
        private af: AngularFireAuth
    ) {}

    createUser(email: string, password: string) {
        return this.af.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.signInWithEmailAndPassword(email, password);
    }
}