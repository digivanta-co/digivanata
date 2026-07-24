import { FaqItem } from "@/components/ui/faq-accordion";

/* ================================================================
   Graphic Designing page — content data
   (organised from the provided copy; lightly edited for readability)
   ================================================================ */

export const GD_HERO = {
  badge: "Graphic Designing Company · Delhi",
  // line render styles: solid → outline → gradient
  titleLines: ["Your brand", "is judged", "in 0.05s"],
  sub: "Make your design speak first. People form a first impression about a brand in just 0.05 seconds — and design plays a major role in that decision. A strong visual identity instantly increases trust, engagement and brand recall.",
  primaryCta: "Discover my brand's potential",
  ghostCta: "See the services",
  meta: [
    { n: "0.05s", l: "First impression window" },
    { n: "800+", l: "Brands served in NCR" },
    { n: "16+", l: "Years of creative work" },
  ],
  marquee: ["Logo", "Branding", "Social", "Packaging", "Print", "UI Graphics"],
};

export const GD_PROBLEM = {
  titleLines: ["Why businesses need", "professional design"],
  intro:
    "Many businesses invest heavily in marketing but overlook the importance of quality design. Generic visuals, inconsistent branding and low-quality graphics quietly cost you customers.",
  cta: "Fix My Brand Image",
  pains: [
    { title: "Low customer trust", desc: "Outdated creatives make even great products look unprofessional.", icon: "shield" },
    { title: "Poor social engagement", desc: "Generic visuals get scrolled past in crowded feeds.", icon: "thumbs" },
    { title: "Weak brand recognition", desc: "Inconsistent branding means customers simply forget you.", icon: "eye" },
    { title: "Reduced conversion rates", desc: "Confusing layouts and visuals push buyers away.", icon: "trending" },
    { title: "Unprofessional appearance", desc: "First impressions form in 0.05 seconds — design decides them.", icon: "alert" },
  ],
};

export const GD_IMPACT = {
  titleLines: ["Good design isn't decoration.", "It's business growth."],
  intro:
    "Professional design directly influences how customers perceive your business — turning ideas into meaningful visual experiences that support long-term growth.",
  benefits: [
    "Build trust faster",
    "Increase social engagement",
    "Improve marketing performance",
    "Create a memorable brand image",
    "Communicate professionally",
  ],
  stats: [
    { value: 800, suffix: "+", label: "Happy clients across Delhi NCR" },
    { value: 16, suffix: "+", label: "Years of creative experience" },
    { value: 100, suffix: "%", label: "Brand-consistent deliverables" },
  ],
};

export const GD_SERVICES = {
  titleLines: ["Our graphic design", "services in Delhi"],
  intro:
    "As a trusted graphic design studio in Delhi NCR, we offer creative solutions tailored for modern businesses — from startups to growing brands across Delhi, Noida and Gurugram.",
  items: [
    {
      title: "Logo Design",
      icon: "pen",
      desc: "Your logo is the face of your brand. We create memorable, versatile logos that help you stand out in a crowded market.",
      points: ["Custom logo creation", "Brand color selection", "Typography design", "Brand style guidelines"],
      wide: true,
    },
    {
      title: "Brand Identity Design",
      icon: "palette",
      desc: "A unified visual identity for both online and offline communication — no more inconsistent branding across platforms.",
      points: ["Brand identity kits", "Corporate branding materials", "Packaging designs", "Business stationery"],
      wide: true,
    },
    {
      title: "Social Media Creatives",
      icon: "share",
      desc: "Engaging, professional creatives that improve brand visibility and audience interaction.",
      points: ["Instagram post creatives", "Facebook banners", "LinkedIn graphics", "Ad & campaign designs", "Festival creatives"],
    },
    {
      title: "Brochure & Print Design",
      icon: "book",
      desc: "Clean, informative print designs that still play a major role in building trust and credibility.",
      points: ["Brochure design", "Flyers & pamphlets", "Catalogue design", "Business cards", "Menus & posters"],
    },
    {
      title: "Website & Digital Graphics",
      icon: "monitor",
      desc: "Modern, conversion-friendly visuals that improve user experience and reduce bounce rates.",
      points: ["Website banners", "Landing page graphics", "UI design elements", "Web ads & promos"],
    },
  ],
};

export const GD_PROCESS = {
  titleLines: ["Our graphic", "design process"],
  intro:
    "Every color, font and visual tells a story. Our process makes sure yours tells the right one — strategically, consistently, beautifully.",
  steps: [
    { title: "Discover", desc: "Understanding your brand, business goals and target audience." },
    { title: "Research", desc: "Studying industry trends and competitor designs." },
    { title: "Strategy", desc: "Planning creative concepts and visual direction." },
    { title: "Design", desc: "Creating custom design concepts and brand visuals." },
    { title: "Feedback", desc: "Sharing designs for your review and suggestions." },
    { title: "Refine", desc: "Polishing designs based on client feedback." },
    { title: "Finalize", desc: "High-quality output for digital and print use." },
    { title: "Deliver", desc: "Optimized design files with full brand consistency." },
  ],
};

export const GD_WHY = {
  titleLines: ["Why choose our design", "studio in Delhi"],
  intro:
    "We combine creativity with strategy to deliver designs that are not only visually attractive but business-oriented — helping startups, local businesses and growing brands across Delhi NCR build impactful visual identities.",
  points: [
    { title: "Research-Driven Creativity", desc: "Every design decision is backed by audience and market insight.", icon: "lightbulb" },
    { title: "Customized Solutions", desc: "No templates — visuals tailored to your brand and goals.", icon: "wand" },
    { title: "Brand Consistency", desc: "One unified identity across every platform and touchpoint.", icon: "layers" },
    { title: "Experienced Designers", desc: "A seasoned creative team behind every deliverable.", icon: "users" },
    { title: "Affordable & Scalable", desc: "Plans that grow with you, without breaking budgets.", icon: "coins" },
    { title: "Timely Delivery", desc: "Deadlines respected, launches never delayed.", icon: "clock" },
  ],
};

export const GD_INDUSTRIES = [
  "Startups",
  "E-commerce Brands",
  "Restaurants & Cafes",
  "Real Estate",
  "Healthcare",
  "Educational Institutes",
  "Fashion & Lifestyle",
  "Corporate Businesses",
];

export const GD_FAQS: FaqItem[] = [
  {
    question: "How does graphic design help increase sales?",
    answer:
      "Professional graphic design improves the way customers see your brand. High-quality visuals create trust, attract attention and make marketing campaigns more effective — leading to better conversions and increased sales.",
  },
  {
    question: "Can graphic design improve social media engagement?",
    answer:
      "Yes. Creative, visually appealing social media designs help brands stand out in crowded feeds. Well-designed posts receive higher engagement, shares and better audience interaction.",
  },
  {
    question: "Why is branding important for small businesses?",
    answer:
      "Branding helps small businesses build recognition and trust in the market. A consistent brand identity makes a business look more professional and helps customers remember it easily.",
  },
  {
    question: "How does logo design impact customer trust?",
    answer:
      "A professionally designed logo creates a strong first impression and reflects brand credibility. Customers are more likely to trust businesses with a clean, modern and consistent visual identity.",
  },
  {
    question: "What makes a good business logo?",
    answer:
      "A good logo is simple, memorable, versatile and relevant to the brand. It should communicate the company's personality while remaining easy to recognize across digital and print platforms.",
  },
  {
    question: "How does visual identity help businesses grow?",
    answer:
      "A strong visual identity creates consistency across marketing channels and improves brand recognition. It helps businesses appear more professional and builds stronger customer connections.",
  },
  {
    question: "Why do businesses need professional social media creatives?",
    answer:
      "Professional creatives help brands communicate clearly and grab attention quickly. Consistent, engaging visuals also improve brand awareness and online presence.",
  },
  {
    question: "Can good design improve website conversion rates?",
    answer:
      "Yes. User-friendly, visually appealing website design improves customer experience and encourages visitors to take action. Clear layouts and attractive visuals increase leads, inquiries and sales.",
  },
  {
    question: "How does packaging design influence buying decisions?",
    answer:
      "Packaging plays a major role in product perception. Attractive, professional packaging grabs attention, communicates quality and encourages customers to choose your product.",
  },
  {
    question: "What are the benefits of hiring a graphic design company in Delhi?",
    answer:
      "A professional graphic designing company in Delhi provides creative expertise, branding consistency and customized design solutions — improving communication, customer trust and overall market presence.",
  },
];

export const GD_CTA = {
  eyebrow: "Let's create",
  title: "What is your brand saying without words?",
  sub: "If your business is struggling with inconsistent branding, low engagement or outdated visuals, professional design can build a stronger, more trustworthy brand presence. Serving Delhi, Noida, Gurugram and all NCR regions.",
  primary: "Discover My Brand's Potential",
  secondary: "Schedule a Free Consultation",
};
