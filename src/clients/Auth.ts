import { Auth0DecodedHash, WebAuth } from 'auth0-js';
import { authConfig } from 'src/config';

export class Auth {
    public auth0 = new WebAuth({
        clientID: authConfig.clientId as string,
        domain: authConfig.domain as string,
        redirectUri: authConfig.callbackUrl,
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    public login() {
        this.auth0.authorize();
    }

    public handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                throw new Error(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    public setSession(authResult: Auth0DecodedHash) {
        const expiresAt = JSON.stringify(((authResult.expiresIn as number) * 1000) + new Date().getTime());
        sessionStorage.setItem('access_token', authResult.accessToken as string);
        sessionStorage.setItem('id_token', authResult.idToken as string);
        sessionStorage.setItem('expires_at', expiresAt);
    }

    public logout() {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('id_token');
        sessionStorage.removeItem('expires_at');
    }

    public isAuthenticated() {
        const expiresAt = JSON.parse(sessionStorage.getItem('expires_at') as string);
        return new Date().getTime() < expiresAt;
    }
}

export default Auth;
