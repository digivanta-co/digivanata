/* ================================================================
   Team Page — Content Data
   ================================================================ */

const u = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces&w=${w}&q=80`;

export type Social = { type: "linkedin" | "instagram" | "mail" | "github"; href: string };

export const ABOUT_TEAM_IMAGE = {
  src: "/team/team-member-1.png",
  alt: "The Digivanta team driving digital growth",
};

export const TEAM_LEADERS = [
  {
    name: "Yash Gupta",
    role: "Founder & CEO",
    specialty: "Digital Strategy & Vision",
    desc: "Visionary leader with a passion for digital growth and innovation. He leads Digivanta with strategy, creativity and purpose.",
    photo: u("photo-1560250097-0b93528c311a", 900),
    socials: [
      { type: "linkedin", href: "#" },
      { type: "instagram", href: "#" },
      { type: "mail", href: "mailto:info@digivanta.com" },
    ] as Social[],
  },
  {
    name: "Sachin Gupta",
    role: "Strategy & Busniess Grwoth",
    specialty: "Operations & Business Growth",
    desc: "Strategic mind behind execution and planning. He ensures every idea turns into measurable digital success.",
    photo: "/team/sachin.png",
    socials: [
      { type: "linkedin", href: "#" },
      { type: "instagram", href: "#" },
      { type: "mail", href: "mailto:info@digivanta.com" },
    ] as Social[],
  },
];

export const TEAM_GROUPS = [
  {
    category: "marketing",
    title: "Digital Marketing Executives",
    icon: "marketing",
    theme: "gold" as const,
    members: [
      {
        name: "Rishku",
        role: "sr.Digital marketing executive",
        badge: "sr.marketing executive",
        photo: "/team/rishku.png",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
          { type: "mail", href: "mailto:info@digivanta.com" },
        ] as Social[],
      },
      {
        name: "Suraj",
        role: "sr.Digital marketing executive",
        badge: "PPC & Lead Generation",
        photo: "/team/suraj.png",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
        ] as Social[],
      },
    ],
  },
  {
    category: "design",
    title: "Graphic Designers",
    icon: "design",
    theme: "navy" as const,
    members: [
      {
        name: "Lakshay",
        role: "Video editor & Graphic Designer",
        badge: "Brand Identity & Motion",
        photo: "/team/lakshay.png",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
        ] as Social[],
      },
      {
        name: "Sunny",
        role: "Graphic Designer",
        badge: "Social Media Creatives",
        photo: "/team/sunny.png",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
        ] as Social[],
      },
    ],
  },
  {
    category: "code",
    title: "Web & App Developers",
    icon: "code",
    theme: "blue" as const,
    members: [
      {
        name: "Ashutosh",
        role: "Software developer",
        badge: "Full Stack & Performance",
        photo: "/team/ashu.png",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "github", href: "#" },
        ] as Social[],
      },
    ],
  },
];
