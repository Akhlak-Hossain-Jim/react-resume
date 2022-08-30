// iconType for headerLinks can only be:
//      "web"
//      "call"
//      "mail"
//      "github"
//      "linkedin"
//default is web

// for work experience logo put a link or put your image on `/public/images/` folder and put a path here

const DATA = {
  background: "",
  pageColor: "",
  textColor: "",
  linkColor: "",
  name: "Akhlak Hossain",
  about:
    "A Frontend Developer who loves to code, loves to debate, loves to explore, and just landed on opensea.", // it wont be visible on the site
  headerLinks: [
    {
      text: "ahjim.com",
      url: "https://ahjim.com",
      iconType: "web",
    },
    {
      text: "aklajim@yahoo.com",
      url: "mailto:aklajim@yahoo.com",
      iconType: "mail",
    },
    {
      text: "8801835852526",
      url: "tel:+8801835852526",
      iconType: "call",
    },
    {
      text: "Akhlak-Hossain",
      url: "https://github.com/Akhlak-Hossain-Jim",
      iconType: "github",
    },
    {
      text: "Akhlak",
      url: "https://www.linkedin.com/in/akhlakhossainjim/",
      iconType: "linkedin",
    },
  ],
  WorkExperience: [
    {
      logo: "/images/assetmantle.webp",
      name: "AssetMantle.one",
      location: "Remote",
      timePeriod: "Feb 2022-Present",
      designation: "UI Developer",
      description: [
        "Collaborated with 2-3 members UI/UX team for improvement of UI and with 4-6 member backend team to oversee seamless backend integration",
        "Made responsive user friendly NFT Marketplace web apps for a million user from front",
        "Created reusable components, company standers",
      ],
      links: [
        { url: "https:assetmantle.one", text: "landing site" },
        {
          url: "https:wallet.assetmantle.one",
          text: "Wallet",
        },
        {
          url: "https://internft.github.io/",
          text: "interNFT site",
        },
        {
          url: "https://asguard.network/",
          text: "AsGuard",
        },
        {
          url: "https://airdrop.assetmantle.one/",
          text: "Airdrop",
        },
      ],
    },
    {
      logo: "/images/alphapromed.webp",
      name: "AlphaProMed",
      location: "Remote",
      timePeriod: "Jun 2021-Jan 2022",
      designation: "Frontend Developer",
      description: [
        "Optimized applications for maximizing the speed of 18%",
        "Collaborated with 3-4 member UI/UX team to improve the usability and with 2-4 member cross-functional team to oversee seamless backend integration",
      ],
    },
    {
      logo: "/images/woman.webp",
      name: "Woman Opportunities",
      location: "Dhaka, Bangladesh",
      timePeriod: "Feb 2021 - Jan 2022",
      designation: "Frontend Developer",
      description: [
        "Generated 80% user visits by building a modern prototype for both user-friendly, Responsive pixel  perfect, and easy to use",
        "Increased 90% of user interaction by writing cleanly reusable with modern JavaScript library React.js, Styled-Components",
      ],
    },
    {
      logo: "/images/aamartaka.webp",
      name: "Aamartaka.com",
      location: "Dhaka, Bangladesh",
      timePeriod: "Jun 2021 - Aug 2022",
      designation: "Frontend Developer",
      description: [
        "Generated 20% user visits by building a modern prototype for both user-friendly, Responsive pixel perfect, and easy to use ",
        "Increased 40% of user interaction by writing cleanly reusable with modern JavaScript library React.js,  Next.js framework, and integrated APIs. Decreased load time by using SCSS.",
      ],
    },
    {
      logo: "/images/parthibassociates.webp",
      name: "Parthib Associates",
      location: "Dhaka, Bangladesh",
      timePeriod: "Nov 2020 - Dec 2020",
      designation: "Frontend Developer",
      description: [
        "Created their landing site using modern technologies like React, SCSS and optimized for best performance",
      ],
    },
    {
      logo: "/images/shuvrojaya.webp",
      name: "Shuvro Jaya",
      location: "Dhaka, Bangladesh",
      timePeriod: "Oct 2019 - Oct 2020",
      designation: "Tech Lead",
      description: [
        "Contributed to various projects like invoice app, e-commerce, inventory management etc and sector like marketing strategies",
      ],
    },
  ],
  Educations: [
    {
      degreeEarned: "Higher Secondary School Certificate",
      institute: "Dhaka Commerce College",
      graduationDate: "December 2021",
      details: "",
      results: [
        {
          title: "Grade Point Average",
          grade: "77.28%",
        },
      ],
    },
    {
      degreeEarned: "Secondary School Certificate",
      institute: "Govt. Mohammedpur Model School and College",
      graduationDate: "April 2019",
      details: "",
      results: [
        {
          title: "Grade Point Average",
          grade: "69.28%",
        },
      ],
    },
  ],
  Achievements: [
    {
      title: "Frontend mentor weekly 4th",
      url: "https://www.frontendmentor.io/profile/Akhlak-Hossain-Jim",
      date: "2022",
    },
    {
      title: "CSSBattle 381",
      url: "https://cssbattle.dev/player/ahjim",
      date: "2022",
    },
    {
      title: "3rd GSSDC National 2020",
      url: "",
      date: "2020",
    },
    {
      title: "JUDO National 2020 Champion",
      url: "",
      date: "2020",
    },
    {
      title: "DCDS 2019 Semi Finalist",
      url: "",
      date: "2019",
    },
  ],
  Skills: [
    {
      title: "3+ years experience & shipped products",
      skillSet:
        "• React.js • HTML • CSS • Sass/scss • JSON • Git • Styled-components • i18 • Bootstrap • Tailwind • MUI • JavaScript • Next.js • Axios • Adobe XD • Figma • Heroku • Firebase • JAMstack • Linux",
    },
    {
      title: "Some experience & comfortable with",
      skillSet: "• Vue.js • PS • AI • Python • Java • C# • Numpy • Pandas",
    },
  ],
  ClubActivity: [
    {
      name: "DCCDS",
      url: "https://www.facebook.com/InfoDCCDS",
      period: "2019-21",
      work: "Debating in Both Asian and British Parliamentary in Bangla & English. • Helping junior debaters to grow in their debate careers.",
    },
    {
      name: "DAGMC",
      url: "https://www.facebook.com/DebatingAssociationofGovtModelCollege",
      period: "2017-19",
      work: "Debating in Both Asian and British Parliamentary in Bangla & English. • Helping junior debaters to grow in their debate careers.",
    },
  ],
  Projects: [
    {
      name: "Web OS",
      url: "https://ubuntu.ahjim.com",
      using: "Reactjs, Styled-Components",
      date: "2022",
      details: [
        "Created a creative portfolio that have some of preview functionality of an OS",
      ],
    },
    {
      name: "Open Islamic app",
      url: "https://github.com/OpenIslamicApp/prayer-time",
      using: "Reactjs, Styled-Components",
      date: "2022",
      details: [
        "Created to build some open source app for a targeted community",
      ],
    },
    {
      name: "Web Book app",
      url: "https://book-the-waves-virginia-woolf.web.app/",
      using: "Reactjs, Styled-Components & firebase",
      date: "2021",
      details: [
        "The waves by Virginia Woolf is a public domain book, Web app Created by me with some great features. Like:Changing theme, Remembering Last reading, Text size adjustment, Reading offline",
      ],
    },
  ],
};
export default DATA;
