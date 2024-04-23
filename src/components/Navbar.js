import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import navbarData from "../content/navbar.json";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Box,
  List,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide,
  styled,
} from "@mui/material";
import { Link } from "react-scroll";

//Component Styles//
const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  placeSelf: "center",
  justifyContent: "center",
  maxWidth: "1200px",
  width: "90vw !important",
  [theme.breakpoints.down("sm")]: {
    width: "100vw !important",
  },
}));
const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  transition:
    "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled
    ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
    : "none !important",
  backgroundColor: theme.palette.background.main + " !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("sm")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}));
const StyledAppBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "& p": {
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
  },
}));
const StyledAppBarButton = styled(Button)(({ theme }) => ({
  padding: "10px 8px",
  color: theme.palette.textMain.main + " !important",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s !important",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.textSecondary.main + " !important",
    transform: "translateY(-2px)",
  },
}));
const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.textMain.main + " !important",
    cursor: "pointer",
    fontSize: "1.75rem",
    padding: "0",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
    },
  },
}));
const StyledResumeLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    fontSize: "1.2rem",
    backgroundColor: theme.palette.backgroundSecondary.main + " !important",
    color: "#FFFFFF",
    transition: "background-color 200ms ease-in-out 0s !important",
    "&:hover": {
      backgroundColor: theme.palette.buttonHover.main + " !important",
    },
  },
}));
const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "1s",
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.textMain.main,
    zIndex: "2 !important",
  },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}));
//End component style//

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const MuiTheme = useTheme();
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));

  //disable animations on appbar after they have animated once
  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  //capture window scroll height for changing navbar styles
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //save the user's selected color theme choice
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  //hide the AppBar when scrolling down
  const trigger = useScrollTrigger({
    target: window,
  });

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(isOpen);
  };

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          animation: !hasAnimated ? "fadeIn" : "",
          animationDuration: "2s",
        }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={1}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button onClick={toggleDrawer(false)}>
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <StyledDrawerList>
            <StyledResumeLink
              href={
                process.env.PUBLIC_URL +
                "/aash.pdf"
              }
              target="_blank"
            >
              <Typography
                sx={{
                  padding: "0.5rem 1rem !important",
                  fontSize: "1.75rem !important",
                  transition:
                    "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important",
                  animation: "fadeIn",
                  animationDuration: "2s",
                }}
              >
                Resume
              </Typography>
            </StyledResumeLink>
          </StyledDrawerList>
          {navbarData.map((data) => (
            <StyledDrawerList key={data.id}>
              <StyledAppBarDrawerLink
                onClick={toggleDrawer(false)}
                to={data.name}
                smooth={true}
                duration={1000}
              >
                <Typography>{data.name}</Typography>
              </StyledAppBarDrawerLink>
            </StyledDrawerList>
          ))}
          <List>
            <Button
              sx={{
                color: MuiTheme.palette.textMain.main,
                animation: "fadeIn",
                animationDuration: "2s",
              }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </Button>
          </List>
        </Box>
      </StyledDrawer>
    </>
  );

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledAppBarButton
          aria-label="Change theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </StyledAppBarButton>
      </div>
      {navbarData.map((data) => (
        <div
          key={data.id}
          className={
            !hasAnimated ? "animate__animated animate__fadeInDown" : ""
          }
        >
          <StyledAppBarLink
            href={`#${data.name}`}
            to={data.name}
            smooth={true}
            duration={1000}
          >
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
        </div>
      ))}
      <div
        style={{ paddingLeft: "4px" }}
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledResumeLink
          href={
            process.env.PUBLIC_URL + "/aash.pdf"
          }
          target="_blank"
        >
          <Typography>Resume</Typography>
        </StyledResumeLink>
      </div>
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position="fixed" isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              <svg
                viewBox="0 0 500 500"
                style={{
                  width: "44px",
                  animation: !hasAnimated
                    ? collapse
                      ? "fadeIn"
                      : "fadeInDown"
                    : "",
                  animationDuration: collapse ? "2s" : "1s",
                }}
              >
                <path
                  d="M 244.1,0 H 45.9 C 20.9,0 0,20.9 0,45.9 v 398.3 c 0,25 20.9,45.9 45.9,45.9 h 398.3 c 25,0 45.9,-20.9 45.9,-45.9 V 45.9 C 490,20.9 469.1,0 444.1,0 Z M 449.3,444.1 c 0,3.1 -2.1,5.2 -5.2,5.2 H 45.9 c -3.1,0 -5.2,-2.1 -5.2,-5.2 V 45.9 c 0,-3.1 2.1,-5.2 5.2,-5.2 h 398.3 c 3.1,0 5.2,2.1 5.2,5.2 v 398.2 H 449.3 Z M 271.4,202.2 c -4.6,-10.7 -15.2,-17.7 -26.9,-17.7 s -22.3,7 -26.9,17.7 l -84.5,133.2 c -11.3,28.1 25.4,38.9 36,15.6 l 11.6,-26.7 h 75.1 l 11.7,27 c 11,24.3 47,9.4 35.1,-15.2 L 271.4,202.2 Z M 222.1,288.8 l 22.9,-52.1 l 21.9,52.1 H 222.1 Z M 324.2,127.2 H 165.8 c -11.5,0 -20.9,9.4 -20.9,20.9 s 9.4,20.9 20.9,20.9 h 158.5 c 11.5,0 20.9,-9.4 20.9,-20.9 S 335.7,127.2 324.2,127.2 Z"
                  style={{ fill: MuiTheme.palette.textMain.main }}
                />
              </svg>
            </Typography>
            {collapse ? drawer : navbar}
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>
  );
};

export default Navbar;
