export const siteConfig = {
  name: "Abdallah Hatem",
  wordmark: { head: "abdallah", tail: ".dev" },
  url: "https://abdallah-hatem.vercel.app",
  title: "Abdallah Hatem | Fullstack Developer",
  description:
    "Fullstack developer building government platforms, marketplaces, admin systems, and mobile apps. React, Next.js, React Native, and Node.",
  role: "Fullstack Developer",
  email: "abdallahhatem101@gmail.com",
  phoneDisplay: "+20 102 131 3841",
  phoneHref: "tel:+201021313841",
  location: "Cairo, Egypt",
  linkedinUrl: "https://www.linkedin.com/in/abdallah-hatem-39a98018a/",
  githubUrl: "https://github.com/abdallah-hatem",
  resumeUrl: "/resume.pdf",
  keywords: [
    "fullstack developer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "front-end developer Egypt",
    "web platform development",
    "mobile app development",
    "admin panel development",
    "Abdallah Hatem",
  ],
} as const;

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
