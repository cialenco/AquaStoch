// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/AquaStoch/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/blog/";
          },
        },{id: "nav-people",
          title: "people",
          description: "working on the groundwater markets and managment",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/people/";
          },
        },{id: "nav-references",
          title: "references",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/publications/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Curated resources by category",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/resources/";
          },
        },{id: "post-chino-basin-water-rights-an-empirical-overview",
        
          title: "Chino Basin Water Rights - An Empirical Overview",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2026/chino-basin/";
          
        },
      },{id: "post-rl-for-groundwater-markets",
        
          title: "RL for groundwater markets",
        
        description: "reinforcment learning approach to stochastic markets",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2026/RL/";
          
        },
      },{id: "post-hidden-markov-precipitation-model",
        
          title: "Hidden Markov Precipitation Model",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2026/hmm/";
          
        },
      },{id: "post-pro-rata-for-groundwater-market",
        
          title: "Pro-rata for groundwater market",
        
        description: "a pro-rata appproach to groundwater market imbalance",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2026/pro-rata/";
          
        },
      },{id: "post-a-stochastic-game-framework-for-groundwater-markets",
        
          title: "A Stochastic Game Framework for Groundwater Markets",
        
        description: "Defining equilibria for competitive groundwater trading",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2025/sifin/";
          
        },
      },{id: "news-cialenco-and-ludkovski-awarded-nsf-grant-on-management-of-water-rights",
          title: 'Cialenco and Ludkovski awarded NSF grant on Management of Water Rights',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2024_06_01/";
            },},{id: "news-phd-student-m-kralis-wins-illinois-tech-poster-competition",
          title: 'PhD student M. Kralis wins 🥇 Illinois Tech poster competition',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2025_04_01/";
            },},{id: "news-a-groundwater-market-model-by-cialenco-and-ludkovski-published-in-sifin-tada",
          title: 'A groundwater market model, by Cialenco and Ludkovski published in SIFIN  :tada:',
          description: "",
          section: "News",},{id: "news-ludkovski-delivers-an-invited-talk-on-groundwater-markets-at-the-byrne-b2a2-back-to-ann-arbor-conference-on-stochastic-analysis-in-finance-and-insurance-at-university-of-michigan",
          title: 'Ludkovski delivers an invited talk on “Groundwater Markets” at the Byrne B2A2(Back to...',
          description: "",
          section: "News",},{id: "news-siam-fm25-minisymposium-quot-stochastic-games-for-environmental-challenges-quot",
          title: 'SIAM FM25, minisymposium  &amp;quot;Stochastic Games for Environmental Challenges&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2025_07_06/";
            },},{id: "news-at-rio-2025-cialenco-delivers-an-invited-talk-on-dynamic-groundwater-rights",
          title: 'At RiO 2025, Cialenco delivers an invited talk on “Dynamic Groundwater Rights”.',
          description: "",
          section: "News",},{id: "news-cialenco-featured-on-illinois-tech-research-magazine",
          title: 'Cialenco featured on Illinois Tech Research Magazine',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2025_12_01/";
            },},{id: "news-cialenco-delivers-a-collqoium-talk-on-dynamic-groundwater-rights-markets-at-nyu-tandon-peter-carr-seminar-series",
          title: 'Cialenco delivers a collqoium talk on “Dynamic Groundwater Rights Markets” at NYU Tandon...',
          description: "",
          section: "News",},{id: "projects-rl",
          title: 'RL',
          description: "Reinforcement learning for groundwater market",
          section: "Projects",handler: () => {
              window.location.href = "/AquaStoch/projects/computations1/";
            },},{id: "projects-markov-chain-calibration",
          title: 'Markov Chain Calibration',
          description: "description",
          section: "Projects",handler: () => {
              window.location.href = "/AquaStoch/projects/data1/";
            },},{id: "projects-structured-model",
          title: 'Structured Model',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/AquaStoch/projects/model1/";
            },},{id: "projects-pro-rata-model",
          title: 'Pro-rata Model',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/AquaStoch/projects/prorata/";
            },},{id: "projects-template",
          title: 'template',
          description: "description",
          section: "Projects",handler: () => {
              window.location.href = "/AquaStoch/projects/templatel/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
