import { PortfolioContent } from "@/components/portfolio-content";
import { SiteHeader } from "@/components/site-header";
import { portfolioData } from "@/lib/portfolio-data";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: "Full Stack Developer",
    email: portfolioData.email,
    telephone: portfolioData.phone,
    address: portfolioData.location,
    sameAs: portfolioData.socials.map((social) => social.href),
  };

  return (
    <div>
      <SiteHeader
        name={portfolioData.firstName}
        resumePath={portfolioData.resumePath}
        navigation={navigation}
      />

      <PortfolioContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
}
