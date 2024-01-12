import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

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

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      sx={{
        width: { sm: "92%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        // backgroundColor: "black",
      }}
    >
      <Stack spacing={{ xs: 4, sm: 2, lg: 0 }}>
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
          spacing={{ lg: 40 }}
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
            <Stack
              spacing={3}
              sx={{
                width: { sm: "88%", lg: "100%" },
                justifyContent: "center",
                padding: { xs: "20px", sm: 0 },
              }}
            >
              <Stack direction="row" spacing={10}>
                <TextField variant="standard" type="name" label="Your Name" />
                <TextField
                  variant="standard"
                  type="email"
                  label="Your Email"
                  color="secondary"
                />
              </Stack>
              <TextField
                variant="standard"
                type="text"
                label="Your Message"
                multiline
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: { xs: "30%", sm: "20%", lg: "34%" },
                }}
              >
                Send
              </Button>
            </Stack>
          </Stack>

          <Stack spacing={2}>
            {/* STACK FOR CONTACT DETAILS */}
            <Stack spacing={2}>
              <Typography variant="h3">Contact Details</Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", alignItems: "center" }}
              >
                <EmailIcon />
                <Typography>favouradebimpe@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <WhatsAppIcon />
                <a href="https://github.com/Proton-number">
                  <Typography sx={{ color: "white" }}>
                    Text me on Whatsapp
                  </Typography>
                </a>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="h3">Digital Spaces</Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <GitHubIcon />{" "}
                <a href="https://github.com/Proton-number">
                  <Typography>Github</Typography>
                </a>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography> {formattedDate}</Typography>
              <Typography> {formattedTime}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact;
