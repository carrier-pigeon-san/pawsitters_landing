import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const Links = [
    {text: "Features", targetId: "features"},
    {text: "About", targetId: "about"},
    {text: "Contact", targetId: "contact"},
    {text: "Login", targetId: "login"},
]

export const Team = [
  {
    name: "Yasmine Znatni",
    github: "https://github.com/Assiminee",
    twitter: "#",
    linkedin: "#",
    photo: "src/assets/images/Yasmine_Znatni.jpeg"
  },
  {
    name: "Sandy Obare",
    github: "https://github.com/carrier-pigeon-san",
    twitter: "#",
    linkedin: "#",
    photo: "src/assets/images/Sandy-Obare.png"
  }
]

export const Content = {
    paragraph1: "This project began with a shared vision among the team. The idea was born from a simple yet powerful concept: connecting pet owners with trustworthy sitters through a user-friendly platform. We saw the growing demand for pet care services in our local areas, and we realized this was the perfect opportunity to challenge ourselves by building a solution using industry-standard tools.",
    paragraph2: "What drew us to this project was its simplicity—an idea that was easy to grasp but also complex enough to push us to innovate. By working together, we aimed to not only provide a valuable service for pet owners but also to refine our skills in developing robust web platforms"
}

export const SocialMediaLinks = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
