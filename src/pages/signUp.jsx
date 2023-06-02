// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";

// export const Register = () => {
//   const [passwordType, setPasswordType] = useState("password");
//   const [loading, setLoading] = useState(false);

//   const [curUser, setCurUser] = useState({
//     email: "",
//     password: "",
//   });

//   const signUp = async () => {
//     if (!curUser.email || !curUser.password) {
//       alert("Enter Details");
//       setCurUser({
//         email: "",
//         password: "",
//       });
//       setPasswordType("password");
//       return;
//     }
//     try {
//       setLoading(true);
//       const config = { headers: { "Content-Type": "multipart/form-data" } };
//       await axios.post(`/api/startup-register/`, curUser, config);
//       alert("Success");
//       setCurUser({
//         email: "",
//         password: "",
//       });
//       setLoading(false);
//     } catch (error) {
//       alert(error);
//       setCurUser({
//         email: "",
//         password: "",
//       });
//       setPasswordType("password");
//       setLoading(false);
//     }
//   };

//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//       return;
//     }
//     setPasswordType("password");
//   };

//   return (
//     <>
//       <div className="h-screen pt-5 d-flex justify-content-center align-items-center">
//         <div className="bg-white shadow-2xl  rounded-lg shadow-blue-800 h-md-auto h-screen w-md-96 w-screen p-5">
//           <div className="d-flex pt-4 md:pt-0 flex-column align-items-center justify-content-evenly gap-7">
//             <p className="">Register</p>

//             <div className="form-control w-full max-w-xs">
//               <input
//                 type="email"
//                 value={curUser.email}
//                 name="email"
//                 placeholder="Your Email"
//                 onChange={(e) =>
//                   setCurUser({ ...curUser, email: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="form-control flex justify-center flex-row input-group w-full max-w-xs">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Your Password"
//                 value={curUser.password}
//                 onChange={(e) =>
//                   setCurUser({ ...curUser, password: e.target.value })
//                 }
//                 required
//               />
//               <button
//                 onClick={togglePassword}
//                 className="p-4 border border-base-100 bg-white text-black ">
//                 {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>

//             <div className="btn btn-primary" onClick={() => signUp()}>
//               {loading ? "Registering..." : "Register"}
//             </div>

//             <p>
//               Already registered? &nbsp;
//               <Link to="/grant-connect">
//                 <span className="cursor-pointer text-blue-500">Sign In</span>
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
