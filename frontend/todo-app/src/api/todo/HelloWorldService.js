import axios from "axios";
class HelloWorldService {

    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name){
        //let username='user'
        //let password='password'
        //let BasicAuthHeader='Basic '+ window.btoa(username+":"+password)
        return axios.get(`http://localhost:8080/hello-world/${name}`
        //,
        //{
        //    headers: {authorization: BasicAuthHeader}
        //}
        )
    }
}

export default new HelloWorldService()