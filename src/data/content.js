export const skills = [
  { file: "flask_api.py", lang: "Python / Flask" },
  { file: "PharmacieApp.java", lang: "Java / Spring Boot" },
  { file: "affectations.php", lang: "PHP / MySQL" },
  { file: "Restaurant.cs", lang: "C# / WinForms" },
  { file: "commerce.cpp", lang: "Qt / C++" },
  { file: "schema.sql", lang: "PostgreSQL / SQL Server" },
  { file: "ui.html", lang: "Bootstrap" },
];

export const projects = [
  {
    name: "Gestion des affectations",
    slug: "gestion-affectations",
    stack: "PHP, MySQL, PHPMailer",
    category: "Application de gestion — secteur public",
    description:
      "Système de gestion des affectations du personnel en PHP/MySQL, avec génération d'arrêtés en PDF (classe MiniPDF personnalisée), authentification sécurisée par bcrypt et notifications par e-mail via PHPMailer. Projet de soutenance.",
    year: "2026",
    tags: ["PHP", "MySQL", "PHPMailer", "PDF"],
  },
  {
    name: "Gestion d'une pharmacie",
    slug: "gestion-pharmacie",
    stack: "Java, Spring Boot, PostgreSQL, JavaFX",
    category: "Application de bureau",
    description:
      "Application de gestion de pharmacie en Java Spring Boot avec PostgreSQL, enveloppée dans une fenêtre JavaFX, export PDF des factures et lanceur Windows.",
    year: "2026",
    tags: ["Spring Boot", "PostgreSQL", "JavaFX"],
  },
  {
    name: "Hôtel Hanitra Matanga",
    slug: "hotel-hanitra-matanga",
    stack: "Python, Flask, ReportLab, Matplotlib",
    category: "Application web — hôtellerie & restauration",
    description:
      "Application de gestion hôtelière et de restauration avec factures PDF à QR code, statistiques en histogrammes et gestion de 20 chambres.",
    year: "2025",
    tags: ["Flask", "QR code", "Matplotlib"],
  },
  {
    name: "Gestion étudiants",
    slug: "gestion-etudiants",
    stack: "React, PHP 8, MySQL, Chart.js",
    category: "Application web — SPA",
    description:
      "Application monopage de gestion des étudiants avec API REST en PHP et visualisations de données interactives avec Chart.js.",
    year: "2024",
    tags: ["React", "REST API", "Chart.js"],
  },
];

export const contact = {
  github: "fabien-gif",
  githubUrl: "https://github.com/fabien-gif",
  email: "votre-email@exemple.com",
  whatsapp: "+261 XX XX XXX XX",
  // Crée un compte gratuit sur https://formspree.io, crée un formulaire,
  // et remplace VOTRE_ID par l'identifiant qu'il te donne (ex: https://formspree.io/f/abcdwxyz).
  // Tant que ce n'est pas fait, le formulaire de contact ne pourra pas t'envoyer d'e-mail.
  formEndpoint: "https://formspree.io/f/VOTRE_ID",
};
