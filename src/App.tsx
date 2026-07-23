import { useState, useEffect, useRef, createContext, useContext } from "react"
import elizaPhoto from "./imports/image.png"

// ─── Translations ─────────────────────────────────────────────────────────────

const T = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "OPEN TO OPPORTUNITIES/Relocation · PARIS, FRANCE",
      headline1: "Bridging Business",
      headline2: "Strategy, Engineering",
      headline3: "& AI",
      subtitle:
        "Technical Project Manager specializing in AI products, digital transformation, and scalable technology solutions.",
      name: "Eliza Zhang",
      title: "Technical Project Manager · AI Product & Digital Transformation",
      cta1: "View Experience",
      cta2: "Download Resume",
    },
    about: {
      sectionLabel: "About",
      headlineLight: "Global technology leader",
      headlineBold: "driving AI transformation",
      bio: "With 10+ years of experience leading global technology programs across APAC, EMEA, and the US, I help organizations transform ideas into scalable digital products. My background spans enterprise software delivery, AI product strategy, large-scale agile transformation, and hands-on AI engineering at companies including Accenture and Lenovo.",
      metrics: [
        { value: "10+", label: "Years Experience" },
        { value: "APAC / EMEA", label: "Global Scope" },
        { value: "5", label: "Languages Spoken" },
        { value: "42 Paris", label: "Engineering Pedigree" },
      ],
      pillars: [
        {
          icon: "◈",
          title: "AI Product Strategy",
          desc: "Translating AI capabilities into business value through structured product strategy and roadmapping.",
        },
        {
          icon: "◫",
          title: "Digital Transformation",
          desc: "Leading organizational change through technology adoption, process redesign, and capability building.",
        },
        {
          icon: "◧",
          title: "Engineering Leadership",
          desc: "Bridging technical teams and executive stakeholders to deliver high-impact software programs.",
        },
      ],
    },
    experience: {
      sectionLabel: "Experience",
      headlineLight: "Career",
      headlineBold: "Timeline",
      summary: "10+ years building global technology programs across China, Vietnam, Europe and the USA.",
      roles: [
        {
          company: "Personal Projects · 42 Paris",
          role: "AI Engineer & Product Builder",
          period: "2026 – Present",
          location: "Paris, FR",
          bullets: [
            "Enterprise AI Program Intelligence Agent — designed enterprise RAG architecture with document ingestion, semantic retrieval, and LLM-powered Q&A; built modular platform covering ingestion, retrieval, generation, auth, and agent orchestration; applied prompt versioning, evaluation workflows, Docker, and cloud deployment.",
            "Tracevia (IFM × 42 Hackathon) — led product strategy and pitch for an AI-powered luxury supply chain traceability platform targeting EUDR and Digital Product Passport compliance; defined competitive positioning within a 48-hour cross-functional sprint.",
            "Learn2Slither — implemented and evaluated Deep Q-Networks (DQN) and policy-gradient methods for autonomous game-playing; applied experiment tracking and hyperparameter tuning.",
            "AI Comic Book App — full-stack generative AI web app combining image synthesis and NLP (Gemini 1.5) for dynamic illustrated storytelling; integrated multi-modal AI APIs with orchestration logic.",
          ],
          tags: ["RAG", "LLM", "DQN", "Generative AI", "Docker", "Python", "TypeScript", "Product Strategy"],
        },
        {
          company: "Accenture",
          role: "Scrum Master Manager",
          period: "Oct 2021 – Sept 2023",
          location: "Shanghai, CN",
          bullets: [
            "Led end-to-end Agile delivery for global enterprise clients across APAC and EMEA, coordinating cross-functional engineering and data teams while managing multi-region dependencies and PMO governance.",
            "Adidas (PIPL Compliance): Delivered a data governance and encryption program to bring Adidas China into compliance with China's PIPL — coordinating data engineering, legal, IT security, and business teams under regulatory deadline pressure.",
            "DuPont (Post-Acquisition Migration): Owned APAC delivery of a full IT infrastructure and data migration following a partial business acquisition by a European enterprise, coordinating systems transition and PMO governance with US headquarters across time zones.",
            "Drove workflow automation and data-driven Agile metrics adoption; mentored junior Scrum Masters and coached client organizations on delivery best practices.",
          ],
          tags: ["Agile Delivery", "PMO Governance", "PIPL Compliance", "Data Governance", "Stakeholder Management"],
        },
        {
          company: "Lenovo",
          role: "Scrum Master",
          period: "Jan 2021 – Oct 2021",
          location: "China / EMEA",
          bullets: [
            "Led Agile delivery of Lenovo's Customer 360 big data platform — integrating multi-source customer data (CRM, sales, web, behavioural) into a unified analytics layer powering sales forecasting, customer profiling, marketing analytics, and executive Power BI dashboards across APAC and EMEA.",
            "Translated business needs from sales, marketing, and executives into clear product requirements and data platform capabilities.",
            "Coordinated data engineering, IT, and business teams through full data pipeline delivery: from source ingestion and data modelling to dashboard deployment and stakeholder adoption.",
            "Improved team velocity by 20% through structured Agile coaching, sprint optimization, and proactive cross-functional blocker removal.",
          ],
          tags: ["Big Data Platform", "Power BI", "Customer 360", "SAFe", "Data Pipeline"],
        },
        {
          company: "Metasource Asia",
          role: "Project Manager / Product Owner",
          period: "Jan 2020 – Dec 2020",
          location: "Vietnam",
          bullets: [
            "Owned the product backlog and requirements definition for an ERP system and web platform — gathering business requirements, writing user stories, defining acceptance criteria, and prioritizing features with stakeholders.",
            "Acted as primary bridge between business stakeholders and engineering teams, making product decisions throughout the development lifecycle to ensure delivered features aligned with business value.",
            "Managed project governance, vendor coordination, risk register, sprint reviews, and executive reporting from inception to production release.",
          ],
          tags: ["Product Ownership", "ERP", "Backlog Management", "Vendor Coordination"],
        },
        {
          company: "Deppon Express",
          role: "IT PMO",
          period: "Nov 2018 – Jan 2020",
          location: "Shanghai, CN",
          bullets: [
            "Led digital transformation initiatives focused on logistics platform modernization and process automation, reducing manual overhead across delivery teams.",
            "Established PMO standards, KPI dashboards, and governance frameworks across multiple concurrent technology programs, improving cross-team delivery predictability and executive visibility.",
            "Coordinated IT, operations, and vendors to deliver infrastructure and software projects on time and within budget.",
          ],
          tags: ["PMO", "IT Modernization", "Logistics Tech", "KPI Dashboards"],
        },
        {
          company: "Timescruiser",
          role: "Project Coordinator → Project Manager / Product Lead",
          period: "Apr 2015 – Jun 2018",
          location: "China / USA",
          bullets: [
            "Owned end-to-end product management for an online SAT/ACT education platform — defining the product vision, building and prioritizing the feature roadmap, gathering user requirements, and driving delivery from MVP through full platform launch.",
            "Made product decisions balancing user needs, business objectives, and technical feasibility, coordinating closely with engineering and QA teams across China and the US.",
            "Managed cross-border stakeholder communication between US curriculum experts and China-based development teams, ensuring product direction remained aligned across time zones and cultures.",
          ],
          tags: ["Product Management", "EdTech", "Roadmapping", "Cross-border"],
        },
      ],
    },
    education: {
      sectionLabel: "Education",
      headlineLight: "Engineering Foundation",
      headlineBold: "at École 42 Paris",
      desc: "Pursuing an RNCP Level 7 (Master's equivalent) in Computer Science at École 42 Paris — one of the world's most innovative peer-to-peer engineering schools. Developing hands-on expertise in AI/ML, systems programming, full-stack development, DevOps, containerization, and Kubernetes orchestration.",
      badge: "ÉCOLE 42 PARIS",
      badgeSub: "RNCP 7 · Computer Science · Sept 2024 – Present",
      skills: [
        "AI / ML Applications",
        "LLM & RAG Pipelines",
        "Cloud Native & DevOps",
        "Kubernetes & Docker",
        "Systems Programming (C/C++)",
        "Python & TypeScript",
        "Full-stack Development",
        "Software Architecture",
      ],
    },
    projects: {
      sectionLabel: "Selected Work",
      headlineLight: "Project",
      headlineBold: "Case Studies",
      challengeLabel: "CHALLENGE",
      solutionLabel: "SOLUTION",
      impactLabel: "OUTCOME",
      items: [
        {
          index: "01",
          name: "Enterprise AI Program Intelligence Agent",
          challenge:
            "Enterprises struggle to unlock value from their internal knowledge — documents, reports, and data remain siloed and inaccessible to decision-makers at speed.",
          solution:
            "Designed enterprise RAG architecture with document ingestion, semantic retrieval, and LLM-powered Q&A. Built modular platform covering ingestion, retrieval, generation, authentication, and agent orchestration. Implemented automated knowledge indexing via embedding models and vector databases.",
          impact:
            "Production-ready AI agent with multi-tool capabilities: enterprise document search, project analysis, executive summarization, and report generation · Docker-containerized · cloud deployment-ready",
          tags: ["RAG", "LLM", "Python", "Vector DB", "Docker", "Agent Orchestration"],
        },
        {
          index: "02",
          name: "Tracevia — AI Supply Chain Compliance",
          challenge:
            "Luxury brands face mounting regulatory pressure from EUDR and Digital Product Passport mandates, with no scalable tooling to trace and certify supply chain provenance.",
          solution:
            "Led product strategy and go-to-market pitch for an AI-powered supply chain traceability platform at the IFM × 42 Hackathon. Defined competitive positioning, compliance architecture, and business model within a 48-hour sprint with a cross-functional team of engineers and fashion industry insiders.",
          impact:
            "Winning hackathon pitch · EUDR & DPP compliance framework · Scalable SaaS positioning targeting luxury and apparel brands",
          tags: ["AI Strategy", "Product", "EUDR", "DPP", "Hackathon", "Go-to-Market"],
        },
        {
          index: "03",
          name: "Learn2Slither — Reinforcement Learning Agent",
          challenge:
            "Understanding the practical behavior of RL agents requires hands-on implementation beyond theory — reward shaping, policy convergence, and hyperparameter sensitivity all require empirical validation.",
          solution:
            "Implemented and evaluated Deep Q-Networks (DQN) and policy-gradient methods for autonomous game-playing. Applied experiment tracking, hyperparameter tuning, and performance analysis to understand AI agent behaviour and reward optimization.",
          impact:
            "Functional RL agent with measurable policy convergence · Documented experiment results across DQN variants · Applied MLOps practices for experiment reproducibility",
          tags: ["Reinforcement Learning", "DQN", "Python", "MLOps", "AI Research"],
        },
        {
          index: "04",
          name: "AI-Generated Comic Book Application",
          challenge:
            "Generative AI tools for creative content are fragmented — combining image synthesis, narrative generation, and coherent multi-panel storytelling requires complex multi-modal orchestration.",
          solution:
            "Developed a full-stack generative AI web application combining image synthesis and NLP models (Gemini 1.5) to produce dynamic illustrated storytelling. Integrated multi-modal AI APIs with orchestration logic and stateful UI across the full development stack.",
          impact:
            "End-to-end generative storytelling pipeline · Multi-modal AI integration (text + image) · Production web application with stateful session management",
          tags: ["Gemini 1.5", "Generative AI", "Full-stack", "Multi-modal", "TypeScript"],
        },
      ],
    },
    skills: {
      sectionLabel: "Capabilities",
      categories: [
        {
          label: "Agile & Scrum",
          skills: ["Scrum Master", "SAFe", "Sprint Planning", "Backlog Management", "Velocity Optimization", "Agile Coaching", "PMO Governance", "OKR / KPI"],
        },
        {
          label: "Product Management",
          skills: ["Product Roadmap", "Requirement Definition", "User Stories", "Backlog Prioritization", "Stakeholder Alignment", "Go-to-Market"],
        },
        {
          label: "AI & Machine Learning",
          skills: ["LLM Integration", "Prompt Engineering", "RAG Pipelines", "Reinforcement Learning (DQN)", "Generative AI", "MLOps", "AI Governance", "Model Evaluation"],
        },
        {
          label: "Data",
          skills: ["Big Data Platforms", "Data Governance", "PIPL / GDPR Compliance", "SQL", "Power BI", "Data Pipeline Delivery"],
        },
        {
          label: "Engineering",
          skills: ["Docker", "Kubernetes", "REST APIs", "CI/CD", "Cloud", "Python", "TypeScript", "C / C++", "Web Architecture"],
        },
        {
          label: "Tools",
          skills: ["JIRA", "Confluence", "Power BI", "Aha!", "Vector DBs", "Prompt IDEs", "Agile Dashboards"],
        },
      ],
    },
    certifications: {
      sectionLabel: "Certifications",
      items: [
        { name: "Project Management Professional", issuer: "Project Management Institute", code: "PMP" },
        { name: "Certified Scrum Master", issuer: "Scrum Alliance", code: "CSM" },
        { name: "Certified SAFe® Scrum Master", issuer: "Scaled Agile, Inc.", code: "SAFe" },
        { name: "AWS Partner Accreditation", issuer: "Amazon Web Services", code: "AWS" },
        { name: "AI Concepts for Developers", issuer: "Microsoft Learn · 2026", code: "MS" },
        { name: "AI Transformation in Organizations", issuer: "Microsoft Learn · 2026", code: "MS" },
        { name: "DELF B2", issuer: "French Ministry of Education", code: "DELF" },
      ],
    },
    languages: {
      sectionLabel: "Languages",
      headlineLight: "Multilingual",
      headlineBold: "Global Communicator",
      items: [
        { name: "Chinese", level: "Native", proficiency: 100, tag: "母语" },
        { name: "English", level: "C2 — Mastery", proficiency: 96, tag: "C2" },
        { name: "Japanese", level: "N1 — Advanced", proficiency: 88, tag: "N1" },
        { name: "French", level: "B2/C1 — Advanced", proficiency: 78, tag: "B2/C1" },
        { name: "Spanish", level: "B2 — Upper Intermediate", proficiency: 68, tag: "B2" },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      headlineLight: "Let's build meaningful",
      headlineBold: "technology solutions.",
      desc: "Available for senior technical project management roles, AI product strategy consulting, and digital transformation programs. Open to remote and hybrid opportunities across Europe, APAC, and globally.",
      linkedin: "LinkedIn",
      email: "Email",
      resume: "Resume ↓",
      footer: "ELIZA ZHANG · PARIS, FRANCE",
    },
  },

  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      badge: "OUVERTE AUX OPPORTUNITÉS/Relocation · PARIS, FRANCE",
      headline1: "Relier la Stratégie",
      headline2: "d'Entreprise, l'Ingénierie",
      headline3: "& l'IA",
      subtitle:
        "Chef de Projet Technique spécialisée en produits IA, transformation digitale et solutions technologiques évolutives.",
      name: "Eliza Zhang",
      title: "Chef de Projet Technique · Produit IA & Transformation Digitale",
      cta1: "Voir l'expérience",
      cta2: "Télécharger le CV",
    },
    about: {
      sectionLabel: "À propos",
      headlineLight: "Leader technologique mondiale",
      headlineBold: "pilotant la transformation IA",
      bio: "Forte de plus de 10 ans d'expérience à la tête de programmes technologiques mondiaux en Asie-Pacifique, en EMEA et aux États-Unis, j'accompagne les organisations dans la transformation de leurs idées en produits digitaux évolutifs. Mon parcours couvre la livraison de logiciels d'entreprise, la stratégie produit IA, la transformation agile à grande échelle et l'ingénierie IA appliquée chez Accenture et Lenovo.",
      metrics: [
        { value: "10+", label: "Années d'expérience" },
        { value: "APAC / EMEA", label: "Portée mondiale" },
        { value: "4", label: "Langues parlées" },
        { value: "42 Paris", label: "Formation ingénierie" },
      ],
      pillars: [
        {
          icon: "◈",
          title: "Stratégie Produit IA",
          desc: "Transformer les capacités de l'IA en valeur métier grâce à une stratégie produit structurée et à une feuille de route claire.",
        },
        {
          icon: "◫",
          title: "Transformation Digitale",
          desc: "Piloter le changement organisationnel par l'adoption technologique, la refonte des processus et le renforcement des compétences.",
        },
        {
          icon: "◧",
          title: "Leadership Ingénierie",
          desc: "Faire le lien entre les équipes techniques et les parties prenantes dirigeantes pour livrer des programmes logiciels à fort impact.",
        },
      ],
    },
    experience: {
      sectionLabel: "Expérience",
      headlineLight: "Parcours",
      headlineBold: "Professionnel",
      summary: "Plus de 10 ans à construire des programmes technologiques mondiaux en Chine, au Vietnam, aux États-Unis et en Europe.",
      roles: [
        {
          company: "Projets Personnels · 42 Paris",
          role: "Ingénieure IA & Product Builder",
          period: "2026 – Présent",
          location: "Paris, FR",
          bullets: [
            "Agent IA d'Intelligence Programmes — conception d'une architecture RAG d'entreprise avec ingestion de documents, recherche sémantique et Q&A propulsé par LLM ; plateforme modulaire couvrant ingestion, récupération, génération, authentification et orchestration d'agents ; déploiement Docker et cloud-ready.",
            "Tracevia (Hackathon IFM × 42) — pilotage de la stratégie produit et du pitch pour une plateforme IA de traçabilité de chaîne d'approvisionnement de luxe ciblant la conformité EUDR et le Passeport Produit Numérique ; positionnement concurrentiel défini en 48h.",
            "Learn2Slither — implémentation et évaluation de Deep Q-Networks (DQN) et méthodes de policy-gradient pour un agent autonome ; suivi d'expériences et réglage des hyperparamètres.",
            "Application BD Générative — application web full-stack IA combinant synthèse d'images et NLP (Gemini 1.5) pour une narration illustrée dynamique ; intégration multi-modale avec orchestration.",
          ],
          tags: ["RAG", "LLM", "DQN", "IA Générative", "Docker", "Python", "TypeScript", "Stratégie produit"],
        },
        {
          company: "Accenture",
          role: "Scrum Master Manager",
          period: "Oct 2021 – Sept 2023",
          location: "Shanghai, CN",
          bullets: [
            "Pilotage de la livraison Agile de bout en bout pour des clients grands comptes en APAC et EMEA, coordination d'équipes pluridisciplinaires d'ingénierie et de data, gestion des dépendances multi-régions et gouvernance PMO.",
            "Adidas (Conformité PIPL) : livraison d'un programme de gouvernance des données et de chiffrement pour mettre Adidas Chine en conformité avec la loi PIPL — coordination des équipes data engineering, juridique, sécurité IT et métier sous pression réglementaire.",
            "DuPont (Migration Post-Acquisition) : pilotage APAC d'une migration complète d'infrastructure IT et de données à la suite d'une acquisition partielle par une entreprise européenne, avec gouvernance PMO coordonnée avec le siège américain.",
            "Déploiement d'automatisations de workflows et adoption de métriques Agile data-driven ; mentorat de Scrum Masters juniors et coaching des pratiques de livraison.",
          ],
          tags: ["Livraison Agile", "Gouvernance PMO", "Conformité PIPL", "Gouvernance des données", "Gestion des parties prenantes"],
        },
        {
          company: "Lenovo",
          role: "Scrum Master",
          period: "Janv 2021 – Oct 2021",
          location: "Chine / EMEA",
          bullets: [
            "Pilotage de la livraison Agile de la plateforme big data Customer 360 de Lenovo — intégration de données clients multi-sources (CRM, ventes, web, comportement) dans une couche analytique unifiée alimentant des dashboards Power BI en APAC et EMEA.",
            "Traduction des besoins métier des équipes ventes, marketing et direction en exigences produit claires et capacités de la plateforme de données.",
            "Coordination des équipes data engineering, IT et métier tout au long de la livraison du pipeline : de l'ingestion source à la modélisation des données, jusqu'au déploiement des dashboards.",
            "Amélioration de la vélocité d'équipe de 20 % grâce au coaching Agile structuré, l'optimisation des sprints et la suppression proactive des blocages transversaux.",
          ],
          tags: ["Big Data", "Power BI", "Customer 360", "SAFe", "Pipeline de données"],
        },
        {
          company: "Metasource Asia",
          role: "Chef de Projet / Product Owner",
          period: "Janv 2020 – Déc 2020",
          location: "Vietnam",
          bullets: [
            "Responsable du backlog produit et de la définition des exigences pour un ERP et une plateforme web — collecte des besoins métier, rédaction de user stories, définition des critères d'acceptation et priorisation des fonctionnalités.",
            "Interface principale entre les parties prenantes métier et les équipes ingénierie, prises de décision produit tout au long du cycle de développement.",
            "Gestion de la gouvernance projet, coordination des prestataires, registre des risques, revues de sprint et reporting exécutif de l'inception à la mise en production.",
          ],
          tags: ["Product Ownership", "ERP", "Gestion du backlog", "Coordination prestataires"],
        },
        {
          company: "Deppon Express",
          role: "IT PMO",
          period: "Nov 2018 – Janv 2020",
          location: "Shanghai, CN",
          bullets: [
            "Pilotage d'initiatives de transformation digitale axées sur la modernisation de la plateforme logistique et l'automatisation des processus, réduisant la charge manuelle des équipes de livraison.",
            "Mise en place de standards PMO, tableaux de bord KPI et cadres de gouvernance sur plusieurs programmes technologiques simultanés, améliorant la prévisibilité de livraison et la visibilité exécutive.",
            "Coordination IT, opérations et prestataires pour livrer des projets d'infrastructure et logiciels dans les délais et le budget.",
          ],
          tags: ["PMO", "Modernisation IT", "Tech logistique", "Tableaux de bord KPI"],
        },
        {
          company: "Timescruiser",
          role: "Coordinatrice Projet → Chef de Projet / Product Lead",
          period: "Avr 2015 – Juin 2018",
          location: "Chine / USA",
          bullets: [
            "Responsable du product management de bout en bout d'une plateforme éducative en ligne SAT/ACT — définition de la vision produit, construction et priorisation de la feuille de route, collecte des besoins utilisateurs, de la MVP au lancement complet.",
            "Décisions produit équilibrant besoins utilisateurs, objectifs métier et faisabilité technique, en coordination étroite avec les équipes engineering et QA en Chine et aux États-Unis.",
            "Gestion de la communication transfrontalière entre les experts pédagogiques américains et les équipes de développement basées en Chine.",
          ],
          tags: ["Gestion produit", "EdTech", "Feuille de route", "International"],
        },
      ],
    },
    education: {
      sectionLabel: "Formation",
      headlineLight: "Socle en Ingénierie",
      headlineBold: "à l'École 42 Paris",
      desc: "Formation en Informatique RNCP Niveau 7 (équivalent Master) à l'École 42 Paris — l'une des écoles d'ingénierie pair-à-pair les plus innovantes au monde. Développement d'une expertise pratique en IA/ML, programmation systèmes, développement full-stack, DevOps, conteneurisation et orchestration Kubernetes.",
      badge: "ÉCOLE 42 PARIS",
      badgeSub: "RNCP 7 · Informatique · Sept 2024 – Présent",
      skills: [
        "Applications IA / ML",
        "LLM & Pipelines RAG",
        "Cloud Native & DevOps",
        "Kubernetes & Docker",
        "Programmation Systèmes (C/C++)",
        "Python & TypeScript",
        "Développement Full-stack",
        "Architecture Logicielle",
      ],
    },
    projects: {
      sectionLabel: "Réalisations",
      headlineLight: "Études de",
      headlineBold: "Cas Projets",
      challengeLabel: "DÉFI",
      solutionLabel: "SOLUTION",
      impactLabel: "RÉSULTAT",
      items: [
        {
          index: "01",
          name: "Agent IA d'Intelligence Programmes",
          challenge:
            "Les entreprises peinent à valoriser leurs connaissances internes — documents, rapports et données restent cloisonnés et inaccessibles aux décideurs en temps réel.",
          solution:
            "Conception d'une architecture RAG d'entreprise avec ingestion de documents, recherche sémantique et Q&A propulsé par LLM. Plateforme modulaire couvrant ingestion, récupération, génération, authentification et orchestration d'agents. Indexation automatisée via modèles d'embedding et bases vectorielles.",
          impact:
            "Agent IA production-ready avec capacités multi-outils : recherche documentaire, analyse de projets, synthèse exécutive et génération de rapports · Conteneurisé Docker · Prêt au déploiement cloud",
          tags: ["RAG", "LLM", "Python", "Base vectorielle", "Docker", "Orchestration d'agents"],
        },
        {
          index: "02",
          name: "Tracevia — Conformité Chaîne d'Approvisionnement IA",
          challenge:
            "Les marques de luxe font face à une pression réglementaire croissante liée à l'EUDR et aux mandats de Passeport Produit Numérique, sans outillage évolutif pour tracer et certifier la provenance.",
          solution:
            "Pilotage de la stratégie produit et du pitch go-to-market pour une plateforme IA de traçabilité de chaîne d'approvisionnement au Hackathon IFM × 42. Positionnement concurrentiel, architecture de conformité et modèle économique définis en 48h avec une équipe transversale d'ingénieurs et d'experts mode.",
          impact:
            "Pitch hackathon primé · Cadre de conformité EUDR & DPP · Positionnement SaaS scalable ciblant les marques de luxe et prêt-à-porter",
          tags: ["Stratégie IA", "Produit", "EUDR", "DPP", "Hackathon", "Go-to-Market"],
        },
        {
          index: "03",
          name: "Learn2Slither — Agent d'Apprentissage par Renforcement",
          challenge:
            "Comprendre le comportement pratique des agents RL nécessite une implémentation concrète au-delà de la théorie — le façonnage des récompenses, la convergence des politiques et la sensibilité aux hyperparamètres exigent une validation empirique.",
          solution:
            "Implémentation et évaluation de Deep Q-Networks (DQN) et de méthodes policy-gradient pour un agent de jeu autonome. Suivi d'expériences, réglage des hyperparamètres et analyse des performances pour comprendre le comportement de l'agent et l'optimisation des récompenses.",
          impact:
            "Agent RL fonctionnel avec convergence de politique mesurable · Résultats d'expériences documentés sur plusieurs variantes DQN · Pratiques MLOps appliquées pour la reproductibilité",
          tags: ["Apprentissage par renforcement", "DQN", "Python", "MLOps", "Recherche IA"],
        },
        {
          index: "04",
          name: "Application BD Générative par IA",
          challenge:
            "Les outils IA génératifs pour le contenu créatif sont fragmentés — combiner synthèse d'images, génération narrative et narration cohérente multi-panneaux nécessite une orchestration multi-modale complexe.",
          solution:
            "Développement d'une application web full-stack IA combinant synthèse d'images et modèles NLP (Gemini 1.5) pour une narration illustrée dynamique. Intégration d'APIs IA multi-modales avec logique d'orchestration et UI avec état.",
          impact:
            "Pipeline de narration générative de bout en bout · Intégration IA multi-modale (texte + image) · Application web de production avec gestion de session avec état",
          tags: ["Gemini 1.5", "IA Générative", "Full-stack", "Multi-modal", "TypeScript"],
        },
      ],
    },
    skills: {
      sectionLabel: "Compétences",
      categories: [
        {
          label: "Agile & Scrum",
          skills: ["Scrum Master", "SAFe", "Sprint Planning", "Gestion du backlog", "Optimisation vélocité", "Coaching Agile", "Gouvernance PMO", "OKR / KPI"],
        },
        {
          label: "Gestion de produit",
          skills: ["Feuille de route produit", "Définition des exigences", "User Stories", "Priorisation", "Alignement parties prenantes", "Go-to-Market"],
        },
        {
          label: "IA & Machine Learning",
          skills: ["Intégration LLM", "Prompt Engineering", "Pipelines RAG", "Apprentissage par renforcement (DQN)", "IA Générative", "MLOps", "Gouvernance IA", "Évaluation de modèles"],
        },
        {
          label: "Data",
          skills: ["Plateformes Big Data", "Gouvernance des données", "Conformité PIPL / RGPD", "SQL", "Power BI", "Livraison pipeline de données"],
        },
        {
          label: "Ingénierie",
          skills: ["Docker", "Kubernetes", "REST APIs", "CI/CD", "Cloud", "Python", "TypeScript", "C / C++", "Architecture Web"],
        },
        {
          label: "Outils",
          skills: ["JIRA", "Confluence", "Power BI", "Aha!", "Bases vectorielles", "IDEs de prompt", "Tableaux de bord Agile"],
        },
      ],
    },
    certifications: {
      sectionLabel: "Certifications",
      items: [
        { name: "Project Management Professional", issuer: "Project Management Institute", code: "PMP" },
        { name: "Certified Scrum Master", issuer: "Scrum Alliance", code: "CSM" },
        { name: "Certified SAFe® Scrum Master", issuer: "Scaled Agile, Inc.", code: "SAFe" },
        { name: "Accréditation Partenaire AWS", issuer: "Amazon Web Services", code: "AWS" },
        { name: "Concepts IA pour Développeurs", issuer: "Microsoft Learn · 2026", code: "MS" },
        { name: "Transformation IA en Organisations", issuer: "Microsoft Learn · 2026", code: "MS" },
        { name: "DELF B2", issuer: "Ministère français de l'Éducation nationale", code: "DELF" },
      ],
    },
    languages: {
      sectionLabel: "Langues",
      headlineLight: "Communicatrice",
      headlineBold: "Multilingue Mondiale",
      items: [
        { name: "Chinois", level: "Langue maternelle", proficiency: 100, tag: "母语" },
        { name: "Anglais", level: "C2 — Maîtrise", proficiency: 96, tag: "C2" },
        { name: "Japonais", level: "N1 — Avancé", proficiency: 88, tag: "N1" },
        { name: "Français", level: "B2/C1 — Avancé", proficiency: 78, tag: "B2/C1" },
        { name: "Espagnol", level: "B2 — Intermédiaire supérieur", proficiency: 68, tag: "B2" },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      headlineLight: "Construisons ensemble des",
      headlineBold: "solutions technologiques.",
      desc: "Disponible pour des postes de chef de projet technique senior, du conseil en stratégie produit IA et des programmes de transformation digitale. Ouverte aux opportunités à distance et hybrides en Europe, APAC et dans le monde entier.",
      linkedin: "LinkedIn",
      email: "E-mail",
      resume: "CV ↓",
      footer: "ELIZA ZHANG · PARIS, FRANCE",
    },
  },
}

type Lang = "en" | "fr"
const LangContext = createContext<Lang>("en")
const useLang = () => useContext(LangContext)
const useT = () => T[useLang()]

// ─── Language Toggle ──────────────────────────────────────────────────────────

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "6px 13px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.18s",
            background: lang === l ? "#3B82F6" : "transparent",
            color: lang === l ? "#F8F7F4" : "rgba(248,247,244,0.4)",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const t = useT()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
  ]

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(11,18,32,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a
            href="#hero"
            style={{ color: "#F8F7F4", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em", textDecoration: "none" }}
          >
            ELIZA ZHANG
          </a>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(248,247,244,0.6)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F8F7F4")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(248,247,244,0.6)")}
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#contact"
              style={{
                color: "#F8F7F4",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "1px solid rgba(59,130,246,0.6)",
                padding: "8px 20px",
                transition: "all 0.2s",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = "#3B82F6"
                el.style.borderColor = "#3B82F6"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.borderColor = "rgba(59,130,246,0.6)"
              }}
            >
              {t.nav.contact.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ─── AI Network Visualization ─────────────────────────────────────────────────

function NetworkViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height

    const nodes = Array.from({ length: 32 }, (_, i) => ({
      x: 60 + Math.random() * (W - 120),
      y: 40 + Math.random() * (H - 80),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 2 + Math.random() * 2.5,
      pulse: Math.random() * Math.PI * 2,
      major: i < 6,
      purple: i % 3 === 0,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.008

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 40 || n.x > W - 40) n.vx *= -1
        if (n.y < 20 || n.y > H - 20) n.vy *= -1
        n.pulse += 0.02
      })

      // Edges — gradient from blue to purple when crossing node types
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.28
            if (a.purple !== b.purple) {
              const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
              grad.addColorStop(0, `rgba(59,130,246,${alpha})`)
              grad.addColorStop(1, `rgba(139,92,246,${alpha})`)
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = grad
              ctx.lineWidth = 0.7
              ctx.stroke()
            } else {
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = a.purple
                ? `rgba(139,92,246,${alpha})`
                : `rgba(59,130,246,${alpha})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      // Animated pulses — alternating blue and purple
      nodes.slice(0, 8).forEach((a, i) => {
        const b = nodes[(i * 4 + 2) % nodes.length]
        const progress = (Math.sin(t + i * 1.2) + 1) / 2
        const px = a.x + (b.x - a.x) * progress
        const py = a.y + (b.y - a.y) * progress
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? "rgba(59,130,246,0.85)" : "rgba(167,139,250,0.85)"
        ctx.fill()
      })

      nodes.forEach((n) => {
        const pulse = (Math.sin(n.pulse) + 1) / 2
        const isBlue = !n.purple
        const r = isBlue ? "59,130,246" : "139,92,246"
        if (n.major) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 5 + pulse * 4, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${r},${0.1 + pulse * 0.12})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.major
          ? `rgba(${r},${0.75 + pulse * 0.25})`
          : `rgba(${r},${0.35 + pulse * 0.25})`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return <canvas ref={canvasRef} width={480} height={480} style={{ display: "block", opacity: 0.85 }} />
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const t = useT().hero

  return (
    <section
      id="hero"
      style={{
        background: "#0B1220",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora nebula blobs */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", top: "-10%", right: "10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(48px)",
        }} />
        <div style={{
          position: "absolute", top: "40%", right: "30%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          filter: "blur(32px)",
        }} />
      </div>

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 32px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 480px",
          gap: 80,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(139,92,246,0.35)",
              padding: "6px 14px",
              marginBottom: 40,
              background: "rgba(139,92,246,0.07)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#8B5CF6",
                boxShadow: "0 0 10px rgba(139,92,246,0.9)",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#A78BFA", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em" }}>
              {t.badge}
            </span>
          </div>

          <h1
            style={{
              color: "#F8F7F4",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            {t.headline1}
            <br />
            {t.headline2}
            <br />
            <span style={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 60%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>{t.headline3}</span>
          </h1>

          <p
            style={{
              color: "rgba(248,247,244,0.55)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 16,
              fontWeight: 400,
            }}
          >
            {t.subtitle}
          </p>

          <div style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="https://www.linkedin.com/in/eliza-zhang-098b28101/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                flexShrink: 0,
                borderRadius: "50%",
                overflow: "hidden",
                width: 52,
                height: 52,
                border: "1.5px solid rgba(59,130,246,0.5)",
                boxShadow: "0 0 0 3px rgba(59,130,246,0.12)",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = "0 0 0 4px rgba(59,130,246,0.3)"
                el.style.borderColor = "#3B82F6"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)"
                el.style.borderColor = "rgba(59,130,246,0.5)"
              }}
            >
              <img
                src={elizaPhoto}
                alt="Eliza Zhang"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </a>
            <div>
              <div style={{ color: "#F8F7F4", fontSize: 16, fontWeight: 600, letterSpacing: "0.01em" }}>
                {t.name}
              </div>
              <div
                style={{
                  color: "rgba(248,247,244,0.4)",
                  fontSize: 13,
                  fontWeight: 400,
                  marginTop: 3,
                  letterSpacing: "0.02em",
                }}
              >
                {t.title}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <CTAButton href="#experience" primary>
              {t.cta1}
            </CTAButton>
            <CTAButton href="#" secondary>
              {t.cta2}
            </CTAButton>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <NetworkViz />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(transparent, rgba(11,18,32,0.6))",
        }}
      />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </section>
  )
}

function CTAButton({
  href,
  primary,
  secondary,
  children,
}: {
  href: string
  primary?: boolean
  secondary?: boolean
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "13px 28px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.07em",
    textDecoration: "none",
    transition: "all 0.2s",
    cursor: "pointer",
    border: "1px solid",
    fontFamily: "inherit",
    ...(primary
      ? {
          background: hovered ? "#7C3AED" : "#3B82F6",
          color: "#F8F7F4",
          borderColor: hovered ? "#7C3AED" : "#3B82F6",
          boxShadow: hovered ? "0 0 24px rgba(139,92,246,0.4)" : "none",
        }
      : {
          background: "transparent",
          color: hovered ? "#C4B5FD" : "rgba(248,247,244,0.7)",
          borderColor: hovered ? "rgba(167,139,250,0.5)" : "rgba(248,247,244,0.2)",
        }),
  }

  return (
    <a href={href} style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
      {primary && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  )
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  id,
  children,
  style: extraStyle,
}: {
  id?: string
  dark?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <section id={id} style={{ padding: "100px 0", ...extraStyle }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>{children}</div>
    </section>
  )
}

function SectionLabel({ dark, purple, children }: { dark?: boolean; purple?: boolean; children: string }) {
  const color = purple ? "#8B5CF6" : "#3B82F6"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 56 }}>
      <div style={{
        width: 32, height: 1,
        background: purple
          ? "linear-gradient(90deg, #8B5CF6, #A78BFA)"
          : "#3B82F6",
      }} />
      <span style={{ color, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em" }}>
        {children.toUpperCase()}
      </span>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const t = useT().about

  return (
    <Section id="about" style={{ background: "#F8F7F4" }}>
      <SectionLabel>{t.sectionLabel}</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "#0B1220",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            {t.headlineLight}
            <br />
            <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
          </h2>
          <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>{t.bio}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#E2E8F0", border: "1px solid #E2E8F0" }}>
            {t.metrics.map((m) => (
              <div key={m.label} style={{ background: "#F8F7F4", padding: "24px 28px" }}>
                <div style={{ color: "#0B1220", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>
                  {m.value}
                </div>
                <div style={{ color: "#8A94A6", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em" }}>
                  {m.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {t.pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function PillarCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        padding: "28px 32px",
        border: `1px solid ${hovered ? "#8B5CF6" : "#E2E8F0"}`,
        background: hovered ? "rgba(139,92,246,0.03)" : "#FAFAF9",
        transition: "all 0.2s",
        cursor: "default",
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: 18, color: "#3B82F6", marginTop: 2, flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ color: "#0B1220", fontSize: 14, fontWeight: 600, marginBottom: 6, letterSpacing: "0.01em" }}>
          {title}
        </div>
        <div style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const t = useT().experience

  return (
    <Section id="experience" style={{ background: "#0B1220" }}>
      <SectionLabel dark>{t.sectionLabel}</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2
            style={{
              color: "#F8F7F4",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {t.headlineLight}
            <br />
            <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
          </h2>
          <p style={{ color: "rgba(248,247,244,0.4)", fontSize: 14, lineHeight: 1.7, marginTop: 20 }}>{t.summary}</p>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.07)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {t.roles.map((r, i) => (
              <ExperienceRow key={r.company} {...r} last={i === t.roles.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function ExperienceRow({
  company, role, period, location, bullets, tags, last,
}: {
  company: string; role: string; period: string; location: string; bullets: string[]; tags: string[]; last: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const visibleBullets = expanded ? bullets : bullets.slice(0, 2)

  return (
    <div
      style={{ paddingLeft: 40, paddingBottom: last ? 0 : 52, position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "absolute", left: -4, top: 10, width: 9, height: 9, borderRadius: "50%",
          background: hovered ? "linear-gradient(135deg, #3B82F6, #8B5CF6)" : "rgba(139,92,246,0.4)",
          border: "2px solid #0B1220",
          boxShadow: hovered ? "0 0 14px rgba(139,92,246,0.6)" : "none",
          transition: "all 0.2s",
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, marginBottom: 14, alignItems: "start" }}>
        <div>
          <div style={{ color: "#F8F7F4", fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 3 }}>{company}</div>
          <div style={{ color: "rgba(248,247,244,0.55)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>{role}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ color: "rgba(248,247,244,0.35)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>{period}</div>
          <div style={{ color: "rgba(248,247,244,0.25)", fontSize: 11, marginTop: 3, letterSpacing: "0.04em" }}>{location}</div>
        </div>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0", display: "flex", flexDirection: "column", gap: 8 }}>
        {visibleBullets.map((b, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: "#3B82F6", fontSize: 10, marginTop: 5, flexShrink: 0 }}>▸</span>
            <span style={{ color: "rgba(248,247,244,0.45)", fontSize: 13, lineHeight: 1.65 }}>{b}</span>
          </li>
        ))}
      </ul>
      {bullets.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            color: "rgba(167,139,250,0.8)", fontSize: 12, fontWeight: 500,
            letterSpacing: "0.05em", marginBottom: 14, fontFamily: "inherit",
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          {expanded ? "Show less ↑" : `+ ${bullets.length - 2} more`}
        </button>
      )}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", color: "rgba(59,130,246,0.8)",
              border: "1px solid rgba(59,130,246,0.2)", padding: "3px 10px", background: "rgba(59,130,246,0.05)",
            }}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── 42 Paris ─────────────────────────────────────────────────────────────────

function École42() {
  const t = useT().education

  return (
    <Section id="education" style={{ background: "#1A1F2B", position: "relative", overflow: "hidden" }}>
      {/* Purple nebula accent */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%", width: 480, height: 480,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        filter: "blur(48px)",
      }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <SectionLabel dark>{t.sectionLabel}</SectionLabel>
          <h2
            style={{
              color: "#F8F7F4",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            {t.headlineLight}
            <br />
            <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
          </h2>
          <p style={{ color: "rgba(248,247,244,0.5)", fontSize: 15, lineHeight: 1.75 }}>{t.desc}</p>
          <div
            style={{
              marginTop: 32, padding: "20px 24px",
              border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.05)", display: "inline-block",
            }}
          >
            <div style={{ color: "#3B82F6", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", marginBottom: 4 }}>
              {t.badge}
            </div>
            <div style={{ color: "rgba(248,247,244,0.7)", fontSize: 14 }}>{t.badgeSub}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {t.skills.map((s) => (
            <SkillChip key={s} label={s} dark />
          ))}
        </div>
      </div>
    </Section>
  )
}

function SkillChip({ label, dark }: { label: string; dark?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        padding: "16px 20px",
        border: `1px solid ${hovered ? "#3B82F6" : dark ? "rgba(255,255,255,0.07)" : "#E2E8F0"}`,
        background: hovered ? "rgba(59,130,246,0.08)" : dark ? "rgba(255,255,255,0.02)" : "#FAFAF9",
        transition: "all 0.2s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: 6, height: 1, background: hovered ? "#3B82F6" : "rgba(59,130,246,0.4)", marginBottom: 10, transition: "all 0.2s" }} />
      <span style={{ color: dark ? "rgba(248,247,244,0.75)" : "#0B1220", fontSize: 13, fontWeight: 500 }}>{label}</span>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const t = useT().projects

  return (
    <Section id="projects" style={{ background: "#F8F7F4" }}>
      <SectionLabel purple>{t.sectionLabel}</SectionLabel>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 300,
            color: "#0B1220",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {t.headlineLight}
          <br />
          <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {t.items.map((p) => (
          <ProjectCard key={p.index} {...p} challengeLabel={t.challengeLabel} solutionLabel={t.solutionLabel} impactLabel={t.impactLabel} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({
  index, name, challenge, solution, impact, tags, challengeLabel, solutionLabel, impactLabel,
}: {
  index: string; name: string; challenge: string; solution: string; impact: string; tags: string[]
  challengeLabel: string; solutionLabel: string; impactLabel: string
}) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        border: `1px solid ${hovered || expanded ? "#CBD5E1" : "#E2E8F0"}`,
        background: expanded ? "#FAFAF9" : "#F8F7F4",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <div style={{ display: "grid", gridTemplateColumns: "72px 1fr auto", gap: 24, padding: "28px 32px", alignItems: "center" }}>
        <span style={{ color: "#3B82F6", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>{index}</span>
        <div>
          <div style={{ color: "#0B1220", fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 4 }}>{name}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontSize: 11, color: "#8A94A6", fontWeight: 500, letterSpacing: "0.05em" }}>{tag}</span>
            ))}
          </div>
        </div>
        <div
          style={{
            width: 32, height: 32, border: "1px solid #E2E8F0",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#8A94A6", fontSize: 16, transition: "transform 0.2s", flexShrink: 0,
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </div>
      </div>
      {expanded && (
        <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "72px 1fr", gap: 24 }}>
          <div />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { label: challengeLabel, text: challenge },
              { label: solutionLabel, text: solution },
              { label: impactLabel, text: impact },
            ].map(({ label, text }) => (
              <div key={label}>
                <div style={{ color: "#3B82F6", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 8 }}>{label}</div>
                <p style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  const t = useT().skills

  return (
    <Section id="skills" style={{ background: "#0B1220" }}>
      <SectionLabel dark purple>{t.sectionLabel}</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, gridAutoRows: "auto" }}>
        {t.categories.map((cat, idx) => {
          const isPurple = idx % 2 === 1
          return (
          <div
            key={cat.label}
            style={{
              background: isPurple ? "rgba(139,92,246,0.04)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${isPurple ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.06)"}`,
              padding: "36px 32px",
            }}
          >
            <div style={{
              color: isPurple ? "#A78BFA" : "#3B82F6",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 24,
            }}>
              {cat.label.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cat.skills.map((s) => (
                <SkillRow key={s} label={s} />
              ))}
            </div>
          </div>
        )})}
      </div>
    </Section>
  )
}

function SkillRow({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 12, cursor: "default", padding: "4px 0" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: hovered ? 20 : 10, height: 1,
        background: hovered ? "linear-gradient(90deg, #3B82F6, #8B5CF6)" : "rgba(139,92,246,0.3)",
        transition: "all 0.2s",
      }} />
      <span style={{ color: hovered ? "#C4B5FD" : "rgba(248,247,244,0.55)", fontSize: 14, fontWeight: 400, transition: "color 0.2s" }}>
        {label}
      </span>
    </div>
  )
}

// ─── Certifications ───────────────────────────────────────────────────────────

function Certifications() {
  const t = useT().certifications

  return (
    <Section style={{ background: "#F8F7F4" }}>
      <SectionLabel>{t.sectionLabel}</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, gridAutoRows: "1fr" }}>
        {t.items.map((c) => (
          <CertCard key={c.name} {...c} />
        ))}
      </div>
    </Section>
  )
}

function CertCard({ name, issuer, code }: { name: string; issuer: string; code: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        border: `1px solid ${hovered ? "#3B82F6" : "#E2E8F0"}`,
        background: "#FAFAF9", padding: "32px", transition: "all 0.2s", cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 44, height: 44, border: "1px solid rgba(59,130,246,0.3)",
          background: "rgba(59,130,246,0.05)", marginBottom: 20,
        }}
      >
        <span style={{ color: "#3B82F6", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}>{code}</span>
      </div>
      <div style={{ color: "#0B1220", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 6, lineHeight: 1.3 }}>{name}</div>
      <div style={{ color: "#8A94A6", fontSize: 13 }}>{issuer}</div>
    </div>
  )
}

// ─── Languages ────────────────────────────────────────────────────────────────

function Languages() {
  const t = useT().languages

  return (
    <Section style={{ background: "#1A1F2B", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", bottom: "-15%", left: "-8%", width: 520, height: 520,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        filter: "blur(52px)",
      }} />
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <SectionLabel dark>{t.sectionLabel}</SectionLabel>
          <h2
            style={{
              color: "#F8F7F4",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {t.headlineLight}
            <br />
            <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {t.items.map((l) => (
            <LanguageBar key={l.name} {...l} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function LanguageBar({ name, level, proficiency, tag }: { name: string; level: string; proficiency: number; tag: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ color: "#F8F7F4", fontSize: 15, fontWeight: 600 }}>{name}</span>
          <span style={{ color: "#3B82F6", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", border: "1px solid rgba(59,130,246,0.3)", padding: "2px 8px" }}>
            {tag}
          </span>
        </div>
        <span style={{ color: "rgba(248,247,244,0.4)", fontSize: 13 }}>{level}</span>
      </div>
      <div style={{ height: 2, background: "rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: visible ? `${proficiency}%` : "0%",
            background: "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 60%, #A78BFA 100%)",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "0.1s",
          }}
        />
      </div>
    </div>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const t = useT().contact

  return (
    <section id="contact" style={{ background: "#0B1220", padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 600, height: 600,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 640 }}>
          <SectionLabel dark purple>{t.sectionLabel}</SectionLabel>
          <h2
            style={{
              color: "#F8F7F4",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            {t.headlineLight}
            <br />
            <span style={{ fontWeight: 700 }}>{t.headlineBold}</span>
          </h2>
          <p style={{ color: "rgba(248,247,244,0.45)", fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>{t.desc}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ContactButton href="https://www.linkedin.com/in/eliza-zhang-098b28101/" label={t.linkedin} />
            <ContactButton href="mailto:chokirin@gmail.com" label={t.email} primary />
            <ContactButton href="#" label={t.resume} />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "80px auto 0",
          padding: "32px 32px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "rgba(248,247,244,0.2)", fontSize: 12, letterSpacing: "0.04em" }}>{t.footer}</span>
        <span style={{ color: "rgba(248,247,244,0.15)", fontSize: 12 }}>© {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}

function ContactButton({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "13px 28px",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.07em",
        textDecoration: "none",
        transition: "all 0.2s",
        border: "1px solid",
        background: primary ? (hovered ? "#2563EB" : "#3B82F6") : "transparent",
        color: primary ? "#F8F7F4" : hovered ? "#F8F7F4" : "rgba(248,247,244,0.65)",
        borderColor: primary ? (hovered ? "#2563EB" : "#3B82F6") : hovered ? "rgba(248,247,244,0.4)" : "rgba(248,247,244,0.2)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("en")

  return (
    <LangContext.Provider value={lang}>
      <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        <Nav lang={lang} setLang={setLang} />
        <Hero />
        <About />
        <Experience />
        <École42 />
        <Projects />
        <Skills />
        <Certifications />
        <Languages />
        <Contact />
      </div>
    </LangContext.Provider>
  )
}
