import React from 'react';
import {connect} from 'react-redux';
import { login, signin_fail_handle} from '../../screens/login/actions/signin'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Register from './Register';
import logo from '../../images/logo.png'

const styles = theme => ({
  background: {
    backgroundImage: `url(${require(`${ ('../../images/login-background.png')}`)})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  },
  main: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: 'transparent',
    width: '50%'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,  
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    opacity: '0.6',
  },
  typeColor: {
    color: '#e0e0e0',
    textAlign: 'center',
  },
  hide: {
    display: 'none'
  }
});

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    openRegister: false,
  }

  constructor(props){
    super(props)

    this.onClickSignin = this.onClickSignin.bind(this)
}

componentWillMount(){
    if(localStorage.getItem('accessToken')){
      this.props.history.push('/login')
      // window.location.reload()
    }
}

  onClickSignin = () => {
    let {username, password} = this.state

    this.props.login(username, password)
  }

  onClickRegister = () => {
    this.setState({openRegister: !this.state.openRegister})
  }

  render(){ 
    const { classes } = this.props;
    var temp = classes.hide
    if(this.state.openRegister)
      temp = ""
    else
      temp = classes.hide
    if(this.props.signinReducer.error){
      alert("sign fail: " + this.props.signinReducer.error)
      this.props.signin_fail_handle();
    }
    if(this.props.signinReducer.signinSuccessful)
      this.props.history.push('/home')
      
    return (
      <div className={classes.background}>
        <CssBaseline />      
        <Typography className={classes.typeColor} style={{paddingTop: '5vh'}} component="h1" variant="h4">
          Justice Music
        </Typography>
        <main className={classes.main}>
              <Paper className={classes.paper}>
                <img src={logo} alt="Smiley face" style={{height: '45px', width: '45px'}}/>
                <Typography className={classes.typeColor} component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form}>
                  <FormControl required fullWidth>
                    <InputLabel>Email Address</InputLabel>
                    <Input 
                    id="email" 
                    name="email" 
                    autoComplete="email" 

                    onChange={e=>this.setState({username: e.target.value})}
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel>Password</InputLabel>
                    <Input 
                    name="password" 
                    type="password" 
                    id="password" 
                    autoComplete="current-password"
                    onChange={e=>this.setState({password: e.target.value})} 
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    className={classes.submit}
                    disabled={this.props.signinReducer.isSignin && !this.props.signinReducer.signinSuccessful}
                    onClick={this.onClickSignin}
                  >
                    Sign in
                  </Button>
                  <Button onClick={this.onClickRegister} style={{backgroundColor: '#e0e0e0' , marginTop: '30px', opacity: '0.5'}}>
                    Register here
                  </Button>
                </form>
              </Paper>
              <Paper className={[classes.paper, temp]}>
                <Register />
              </Paper>
        </main>
        <Typography className={classes.typeColor} component="h4" variant="h6">
          Develop with 
          <span role="img" aria-label="Love"> ❤️ </span>
          by Keyti
        </Typography>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  signinReducer: state.signinReducer
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password)=>dispatch(login(username, password)),
  signin_fail_handle: ()=>dispatch(signin_fail_handle()),
})

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles))(Login));