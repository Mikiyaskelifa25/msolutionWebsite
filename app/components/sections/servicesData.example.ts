/**
 * Example dummy data for the 'Our Services' section.
 * Replace or extend these entries as needed.
 */

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string; // Optional: icon name or path
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and scalable web applications tailored to your business needs.",
    icon: "web",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences with modern design principles.",
    icon: "design",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Creating high-performance mobile apps for iOS and Android platforms.",
    icon: "mobile",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Offering scalable cloud infrastructure and DevOps services for seamless deployment.",
    icon: "cloud",
  },
];