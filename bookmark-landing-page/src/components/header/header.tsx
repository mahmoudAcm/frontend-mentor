import { useState, useEffect } from "react";

//components
import { Typography, Button, Link, Box } from "@mui/material";
import {
  Header as AppBar,
  Container,
  LoginButton,
  MenuButton,
  Nav,
  List,
  Links,
} from "./styles";

//utils
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//icons
import LogoIcon from "../../icons/Logo";
import MenuIcon from "../../icons/Menu";
import CloseIcon from "../../icons/Close";
import FacebookIcon from "../../icons/Facebook";
import TwitterIcon from "../../icons/Twitter";

const useScrollHidding = (state: boolean) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [state]);
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);

  const open = isOpen && isMobile;

  useScrollHidding(open);

  return (
    <>
      {open ? <Box sx={{ height: 105 }} /> : <></>}
      <AppBar
        elevation={0}
        color="transparent"
        position="relative"
        className={open ? "open" : undefined}
      >
        <Container>
          <div className="col">
            <LogoIcon
              color={open ? "white" : undefined}
              circleColor={open ? "white" : undefined}
              innerColor={open ? "#2f354f" : undefined}
            />
            <MenuButton
              className="menu"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              size="small"
            >
              {open ? (
                <span className="close-icon">
                  <CloseIcon />
                </span>
              ) : (
                <span className="open-icon">
                  <MenuIcon />
                </span>
              )}
            </MenuButton>
          </div>
          <Nav className={open ? "open" : undefined}>
            <List>
              <Typography component="li">
                <Link href="#Features">Features</Link>
              </Typography>
              <Typography component="li">
                <Link href="#Pricing">Pricing</Link>
              </Typography>
              <Typography component="li">
                <Link href="#Contact">Contact</Link>
              </Typography>
            </List>
            <LoginButton variant="contained" color="secondary" disableElevation>
              <Typography fontWeight={500}>LOGIN</Typography>
            </LoginButton>
          </Nav>
          <Links className={open ? "open" : undefined}>
            <FacebookIcon />
            <TwitterIcon />
          </Links>
        </Container>
      </AppBar>
    </>
  );
}
