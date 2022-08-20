import React from "react";
import { AppBar, Toolbar, IconButton, styled, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Login = () => {
  const WhatsApp = styled(WhatsAppIcon)`
    color: white;
  `;
  const Header = styled(AppBar)`
    background-color: #128c7e;
    display: flex;
    justify-content: center;
    height: 100px;
  `;

  const Tool = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    height: 100px;
  `;

  const LoginButton = styled(Toolbar)`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  `;
  return (
    <>
      <Header>
        <Tool>
          <IconButton>
            <WhatsApp />
          </IconButton>
          <LoginButton>Login</LoginButton>
        </Tool>
      </Header>
    </>
  );
};

export default Login;
