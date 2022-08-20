import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  styled,
  Button,
  Dialog,
  Box,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const dialogStyle = {
  width: "60%",
  height: "80%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: "10px",
};

const Login = () => {
  const WhatsApp = styled(WhatsAppIcon)`
    color: white;
  `;
  const Header = styled(AppBar)`
    background-color: #128c7e;
    display: flex;
    justify-content: center;
    height: 180px;
  `;

  const Tool = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    height: 100px;
  `;

  const LoginButton = styled(Button)`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  `;
  const Container = styled(Box)`
    display: flex;
  `;

  const BoxContainer = styled(Box)`
    padding: 60px 0 60px 0;
  `;
  return (
    <>
      <Header>
        <Tool>
          <IconButton>
            <WhatsApp />
          </IconButton>
        </Tool>
      </Header>
      <Dialog
        open={true}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
        PaperProps={{ sx: dialogStyle }}
        maxWidth={"md"}
      >
        <Container>
          <BoxContainer>
            <Typography>To use fjdklfjldk</Typography>
            
          </BoxContainer>
          <Box>Helloo</Box>
        </Container>
      </Dialog>
    </>
  );
};

export default Login;
