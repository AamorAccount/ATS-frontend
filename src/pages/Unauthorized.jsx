import React, { useContext } from "react";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import UserContext from "../context/UserContext";

export default function Unauthorized() {
  const userContext = useContext(UserContext);
  const user = userContext && userContext.user ? userContext.user : userContext;

  const handleContact = () => {
    // Replace with actual mail link or route
    const mails = [
      "praveensaik@aapmor.com",
      "srinivasch@aapmor.com",
      "pranayd@aapmor.com",
    ];
    window.location.href = `mailto:${mails}?subject=Access Request for ATS application&body=Hi Admin,%0D%0A%0D%0AI am trying to access a restricted section of the ATS application.%0D%0APlease provide the necessary access or let me know the next steps.%0D%0A%0D%0AThanks,%0D%0A${user?.name}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // bgcolor: "#f4f6f8",
        background:
          "radial-gradient(210.08% 135.02% at 108.75% 6.07%,#f8fafc 0%,#d4fff3 26.96%,#cddbff 51.12%,#d3fff3 71.15%,#fafbfd 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 4,
          background: "transparent",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid #ffffff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <LockOutlinedIcon color="error" sx={{ fontSize: 60 }} />
          <Typography variant="h4" fontWeight={600}>
            Unauthorized Access
          </Typography>
          <Typography color="text.secondary">
            You don’t have permission to view this page.
          </Typography>
          <Typography
            variant="body2"
            sx={{ bgcolor: "#ffe0e0", p: 2, borderRadius: 2, color: "#b71c1c" }}
          >
            Please contact the administrator to request access.
          </Typography>
          <Button
            variant="contained"
            startIcon={<MailOutlineIcon />}
            onClick={handleContact}
            sx={{ textTransform: "none" }}
          >
            Contact Administrator
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
