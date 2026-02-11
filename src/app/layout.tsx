import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Kumar | Portfolio",
    template: "%s | Ayush Kumar",
  },
  description:
    "Portfolio website of Ayush Kumar showcasing full stack development, projects, skills, education, and experience.",
  keywords: ["Ayush Kumar", "Portfolio", "Full Stack Developer", "Next.js"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Ayush Kumar | Portfolio",
    description:
      "Portfolio website of Ayush Kumar showcasing full stack development, projects, skills, education, and experience.",
    siteName: "Ayush Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    (function () {
      try {
        var key = "ayush-portfolio-theme";
        var stored = window.localStorage.getItem(key);
        var system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        var theme = stored === "dark" || stored === "light" ? stored : system;
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (e) {
        document.documentElement.dataset.theme = "light";
        document.documentElement.style.colorScheme = "light";
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${nunito.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
