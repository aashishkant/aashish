import { React } from "react";
import { Container, styled, useTheme } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import Slider from "react-slick";
import "animate.css";

//Component styles
const StyledCarouselContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  alignItems: "center",
  width: "75% !important",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "4rem",
    width: "80% !important",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "4rem",
    width: "90% !important",
  },
}));
const StyledCarouselCard = styled("div")(({ theme }) => ({
  borderRadius: "2rem !important",
  padding: "2rem 2rem",
  backgroundImage: `radial-gradient(ellipse at center, ${theme.palette.backgroundSecondary.main}10, ${theme.palette.backgroundSecondary.main}40)`,
  [theme.breakpoints.down("sm")]: {
    padding: "1.25rem 1.25rem",
  },
  maxWidth: "75%",
  border: `0.25rem solid ${theme.palette.backgroundSecondary.main}70`,
}));
const StyledCarouselTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(28px, 4vw, 44px) !important",
  color: theme.palette.textSecondary.main,
}));
const StyledCarouselSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(18px, 2vw, 28px) !important",
  color: theme.palette.textMain.main,
}));
const StyledCarouselSubText = styled(Typography)(({ theme }) => ({
  marginTop: "1rem !important",
  fontSize: "clamp(16px, 1.8vw, 24px) !important",
  color: theme.palette.textMain.main,
}));

const customDotsClass = "custom-dots-class";

const Experience = () => {
  const theme = useTheme();

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [s1, s1InView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const dotStyles = `
    .${customDotsClass} li button:before {
      font-size: 0.75rem;
      color: ${theme.palette.textMain.main} !important;
      margin-top: 1rem;
      opacity: 0.4;
    }

    .${customDotsClass} li .slick-active button:focus:before  {
      opacity: 1 !important;
    }

    .${customDotsClass} li .slick-active button:before  {
      opacity: 1 !important;
    }
  `;

  const settings = {
    dots: true,
    autoplay: false,
    dotsClass: `slick-dots ${customDotsClass}`,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onlineExperiences = [
    {
      id: "1",
      company: "Upwork, Fiverr, PeoplePerHour",
      jobTitle: "Freelance Software Engineer",
      years: "2022 - Present",
      description:
        "Built custom web applications using React, Next.js, and Node.js. Automated workflows and optimized performance with Flask and Django. Designed and deployed scalable solutions, integrating REST APIs and responsive UI/UX.",
    },
    {
      id: "2",
      company: "Yashams IT Solutions",
      jobTitle: "Python Developer",
      years: "Jun 2023 - Dec 2023",
      description:
        "Implemented web scraping and automation using Python and Selenium. Developed and maintained scalable web applications with React and Flask. Automated workflows using Laravel and Python, improving operational efficiency.",
    },
    {
      id: "3",
      company: "SlashPlus",
      jobTitle: "Internship",
      years: "May 2020 - Jul 2020",
      description:
        "Gained experience in web development and troubleshooting. Designed and maintained responsive websites, resolved technical issues, and provided support for software installations and network configurations.",
    },
  ];
  

  return (
    <Scroll.Element name="Experience">
      <StyledGenericRoot ref={experienceContainer}>
        <StyledGenericContainer
          sx={
            experienceContainerInView
              ? {
                  visibility: "visible",
                  animation: "fadeInUp",
                  animationDuration: "1s",
                }
              : { visibility: "hidden" }
          }
        >
          <StyledGenericTitle component="h1">
            Experience
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            While my professional experience is limited, I've been actively involved in online communities and freelance projects. Here are some of my online experiences:
          </StyledGenericSubText>
        </StyledGenericContainer>

        <StyledCarouselContainer
          ref={s1}
          sx={
            s1InView
              ? {
                  visibility: "visible",
                  animation: "fadeInUp",
                  animationDuration: "1s",
                }
              : { visibility: "hidden" }
          }
        >
          <style>{dotStyles}</style>
          <Slider {...settings}>
            {onlineExperiences.map((item) => (
              <StyledCarouselCard key={item.id}>
                <StyledCarouselTitle>{item.company}</StyledCarouselTitle>
                <StyledCarouselSubTitle>{item.jobTitle}</StyledCarouselSubTitle>
                <StyledCarouselSubTitle>{item.years}</StyledCarouselSubTitle>
                <StyledCarouselSubText>
                  {item.description}
                </StyledCarouselSubText>
              </StyledCarouselCard>
            ))}
          </Slider>
        </StyledCarouselContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Experience;
