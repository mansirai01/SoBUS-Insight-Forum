import * as React from "react";
import { Stack, Divider, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CardComponent from "./CardComponent";
import AboutComponent from "./AboutComponent";
import "./Chatbot";
import { Chatbot } from "./Chatbot";
import "./styles.css";

const user = JSON.parse(localStorage.getItem("user"));

const OuterLanding = () => {
  const handleLoginSignup = () => {
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="navbar">
        <img
          className="logo"
          src="https://sobusinsight.org/wp-content/themes/sobus/images/sobus-logo.svg"
          alt="logo"
        />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <p className="navlinks">
            <a href="/smallbiz">Small Biz</a>
          </p>
          {user ? (
            <p className="navlinks">
              <a href="app/dashboard">Dashboard</a>
            </p>
          ) : (
            <p className="navlinks">
              <a href="login">Login</a>
            </p>
          )}

          <p className="navlinks">
            <a href="#about">About</a>
          </p>
          <p className="navlinks">
            <a href="#chat">Chat</a>
          </p>
        </Stack>
      </div>
      <div className="hero">
        <h1>
          ACCELERATING
          <br />
          SOCIAL BUSINESS
        </h1>
      </div>
      <div className="blog-section-landing" id="blogs">
        <h1 style={{ textAlign: "center" }}>Blogs</h1>
        <br />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <CardComponent image="https://images.unsplash.com/photo-1441307811206-a12c74889338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent image="https://images.unsplash.com/photo-1531395512293-e110f53f63dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent image="https://images.unsplash.com/photo-1529002553897-6f5fdc76fa83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </Grid>
        </Grid>
        <div className="read-more"><a href="app/blog"> Read More!</a></div>
      </div>
      <div className="about-us-landing" id="about">
        <Grid container mt={4}>
          <Grid>
            <center>
              <h1>About Us!</h1>
            </center>
            <AboutComponent />
          </Grid>
        </Grid>
      </div>
      <Grid className="login-signup" id="login">
        <Grid marginTop={6}>
          <div className="signup-button">
            <Button variant="text" style={{ color: "#88BC92" }} onClick={handleLoginSignup}>
              Login/Signup
            </Button>
          </div>
        </Grid>
        <Grid mb={3}>
          <center>
            <h2 style={{ color: "white" }}>Sign Up to get better insights!</h2>
          </center>
        </Grid>
      </Grid>

      <div className="blog-section-landing" id="chat"></div>

      <Grid className="chatbot" id="chatbot">
        <Grid marginTop={4}>
          <div className="chatbot">
            <Chatbot />
          </div>
        </Grid>
      </Grid>

      <Grid marginTop={10}>
        <div className="navbar">
          <img
            className="logo"
            src="https://sobusinsight.org/wp-content/themes/sobus/images/sobus-logo.svg"
            alt="logo"
          />

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <p className="navlinks">
              <a href="https://www.facebook.com/SobusInsight/">
                <FacebookIcon />
              </a>
            </p>
            <p className="navlinks">
              <a href="https://www.linkedin.com/company/sobus-insight-forum">
                <LinkedInIcon />
              </a>
            </p>
            <p className="navlinks">
              <a href="https://twitter.com/SobusInsights">
                <TwitterIcon />
              </a>
            </p>
            <p className="navlinks">
              <a href="mailto:info@sobusinsight.org">
                <EmailIcon />
              </a>
            </p>
          </Stack>
        </div>
      </Grid>
    </div>
  );
};
export default OuterLanding;
