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

    private readonly ID_TOKEN = 'id_token';
    private readonly ACCESS_TOKEN = 'access_token';
    private readonly EXPIRES_AT = 'expires_at';
    
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
        this.storage.setItem(this.ACCESS_TOKEN, authResult.accessToken as string);
        this.storage.setItem(this.ID_TOKEN, authResult.idToken as string);
        this.storage.setItem(this.EXPIRES_AT, expiresAt);
    }

    public logout() {
        this.storage.removeItem(this.ACCESS_TOKEN);
        this.storage.removeItem(this.ID_TOKEN);
        this.storage.removeItem(this.EXPIRES_AT);
    }

    public isAuthenticated() {
        const expiresAt = JSON.parse(this.storage.getItem(this.EXPIRES_AT) as string);
        return new Date().getTime() < expiresAt;
    }

    get userId(): string | undefined {
        if(this.isAuthenticated()){
            const id = this.storage.getItem(this.ID_TOKEN)
            if(!id) {return undefined;}
            return id;
        }
        return undefined;
    }

    get accessToken(): string | undefined {
        if(this.isAuthenticated()){
            const accessToken = this.storage.getItem(this.ACCESS_TOKEN)
            if(!accessToken) {return undefined;}
            return accessToken;
        }
        return undefined;
    }

    private get storage() {
        return sessionStorage;
    }
}

export default Auth;
