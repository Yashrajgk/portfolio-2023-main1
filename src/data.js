import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "E-Commerce Website for Audiophiles",
        image: p1,
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "Another Portfolio Website",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: "The Art of Hiring",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "We Are Solving Global Problems",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Simple Calculator",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name: "Editing Photo Memories",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 6,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 15,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 20,
        description: "COMMUNITY<br />POSTS",
    },
];
