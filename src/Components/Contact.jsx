import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import NetlifyIcon from "/src/images/netlify.svg";
import { ParallaxLayer } from "@react-spring/parallax";
import { useBattery } from "@uidotdev/usehooks";
import emailjs from "@emailjs/browser";

function Contact() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // TO GET BATTERY OF USER
  const { level } = useBattery();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

  const formattedDate = currentDateTime.toLocaleString("en-US", dateOptions);
  const formattedTime = currentDateTime.toLocaleString("en-US", timeOptions);

  const theme = createTheme({
    // typography: {
    //   fontFamily: 'Lato, sans-serif',
    // },
    palette: {
      primary: {
        main: "#B1BDC5", // Change this to your desired primary color
      },
    },
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_thl5klz",
        "template_47o1gil",
        form.current,
        "t109mLgRKENh6e3Ch"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const form = useRef();

  return (
    <ParallaxLayer offset={5} speed={1.2} style={{ backgroundColor: "white" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.8 },
        }}
        sx={{
          width: { sm: "92%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
          spacing={{ xs: 4, sm: 2, lg: 4 }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "70px", sm: "80px", lg: "120px" },
            }}
          >
            {" "}
            Contact{" "}
          </Typography>

          <Stack
            spacing={{ sm: 10, lg: 40 }}
            direction={{ lg: "row" }}
            sx={{ alignItems: "center" }}
          >
            <Stack spacing={3}>
              <Stack
                spacing={2}
                sx={{ textAlign: { xs: "center", sm: "initial" } }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: { xs: "30px", sm: "48px" } }}
                >
                  Got a brilliant concept?{" "}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "20px", sm: "40px" } }}
                >
                  Let's make it a reality.
                </Typography>
              </Stack>

              {/* FORM FOR EMAIL JS */}
              <form ref={form} onSubmit={sendEmail}>
                <Stack
                  spacing={3}
                  sx={{
                    width: { sm: "88%", lg: "100%" },
                    justifyContent: "center",
                    padding: { xs: "20px", sm: 0 },
                  }}
                >
                  <Stack direction="row" spacing={3}>
                    <ThemeProvider theme={theme}>
                      <TextField
                        variant="standard"
                        type="name"
                        label="Your Name"
                        color="primary"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                      <TextField
                        variant="standard"
                        type="email"
                        label="Your Email"
                        color="primary"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </ThemeProvider>
                  </Stack>
                  <ThemeProvider theme={theme}>
                    <TextField
                      variant="standard"
                      type="text"
                      label="Your Message"
                      multiline
                      color="primary"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </ThemeProvider>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      width: { xs: "30%", sm: "20%", lg: "34%" },
                      backgroundColor: "#303030",
                      "&:hover": {
                        backgroundColor: "#040404",
                      },
                    }}
                    type="submit"
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </Stack>

            <Stack spacing={2}>
              {/* STACK FOR CONTACT DETAILS */}
              <Stack spacing={2}>
                <Typography variant="h3">Contact Details</Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <EmailIcon />
                  <a href="mailto:favouradebimpe63@gmail.com">
                    <Typography sx={{ color: "black" }}>
                      favouradebimpe@gmail.com
                    </Typography>
                  </a>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h3">Digital Spaces</Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <GitHubIcon />{" "}
                  <a href="https://github.com/Proton-number">
                    <Typography sx={{ color: "black" }}>Github</Typography>
                  </a>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    component="img"
                    sx={{ width: { sm: "24px", lg: "25px" } }}
                    src={NetlifyIcon}
                    alt="Netlify Icon"
                  />
                  <a href="https://app.netlify.com/teams/favouradebimpe63/overview">
                    <Typography sx={{ color: "black" }}>Netlify</Typography>
                  </a>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography> {formattedDate}</Typography>
                <Typography> {formattedTime}</Typography>
                <Typography> {level * 100.0}%</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </ParallaxLayer>
  );
}

export default Contact;
