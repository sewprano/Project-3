import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
        
    }
    loggedIn() {
        const token = this.getToken();
        //is token expired?
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token)
    {
        //check token expiration
        const decoded = decode(token);
        //if expired:
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        //if !expired
        return false;
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token, idToken');
        window.location.assign('/');
    }
}

export default new AuthService();