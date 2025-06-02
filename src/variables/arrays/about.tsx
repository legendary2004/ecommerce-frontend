import { FaAward, FaChartLine, FaRegLightbulb, FaUsers } from "react-icons/fa";

export const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years of industry experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech innovator driving our digital transformation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emma Williams",
      role: "Head of Design",
      bio: "Creative force behind our brand identity",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "David Miller",
      role: "Lead Developer",
      bio: "Architecture specialist and coding guru",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    }
];

export const milestones = [
    { year: 2018, title: "Company Founded", description: "Started with a vision to transform the industry" },
    { year: 2019, title: "First Major Client", description: "Secured partnership with Fortune 500 company" },
    { year: 2020, title: "Global Expansion", description: "Opened offices in 3 new countries" },
    { year: 2022, title: "Industry Recognition", description: "Awarded Best Innovation of the Year" }
];

export const coreValues = [
    { icon: <FaRegLightbulb />, title: "Innovation", description: "Pushing boundaries in technology" },
    { icon: <FaUsers />, title: "Collaboration", description: "Working together for excellence" },
    { icon: <FaChartLine />, title: "Growth", description: "Continuous learning and improvement" },
    { icon: <FaAward />, title: "Excellence", description: "Delivering outstanding results" }
];

export const achievements = [
    { metric: "500+", label: "Clients Worldwide" },
    { metric: "50M+", label: "Revenue Generated" },
    { metric: "100+", label: "Team Members" },
    { metric: "25+", label: "Countries Served" }
];