import profilePicture01 from "../images/yoni.jpg";
import profilePicture02 from "../images/adme.jpg";
import footerImage01 from "../images/footer01.jpg";
// Global Section
export const homeGlobalData = {
  title: "We're a global community",
  description:
    "People are at the core of everything we do. We take great pride in cultivating a culture of empowerment, flexibility, acceptance, and a place where everyone is challenged to bring their best work.",
  lists: [
    { id: 1, content: "50+ years of experience in application services" },
    { id: 2, content: "70+ teammates across the globe" },
  ],
  btnName: "Join Our Team",
};
// Profile Data

export const profileData = [
  {
    id: 1,
    picture: profilePicture02,
    testimony:
      "The biggest reason we engaged ZEGA Technologies was their knowledge and their expertise in designing and building a project management office and their ability to handle comple projects.",
    name: "Admasu Lalisho",
    department: "Zega CEO and Lead Developer",
  },
  {
    id: 2,
    picture: profilePicture01,
    testimony:
      "To me ZEGA represents the true meaning of teamwork, positivity, flexibility and a place where opportunities are given to those who are willing to take the challenge.",
    name: "Yonathan Admasu",
    department: "Talent Development Lead",
  },
];

// Additional Content cards

export const additionalData = [
  {
    id: 1,
    iconClass: "fa-solid fa-heart-circle-check",
    title: "Engaged Empathy",
    description: "We listen actively to create solutions that fit the need",
  },
  {
    id: 2,
    iconClass: "fa-solid fa-comment-dots",
    title: "Productive Candor",
    description:
      "We harness honest, constructive conversations to support informed decision-making",
  },
  {
    id: 3,
    iconClass: "fa-solid fa-handshake",
    title: "Earned Trust",
    description: "We build credibility through our actions, not just our words",
  },
  {
    id: 4,
    iconClass: "fa-solid fa-truck-fast",
    title: "Overdeliver",
    description: "We know that “good enough” is not always good enough",
  },
];

// Footer Data

export const footerData = {
  title: "Partner With Us",
  description:
    "Whether you need help developing your app, managing your tech or ideas on how to make your IT teams more efficient – we can help.",
  btnName: "Book A Call",
  linkAddress: "/contact",
  image: footerImage01,
};
