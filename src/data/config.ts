const config = {
  title: "Sagar Adhikari | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Sagar Adhikari, a full-stack developer specializing in interactive web experiences, custom dashboards, CMS platforms, and modern web applications. Discover my latest work and let's build something amazing together!",
    short:
      "Discover the portfolio of Sagar Adhikari, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Sagar Adhikari",
    "portfolio",
    "full-stack developer",
    "web development",
    "interactive websites",
    "dashboard",
    "CMS",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "Vue",
    "Express",
  ],
  author: "Sagar Adhikari",
  email: "adhikarisagar482@gmail.com",
  site: "https://sagar0378.github.io",

  // for github stars button
  githubUsername: "Sagar0378",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/SAGAR_ADHIKARIE",
    linkedin: "https://www.linkedin.com/in/sagar-adhikari-baa543262",
    instagram: "https://www.instagram.com/SAGAR_ADHIKARIE",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Sagar0378",
  },
};
export { config };
