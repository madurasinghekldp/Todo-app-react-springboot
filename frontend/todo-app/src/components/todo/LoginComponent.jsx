import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: 'dulan',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange=this.handleUsernameChange.bind(this)
        //this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    //handleUsernameChange(event){
    //    this.setState({username: event.target.value})
    //}

    //handlePasswordChange(event){
    //    this.setState({password: event.target.value})
    //}

    loginClicked(event){
        // if(this.state.username==='dulan' && this.state.password==='dulan'){
        //     AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     //this.setState({showSuccessMessage: true})
        //     //this.setState({hasLoginFailed: false})
        // }
            
        // else{
        //     console.log('Failed')
        //     this.setState({showSuccessMessage: false})
        //     this.setState({hasLoginFailed: true})
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)}
        // )
        // .catch(()=>{
        //     console.log('Failed')
        //     this.setState({showSuccessMessage: false})
        //     this.setState({hasLoginFailed: true})}
        // )

        AuthenticationService.executeJWTAuthenticationService(this.state.username, this.state.password)
        .then((response)=>{
            AuthenticationService.registerSuccesfulLoginForJwt(this.state.username,response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)}
        )
        .catch(()=>{
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})}
        )
            
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login success</div>}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn" onClick={this.loginClicked}>Login</button>
            </div>
            </div>
        )}
}

export default LoginComponent