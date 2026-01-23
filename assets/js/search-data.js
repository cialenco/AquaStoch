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
        },{id: "nav-references",
          title: "references",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/projects/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Include here various resources",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/resources/";
          },
        },{id: "nav-people",
          title: "people",
          description: "working on the groundwater markets and managment",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AquaStoch/people/";
          },
        },{id: "post-a-stochastic-game-framework-for-groundwater-markets",
        
          title: "A Stochastic Game Framework for Groundwater Markets",
        
        description: "Defining equilibria for competitive groundwater trading",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2025/sifin/";
          
        },
      },{id: "post-test-post",
        
          title: "Test post",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2025/test/";
          
        },
      },{id: "post-a-dynamic-model-of-groundwater-market",
        
          title: "A dynamic model of groundwater market",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2025/model1/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/AquaStoch/blog/2015/math/";
          
        },
      },{id: "news-cialenco-and-ludkovski-win-nsf-grant",
          title: 'Cialenco and Ludkovski win NSF grant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2024_06_01/";
            },},{id: "news-first-paper-published-tada",
          title: 'First paper published :tada:',
          description: "",
          section: "News",},{id: "news-siam-fm25-minisymposium-quot-stochastic-games-for-environmental-challenges-quot",
          title: 'SIAM FM25, minisymposium  &amp;quot;Stochastic Games for Environmental Challenges&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2025_07_06/";
            },},{id: "news-cialenco-featured-on-illinois-tech-research-magazine",
          title: 'Cialenco featured on Illinois Tech Research Magazine',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AquaStoch/news/2025_12_01/";
            },},{id: "projects-rl",
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
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/AquaStoch/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/AquaStoch/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
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
