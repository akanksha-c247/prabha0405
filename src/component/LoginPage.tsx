import { useState } from "react";
import {
  TextField,
  Button,Box,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Users {
  email?: string;
  pwd?: string;
}
// interface SignUp {
//   email: string;
//   name: string;
//   pwd: string;
// }

// const LoginPage = ({ email, name, pwd }: SignUp) => {
  const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  // const hide = false;

  const [userLogin, setUserLogin] = useState<Users>({    
    email: "",
    pwd: "",
  });

  const navigate = useNavigate();

  const onInputChanged = (fieldName: string, value: string) => {
    setUserLogin((prev) => ({ ...prev, [fieldName]: value }));
  };

  // const login=(e:any)=>{
  //     e.preventDefault();
  //     localStorage.setItem('loginuser', JSON.stringify(userLogin));
  //         navigate('/',{state:{userLogin}})
  // }

  // To match the user details with already registered user

  const handleLogin = (e:any) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("loginuser") || "");
   
    console.log(loggedUser, 'this is ')
    console.log(userLogin,'userlogin')
    
    if (loggedUser) {
      if (
        userLogin.email === loggedUser.email &&
        userLogin.pwd === loggedUser.pwd 
       
      ) {
        navigate("/" );
        console.log("successful");
        
      } else {
        alert("Wrong Email or Password");
        
      }
    }
    // localStorage.setItem("loginuser", name);
  };

  const resetForm = () => {
    setUserLogin({ email: "", pwd: "" });
  };

  // const logout = () => {
    // localStorage.removeItem("loginuser"); 
    // localStorage.removeItem("loginuser" );    

    // console.log("logout");
    // alert('You are successfully Logged out!!')
    // navigate('/login',{state:{logout}})
  // };

  return (
    <form>
      {/* {hide ? (
        <div> */}
          {/* <Link to="/logout">Logout</Link> */}
          {/* <Link to="/" state={{ logout: { function: logout } }}></Link> */}
          {/* <Link to="/signup">Sign in</Link>{" "} */}
        {/* </div>
      ) : (
        ""
      )} */}

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid alignItems="center">
            <h2>Log in</h2>
          </Grid>
          
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            value={userLogin.email}
            onChange={(e: any) => {
              onInputChanged("email", e.target.value);
            }}
            fullWidth
            required
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            variant="standard"
           
            value={userLogin.pwd}
            onChange={(e: any) => {
              onInputChanged("pwd", e.target.value);
            }}
            fullWidth
            required
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
          </FormGroup>
         <Box sx={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
         <Button
            variant="outlined"           
            color="success"
            type="button"  
            onClick={handleLogin} 
            fullWidth         
          >
            SignIn
          </Button>
        
          </Box>

          <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
            <Button
            variant="outlined"
            onClick={() => {
              navigate("/signup");
            }}
          >

            SignUp
          </Button>
            <Button onClick={resetForm}>Reset</Button>
          </Box>
         
          <Box>Forget Password?</Box>
         
        </Paper>
      </Grid>
    </form>
  );
};

export default LoginPage;
