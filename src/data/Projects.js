import Nke from "../assets/ProjectImages/Nke.png";
import XploreAfrica from "../assets/ProjectImages/XploreAfrica.png";
import NgGameDev from "../assets/ProjectImages/NGGameDev.png";
import BabaAI from "../assets/ProjectImages/BabaAI.png";
import jpegbyprince from "../assets/ProjectImages/jpegbyprince.png";
import spaBooking from "../assets/ProjectImages/Spa-Booking.png";
import cafeSite from "../assets/ProjectImages/cafe-site.png";

const projects = [
  {
    name: "Nke Africa",
    image: Nke,
    description:
      "Nke Africa is a story-telling platform, dedicated to telling authentic stories of African Women.",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://nkeafrica.netlify.app",
  },
  {
    name: "XploreAfrica",
    image: XploreAfrica,
    description: "XploreAfrica is a Software Development Agency.",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://xploreafrica.vercel.app",
  },
  {
    name: "Spa Booking System",
    image: spaBooking,
    description:
      "The Spa Booking System is a full-stack web application that streamlines spa appointment scheduling for both customers and spa administrators. This system allows users to seamlessly book spa services, receive automated email confirmations, and store bookings in a Google Spreadsheet for easy admin access.",
    technologies: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB"],
    link: "https://salon-site-lilac.vercel.app",
  },
  {
    name: "Baba's AI",
    image: BabaAI,
    description:
      "Baba's AI is an AI tool that helps you simplify task and boost productivity with adequate fluency in pidgin as well as your native tongue and English",
    technologies: ["ReactJS", "TailwindCSS", "Express", "MongoDb"],
    link: "https://baba-frontend-react.onrender.com/",
  },
  {
    name: "Coffee Shop Website",
    image: cafeSite,
    description:
      "A landing page for a cafe shop to display their services, informations and gallery",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
    link: "https://cafe-site-cyan.vercel.app",
  },
  {
    name: "NG.GameDev",
    image: NgGameDev,
    description:
      "NG.GameDev is a vibrant Nigerian game community to bring creators in the game space together for collaboration and knowledge sharing.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ng-gamedev.netlify.app",
  },
  {
    name: "Photographer Portfolio",
    image: jpegbyprince,
    description: "This is a one page portfolio for a Photographer",
    technologies: ["ReactJS", "TailwindCSS"],
    link: "https://jpegbyprince.vercel.app",
  },
];

export default projects;
