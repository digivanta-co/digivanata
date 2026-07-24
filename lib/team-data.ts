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
    photo: u("photo-1507003211169-0a1dd7228f2d", 900),
    socials: [
      { type: "linkedin", href: "#" },
      { type: "instagram", href: "#" },
      { type: "mail", href: "mailto:info@digivanta.com" },
    ] as Social[],
  },
  {
    name: "Sachin Gupta",
    role: "Co-Founder",
    specialty: "Operations & Business Growth",
    desc: "Strategic mind behind execution and planning. He ensures every idea turns into measurable digital success.",
    photo: "/team/sachin.jpg",
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
        role: "Digital Marketing Executive",
        badge: "SMM & Campaign Specialist",
        photo: "/team/rishku.jpg",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
          { type: "mail", href: "mailto:info@digivanta.com" },
        ] as Social[],
      },
      {
        name: "Sunny",
        role: "Digital Marketing Executive",
        badge: "PPC & Lead Generation",
        photo: "/team/sunny.jpg",
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
        role: "Senior Graphic Designer",
        badge: "Brand Identity & Motion",
        photo: "/team/lakshay.jpg",
        socials: [
          { type: "linkedin", href: "#" },
          { type: "instagram", href: "#" },
        ] as Social[],
      },
      {
        name: "Suraj",
        role: "Graphic Designer",
        badge: "Social Media Creatives",
        photo: "/team/suraj.jpg",
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
        name: "Vikram Singh",
        role: "Lead Web Developer",
        badge: "Full-Stack & Performance",
        photo: u("photo-1607990281513-2c110a25bd8c"),
        socials: [
          { type: "linkedin", href: "#" },
          { type: "github", href: "#" },
        ] as Social[],
      },
    ],
  },
];
