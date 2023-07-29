import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthVariables } from '../models/auth-variables.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private username = '';
    private isLoggedIn = false;
    private jwtToken = '';
    private isAdmin = false;

    public authEvent$ = new BehaviorSubject<AuthVariables>({
        isLoggedIn: false,
        isAdmin: false,
        username: '',
    });

    getJwtToken(): string {
        return this.jwtToken;
    }

    getAuthVariables() {
        return {
            username: this.username,
            jwtToken: this.jwtToken,
            isLoggedIn: this.isLoggedIn,
            isAdmin: this.isAdmin,
        };
    }

    setAuthVariables(
        username: string,
        jwtToken: string,
        isLoggedIn: boolean,
        isAdmin: boolean
    ): void {
        this.username = username;
        this.jwtToken = jwtToken;
        this.isLoggedIn = isLoggedIn;
        this.isAdmin = isAdmin;

        this.authEventSubjNext();
    }

    resetAuthVariables(): void {
        this.username = '';
        this.jwtToken = '';
        this.isLoggedIn = false;
        this.isAdmin = false;

        this.authEventSubjNext();
    }

    private authEventSubjNext() {
        this.authEvent$.next({
            isLoggedIn: this.isLoggedIn,
            isAdmin: this.isAdmin,
            username: this.username,
        });
    }
}
