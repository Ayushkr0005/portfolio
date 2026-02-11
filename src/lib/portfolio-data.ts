export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: string;
  brandColor: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  code?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  period?: string;
  details?: string;
  document?: string;
};

export const portfolioData = {
  name: "Ayush Kumar",
  firstName: "Ayush",
  avatarPath: "/pic.jpg",
  rolePhrases: [
    "full stack development",
    "machine learning systems",
    "system design",
    "deep learning",
  ],
  heroLine: "I build production-ready full-stack and AI systems.",
  about:
    "Computer Science and Engineering student with strong foundations in full-stack development, data structures, and machine learning. I enjoy building reliable products with clean architecture and measurable impact.",
  location: "Patna, Bihar",
  email: "ayushkr111999@gmail.com",
  phone: "+91 9334176159",
  resumePath: "/ayush-kumar-resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ayushkr111999",
      handle: "in",
      icon: "/social-icons/linkedin.svg",
      brandColor: "#0a66c2",
    },
    {
      label: "GitHub",
      href: "https://github.com/Ayushkr0005",
      handle: "gh",
      icon: "/social-icons/github.svg",
      brandColor: "#181717",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Cse221FA04005/",
      handle: "lc",
      icon: "/social-icons/leetcode.svg",
      brandColor: "#ffa116",
    },
    {
      label: "CodeChef",
      href: "https://www.codechef.com/users/cse221fa04005",
      handle: "cc",
      icon: "/social-icons/codechef.svg",
      brandColor: "#5b4638",
    },
  ] as SocialLink[],
  skills: [
    {
      title: "Languages",
      items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Web Technologies",
      items: [
        "HTML",
        "CSS",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "REST API",
        "Socket.io",
      ],
    },
    {
      title: "AI / ML",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    },
    {
      title: "Databases & Tools",
      items: ["MySQL", "MongoDB", "AWS", "Vercel", "Git", "GitHub", "VS Code", "Flask"],
    },
  ] as SkillGroup[],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vignan's Foundation for Science, Technology and Research",
      period: "Expected May 2026",
      status: "Pursuing",
    },
    {
      degree: "Class XII (Science)",
      institution: "Shivam Convent, Patna",
      period: "Completed",
      status: "Senior Secondary",
    },
    {
      degree: "Class X",
      institution: "Christ Church High School, Patna",
      period: "Completed",
      status: "Matriculation",
    },
  ] as EducationItem[],
  projects: [
    {
      title: "Glaucoma Disease Prediction",
      description:
        "Built a medical prediction interface deployed on Streamlit for glaucoma disease analysis and quick diagnostic support.",
      tags: ["Python", "Machine Learning", "Streamlit"],
      image: "/project-glaucoma.jpg",
      live: "https://ak4005.streamlit.app/",
    },
    {
      title: "Finance Tracking Website",
      description:
        "Developed a personal finance tracker for managing expenses and transactions with a clean dashboard experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Vercel"],
      image: "/project-finbridge.jpg",
      live: "https://fin-bridge-ten.vercel.app/",
    },
    {
      title: "Waste Management System",
      description:
        "Created a web platform for organizing waste reporting and management workflows with location-aware records.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Full Stack", "Sustainability", "Vercel"],
      image: "/project-ecopulse.jpg",
      live: "https://eco-pluse.vercel.app/",
    },
    {
      title: "Lok Shikayat - Digital Complaint Management System",
      description:
        "Engineered a full-stack MERN platform for complaint workflows used by 2,500+ active users with role-based access and real-time notifications.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io", "Cloudinary", "Tailwind CSS"],
      image: "/project-lokshikayat.jpg",
      code: "https://github.com/Ayushkr0005",
    },
    {
      title: "Brain Tumor Detection System",
      description:
        "Developed a CNN-DNN hybrid medical imaging pipeline that achieved 98% accuracy on 10,000+ MRI scans with a deployable Flask API.",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Flask", "NumPy", "Pandas"],
      image: "/project-brain.jpg",
      code: "https://github.com/Ayushkr0005",
    },
  ] as ProjectItem[],
  experience: [
    {
      company: "Vignan's Foundation for Science, Technology and Research",
      role: "Lead Coordinator - TCS Placement Drive",
      period: "2023",
      points: [
        "Spearheaded coordination for the campus placement drive serving 2,500+ students.",
        "Collaborated with the TCS recruitment team to streamline interview scheduling and assessments.",
      ],
    },
    {
      company: "Vignan's Foundation for Science, Technology and Research",
      role: "Student Coordinator - VFSTR Cultural Events",
      period: "2024 - 2025",
      points: [
        "Led a team of 10+ volunteers for Mahotsav, Utsav, and Srujanankura events with 1,000+ attendees.",
        "Coordinated vendor management, event logistics, and participant engagement activities.",
      ],
    },
  ] as ExperienceItem[],
  competitiveProgramming: [
    "LeetCode: Solved 352+ algorithmic problems",
    "CodeChef: 3-star rating with 500+ problems solved",
    "GeeksforGeeks: Completed 324+ coding challenges",
  ],
  certifications: [
    {
      title: "IEEE ICECA 2025 - Certificate of Presentation",
      issuer:
        "IEEE | 9th International Conference on Electronics, Communication and Aerospace Technology (ICECA 2025)",
      details:
        "Presented paper: Prescriptive Analytics for Dynamic Pricing and Automated Load Balancing in a Decentralized Smart Grid.",
      period: "5-7 November 2025 | Coimbatore, India",
      document: "/cert-iceca-2025-presentation.pdf",
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
      issuer: "Oracle",
      period: "December 2024",
      document: "/cert-oracle-oci-ai-foundations.pdf",
    },
    {
      title: "B2 English (Linguaskill Business)",
      issuer: "University of Cambridge",
      period: "February 2025",
      document: "/cert-cambridge-linguaskill-b2.pdf",
    },
    {
      title: "AI Azure Internship",
      issuer: "Microsoft, Edunet Foundation, AICTE",
      period: "May 2025 - June 2025",
      document: "/cert-ai-azure-internship.pdf",
    },
    {
      title: "Sensors and Actuators",
      issuer: "NPTEL",
      period: "January 2025 - April 2025 (Score: 80/100)",
      document: "/cert-sensors-and-actuators.pdf",
    },
    {
      title: "E-Business",
      issuer: "NPTEL",
      period: "July 2024 - October 2024",
      document: "/cert-e-business.pdf",
    },
    {
      title: "Smart India Hackathon (SIH) - Participant",
      issuer: "SIH",
      document: "/cert-sih-participation.pdf",
    },
  ] as CertificationItem[],
  contactPitch:
    "I am open to software engineering and AI opportunities. If you are hiring or have a project idea, let's talk.",
};
