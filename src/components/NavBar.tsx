import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ContactModal from "../modals/ContactModal";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <Box component="div">
        <AppBar
          className="sticky"
          elevation={0}
          sx={{
            backgroundColor: "#2b2b2b",
            borderRadius: "10px",
            color: "#fff",
            width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
            left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
          }}
        >
          <Toolbar>
            <Box component="div" sx={{ display: { xs: "flex", md: "none" } }}>
              <Img src="./images/drtLogo.png" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="warning"
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component="a"
                  href="mailto:enquiries@drt-software.com"
                  onClick={handleClose}
                  sx={{ color: "orange" }}
                >
                  enquiries@drt-software.com
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#projects_page"
                  onClick={handleClose}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#services_page"
                  onClick={handleClose}
                >
                  Services
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#services_page"
                  onClick={handleClose}
                >
                  About
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#services_page"
                  onClick={handleClose}
                >
                  Testimonials
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#about_page"
                  onClick={handleClose}
                  sx={{
                    textDecoration: "none",
                    border: "2px solid purple",
                    borderRadius: "10px",
                    padding: "5px 7px",
                  }}
                >
                  Message
                </MenuItem>
              </Menu>
            </Box>
            <Box
              component="div"
              sx={{
                paddingTop: "5px",
                paddingBottom: "5px",
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                alignItems: "center",
                gap: "50px",
              }}
            >
              <Img src="./images/drtLogo.png" />
              <Box
                component="div"
                sx={{
                  display: "flex",
                  gap: "50px",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="#demos_page"
                  sx={{ textDecoration: "none", color: "orange" }}
                >
                  enquiries@drt-software.com
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#projects_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#services_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Services
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#testimonials_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Testimonials
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#about_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  About
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#"
                  onClick={handleOpenModal}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    border: "2px solid purple",
                    borderRadius: "10px",
                    padding: "5px 7px",
                  }}
                >
                  Message
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <ContactModal open={openModal} handleClose={handleCloseModal} />
    </Container>
  );
};

export default NavBar;
