import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

// Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Adjusted height to cover the entire viewport
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));

// End Component styles

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1800);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500" // Adjusted viewBox to match the logo dimensions
          width="8rem"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 244.1,0 H 45.9 C 20.9,0 0,20.9 0,45.9 v 398.3 c 0,25 20.9,45.9 45.9,45.9 h 398.3 c 25,0 45.9,-20.9 45.9,-45.9 V 45.9 C 490,20.9 469.1,0 444.1,0 Z M 449.3,444.1 c 0,3.1 -2.1,5.2 -5.2,5.2 H 45.9 c -3.1,0 -5.2,-2.1 -5.2,-5.2 V 45.9 c 0,-3.1 2.1,-5.2 5.2,-5.2 h 398.3 c 3.1,0 5.2,2.1 5.2,5.2 v 398.2 H 449.3 Z M 271.4,202.2 c -4.6,-10.7 -15.2,-17.7 -26.9,-17.7 s -22.3,7 -26.9,17.7 l -84.5,133.2 c -11.3,28.1 25.4,38.9 36,15.6 l 11.6,-26.7 h 75.1 l 11.7,27 c 11,24.3 47,9.4 35.1,-15.2 L 271.4,202.2 Z M 222.1,288.8 l 22.9,-52.1 l 21.9,52.1 H 222.1 Z M 324.2,127.2 H 165.8 c -11.5,0 -20.9,9.4 -20.9,20.9 s 9.4,20.9 20.9,20.9 h 158.5 c 11.5,0 20.9,-9.4 20.9,-20.9 S 335.7,127.2 324.2,127.2 Z"
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;
