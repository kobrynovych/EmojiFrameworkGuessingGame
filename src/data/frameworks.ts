export interface Framework {
  id: number;
  emojis: string;
  name: string;
  options: string[];
  hint: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  details: {
    yearCreated: number;
    creator: string;
    keyFeatures: string[];
    jobTitles: string[];
    marketInfo: {
      salaryRange: string;
      experienceLevels: {
        junior: string;
        middle: string;
        senior: string;
      };
      marketDemand: "High" | "Medium" | "Low";
      popularRegions: string[];
    };
  };
}

export const frameworks: Framework[] = [
  {
    id: 1,
    emojis: "⚛️💫🔄", // ⚛️💫🔄🔁💙🌀
    name: "React",
    options: ["Angular", "React", "Vue", "Svelte"],
    hint: "Facebook's popular UI library with virtual DOM",
    category: "Frontend",
    difficulty: "Easy",
    details: {
      yearCreated: 2013,
      creator: "Facebook",
      keyFeatures: ["Virtual DOM", "Component-based", "JSX syntax"],
      jobTitles: ["Frontend Developer", "React Developer", "JavaScript Engineer"],
      marketInfo: {
        salaryRange: "$70,000 - $150,000",
        experienceLevels: {
          junior: "0-2 years React, basic JavaScript",
          middle: "2-4 years React, strong JavaScript",
          senior: "4+ years React, architecture experience"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  },
  {
    id: 2,
    emojis: "💚📱🌿", // 💚🟢🧩📦🌿🌱📈🔗📗👁️
    name: "Vue",
    options: ["React", "Angular", "Vue", "Ember"],
    hint: "Progressive framework from Evan You",
    category: "Frontend",
    difficulty: "Easy",
    details: {
      yearCreated: 2014,
      creator: "Evan You",
      keyFeatures: ["Progressive Framework", "Template syntax", "Reactivity system"],
      jobTitles: ["Vue Developer", "Frontend Engineer", "JavaScript Developer"],
      marketInfo: {
        salaryRange: "$65,000 - $140,000",
        experienceLevels: {
          junior: "0-2 years Vue, JavaScript basics",
          middle: "2-4 years Vue, advanced JavaScript",
          senior: "4+ years Vue, full-stack experience"
        },
        marketDemand: "Medium",
        popularRegions: ["Asia", "Europe", "North America"]
      }
    }
  },
  {
    id: 3,
    emojis: "🔴📐⚡️", // 🟥🔴📐🔁🅰️📐🚧
    name: "Angular",
    options: ["React", "Svelte", "Angular", "Vue"],
    hint: "Google's enterprise-ready framework",
    category: "Frontend",
    difficulty: "Hard",
    details: {
      yearCreated: 2016,
      creator: "Google",
      keyFeatures: ["TypeScript-based", "Full framework", "Dependency Injection"],
      jobTitles: ["Angular Developer", "Frontend Architect", "TypeScript Developer"],
      marketInfo: {
        salaryRange: "$75,000 - $160,000",
        experienceLevels: {
          junior: "0-2 years Angular, TypeScript basics",
          middle: "2-4 years Angular, strong TypeScript",
          senior: "4+ years Angular, enterprise experience"
        },
        marketDemand: "High",
        popularRegions: ["Europe", "North America", "India"]
      }
    }
  },
  {
    id: 4,
    emojis: "🔥⚡️🎯", // 🔥🟠📦✨🚀🧙‍♂️
    name: "Svelte",
    options: ["Svelte", "React", "Vue", "Angular"],
    hint: "Compile-time framework with no virtual DOM",
    category: "Frontend",
    difficulty: "Medium",
    details: {
      yearCreated: 2016,
      creator: "Rich Harris",
      keyFeatures: ["No Virtual DOM", "True reactivity", "Less boilerplate"],
      jobTitles: ["Svelte Developer", "Frontend Engineer", "JavaScript Developer"],
      marketInfo: {
        salaryRange: "$60,000 - $140,000",
        experienceLevels: {
          junior: "0-2 years JavaScript, basic Svelte",
          middle: "1-3 years Svelte, strong JavaScript",
          senior: "3+ years Svelte, modern web experience"
        },
        marketDemand: "Medium",
        popularRegions: ["Europe", "North America", "Remote"]
      }
    }
  },
  {
    id: 5,
    emojis: "💲✨📜", // $🔍🔗💵🔌📝📜👴
    name: "jQuery",
    options: ["React", "Vue", "Backbone", "jQuery"],
    hint: "Classic DOM manipulation library",
    category: "Frontend",
    difficulty: "Easy",
    details: {
      yearCreated: 2006,
      creator: "John Resig",
      keyFeatures: ["DOM manipulation", "AJAX simplified", "Cross-browser support"],
      jobTitles: ["Frontend Developer", "Web Developer", "JavaScript Developer"],
      marketInfo: {
        salaryRange: "$50,000 - $120,000",
        experienceLevels: {
          junior: "0-1 year jQuery, basic JavaScript",
          middle: "1-3 years jQuery, DOM expertise",
          senior: "3+ years jQuery, legacy system experience"
        },
        marketDemand: "Low",
        popularRegions: ["Legacy Systems", "Enterprise", "Maintenance"]
      }
    }
  },
  {
    id: 6,
    emojis: "⚡️➡️📦", // ➡️⚛️🌐
    name: "Next.js",
    options: ["Next.js", "Nuxt", "Gatsby", "Remix"],
    hint: "Popular React meta-framework by Vercel",
    category: "Full Stack",
    difficulty: "Medium",
    details: {
      yearCreated: 2016,
      creator: "Vercel",
      keyFeatures: ["Server-side rendering", "File-based routing", "API routes"],
      jobTitles: ["Full Stack Developer", "Next.js Developer", "React Developer"],
      marketInfo: {
        salaryRange: "$80,000 - $170,000",
        experienceLevels: {
          junior: "1-2 years React, basic Next.js",
          middle: "2-4 years Next.js, full-stack skills",
          senior: "4+ years Next.js, system architecture"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Remote"]
      }
    }
  },
  {
    id: 7,
    emojis: "🐍🎸🎼",
    name: "Django",
    options: ["Django", "Flask", "FastAPI", "Rails"],
    hint: "Python web framework named after a jazz guitarist",
    category: "Backend",
    difficulty: "Medium",
    details: {
      yearCreated: 2005,
      creator: "Django Software Foundation",
      keyFeatures: ["Admin interface", "ORM", "Authentication"],
      jobTitles: ["Python Developer", "Backend Engineer", "Django Developer"],
      marketInfo: {
        salaryRange: "$70,000 - $150,000",
        experienceLevels: {
          junior: "0-2 years Python, basic Django",
          middle: "2-4 years Django, database expertise",
          senior: "4+ years Django, system architecture"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  },
  {
    id: 8,
    emojis: "☕️🌱🍃",
    name: "Spring",
    options: ["Spring", "Laravel", "Express", "NestJS"],
    hint: "Enterprise Java framework with dependency injection",
    category: "Backend",
    difficulty: "Hard",
    details: {
      yearCreated: 2002,
      creator: "Pivotal Software",
      keyFeatures: ["Dependency Injection", "AOP", "Enterprise-ready"],
      jobTitles: ["Java Developer", "Backend Engineer", "Spring Developer"],
      marketInfo: {
        salaryRange: "$80,000 - $180,000",
        experienceLevels: {
          junior: "1-2 years Java, basic Spring",
          middle: "2-4 years Spring, enterprise patterns",
          senior: "5+ years Spring, architecture expertise"
        },
        marketDemand: "High",
        popularRegions: ["Enterprise", "Finance", "Banking"]
      }
    }
  },
  {
    id: 9,
    emojis: "🍎📱⚡️",
    name: "Swift",
    options: ["Swift", "Kotlin", "Flutter", "React Native"],
    hint: "Apple's modern programming language",
    category: "Mobile",
    difficulty: "Medium",
    details: {
      yearCreated: 2014,
      creator: "Apple",
      keyFeatures: ["Type safety", "Modern syntax", "iOS development"],
      jobTitles: ["iOS Developer", "Mobile Developer", "Swift Developer"],
      marketInfo: {
        salaryRange: "$75,000 - $160,000",
        experienceLevels: {
          junior: "0-2 years Swift, iOS basics",
          middle: "2-4 years Swift, app architecture",
          senior: "4+ years Swift, App Store experience"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  },
  {
    id: 10,
    emojis: "🤖☕️📱",
    name: "Kotlin",
    options: ["Kotlin", "Java", "Swift", "Dart"],
    hint: "Modern Android development language by JetBrains",
    category: "Mobile",
    difficulty: "Medium",
    details: {
      yearCreated: 2011,
      creator: "JetBrains",
      keyFeatures: ["Java interoperability", "Null safety", "Coroutines"],
      jobTitles: ["Android Developer", "Kotlin Developer", "Mobile Engineer"],
      marketInfo: {
        salaryRange: "$70,000 - $150,000",
        experienceLevels: {
          junior: "0-2 years Kotlin, Android basics",
          middle: "2-4 years Kotlin, app architecture",
          senior: "4+ years Kotlin, Play Store experience"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  },
  {
    id: 11,
    emojis: "🦀⚡️🔒",
    name: "Rust",
    options: ["Rust", "Go", "C++", "Zig"],
    hint: "Memory-safe systems programming language",
    category: "Systems",
    difficulty: "Hard",
    details: {
      yearCreated: 2010,
      creator: "Mozilla",
      keyFeatures: ["Memory safety", "Zero-cost abstractions", "No GC"],
      jobTitles: ["Systems Engineer", "Rust Developer", "Backend Engineer"],
      marketInfo: {
        salaryRange: "$90,000 - $200,000",
        experienceLevels: {
          junior: "1-2 years systems programming",
          middle: "2-4 years Rust, low-level systems",
          senior: "4+ years Rust, system architecture"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Remote"]
      }
    }
  },
  {
    id: 12,
    emojis: "🐹🌐⚡️",
    name: "Go",
    options: ["Go", "Rust", "Python", "Node.js"],
    hint: "Google's fast and simple language",
    category: "Backend",
    difficulty: "Medium",
    details: {
      yearCreated: 2009,
      creator: "Google",
      keyFeatures: ["Simplicity", "Concurrency", "Fast compilation"],
      jobTitles: ["Go Developer", "Backend Engineer", "Systems Engineer"],
      marketInfo: {
        salaryRange: "$80,000 - $180,000",
        experienceLevels: {
          junior: "0-2 years Go, backend basics",
          middle: "2-4 years Go, microservices",
          senior: "4+ years Go, distributed systems"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  },
  {
    id: 13,
    emojis: "🐘🌐💜",
    name: "PHP",
    options: ["Python", "Ruby", "PHP", "Perl"],
    hint: "Popular server-side scripting language",
    category: "Backend",
    difficulty: "Easy",
    details: {
      yearCreated: 1995,
      creator: "Rasmus Lerdorf",
      keyFeatures: ["Web-focused", "Large ecosystem", "Easy deployment"],
      jobTitles: ["PHP Developer", "Backend Developer", "WordPress Developer"],
      marketInfo: {
        salaryRange: "$50,000 - $130,000",
        experienceLevels: {
          junior: "0-2 years PHP, basic web",
          middle: "2-4 years PHP, frameworks",
          senior: "4+ years PHP, architecture"
        },
        marketDemand: "Medium",
        popularRegions: ["Europe", "North America", "Asia"]
      }
    }
  },
  {
    id: 14,
    emojis: "💎❤️💫",
    name: "Ruby",
    options: ["Python", "Ruby", "PHP", "Perl"],
    hint: "Developer happiness focused language",
    category: "Backend",
    difficulty: "Medium",
    details: {
      yearCreated: 1995,
      creator: "Yukihiro Matsumoto",
      keyFeatures: ["Developer happiness", "Dynamic typing", "Rails framework"],
      jobTitles: ["Ruby Developer", "Rails Developer", "Full Stack Developer"],
      marketInfo: {
        salaryRange: "$70,000 - $160,000",
        experienceLevels: {
          junior: "0-2 years Ruby, basic Rails",
          middle: "2-4 years Ruby, full-stack",
          senior: "4+ years Ruby, architecture"
        },
        marketDemand: "Medium",
        popularRegions: ["North America", "Europe", "Remote"]
      }
    }
  },
  {
    id: 15,
    emojis: "🐍📊🔬",
    name: "Python",
    options: ["R", "Julia", "MATLAB", "Python"],
    hint: "Most popular language for data science and AI",
    category: "Data Science",
    difficulty: "Easy",
    details: {
      yearCreated: 1991,
      creator: "Guido van Rossum",
      keyFeatures: ["Readability", "Data science ecosystem", "AI/ML libraries"],
      jobTitles: ["Data Scientist", "Python Developer", "ML Engineer"],
      marketInfo: {
        salaryRange: "$70,000 - $180,000",
        experienceLevels: {
          junior: "0-2 years Python, basic ML",
          middle: "2-4 years Python, ML/AI",
          senior: "4+ years Python, advanced AI"
        },
        marketDemand: "High",
        popularRegions: ["North America", "Europe", "Asia"]
      }
    }
  }
];