export type NavLink = {
  label: string;
  href: string;
};

export type PlanCard = {
  title: string;
  button: string;
  features: string[];
};

export type HeroContent = typeof heroData;
export type AboutContent = typeof aboutData;

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Highlights", href: "#highlights" },
  { label: "Location", href: "#location" },
  { label: "Plot Options", href: "#pricing" },
];

export const heroData = {
  headline: "Your Friendly Neighbourhood",
  subline:
    "Where Life Finds Its Natural Rhythm",
  ctaPrimary: "Explore Highway Greens",
  heroImage:
    "/landingPageA/hero-bg.png",
  heroMobileImage:
  "/landingPageA/highway-greens-mobile.jpg"
};

export const aboutData = {
  title: "A DIFFERENT IDEA OF HOME",
  subtitle: "Where Connectivity Meets Nature",
  image: "/landingPageA/about.png",
  mobileImage: "/landingPageA/about-mobile.jpg",
  details: [
    "Before a home became an asset, it was a place of belonging, a place where mornings began slowly, children grew closer to nature, elders found comfort beneath open skies, and neighbours became part of everyday life.",
    "Highway Greens is a thoughtfully planned community created for people who seek urban connectivity without the congestion of conventional city living. Open green environments, landscaped pathways, wellness spaces and community-focused amenities come together to create a lifestyle with more space, greater calm and a stronger sense of belonging.",
    "It is more than a place to own land. It is an environment designed to support better living today and meaningful value for the future.",
  ],
};

export const pricingPlans: PlanCard[] = [
  {
    title: "Residential Plot",
    button: "Request Details",
    features: [
      "Size:  To be confirmed",
      "Price:  On request",
      "Availability:  Subject to current inventory",
    ],
  },

  {
    title: "Preferential Location Plot",
    button: "Check Availability",
    features: [
      "Size:  To be confirmed",
      "Price:  On request",
      "Availability:  Subject to current inventory",
    ],
  },

  {
    title: "Current Offers",
    button: "Get Price Details",
    features: [
      "Speak with our team to understand available payment plans, applicable location charges and current booking opportunities.",
    ],
  },
];
