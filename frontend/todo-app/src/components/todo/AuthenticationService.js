import axios from "axios";
import { API_URL } from "../../Constants";

export const USER_SESSION_NAME='authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username,password){
        return axios.get(`${API_URL}/basicauth`,{headers:{authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJWTAuthenticationService(username,password){
        return axios.post(`${API_URL}/authenticate`,{username,password})
    }

    createBasicAuthToken(username,password){
        return 'Basic '+ window.btoa(username+":"+password)
    }

    createJWTToken(token){
        return 'Bearer '+token
    }

    registerSuccesfulLogin(username,password){
        // let username='user'
        // let password='password'
        //let BasicAuthHeader='Basic '+ window.btoa(username+":"+password)
        sessionStorage.setItem(USER_SESSION_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccesfulLoginForJwt(username,token){
        sessionStorage.setItem(USER_SESSION_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    logout(){
        sessionStorage.removeItem(USER_SESSION_NAME);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return false
        return true
    }
    getLoggedInUser(){
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(BasicAuthHeader){
        
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.authorization=BasicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()