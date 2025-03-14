import { React } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  List,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import {

  emailSvgPath,
  githubSvgPath,
  linkedInSvgPath,

} from "../SvgHelper";


// Define the SVG path data for YouTube icon
const youtubeSvgPath = "M16.984 5.016v13.969l10.031-6.984-10.031-7.031z";

// Define the SVG path data for Instagram icon
const instagramSvgPath = "M12 2.078c3.203 0 3.578 0.016 4.859 0.07 3.016 0.141 4.66 0.844 5.832 1.406 1.617 0.75 2.844 1.695 3.883 2.734 1.039 1.039 1.984 2.266 2.734 3.883 0.563 1.172 1.266 2.816 1.406 5.828 0.055 1.281 0.07 1.656 0.07 4.859s-0.016 3.578-0.07 4.859c-0.141 3.016-0.844 4.66-1.406 5.832-0.75 1.617-1.695 2.844-2.734 3.883-1.039 1.039-2.266 1.984-3.883 2.734-1.172 0.563-2.816 1.266-5.828 1.406-1.281 0.055-1.656 0.07-4.859 0.07s-3.578-0.016-4.859-0.07c-3.016-0.141-4.66-0.844-5.832-1.406-1.617-0.75-2.844-1.695-3.883-2.734-1.039-1.039-1.984-2.266-2.734-3.883-0.563-1.172-1.266-2.816-1.406-5.828-0.055-1.281-0.07-1.656-0.07-4.859s0.016-3.578 0.07-4.859c0.141-3.016 0.844-4.66 1.406-5.832 0.75-1.617 1.695-2.844 2.734-3.883 1.039-1.039 2.266-1.984 3.883-2.734 1.172-0.563 2.816-1.266 5.828-1.406 1.281-0.055 1.656-0.07 4.859-0.07z";

export { youtubeSvgPath, instagramSvgPath };


//Component styles//
const StyledFooterRoot = styled("section")(({ theme }) => ({
  minHeight: "10vh",
  [theme.breakpoints.down("lg")]: {
    minHeight: "20vh",
  },
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
}));
const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.textMain.main,
}));
const StyledFooterList = styled(List)({
  display: "block",
});
const StyledListItemLink = styled("a")(({ theme }) => ({
  justifyContent: "center",
  padding: "0.4rem",
  width: "0",
}));
const StyledViewCodeLink = styled("a")(({ theme }) => ({
  textDecoration: "unset",
  color: theme.palette.textMain.main,
  "&:hover": {
    color: theme.palette.textSecondary.main,
  },
}));

//End component styles

const Footer = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const [footer, footerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledFooterRoot ref={footer}>
      <div
        style={
          footerInView ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className={footerInView ? "animate__animated animate__fadeInUp" : ""}
      >
        {lg && (
          <StyledFooterList>
            <StyledListItemLink
              sx={{ marginRight: "-0.3rem" }}
              href="https://www.linkedin.com/in/aashish-kant-b24537143/"
              target="_blank"
            >
              <svg
                fill={theme.palette.textMain.main}
                width="32px"
                height="32px"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d={linkedInSvgPath} />
              </svg>
            </StyledListItemLink>
            <StyledListItemLink
              href="https://github.com/aashishkant"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
                fillRule="evenodd"
                fill={theme.palette.textMain.main}
              >
                <title>Github</title>
                <path fillRule="evenodd" d={githubSvgPath} />
              </svg>
            </StyledListItemLink>
            <StyledListItemLink
              href="mailto:meashishkant7972@gmail.com"
              sx={{ transform: "scale(0.95)" }}
            >
              <svg
                fill={theme.palette.textMain.main}
                height="32px"
                width="32px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 75.294 75.294"
                xmlSpace="preserve"
              >
                <title>Email</title>
                <g>
                  <path d={emailSvgPath} />
                </g>
              </svg>
            </StyledListItemLink>
            {/* Add YouTube and Instagram links */}
            <StyledListItemLink
              href="https://youtube.com/@aashishkant9521"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                fill={theme.palette.textMain.main}
              >
                <title>YouTube</title>
                <path d={youtubeSvgPath} />
              </svg>
            </StyledListItemLink>
            <StyledListItemLink
              href="https://instagram.com/aashish____kant"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                fill={theme.palette.textMain.main}
              >
                <title>Instagram</title>
                <path d={instagramSvgPath} />
              </svg>
            </StyledListItemLink>
          </StyledFooterList>
        )}
        <StyledFooterText>Developed by Aashish Kant</StyledFooterText>
        <StyledFooterText sx={{ marginBottom: "1rem" }}>
          <StyledViewCodeLink href="https://github.com/aashishkant/aashish">
            View the code <GitHub sx={{ marginBottom: "-0.2rem" }} />
          </StyledViewCodeLink>
        </StyledFooterText>
      </div>
    </StyledFooterRoot>
  );
};

export default Footer;
