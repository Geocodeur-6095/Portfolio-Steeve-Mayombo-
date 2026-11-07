export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      services: 'Services',
      contact: 'Contact',
      cta: 'Me contacter'
    },
    controls: {
      language: 'Changer de langue',
      theme: 'Changer de thème'
    },
    hero: {
      badge: 'Disponible pour de nouveaux projets',
      titleA: 'Des solutions digitales',
      titleB: 'impact réel',
      lead1: 'Je suis ',
      leadName: 'Steeve Mayombo',
      lead2:
        ", développeur web et designer créatif à Libreville. Je conçois des sites, applications, identités visuelles et contenus vidéo qui allient technologie et créativité.",
      ctaPrimary: 'Découvrir mes projets',
      ctaSecondary: 'Me contacter',
      scroll: 'Scroll'
    },
    about: {
      eyebrow: 'À Propos',
      titleA: 'Le code au service de',
      titleB: 'votre vision',
      quote:
        '« Steeve.Dev incarne l\'alliance entre technologie et créativité pour construire des solutions digitales modernes, fiables et tournées vers l\'avenir. »',
      p1a: "Salut, moi c'est ",
      p1b: ', développeur web et designer créatif basé à ',
      p1c:
        ". J'accompagne entrepreneurs, marques et institutions dans la création de leur présence digitale.",
      p2a: "De la première maquette à la mise en ligne, je gère l'ensemble de la chaîne : architecture, développement ",
      p2b: ', intégration ',
      p2c: ', identité visuelle et contenus vidéo.',
      role: 'Le Geocodeur',
      cv: 'Télécharger mon CV',
      journey: 'Mon parcours',
      stats: [
        { value: '15+', label: 'Projets réalisés' },
        { value: '3+', label: "Années d'expérience" },
        { value: '10+', label: 'Clients satisfaits' },
        { value: '100%', label: 'Engagement qualité' }
      ],
      timeline: [
        { year: '2022', title: 'Les débuts', description: 'Apprentissage autodidacte du développement web' },
        { year: '2023', title: 'Premiers clients', description: 'Sites vitrines et applications web sur mesure' },
        { year: '2024', title: 'Ouverture créative', description: 'Design graphique, UI/UX et montage vidéo' },
        { year: '2025', title: "Aujourd'hui", description: 'Freelance full-service en solutions digitales' }
      ]
    },
    values: [
      { label: 'Confiance', text: 'Des engagements tenus, des livrables à la hauteur.' },
      { label: 'Expertise', text: 'Une maîtrise technique du code au design.' },
      { label: 'Innovation', text: 'Des idées neuves au service de vos objectifs.' },
      { label: 'Performance', text: 'Des interfaces rapides, fluides et optimisées.' },
      { label: 'Espoir', text: 'Le digital comme levier de progrès.' }
    ],
    skills: {
      eyebrow: 'Expertise',
      title: 'Mes Compétences',
      categories: [
        {
          id: 'dev',
          title: 'Développement Web',
          description: "Création de sites web modernes et d'applications web performantes.",
          subcategories: [
            {
              title: 'Sites Web',
              items: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Nuxt.js', 'TailwindCSS'],
              projects: 'Sites vitrines, e-commerce, landing pages'
            },
            {
              title: 'Applications Web',
              items: ['Node.js', 'Firebase', 'API REST', 'MongoDB'],
              projects: 'Dashboards, SaaS, plateformes'
            }
          ]
        },
        {
          id: 'design',
          title: 'Web Design',
          description:
            'Designs UI/UX élégants et fonctionnels pour une expérience utilisateur exceptionnelle.',
          subcategories: [
            {
              title: 'Maquettes',
              items: ['Figma', 'Canva', 'Adobe XD'],
              projects: 'Wireframes, prototypes interactifs'
            },
            {
              title: 'UI/UX Design',
              items: ['User Research', 'Architecture info', 'Design Systems'],
              projects: 'Interfaces utilisateur optimisées'
            }
          ]
        },
        {
          id: 'graphisme',
          title: 'Design Graphique',
          description: 'Créations visuelles percutantes pour votre identité de marque.',
          subcategories: [
            {
              title: 'Créations Canva',
              items: ['Posts réseaux sociaux', 'Présentations', 'Infographies'],
              projects: 'Contenus visuels optimisés'
            },
            {
              title: 'Créations IA',
              items: ['Midjourney', 'DALL-E', 'Gemini', 'Canva AI'],
              projects: 'Illustrations, concepts visuels'
            }
          ]
        },
        {
          id: 'video',
          title: 'Montage Vidéo',
          description: 'Production et montage vidéo professionnel pour donner vie à vos contenus.',
          subcategories: [
            {
              title: 'Montage & Motion',
              items: ['Filmora', 'CapCut', 'After Effects basics'],
              projects: 'Vidéos promotionnelles, tutoriels, motion design'
            }
          ]
        }
      ]
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Projets Récents',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'web', label: 'Dev Web' },
        { id: 'design', label: 'Design' },
        { id: 'graphisme', label: 'Graphisme' },
        { id: 'video', label: 'Vidéo' }
      ],
      viewAll: 'Voir tous les projets',
      items: [
        {
          title: "Guide de l'Entrepreneur",
          category: 'web',
          description:
            "Plateforme d'accompagnement pour les entrepreneurs gabonais : réglementation par secteur, formations, quiz et idées de projets. Développée en collaboration avec d'autres développeurs.",
          technologies: ['Nuxt.js', 'TailwindCSS', 'API REST'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/4c8016f57_generated_image.png',
          link: 'https://guide-entrepreneur.cyberschool.ga/'
        },
        {
          title: 'Business Booster',
          category: 'web',
          description:
            'Application SaaS de business plan et de suivi de projet : résumé opérationnel, plan financier, devis, factures et gestion de tâches. Réalisée en équipe.',
          technologies: ['Vue.js', 'TailwindCSS', 'API REST'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/c94a9936b_generated_image.png',
          link: 'https://businessbooster.cyberschool.ga/'
        },
        {
          title: 'E-Commerce Mode',
          category: 'web',
          description:
            'Boutique en ligne de mode : catalogue produits, panier et paiement intégré, avec gestion des stocks.',
          technologies: ['Nuxt.js', 'TailwindCSS', 'Firebase'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/be1138a24_generated_image.png'
        },
        {
          title: 'Dashboard Analytics',
          category: 'web',
          description:
            'Tableau de bord de données en temps réel : courbes, histogrammes et indicateurs clés.',
          technologies: ['Vue.js', 'Node.js', 'Chart.js'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/8435ac2a8_generated_image.png'
        },
        {
          title: 'Maquette App Mobile',
          category: 'design',
          description:
            "Design UI/UX d'une application de fitness : parcours d'entraînement, suivi d'activité et progression.",
          technologies: ['Figma', 'Prototypage', 'UI/UX'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/c73c7aa0c_generated_image.png'
        },
        {
          title: 'Identité Visuelle Startup',
          category: 'graphisme',
          description:
            "Identité visuelle d'une startup tech : logo, cartes de visite, papeterie et charte graphique.",
          technologies: ['Canva', 'Illustrator', 'Branding'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/e9e7ff80c_generated_image.png'
        },
        {
          title: 'Vidéo Promotionnelle',
          category: 'video',
          description:
            "Montage d'une publicité produit : habillage graphique, étalonnage et motion design.",
          technologies: ['Filmora', 'Motion Design', 'CapCut'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/77e50aa43_generated_image.png'
        },
        {
          title: 'Site Vitrine Restaurant',
          category: 'web',
          description: 'Site vitrine de restaurant : menu interactif et réservation en ligne.',
          technologies: ['Vue.js', 'TailwindCSS', 'API'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/cf490a63c_generated_image.png'
        }
      ]
    },
    services: {
      eyebrow: 'Prestations',
      title: 'Mes Services',
      subtitle:
        'Des solutions digitales complètes pour transformer votre présence en ligne et atteindre vos objectifs.',
      cta: 'Demander un devis',
      items: [
        {
          title: 'Développement Web',
          description:
            "Création de sites web modernes et d'applications web performantes adaptées à vos besoins.",
          features: ['Sites vitrines & e-commerce', 'Applications web sur mesure', 'Solutions responsive', 'Optimisation SEO']
        },
        {
          title: 'Web Design',
          description:
            'Des designs UI/UX élégants et fonctionnels pour une expérience utilisateur exceptionnelle.',
          features: ['Maquettes web & mobile', 'Design UI/UX', 'Prototypage interactif', 'Design systems']
        },
        {
          title: 'Design Graphique',
          description:
            'Créations visuelles percutantes avec Canva et intelligence artificielle pour votre marque.',
          features: ['Créations Canva', 'Illustrations IA', 'Identité visuelle', 'Social media design']
        },
        {
          title: 'Montage Vidéo',
          description: 'Production et montage vidéo professionnel pour donner vie à vos contenus.',
          features: ['Montage vidéo', 'Motion design', 'Vidéos promotionnelles', 'Contenu social media']
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons ensemble',
      subtitle:
        "Une idée de projet ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous !",
      availability: 'Disponible pour de nouveaux projets',
      name: 'Nom complet',
      namePh: 'Votre nom',
      email: 'Email',
      emailPh: 'votre@email.com',
      subject: 'Sujet',
      subjectPh: 'Sélectionnez un sujet',
      message: 'Message',
      messagePh: 'Décrivez votre projet...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successTitle: 'Message envoyé !',
      successText: 'Je vous répondrai dans les plus brefs délais.',
      subjects: [
        { value: 'Dev Web', label: 'Dev Web' },
        { value: 'Design', label: 'Design' },
        { value: 'Graphisme', label: 'Graphisme' },
        { value: 'Montage Vidéo', label: 'Montage Vidéo' },
        { value: 'Autre', label: 'Autre' }
      ],
      infoLabels: { email: 'Email', phone: 'Téléphone', location: 'Localisation' },
      emailDialog: {
        title: 'Écrire à Steeve',
        description: 'Votre message part directement depuis le site, sans ouvrir votre messagerie.',
        to: 'Destinataire',
        sender: 'Votre email (expéditeur)',
        senderPh: 'vous@exemple.com',
        senderHint: 'Indiquez votre adresse pour que Steeve puisse vous répondre.',
        subject: 'Objet',
        subjectPh: 'Objet de votre message',
        message: 'Message',
        messagePh: 'Écrivez votre message...',
        cancel: 'Annuler',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        successTitle: 'Message envoyé !',
        successText: 'Merci, votre message est bien arrivé. Je vous réponds très vite.',
        close: 'Fermer',
        error: "L'envoi a échoué. Merci de réessayer dans un instant."
      },
      location: 'Libreville, Gabon',
      follow: 'Suivez-moi',
      mapTitle: 'Localisation'
    },
    footer: {
      essence:
        "L'alliance entre technologie et créativité pour construire des solutions digitales modernes, fiables et tournées vers l'avenir.",
      navigation: 'Navigation',
      servicesTitle: 'Services',
      services: ['Développement Web', 'Web Design UI/UX', 'Design Graphique', 'Montage Vidéo'],
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec',
      in: 'à Libreville, Gabon',
      top: 'Haut de page',
      scan: 'Scannez le code',
      scanText: 'Ma carte de visite numérique, à portée de téléphone.'
    }
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Work',
      services: 'Services',
      contact: 'Contact',
      cta: 'Get in touch'
    },
    controls: {
      language: 'Change language',
      theme: 'Change theme'
    },
    hero: {
      badge: 'Available for new projects',
      titleA: 'Digital solutions with',
      titleB: 'real impact',
      lead1: "I'm ",
      leadName: 'Steeve Mayombo',
      lead2:
        ', a web developer and creative designer based in Libreville. I craft websites, applications, visual identities and video content that blend technology with creativity.',
      ctaPrimary: 'Explore my work',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll'
    },
    about: {
      eyebrow: 'About',
      titleA: 'Code in the service of',
      titleB: 'your vision',
      quote:
        '"Steeve.Dev embodies the union of technology and creativity to build modern, reliable and future-facing digital solutions."',
      p1a: "Hi, I'm ",
      p1b: ', a web developer and creative designer based in ',
      p1c:
        '. I help entrepreneurs, brands and institutions build their digital presence.',
      p2a: 'From the first mockup to going live, I handle the whole chain: architecture, ',
      p2b: ' development, ',
      p2c: ' integration, visual identity and video content.',
      role: 'The Geocodeur',
      cv: 'Download my CV',
      journey: 'My journey',
      stats: [
        { value: '15+', label: 'Projects delivered' },
        { value: '3+', label: 'Years of experience' },
        { value: '10+', label: 'Happy clients' },
        { value: '100%', label: 'Quality commitment' }
      ],
      timeline: [
        { year: '2022', title: 'The beginnings', description: 'Self-taught journey into web development' },
        { year: '2023', title: 'First clients', description: 'Showcase websites and custom web apps' },
        { year: '2024', title: 'Creative expansion', description: 'Graphic design, UI/UX and video editing' },
        { year: '2025', title: 'Today', description: 'Full-service freelance digital solutions' }
      ]
    },
    values: [
      { label: 'Trust', text: 'Commitments kept, work that delivers.' },
      { label: 'Expertise', text: 'Technical mastery from code to design.' },
      { label: 'Innovation', text: 'Fresh ideas serving your goals.' },
      { label: 'Performance', text: 'Fast, fluid and optimised interfaces.' },
      { label: 'Hope', text: 'Digital as a driver of progress.' }
    ],
    skills: {
      eyebrow: 'Expertise',
      title: 'My Skills',
      categories: [
        {
          id: 'dev',
          title: 'Web Development',
          description: 'Modern websites and high-performance web applications.',
          subcategories: [
            {
              title: 'Websites',
              items: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Nuxt.js', 'TailwindCSS'],
              projects: 'Showcase sites, e-commerce, landing pages'
            },
            {
              title: 'Web Applications',
              items: ['Node.js', 'Firebase', 'REST API', 'MongoDB'],
              projects: 'Dashboards, SaaS, platforms'
            }
          ]
        },
        {
          id: 'design',
          title: 'Web Design',
          description: 'Elegant, functional UI/UX design for an outstanding user experience.',
          subcategories: [
            {
              title: 'Mockups',
              items: ['Figma', 'Canva', 'Adobe XD'],
              projects: 'Wireframes, interactive prototypes'
            },
            {
              title: 'UI/UX Design',
              items: ['User Research', 'Information architecture', 'Design Systems'],
              projects: 'Optimised user interfaces'
            }
          ]
        },
        {
          id: 'graphisme',
          title: 'Graphic Design',
          description: 'Striking visual work for your brand identity.',
          subcategories: [
            {
              title: 'Canva Creations',
              items: ['Social media posts', 'Presentations', 'Infographics'],
              projects: 'Optimised visual content'
            },
            {
              title: 'AI Creations',
              items: ['Midjourney', 'DALL-E', 'Gemini', 'Canva AI'],
              projects: 'Illustrations, visual concepts'
            }
          ]
        },
        {
          id: 'video',
          title: 'Video Editing',
          description: 'Professional video production and editing to bring your content to life.',
          subcategories: [
            {
              title: 'Editing & Motion',
              items: ['Filmora', 'CapCut', 'After Effects basics'],
              projects: 'Promo videos, tutorials, motion design'
            }
          ]
        }
      ]
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Recent Work',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web Dev' },
        { id: 'design', label: 'Design' },
        { id: 'graphisme', label: 'Graphics' },
        { id: 'video', label: 'Video' }
      ],
      viewAll: 'See all projects',
      items: [
        {
          title: "Entrepreneur's Guide",
          category: 'web',
          description:
            "Support platform for Gabonese entrepreneurs: sector-by-sector regulation, training, quizzes and project ideas. Built with other developers.",
          technologies: ['Nuxt.js', 'TailwindCSS', 'API REST'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/4c8016f57_generated_image.png',
          link: 'https://guide-entrepreneur.cyberschool.ga/'
        },
        {
          title: 'Business Booster',
          category: 'web',
          description:
            'Business plan and project tracking SaaS: executive summary, financial plan, quotes, invoices and task management. Built as a team.',
          technologies: ['Vue.js', 'TailwindCSS', 'API REST'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/c94a9936b_generated_image.png',
          link: 'https://businessbooster.cyberschool.ga/'
        },
        {
          title: 'Fashion E-Commerce',
          category: 'web',
          description:
            'Online fashion store: product catalogue, cart and integrated checkout, with stock management.',
          technologies: ['Nuxt.js', 'TailwindCSS', 'Firebase'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/be1138a24_generated_image.png'
        },
        {
          title: 'Analytics Dashboard',
          category: 'web',
          description:
            'Real-time data dashboard: line and bar charts with key performance indicators.',
          technologies: ['Vue.js', 'Node.js', 'Chart.js'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/8435ac2a8_generated_image.png'
        },
        {
          title: 'Mobile App Mockup',
          category: 'design',
          description:
            'UI/UX design for a fitness app: workout flow, activity tracking and progress screens.',
          technologies: ['Figma', 'Prototyping', 'UI/UX'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/c73c7aa0c_generated_image.png'
        },
        {
          title: 'Startup Visual Identity',
          category: 'graphisme',
          description:
            'Visual identity for a tech startup: logo, business cards, stationery and brand guidelines.',
          technologies: ['Canva', 'Illustrator', 'Branding'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/e9e7ff80c_generated_image.png'
        },
        {
          title: 'Promotional Video',
          category: 'video',
          description:
            'Product commercial edit: graphic overlays, colour grading and motion design.',
          technologies: ['Filmora', 'Motion Design', 'CapCut'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/77e50aa43_generated_image.png'
        },
        {
          title: 'Restaurant Website',
          category: 'web',
          description: 'Restaurant showcase website with an interactive menu and online booking.',
          technologies: ['Vue.js', 'TailwindCSS', 'API'],
          image:
            'https://media.base44.com/images/public/6936e7ec2b77d79277e60051/cf490a63c_generated_image.png'
        }
      ]
    },
    services: {
      eyebrow: 'What I do',
      title: 'My Services',
      subtitle:
        'Complete digital solutions to transform your online presence and reach your goals.',
      cta: 'Request a quote',
      items: [
        {
          title: 'Web Development',
          description: 'Modern websites and high-performance web applications tailored to your needs.',
          features: ['Showcase & e-commerce sites', 'Custom web applications', 'Responsive solutions', 'SEO optimisation']
        },
        {
          title: 'Web Design',
          description: 'Elegant, functional UI/UX design for an outstanding user experience.',
          features: ['Web & mobile mockups', 'UI/UX design', 'Interactive prototyping', 'Design systems']
        },
        {
          title: 'Graphic Design',
          description: 'Striking visuals with Canva and artificial intelligence for your brand.',
          features: ['Canva creations', 'AI illustrations', 'Visual identity', 'Social media design']
        },
        {
          title: 'Video Editing',
          description: 'Professional video production and editing to bring your content to life.',
          features: ['Video editing', 'Motion design', 'Promotional videos', 'Social media content']
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      subtitle: 'Got a project in mind? Feel free to reach out. I would love to talk with you!',
      availability: 'Available for new projects',
      name: 'Full name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'your@email.com',
      subject: 'Subject',
      subjectPh: 'Select a subject',
      message: 'Message',
      messagePh: 'Tell me about your project...',
      send: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successText: 'I will get back to you as soon as possible.',
      subjects: [
        { value: 'Dev Web', label: 'Web Dev' },
        { value: 'Design', label: 'Design' },
        { value: 'Graphisme', label: 'Graphic Design' },
        { value: 'Montage Vidéo', label: 'Video Editing' },
        { value: 'Autre', label: 'Other' }
      ],
      infoLabels: { email: 'Email', phone: 'Phone', location: 'Location' },
      emailDialog: {
        title: 'Write to Steeve',
        description: 'Your message is sent straight from the site, without opening your mail app.',
        to: 'Recipient',
        sender: 'Your email (sender)',
        senderPh: 'you@example.com',
        senderHint: 'Add your address so Steeve can reply to you.',
        subject: 'Subject',
        subjectPh: 'Subject of your message',
        message: 'Message',
        messagePh: 'Write your message...',
        cancel: 'Cancel',
        send: 'Send message',
        sending: 'Sending...',
        successTitle: 'Message sent!',
        successText: 'Thank you, your message has arrived. I will reply very soon.',
        close: 'Close',
        error: 'Sending failed. Please try again in a moment.'
      },
      location: 'Libreville, Gabon',
      follow: 'Follow me',
      mapTitle: 'Location'
    },
    footer: {
      essence:
        'The union of technology and creativity to build modern, reliable and future-facing digital solutions.',
      navigation: 'Navigation',
      servicesTitle: 'Services',
      services: ['Web Development', 'Web UI/UX Design', 'Graphic Design', 'Video Editing'],
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      in: 'in Libreville, Gabon',
      top: 'Back to top',
      scan: 'Scan the code',
      scanText: 'My digital business card, right on your phone.'
    }
  }
};