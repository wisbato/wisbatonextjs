export type Card = {
  id: number;
  title: string;
  description: string;
};

export type Summary = {
  id: number;
  title: string;
  description: string[];
};

export type Service = {
  id: number;
  icon?: string;
  slug: string;
  title: string;
  peopleTitle: string;
  description: string;
  image: string;
  style: { backgroundColor: string };
  width: string;
  metaTitle: string;
  metaDescription: string;

  context: {
    mainTitle: string;
    subTitle: string;
    content: string;
  };

  workingProcess: Array<{
    title: string;
    image: string;
    alt: string;
    list: Array<{
      id: number;
      title: string;
      content: string;
    }>;
  }>;

  outcomes: {
    id: number;
    title: string;
    description: string[];
    servicePlatform: boolean;
    subContent: {
      title: string;
      description: string[];
      advantages: {
        id: number;
        title: string;
        description: string;
        points: {
          id: number;
          title: string;
          description: string;
        }[];
      };
      disAdvantages: {
        id: number;
        title: string;
        description: string;
        points: {
          id: number;
          title: string;
          description: string;
        }[];
      };
    };
    question: {
      title: string;
      cards: Card[];
    };
    summery: Summary;
  };

  FAQData: Array<{
    id: number;
    title: string;
    content: string;
  }>;
};

export const outcomes = [
  {
    id: 1,
    title: "Best Web Development <br/> company in Calicut",
    description: [
      `As the best web development company in Calicut, Wisbato is well aware of  <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" >why you need a professional website</a>.for your business. Thousands of business organizations are there in Calicut, yet only 45% have their website. Such a clear difference shows how important it is to have a strong online presence.Research study indicates that websites convince more customers as easy access to information and services is facilitated within websites. A business website creates trust as the website is of a proper design among customers thus turning out to have some nice return sales and stronger customer loyalty. Organizations whose operations are not online face a serious struggle for customers and their loyalty business in Calicut. Traditional methods usage confines them into low reaches, delayed time response, and less professional image.

`,
      `At Wisbato, we are close to providing businesses with the opportunity to overcome the challenges arising from such difficulties by developing suitable web development projects for Kozhikode business owners. We enable the companies to provide access all the time, improve customer interactions, and even enhance their brand image by designing SEO friendly <a href="https://www.wisbato.com/blogs/how-to-build-a-professional-landing-page-on-your-website-best-practices-and-example" target="_blank" >professional landing pages</a> and websites. Companies that have a website are allowed an opportunity to engage customers as much as 80% more, and all this really makes the best investment in the future.
`,
      // "Our web development services include defining your purpose and goals, all types of website design, Front-end development, back-end development, content management system (CMS), custom software development, testing & launching, maintenance and updates.",
      `The Wisbato team uses high-end web development tools like   <a href="https://react.dev/" target="_blank" > ReactJS,</a> <a href="https://angular.dev/" target="_blank">Angular,</a><a href="https://wordpress.com/" target="_blank"> Wordpress</a>
 VueJS, Django, Svelte, jQuery to develop the most responsive websites for every business. We provide web development services are Front-end development, back-end development, content management system (CMS), custom software development, testing & launching.`,

      `Today's 5.45 billion people are engaged in the digital world so a website with your digital presence is a powerful tool for your business. Wisbato, the best web development company in Calicut, is here to help to create websites with<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > affordable prices </a>and assure that every business can get ahead and grow through a strong online presence that satisfies its customers.`,
    ],
    servicePlatform: true,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `At Wisbato, we specialize in delivering exceptional websites in Calicut. We offer solutions for every business. Whether it is an e-commerce application, personal portfolio, blog writing, shopping or a business website, we construct websites that are not only pretty functional but also easy to use. Our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_black" > process of website development</a>, includes understanding your specific needs and goals, coming up with good designs, developing with all the  <a href="https://www.wisbato.com/blogs/top-5-web-development-trends-in-2024" target="_black" >latest trends</a>, and tools with comprehensive support. We make every single website in a way that it works out perfectly, performs and engages better with customers. Whether it is an online store or a business site, we build the best websites in Calicut customers. Contact Wisbato for a web development project with an affordable price. Check out our <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">web development costs.</a>
`,
      ],
      advantages: {
        id: 1,
        title: "The advantage of a Website",
        description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Online Presence",
            // description:
            // "A website makes your business look professional and credible. It's the first step towards establishing a strong online presence and building trust with potential customers",
          },
          {
            id: 2,
            title: "Enhanced Trustworthiness",
            // description:
            //   "A website improves your business in online searches, making it easier for potential customers to find you anywhere",
          },
          {
            id: 3,
            title: "24/7 Accessibility",
            // description:
            //   "A professional website with clear information and high-quality design portrays a positive and trustworthy image & brand value",
          },
          {
            id: 4,
            title: "Expanded Customer Reach",
            // description:
            //   "Your website acts as a constantly accessible brochure, showcasing your services, products, and brand story",
          },
          {
            id: 5,
            title: "Improved Marketing Opportunities",
            // description:
            //   "A website allows for two-way communication with customers through contact forms, live chats, or social media integration",
          },
          // {
          //   id: 6,
          //   title: "Data & Analytics",
          //   description:
          //     "Modern websites provide valuable data on user behavior and website traffic, allowing you to refine your online marketing strategies",
          // },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "The Disadvantage of Being Offline",
        description:
          "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Limited Visibility",
            // description:
            //   "In 2024, over 4.6 billion people will use the internet globally. Without a website, you're invisible to this vast pool of potential customers who research businesses online before making buying decisions",
          },
          {
            id: 2,
            title: "Decreased Credibility ",
            // description:
            //   "A professional website establishes legitimacy and builds trust with potential clients. Without one, you risk appearing outdated or even unprofessional",
          },
          {
            id: 3,
            title: "Missed Sales Opportunities",
            // description:
            //   "A website serves as your 24/7 salesperson, providing information and showcasing your services even when you're not actively working. It allows customers to learn about your offerings, contact you easily, and potentially convert into paying clients",
          },
          {
            id: 4,
            title: "Limited Marketing Reach",
            // description:
            //   "Without a website, your marketing options are significantly limited. You missed the audience through search engines, social media, and online advertising.",
          },
          {
            id: 5,
            title: "Poor Customer Accessibility",
            // description:
            //   "Customers today expect to find detailed information about your products, services, and company online. Without a website you can provide incomplete information only.",
          },
        ],
      },
    },
    question: {
      title: "Why Choose WISBATO For Web Development?",
      cards: [
        {
          id: 1,
          title: "Experience & <br/> Expertise",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry",
        },
        {
          id: 1,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
        },
        {
          id: 1,
          title: "Proven <br/> Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Hire Expert Web Developers to Support Your Business",
      description: [
        `An excellent web developing company is a key to the success of your business. We completed over 50 successful web projects at Wisbato that created exceptional digital presence for businesses. Our team of professional web developers offers all kinds of unique, customized E-commerce and professional-looking business websites as per your needs. Wisbato, the best web development company in Calicut ensures that your site is functional and engaging. Check out some of <a href="https://www.wisbato.com/works" target="_black" > our web development previous work </a>case studies to see how we can take your business to the next level through a professional, custom-built website designed for success. And also check out our happy <a href="https://www.google.com/maps/contrib/114938746348114958075/place/ChIJpxgvczJfpjsRzd2kcmKEw_I/@11.3890999,75.8654921,10z/data=!4m6!1m5!8m4!1e1!2s114938746348114958075!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" target="_black" > client words.</a> `,
      ],
    },
  },
  {
    id: 2,
    title: "Leading E-commerce Web Development Company in Calicut.",
    description: [
      `Our team specializes in delivering creative e-commerce solutions that enable businesses to arrive in the marketplace. Being the leading e-commerce web development company in Calicut,We aim to create best e-commerce websites for <a href="https://en.wikipedia.org/wiki/Kozhikode" target="_blank">Kozhikode</a>  business owners and that help to increase sales, online visibility and improve the user experience.

`,
      `Our ecommerce web developers and designers work together to deliver customized, sector-specific e-commerce platforms according to your business's needs. We service all businesses-from start-ups to well-established enterprises-by providing responsive, user-friendly, feature rich and <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > cost effective e- commerce websites</a>`,
      "At Wisbato, we understand how challenging the e-commerce world is today and how important it is for your business to stay ahead in a highly competitive market. We use the integration of advanced features such as secure gateways for payments e.g.(PayPal, Amazon Pay, Stripe etc…) product management systems, inventory tracking, and SEO optimization so that it ranks high on the search engines and converts best.",
      `Are you looking for a new online store or upgrading an existing one? Let <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a>  be your partner for designing and developing high-performing, scalable e-commerce websites in Calicut, Kerala that meet your business needs. We can help you grow your business in this ever-changing world of online commerce.
 `,
    ],
    servicePlatform: false,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `We believe that every business is unique, and so are the e-commerce needs of this business. Our team knows <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" > why you need a website</a>  in your e-commerce business, and we develop best solutions to challenge specific goals and problems regarding each client. From small to big <a href="https://www.wisbato.com/works" target="_blank" > website projects </a>,we deliver customized e-commerce platforms, ensuring they are scalable, functional, and thereby able to be supported for growth. With our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_blank">professional way of website development </a>  your business gets the right attention and it makes your business successful in the digital world.  `,
      ],
      advantages: {
        id: 1,
        // title: "Key advantages of having an e-commerce website",
        title: "Advantages of having an e-commerce website",
        description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Global Reach",
            // description:
            //   "An e-commerce website allows you to reach customers beyond your local area, expanding your market to a global scale. and Your store is open 24/7, enabling customers to browse and purchase products at any time, increasing sales opportunities.",
          },
          {
            id: 2,
            title: "Cost Efficiency",
            // description:
            //   "Operating an e-commerce store can be more cost-effective than running a physical store, with savings on rent, utilities, and staffing. and Digital marketing strategies like SEO, social media, and email campaigns can be more cost-effective than traditional advertising.",
          },
          {
            id: 3,
            title: "Enhanced Customer Insights",
            // description:
            //   "Customers can shop from the comfort of their homes, which can lead to increased customer satisfaction and loyalty.",
          },
          {
            id: 4,
            title: "Increased Sales Opportunities",
            // description:
            //   "E-commerce websites provide valuable data on customer behavior, preferences, and purchase patterns, helping you make informed business decisions. You can easily track the performance of your website, marketing campaigns, and sales, allowing for continuous improvement.",
          },
          {
            id: 5,
            title: "24/7 Accessibility",
            // description:
            //   "Scaling an e-commerce business to handle more products, customers, and markets is often simpler and more cost-effective than expanding a physical store.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantages of lacking an e-commerce website",
        description:
          "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Limited Market Reach",
            // description:
            //   "Without an e-commerce website, your customer base is restricted to your physical location, limiting your market reach. A significant number of consumers prefer shopping online for convenience and variety. Without an online presence, you miss out on this growing market segment.",
          },
          {
            id: 2,
            title: "Missed Revenue Opportunities",
            // description:
            //   "An e-commerce website allows customers to shop anytime, even outside of regular business hours. Without it, you lose potential sales that could occur during non-operational hours.",
          },
          {
            id: 3,
            title: "Higher Operational Costs",
            // description:
            //   "In today’s digital world, consumers expect businesses to have an online presence. Not having an e-commerce website can make your business appear outdated and less competitive. Competitors with e-commerce capabilities can offer more convenience and better accessibility to customers, potentially capturing your market share.",
          },
          {
            id: 4,
            title: "Loss of Competitive Advantage            ",
            // description:
            //   "A professional website enhances your business's credibility and trustworthiness. Without one, potential customers may question your legitimacy and professionalism.",
          },
          {
            id: 5,
            title: "Lack of Customer Insights",
            // description:
            //   "E-commerce platforms often include tools for automating sales processes, inventory management, and customer service. Without these tools, your operations may be less efficient and more labor-intensive.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for e-commerce web development?",
      cards: [
        {
          id: 1,
          title: "Experience & <br/> Expertise",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
        },
        {
          id: 1,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
        },
        {
          id: 1,
          title: "Proven <br/> Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals",
        },
      ],
    },
    summery: {
      id: 1,
      title: "We make e-commerce easy for you",
      description: [
        `Over 40 successful <a href="https://www.wisbato.com/works/wiscart" target="_blank">e-commerce projects</a>  have marked the success story of Wisbato, which has enabled the company to position itself as a leading ecommerce web design and development company in Calicut. Our team is aiming at giving customized, user-friendly, and sales-driven ecommerce websites, so that they succeed in the realms of digital markets. We take pride in being able to meet each customer’s unique needs with personalized solutions that match their expectations. And Choose Wisbato and find a true partner who can commit and drive online success for your business with innovative design and strategy for ecommerce development (<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">Check our web development cost</a>). Let's make your visions bloom into a thriving e-commerce platform. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>.`,
      ],
    },
  },
  {
    id: 3,
    title:
      "Choose the No.1 IT company in Calicut for all IT support and solutions.",
    description: [
      "We pride ourselves as being the no.1 IT support and solution company in Calicut, which provides all-rounded technology services aimed at making businesses flourish in the fast-paced and rapidly changing today's digital environment. Innovation, efficiency, and customer satisfaction and our end-to-end solutions for the implementation of IT can support any type of business",
      "We deliver infrastructure management, network security, data backup solutions, and cloud services to ensure your systems run smoothly and securely. We help startups set up their IT platform or support established organizations in the improvement of performance and security capabilities. Our experienced team is ready to provide tailored solutions that can meet the specific goals you may have for your organization.",
      "Having been a leading IT support and solution provider in Calicut, we take pride in ensuring round-the-clock support to determine as many technical challenges as one may face. From troubleshooting software-related issues to optimizing hardware systems, prompt and reliable services ensure minimal downtime and uninterrupted operations.",
      `We at <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>  believe in long-term relations with our clients, thus providing proactive solutions not just to current issues but also problems expected to arise in the future. Trust us as your IT partner in empowering your business today with cutting-edge technology and superior support within the highly competitive market.
`,
    ],
    servicePlatform: true,
    subContent: {
      title: "Unique solution for every business",
      description: [
        "We understand that every business has unique challenges, and that is the reason why we offer specific solutions tailored to the needs of each client. Whether you are a small start-up or a well-established enterprise, our team takes the time to understand your goals, your industry needs, and your operational challenges. That is how we create customized IT strategies that can really boost productivity, enhance security, and ease operations for our clients.",
        `From advanced <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank">cloud solutions </a> to smooth <a href="https://en.wikipedia.org/wiki/Network_management" target="_blank">network management</a>,our aim here is to deliver services that are efficient and scalable, so your business can expand with minimal effort. We aim to empower you with the right technology and support to get you focused on running your business successfully. Wisbato provides IT services beyond just mere implementation; it's uniquely personalized to meet your success factor and new innovation.`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of IT support",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Enhanced Security",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Minimized Downtime",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Cost Efficiency",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Access to Expertise",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Improved Customer Service",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "The Drawbacks of avoiding IT support",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Greater Exposure to Cyber Threats",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Extended Downtime",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Higher Operational Costs",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Limited Access to Expertise",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Restricted Business Expansion and Adaptability",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for your IT support?",
      cards: [
        {
          id: 1,
          title: "Personalized <br/> Solutions",
          description:
            "Wisbato offers customized IT support customized to your business's unique needs.",
        },
        {
          id: 2,
          title: "Modern <br/> Technology",
          description:
            "Wisbato stays ahead of the curve by incorporating the latest technological advancements into our services.",
        },
        {
          id: 3,
          title: "Excellent Customer <br/> Services",
          description:
            "At Wisbato, customer satisfaction is our top priority. Our dedicated support team is always ready to assist you.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Get your IT issues resolved quickly",
      description: [
        `Wisbato supports all IT-related problems and their solutions. If you run a firm, you need reliable IT support to ensure smooth operations. From software installation to hardware; configuration of network, cyber security system, and Wisbato also covers  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a>, <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce website development</a> and all IT support . Our team of professionals can get those issues related to your IT solved without taking too much of your time and keep your business running. Choose Wisbato, the no.1 IT support and solution company in Calicut to fulfill all your IT needs. We help your business grow today. Contact us now.
`,
      ],
    },
  },
  {
    id: 4,
    title: "Mobile App Development Company In Calicut.",
    description: [
      `Wisbato is an experienced mobile app development company in Calicut, Kerala. We create innovative and customized mobile applications for your business that help you market your products online. We specialize in creating unique <a href="https://www.wisbato.com/blogs/android-mobile-app-building-a-step-by-step-guide" target="_blank"> Android</a> , iOS, and Flutter apps that best fit your business goals.`,
      `<span>We specialize in Android app development, so we can build powerful, user-friendly and <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >cost effective mobile apps</a> for the ever growing number of users on this platform. The other wing of our technical team focuses on creating smooth and highly secure applications that offer exceptional</span>`,
      "usability with all  of  Apple’s devices. Additionally, we have mastered Flutter and it can be used to develop cross-platform applications for both iOS and Android platforms, thus reaching more users while maintaining uniform results.",
      `<span>We keep ourselves informed about recent developments in technology hence bring expert solutions to our clients. Our approach to mobile application design is open, effective and directed at meeting your business objectives. and we know <a href="https://www.wisbato.com/blogs/why-people-uninstall-your-mobile-apps" target="_blank" >why users uninstall apps</a>, so we will leverage new trends and excellent UX. Wisbato, which is one of the leading Mobile App Development Company in Calicut where the best mobile solutions drive outcomes. Get ahead today with Wisbato for a triumph in your business dreams.</span>`,
    ],
    servicePlatform: true,
    subContent: {
      title: "Unique ideas for every business",
      description: [
        "Statista projects that the global number of mobile users will hit 7.49 billion by 2025. They all are using apps on these devices. Mobile phones are filled with different categories of apps, such as social media apps, e-commerce apps, educational apps, communication apps, gaming apps, music apps, etc. So creating an app for your business is a great idea and this decision will lead to more customer engagement for your business. Now you need a professional team of mobile app developers to fulfill your business needs.",
        `<span>Wisbato, which is ranked among the best mobile app development companies in Calicut, identifies your desires and the needs of your customers. Through our efficient <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" > app development process </a>, we come up with a design that resonates with your brand perfectly. And we will use the latest <a href="https://www.wisbato.com/blogs/engage-your-audience-with-push-notifications" target="_blank" > push notification</a> technology on your app development projects That increase 90% of users' engagement. Let Wisbato design the best mobile app with an <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >affordable price</a> that propels your business forward.</span>`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of owning a mobile app",
        points: [
          {
            id: 1,
            title: "Customer Engagement",
            // description:
            //   "A mobile app allows you to reach the customer directly. They can get it at their convenience at any time of the day and from any part of the globe. Instant communication, customer loyalty, and notifications are among the digital advancements that help fast-growing businesses through customer relationships.",
          },
          {
            id: 2,
            title: "Enhanced Brand Experience",
            // description:
            //   "Mobile apps are perhaps the best way to communicate your brand personality on a relatively low budget. It offers a unique and easily manageable interface that depicts the company’s brand qualities and fosters customer communication.",
          },
          {
            id: 3,
            title: "Boost Sales & Revenue",
            // description:
            //   "Mobile apps are the best medium for promotions, special offers and campaigns.  Reach your customers directly with the right message at the right time, driving sales and increasing revenue streams.",
          },
          {
            id: 4,
            title: "Data-Based Insights",
            // description:
            //   "Mobile apps offer important insights regarding the consumers, user behavior, preferences and their tendency for purchasing. Such data is useful in segmenting the marketing targets, fine-tuning application features and, in general, you can meet your customers’ needs ideally.",
          },
          {
            id: 5,
            title: "Location-Based Advantages",
            // description:
            //   "Mobile apps have the use of GPS technology to facilitate location-based information services. This feature enables customers in your locality to receive highly relevant information from you about your products and services.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantages of skipping the mobile app",
        points: [
          {
            id: 1,
            title: "Limited Brand Visibility",
            // description:
            //   "Consumers are used to having everything right at their fingertips. The inability to have a mobile site can give the overall impression that your business is not trendy or worse, inaccessible, resulting in the customers going to your competitors who are mobile-friendly. If you don’t have a proper mobile app that meets customer’s needs, they will also uninstall the app.",
          },
          {
            id: 2,
            title: "Loss of Sales Opportunities",
            // description:
            //   "Mobile applications are silent partners in marketing to take place. if you are not mobile-friendly, It just means many potential consumers are left outside of the loop and you are unable to send them offers and special deals at a time when you know they may need it.",
          },
          {
            id: 3,
            title: "Data-Blind Decision Making",
            // description:
            //   "Smartphone applications give important information on the users’ behavior and choices. Lacking this specific data, you’re basically operating in a state of near-blindness. Marketing also becomes a challenge to measure your customer base, to decide the right marketing strategies to employ and be in a position to meet all the customer needs.",
          },
          {
            id: 4,
            title: "Falling Behind the Competition",
            // description:
            //   "As it has been observed a number of companies are already using mobile apps to serve their customers and gain advantage over others. If you don’t invest in the mobile apps, you will fall out of the competition scene, unable to cope with the businesses.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for app development?",
      cards: [
        {
          id: 1,
          title: "Expertise and <br/> Innovation",
          description:
            "WISBATO boasts a team of highly skilled mobile app developers who are well-versed in the latest technologies and trends.",
        },
        {
          id: 2,
          title: "Customized <br/> Solutions",
          description:
            "At WISBATO, the focus is on creating customized mobile applications that meet the specific needs and goals of your business.",
        },
        {
          id: 3,
          title: "Comprehensive <br/> Support",
          description:
            "WISBATO provides extensive support and maintenance services post-development. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Develop unique apps for your business",
      description: [
        `As the mobile app development company in Calicut, we do not hesitate to transform what you have conceived into user-friendly and innovative applications. Our team of professionals is committed to producing quality apps with a built-in ability to improve how you run your business and engage your customers. <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a> will make sure there are no difficulties from idea to implementation. If you trust Wisbato company, we will turn your belief into reality using state-of-the-art technology and stylish approaches. Partner with us and experience the best in app development team in Calicut.`,
      ],
    },
  },
  {
    id: 5,
    title: "Leading SEO Company In Calicut",
    description: [
      `In today’s highly competitive digital world, having a strong online presence is no longer optional, it’s essential for business growth. At<a href="https://www.wisbato.com/"target="_blank"> Wisbato</a>, we understand the importance of visibility in the online marketplace. If you <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">build a website</a> but it does not appear first in the search list, it also affects your brand badly. If your <a href="https://en.wikipedia.org/wiki/Keyword" target="_blank">keywords</a> are listed last, the customer may think your brand is not trustworthy or not an established enterprise. Our expert team focuses on best SEO strategies that help businesses grow organically and achieve long-lasting results.

`,
      `A good website is essential for effective SEO. First, focus on  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> building a professional website</a>,then implement SEO strategies. This approach will help you achieve better results. At Wisbato, we don’t just focus on rankings; we aim for sustainable growth. Our method integrates on-page optimization content, link building and technical SEO to ensure the website will not only be in the first rank of the search engine result but also continue to stay there. We work with businesses from a startup to an established business and match our strategy accordingly to suit your approach.
`,
      "At Wisbato, we specialize in SEO, focusing on-page SEO, off-page SEO, local SEO, and technical SEO to ensure comprehensive optimization of your website. Our expert team creates website content based on the latest EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) factors to build trust with visitors and improve search rankings. We implement best SEO strategies, such as building relevant, high-quality backlinks, focusing on customer search intent, including case studies and testimonials, AI-driven SEO, voice search optimization, and mobile-first indexing etc... Our SEO specialists stay updated with Google algorithm changes and adapt strategies accordingly to ensure top performance. Choose Wisbato, the leading SEO company in Calicut, and let your online presence bloom into an instrument of growth and success.",
    ],
    servicePlatform: false,
    subContent: {
      title: "Personalized SEO Strategies for Long-Term Growth",
      description: [
        `Being the most success-oriented <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO company in Calicut</a>, we build customized solutions to a potential best. We, at the best SEO agency in Calicut, closely work with you to develop strategies that enhance your online presence.  Whether you want to increase your local rankings or national exposure, we provide you with tailored SEO services to fuel growth and long-term success. From keyword optimization to content strategies, we offer customized solutions for running a mile ahead in today's competitive digital space.Trust Wisbato for excellent SEO solutions that catapult your brand and maximize your growth potential.
`,
      ],
      advantages: {
        id: 1,
        title: "Benefits of implementing SEO for your website",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased visibility on search engines",
            // description:
            //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
          },
          {
            id: 2,
            title: "Improved user experience",
            // description:
            //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
          },
          {
            id: 3,
            title: "Cost-effective marketing strategy",
            // description:
            //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
          },
          {
            id: 4,
            title: "Enhanced credibility and trust",
            // description:
            //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
          },
          {
            id: 5,
            title: "Long-term traffic and business growth",
            // description:
            //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "What Happens When You Don't Use SEO",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Lower visibility on search engines",
            // description:
            //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
          },
          {
            id: 2,
            title: "Missed opportunities for customer engagement",
            // description:
            //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
          },
          {
            id: 3,
            title: "Ineffective and costly marketing efforts",
            // description:
            //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
          },
          {
            id: 4,
            title: "Poor user experience on the website",
            // description:
            //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
          },
          {
            id: 5,
            title: "Limited brand credibility and trust",
            // description:
            //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for SEO services?",
      cards: [
        {
          id: 1,
          title: "EXPERIENCE &<br/> EXPERTISE",
          description:
            "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
        },
        {
          id: 2,
          title: "Comprehensive <br/> Services",
          description:
            "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof.",
        },
        {
          id: 3,
          title: "Proven Result",
          description:
            "Wisbato guaranteed the best result on our projects that align with your unique goals.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Boost Your Brand Credibility with Effective SEO",
      description: [
        `Hiring the right SEO company for your Calicut business is vital to growing and succeeding in today's digital landscape.Here, we provide SEO services for your <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> website</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce platforms</a>,<a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile apps</a> and other types of platforms. We develop effective SEO strategies to help you achieve optimal results. The right team of <a href="https://www.linkedin.com/in/ansif-pv-43ba35241/" target="_blank"> SEO experts</a> can work together with strategies customized to increase your website's visibility, drive organic traffic, and potential customers. With expertise in search engine algorithms and best practices, we can optimize content and structure for a problem-free user experience. Wisbato, the leading SEO company in Calicut offers maintenance and review along with adjustments to ensure that your website is not left behind. Spending some money on our professional SEO services will position your business for long-term success and higher credibility in the online marketplace. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank"> client words</a>.`,
      ],
    },
  },
  {
    id: 6,
    title: "Leading Branding Agency in Calicut",
    description: [
      `Effective <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">branding </a> will be more desired for a business as today's competitive marketplace demands a market presence that lasts. Being the leading branding agency in  Calicut, our primary area of specialization remains in delivering great brand values that make your target audience react to it and make your business stand up from the rest.


`,
      `
Our comprehensive branding capabilities start with an intensive consultation and discovery process with you to learn about your vision, mission, and values. We help you closely develop a specific brand strategy that ensures all of your branding efforts will place you on the right track, in the right direction. From creating memorable logos and taglines to designing cohesive visuals,  <a href="https://www.wisbato.com/team" target="_blank">our team</a> of experienced designers and strategists ensures that your brand tells an empowered story.

`,
      "We feel branding is not just an aesthetic but creating an emotion towards your audience. Our approach is toward understanding the needs and tastes of your customers, which we can then build into a brand personality that talks to them exactly. This personal contact not only increases customer loyalty but also helps in engaging and selling more.",
      `But that's not all. We also offer brand positioning, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce web development</a>, market research, and <a href="https://angular.dev/" target="_blank">social media strategy </a> to ensure your brand stands out on every platform. Whether you're a new startup looking to create your mark or an old business seeking a rebranding strategy, Wisbato, a leading branding agency in Calicut is ready for you.`,
    ],
    servicePlatform: false,
    subContent: {
      title: "Custom Solutions for Every Business",
      description: [
        `We believe that each business is unique, and the same strategy for branding approaches just will not be possible thus, we provide client-centric branding solutions customized to match definite needs and aspirational outcomes for each client. Here, our research team analyzes your industry as well as your target audience and develops specific strategies that align with your business's goal and outcome. Whether you need an overall brand transformation, new visual elements, or a targeted marketing campaign, we best branding agency in Calicut are here to help precision and finesse in the solution to make your brand stand out. We're committed to delivering results that not only enhance your brand identity but also deliver growth and engagement to your business. Let's create something extraordinary together.

`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of Branding",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Builds Recognition and Trust",
            // description:
            //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
          },
          {
            id: 2,
            title: "Differentiates from Competitors",
            // description:
            //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
          },
          {
            id: 3,
            title: "Enhances Customer Loyalty",
            // description:
            //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
          },
          {
            id: 4,
            title: "Increases Business Value",
            // description:
            //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
          },
          {
            id: 5,
            title: "Improves Marketing Efficiency",
            // description:
            //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Disadvantage of Not Having Branding",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Lack of Recognition and Trust",
            // description:
            //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
          },
          {
            id: 2,
            title: "Difficult to Stand Out from Competitors",
            // description:
            //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
          },
          {
            id: 3,
            title: "Weaker Customer Loyalty",
            // description:
            //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
          },
          {
            id: 4,
            title: "Lower Business Value",
            // description:
            //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
          },
          {
            id: 5,
            title: "Inefficient Marketing Efforts",
            // description:
            //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
          },
        ],
      },
    },
    question: {
      title: "Why choose Wisbato for branding",
      cards: [
        {
          id: 1,
          title: "EXPERTISE &<br/> INNOVATION ",
          description:
            "Our team combines creativity and strategy to create truly distinctive brand identities.",
        },
        {
          id: 2,
          title: "Effective <br/> Solutions",
          description:
            " We create custom-made branding strategies to fit the different needs of each business.",
        },
        {
          id: 3,
          title: "Result-oriented <br/> solutions",
          description:
            " Wisbato delivers impact branding solutions that enhance recognition, customer loyalty, and market presence.",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Choose a Professional Branding Team in Calicut.",
      description: [
        `Are you looking for the best branding agency in Calicut, so look no further  <a href="https://www.wisbato.com/" target="_blank">wisbato</a> is the leading branding agency in Calicut. We are inspired to bring your <a href="https://en.wikipedia.org/wiki/Brand" target="_blank"> brand</a>  to life. Branding is not just about a logo or name, it's an identity designed to reflect your values and to be connected with the personal characteristics of your target market. At the same time, we have experienced expertise to help design strategic, visuals, and memorable branding strategies that separate you from the rest of the competition. From being a small startup to an established firm, our branding team works together to ensure that each minute detail about your brand is filled with richness to leave long-lasting impressions. Choose the best branding company in Calicut,for a professional, results-driven branding experience. Check out our  <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>. 
        `,
      ],
    },
  },
  {
    id: 7,
    title: "Best software development company in Calicut.",
    description: [
      `As the best software development company in Calicut, we offer a wide range of services to meet the needs of businesses looking for customized software solutions.<a href="https://www.wisbato.com/team" target="_blank"> Our team</a>  specializes in creating, designing, programming, testing, and maintaining software applications that enhance efficiency and drive growth. Whether you need software for managing internal operations or customer-facing applications, we have the expertise to deliver results. Our goal is to help you bring your ideas to life by developing software that fits perfectly with your business goals.
`,
      `We follow the <a href="https://en.wikipedia.org/wiki/Software_development_process" target="_blank">Software Development Life Cycle</a> (SDLC) to ensure that every project is carefully planned and executed. Our team is skilled in popular programming languages like C, C++, Java, JavaScript, PHP, and Python, allowing us to create diverse applications that meet modern business demands.
 `,
      `Staying updated with the latest industry trends, we also incorporate agile software methodologies and DevOps practices into our software development process. Many leading companies now adopt these methods to ensure faster delivery and more efficient updates to their software. At our company, we prioritize innovation and flexibility, providing Calicut-based businesses with best solutions that align with the latest software trends and technologies.<a href="https://youtu.be/wUGiIdqjDdk?si=qXjzF6XdHo6_oyve" target="_blank">Watch how to calculate software development cost</a>  `,
    ],
    servicePlatform: true,
    subContent: {
      title: "Custom software for every business",
      description: [
        `Today,<a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank"> custom made software</a> is important for every business aiming for success. Companies like Nike and Amazon have embraced custom software solutions to streamline their operations, and enhance customer experiences. Custom software allows businesses to best applications specifically to their unique needs, ensuring they can adapt quickly to market changes and specific customer demands. For instance, a retail business might require an inventory management system that integrates seamlessly with its e-commerce platform, while a healthcare provider could benefit from a patient management system designed around its specific workflow. By opting for customized software, businesses can improve efficiency, reduce operational costs, and deliver a superior service that meets their customers' expectations. Investing in custom software developed by the best software development company in Calicut, that’s easy for your business,<a href="https://www.wisbato.com/contact" target="_blank"> Contact now</a>.`,
      ],
      advantages: {
        id: 1,
        title: "What happens you make a software",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Efficiency",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Enhanced Decision-Making",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Improved Customer Experience",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Save time ",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Scalability",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "What happens you don't make a software",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Inefficiency",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Lack of Data Insights",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Poor Customer Experience",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Limited Scalability",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Increased Risk",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why Choose Wisbato for Software Development?",
      cards: [
        {
          id: 1,
          title: "Expertise &<br/> Experience",
          description:
            " Wisbato boasts a team of skilled and experienced software developers who have successfully delivered numerous projects across various industries.",
        },
        {
          id: 2,
          title: "Customized <br/>  Solutions",
          description:
            "We understand that every business has unique requirements. At Wisbato, we prioritize understanding your specific needs and tailoring our solutions accordingly.",
        },
        {
          id: 3,
          title: "Commitment to Quality &<br/> Innovation",
          description:
            "We are dedicated to delivering high-quality software that exceeds your expectations. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "why we are different",
      description: [
        `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we differentiate ourselves by offering a comprehensive range of software development services to Calicut business owners and companies, all powered by the latest technologies. Our professional software developers understand <a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank">why your business needs a software solution</a>, and we work to fulfill that purpose.From custom software development and mobility solutions to cloud computing, embedded systems, blockchain, and system integration, we have the expertise to create your unique business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team</a> is passionate about staying at the forefront of technological advancements, implementing AI, big data, and augmented reality to create innovative and effective solutions. We are committed to delivering exceptional results, building long-term partnerships, and exceeding your expectations. Choose Wisbato as your trusted software development partner in Calicut and experience the difference.
`,
      ],
    },
  },
  {
    id: 8,
    title: "Best Digital Marketing Agency In Calicut",
    description: [
      `Are you looking for the best digital marketing agency in Calicut to improve your business? Look no further than Wisbato. We specialize in providing best digital marketing services to meet your business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team of digital marketing experts</a>  understands why having a strong online presence is essential for your business success. That’s why we offer a wide range of services, including <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> social media marketing</a>, <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO</a>, Google Ads,<a href="https://www.wisbato.com/services/branding-agency-in-calicut" target="_blank">branding</a>, YouTube ads, video shoots, email marketing, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>, and content marketing. Whether you want to boost your brand visibility or drive more leads, Wisbato is here to help.
 
`,
      "At Wisbato, we know that each business is unique, and a one-size-fits-all approach simply won’t work. That's why we customize our strategies based on your business goals and target audience. For businesses looking to improve their search engine rankings, we offer expert Search Engine Optimization (SEO) services that help you rank higher on Google and attract organic traffic. We also specialize in Search Engine Marketing (SEM), ensuring that your business gets noticed by potential customers when they search for products or services you offer. If social media is your focus, we create engaging content that resonates with your audience across platforms like Facebook, Instagram, and LinkedIn.",
      `With Wisbato, you’ll get a holistic approach to digital marketing that drives results. From content marketing that tells your brand story to video shoots that bring your products to life, we cover all aspects of your digital marketing needs. When you partner with <a href="https://www.wisbato.com/" target="_blank"> Wisbato</a>, you’re choosing a team dedicated to growing your business in the competitive online world.  `,
    ],
    servicePlatform: true,
    subContent: {
      title: "Unique Digital Marketing Ideas for Every Business",
      description: [
        `Every business needs a custom digital <a href="https://en.wikipedia.org/wiki/Marketing_strategy" target="_blank">marketing strategy</a> , so we will focus on business owners who are constantly seeking innovative digital marketing ideas to stand out and connect with their target audience. Customized content marketing strategies, such as interactive blog posts and engaging videos, can help businesses tell their unique story and attract customers. With the rise of AI tools, businesses can now automate tasks, analyze consumer behavior, and deliver personalized content at scale. Incorporating these latest strategies into your digital marketing efforts builds strong, lasting relationships with your customers, ultimately driving growth and success for your business with the best digital marketing agency in Calicut.
`,
      ],
      advantages: {
        id: 1,
        title: "Advantages of Using Digital Marketing",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "Increased Online Visibility",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "Targeted Advertising",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Cost Efficiency",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Cost Efficiency",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Enhanced Customer Interaction",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Don't Using Digital Marketing",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Constantly Evolving Strategies",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "High Competition Online",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Time-Consuming",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Technical Issues",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Risk of Negative Feedback",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title: "Why choose WISBATO for digital marketing?",
      cards: [
        {
          id: 1,
          title: " Trusted Digital Marketing Partner",
          description:
            " Discover how Wisbato can help you achieve your marketing goals through innovative strategies, data-driven insights, and expert execution.",
        },
        {
          id: 2,
          title: "Expertise You Can Trust",
          description:
            "Choosing Wisbato means partnering with a team that has extensive experience in various digital marketing disciplines.",
        },
        {
          id: 3,
          title: " Results-Oriented Strategies",
          description:
            " Our comprehensive digital marketing services, from SEO and social media to content marketing and PPC, are designed to boost your brand visibility and drive conversions. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Why we are different from others.",
      description: [
        `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we pride ourselves on being different from other digital marketing service providers. Our approach is centered around creating customized digital marketing strategies that align with your unique business goals. Unlike the one-size-fits-all methods many companies use, we offer a variety of marketing techniques, from SEO and social media marketing to Google Ads and content marketing, ensuring that each campaign is customized  to drive the best results for your brand. As the <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> best digital marketing company in Calicut</a>, we focus on innovation, data-driven insights, and delivering measurable growth, making us the ideal partner for businesses looking to stand out in the crowded online space. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#lrd=0x3ba65f32732f18a7:0xf2c3846272a4ddcd,1,,,," target="_blank">client words</a>.
`,
      ],
    },
  },
  {
    id: 9,
    title: "Web Application Company in Calicut",
    description: [
      `As a leading web application company in Kerala, Wisbato specializes in custom <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> web development </a>  solutions to meet the needs of various industries. Our emphasis on web application development makes us serve you with innovative and user-friendly applications that will always improve your digital presence. We understand how a reliable web application can make all the difference in this competitive marketplace in gaining hold of customers, streamlining operations, and going global.

 
`,
      `We have successfully developed so many web applications at <a href="https://www.wisbato.com/" target="_blank"> Wisbato </a>, including e-commerce platforms, CRM, and CMS. Our <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank"> e-commerce solutions </a>  enable businesses to sell products or services online without any discomfort and properly secure payment gateways. Our CRM systems enable companies to manage customer interactions efficiently for customer satisfaction and retention.
 `,
      "Another significant aspect, which remains the same in all the web applications we design, is security. We ensure huge security measures protecting all of your data and ensuring smooth-running business operations. Besides, with continuous maintenance and support, we keep your web application updated so that your website continues at its best performance. With scalable solutions, we march alongside your growing business and welcome new features and functionalities easily. With the technical expertise and  deep understanding of our client's business goals, we provide result-oriented solutions for encouraging business growth.",
      "Wisbato is proud of delivering high-quality web application development services at costs allowing customers an exceptional value for their money invested. Have Wisbato become your partner, allowing you to gain the power of web applications and propel your business up the digital ladder. In this way, we can build web applications that position you in the marketplace.",
      ,
    ],
    servicePlatform: true,
    subContent: {
      title: "Unique Solutions for Every Business",
      description: [
        `We at Wisbato understand that every business is different. This is why we offer customized services based on the client's specific needs and goals. Our dedicated <a href="https://www.wisbato.com/team" target="_blank">team of experts</a>  works closely with you to seek insight into your whole business, your target audience, and your vision. Our web application solutions will thus be perfectly aligned with your business vision. Whether you are looking to build an online shop for any product or service you should create a customer management tool. Our flexible approach ensures increased efficiency, superior user experience, and measurable growth. Choose Wisbato to empower your business with web applications that help you grow in a competitive landscape.
`,
      ],
      advantages: {
        id: 1,
        title: "Benefits of Having Web Application Development",
        // description: "A well-designed website offers a multitude of benefits",
        points: [
          {
            id: 1,
            title: "They are accessible",
            // description:
            //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
          },
          {
            id: 2,
            title: "User experience gets enhanced",
            // description:
            //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
          },
          {
            id: 3,
            title: "Scalable",
            // description:
            //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
          },
          {
            id: 4,
            title: "Improved collaboration",
            // description:
            //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
          },
          {
            id: 5,
            title: "Maintenance is cost-effective",
            // description:
            //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
          },
        ],
      },
      disAdvantages: {
        id: 1,
        title: "Drawbacks of Not Having Web Application Development",
        // description:
        //   "Running a business without a website means missing out on a massive audience",
        points: [
          {
            id: 1,
            title: "Low reach",
            // description:
            //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
          },
          {
            id: 2,
            title: "Inefficient processes",
            // description:
            //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
          },
          {
            id: 3,
            title: "Ineffective customer engagement",
            // description:
            //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
          },
          {
            id: 4,
            title: "Unlikely to defeat the competition",
            // description:
            //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
          },
          {
            id: 5,
            title: "Challenges in data management",
            // description:
            //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
          },
        ],
      },
    },
    question: {
      title:
        "Why should one choose Wisbato for website application development?",
      cards: [
        {
          id: 1,
          title: "Experience & expertise",
          description:
            " We have an experienced team that has worked on the production of high-quality, user-friendly web applications in various industries.",
        },
        {
          id: 2,
          title: "Ongoing Support & Maintenance",
          description:
            "We keep your web application ongoing, which makes it stand in perfect condition and always on top of its performance.",
        },
        {
          id: 3,
          title: " Quality Assurance",
          description:
            "We hold quality above everything, at Wisbato, in ensuring that every application meets stringent performance as well as security standards. ",
        },
      ],
    },
    summery: {
      id: 1,
      title: "Partner with Our Expert Web Application Team",
      description: [
        `<a href="https://www.wisbato.com/" target="_blank">Wisbato</a> lets you make your business shine above the rest by developing the best of our applications with top web application development. We are a <a href="https://www.wisbato.com/team" target="_blank"> team of professionals</a> who have rich expertise in developing customized solutions relevant to your particular business needs, emphasizing innovative designs, user-friendly interfaces, and efficient functionality that makes your web application much more than what is expected. We are always up-to-date with the latest technologies and trends in industries and styles so that you are assured that the best solutions will help bring growth and engagement to your business. Do not settle for less; partner with the best web application development company in Kerala today and change your digital presence.<a href="https://www.wisbato.com/contact" target="_blank">Call us now</a> to talk about your project.

`,
      ],
    },
  },
];

export const services = [
  {
    id: 1,
    icon: `<svg width="60" height="60" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.4375 5.625H26.2097C25.961 5.625 25.7226 5.72377 25.5468 5.89959C25.371 6.0754 25.2722 6.31386 25.2722 6.5625C25.2722 6.81114 25.371 7.0496 25.5468 7.22541C25.7226 7.40123 25.961 7.5 26.2097 7.5H53.4375C54.1832 7.50074 54.8981 7.7973 55.4254 8.32458C55.9527 8.85187 56.2493 9.56681 56.25 10.3125V18.75H3.75V10.3125C3.75074 9.56681 4.0473 8.85187 4.57458 8.32458C5.10187 7.7973 5.81681 7.50074 6.5625 7.5H16.875C17.1236 7.5 17.3621 7.40123 17.5379 7.22541C17.7137 7.0496 17.8125 6.81114 17.8125 6.5625C17.8125 6.31386 17.7137 6.0754 17.5379 5.89959C17.3621 5.72377 17.1236 5.625 16.875 5.625H6.5625C5.31975 5.62649 4.12834 6.12083 3.24958 6.99958C2.37083 7.87834 1.87649 9.06975 1.875 10.3125V49.6875C1.87649 50.9302 2.37083 52.1217 3.24958 53.0004C4.12834 53.8792 5.31975 54.3735 6.5625 54.375H53.4375C54.6802 54.3735 55.8717 53.8792 56.7504 53.0004C57.6292 52.1217 58.1235 50.9302 58.125 49.6875V10.3125C58.1235 9.06975 57.6292 7.87834 56.7504 6.99958C55.8717 6.12083 54.6802 5.62649 53.4375 5.625ZM53.4375 52.5H6.5625C5.81681 52.4993 5.10187 52.2027 4.57458 51.6754C4.0473 51.1481 3.75074 50.4332 3.75 49.6875V20.625H56.25V49.6875C56.2493 50.4332 55.9527 51.1481 55.4254 51.6754C54.8981 52.2027 54.1832 52.4993 53.4375 52.5Z" fill="#F2F2F2"/>
<path d="M20.5453 7.5H22.5C22.7486 7.5 22.9871 7.40123 23.1629 7.22541C23.3387 7.0496 23.4375 6.81114 23.4375 6.5625C23.4375 6.31386 23.3387 6.0754 23.1629 5.89959C22.9871 5.72377 22.7486 5.625 22.5 5.625H20.5453C20.2967 5.625 20.0582 5.72377 19.8824 5.89959C19.7066 6.0754 19.6078 6.31386 19.6078 6.5625C19.6078 6.81114 19.7066 7.0496 19.8824 7.22541C20.0582 7.40123 20.2967 7.5 20.5453 7.5ZM43.125 36.5625C43.1239 35.1772 42.9024 33.801 42.4688 32.4853C42.4613 32.4666 42.4566 32.4459 42.4472 32.4272C41.5807 29.8105 39.9117 27.5335 37.6772 25.9196C35.4427 24.3057 32.7564 23.4371 30 23.4371C27.2436 23.4371 24.5573 24.3057 22.3228 25.9196C20.0883 27.5335 18.4193 29.8105 17.5528 32.4272C17.5444 32.4459 17.5388 32.4647 17.5322 32.4853C16.6569 35.133 16.6569 37.992 17.5322 40.6397C17.5388 40.6584 17.5444 40.6791 17.5528 40.6978C18.4193 43.3145 20.0883 45.5915 22.3228 47.2054C24.5573 48.8193 27.2436 49.6879 30 49.6879C32.7564 49.6879 35.4427 48.8193 37.6772 47.2054C39.9117 45.5915 41.5807 43.3145 42.4472 40.6978C42.4566 40.6791 42.4613 40.6594 42.4688 40.6397C42.9024 39.324 43.1239 37.9478 43.125 36.5625ZM30 47.8125C28.8244 47.8125 27.3009 45.4003 26.6147 41.25H33.3862C32.6991 45.4003 31.1756 47.8125 30 47.8125ZM26.3803 39.375C26.2077 37.504 26.2077 35.621 26.3803 33.75H33.6197C33.7923 35.621 33.7923 37.504 33.6197 39.375H26.3803ZM18.75 36.5625C18.7537 35.6131 18.8781 34.668 19.1203 33.75H24.5072C24.4228 34.6819 24.375 35.625 24.375 36.5625C24.375 37.5 24.4228 38.4431 24.5072 39.375H19.1203C18.8781 38.457 18.7537 37.5119 18.75 36.5625ZM30 25.3125C31.1756 25.3125 32.6991 27.7247 33.3853 31.875H26.6156C27.3019 27.7247 28.8253 25.3125 30 25.3125ZM35.4928 33.75H40.8797C41.3733 35.5925 41.3733 37.5325 40.8797 39.375H35.4938C35.5781 38.4431 35.6259 37.5 35.6259 36.5625C35.6259 35.625 35.5772 34.6819 35.4928 33.75ZM40.2141 31.875H35.2669C34.9948 29.7527 34.3354 27.6983 33.3216 25.8141C34.8306 26.2858 36.2238 27.069 37.4111 28.113C38.5984 29.157 39.5533 30.4387 40.2141 31.875ZM26.6784 25.8141C25.6646 27.6983 25.0052 29.7527 24.7331 31.875H19.7859C20.4467 30.4387 21.4016 29.157 22.5889 28.113C23.7762 27.069 25.1694 26.2858 26.6784 25.8141ZM19.7859 41.25H24.7331C25.0052 43.3723 25.6646 45.4267 26.6784 47.3109C25.1694 46.8392 23.7762 46.056 22.5889 45.012C21.4016 43.968 20.4467 42.6863 19.7859 41.25ZM33.3216 47.3109C34.3354 45.4267 34.9948 43.3723 35.2669 41.25H40.2141C39.5533 42.6863 38.5984 43.968 37.4111 45.012C36.2238 46.056 34.8306 46.8392 33.3216 47.3109ZM53.4375 13.125C53.4375 12.3833 53.2176 11.6583 52.8055 11.0416C52.3935 10.4249 51.8078 9.94428 51.1226 9.66045C50.4373 9.37662 49.6833 9.30236 48.9559 9.44706C48.2285 9.59175 47.5603 9.9489 47.0359 10.4733C46.5114 10.9978 46.1543 11.666 46.0096 12.3934C45.8649 13.1208 45.9391 13.8748 46.2229 14.5601C46.5068 15.2453 46.9874 15.831 47.6041 16.243C48.2208 16.6551 48.9458 16.875 49.6875 16.875C50.6818 16.874 51.635 16.4786 52.3381 15.7756C53.0411 15.0725 53.4365 14.1193 53.4375 13.125ZM47.8125 13.125C47.8125 12.7542 47.9225 12.3916 48.1285 12.0833C48.3345 11.775 48.6274 11.5346 48.97 11.3927C49.3126 11.2508 49.6896 11.2137 50.0533 11.286C50.417 11.3584 50.7511 11.537 51.0133 11.7992C51.2756 12.0614 51.4541 12.3955 51.5265 12.7592C51.5988 13.1229 51.5617 13.4999 51.4198 13.8425C51.2779 14.1851 51.0375 14.478 50.7292 14.684C50.4209 14.89 50.0583 15 49.6875 15C49.1904 14.9995 48.7137 14.8018 48.3622 14.4503C48.0107 14.0988 47.813 13.6221 47.8125 13.125ZM44.0625 13.125C44.0625 12.3833 43.8426 11.6583 43.4305 11.0416C43.0185 10.4249 42.4328 9.94428 41.7476 9.66045C41.0623 9.37662 40.3083 9.30236 39.5809 9.44706C38.8535 9.59175 38.1853 9.9489 37.6609 10.4733C37.1364 10.9978 36.7792 11.666 36.6346 12.3934C36.4899 13.1208 36.5641 13.8748 36.848 14.5601C37.1318 15.2453 37.6124 15.831 38.2291 16.243C38.8458 16.6551 39.5708 16.875 40.3125 16.875C41.3068 16.874 42.26 16.4786 42.9631 15.7756C43.6661 15.0725 44.0615 14.1193 44.0625 13.125ZM38.4375 13.125C38.4375 12.7542 38.5475 12.3916 38.7535 12.0833C38.9595 11.775 39.2524 11.5346 39.595 11.3927C39.9376 11.2508 40.3146 11.2137 40.6783 11.286C41.042 11.3584 41.3761 11.537 41.6383 11.7992C41.9006 12.0614 42.0791 12.3955 42.1515 12.7592C42.2238 13.1229 42.1867 13.4999 42.0448 13.8425C41.9029 14.1851 41.6625 14.478 41.3542 14.684C41.0459 14.89 40.6833 15 40.3125 15C39.8154 14.9995 39.3387 14.8018 38.9872 14.4503C38.6357 14.0988 38.438 13.6221 38.4375 13.125ZM6.5625 13.125C6.56349 14.1193 6.9589 15.0725 7.66195 15.7756C8.36499 16.4786 9.31824 16.874 10.3125 16.875H30.9375C31.9321 16.875 32.8859 16.4799 33.5891 15.7767C34.2924 15.0734 34.6875 14.1196 34.6875 13.125C34.6875 12.1304 34.2924 11.1766 33.5891 10.4733C32.8859 9.77009 31.9321 9.375 30.9375 9.375H10.3125C9.31824 9.37599 8.36499 9.7714 7.66195 10.4744C6.9589 11.1775 6.56349 12.1307 6.5625 13.125ZM32.8125 13.125C32.812 13.6221 32.6143 14.0988 32.2628 14.4503C31.9113 14.8018 31.4346 14.9995 30.9375 15H10.3125C9.81522 15 9.33831 14.8025 8.98668 14.4508C8.63504 14.0992 8.4375 13.6223 8.4375 13.125C8.4375 12.6277 8.63504 12.1508 8.98668 11.7992C9.33831 11.4475 9.81522 11.25 10.3125 11.25H30.9375C31.4346 11.2505 31.9113 11.4482 32.2628 11.7997C32.6143 12.1512 32.812 12.6279 32.8125 13.125Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "web-development-company-in-calicut",
    title: "Web Development",
    peopleTitle: "Web Development Team",
    metaTitle: "Best Web Design & Development Company In Calicut, Kerala",
    metaDescription:
      "Are you planning to develop a website for your business in Calicut? Wisbato is the best web design & development company in Calicut, Contact now for your custom website design in Kozhikode.",
    description:
      "We believe in developing websites that reach your potential clients through visually appealing and highly responsive websites.",
    image: "/images/services/webdevelopment",
    // image: "/images/services/webdevelopment.webp",
    style: {
      backgroundColor: "#FFDD78",
    },
    width: "55",
    context: {
      mainTitle:
        "Enhance <span>Your Reach</span> by Developing an Eye-Catching Online Presence",
      subTitle: "Why Web Development is considered important?",
      content: `<span>In bussiness,<a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" >Web development</a> is important because it would give the business a professional online look, which in turn gives confidence and visitors to know your business. In a competitive market, a website visitor gets an overview of your products and services. While the costs of making a website are usually quite different, the investment in a responsive, SEO-friendly website ensures the growth of a business. Wisbato the best web development company in Calicut specifically engaged in cost-effective web development and design with definite requirements for your specific business needs.
</span>`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Planning and Requirement Gathering",
        image: "/images/workingProcess/planningandexicution.webp",
        alt: "web development company in Calicut",
        list: [
          {
            id: 1,
            title: "Understanding project needs",
            content:
              "As the initial stage of the working process, we will be gathering the requirements of your project, such as the target audience, objective, features, and functionality.",
          },
          {
            id: 2,
            title: "Creation of user personas",
            content:
              "To guide the web development, our team will be creating user personas and defining user stories.",
          },
          {
            id: 3,
            title: "Planning of the website",
            content:
              "The site structure of the website is planned, and the navigation is designed.",
          },
          {
            id: 4,
            title: "Development of Strategy",
            content:
              "Once the required information is gathered, we will now be developing the most appropriate strategy for further project management.",
          },
        ],
      },
      {
        id: 2,
        title: "Design of the web",
        image: "/images/workingProcess/designoftheweb.webp",
        alt: "web design company in Calicut",
        list: [
          {
            id: 5,
            title: "Creation of sitemap",
            content:
              "To visualize the layout and functionality of the website, a wireframe or prototype of the website is created. Through this, the clients will be able to perceive how the entire website will appear.",
          },
          {
            id: 6,
            title: "Receiving approval from the client",
            content:
              "We will be waiting for the approval of the client, as we have to confirm that everything looks good so that we can resume our work.",
          },
          {
            id: 7,
            title: "UI/UX is designed",
            content:
              "At this step of web development, user interface (UI) and user experience elements are designed.",
          },
          {
            id: 8,
            title: "Development of visual design",
            content: "Colour schemes, imagery, and typography are developed.",
          },
        ],
      },
      {
        id: 3,
        title: "Frontend and Backend Development",
        image: "/images/workingProcess/backend.webp",
        alt: "website development company in Calicut",
        list: [
          {
            id: 9,
            title: "Writing and styling HTML markup",
            content:
              "To structure the content, the HTML markup is scripted. Then, with the help of CSS, the desired colors, layouts, fonts etc, the HTML elements are styled.",
          },
          {
            id: 10,
            title: "Implementation of interactivity and dynamic behavior",
            content:
              "Interactivity and dynamic behavior are implemented with the help of JavaScript or frontend frameworks/libraries such as React or Angular.",
          },
          {
            id: 11,
            title: "Selection of backend technology stack",
            content:
              "Now that the frontend development has been completed, at this point, a backend technology stack such as PHP, Python with Django, Node.js or Flask is chosen.",
          },
          {
            id: 12,
            title: "Implementation of data storage",
            content:
              "With the help of databases like MongoDB, MySQL, or PostgreSQL, data storage and retrieval are implemented.",
          },
        ],
      },
      {
        id: 4,
        title: "Integration and Testing",
        image: "/images/workingProcess/integrationandtesting.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 13,
            title: "Integration of frontend and backend components",
            content:
              "At this stage, to work the frontend and backend components together seamlessly, they are integrated.",
          },
          {
            id: 14,
            title: "Implementation of APIs",
            content:
              "To communicate between different parts of the system or with any third-party services, APIs are implemented.",
          },
          {
            id: 15,
            title: "Conducting unit test",
            content:
              "To confirm that individual components are working properly, unit testing is performed.",
          },
          {
            id: 16,
            title: "Performing usability testing",
            content:
              "To examine the user experience, usability testing is carried out. After this, compatibility testing is performed across multiple browsers and devices.",
          },
        ],
      },
      {
        id: 5,
        title: "Deployment",
        image: "/images/workingProcess/deployment.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 17,
            title: "Establishing a hosting environment",
            content:
              "Through shared hosting, VPS, or cloud hosting, a hosting environment is set up.",
          },
          {
            id: 18,
            title: "Configuration of server settings",
            content:
              "The website files are deployed after the configuration of server settings.",
          },
          {
            id: 19,
            title: "Considering security measures",
            content:
              "Our team will be assuring that required security measures are taken, such as SSL certificates, firewalls etc.",
          },
          {
            id: 20,
            title: "Final monitoring of the website",
            content:
              "The performance of the website is monitored and if any issues are spotted, troubleshooting.",
          },
        ],
      },
      {
        id: 6,
        title: "Maintenance and Updates",
        image: "/images/workingProcess/updatesandmaintain.webp",
        alt: "best web development company in Calicut",
        list: [
          {
            id: 21,
            title: "Updating of contents and features",
            content:
              "As per the feedback from the client and other requirements, both contents and features are regularly updated.",
          },
          {
            id: 22,
            title: "Monitoring the performance",
            content:
              "We will be monitoring the security and performance of the website.",
          },
          {
            id: 23,
            title: "Application of patches",
            content: "Patches are applied and updates are done.",
          },
          {
            id: 24,
            title: "Regular Optimization",
            content:
              "With the aim of improving the performance, user experience, and accessibility, our team continuously optimizes the website.",
          },
        ],
      },
    ],
    outcomes: outcomes[0],
    FAQData: [
      // {
      //   id: 1,
      //   title: "How will I make my website mobile-friendly?",
      //   content:
      //     "To make your website look visually appealing on both small and large devices, you may develop a responsive website. Once creating such a website, your web traffic will also increase and thereby improve your search engine rankings. If you are hiring us, we deliver a highly responsive website that ensures an optimised browsing experience.",
      // },
      // {
      //   id: 2,
      //   title: "How does web development differ from web design?",
      //   content:
      //     "When web development introduces dynamic and interactive functions to it, web design is the process of creating a website. Moreover, web developers are the ones who add functionalities to the website and the web designers enhance the user experience of the site by adding an aesthetic value to it. Most notably, web developers are held accountable for coding.",
      // },
      // {
      //   id: 3,
      //   title: "What is the need for hiring a professional web developer?",
      //   content:
      //     "Doing web development all by yourselves will prove to be a bad idea, unless you are taking a lot of time and effort, and have the right language and its best practices. A professional web developer possesses the right skills and expertise to get your website running. Besides that, they are most likely to follow the latest web development trends and practices.",
      // },
      {
        id: 4,
        title: "Why need a website for my business?",
        content: `In 2024, over 5.35 billion people will use the internet globally. So think of your website as your online store, open 24/7 and easy to access. It builds credibility, showcases your products and service offerings, and attracts customers even when you're not working. It's essential for reaching new audiences, generating leads, and staying competitive in today's online world. This is the reason <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank">why you need a website for your website</a>.`,
      },
      {
        id: 5,
        title: "What website should I use for my small business in Calicut?",
        content:
          "Are you a small business owner in Calicut?, you should use a website that is professionally designed, user-friendly, and customized to your specific needs. Platforms like WordPress, Wix, or Squarespace are great for creating simple, cost-effective websites. However, for a more customized solution, partnering with a professional web development company in Calicut like WISBATO can ensure your website is unique, scalable, and aligned with your business goals.",
      },
      {
        id: 6,
        title:
          "How much time will it take to complete my website from beginning to end?",
        content:
          "The time it takes to complete a website from start to finish depends on the type and complexity of your project. Typically, the process begins with planning and organization, which takes about 1-2 weeks. If you require a standard startup website, it usually takes 1-2 weeks to build. However, if you need a more complex site like an e-commerce website, the development time can extend to 2-3 weeks. And graphic design, UI/UX, rich content, and SEO optimization are also crucial & can impact the timeline. Ultimately, the duration largely depends on your specific requirements and the project's complexity.",
      },
      {
        id: 7,
        title: "How can a professional website benefit my business in Calicut?",
        content:
          " A professional website will make a huge difference for your business in terms of efficiency in creating awareness of your business and can easily be accessed by many potential customers. It sets your business credibility and presents your products or services to a bigger market. Hence, with the localized SEO services, your web site can attract local consumers in Calicut in Kerala. The use of an effective website creates favorable opportunities for engaging your company’s customers and fosters trustful cooperation in the long term.",
      },
      {
        id: 8,
        title: "How much is the website development cost in Calicut?",
        content: `The cost of website development in Calicut varies based on the size and complexity of the project. For a small dynamic website, prices start from RS: 5,500 to RS: 42,500. Mid-level websites typically range from RS: 8,500 to RS: 85,000. For large business websites, costs begin at RS: 15,000 and can go up to RS: 1,70,000. The final price depends on the client's specific requirements and features they want to include. Check out full details on <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">website development cost.</a>
`,
      },
      {
        id: 9,
        title:
          " Why should I choose a Calicut-based company for my web development?",
        content: `Choosing a Calicut-based web development company offers several benefits. Local companies understand the unique business environment and customer preferences in the region, allowing them to create best solutions that resonate with your target audience.They also provide more personalized support, with easier communication and quicker response times.It reduces the <a href="https://www.wisbato.com/blogs/what-is-the-bounce-rate-how-to-improve-it" target="_blank"> bounce rates</a>, keeps visitors engaged with the website, and increases the rate of conversion.
`,
      },
    ],
  },
  {
    id: 2,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.8125 7.5H27.1875C26.9389 7.5 26.7004 7.40123 26.5246 7.22541C26.3488 7.0496 26.25 6.81114 26.25 6.5625C26.25 6.31386 26.3488 6.0754 26.5246 5.89959C26.7004 5.72377 26.9389 5.625 27.1875 5.625H32.8125C33.0611 5.625 33.2996 5.72377 33.4754 5.89959C33.6512 6.0754 33.75 6.31386 33.75 6.5625C33.75 6.81114 33.6512 7.0496 33.4754 7.22541C33.2996 7.40123 33.0611 7.5 32.8125 7.5ZM40.3125 58.125H19.6875C18.4448 58.1235 17.2533 57.6292 16.3746 56.7504C15.4958 55.8717 15.0015 54.6802 15 53.4375V21.5625C15 21.3139 15.0988 21.0754 15.2746 20.8996C15.4504 20.7238 15.6889 20.625 15.9375 20.625C16.1861 20.625 16.4246 20.7238 16.6004 20.8996C16.7762 21.0754 16.875 21.3139 16.875 21.5625V53.4375C16.875 54.9881 18.1369 56.25 19.6875 56.25H40.3125C41.8631 56.25 43.125 54.9881 43.125 53.4375V21.5625C43.125 21.3139 43.2238 21.0754 43.3996 20.8996C43.5754 20.7238 43.8139 20.625 44.0625 20.625C44.3111 20.625 44.5496 20.7238 44.7254 20.8996C44.9012 21.0754 45 21.3139 45 21.5625V53.4375C45 56.0213 42.8981 58.125 40.3125 58.125Z" fill="#F2F2F2"/>
<path d="M44.0625 28.125C43.8139 28.125 43.5754 28.0262 43.3996 27.8504C43.2238 27.6746 43.125 27.4361 43.125 27.1875V6.5625C43.125 5.01187 41.8631 3.75 40.3125 3.75H19.6875C18.1369 3.75 16.875 5.01187 16.875 6.5625V27.1875C16.875 27.4361 16.7762 27.6746 16.6004 27.8504C16.4246 28.0262 16.1861 28.125 15.9375 28.125C15.6889 28.125 15.4504 28.0262 15.2746 27.8504C15.0988 27.6746 15 27.4361 15 27.1875V6.5625C15 3.97875 17.1019 1.875 19.6875 1.875H40.3125C42.8981 1.875 45 3.97875 45 6.5625V27.1875C45 27.4361 44.9012 27.6746 44.7254 27.8504C44.5496 28.0262 44.3111 28.125 44.0625 28.125ZM49.6875 11.3438C49.17 11.3438 48.75 11.0175 48.75 10.5V10.3125C48.75 10.0639 48.8488 9.8254 49.0246 9.64959C49.2004 9.47377 49.4389 9.375 49.6875 9.375C49.9361 9.375 50.1746 9.47377 50.3504 9.64959C50.5262 9.8254 50.625 10.0639 50.625 10.3125C50.625 10.83 50.205 11.3438 49.6875 11.3438ZM49.6875 15.0938C49.17 15.0938 48.75 14.7675 48.75 14.25V14.0625C48.75 13.8139 48.8488 13.5754 49.0246 13.3996C49.2004 13.2238 49.4389 13.125 49.6875 13.125C49.9361 13.125 50.1746 13.2238 50.3504 13.3996C50.5262 13.5754 50.625 13.8139 50.625 14.0625C50.625 14.58 50.205 15.0938 49.6875 15.0938ZM49.6875 18.8438C49.17 18.8438 48.75 18.5175 48.75 18V17.8125C48.75 17.5639 48.8488 17.3254 49.0246 17.1496C49.2004 16.9738 49.4389 16.875 49.6875 16.875C49.9361 16.875 50.1746 16.9738 50.3504 17.1496C50.5262 17.3254 50.625 17.5639 50.625 17.8125C50.625 18.33 50.205 18.8438 49.6875 18.8438ZM10.3125 43.0312C9.795 43.0312 9.375 42.705 9.375 42.1875V42C9.375 41.7514 9.47377 41.5129 9.64959 41.3371C9.8254 41.1613 10.0639 41.0625 10.3125 41.0625C10.5611 41.0625 10.7996 41.1613 10.9754 41.3371C11.1512 41.5129 11.25 41.7514 11.25 42C11.25 42.5175 10.83 43.0312 10.3125 43.0312ZM10.3125 46.7812C9.795 46.7812 9.375 46.455 9.375 45.9375V45.75C9.375 45.5014 9.47377 45.2629 9.64959 45.0871C9.8254 44.9113 10.0639 44.8125 10.3125 44.8125C10.5611 44.8125 10.7996 44.9113 10.9754 45.0871C11.1512 45.2629 11.25 45.5014 11.25 45.75C11.25 46.2675 10.83 46.7812 10.3125 46.7812ZM10.3125 50.5312C9.795 50.5312 9.375 50.205 9.375 49.6875V49.5C9.375 49.2514 9.47377 49.0129 9.64959 48.8371C9.8254 48.6613 10.0639 48.5625 10.3125 48.5625C10.5611 48.5625 10.7996 48.6613 10.9754 48.8371C11.1512 49.0129 11.25 49.2514 11.25 49.5C11.25 50.0175 10.83 50.5312 10.3125 50.5312Z" fill="#F2F2F2"/>
<path d="M46.5769 50.625C46.437 50.625 46.2989 50.5938 46.1727 50.5335C46.0465 50.4733 45.9354 50.3856 45.8475 50.2768C45.7596 50.1681 45.6971 50.041 45.6647 49.905C45.6322 49.7689 45.6306 49.6274 45.66 49.4906L46.2787 46.6219C46.3157 46.4496 46.4006 46.2912 46.5237 46.1652C46.6468 46.0391 46.803 45.9504 46.9744 45.9094C47.8791 45.6876 48.7438 45.3264 49.5375 44.8387C49.6872 44.7474 49.8594 44.6999 50.0348 44.7015C50.2101 44.7032 50.3815 44.754 50.5294 44.8481L52.3856 46.035L53.535 44.8762L52.3481 43.035C52.2529 42.8869 52.2011 42.7151 52.1988 42.5391C52.1965 42.363 52.2437 42.1899 52.335 42.0394C52.8228 41.246 53.1834 40.3812 53.4038 39.4763C53.445 39.3054 53.5332 39.1495 53.6585 39.0263C53.7838 38.903 53.941 38.8173 54.1125 38.7787L56.25 38.3044V36.6975L54.1144 36.2231C53.9429 36.1846 53.7856 36.0989 53.6604 35.9756C53.5351 35.8523 53.4469 35.6965 53.4056 35.5256C53.1845 34.621 52.8239 33.7563 52.3369 32.9625C52.2448 32.8127 52.197 32.6398 52.199 32.464C52.201 32.2881 52.2527 32.1165 52.3481 31.9687L53.5369 30.1106L52.3894 28.9631L50.5313 30.1519C50.3835 30.2465 50.2121 30.2975 50.0367 30.2992C49.8612 30.3008 49.6889 30.253 49.5394 30.1613C48.7453 29.6743 47.8807 29.3131 46.9763 29.0906C46.8049 29.0496 46.6486 28.9609 46.5255 28.8348C46.4024 28.7088 46.3175 28.5504 46.2806 28.3781L45.8194 26.25H45C44.7514 26.25 44.5129 26.1512 44.3371 25.9754C44.1613 25.7996 44.0625 25.5611 44.0625 25.3125C44.0625 25.0639 44.1613 24.8254 44.3371 24.6496C44.5129 24.4738 44.7514 24.375 45 24.375H46.575C46.7892 24.3754 46.9968 24.4491 47.1632 24.5838C47.3297 24.7185 47.445 24.9062 47.49 25.1156L47.9906 27.4275C48.6769 27.6356 49.35 27.9169 49.9988 28.2675L52.0125 26.9794C52.1926 26.8643 52.4066 26.8142 52.619 26.8374C52.8315 26.8606 53.0296 26.9557 53.1806 27.1069L55.395 29.3194C55.5459 29.4706 55.6406 29.6689 55.6635 29.8813C55.6863 30.0938 55.6359 30.3076 55.5206 30.4875L54.2325 32.5012C54.5831 33.1519 54.8644 33.825 55.0725 34.5131L57.3881 35.0269C57.8194 35.1225 58.125 35.505 58.125 35.9438V39.0562C58.1249 39.2696 58.052 39.4766 57.9184 39.643C57.7848 39.8094 57.5984 39.9252 57.39 39.9713L55.0744 40.485C54.8628 41.1816 54.5813 41.855 54.2344 42.495L55.5206 44.49C55.6371 44.6692 55.6885 44.883 55.6663 45.0956C55.6442 45.3082 55.5497 45.5068 55.3987 45.6581L53.1844 47.8894C53.0333 48.041 52.8349 48.1365 52.6222 48.16C52.4094 48.1836 52.1949 48.1337 52.0144 48.0188L50.0006 46.7306C49.3609 47.0769 48.6882 47.3583 47.9925 47.5706L47.4919 49.8825C47.447 50.0921 47.3317 50.28 47.1653 50.4151C46.9988 50.5501 46.7912 50.6242 46.5769 50.625Z" fill="#F2F2F2"/>
<path d="M47.6079 42.3338C47.4071 42.3335 47.2117 42.2687 47.0506 42.149C46.8894 42.0293 46.7709 41.861 46.7125 41.6689C46.6541 41.4768 46.659 41.271 46.7263 41.0819C46.7937 40.8927 46.92 40.7302 47.0866 40.6182C47.8062 40.1333 48.3356 39.414 48.5846 38.5827C48.8337 37.7514 48.7871 36.8596 48.4527 36.0588C48.1183 35.2581 47.5168 34.5979 46.7505 34.1907C45.9842 33.7834 45.1005 33.6542 44.2498 33.8251C44.1291 33.8498 44.0048 33.8506 43.8838 33.8273C43.7629 33.804 43.6477 33.7571 43.5449 33.6892C43.4421 33.6214 43.3536 33.534 43.2846 33.432C43.2156 33.33 43.1673 33.2154 43.1426 33.0948C43.1178 32.9741 43.1171 32.8498 43.1404 32.7288C43.1637 32.6079 43.2106 32.4927 43.2784 32.3899C43.3462 32.2871 43.4336 32.1987 43.5356 32.1296C43.6376 32.0606 43.7522 32.0123 43.8729 31.9876C44.6902 31.8218 45.5341 31.8397 46.3437 32.0398C47.1533 32.2399 47.9084 32.6173 48.5544 33.1447C49.2004 33.6721 49.7212 34.3364 50.0793 35.0896C50.4373 35.8428 50.6236 36.6661 50.6248 37.5001C50.625 38.4243 50.3973 39.3344 49.9621 40.1497C49.5268 40.965 48.8972 41.6604 48.1291 42.1745C47.975 42.2781 47.7936 42.3336 47.6079 42.3338ZM14.9998 28.1251C13.7912 28.1267 12.6143 27.7389 11.6434 27.0191C10.6725 26.2994 9.95941 25.2859 9.6097 24.1291C9.25999 22.9722 9.2923 21.7335 9.70186 20.5964C10.1114 19.4593 10.8764 18.4845 11.8835 17.8163C12.0904 17.6872 12.3394 17.6437 12.5778 17.6952C12.8162 17.7466 13.0252 17.889 13.1603 18.092C13.2955 18.295 13.3462 18.5427 13.3018 18.7824C13.2573 19.0222 13.1212 19.2353 12.9223 19.3763C12.2027 19.8594 11.6724 20.5766 11.4215 21.4062C11.1705 22.2358 11.2144 23.1266 11.5456 23.9276C11.8769 24.7285 12.475 25.3901 13.2386 25.8001C14.0022 26.2101 14.8842 26.3433 15.7348 26.177C15.9786 26.1289 16.2315 26.1791 16.4384 26.3168C16.6453 26.4545 16.7894 26.6685 16.8391 26.912C16.8634 27.0326 16.8637 27.1569 16.8399 27.2777C16.8161 27.3984 16.7687 27.5133 16.7004 27.6157C16.6321 27.7182 16.5443 27.8061 16.442 27.8745C16.3397 27.9429 16.2249 27.9905 16.1041 28.0145C15.7407 28.0885 15.3707 28.1255 14.9998 28.1251Z" fill="#F2F2F2"/>
<path d="M15 35.625H13.425C13.2108 35.6246 13.0032 35.5509 12.8368 35.4162C12.6703 35.2814 12.555 35.0937 12.51 34.8843L12.0094 32.5725C11.3135 32.3605 10.6408 32.0791 10.0013 31.7325L7.9875 33.0206C7.80742 33.1357 7.59343 33.1857 7.38098 33.1626C7.16854 33.1394 6.97039 33.0443 6.81938 32.8931L4.605 30.6806C4.45408 30.5293 4.35936 30.3311 4.33651 30.1186C4.31367 29.9062 4.36407 29.6923 4.47937 29.5125L5.7675 27.4987C5.42086 26.8579 5.13945 26.1839 4.9275 25.4868L2.61187 24.9731C2.40302 24.927 2.21615 24.811 2.08216 24.6443C1.94818 24.4775 1.87509 24.2701 1.875 24.0562V20.9437C1.87508 20.7303 1.94797 20.5233 2.08161 20.357C2.21524 20.1906 2.40164 20.0748 2.61 20.0287L4.92563 19.515C5.13375 18.8268 5.415 18.1537 5.76562 17.505L4.48125 15.5081C4.36479 15.3288 4.31336 15.1151 4.33554 14.9025C4.35772 14.6899 4.45217 14.4913 4.60312 14.34L6.8175 12.1087C6.96804 11.9561 7.1665 11.86 7.37955 11.8364C7.59259 11.8129 7.80726 11.8633 7.9875 11.9793L10.0013 13.2675C10.6409 12.9212 11.3137 12.6398 12.0094 12.4275L12.51 10.1156C12.5327 9.99211 12.58 9.87446 12.649 9.7696C12.7181 9.66474 12.8075 9.57482 12.9119 9.50517C13.0164 9.43551 13.1338 9.38755 13.2571 9.36412C13.3804 9.3407 13.5072 9.34228 13.6299 9.36878C13.7527 9.39529 13.8688 9.44617 13.9715 9.51841C14.0742 9.59065 14.1613 9.68278 14.2277 9.78933C14.2941 9.89588 14.3384 10.0147 14.358 10.1387C14.3776 10.2627 14.3721 10.3894 14.3419 10.5112L13.7231 13.38C13.6862 13.5523 13.6013 13.7106 13.4782 13.8367C13.3551 13.9628 13.1989 14.0514 13.0275 14.0925C12.1223 14.3146 11.257 14.6758 10.4625 15.1631C10.3128 15.2544 10.1406 15.302 9.96522 15.3003C9.78989 15.2987 9.61854 15.2479 9.47063 15.1537L7.61437 13.9668L6.46313 15.1256L7.65 16.9668C7.74611 17.1146 7.79836 17.2865 7.80069 17.4628C7.80301 17.639 7.75531 17.8123 7.66313 17.9625C7.17532 18.7558 6.81471 19.6207 6.59438 20.5256C6.55313 20.6964 6.46489 20.8523 6.33963 20.9756C6.21437 21.0988 6.0571 21.1846 5.88562 21.2231L3.75 21.6956V23.3025L5.88562 23.7768C6.0571 23.8153 6.21437 23.9011 6.33963 24.0244C6.46489 24.1476 6.55313 24.3035 6.59438 24.4743C6.80625 25.3593 7.16812 26.2218 7.66313 27.0375C7.85063 27.3431 7.84687 27.7293 7.65187 28.0312L6.46313 29.8875L7.61063 31.035L9.46875 29.8462C9.61682 29.7525 9.78811 29.7019 9.96335 29.7003C10.1386 29.6986 10.3108 29.7459 10.4606 29.8368C11.2781 30.3337 12.1406 30.6937 13.0238 30.9075C13.1951 30.9485 13.3514 31.0372 13.4745 31.1632C13.5976 31.2893 13.6825 31.4477 13.7194 31.62L14.1806 33.75H15C15.2486 33.75 15.4871 33.8487 15.6629 34.0245C15.8387 34.2004 15.9375 34.4388 15.9375 34.6875C15.9375 34.9361 15.8387 35.1746 15.6629 35.3504C15.4871 35.5262 15.2486 35.625 15 35.625ZM29.0625 34.6875C28.92 34.6878 28.7793 34.6556 28.6511 34.5932C28.5229 34.5309 28.4107 34.4401 28.323 34.3277C28.2352 34.2154 28.1743 34.0845 28.1449 33.9451C28.1155 33.8056 28.1183 33.6613 28.1531 33.5231L30.0281 26.0231C30.057 25.9032 30.1095 25.7902 30.1825 25.6908C30.2555 25.5913 30.3476 25.5074 30.4533 25.4439C30.5591 25.3804 30.6764 25.3385 30.7985 25.3208C30.9205 25.3031 31.0449 25.3098 31.1644 25.3406C31.2839 25.3702 31.3964 25.4231 31.4955 25.4963C31.5945 25.5694 31.6781 25.6615 31.7415 25.767C31.8049 25.8726 31.8469 25.9896 31.865 26.1114C31.883 26.2332 31.8769 26.3574 31.8469 26.4768L29.9719 33.9768C29.9219 34.1801 29.805 34.3606 29.6401 34.4895C29.4752 34.6183 29.2718 34.6881 29.0625 34.6875ZM34.6875 34.6875C34.5022 34.6874 34.3211 34.6325 34.167 34.5296C34.013 34.4267 33.8928 34.2804 33.8218 34.1093C33.7508 33.9382 33.7321 33.7499 33.768 33.5681C33.8039 33.3863 33.8929 33.2193 34.0238 33.0881L37.1119 30L34.0256 26.9137C33.8549 26.7369 33.7604 26.5001 33.7625 26.2543C33.7646 26.0085 33.8632 25.7733 34.037 25.5995C34.2109 25.4257 34.446 25.3271 34.6918 25.325C34.9376 25.3228 35.1744 25.4173 35.3512 25.5881L39.1012 29.3381C39.277 29.5139 39.3757 29.7523 39.3757 30.0009C39.3757 30.2495 39.277 30.4879 39.1012 30.6637L35.3512 34.4137C35.1749 34.5891 34.9362 34.6875 34.6875 34.6875ZM25.3125 34.6875C25.0638 34.6875 24.8251 34.5891 24.6488 34.4137L20.8988 30.6637C20.723 30.4879 20.6243 30.2495 20.6243 30.0009C20.6243 29.7523 20.723 29.5139 20.8988 29.3381L24.6488 25.5881C24.8256 25.4173 25.0624 25.3228 25.3082 25.325C25.554 25.3271 25.7891 25.4257 25.963 25.5995C26.1368 25.7733 26.2354 26.0085 26.2375 26.2543C26.2396 26.5001 26.1451 26.7369 25.9744 26.9137L22.8881 30L25.9744 33.0862C26.1057 33.2172 26.1952 33.3842 26.2316 33.5661C26.268 33.748 26.2496 33.9367 26.1787 34.1081C26.1078 34.2795 25.9877 34.4261 25.8335 34.5292C25.6793 34.6324 25.498 34.6874 25.3125 34.6875Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "application-development-company-in-calicut",
    title: "Application Development",
    peopleTitle: "Application Development Team",
    metaTitle: "Application Development Company In Calicut",
    metaDescription:
      "Wisbato builds custom web applications in Calicut. We craft user-friendly mobile and web applications to meet your unique business needs in Calicut. Get a free quote today!",
    description:
      "For a better online presence, we ensure functionality with our unique app services. Make your application more secure and free of bugs, as we follow neat structures of coding.",
    image: "/images/services/mobileapp",
    // image: "/images/services/mobileapp.webp",
    style: {
      backgroundColor: "#DCD2F7",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "<span>Boost productivity and engagement</span> with expertly developed web applications",
      subTitle:
        "Why Every Business Needs Web Application Development for Success",
      content: ` <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">Web application</a> development is crucial for any business, as it helps business houses sell their products or services on the internet, provide access to very important information, as well as also reach diverse audiences. Additionally, it avails features of consumer engagement, cross-platform compatibility, and centralized data that web applications have in streamlining all operations related to increasing customer experience. They also provide an inexpensive solution for businesses looking to increase their online presence and market scope.
`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Idea Generation and Planning",
        image:
          "/images/workingProcess/application development/Idea Generation and Planning.jpg",
        alt: "Idea Generation and Planning",
        list: [
          {
            id: 1,
            title: "Brainstorming Ideas",
            content:
              "At the very step of app development, the brainstorming of ideas will be done about how it will be feasible in the current market.",
          },
          {
            id: 2,
            title: "Identification of Target Audience",
            content:
              "You have to decide who the target audience of the app is, before moving further with your plans.",
          },
          {
            id: 3,
            title: "Defining the Purpose of the App",
            content:
              "Among the feasibility studies done around the app, the major purpose behind the development of the application will be analysed.",
          },
          {
            id: 4,
            title: "Market Research",
            content:
              "Prior to investing significant resources in the app's development and promotion, we will try to determine whether there is a market niche for the app idea.",
          },
        ],
      },
      {
        id: 2,
        title: "Wireframing and Prototyping",
        image:
          "/images/workingProcess/application development/Wireframing and Prototyping.jpg",
        alt: "Wireframing and Prototyping",
        list: [
          {
            id: 5,
            title: "Creation of a Rough Wireframe",
            content:
              "A basic illustration of the interface of the screen, which provides a demo about how the target audience is going to use the product, will be created.",
          },
          {
            id: 6,
            title: "Collecting Feedback on App Wireframes",
            content:
              "It is very essential to get feedback on the app wireframes at least from a larger majority of the target audience.",
          },
          {
            id: 7,
            title: "Making Use of the Tools",
            content:
              "The feedbacks are gathered with the help of certain tools.",
          },
          {
            id: 8,
            title: "Providing Mock-ups to the Clients",
            content:
              "Since we believe in an iterative approach, we will be offering as many mock-ups to the users as possible, which allow the strategy for the functionality of the app to change and adapt.",
          },
        ],
      },
      {
        id: 3,
        title: "Design",
        image: "/images/workingProcess/application development/Design.jpg",
        alt: "Design",
        list: [
          {
            id: 9,
            title: "Refining the Approved Wireframes",
            content: "The designs will be crafted by the UX and UI designers.",
          },
          {
            id: 10,
            title: "Creation of Visual Elements of the App",
            content:
              "As per the requirements of the app, these elements will be set up by the designers.",
          },
          {
            id: 11,
            title: "Production of High-Fidelity Mock-ups",
            content:
              "Once the information on what happens if the visual elements are tapped, dragged or swiped, our developers will be turning into a working app.",
          },
          {
            id: 12,
            title: "Establishment of Brand Guidelines",
            content:
              "This ensures that the branding of the app is consistent and well-implied to the designers and developers. After this, the designing of the market strategy will be done.",
          },
        ],
      },
      {
        id: 4,
        title: "Development",
        image: "/images/workingProcess/application development/Development.jpg",
        alt: "Development",
        list: [
          {
            id: 13,
            title: "Concluding Iterating through Feedback",
            content:
              "Feedback about the wireframes will be received and we will be making visible and large decisions.",
          },
          {
            id: 14,
            title: "Integration of Analytic Engine",
            content:
              "We will be cross-checking about and figuring out how the app is perceived and analyzing the general flow of users.",
          },
          {
            id: 15,
            title: "Organizing Events",
            content:
              "More user interactions will be done to know more about the users and their approach to using the app.",
          },
          {
            id: 16,
            title: "Further Iteration of the App",
            content:
              "To have the best possible outcome, we will be iterating the design of the app before it is released to the world.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Deployment",
        image:
          "/images/workingProcess/application development/Testing and Deployment.jpg",
        alt: "Testing and Deployment",
        list: [
          {
            id: 17,
            title: "Identification and Fixing of Bugs",
            content:
              "It will be done thoroughly, with the help of Quality assurance testers.",
          },
          {
            id: 18,
            title: "Functional Testing and Compatibility Testing",
            content:
              "Through this, we ensure that all features of the app are functioning as per the expectations. We make sure that the app is compatible with multiple operating systems through compatibility tests.",
          },
          {
            id: 19,
            title: "Performance Testing and Security Testing",
            content:
              "The speed and the level of responsiveness will be assessed through this testing. Finally, the security tests are done to detect and address any vulnerability.",
          },
          {
            id: 20,
            title: "Deployment",
            content:
              "Now that the app has passed all these tests, it will be deployed and made available for download through app stores or channels.",
          },
        ],
      },
      {
        id: 6,
        title: "Maintenance and Updates",
        image:
          "/images/workingProcess/application development/Maintenance and Updates.jpg",
        alt: "Maintenance and Updates",
        list: [
          {
            id: 21,
            title: "Monitoring is Resumed",
            content:
              "Even after the launch of the application, the performance of the apps will continue to be monitored by our developers.",
          },
          {
            id: 22,
            title: "Collecting Feedback",
            content:
              "Feedback will still be gathered if they have to be iterated. It could be about enhancing functionality or fixing bugs.",
          },
          {
            id: 23,
            title: "Release Updates",
            content:
              "Any more updates will be made as per the feedback gathered by the client. The issues identified in the previous step will be addressed swiftly.",
          },
        ],
      },
    ],
    outcomes: outcomes[8],
    FAQData: [
      {
        id: 1,
        title: "What types of web applications do you develop?",
        content:
          "We build almost everything in the e-commerce space, including online selling e-commerce platforms, CRM, content management systems, and many customized applications designed to meet certain business needs. Their solutions are dynamic and scalable, meaning they reflect the needs of businesses from various sectors.",
      },
      {
        id: 2,
        title: "How long does it take to develop a web application?",
        content:
          "Our timeframes for the development of web applications will depend upon the complexity and needs of a particular project. An easy application would take about 4 to 8 weeks; a complex system could take 10 to 12 weeks. We may also be in a position to define a much more specific timeline depending on your requirements and the scope of the project that we assess.",
      },
      {
        id: 3,
        title:
          " Can the web application be tailored to fulfill my custom business requirements?",
        content:
          "Absolutely. Our company provides customized web application solutions that are absolutely tailored to satisfy your business needs. We can provide you with one-of-a-kind features, industry-specific solutions, or any feature that you may want on the web that would give your users a personal touch. We work closely with you to ensure the application aligns with your goals and enhances operational efficiency.",
      },
      {
        id: 4,
        title:
          " Can you provide support and maintenance after the completion of the project?",
        content:
          "Yes, we provide support and maintenance services after the successful delivery of your project. for your app. This is achieved through performance monitoring, bug fixes, security updates, feature enhancements, etc. We use the industry's best technology for your project based on your requirements. It will ensure speed, security and optimized performance of your app.  ",
      },
      {
        id: 5,
        title: "  How do you make sure the web application is secure?",
        content:
          "We implement security through SSL encryption, secure authentication, regular security audits, and data protection protocols. We are not only up to date with the best industry practices but also strict with the standards set for regulatory compliance, thereby eliminating vulnerabilities in your web application and attacks.",
      },
      {
        id: 6,
        title:
          "  What technology do you use in the development of your web application?",
        content:
          "We use the best technologies from React, Angular, Node.js, Laravel, and PHP to create scalable and highly-performing web applications. Based on the specific requirements of your project, we determine the best technology stack for your project. We ensure speed, security, and optimization for the growth of the developed application.",
      },
    ],
  },
  {
    id: 3,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.6963 26.8011L54.5497 25.7867C54.2263 25.5015 53.7265 25.5339 53.4325 25.8632C53.1385 26.1983 53.1679 26.6981 53.4913 26.9804L54.6673 27.9976C54.9951 28.2901 55.4943 28.2616 55.7845 27.9212C56.0785 27.5949 56.0491 27.0863 55.6963 26.8011ZM54.0204 16.4756C54.1968 16.4756 54.4026 16.4138 54.5496 16.2874L55.6962 15.2702C56.049 14.9849 56.0784 14.4794 55.7844 14.15C55.4904 13.8236 54.9906 13.7913 54.6672 14.0764L53.4912 15.0908C52.9652 15.5494 53.2761 16.4756 54.0204 16.4756ZM54.0204 21.8353H55.3728C55.8138 21.8353 56.1666 21.4766 56.1666 21.0415C56.1666 20.5975 55.8138 20.2505 55.3728 20.2505H54.0204C53.5794 20.2505 53.2266 20.5975 53.2266 21.0415C53.2266 21.4766 53.5794 21.8353 54.0204 21.8353ZM27.5889 49.3163H30.6467C30.7511 49.317 30.8546 49.297 30.9512 49.2573C31.0479 49.2177 31.1356 49.1592 31.2095 49.0854C31.2833 49.0115 31.3418 48.9237 31.3814 48.8271C31.4211 48.7305 31.4411 48.627 31.4405 48.5225C31.4405 48.0874 31.0877 47.7287 30.6467 47.7287H27.5889C27.1479 47.7287 26.7951 48.0874 26.7951 48.5225C26.7944 48.627 26.8145 48.7305 26.8542 48.8271C26.8938 48.9237 26.9523 49.0115 27.0261 49.0854C27.0999 49.1592 27.1877 49.2177 27.2843 49.2573C27.381 49.297 27.4845 49.317 27.5889 49.3163ZM50.1689 16.5608C49.7279 16.8577 49.2281 17.1311 48.7577 17.3957V24.6783C49.2281 24.9429 49.7279 25.2281 50.1689 25.5133V16.5608ZM42.2012 23.9581C41.7896 23.8522 41.378 23.7581 40.937 23.6728L40.4078 27.395C40.349 27.8918 40.1138 28.3035 39.7022 28.5975C39.32 28.8945 38.8202 29.0121 38.3498 28.9385L36.1447 28.5769C35.9683 28.5446 35.8213 28.4828 35.7037 28.3769C34.2631 27.0128 32.94 26.2513 31.617 25.9984C31.4406 25.9895 31.2642 25.969 31.0878 25.9249C28.2065 25.6808 24.8253 27.4567 21.8559 29.0238C21.4443 29.2531 21.0033 29.4765 20.5917 29.6882C20.3271 29.8263 19.9449 30.1203 19.7685 31.0288L18.1809 39.508C18.1342 40.0103 18.9612 40.6743 19.4451 39.3375L21.7678 32.6693C21.8121 32.5465 21.8864 32.4367 21.984 32.3499C22.0815 32.2631 22.1993 32.2021 22.3265 32.1724L25.4136 31.3168C26.013 31.1559 26.6034 31.7282 26.3544 32.3606L21.5914 45.0559H31.1467L33.9398 31.6315C33.9986 31.2521 34.3514 30.9875 34.7336 30.9964L39.5847 31.1787C40.5549 31.2199 41.6721 30.4172 41.7899 29.5911C41.9663 28.3563 42.0251 27.1714 42.0839 25.9042C42.1424 25.2693 42.1718 24.6137 42.2012 23.9581ZM43.3773 29.603C44.0241 29.7412 44.4651 30.2998 44.4651 30.9671V45.056H32.7636L35.3509 32.6165L39.5258 32.7635C41.1134 32.8282 43.0833 31.5787 43.3479 29.8264C43.3773 29.75 43.3773 29.6765 43.3773 29.603ZM48.2579 46.6408C47.6699 48.8401 46.1117 50.4129 44.4063 50.4129H13.8C12.0948 50.4129 10.5658 48.84 9.97785 46.6408H48.2579ZM6.33213 50.413C5.83233 50.413 5.42073 50.0014 5.42073 49.4927V20.5123C5.42073 20.0066 5.83233 19.6037 6.33213 19.6037H8.50785L8.74305 20.3329C9.03705 21.212 9.83085 21.7941 10.7718 21.7941H13.6237C14.5645 21.7941 15.3584 21.212 15.6523 20.3329L15.8875 19.6037H18.0631C18.5629 19.6037 18.9745 20.0066 18.9745 20.5123V27.986H15.1524C13.506 27.986 12.1534 29.3179 12.1534 30.9673V45.0561H9.00765C8.50113 45.0561 8.15757 45.5398 8.21385 45.9557C8.47845 47.7727 9.21345 49.3369 10.2718 50.4129H6.33213V50.413ZM10.1836 19.6037L10.2424 19.8478C10.3306 20.0713 10.507 20.2065 10.7716 20.2065H13.6236C14.0587 20.2065 14.1361 19.894 14.241 19.6037H10.1836ZM16.5931 39.37C16.5355 40.5909 17.4393 41.7044 18.7099 41.7044C19.2979 41.7044 20.3857 41.4722 20.9444 39.8668L23.1495 33.5869L24.3255 33.2605L19.886 45.0561H13.7412V30.9673C13.7412 30.194 14.388 29.5707 15.1524 29.5707H18.5923C18.4453 29.9089 18.2983 30.2909 18.2101 30.7349L16.5931 39.2729V39.37ZM31.8228 24.4255C31.6758 24.4019 31.4994 24.3813 31.323 24.3608C30.1176 24.0756 29.206 22.976 29.206 21.6647C29.206 20.1329 30.4408 18.8951 31.9698 18.8951C33.4692 18.8951 34.7335 20.1329 34.7335 21.6647C34.7335 23.1877 33.4693 24.4343 31.9698 24.4343C31.911 24.4343 31.8522 24.4343 31.8228 24.4255ZM12.9768 18.019V11.7949C12.9768 10.5777 13.9764 9.58387 15.2113 9.58387H38.1146C39.3494 9.58387 40.3197 10.5776 40.3197 11.7949V18.5277C39.9081 18.6011 39.4671 18.6747 39.0261 18.7483C38.1147 18.8747 37.4385 19.6891 37.4385 20.6623V21.412C37.4385 22.3852 38.1147 23.1995 39.0261 23.3348C39.1437 23.3465 39.2613 23.3671 39.3789 23.3877L38.8497 27.1833C38.8421 27.2941 38.7437 27.3939 38.5851 27.3627L36.6153 27.0452C35.8215 26.3278 35.0571 25.7575 34.2926 25.334C35.498 24.5607 36.3213 23.1995 36.3213 21.6647C36.3213 19.2568 34.3515 17.3104 31.97 17.3104C29.5591 17.3104 27.6187 19.2567 27.6187 21.6647C27.6187 22.7438 28.0009 23.7375 28.6771 24.5078C26.0898 24.9958 23.5026 26.3689 21.121 27.6154C20.9446 27.7213 20.7388 27.8271 20.533 27.9212V20.5121C20.533 19.1391 19.4158 18.0189 18.0633 18.0189L12.9768 18.019ZM47.1701 23.9287C44.8767 22.9437 42.2013 22.2058 39.2612 21.7618C39.1142 21.7413 39.026 21.5913 39.026 21.4119V20.6621C39.026 20.4829 39.1142 20.3329 39.2612 20.3122C42.2013 19.88 44.8769 19.1391 47.1701 18.1571V23.9287ZM51.7566 15.0172V27.0657C51.7566 27.7215 50.9955 28.1029 50.463 27.6802C48.7872 26.3278 46.4939 25.1959 43.7889 24.3814C43.6571 25.5951 43.6595 26.7812 43.5537 28.0184C44.9649 28.2507 46.0529 29.4855 46.0529 30.9673V45.0561H49.1988C49.6987 45.0561 50.0574 45.4561 49.9926 45.9557C49.5222 49.4516 47.1701 52.0006 44.4063 52.0006H6.33213C4.97961 52.0006 3.83301 50.8804 3.83301 49.4927V20.5123C3.83301 19.1392 4.97961 18.019 6.33213 18.019H11.389V11.7949C11.389 9.70147 13.0942 7.99927 15.2112 7.99927H38.1145C40.202 7.99927 41.9072 9.70159 41.9072 11.7949V18.1895C45.4353 17.3633 48.4343 16.0521 50.4629 14.3938C50.9678 13.9825 51.7566 14.3307 51.7566 15.0172ZM23.267 11.9213C23.267 12.3535 23.6198 12.7121 24.0608 12.7121H29.2647C29.7057 12.7121 30.0585 12.3535 30.0585 11.9213C30.0585 11.4773 29.7057 11.1275 29.2647 11.1275H24.0608C23.9564 11.1269 23.8528 11.1469 23.7562 11.1866C23.6596 11.2262 23.5718 11.2847 23.498 11.3585C23.4241 11.4324 23.3657 11.5201 23.326 11.6168C23.2864 11.7134 23.2663 11.8169 23.267 11.9213Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "branding-agency-in-calicut",
    title: "Branding",
    peopleTitle: "Branding Team",
    metaTitle: "Top Branding Agency In Calicut | Wisbato",
    metaDescription:
      "Discover the best branding and advertising agency in Calicut. Brand your business with Wisbato for exceptional results.",
    description:
      "Enhance brand awareness with us, as we could aid you to stand out from the ordinary. Refine the visual appeal of your brand with our strong brand strategies.",
    image: "/images/services/branding",
    // image: "/images/services/branding.webp",
    style: {
      backgroundColor: "#F6C4FE",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "Create a Distinct Identity for <span>your Brand</span> with Us",
      subTitle: "How important is Branding?",
      content: ` <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">Branding </a>is an important part of your business, because it gives your business a unique identity that sets it apart from competitors.A <a href="https://en.wikipedia.org/wiki/Brand" target="_blank">brand </a>isn't just a logo or a name; it's the entire experience your customers have with your product or service. Whether it's a name, a design, or a symbol, these elements come together to create an image that people recognize and trust. In a crowded marketplace, having a strong brand helps your business stand out, communicate its values, and build lasting relationships with customers. It’s how customers remember you and choose you over others.
`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Research and Analysis",
        image: "/images/workingProcess/branding/Research and Analysis.jpg",
        alt: "branding agency in Calicut",
        list: [
          {
            id: 1,
            title: "Conducting Research",
            content:
              "As the very first step, we will determine the present condition of your brand and the path you must consider to unlock your potential.",
          },
          {
            id: 2,
            title: "Gathering of insights",
            content:
              "To collect and know about the insights, our team will be conducting surveys, interviews, and market research.",
          },
          {
            id: 3,
            title: "Identification of opportunities and challenges",
            content:
              "Industry trends are analyzed to identify opportunities and challenges.",
          },
          {
            id: 4,
            title: "Performing research facilities",
            content:
              "For the establishment of the vision, mission, values, and strategies for your company, certain research facilities are performed.",
          },
        ],
      },
      {
        id: 2,
        title: "Defining Brand Strategy",
        image: "/images/workingProcess/branding/Defining Brand Strategy.jpg",
        alt: "best branding company in Kozhikode",
        list: [
          {
            id: 5,
            title: "Initial development of brand strategy",
            content:
              "Here, we will be figuring out the direction in which the brand should proceed to grow the business.",
          },
          {
            id: 6,
            title: "Assessment of the brand image",
            content:
              "Now, we will assess and define how the brand wants to be perceived by its clients.",
          },
          {
            id: 7,
            title: "Definition of brand positioning",
            content:
              "In this stage, our team will define the positioning of your brand and find out how it differs from its competitors.",
          },
          {
            id: 8,
            title: "Development of brand architecture",
            content:
              "In the final step of defining brand strategy, the brand architecture will be developed, and the relationship between the company's master brand and sub-brands, if any will be revealed.",
          },
        ],
      },
      {
        id: 3,
        title: "Creation of Brand Identity and Messaging",
        image:
          "/images/workingProcess/branding/Creation of Brand Identity and Messaging.jpg",
        alt: "branding agency for your business growth",
        list: [
          {
            id: 9,
            title: "Designing visual elements",
            content:
              "The visual elements of the brand such as the colour palette, logo, typography, and imagery will be designed.",
          },
          {
            id: 10,
            title: "Development of brand guidelines",
            content:
              "To ensure consistency in how the brand is showcased in diverse channels and touchpoints, specific brand guidelines are developed.",
          },
          {
            id: 11,
            title: "Preparation of brand messaging",
            content:
              "The messaging of the brand such as taglines, key messages, and value propositions are crafted.",
          },
          {
            id: 12,
            title: "Decision of brand voice",
            content:
              "The brand voice, along with brand tone, is defined, as they reflect the personality and values of the brand.",
          },
        ],
      },
      {
        id: 4,
        title: "Brand Implementation and Activation",
        image:
          "/images/workingProcess/branding/Brand Implementation and Activation.jpg",
        alt: "Brand Implementation and Activation",
        list: [
          {
            id: 13,
            title: "Launch of brand identity",
            content:
              "Through multiple touchpoints, the brand identity and messaging are rolled out. It would comprise marketing materials such as websites, advertisements, brochures, etc.",
          },
          {
            id: 14,
            title: "Implementation of marketing campaign",
            content:
              "Marketing campaigns are launched with the motive of introducing the brand to the target audience.",
          },
          {
            id: 15,
            title: "Engaging in PR activities",
            content:
              "Companies must get more publicity, so we attain that buzz and media coverage, and we will engage in public relations activities.",
          },
          {
            id: 16,
            title: "Promotion of brand advocacy",
            content:
              "Promote brand advocacy by establishing relationships with customers and encouraging user-generated content and testimonials.",
          },
        ],
      },
      {
        id: 5,
        title: "Monitor and Manage Brand Perception",
        image:
          "/images/workingProcess/branding/Monitor and Manage Brand Perception.jpg",
        alt: "Monitor and Manage Brand Perception",

        list: [
          {
            id: 17,
            title: "Tracking of KPIs and brand metrics",
            content:
              "Since the assessment of the effectiveness of branding efforts is crucial, we will track brand metrics and KPIs.",
          },
          {
            id: 18,
            title: "Monitoring for feedback and sentiment",
            content:
              "Reviews, social media, and other channels will be monitored for availing the feedback and sentiment from the customers.",
          },
          {
            id: 19,
            title: "Addressing issues",
            content:
              "If any issues or negative perceptions arise, they will be addressed rapidly and proactively.",
          },
        ],
      },
      {
        id: 6,
        title: "Brand Evolution and Adaptation",
        image:
          "/images/workingProcess/branding/Brand Evolution and Adaptation.jpg",
        alt: "Brand Evolution and Adaptation",
        list: [
          {
            id: 20,
            title: "Update the brand strategy",
            content:
              "In accordance with the changes in consumer preferences, market, and competitive landscape, we will continuously evaluate and evolve the brand strategy.",
          },
          {
            id: 21,
            title: "Refreshing brand identity",
            content:
              "To stay relevant in the market, we will be refreshing the brand identity and messaging.",
          },
          {
            id: 22,
            title: "Sticking to the goals of the brand",
            content:
              "While we are updating the brand identity, we ensure that we are maintaining alignment with the objectives and values of the brand.",
          },
        ],
      },
    ],
    outcomes: outcomes[5],
    FAQData: [
      {
        id: 1,
        title: "Why is business branding important for companies in Calicut?",
        content:
          "Branding plays a crucial role in helping businesses in Calicut stand out in a competitive market. A strong brand helps establish trust with customers, improves recognition, and differentiates your company from competitors. For local businesses, branding also enhances the connection with the community, helping you build long-term loyalty.",
      },
      {
        id: 2,
        title: "How can branding improve my business presence in Calicut?",
        content:
          "Effective branding boosts your visibility and reputation in Calicut by creating a consistent and professional image. It helps you communicate your business values and promises clearly, whether through logos, color schemes, or messaging. This leads to increased customer trust and a stronger market presence, both locally and online.",
      },
      {
        id: 3,
        title:
          "What branding services are essential for small businesses in Calicut?",
        content: `Small or high businesses in Calicut should focus on essential branding services such as logo design, brand messaging, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank">social media branding</a>, and business card design. These elements create a cohesive brand identity that reflects your company's values and helps attract and retain customers.
`,
      },
      {
        id: 4,
        title:
          " Can local branding help my business reach more customers in Calicut?",
        content:
          "Yes, focusing on local branding strategies can significantly increase your customer base in Calicut. By creating marketing campaigns and brand messaging tailored to local interests and culture, your business will resonate more with Calicut residents. Utilizing local SEO techniques in your branding also ensures that potential customers in the area can easily find you.",
      },
      {
        id: 5,
        title:
          " How long does it take to see results from branding efforts for businesses in Calicut?",
        content:
          "Branding is a long-term investment, and it takes time to see full results. However, local businesses in Calicut can start seeing increased awareness and customer engagement within a few months if branding efforts are consistent across digital and physical platforms. Over time, a well-executed brand strategy builds trust and leads to lasting customer relationships.",
      },
    ],
  },
  {
    id: 4,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.3028 4.69702H3.69715C1.65844 4.69702 0 6.35546 0 8.39405V44.0909C0 46.1295 1.65844 47.7879 3.69715 47.7879H21.4893L20.7696 53.5452H17.7879C17.5548 53.5452 17.3312 53.6378 17.1664 53.8027C17.0016 53.9675 16.909 54.191 16.909 54.4241C16.909 54.6572 17.0016 54.8808 17.1664 55.0456C17.3312 55.2104 17.5548 55.303 17.7879 55.303H42.2121C42.4452 55.303 42.6688 55.2104 42.8336 55.0456C42.9984 54.8808 43.091 54.6572 43.091 54.4241C43.091 54.191 42.9984 53.9675 42.8336 53.8027C42.6688 53.6378 42.4452 53.5452 42.2121 53.5452H39.2305L38.5107 47.7879H56.3028C58.3414 47.7879 60 46.1295 60 44.0909V8.39405C60 6.35546 58.3416 4.69702 56.3028 4.69702ZM22.5411 53.5452L23.2609 47.7879H26.4956L26.813 49.0571C26.9899 49.7682 27.3999 50.3997 27.9776 50.8507C28.5552 51.3017 29.2673 51.5463 30.0001 51.5454C30.733 51.5463 31.445 51.3017 32.0227 50.8507C32.6003 50.3997 33.0103 49.7682 33.1873 49.0571L33.5046 47.7879H36.7393L37.4589 53.5452H22.5411ZM28.3075 47.7879H31.6924L31.4817 48.6307C31.3114 49.3119 30.7022 49.7876 29.9999 49.7876C29.2976 49.7876 28.6884 49.3118 28.518 48.6307L28.3075 47.7879ZM58.2422 44.0909C58.2422 45.1602 57.3722 46.0301 56.3028 46.0301H3.69715C2.62781 46.0301 1.75781 45.1602 1.75781 44.0909V8.39405C1.75781 7.32472 2.62781 6.45483 3.69715 6.45483H56.3028C57.3722 6.45483 58.2422 7.32472 58.2422 8.39405V44.0909Z" fill="#F2F2F2"/>
<path d="M49.7274 8.45459H4.63672C4.52129 8.45457 4.407 8.4773 4.30036 8.52146C4.19372 8.56562 4.09682 8.63036 4.0152 8.71198C3.93359 8.7936 3.86885 8.89049 3.82468 8.99713C3.78052 9.10378 3.7578 9.21807 3.75781 9.3335V43.1515C3.75781 43.637 4.15121 44.0304 4.63672 44.0304H6.51559C7.00109 44.0304 7.39449 43.637 7.39449 43.1515C7.39451 43.0361 7.37179 42.9218 7.32763 42.8151C7.28348 42.7085 7.21875 42.6116 7.13714 42.53C7.05554 42.4484 6.95866 42.3836 6.85203 42.3395C6.7454 42.2953 6.63112 42.2726 6.5157 42.2726H5.51574V10.2124H49.7274C49.9605 10.2124 50.1841 10.1198 50.3489 9.95498C50.5137 9.79015 50.6063 9.5666 50.6063 9.3335C50.6063 8.84799 50.2129 8.45459 49.7274 8.45459ZM55.3639 8.45459H53.485C53.3696 8.45457 53.2553 8.4773 53.1487 8.52146C53.042 8.56562 52.9451 8.63036 52.8635 8.71198C52.7819 8.7936 52.7172 8.89049 52.673 8.99713C52.6288 9.10378 52.6061 9.21807 52.6061 9.3335C52.6061 9.5666 52.6987 9.79015 52.8636 9.95498C53.0284 10.1198 53.2519 10.2124 53.485 10.2124H54.485V42.2726H10.2732C10.0401 42.2726 9.81655 42.3652 9.65172 42.53C9.4869 42.6948 9.3943 42.9184 9.3943 43.1515C9.3943 43.637 9.7877 44.0304 10.2732 44.0304H55.3638C55.8493 44.0304 56.2427 43.637 56.2427 43.1515V9.3335C56.2427 9.21808 56.22 9.10378 56.1759 8.99714C56.1317 8.8905 56.067 8.79361 55.9854 8.71199C55.9038 8.63037 55.8069 8.56563 55.7002 8.52146C55.5936 8.4773 55.4793 8.45457 55.3639 8.45459Z" fill="#F2F2F2"/>
<path d="M41.9654 18.1856C41.8873 18.0858 41.7886 18.0041 41.6761 17.9461C41.5635 17.888 41.4397 17.855 41.3132 17.8492L20.6467 16.9098C20.6306 16.909 20.6145 16.9087 20.5984 16.9089C20.4757 16.5066 20.2175 16.1592 19.8677 15.9256L17.3368 14.2383C17.1428 14.1099 16.9058 14.0636 16.6778 14.1096C16.4498 14.1556 16.2493 14.2901 16.1203 14.4837C15.9912 14.6772 15.9442 14.9141 15.9895 15.1422C16.0347 15.3704 16.1686 15.5713 16.3618 15.701L18.8925 17.388C18.9045 17.396 18.9133 17.408 18.9173 17.4219L22.141 28.7048C22.2415 29.0566 22.407 29.3728 22.6195 29.6458L21.44 32.0048C21.156 32.5726 21.1858 33.2339 21.5195 33.7739C21.6379 33.9657 21.7908 34.1339 21.9705 34.27C21.7319 34.6857 21.6065 35.1568 21.6068 35.6361C21.6068 37.1567 22.844 38.3937 24.3645 38.3937C25.885 38.3937 27.1222 37.1566 27.1222 35.6361C27.1222 35.2835 27.0549 34.9464 26.9337 34.6362H34.9466C34.822 34.9548 34.7581 35.294 34.7582 35.6361C34.7582 37.1567 35.9954 38.3937 37.5159 38.3937C39.0364 38.3937 40.2735 37.1566 40.2735 35.6361C40.2735 35.195 40.1689 34.7782 39.9839 34.4081C40.0751 34.326 40.148 34.2256 40.1979 34.1135C40.2478 34.0014 40.2735 33.88 40.2735 33.7573C40.2735 33.5242 40.1809 33.3007 40.0161 33.1359C39.8513 32.971 39.6277 32.8784 39.3946 32.8784H23.0659C23.0534 32.8784 23.0322 32.8784 23.0145 32.8497C22.9968 32.8211 23.0063 32.8023 23.0119 32.7909L24.0985 30.6179C24.43 30.7035 24.7745 30.7266 25.1145 30.6861L37.4644 29.2332C38.2401 29.1433 38.9673 28.8096 39.5411 28.28C40.115 27.7504 40.506 27.0524 40.6578 26.2864L42.135 18.8996C42.1599 18.7754 42.1576 18.6473 42.1283 18.524C42.099 18.4008 42.0434 18.2853 41.9654 18.1856ZM37.5156 34.6365C38.067 34.6365 38.5155 35.0851 38.5155 35.6363C38.5155 36.1877 38.067 36.6362 37.5156 36.6362C36.9643 36.6362 36.5158 36.1877 36.5158 35.6363C36.5158 35.0849 36.9643 34.6365 37.5156 34.6365ZM24.3643 34.6365C24.9156 34.6365 25.3641 35.0849 25.3641 35.6363C25.3641 36.1877 24.9156 36.6362 24.3643 36.6362C23.8129 36.6362 23.3644 36.1877 23.3644 35.6363C23.3644 35.0849 23.8129 34.6365 24.3643 34.6365ZM22.2089 22.5453L21.1075 18.6904L24.6214 18.8501L25.2306 22.5453H22.2089ZM24.9092 28.9403C24.6733 28.969 24.435 28.9123 24.2372 28.7806C24.0395 28.6488 23.8954 28.4507 23.8309 28.222L22.7112 24.3031H25.5204L26.2588 28.7816L24.9092 28.9403ZM30.0611 28.3342L28.0066 28.576L27.3021 24.3032H30.0611V28.3342ZM30.0611 22.5453H27.0122L26.4164 18.9318L30.0611 19.0975V22.5453ZM34.5121 27.8105L31.8189 28.1274V24.3031H34.8296L34.5121 27.8105ZM34.9887 22.5453H31.8189V19.1773L35.2793 19.3346L34.9887 22.5453ZM38.9339 25.9419C38.8543 26.3436 38.6492 26.7097 38.3482 26.9875C38.0472 27.2652 37.6658 27.4403 37.259 27.4875L36.2961 27.6008L36.5945 24.3032H39.2616L38.9339 25.9419ZM39.6133 22.5453H36.7538L37.0371 19.4145L40.2106 19.5588L39.6133 22.5453Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "ecommerce-development-company-in-calicut",
    title: "ECommerce Development",
    peopleTitle: "Ecommerce Development Team",
    metaTitle: "Leading E-commerce Web Designing Company In Calicut",
    metaDescription:
      "Are you planning to create an E-Commerce website for your business in Calicut? Wisbato is Leading E-Commerce web design & development company in Calicut | contact now",
    description:
      "With our tailored eCommerce solutions, you may provide a unique shopping experience to your clients, besides boosting your sales.",
    image: "/images/services/ecommerce",
    // image: "/images/services/ecommerce.webp",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Be the Exact Virtual face of <span>your Business</span> through eCommerce development",
      subTitle: "Why do businesses need Ecommerce?",
      content: `In 2024 having an <a href="https://en.wikipedia.org/wiki/E-commerce" target="_blank">e-commerce website</a> is an essential part for any business looking to grow and stay competitive. A good e-commerce web development company allows your business to reach all over customers 24/7, and access your website everywhere and expand your market beyond local limits. It offers an easy shopping experience for customers, allowing them to browse and buy from the comfort of their homes or everywhere. And we add client reviews and rating sections that get a trust for your customers. Additionally, an online e-store helps increase your brand’s visibility and credibility while providing valuable insights into customer behavior and preferences. By having an e-commerce website in Calicut, your business can increase sales, improve customer engagement, and trust. So build an Ecommerce website.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Requirement Analysis",
        image: "/images/workingProcess/Ecommerce/RequirementAnalysis.jpg",
        alt: "Ecommerce development company in Calicut",
        list: [
          {
            id: 1,
            title: "Client Consultation",
            content:
              "Initiating discussions with the client to understand their business model, goals and target audience.",
          },
          {
            id: 2,
            title: "Market Research",
            content:
              "Conducting thorough market research to identify industry trends, competitors, and consumer preferences.",
          },
          {
            id: 3,
            title: "Feature Identification",
            content:
              "Determining the essential features and functionalities required for the e-commerce platform.",
          },
          {
            id: 4,
            title: "Scope Definition",
            content:
              "Defining the project scope, including deliverables, timeline, and budget constraints.",
          },
          {
            id: 5,
            title: "User Persona Creation",
            content:
              "Developing detailed user personas to tailor the platform to the target audience's needs.",
          },
          {
            id: 6,
            title: "Documentation",
            content:
              "Documenting all gathered requirements and insights for reference throughout the development process.",
          },
        ],
      },
      {
        id: 2,
        title: "Planning and Strategy",
        image: "/images/workingProcess/Ecommerce/Planning and Strategy new.jpg",
        alt: " Ecommerce website development company in calicut ",
        list: [
          {
            id: 7,
            title: "Platform Selection",
            content:
              "Picking out the appropriate ecommerce platform (e.g., WooCommerce, Shopify, Magento) based on client requirements and scalability needs.",
          },
          {
            id: 8,
            title: "Technology Stack Definition",
            content:
              "Determining the technology stack required for both front-end and back-end development.",
          },
          {
            id: 9,
            title: "Resource Allocation",
            content:
              "Assigning roles and responsibilities to team members, including developers, designers, and project managers.",
          },
          {
            id: 10,
            title: "Milestone Setting",
            content:
              "Establishing clear milestones and checkpoints to track progress and ensure timely delivery.",
          },
          {
            id: 11,
            title: "Risk Assessment",
            content:
              "Identifying potential risks and challenges and developing mitigation strategies to address them.",
          },
          {
            id: 12,
            title: "Budget Planning",
            content:
              "Preparing a detailed budget plan accounting for development costs, third-party integrations, and post-launch maintenance.",
          },
        ],
      },
      {
        id: 3,
        title: "Design and User Experience (UX)",
        image:
          "/images/workingProcess/Ecommerce/Design and User Experience (UX).jpg",
        alt: " Develop ecommerce website with best UX ",

        list: [
          {
            id: 13,
            title: "Wireframing",
            content:
              "Creating wireframes to visualize the layout and structure of the ecommerce platform.",
          },
          {
            id: 14,
            title: "UI Design",
            content:
              "Developing a visually appealing user interface that aligns with the client's branding and enhances user experience.",
          },
          {
            id: 15,
            title: "Responsive Design",
            content:
              "Ensuring the platform is responsive and optimized for seamless user experience across various devices and screen sizes.",
          },
          {
            id: 16,
            title: "Prototype Development",
            content:
              "Building interactive prototypes to test navigation flow and user interactions.",
          },
          {
            id: 17,
            title: "Accessibility Considerations",
            content:
              "Incorporating accessibility features to ensure the platform is usable by individuals with disabilities.",
          },
          {
            id: 18,
            title: "Feedback Iteration",
            content:
              "Gathering feedback from stakeholders and iterating on the design to refine and improve usability.",
          },
        ],
      },
      {
        id: 4,
        title: "Development and Implementation",
        image:
          "/images/workingProcess/Ecommerce/Development and Implementation.jpg",
        alt: " Ecommerce designers in Calicut  ",

        list: [
          {
            id: 19,
            title: "Front-end Development",
            content:
              "Writing clean and efficient front-end code using HTML, CSS, and JavaScript to bring the design to life.",
          },
          {
            id: 20,
            title: "Back-end Development",
            content:
              "Developing robust back-end functionalities using appropriate programming languages and frameworks (e.g., PHP, Node.js, Django).",
          },
          {
            id: 21,
            title: "Database Design",
            content:
              "Designing and implementing a scalable database architecture to manage product data, user information, and transactions.",
          },
          {
            id: 22,
            title: "Integration of Third-party APIs",
            content:
              "Integrating payment gateways, shipping providers, and other third-party services to enable seamless transactions and order management.",
          },
          {
            id: 23,
            title: "Security Implementation",
            content:
              "Implementing security measures such as HTTPS encryption, data encryption, and user authentication to protect sensitive information.",
          },
          {
            id: 24,
            title: "Version Control",
            content:
              "Utilizing version control systems like Git to track changes and collaborate effectively among team members.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Quality Assurance (QA)",
        image:
          "/images/workingProcess/Ecommerce/Testing and Quality Assurance (QA).jpg",
        alt: "best ecommerce web development company in Calicut  ",

        list: [
          {
            id: 25,
            title: "Functional Testing",
            content:
              "Testing each feature and functionality to ensure they work as intended according to the requirements.",
          },
          {
            id: 26,
            title: "Compatibility Testing",
            content:
              "Verifying cross-browser and cross-device compatibility to ensure a consistent user experience.",
          },
          {
            id: 27,
            title: "Performance Testing",
            content:
              "Assessing the platform's performance under various load conditions and optimizing for speed and responsiveness.",
          },
          {
            id: 28,
            title: "Security Testing",
            content:
              "Conducting security audits and penetration testing to identify and address potential vulnerabilities.",
          },
          {
            id: 29,
            title: "Usability Testing",
            content:
              "Gathering feedback from real users to assess the platform's usability and identify areas for improvement.",
          },
          {
            id: 30,
            title: "Bug Fixing and Iteration",
            content:
              "Addressing any bugs or issues discovered during testing and iterating on the platform to refine and enhance its performance.",
          },
        ],
      },
      {
        id: 6,
        title: "Deployment and Maintenance",
        image:
          "/images/workingProcess/Ecommerce/Deployment and Maintenance.jpg",
        alt: "Deployment and Maintenance for ecommerce website",
        list: [
          {
            id: 31,
            title: "Deployment Planning",
            content:
              "Planning the deployment process, including server setup, domain configuration, and migration to the production environment.",
          },
          {
            id: 32,
            title: "Launch Preparation",
            content:
              "Performing final checks and user acceptance testing to ensure the platform is ready for launch.",
          },
          {
            id: 33,
            title: "Go-live Strategy",
            content:
              "Coordinating the launch of the ecommerce platform, including marketing initiatives and promotional campaigns.",
          },
          {
            id: 34,
            title: "Post-launch Monitoring",
            content:
              "Monitoring the platform's performance, user feedback, and analytics to identify any issues and opportunities for improvement.",
          },
          {
            id: 35,
            title: "Ongoing Support",
            content:
              "Providing continuous support and maintenance to address any post-launch issues, apply updates, and implement new features or enhancements.",
          },
          {
            id: 36,
            title: "Performance Optimization",
            content:
              "Regularly optimizing the platform for speed, security, and scalability to ensure optimal performance and user experience.",
          },
        ],
      },
    ],
    outcomes: outcomes[1],
    FAQData: [
      {
        id: 1,
        title:
          " What services does an e-commerce web development company in Calicut offer?",
        content: `An e-commerce web development company in Calicut typically offers a range of services customized for online businesses. These services include custom e-commerce website design, payment gateway integration, secure shopping cart development, SEO optimization for online stores, and ongoing maintenance. Many companies also provide solutions for inventory management and  <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a> to complement the e-commerce platform.
`,
      },
      {
        id: 2,
        title:
          " Why should I choose a Calicut-based company for my e-commerce web development?",
        content:
          "Choosing a Calicut-based e-commerce web development company provides you with the advantage of localized expertise. These companies are well-versed in the regional market trends, business culture, and customer preferences, allowing them to create best solutions that resonate with local and global audiences. Additionally, they offer affordable rates without compromising on quality, making them a cost-effective option for businesses of all sizes.",
      },
      {
        id: 3,
        title:
          " How long does it take to develop a custom e-commerce website in Calicut?",
        content:
          "The timeline for developing a custom e-commerce website depends on the complexity of your requirements. A basic e-commerce site with standard features could take 5-7 weeks, while more complex platforms with integrations, custom designs, and advanced functionality may take 8-12 weeks or longer. Calicut-based companies generally offer agile development processes to ensure faster project delivery without sacrificing quality.",
      },
      {
        id: 4,
        title:
          " What technologies do e-commerce web development companies in Calicut use?",
        content:
          "E-commerce web development companies in Calicut use a variety of technologies depending on the specific needs of the project. Popular platforms include WooCommerce for WordPress, Magento, Shopify, and custom solutions using frameworks like Laravel or Node.js. They also use tools like HTML5, CSS3, JavaScript, and modern front-end frameworks like React or Vue.js to ensure that the website is fast, responsive, and user-friendly.",
      },
      {
        id: 5,
        title: " How does e-commerce web development ensure website security?",
        content:
          "Website security is our top priority for e-commerce development. We implement multiple layers of security, such as SSL certificates for encrypted communication, secure payment gateways, and regular software updates. Additionally, companies follow best practices for data protection and PCI-DSS compliance to ensure that customer transactions and data are secure from cyber threats.",
      },
    ],
  },
  {
    id: 5,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.2949 24.0466C48.2144 23.6843 47.8611 23.4518 47.4988 23.5367C47.1364 23.6128 46.9039 23.9705 46.9844 24.3329C47.0515 24.6416 47.0873 24.9546 47.0873 25.2721V42.7653H4.40329V28.26C6.7604 29.66 9.73486 29.8523 12.4095 29.1635C14.391 28.6491 16.2026 27.6427 17.5443 26.3232C17.9826 26.4261 18.9577 26.7839 19.7495 27.1149C20.398 27.3877 20.9706 26.605 20.5233 26.0683C19.9776 25.4108 19.3558 24.5744 19.1501 24.1898C19.7092 23.1253 19.9686 22.0204 19.9327 20.9336H23.6586C24.0299 20.9336 24.3295 20.634 24.3295 20.2627C24.3295 19.8915 24.0299 19.5918 23.6586 19.5918H19.7314C18.6758 15.7094 13.7558 13.6116 8.71497 14.9177C3.64732 16.2326 0.350832 20.4952 1.37072 24.4223C1.65255 25.5181 2.24739 26.4664 3.0615 27.2446V27.4996C3.0615 27.4996 3.0615 30.1744 3.05704 45.4759C3.05704 48.6069 5.60658 51.1563 8.74204 51.1563H21.3821L19.499 57.9549H17.692C17.3208 57.9549 17.0211 58.2546 17.0211 58.6258C17.0211 58.9971 17.3208 59.2967 17.692 59.2967H34.9705C35.3417 59.2967 35.6414 58.9971 35.6414 58.6258C35.6414 58.2546 35.3417 57.9549 34.9705 57.9549H33.1635L31.2848 51.1563H42.7486C45.8796 51.1563 48.429 48.6068 48.429 45.4759V25.2721C48.4294 24.8599 48.3844 24.449 48.2949 24.0466ZM2.66775 24.0869C1.83583 20.8754 4.69837 17.3464 9.05048 16.2193C13.4025 15.0876 17.6204 16.7828 18.4568 19.9944C18.4881 20.1241 18.5149 20.2538 18.5373 20.388V20.4059C18.7162 21.5062 18.4836 22.6558 17.8529 23.7605C17.7276 23.9797 17.589 24.2257 18.1168 25.0845C17.1372 24.8117 16.9673 24.9905 16.7839 25.1874C15.5941 26.4353 13.9213 27.3835 12.074 27.8621C7.72204 28.9891 3.49978 27.2983 2.66775 24.0869ZM31.7723 57.9549H20.8899L22.773 51.1563H29.8892L31.7723 57.9549ZM47.0872 45.4759C47.0872 47.8688 45.1415 49.8145 42.7486 49.8145H8.74181C6.34884 49.8145 4.40318 47.8688 4.40318 45.4759V44.1072H47.0872V45.4759Z" fill="#F2F2F2"/>
<path d="M31.4614 47.6314H33.7415C33.9173 47.6281 34.0847 47.5559 34.2078 47.4305C34.331 47.305 34.4 47.1363 34.4 46.9605C34.4 46.7847 34.331 46.6159 34.2078 46.4904C34.0847 46.365 33.9173 46.2928 33.7415 46.2896H31.4614C31.2856 46.2928 31.1182 46.365 30.995 46.4904C30.8719 46.6159 30.8029 46.7847 30.8029 46.9605C30.8029 47.1363 30.8719 47.305 30.995 47.4305C31.1182 47.5559 31.2856 47.6281 31.4614 47.6314ZM36.1277 47.6314H38.4078C38.5835 47.6281 38.751 47.5559 38.8741 47.4305C38.9973 47.305 39.0663 47.1363 39.0663 46.9605C39.0663 46.7847 38.9973 46.6159 38.8741 46.4904C38.751 46.365 38.5835 46.2928 38.4078 46.2896H36.1277C35.9519 46.2928 35.7845 46.365 35.6613 46.4904C35.5382 46.6159 35.4692 46.7847 35.4692 46.9605C35.4692 47.1363 35.5382 47.305 35.6613 47.4305C35.7845 47.5559 35.9519 47.6281 36.1277 47.6314ZM40.7941 47.6314H43.0742C43.25 47.6281 43.4174 47.5559 43.5405 47.4305C43.6637 47.305 43.7327 47.1363 43.7327 46.9605C43.7327 46.7847 43.6637 46.6159 43.5405 46.4904C43.4174 46.365 43.25 46.2928 43.0742 46.2896H40.7941C40.6183 46.2928 40.4509 46.365 40.3277 46.4904C40.2046 46.6159 40.1356 46.7847 40.1356 46.9605C40.1356 47.1363 40.2046 47.305 40.3277 47.4305C40.4509 47.5559 40.6183 47.6281 40.7941 47.6314ZM54.9455 19.8735L50.6426 13.9336C51.8815 12.3905 51.8458 10.1184 50.4637 8.61097C49.3366 7.37652 47.5653 6.96941 46.0177 7.55089L41.7148 1.61991C41.0484 0.70304 39.7692 0.501711 38.8522 1.1637C38.0113 1.77202 37.7787 2.89913 38.2529 3.78929C37.0273 9.32218 35.0056 11.7866 31.8388 15.271L26.476 19.1578C26.2567 19.3169 26.0709 19.5176 25.9293 19.7485C25.7877 19.9794 25.693 20.2359 25.6506 20.5035C25.6082 20.771 25.619 21.0443 25.6824 21.3077C25.7457 21.571 25.8604 21.8193 26.0198 22.0383L26.2121 22.3022C24.736 23.6575 24.6601 26.0101 26.1852 27.4594C27.205 28.4255 28.7572 28.6894 30.0497 28.0855C30.1392 28.0453 30.2197 27.9961 30.3047 27.9469L30.5015 28.2153C31.0427 28.9667 31.9954 29.2441 32.8319 28.9578L37.8101 35.8191C39.0312 37.5053 41.3883 37.881 43.0745 36.66C44.7608 35.4389 45.1366 33.0773 43.9155 31.391L41.102 27.5086C42.0994 26.4798 42.2606 24.8562 41.4285 23.6397C44.4611 22.4454 47.2342 21.8371 51.6086 22.262L51.6221 22.28C52.2885 23.1968 53.5677 23.4071 54.4892 22.7362C55.4062 22.0742 55.612 20.786 54.9455 19.8735ZM29.4774 26.8735C28.7036 27.2312 27.7285 27.0747 27.1113 26.4843C26.2077 25.63 26.1944 24.2612 27.0084 23.4025L29.5131 26.8555C29.4998 26.8601 29.4908 26.869 29.4774 26.8735ZM49.4753 9.5146C50.3163 10.436 50.4146 11.7734 49.8108 12.7887L46.8543 8.70507C47.7891 8.49917 48.8133 8.79437 49.4753 9.5146ZM42.8287 32.1783C43.6159 33.2652 43.3744 34.786 42.2875 35.5731C41.2051 36.3558 39.6843 36.1189 38.8972 35.0319L33.9726 28.2422L37.9087 25.393L42.8287 32.1783ZM39.0358 24.655C39.4159 24.4851 39.7917 24.3195 40.154 24.1675C40.1719 24.2123 41.1291 25.2455 40.2926 26.3905L39.0358 24.655ZM38.6287 23.3669L33.1539 15.8168C36.0702 12.5875 38.0293 10.0424 39.2817 5.25659C40.7935 7.34089 41.5001 8.32046 41.8088 8.74538C41.8088 8.74984 41.8133 8.75429 41.8177 8.75886C41.8177 8.75886 41.8222 8.76331 41.8312 8.77679L41.8356 8.78124C41.8445 8.79015 41.849 8.79917 41.858 8.81253C41.858 8.81253 41.858 8.81698 41.8625 8.82144C41.8669 8.82589 41.8758 8.83491 41.8804 8.84827C41.8939 8.86175 41.9028 8.87511 41.9117 8.88859C41.9252 8.90652 41.943 8.9289 41.9565 8.95116L41.9654 8.96007C41.9788 8.978 41.9922 9.00038 42.0101 9.02265C42.5737 9.80089 44.5508 12.5249 50.571 20.8308C45.83 20.5445 42.8779 21.4838 38.6287 23.3669ZM54.1028 8.18113L57.5396 6.17581C57.6896 6.08433 57.7978 5.93765 57.8409 5.76728C57.884 5.5969 57.8585 5.41643 57.77 5.26463C57.6814 5.11283 57.5368 5.00181 57.3673 4.95543C57.1978 4.90906 57.0169 4.93102 56.8634 5.01659L53.4267 7.02191C53.273 7.1116 53.1612 7.25866 53.1159 7.43075C53.0706 7.60284 53.0955 7.78587 53.1851 7.9396C53.2749 8.09323 53.4219 8.20495 53.594 8.25023C53.7661 8.29552 53.9491 8.27066 54.1028 8.18113ZM58.3152 11.8612L54.467 10.8495C54.2949 10.8044 54.1119 10.8294 53.9582 10.9191C53.8045 11.0087 53.6927 11.1557 53.6472 11.3277C53.6021 11.4999 53.6271 11.6829 53.7167 11.8366C53.8064 11.9903 53.9534 12.1021 54.1254 12.1476L57.9736 13.1593C58.3322 13.2523 58.6988 13.0397 58.7935 12.681C58.8387 12.5089 58.8137 12.3258 58.724 12.1721C58.6344 12.0184 58.4873 11.9065 58.3152 11.8612ZM51.2828 5.39265L52.2945 1.54491C52.3396 1.37278 52.3146 1.18978 52.225 1.03607C52.1353 0.882356 51.9883 0.770506 51.8163 0.725071C51.6441 0.679964 51.4611 0.704986 51.3074 0.794645C51.1537 0.884304 51.0419 1.03128 50.9964 1.20331L49.9847 5.05105C49.9396 5.22318 49.9646 5.40619 50.0543 5.5599C50.1439 5.71361 50.2909 5.82546 50.463 5.87089C50.6351 5.91593 50.8181 5.89088 50.9718 5.80123C51.1254 5.71158 51.2373 5.56465 51.2828 5.39265ZM5.89517 22.516C5.95107 22.516 6.00744 22.5089 6.0638 22.4945L14.7133 20.252C14.7986 20.23 14.8787 20.1913 14.9491 20.1383C15.0195 20.0852 15.0787 20.0188 15.1234 19.9429C15.1681 19.867 15.1974 19.783 15.2097 19.6957C15.2219 19.6084 15.2168 19.5196 15.1947 19.4343C15.1498 19.2622 15.0385 19.1149 14.8853 19.0247C14.732 18.9345 14.5492 18.9086 14.377 18.9529L5.72747 21.1954C5.64216 21.2174 5.56202 21.2561 5.49165 21.3091C5.42128 21.3622 5.36205 21.4286 5.31734 21.5045C5.27263 21.5804 5.24333 21.6644 5.2311 21.7517C5.21887 21.839 5.22396 21.9278 5.24607 22.0131C5.28342 22.1569 5.36739 22.2843 5.48484 22.3753C5.60229 22.4663 5.7466 22.5157 5.89517 22.516ZM6.49494 24.1571C6.32267 24.2017 6.17519 24.3129 6.08492 24.4662C5.99465 24.6196 5.96899 24.8025 6.01359 24.9747C6.05819 25.147 6.16939 25.2945 6.32274 25.3848C6.47608 25.475 6.659 25.5007 6.83126 25.4561L15.4808 23.2136C15.5661 23.1915 15.6462 23.1529 15.7166 23.0998C15.787 23.0468 15.8462 22.9804 15.8909 22.9045C15.9356 22.8285 15.9649 22.7445 15.9771 22.6572C15.9894 22.57 15.9843 22.4812 15.9622 22.3959C15.8686 22.0368 15.5009 21.8232 15.1444 21.9144L6.49494 24.1571Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "digital-marketing-agency-in-calicut",
    title: "Digital Marketing",
    peopleTitle: "Digital Marketing Team",

    metaTitle: "Wisbato- Best Digital Marketing Agency In Calicut.",
    metaDescription:
      "Select best digital marketing agency in Calicut, . We provide all digital marketing services like SEO, SMM, SEM, in your business, that boost your online presents. Contact now",
    description:
      "Build your brand values by letting us promote your products and services through diverse social channels. Connect with a larger audience using the right channels.",
    image: "images/services/digitalmarketing",
    // image: "images/services/digitalmarketing.webp",
    style: {
      backgroundColor: "#C3DFFF",
    },
    width: "35",
    context: {
      mainTitle:
        "Transform <span>your Buisness</span> with Best Digital Marketing Solutions",
      subTitle: "Why digital marketing is important",
      content: `Every business needs <a href="https://en.wikipedia.org/wiki/Digital_marketing" target="_blank"> digital marketing</a>  strategies. With more consumers relying on the internet to discover products and services, digital marketing helps businesses reach their target audience where they spend most of their time online. From social media to search engines, digital marketing allows companies to boost visibility, attract potential customers, and engage with their audience in real-time. It also provides valuable data to measure performance, optimize strategies, and increase <a href="https://en.wikipedia.org/wiki/Return_on_investment" target="_blank"> ROI</a>. Without a strong digital marketing strategy, businesses risk falling behind their competitors and missing out on growth opportunities.
`,
    },
    workingProcess: [
      {
        title: "Research & Strategy Development",
        image: "/images/workingProcess/digital marketing/Research Analysis.jpg",
        alt: "Best digital marketing agency in Calicut",

        list: [
          {
            id: 1,
            title: "Market Research",
            content: "Analyze industry trends and competitor strategies.",
          },
          {
            id: 2,
            title: " Audience Identification",
            content: "Define target audience demographics and behaviors.",
          },
          {
            id: 3,
            title: " Goal Setting",
            content: " Establish clear, measurable objectives for campaigns.",
          },
          {
            id: 4,
            title: "Content Planning",
            content: "Develop a roadmap for content creation and promotion.",
          },
        ],
      },
      {
        title: "Content Creation & Optimization",
        image:
          "/images/workingProcess/digital marketing/Content Creation & Optimization.jpg",
        alt: "Digital marketing company in Calicut create best content for marketing",
        list: [
          {
            id: 1,
            title: "SEO Optimization",
            content: "Ensure all content is optimized for search engines.",
          },
          {
            id: 2,
            title: "  Engaging Copywriting",
            content: "Create compelling, audience-focused content.",
          },
          {
            id: 3,
            title: " Visual Content",
            content: "  Design attention-grabbing visuals and graphics.",
          },
          {
            id: 4,
            title: " Multi-Platform Content",
            content: " Adapt content for social media, blogs, and websites.",
          },
        ],
      },
      {
        title: "Campaign Execution & Monitoring",
        image:
          "/images/workingProcess/digital marketing/Campaign Execution & Monitoring.jpg",
        alt: " Execute a good ad campaign",
        list: [
          {
            id: 1,
            title: " Social Media Management",
            content: "Launch and manage social media campaigns.",
          },
          {
            id: 2,
            title: "  PPC & Ads",
            content:
              " Set up and manage pay-per-click and online ad campaigns.",
          },
          {
            id: 3,
            title: " Email Marketing ",
            content: "   Implement targeted email campaigns to nurture leads.",
          },
          {
            id: 4,
            title: "  Performance Tracking",
            content: " Monitor campaign performance with analytics tools.",
          },
        ],
      },
      {
        title: "Analysis & Continuous Improvement",
        image:
          "/images/workingProcess/digital marketing/Analysis & Continuous Improvement.jpg",
        list: [
          {
            id: 1,
            title: "  Data Analysis",
            content: "Review key performance indicators (KPIs) and metrics.",
          },
          {
            id: 2,
            title: " A/B Testing",
            content: "  Test variations of campaigns to optimize performance.",
          },
          {
            id: 3,
            title: " Client Feedback ",
            content:
              "   Gather insights from client feedback for improvements.",
          },
          {
            id: 4,
            title: "  Strategy Refinement",
            content: "Adjust strategies based on data for better results.",
          },
        ],
      },
    ],
    outcomes: outcomes[7],
    FAQData: [
      {
        id: 1,
        title:
          "What digital marketing services do you offer for Calicut businesses?",
        content:
          "We offer a range of digital marketing services for Calicut business owners, including SEO, social media marketing, pay-per-click (PPC) advertising, content marketing, web development, email marketing, and online reputation management. Our goal is to create customized strategies that fit your business needs and drive real results.",
      },
      {
        id: 2,
        title: "How can digital marketing help my local business in Calicut?",
        content:
          "Digital marketing helps local businesses in Calicut by increasing their online visibility, attracting potential customers, and building a stronger brand presence. Through targeted campaigns, we help you reach your specific audience in the region, improve website traffic, and ultimately drive sales.",
      },
      {
        id: 3,
        title:
          "How do you measure the success of a digital marketing campaign?",
        content:
          "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, customer engagement, and return on investment (ROI). We provide regular reports so you can see the impact of each campaign on your business growth.",
      },
      {
        id: 4,
        title: "How long does it take to see results from digital marketing?",
        content:
          "The timeline for results varies depending on the service and strategy. SEO typically takes a few months to show significant improvements, while PPC and social media campaigns can drive faster results. We'll work with you to set realistic expectations and provide ongoing optimization to ensure long-term success.",
      },
      {
        id: 5,
        title: "How much does your digital marketing service cost per month?",
        content: `Our digital marketing services start at ₹25,000 per month, which includes social media page management, the creation of 15 posters, and 4 to 5 engaging reel videos, along with effective branding strategies. Please note that pricing may vary based on specific client requirements. If you're interested in paid campaigns or additional packages, feel free to  <a href="https://www.wisbato.com/contact" target="_blank">contact us</a> for more details!
`,
      },
    ],
  },
  {
    id: 6,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2050_2600)">
<path d="M22.5 12.209H20.625C20.1075 12.209 19.6875 11.788 19.6875 11.2715H17.8125C17.8125 12.8221 19.0744 14.084 20.625 14.084H22.5C24.0506 14.084 25.3125 12.8221 25.3125 11.2715C25.3125 9.72086 24.0506 8.45898 22.5 8.45898H20.625C20.3836 8.44819 20.1557 8.3447 19.9887 8.17006C19.8217 7.99543 19.7285 7.76311 19.7285 7.52148C19.7285 7.27986 19.8217 7.04754 19.9887 6.87291C20.1557 6.69827 20.3836 6.59478 20.625 6.58398H22.5C23.0175 6.58398 23.4375 7.00492 23.4375 7.52148H25.3125C25.3125 5.97086 24.0506 4.70898 22.5 4.70898H20.625C19.0744 4.70898 17.8125 5.97086 17.8125 7.52148C17.8125 9.07211 19.0744 10.334 20.625 10.334H22.5C22.7414 10.3448 22.9693 10.4483 23.1363 10.6229C23.3033 10.7975 23.3965 11.0299 23.3965 11.2715C23.3965 11.5131 23.3033 11.7454 23.1363 11.9201C22.9693 12.0947 22.7414 12.1982 22.5 12.209ZM30 14.084H32.8125V12.209H30C29.4825 12.209 29.0625 11.788 29.0625 11.2715V10.334H32.8125V8.45898H29.0625V7.52148C29.0625 7.00492 29.4825 6.58398 30 6.58398H32.8125V4.70898H30C28.4494 4.70898 27.1875 5.97086 27.1875 7.52148V11.2715C27.1875 12.8221 28.4494 14.084 30 14.084ZM37.5 14.084H39.375C40.9256 14.084 42.1875 12.8221 42.1875 11.2715V7.52148C42.1875 5.97086 40.9256 4.70898 39.375 4.70898H37.5C35.9494 4.70898 34.6875 5.97086 34.6875 7.52148V11.2715C34.6875 12.8221 35.9494 14.084 37.5 14.084ZM36.5625 7.52148C36.5625 7.00492 36.9825 6.58398 37.5 6.58398H39.375C39.8925 6.58398 40.3125 7.00492 40.3125 7.52148V11.2715C40.3125 11.788 39.8925 12.209 39.375 12.209H37.5C36.9825 12.209 36.5625 11.788 36.5625 11.2715V7.52148Z" fill="#F2F2F2"/>
<path d="M59.0625 21.5624H55.3125V18.7499C55.3125 16.1652 53.2097 14.0624 50.625 14.0624H45.9375V3.77148C45.9375 2.22086 44.6756 0.958984 43.125 0.958984H16.875C15.3244 0.958984 14.0625 2.22086 14.0625 3.77148V14.0624H9.375C6.79031 14.0624 4.6875 16.1652 4.6875 18.7499V24.4518C2.44969 25.7512 0.9375 28.169 0.9375 30.9374C0.9375 33.7059 2.44969 36.1237 4.6875 37.423V44.9999C4.6875 47.5846 6.79031 49.6874 9.375 49.6874H20.625V53.4374H19.6875C17.1028 53.4374 15 55.5402 15 58.1249V59.0624H45V58.1249C45 55.5402 42.8972 53.4374 40.3125 53.4374H39.375V49.6874H50.625C53.2097 49.6874 55.3125 47.5846 55.3125 44.9999V38.4374H59.0625V21.5624ZM15.9375 3.77148C15.9375 3.25492 16.3575 2.83398 16.875 2.83398H43.125C43.6425 2.83398 44.0625 3.25492 44.0625 3.77148V15.0215C44.0625 15.538 43.6425 15.959 43.125 15.959H33.4669L27.9684 19.604C27.6562 19.814 27.1875 19.5609 27.1875 19.184V15.959H16.875C16.3575 15.959 15.9375 15.538 15.9375 15.0215V3.77148ZM6.5625 18.7499C6.5625 17.1993 7.82438 15.9374 9.375 15.9374H14.2284C14.4178 16.4894 14.7744 16.9686 15.2487 17.3085C15.7231 17.6484 16.2915 17.8321 16.875 17.834H25.3125V19.184C25.3135 19.6135 25.4306 20.0347 25.6514 20.4031C25.8723 20.7715 26.1887 21.0733 26.567 21.2765C26.9454 21.4797 27.3718 21.5768 27.8008 21.5575C28.2299 21.5382 28.6458 21.4032 29.0044 21.1668L34.0322 17.834H43.125C44.3531 17.834 45.3891 17.0371 45.7716 15.9374H50.625C52.1756 15.9374 53.4375 17.1993 53.4375 18.7499V21.5624H45.9375V29.9999H40.3125V25.3124H34.6875V36.5624H32.8125V23.4374H27.1875V36.5624H25.3125V27.1874H19.6875V29.9999H15.8728C15.4087 26.3062 12.255 23.4374 8.4375 23.4374C7.78875 23.4374 7.16344 23.5284 6.5625 23.684V18.7499ZM36.5625 36.5624V27.1874H38.4375V36.5624H36.5625ZM30.9375 36.5624H29.0625V25.3124H30.9375V36.5624ZM23.4375 36.5624H21.5625V29.0624H23.4375V36.5624ZM2.8125 30.9374C2.8125 27.8352 5.33531 25.3124 8.4375 25.3124C11.5397 25.3124 14.0625 27.8352 14.0625 30.9374C14.0625 34.0396 11.5397 36.5624 8.4375 36.5624C5.33531 36.5624 2.8125 34.0396 2.8125 30.9374ZM42.9647 57.1874H17.0353C17.2299 56.6394 17.5893 56.1651 18.0641 55.8294C18.5389 55.4937 19.106 55.3131 19.6875 55.3124H40.3125C41.535 55.3124 42.5775 56.0962 42.9647 57.1874ZM37.5 53.4374H22.5V49.6874H37.5V53.4374ZM50.625 47.8124H9.375C7.82438 47.8124 6.5625 46.5505 6.5625 44.9999V42.1874H53.4375V44.9999C53.4375 46.5505 52.1756 47.8124 50.625 47.8124ZM53.4375 40.3124H6.5625V38.1909C7.1745 38.3523 7.80457 38.4352 8.4375 38.4374C12.255 38.4374 15.4087 35.5687 15.8728 31.8749H19.6875V36.5624H17.8125V38.4374H42.1875V36.5624H40.3125V31.8749H45.9375V38.4374H53.4375V40.3124ZM57.1875 36.5624H47.8125V23.4374H57.1875V36.5624Z" fill="#F2F2F2"/>
<path d="M26.25 45.9375C26.7678 45.9375 27.1875 45.5178 27.1875 45C27.1875 44.4822 26.7678 44.0625 26.25 44.0625C25.7322 44.0625 25.3125 44.4822 25.3125 45C25.3125 45.5178 25.7322 45.9375 26.25 45.9375Z" fill="#F2F2F2"/>
<path d="M30 45.9375C30.5178 45.9375 30.9375 45.5178 30.9375 45C30.9375 44.4822 30.5178 44.0625 30 44.0625C29.4822 44.0625 29.0625 44.4822 29.0625 45C29.0625 45.5178 29.4822 45.9375 30 45.9375Z" fill="#F2F2F2"/>
<path d="M33.75 45.9375C34.2678 45.9375 34.6875 45.5178 34.6875 45C34.6875 44.4822 34.2678 44.0625 33.75 44.0625C33.2322 44.0625 32.8125 44.4822 32.8125 45C32.8125 45.5178 33.2322 45.9375 33.75 45.9375Z" fill="#F2F2F2"/>
<path d="M12.1875 30.9375C12.1875 28.8694 10.5056 27.1875 8.4375 27.1875C6.36937 27.1875 4.6875 28.8694 4.6875 30.9375C4.6875 33.0056 6.36937 34.6875 8.4375 34.6875C10.5056 34.6875 12.1875 33.0056 12.1875 30.9375ZM6.5625 30.9375C6.5625 29.9034 7.40344 29.0625 8.4375 29.0625C9.47156 29.0625 10.3125 29.9034 10.3125 30.9375C10.3125 31.9716 9.47156 32.8125 8.4375 32.8125C7.40344 32.8125 6.5625 31.9716 6.5625 30.9375ZM49.6875 25.3125H55.3125V27.1875H49.6875V25.3125ZM49.6875 29.0625H55.3125V30.9375H49.6875V29.0625ZM49.6875 32.8125H55.3125V34.6875H49.6875V32.8125Z" fill="#F2F2F2"/>
</g>
<defs>
<clipPath id="clip0_2050_2600">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    slug: "search-engine-optimization-company-in-calicut",
    title: "Search Engine Optimization",
    peopleTitle: "SEO Team",
    metaTitle: "Wisbato-Leading SEO Company In Calicut, Kerala",
    metaDescription:
      "Wisbato is the best SEO agency in Calicut, Do SEO services that will boost your business website's online presence and organic traffic with our expert SEO services in Kerala.",
    description:
      "Increase the visibility of your website, by letting them rank in top search engine results with our customized strategic solutions.",
    image: "",
    style: {
      backgroundColor: "#FFE3C2",
      position: "relative",
    },
    width: "65",
    context: {
      mainTitle: "We guarantee <span>your placement</span> in high SERPs",
      subTitle: "Why do businesses need SEO?",
      content: `<a href="https://en.wikipedia.org/wiki/Search_engine_optimization">Search engine optimization</a>(SEO) is a great tool guiding potential customers through the buying process. This impacts positively on how effective your SEO strategies will be implemented to increase your SERPs visibility as well as traffic on your website, and makes your company a trusted and authoritative voice in your industry. It builds more brand loyalty through credibility in the customer's minds and trust with the customers.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Keyword Research",
        image: "/images/workingProcess/seo/Keyword Research.jpg",
        alt: "Keyword Research",
        list: [
          {
            id: 1,
            title: "Creating a picture of goals",
            content:
              "As the very first step of SEO, we will create a rough layout of the content that the potential audience is most likely to consume.",
          },
          {
            id: 2,
            title: "Identification of relevant keywords",
            content:
              "After realizing what the audience will be searching for, we will decide on content creation and the keywords that will be targeted.",
          },
          {
            id: 3,
            title: "Use of Keywords Research tools",
            content:
              "To find a comprehensive keyword list, we will make use of keyword research tools such as Ahrefs, SEMrush, or LongTail Pro.",
          },
          {
            id: 4,
            title: "Categorization of Keywords",
            content:
              "Here we will be grouping the list of keywords into primary and secondary keywords. Besides that, we will also be categorizing them based on their position in the marketing funnel.",
          },
        ],
      },
      {
        id: 2,
        title: "Competitive Research",
        image: "/images/workingProcess/seo/Competitive Research.jpg",
        alt: "Competitive Research",
        list: [
          {
            id: 5,
            title: "Evaluation of Competitive Search Landscape",
            content:
              "Within the niche, we will evaluate the landscape of competitive search.",
          },
          {
            id: 6,
            title: "Examining Competitor sites",
            content:
              "Our team will be monitoring competitor sites that are placed at the top of search engine result pages and comprehending at what point they are excelling.",
          },
          {
            id: 7,
            title: "Carrying out content gap analysis",
            content:
              "We will be exploring the opportunities for keyword targeting that can be capitalized on the required content.",
          },
        ],
      },
      {
        id: 3,
        title: "On-Page Optimization",
        image: "/images/workingProcess/seo/On-Page Optimization.jpg",
        git: "On-Page Optimization",

        list: [
          {
            id: 8,
            title: "Optimization of title tags",
            content:
              "With the use of relevant keywords, headings will be optimized, along with the title tags and Meta descriptions.",
          },
          {
            id: 9,
            title: "Content Creation",
            content:
              "We will be delivering high-quality content that is also keyword-rich. We will also be ensuring that user search queries can also be addressed with these contents.",
          },
          {
            id: 10,
            title: "Enhancing responsiveness",
            content:
              "The speed of the website loading will be improved. Besides that, we will be ensuring the mobile-friendliness of the website is enhanced.",
          },
          {
            id: 11,
            title: "Optimization of URLs",
            content:
              "The site architecture, internal linking structure, and URLs will be optimized.",
          },
        ],
      },
      {
        id: 4,
        title: "Technical SEO",
        image: "/images/workingProcess/seo/Technical SEO.jpg",
        git: "Technical SEO",
        list: [
          {
            id: 12,
            title: "Fixing of crawl errors",
            content:
              "Issues regarding broken links and redirects will be rectified, by fixing the crawl errors.",
          },
          {
            id: 13,
            title: "Implementation of XML sitemaps",
            content:
              "Using XML sitemaps can assist search engines locate and comprehend the website's structure.",
          },
          {
            id: 14,
            title: "Optimization of robots.txt file",
            content:
              "Optimizing the robots.txt file to specify which sites search engines may crawl and index.",
          },
          {
            id: 15,
            title: "Improving the security",
            content:
              "Strengthening website security (HTTPS) and fixing technological difficulties that prevent crawling and indexing.",
          },
        ],
      },
      {
        id: 5,
        title: "Off-Page Optimization",
        image: "/images/workingProcess/seo/Off-Page Optimization.jpg",
        git: "Off-Page Optimization",
        list: [
          {
            id: 16,
            title: "Link Building",
            content:
              "To increase the quality and quantity of backlink profiles, we will reach out to other websites for link building through guest posting for example. Our team will fix good yet broken links that point to your domain.",
          },
          {
            id: 17,
            title: "Attracting natural links",
            content:
              "As already done, with the use of high-quality and shareable content, natural backlinks will be attracted.",
          },
          {
            id: 18,
            title: "Participation in online forums",
            content:
              "We ensure that we are taking part in relevant online forums and communities.",
          },
          {
            id: 19,
            title: "Disavowing spammy backlinks",
            content:
              "Once monitoring all the backlinks, we will disavow the backlinks that are toxic and spammy.",
          },
        ],
      },
      {
        id: 6,
        title: "Monitoring and Analysis",
        image: "/images/workingProcess/seo/Monitoring and Analysis.jpg",
        git: "Monitoring and Analysis",
        list: [
          {
            id: 20,
            title: "Tracking of keywords ranking",
            content:
              "As a part of monitoring the performance of the website in traffic metrics and search engine rankings, we will be tracking the keywords ranking and organic traffic.",
          },
          {
            id: 21,
            title: "Using Google Analytics",
            content:
              "We will analyze the user behavior on the website with the help of tools such as Google Analytics.",
          },
          {
            id: 22,
            title: "Monitoring the competitors",
            content:
              "The SEO strategies followed by competitors will be monitored and analyzed.",
          },
          {
            id: 23,
            title: "Setting up data-driven adjustments",
            content:
              "Based on performance insights, data-driven adjustments to SEO strategies will be made.",
          },
        ],
      },
    ],
    outcomes: outcomes[4],
    FAQData: [
      {
        id: 1,
        title: "How Can SEO Help My Calicut-Based Business Grow?",
        content:
          "  SEO can significantly enhance your business's online visibility, making it easier for local customers in Calicut to find your services or products. By optimizing your website for local search, using targeted keywords, and improving your online presence, SEO can drive more traffic to your site and lead to increased customer engagement, resulting in long-term business growth.",
      },
      {
        id: 2,
        title: "What SEO Strategies Work Best for Local Businesses in Calicut?",
        content:
          " For local businesses in Calicut, focusing on local SEO is crucial. This includes optimizing your Google My Business profile, using location-specific keywords, and encouraging positive customer reviews. Additionally, having a mobile-friendly website and building relevant, high-quality local backlinks can boost your rankings and attract more local customers.",
      },
      {
        id: 3,
        title: "How Long Does It Take to See Results from SEO in Calicut?",
        content:
          "SEO is a long-term investment, and it may take anywhere from 3 to 6 months to start seeing noticeable improvements in rankings, depending on the competition and your specific goals. For businesses in Calicut, focusing on consistent optimization and adapting to local trends will yield sustainable results over time.",
      },
      {
        id: 4,
        title: " Why Is Mobile Optimization Important for SEO in Calicut?",
        content:
          " Mobile optimization is crucial for businesses in Calicut because most local customers use smartphones to search for products and services. A mobile-friendly website not only improves user experience but also ranks higher on Google, especially since Google uses mobile-first indexing. This ensures your business reaches a larger audience and boosts local SEO performance.",
      },
    ],
  },
  {
    id: 7,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9375 7.5H25.3125C25.0639 7.5 24.8254 7.40123 24.6496 7.22541C24.4738 7.0496 24.375 6.81114 24.375 6.5625C24.375 6.31386 24.4738 6.0754 24.6496 5.89959C24.8254 5.72377 25.0639 5.625 25.3125 5.625H30.9375C31.1861 5.625 31.4246 5.72377 31.6004 5.89959C31.7762 6.0754 31.875 6.31386 31.875 6.5625C31.875 6.81114 31.7762 7.0496 31.6004 7.22541C31.4246 7.40123 31.1861 7.5 30.9375 7.5ZM38.4375 58.125H17.8125C16.5698 58.1235 15.3783 57.6292 14.4996 56.7504C13.6208 55.8717 13.1265 54.6802 13.125 53.4375V40.3125C13.125 40.0639 13.2238 39.8254 13.3996 39.6496C13.5754 39.4738 13.8139 39.375 14.0625 39.375C14.3111 39.375 14.5496 39.4738 14.7254 39.6496C14.9012 39.8254 15 40.0639 15 40.3125V53.4375C15 54.9881 16.2619 56.25 17.8125 56.25H38.4375C39.9881 56.25 41.25 54.9881 41.25 53.4375V21.5625C41.25 21.3139 41.3488 21.0754 41.5246 20.8996C41.7004 20.7238 41.9389 20.625 42.1875 20.625C42.4361 20.625 42.6746 20.7238 42.8504 20.8996C43.0262 21.0754 43.125 21.3139 43.125 21.5625V53.4375C43.125 56.0213 41.0231 58.125 38.4375 58.125Z" fill="#F2F2F2"/>
<path d="M42.1867 9.375C41.9381 9.375 41.6996 9.27623 41.5238 9.10041C41.348 8.9246 41.2492 8.68614 41.2492 8.4375V6.5625C41.2492 5.01187 39.9873 3.75 38.4367 3.75H17.8117C16.2611 3.75 14.9992 5.01187 14.9992 6.5625V8.4375C14.9992 8.68614 14.9004 8.9246 14.7246 9.10041C14.5488 9.27623 14.3104 9.375 14.0617 9.375C13.8131 9.375 13.5746 9.27623 13.3988 9.10041C13.223 8.9246 13.1242 8.68614 13.1242 8.4375V6.5625C13.1242 3.97875 15.2261 1.875 17.8117 1.875H38.4367C41.0223 1.875 43.1242 3.97875 43.1242 6.5625V8.4375C43.1242 8.68614 43.0254 8.9246 42.8496 9.10041C42.6738 9.27623 42.4354 9.375 42.1867 9.375ZM27.1867 46.875H19.6867C19.4381 46.875 19.1996 46.7762 19.0238 46.6004C18.848 46.4246 18.7492 46.1861 18.7492 45.9375C18.7492 45.6889 18.848 45.4504 19.0238 45.2746C19.1996 45.0988 19.4381 45 19.6867 45H27.1867C27.4354 45 27.6738 45.0988 27.8496 45.2746C28.0254 45.4504 28.1242 45.6889 28.1242 45.9375C28.1242 46.1861 28.0254 46.4246 27.8496 46.6004C27.6738 46.7762 27.4354 46.875 27.1867 46.875ZM32.8117 50.625H19.6867C19.4381 50.625 19.1996 50.5262 19.0238 50.3504C18.848 50.1746 18.7492 49.9361 18.7492 49.6875C18.7492 49.4389 18.848 49.2004 19.0238 49.0246C19.1996 48.8488 19.4381 48.75 19.6867 48.75H32.8117C33.0604 48.75 33.2988 48.8488 33.4746 49.0246C33.6504 49.2004 33.7492 49.4389 33.7492 49.6875C33.7492 49.9361 33.6504 50.1746 33.4746 50.3504C33.2988 50.5262 33.0604 50.625 32.8117 50.625ZM36.5617 43.125H19.6867C19.4381 43.125 19.1996 43.0262 19.0238 42.8504C18.848 42.6746 18.7492 42.4361 18.7492 42.1875C18.7492 41.9389 18.848 41.7004 19.0238 41.5246C19.1996 41.3488 19.4381 41.25 19.6867 41.25H36.5617C36.8104 41.25 37.0488 41.3488 37.2246 41.5246C37.4004 41.7004 37.4992 41.9389 37.4992 42.1875C37.4992 42.4361 37.4004 42.6746 37.2246 42.8504C37.0488 43.0262 36.8104 43.125 36.5617 43.125ZM16.8742 26.25C14.2886 26.25 12.1867 24.1462 12.1867 21.5625C12.1867 18.9788 14.2886 16.875 16.8742 16.875C19.4598 16.875 21.5617 18.9788 21.5617 21.5625C21.5617 24.1462 19.4598 26.25 16.8742 26.25ZM16.8742 18.75C15.3236 18.75 14.0617 20.0119 14.0617 21.5625C14.0617 23.1131 15.3236 24.375 16.8742 24.375C18.4248 24.375 19.6867 23.1131 19.6867 21.5625C19.6867 20.0119 18.4248 18.75 16.8742 18.75ZM16.8742 37.5C13.5784 37.4966 10.4052 36.2498 7.98859 34.0088C7.86547 33.8949 7.77514 33.7502 7.72699 33.5896C7.67884 33.429 7.67464 33.2584 7.71483 33.0956C8.06216 31.6754 8.8768 30.4132 10.0279 29.5117C11.179 28.6102 12.5996 28.1218 14.0617 28.125H19.6867C21.1486 28.1223 22.569 28.6106 23.7203 29.5116C24.8715 30.4126 25.6868 31.6741 26.0355 33.0938C26.0757 33.2565 26.0715 33.4271 26.0233 33.5877C25.9752 33.7483 25.8848 33.8931 25.7617 34.0069C23.3449 36.2491 20.1709 37.4966 16.8742 37.5ZM9.69858 33.0131C13.7523 36.39 19.9961 36.39 24.0498 33.0131C23.7162 32.1261 23.1196 31.3622 22.3398 30.8237C21.5601 30.2852 20.6344 29.9978 19.6867 30H14.0617C13.1141 29.9978 12.1884 30.2852 11.4086 30.8237C10.6288 31.3622 10.0322 32.1261 9.69858 33.0131Z" fill="#F2F2F2"/>
<path d="M16.875 37.5C9.63938 37.5 3.75 31.6125 3.75 24.375C3.75 17.1375 9.63938 11.25 16.875 11.25C24.1106 11.25 30 17.1375 30 24.375C30 31.6125 24.1106 37.5 16.875 37.5ZM16.875 13.125C10.6706 13.125 5.625 18.1706 5.625 24.375C5.625 30.5794 10.6706 35.625 16.875 35.625C23.0794 35.625 28.125 30.5794 28.125 24.375C28.125 18.1706 23.0794 13.125 16.875 13.125ZM8.4375 43.0313C7.92 43.0313 7.5 42.705 7.5 42.1875V42C7.5 41.7514 7.59877 41.5129 7.77459 41.3371C7.9504 41.1613 8.18886 41.0625 8.4375 41.0625C8.68614 41.0625 8.9246 41.1613 9.10041 41.3371C9.27623 41.5129 9.375 41.7514 9.375 42C9.375 42.5175 8.955 43.0313 8.4375 43.0313ZM8.4375 46.7812C7.92 46.7812 7.5 46.455 7.5 45.9375V45.75C7.5 45.5014 7.59877 45.2629 7.77459 45.0871C7.9504 44.9113 8.18886 44.8125 8.4375 44.8125C8.68614 44.8125 8.9246 44.9113 9.10041 45.0871C9.27623 45.2629 9.375 45.5014 9.375 45.75C9.375 46.2675 8.955 46.7812 8.4375 46.7812ZM8.4375 50.5312C7.92 50.5312 7.5 50.205 7.5 49.6875V49.5C7.5 49.2514 7.59877 49.0129 7.77459 48.8371C7.9504 48.6613 8.18886 48.5625 8.4375 48.5625C8.68614 48.5625 8.9246 48.6613 9.10041 48.8371C9.27623 49.0129 9.375 49.2514 9.375 49.5C9.375 50.0175 8.955 50.5312 8.4375 50.5312ZM45.6375 50.625H44.0625C43.8139 50.625 43.5754 50.5262 43.3996 50.3504C43.2238 50.1746 43.125 49.9361 43.125 49.6875C43.125 49.4389 43.2238 49.2004 43.3996 49.0246C43.5754 48.8488 43.8139 48.75 44.0625 48.75H44.8819L45.3412 46.6219C45.3782 46.4496 45.4631 46.2912 45.5862 46.1652C45.7093 46.0391 45.8655 45.9504 46.0369 45.9094C46.9416 45.6876 47.8063 45.3264 48.6 44.8387C48.7497 44.7474 48.9219 44.6999 49.0973 44.7015C49.2726 44.7032 49.444 44.754 49.5919 44.8481L51.4481 46.035L52.5975 44.8763L51.4106 43.035C51.3154 42.8869 51.2636 42.7151 51.2613 42.5391C51.259 42.363 51.3062 42.1899 51.3975 42.0394C51.8853 41.246 52.2459 40.3812 52.4663 39.4763C52.5075 39.3054 52.5957 39.1495 52.721 39.0263C52.8463 38.903 53.0035 38.8173 53.175 38.7787L55.3106 38.3044V36.6975L53.175 36.2231C53.0035 36.1846 52.8463 36.0989 52.721 35.9756C52.5957 35.8523 52.5075 35.6965 52.4663 35.5256C52.2451 34.621 51.8845 33.7563 51.3975 32.9625C51.3054 32.8127 51.2576 32.6398 51.2596 32.464C51.2616 32.2881 51.3133 32.1165 51.4087 31.9687L52.5975 30.1106L51.45 28.9631L49.5919 30.1519C49.4441 30.2465 49.2727 30.2975 49.0973 30.2992C48.9219 30.3008 48.7495 30.253 48.6 30.1613C47.806 29.6743 46.9414 29.3131 46.0369 29.0906C45.8655 29.0496 45.7093 28.9609 45.5862 28.8348C45.4631 28.7088 45.3782 28.5504 45.3412 28.3781L44.8819 26.25H44.0625C43.8139 26.25 43.5754 26.1512 43.3996 25.9754C43.2238 25.7996 43.125 25.5611 43.125 25.3125C43.125 25.0639 43.2238 24.8254 43.3996 24.6496C43.5754 24.4738 43.8139 24.375 44.0625 24.375H45.6375C45.8517 24.3754 46.0593 24.4491 46.2257 24.5838C46.3922 24.7185 46.5075 24.9062 46.5525 25.1156L47.0531 27.4275C47.7394 27.6356 48.4125 27.9169 49.0612 28.2675L51.075 26.9794C51.2551 26.8643 51.4691 26.8142 51.6815 26.8374C51.894 26.8606 52.0921 26.9557 52.2431 27.1069L54.4575 29.3194C54.6084 29.4706 54.7031 29.6689 54.726 29.8813C54.7488 30.0938 54.6984 30.3076 54.5831 30.4875L53.295 32.5012C53.6456 33.1519 53.9269 33.825 54.135 34.5131L56.4506 35.0269C56.659 35.073 56.8454 35.1888 56.979 35.3551C57.1127 35.5215 57.1855 35.7285 57.1856 35.9419V39.0544C57.1855 39.2678 57.1127 39.4748 56.979 39.6411C56.8454 39.8075 56.659 39.9233 56.4506 39.9694L54.135 40.4831C53.9234 41.1797 53.6419 41.8531 53.295 42.4931L54.5813 44.4881C54.6977 44.6674 54.7491 44.8811 54.727 45.0938C54.7048 45.3064 54.6103 45.5049 54.4594 45.6562L52.245 47.8875C52.0941 48.0395 51.8957 48.1352 51.6828 48.1587C51.47 48.1822 51.2555 48.1322 51.075 48.0169L49.0612 46.7288C48.4216 47.075 47.7488 47.3564 47.0531 47.5688L46.5525 49.8806C46.5083 50.0907 46.3933 50.2793 46.2267 50.4147C46.0602 50.5502 45.8522 50.6245 45.6375 50.625Z" fill="#F2F2F2"/>
<path d="M46.0369 42.69C45.8236 42.6897 45.6169 42.6168 45.4507 42.4832C45.2845 42.3496 45.1688 42.1633 45.1227 41.9552C45.0766 41.747 45.1029 41.5293 45.1972 41.338C45.2914 41.1468 45.4481 40.9934 45.6412 40.9031C46.2886 40.6002 46.8365 40.1193 47.2209 39.5168C47.6054 38.9142 47.8105 38.2148 47.8125 37.5C47.8116 36.8816 47.658 36.2731 47.3652 35.7284C47.0725 35.1837 46.6497 34.7198 46.1345 34.3778C45.6192 34.0359 45.0275 33.8265 44.4119 33.7684C43.7962 33.7102 43.1758 33.805 42.6056 34.0444C42.4915 34.0981 42.3676 34.1282 42.2415 34.1329C42.1155 34.1376 41.9897 34.1168 41.8719 34.0718C41.754 34.0267 41.6465 33.9583 41.5557 33.8707C41.4649 33.7831 41.3927 33.6781 41.3434 33.5619C41.2942 33.4458 41.2689 33.3209 41.2691 33.1947C41.2693 33.0685 41.2949 32.9437 41.3445 32.8277C41.3941 32.7116 41.4665 32.6068 41.5576 32.5195C41.6486 32.4321 41.7564 32.3641 41.8744 32.3194C42.7296 31.9603 43.6602 31.8179 44.5836 31.905C45.507 31.992 46.3946 32.3058 47.1677 32.8183C47.9407 33.3309 48.5751 34.0264 49.0147 34.8431C49.4543 35.6599 49.6854 36.5725 49.6875 37.5C49.6851 38.5716 49.3777 39.6205 48.8014 40.5239C48.225 41.4274 47.4033 42.1481 46.4325 42.6019C46.3087 42.6599 46.1736 42.6899 46.0369 42.69ZM48.75 18.75H37.5C35.4319 18.75 33.75 17.0681 33.75 15C33.75 12.9319 35.4319 11.25 37.5 11.25H48.75C50.8181 11.25 52.5 12.9319 52.5 15C52.5 17.0681 50.8181 18.75 48.75 18.75ZM37.5 13.125C37.0172 13.1466 36.5614 13.3536 36.2274 13.7028C35.8934 14.0521 35.707 14.5167 35.707 15C35.707 15.4833 35.8934 15.9479 36.2274 16.2972C36.5614 16.6464 37.0172 16.8534 37.5 16.875H48.75C49.2328 16.8534 49.6886 16.6464 50.0226 16.2972C50.3566 15.9479 50.543 15.4833 50.543 15C50.543 14.5167 50.3566 14.0521 50.0226 13.7028C49.6886 13.3536 49.2328 13.1466 48.75 13.125H37.5Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    peopleTitle: "Mobile App Development Team",
    metaTitle: "Mobile App Development Company in Calicut | Develop Now",
    metaDescription:
      "Wisbato provides the best mobile app for your business in Calicut, that can help your business growth & online presents all over the world. We are creating Unique android, ios, flutter apps in Calicut.",
    description:
      "Our mobile app services will make your business bigger as we provide bespoke web solutions to each of our clients.",
    image: "",
    style: {
      backgroundColor: "#F6C4FE",
      position: "relative",
    },
    width: "45",
    context: {
      mainTitle:
        "Revolutionise <span>your Buisness</span> with our Mobile apps and its innovative design and technology",
      subTitle: "Why do businesses need mobile apps?",
      content: `<span>When <a href="https://en.wikipedia.org/wiki/Mobile_app" target="_blank" >mobile apps</a> are designed and released for businesses, a competitive advantage will be gained as they move ahead in the competition. Such apps can be effective in increasing productivity. Furthermore, developing a mobile application lets the customers make inquiries and carry out activities from anywhere. Such things can be advantageous for both users and businesses. Most notably, the portability factor is further enhanced with mobile application development, as it supports the portability of information and tools.</span>`,
    },
    workingProcess: [
      {
        title: "Strategy Development",
        image:
          "/images/workingProcess/mobile_app_dev/Strategy Development- app development company.jpg",
        alt: "app development company in calicut",
        list: [
          {
            id: 1,
            title: "Determination of objectives",
            content:
              "As the first stage of mobile app development, we will be identifying the objectives of the application such as who should be the target users, the results that should be fulfilled and the purpose of the application.",
          },
          {
            id: 2,
            title: "Examining the competitors",
            content:
              "Here, we will be closely studying the competitors of the application and with this step. We will be able to avert any errors that may have taken place in the sector.",
          },
          {
            id: 3,
            title: "Selection of platform",
            content:
              "The development team of our firm will now come to a decision on which platform we will be building the tool. It could be an iOS app, a custom Android app or even a cross-platform application",
          },
          {
            id: 4,
            title: "Settling on the monetization method",
            content:
              "This step will only apply to those providing a consumer application. Through in-app purchases or affiliate marketing, money could be earned by the client from their investments.",
          },
        ],
      },
      {
        title: "Analysis and Planning",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app Analysis and Planning.jpg",
        alt: "mobile app Analysis and Planning",
        list: [
          {
            id: 1,
            title: "Pinpointing the functional requirement of the app",
            content:
              "Here, we will comprehend the functions that your mobile app will be performing.",
          },
          {
            id: 2,
            title: "Spotting Non-functional requirement",
            content:
              "The non-functional needs of software will be considered in this stage. These requirements refer to the quality of the performance of the system and will have a significant influence on the user experience.",
          },
          {
            id: 3,
            title: "Product roadmap creation",
            content:
              "A comprehensive plan will be executed in this roadmap about the ways through which the objective of the apps will be fulfilled. We make a list of the features that the app is capable of prioritising the top priority function and decide which add-on could be introduced later.",
          },
          {
            id: 4,
            title: "Identifying skills required",
            content:
              "Before moving on with the project, we will be ensuring that we have decided on the technology stack aspect of the app project",
          },
        ],
      },
      {
        title: "UI/ UX Design",
        image:
          "/images/workingProcess/mobile_app_dev/UX Design-mobile app development company.jpg",
        alt: "UX Design-mobile app development company",
        list: [
          {
            id: 1,
            title: "Establishment of Information Architecture",
            content:
              "As the very first step of the app design process, we will establish rules about the information architecture of information. Workflow diagrams will be developed that aid in tracking user interactions.",
          },
          {
            id: 2,
            title: "Creation of wireframes",
            content:
              "Digital sketches called wireframes will be created, that focus on the user experience and app aesthetics. It is done to make sure the completed application is simple and easy to use.",
          },
          {
            id: 3,
            title: "Formation of style guides",
            content:
              "With the creation of style guides, the consistency within the app is maintained. It could be about the colour schemes, buttons, fonts, widgets, spacing and positioning instructions.",
          },
          {
            id: 4,
            title: "Mock-ups and development of prototypes",
            content:
              "Now that the style guide is developed, the final representation of the graphics of the apps will be done. Application of style guide to wireframes is implemented. Then we will verify that the design is consistent through the app. In the final stage of designing, a prototype is created and the identification of flaws, if any, could be done.1",
          },
        ],
      },
      {
        title: "Application Testing",
        image:
          "/images/workingProcess/mobile_app_dev/mobile Application Testing.jpg",
        alt: "mobile app development company in calicut",
        list: [
          {
            id: 1,
            title: "Checking the functionality",
            content:
              "The features of the applications and it is ensured that everything works well.",
          },
          {
            id: 2,
            title: "Testing the performance of the app",
            content:
              "The responsiveness of the app will be tested and how the increase in concurrency users also be checked.",
          },
          {
            id: 3,
            title: "Security of the app",
            content:
              "We will be ensuring that the app can satisfy the security standards, before moving on to the next level.",
          },
        ],
      },
      {
        title: "Deployment",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app deployment.jpg",
        alt: "mobile app deployment",
        list: [
          {
            id: 1,
            title: "Release to app stores",
            content:
              "Now that the testing of the app is concluded, it will now be prepared for release to respective app stores. If it is an Android app, then it will be released in Google Play Store and Apple App Store for iOS apps.",
          },
          {
            id: 2,
            title: "Filling out the forms",
            content:
              "For submitting the app for further review, these stores will be expecting us to fill out many forms.",
          },
          {
            id: 3,
            title: "Adhering to the guidelines of platforms",
            content:
              "For the submission of each platform, our developers need to adhere to each of their guidelines and requirements.",
          },
          {
            id: 4,
            title: "Launch of the app",
            content:
              "Now the app is made available for the users to officially download. It will be further promoted by varied social media promotion or press releases, app store optimization (ASO) and so on.",
          },
        ],
      },
      {
        title: "Monitoring of the performance",
        image:
          "/images/workingProcess/mobile_app_dev/mobile app Monitoring of the performance.jpg",
        alt: "best mobile app development company in calicut",
        list: [
          {
            id: 1,
            title: "Keeping track of the performance",
            content:
              "Even after the submission of the app, we will keep track of bugs, customer requests and overall app performance.",
          },
          {
            id: 2,
            title: "Gathering feedback from the users",
            content:
              "Our developers will be collecting user feedback and releasing updates.",
          },
          {
            id: 3,
            title: "Doing continuous maintenance",
            content:
              "To keep up with the recent OS changes, performance standards and review guidelines, the mobile apps will be regularly maintained.",
          },
          {
            id: 4,
            title: "Further Monitoring",
            content:
              "New features will be introduced or enhancement of the existing ones will be done to ensure that the app is running seamlessly and retaining the interest of the user.",
          },
        ],
      },
    ],
    outcomes: outcomes[3],
    FAQData: [
      {
        id: 1,
        title: "Is it mandatory for businesses to have a mobile app?",
        content:
          "Having a mobile application may aid you to attract new consumers, while also retaining the older ones by promoting new products and services, impressive deals, loyalty programmes and others. A real-time space for communication with your consumers could be created with such mobile applications.",
      },
      {
        id: 2,
        title: "How do mobile applications vary from mobile apps? ",
        content:
          "Mobile websites have restrictions in terms of what can be produced with web technologies and how they display in a browser. Mobile applications, on the other hand, may leverage native device capabilities like push notifications and GPS to provide a more immersive and personalised experience.",
      },
      {
        id: 3,
        title: "Is a mobile application better than a website?",
        content:
          "Yes, a better user experience could be availed through mobile apps much more easily than loading an entire website. It is so because mobile apps are already downloaded on devices and it does not have to be loaded every time from servers.",
      },
      {
        id: 4,
        title: "How much does it cost to develop a mobile app?",
        content:
          "The cost of developing a mobile app varies widely based on its complexity and features. Prices start at ₹50,000 for basic apps and can go up to ₹5,00,000 for apps with advanced features. The final cost depends on the specific requirements and functionalities you need for your app",
      },
      {
        id: 5,
        title: "What are the steps involved in mobile app development?",
        content: `The mobile app development process involves several key steps. First, strategy-planning-choose the app development platform-design and development-testing-App store optimization-deployed and launched to users. Finally, ongoing maintenance is essential to address any issues and update the app as needed. Check full detailed <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" >app development process</a>`,
      },
    ],
  },
  {
    id: 8,
    icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9375 7.5H25.3125C25.0639 7.5 24.8254 7.40123 24.6496 7.22541C24.4738 7.0496 24.375 6.81114 24.375 6.5625C24.375 6.31386 24.4738 6.0754 24.6496 5.89959C24.8254 5.72377 25.0639 5.625 25.3125 5.625H30.9375C31.1861 5.625 31.4246 5.72377 31.6004 5.89959C31.7762 6.0754 31.875 6.31386 31.875 6.5625C31.875 6.81114 31.7762 7.0496 31.6004 7.22541C31.4246 7.40123 31.1861 7.5 30.9375 7.5ZM38.4375 58.125H17.8125C16.5698 58.1235 15.3783 57.6292 14.4996 56.7504C13.6208 55.8717 13.1265 54.6802 13.125 53.4375V40.3125C13.125 40.0639 13.2238 39.8254 13.3996 39.6496C13.5754 39.4738 13.8139 39.375 14.0625 39.375C14.3111 39.375 14.5496 39.4738 14.7254 39.6496C14.9012 39.8254 15 40.0639 15 40.3125V53.4375C15 54.9881 16.2619 56.25 17.8125 56.25H38.4375C39.9881 56.25 41.25 54.9881 41.25 53.4375V21.5625C41.25 21.3139 41.3488 21.0754 41.5246 20.8996C41.7004 20.7238 41.9389 20.625 42.1875 20.625C42.4361 20.625 42.6746 20.7238 42.8504 20.8996C43.0262 21.0754 43.125 21.3139 43.125 21.5625V53.4375C43.125 56.0213 41.0231 58.125 38.4375 58.125Z" fill="#F2F2F2"/>
<path d="M42.1867 9.375C41.9381 9.375 41.6996 9.27623 41.5238 9.10041C41.348 8.9246 41.2492 8.68614 41.2492 8.4375V6.5625C41.2492 5.01187 39.9873 3.75 38.4367 3.75H17.8117C16.2611 3.75 14.9992 5.01187 14.9992 6.5625V8.4375C14.9992 8.68614 14.9004 8.9246 14.7246 9.10041C14.5488 9.27623 14.3104 9.375 14.0617 9.375C13.8131 9.375 13.5746 9.27623 13.3988 9.10041C13.223 8.9246 13.1242 8.68614 13.1242 8.4375V6.5625C13.1242 3.97875 15.2261 1.875 17.8117 1.875H38.4367C41.0223 1.875 43.1242 3.97875 43.1242 6.5625V8.4375C43.1242 8.68614 43.0254 8.9246 42.8496 9.10041C42.6738 9.27623 42.4354 9.375 42.1867 9.375ZM27.1867 46.875H19.6867C19.4381 46.875 19.1996 46.7762 19.0238 46.6004C18.848 46.4246 18.7492 46.1861 18.7492 45.9375C18.7492 45.6889 18.848 45.4504 19.0238 45.2746C19.1996 45.0988 19.4381 45 19.6867 45H27.1867C27.4354 45 27.6738 45.0988 27.8496 45.2746C28.0254 45.4504 28.1242 45.6889 28.1242 45.9375C28.1242 46.1861 28.0254 46.4246 27.8496 46.6004C27.6738 46.7762 27.4354 46.875 27.1867 46.875ZM32.8117 50.625H19.6867C19.4381 50.625 19.1996 50.5262 19.0238 50.3504C18.848 50.1746 18.7492 49.9361 18.7492 49.6875C18.7492 49.4389 18.848 49.2004 19.0238 49.0246C19.1996 48.8488 19.4381 48.75 19.6867 48.75H32.8117C33.0604 48.75 33.2988 48.8488 33.4746 49.0246C33.6504 49.2004 33.7492 49.4389 33.7492 49.6875C33.7492 49.9361 33.6504 50.1746 33.4746 50.3504C33.2988 50.5262 33.0604 50.625 32.8117 50.625ZM36.5617 43.125H19.6867C19.4381 43.125 19.1996 43.0262 19.0238 42.8504C18.848 42.6746 18.7492 42.4361 18.7492 42.1875C18.7492 41.9389 18.848 41.7004 19.0238 41.5246C19.1996 41.3488 19.4381 41.25 19.6867 41.25H36.5617C36.8104 41.25 37.0488 41.3488 37.2246 41.5246C37.4004 41.7004 37.4992 41.9389 37.4992 42.1875C37.4992 42.4361 37.4004 42.6746 37.2246 42.8504C37.0488 43.0262 36.8104 43.125 36.5617 43.125ZM16.8742 26.25C14.2886 26.25 12.1867 24.1462 12.1867 21.5625C12.1867 18.9788 14.2886 16.875 16.8742 16.875C19.4598 16.875 21.5617 18.9788 21.5617 21.5625C21.5617 24.1462 19.4598 26.25 16.8742 26.25ZM16.8742 18.75C15.3236 18.75 14.0617 20.0119 14.0617 21.5625C14.0617 23.1131 15.3236 24.375 16.8742 24.375C18.4248 24.375 19.6867 23.1131 19.6867 21.5625C19.6867 20.0119 18.4248 18.75 16.8742 18.75ZM16.8742 37.5C13.5784 37.4966 10.4052 36.2498 7.98859 34.0088C7.86547 33.8949 7.77514 33.7502 7.72699 33.5896C7.67884 33.429 7.67464 33.2584 7.71483 33.0956C8.06216 31.6754 8.8768 30.4132 10.0279 29.5117C11.179 28.6102 12.5996 28.1218 14.0617 28.125H19.6867C21.1486 28.1223 22.569 28.6106 23.7203 29.5116C24.8715 30.4126 25.6868 31.6741 26.0355 33.0938C26.0757 33.2565 26.0715 33.4271 26.0233 33.5877C25.9752 33.7483 25.8848 33.8931 25.7617 34.0069C23.3449 36.2491 20.1709 37.4966 16.8742 37.5ZM9.69858 33.0131C13.7523 36.39 19.9961 36.39 24.0498 33.0131C23.7162 32.1261 23.1196 31.3622 22.3398 30.8237C21.5601 30.2852 20.6344 29.9978 19.6867 30H14.0617C13.1141 29.9978 12.1884 30.2852 11.4086 30.8237C10.6288 31.3622 10.0322 32.1261 9.69858 33.0131Z" fill="#F2F2F2"/>
<path d="M16.875 37.5C9.63938 37.5 3.75 31.6125 3.75 24.375C3.75 17.1375 9.63938 11.25 16.875 11.25C24.1106 11.25 30 17.1375 30 24.375C30 31.6125 24.1106 37.5 16.875 37.5ZM16.875 13.125C10.6706 13.125 5.625 18.1706 5.625 24.375C5.625 30.5794 10.6706 35.625 16.875 35.625C23.0794 35.625 28.125 30.5794 28.125 24.375C28.125 18.1706 23.0794 13.125 16.875 13.125ZM8.4375 43.0313C7.92 43.0313 7.5 42.705 7.5 42.1875V42C7.5 41.7514 7.59877 41.5129 7.77459 41.3371C7.9504 41.1613 8.18886 41.0625 8.4375 41.0625C8.68614 41.0625 8.9246 41.1613 9.10041 41.3371C9.27623 41.5129 9.375 41.7514 9.375 42C9.375 42.5175 8.955 43.0313 8.4375 43.0313ZM8.4375 46.7812C7.92 46.7812 7.5 46.455 7.5 45.9375V45.75C7.5 45.5014 7.59877 45.2629 7.77459 45.0871C7.9504 44.9113 8.18886 44.8125 8.4375 44.8125C8.68614 44.8125 8.9246 44.9113 9.10041 45.0871C9.27623 45.2629 9.375 45.5014 9.375 45.75C9.375 46.2675 8.955 46.7812 8.4375 46.7812ZM8.4375 50.5312C7.92 50.5312 7.5 50.205 7.5 49.6875V49.5C7.5 49.2514 7.59877 49.0129 7.77459 48.8371C7.9504 48.6613 8.18886 48.5625 8.4375 48.5625C8.68614 48.5625 8.9246 48.6613 9.10041 48.8371C9.27623 49.0129 9.375 49.2514 9.375 49.5C9.375 50.0175 8.955 50.5312 8.4375 50.5312ZM45.6375 50.625H44.0625C43.8139 50.625 43.5754 50.5262 43.3996 50.3504C43.2238 50.1746 43.125 49.9361 43.125 49.6875C43.125 49.4389 43.2238 49.2004 43.3996 49.0246C43.5754 48.8488 43.8139 48.75 44.0625 48.75H44.8819L45.3412 46.6219C45.3782 46.4496 45.4631 46.2912 45.5862 46.1652C45.7093 46.0391 45.8655 45.9504 46.0369 45.9094C46.9416 45.6876 47.8063 45.3264 48.6 44.8387C48.7497 44.7474 48.9219 44.6999 49.0973 44.7015C49.2726 44.7032 49.444 44.754 49.5919 44.8481L51.4481 46.035L52.5975 44.8763L51.4106 43.035C51.3154 42.8869 51.2636 42.7151 51.2613 42.5391C51.259 42.363 51.3062 42.1899 51.3975 42.0394C51.8853 41.246 52.2459 40.3812 52.4663 39.4763C52.5075 39.3054 52.5957 39.1495 52.721 39.0263C52.8463 38.903 53.0035 38.8173 53.175 38.7787L55.3106 38.3044V36.6975L53.175 36.2231C53.0035 36.1846 52.8463 36.0989 52.721 35.9756C52.5957 35.8523 52.5075 35.6965 52.4663 35.5256C52.2451 34.621 51.8845 33.7563 51.3975 32.9625C51.3054 32.8127 51.2576 32.6398 51.2596 32.464C51.2616 32.2881 51.3133 32.1165 51.4087 31.9687L52.5975 30.1106L51.45 28.9631L49.5919 30.1519C49.4441 30.2465 49.2727 30.2975 49.0973 30.2992C48.9219 30.3008 48.7495 30.253 48.6 30.1613C47.806 29.6743 46.9414 29.3131 46.0369 29.0906C45.8655 29.0496 45.7093 28.9609 45.5862 28.8348C45.4631 28.7088 45.3782 28.5504 45.3412 28.3781L44.8819 26.25H44.0625C43.8139 26.25 43.5754 26.1512 43.3996 25.9754C43.2238 25.7996 43.125 25.5611 43.125 25.3125C43.125 25.0639 43.2238 24.8254 43.3996 24.6496C43.5754 24.4738 43.8139 24.375 44.0625 24.375H45.6375C45.8517 24.3754 46.0593 24.4491 46.2257 24.5838C46.3922 24.7185 46.5075 24.9062 46.5525 25.1156L47.0531 27.4275C47.7394 27.6356 48.4125 27.9169 49.0612 28.2675L51.075 26.9794C51.2551 26.8643 51.4691 26.8142 51.6815 26.8374C51.894 26.8606 52.0921 26.9557 52.2431 27.1069L54.4575 29.3194C54.6084 29.4706 54.7031 29.6689 54.726 29.8813C54.7488 30.0938 54.6984 30.3076 54.5831 30.4875L53.295 32.5012C53.6456 33.1519 53.9269 33.825 54.135 34.5131L56.4506 35.0269C56.659 35.073 56.8454 35.1888 56.979 35.3551C57.1127 35.5215 57.1855 35.7285 57.1856 35.9419V39.0544C57.1855 39.2678 57.1127 39.4748 56.979 39.6411C56.8454 39.8075 56.659 39.9233 56.4506 39.9694L54.135 40.4831C53.9234 41.1797 53.6419 41.8531 53.295 42.4931L54.5813 44.4881C54.6977 44.6674 54.7491 44.8811 54.727 45.0938C54.7048 45.3064 54.6103 45.5049 54.4594 45.6562L52.245 47.8875C52.0941 48.0395 51.8957 48.1352 51.6828 48.1587C51.47 48.1822 51.2555 48.1322 51.075 48.0169L49.0612 46.7288C48.4216 47.075 47.7488 47.3564 47.0531 47.5688L46.5525 49.8806C46.5083 50.0907 46.3933 50.2793 46.2267 50.4147C46.0602 50.5502 45.8522 50.6245 45.6375 50.625Z" fill="#F2F2F2"/>
<path d="M46.0369 42.69C45.8236 42.6897 45.6169 42.6168 45.4507 42.4832C45.2845 42.3496 45.1688 42.1633 45.1227 41.9552C45.0766 41.747 45.1029 41.5293 45.1972 41.338C45.2914 41.1468 45.4481 40.9934 45.6412 40.9031C46.2886 40.6002 46.8365 40.1193 47.2209 39.5168C47.6054 38.9142 47.8105 38.2148 47.8125 37.5C47.8116 36.8816 47.658 36.2731 47.3652 35.7284C47.0725 35.1837 46.6497 34.7198 46.1345 34.3778C45.6192 34.0359 45.0275 33.8265 44.4119 33.7684C43.7962 33.7102 43.1758 33.805 42.6056 34.0444C42.4915 34.0981 42.3676 34.1282 42.2415 34.1329C42.1155 34.1376 41.9897 34.1168 41.8719 34.0718C41.754 34.0267 41.6465 33.9583 41.5557 33.8707C41.4649 33.7831 41.3927 33.6781 41.3434 33.5619C41.2942 33.4458 41.2689 33.3209 41.2691 33.1947C41.2693 33.0685 41.2949 32.9437 41.3445 32.8277C41.3941 32.7116 41.4665 32.6068 41.5576 32.5195C41.6486 32.4321 41.7564 32.3641 41.8744 32.3194C42.7296 31.9603 43.6602 31.8179 44.5836 31.905C45.507 31.992 46.3946 32.3058 47.1677 32.8183C47.9407 33.3309 48.5751 34.0264 49.0147 34.8431C49.4543 35.6599 49.6854 36.5725 49.6875 37.5C49.6851 38.5716 49.3777 39.6205 48.8014 40.5239C48.225 41.4274 47.4033 42.1481 46.4325 42.6019C46.3087 42.6599 46.1736 42.6899 46.0369 42.69ZM48.75 18.75H37.5C35.4319 18.75 33.75 17.0681 33.75 15C33.75 12.9319 35.4319 11.25 37.5 11.25H48.75C50.8181 11.25 52.5 12.9319 52.5 15C52.5 17.0681 50.8181 18.75 48.75 18.75ZM37.5 13.125C37.0172 13.1466 36.5614 13.3536 36.2274 13.7028C35.8934 14.0521 35.707 14.5167 35.707 15C35.707 15.4833 35.8934 15.9479 36.2274 16.2972C36.5614 16.6464 37.0172 16.8534 37.5 16.875H48.75C49.2328 16.8534 49.6886 16.6464 50.0226 16.2972C50.3566 15.9479 50.543 15.4833 50.543 15C50.543 14.5167 50.3566 14.0521 50.0226 13.7028C49.6886 13.3536 49.2328 13.1466 48.75 13.125H37.5Z" fill="#F2F2F2"/>
</svg>
`,
    slug: "it-support-in-calicut",
    title: "IT Support",
    peopleTitle: "IT Support Team",
    metaTitle: "Wisbato NO1 IT Company In Calicut, Kerala",
    metaDescription:
      "We are the leading IT company in Calicut, Provide all types of IT services and IT support on your business",
    description:
      "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
    image: "/images/about3.jpg",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Your one-stop answer for all of <span>your technical</span> concerns",
      subTitle: "What is IT Support and how are they crucial?",
      content: `IT support is the approach to manage and solve technical problems. It ensures the system runs in an efficient and secure manner. It is crucial for businesses because it offers to reduce downtime while increasing efficiency of productivity and secures data against the dangers of losing it. Wisbato's IT support team offers a comprehensive range of services, from fixing issues activities through to system maintenance in operations, ensuring your business thrives worry-free of any technical issues in its way. Trust Wisbato and get your business secure, streamlined, and focused on growth minus all the <a href="https://en.wikipedia.org/wiki/Technical_support" target="_blank">technical support</a>.`,
    },
    workingProcess: [
      {
        id: 1,
        title: "Issue Identification & Categorization",
        image:
          "/images/workingProcess/IT support/Issue Identification & Categorization.jpg",
        alt: " IT support in calicut",
        list: [
          {
            id: 1,
            title: "Communication with the IT support team",
            content:
              "Through mediums such as phone, email, in-person, or ticketing system, users will be communicating with IT support.",
          },
          {
            id: 2,
            title: "Gathering of information",
            content:
              "Here, required data-reported issues such as error messages and troubleshooting steps will be collected by our support team.",
          },
          {
            id: 3,
            title: "Analysis of the issue",
            content:
              "To assess the severity of the reported issue and its impact on business operations, the IT support team will be analyzing them.",
          },
          {
            id: 4,
            title: "Categorization of the issue",
            content:
              "The issues will be classified according to the nature of the reported issue such as software, hard or network and urgency.",
          },
        ],
      },
      {
        id: 2,
        title: "Diagnosis and Troubleshooting",
        image:
          "/images/workingProcess/IT support/Diagnosis and Troubleshooting.jpg",
        alt: "IT support for calicut business owners",
        list: [
          {
            id: 5,
            title: "Identification of the cause of the issue",
            content:
              "The root cause of the issue will be identified through diagnostic tools and knowledge bases by support technicians.",
          },
          {
            id: 6,
            title: "Troubleshooting",
            content:
              "The support team of our firm will perform troubleshooting procedures to isolate and solve the problem. It could be software configuration changes, hardware inspection, or network analysis.",
          },
          {
            id: 7,
            title: "Resolution of the issue",
            content:
              "Now that the root cause is identified, to resolve the issue, the experts of our team will execute adequate fixes or workarounds.",
          },
          {
            id: 8,
            title: "Workaround implementation",
            content:
              "The process of resolution comprises reinstalling drivers, replacing faulty hardware components, applying software patches, or resetting configurations.",
          },
        ],
      },
      {
        id: 3,
        title: "Further communication",
        image: "/images/workingProcess/IT support/Further communication.jpg",
        alt: "further communication for IT support",
        list: [
          {
            id: 9,
            title: "Informing about the progress",
            content:
              "Our support staff will communicate with customers often during the resolution process to provide information on progress and timelines.",
          },
          {
            id: 10,
            title: "Documentation of steps taken",
            content:
              "A record of the process implemented and solutions applied will be kept by the team for future reference and knowledge sharing.",
          },
          {
            id: 11,
            title: "Verification",
            content:
              "The support team will verify the issue that has been resolved after the implementation of the solution.",
          },
          {
            id: 12,
            title: "Testing",
            content:
              "Tests will be conducted to make sure that the service or the system is functioning properly after the resolution of the issue. To ensure that other functionalities are not impacted, we will be executing user acceptance testing (UAT) or regression testing.",
          },
        ],
      },
      {
        id: 4,
        title: "Closure and Follow-up",
        image: "/images/workingProcess/IT support/Closure and Follow-up.jpg",
        alt: " follow up for works",
        list: [
          {
            id: 13,
            title: "Concluding the issue",
            content:
              "We will be informing our clients, once the issue is resolved and verified and the support ticket is closed.",
          },
          {
            id: 14,
            title: "Gathering feedbacks",
            content:
              "Feedback will be gathered about the support experience. Moreover, to ensure that the issue has not recurred, our team will be following up with you.",
          },
          {
            id: 15,
            title: "Further improvement",
            content:
              "To identify areas of further improvement, trends, and recurring issues, our team will be reviewing incident data and collecting feedback regularly.",
          },
          {
            id: 16,
            title: "Taking precautions",
            content:
              "As a step to handle future incidents, our support team will update knowledge bases, training materials, and documentation to improve the efficiency and effectiveness of the team.",
          },
        ],
      },
    ],
    outcomes: outcomes[2],
    FAQData: [
      {
        id: 1,
        title:
          " What types of IT support services do you offer for businesses in Calicut?        ",
        content:
          "We offer a wide range of IT and technical support services to businesses in Calicut, including network setup and management, hardware and software troubleshooting, cybersecurity solutions, data backup and recovery, technical support and IT consultancy services. Our team ensures that your business runs smoothly with minimal technical disruptions.",
      },
      {
        id: 2,
        title: "Do you provide remote IT support for businesses in Calicut?",
        content:
          "Yes, we provide both remote and on-site IT support to businesses in Calicut. Our remote services are designed to resolve most issues quickly without needing to visit your location, saving you time and ensuring that your systems are up and running as soon as possible.",
      },
      {
        id: 3,
        title: "How quickly can you respond to IT emergencies in Calicut?",
        content:
          "Our IT support team is available 24/7 to assist with emergencies. For businesses in Calicut, we aim to respond to critical issues within a few hours, whether remotely or in person, depending on the nature of the problem.",
      },
      {
        id: 4,
        title:
          " Is your IT support service affordable for small businesses in Calicut?",
        content:
          "Absolutely! We offer flexible and affordable IT support plans specifically designed for small businesses in Calicut. Whether you need occasional assistance or ongoing support, we have cost-effective solutions that fit your budget without compromising on quality.",
      },
    ],
  },
  {
    id: 9,
    slug: "software-development-in-calicut",
    title: "Software Development",
    peopleTitle: "Software Development Team",
    metaTitle: " Best software development company in Calicut.",
    metaDescription:
      "Develop a custom software for your business with affordable price with leading software development company in Calicut- Contact now",
    description:
      "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
    image: "/images/about3.jpg",
    style: {
      backgroundColor: "#F7D2DB",
    },
    width: "55",
    context: {
      mainTitle:
        "Simplify Your Business with <span>Customized Software</span> Solutions",
      subTitle: "WHY BUSINESS NEED A CUSTOMIZED SOFTWARE.",
      content: `<a href="https://en.wikipedia.org/wiki/Software_development" target="_blank">Software development</a> is key to business success because it helps companies streamline operations, reduce time, enhance customer experiences, and Be competitive in the online marketplace .Custom software solutions allow businesses to automate processes, improve efficiency, and offer custom services to their clients. For businesses in Kerala, partnering with a reliable software development company in Calicut ensures access to new technology and expert guidance, helping them grow and innovate effectively.
`,
    },
    workingProcess: [
      {
        id: 1,
        title:
          "Customized Software Solutions to Simplify Your Business and Drive To Success.",
        image:
          "/images/workingProcess/software/Requirement Gathering and Analysis.jpg",
        alt: "software company in Calicut",
        list: [
          {
            id: 1,
            title: "Understanding Business Needs",
            content:
              "Before starting any project, the development team works closely with stakeholders to understand the business goals and specific software needs.",
          },
          {
            id: 2,
            title: "Identifying Target Users",
            content:
              "Defining who the end-users will be helps shape the features and usability of the software.",
          },
          {
            id: 3,
            title: "Technical Feasibility Study",
            content:
              "A technical assessment is conducted to determine whether the proposed solution is achievable within the constraints of technology and resources.",
          },
          {
            id: 4,
            title: "Documenting Requirements",
            content:
              "All the gathered requirements are documented in a detailed specification document that guides the rest of the development process.",
          },
        ],
      },
      {
        id: 2,
        title: "Project Planning and Management",
        image:
          "/images/workingProcess/software/Project Planning and Management.jpg",
        alt: " software project planning and manage",
        list: [
          {
            id: 5,
            title: "Defining Project Scope",
            content:
              "The project scope outlines the software’s features, goals, and deliverables, ensuring everyone understands what is expected.",
          },
          {
            id: 6,
            title: "Timeline and Milestone Setup",
            content:
              "Setting clear deadlines and milestones helps keep the project on track and ensures that key goals are met at each stage of development.",
          },
          {
            id: 7,
            title: "Resource Allocation",
            content:
              "Assigning the right team members and tools to different aspects of the project ensures efficient use of resources and skills.",
          },
          {
            id: 8,
            title: "Risk Management",
            content:
              "Identifying potential risks early on allows the team to mitigate issues that may impact the project’s timeline or quality.",
          },
        ],
      },
      {
        id: 3,
        title: "System Design",
        image: "/images/workingProcess/software/system design.jpg",
        alt: "design your software project ",
        list: [
          {
            id: 9,
            title: "High-Level System Architecture",
            content:
              "The team designs a blueprint for the software, outlining the structure and interaction between components.",
          },
          {
            id: 10,
            title: " Database Design",
            content:
              "Database architects define how the software will store, retrieve, and manage data.",
          },
          {
            id: 11,
            title: " User Interface (UI) Design",
            content:
              "Designers create user-friendly interfaces that ensure smooth user interaction with the system.",
          },
          {
            id: 12,
            title: " Technology Stack Selection",
            content:
              "Choosing the right programming languages, frameworks, and tools for building the software is critical at this stage.",
          },
        ],
      },
      {
        id: 4,
        title: " Implementation (Coding)",
        image: "/images/workingProcess/software/Implementation.jpg",
        alt: "best software development company in Calicut",
        list: [
          {
            id: 13,
            title: " Modular Coding",
            content:
              "The project is divided into smaller, manageable modules that are developed independently.",
          },
          {
            id: 14,
            title: "Following Best Practices",
            content:
              "Developers adhere to coding standards and industry best practices to ensure clean, maintainable code.",
          },
          {
            id: 15,
            title: "Regular Code Reviews",
            content:
              "Senior developers or team leads review the code to identify any issues or improvements.",
          },
          {
            id: 16,
            title: " Version Control",
            content:
              "Version control systems like Git are used to track changes, manage collaboration, and avoid code conflicts.",
          },
        ],
      },
      {
        id: 5,
        title: "Testing and Quality Assurance (QA)",
        image:
          "/images/workingProcess/software/Testing and Quality Assurance.jpg",
        alt: "software developers in Calicut test your quality and mistakes",

        list: [
          {
            id: 13,
            title: "  Unit Testing",
            content:
              "Each module is tested individually to ensure that it functions as expected.",
          },
          {
            id: 14,
            title: " Integration Testing",
            content:
              "The team checks how different modules work together to detect any issues with integration.",
          },
          {
            id: 15,
            title: "Performance Testing",
            content:
              "Testing the software for speed, scalability, and responsiveness under different loads.",
          },
          {
            id: 16,
            title: "  Bug Fixing and Optimization",
            content:
              "Any bugs discovered during testing are fixed, and the software is optimized for better performance.",
          },
        ],
      },
      {
        id: 6,
        title: " Deployment and Maintenance",
        image:
          "/images/workingProcess/software/Deployment and Maintenance (2).jpg",
        alt: "software Deployment and Maintenance",
        list: [
          {
            id: 13,
            title: "  Deployment to Live Environment",
            content:
              "Once the software is thoroughly tested, it is deployed to the production environment for real-world use.",
          },
          {
            id: 14,
            title: "User Training and Documentation",
            content:
              "End-users are trained on how to use the software, and comprehensive documentation is provided.",
          },
          {
            id: 15,
            title: "Monitoring and Feedback",
            content:
              "The software is monitored for any performance issues or bugs, and user feedback is collected for further improvement.",
          },
          {
            id: 16,
            title: "Ongoing Maintenance and Updates",
            content:
              "Regular updates and patches are released to fix issues and add new features, ensuring the software stays up-to-date and secure.",
          },
        ],
      },
    ],
    outcomes: outcomes[6],
    FAQData: [
      {
        id: 1,
        title:
          "What types of software solutions do you offer for businesses in Calicut?     ",
        content: ` We offer all types of software solutions custom to meet the unique needs of businesses in Calicut. Our services include custom software development, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile applications</a>,<a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web applications</a>, cloud computing, system integration, and more. Whether you're a small startup or a large enterprise, we can create solutions that enhance your operations and drive growth.
`,
      },
      {
        id: 2,
        title:
          " How long does the software development process typically take?",
        content:
          "The duration of the software development process varies based on the complexity and scope of the project. Generally, smaller projects may take a few weeks, while larger, more complex systems can take several months. We prioritize thorough planning and communication, so we'll provide you with a detailed timeline during the initial consultation to ensure you know what to expect.",
      },
      {
        id: 3,
        title:
          "How do you ensure the software meets our specific business needs?",
        content:
          " We follow a comprehensive approach to understand your business requirements fully. This includes initial consultations, requirement analysis, and ongoing feedback throughout the development process. Our goal is to create a solution that aligns perfectly with your objectives, and we encourage collaboration to ensure we meet your expectations at every stage.",
      },
      {
        id: 4,
        title: " What support do you provide after the software is deployed?",
        content:
          " Our commitment to your success doesn’t end with deployment. We offer ongoing support and maintenance services to ensure your software runs smoothly. This includes troubleshooting, updates, and enhancements as needed, so you can focus on your core business activities while we take care of the technical aspects.",
      },
      {
        id: 5,
        title:
          " How do I know if custom software is the right choice for my business?",
        content:
          " Custom software is an excellent choice if your business has specific needs that off-the-shelf solutions cannot meet. It allows for tailored functionality, better integration with existing systems, and scalability as your business grows. If you’re unsure, we offer consultations to discuss your unique challenges and how custom software can address them effectively. This way, you can make an informed decision that aligns with your business goals.",
      },
    ],
  },
];

export type ServicePlatformData = {
  id: number;
  icon: string;
  title?: string;
};

export const servicePlatformData: ServicePlatformData[] = [
  {
    id: 1,
    icon: `<svg width="32" height="32" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.375 1.3125V44.875L29 37.1875L13.625 44.875V1.3125M44.375 1.3125H49.5C51.5389 1.3125 53.4942 2.1224 54.9359 3.5641C56.3776 5.0058 57.1875 6.9611 57.1875 9V50C57.1875 52.0389 56.3776 53.9942 54.9359 55.4359C53.4942 56.8776 51.5389 57.6875 49.5 57.6875H8.5C6.4611 57.6875 4.5058 56.8776 3.0641 55.4359C1.6224 53.9942 0.8125 52.0389 0.8125 50V9C0.8125 6.9611 1.6224 5.0058 3.0641 3.5641C4.5058 2.1224 6.4611 1.3125 8.5 1.3125H13.625M44.375 1.3125H13.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "booking",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M34.5628 0.852603V2.7933C34.5628 3.9344 35.0678 5.0141 35.9458 5.7452L39.5948 8.7861C41.1048 10.0468 41.4228 12.2369 40.3328 13.8769L38.5908 16.4941C37.6418 17.9161 36.2458 18.9813 34.6238 19.5213L34.1348 19.6852C33.5838 19.8696 33.0828 20.1785 32.6698 20.588C32.2578 20.9976 31.9448 21.4967 31.7568 22.0466C31.5678 22.5966 31.5088 23.1825 31.5838 23.759C31.6588 24.3355 31.8658 24.8869 32.1878 25.3706C33.4488 27.2668 32.7648 29.8362 30.7288 30.8543L21.7498 35.3438L23.1948 38.9621C23.4868 39.697 23.5018 40.5126 23.2378 41.2578C22.9738 42.0029 22.4478 42.6269 21.7588 43.0141C21.0698 43.4013 20.2628 43.5254 19.4888 43.3633C18.7158 43.2012 18.0268 42.764 17.5508 42.1328L15.2308 39.0373C14.8378 38.5133 14.3168 38.0985 13.7188 37.8323C13.1198 37.5661 12.4638 37.4572 11.8108 37.5161C11.1588 37.575 10.5318 37.7996 9.99079 38.1687C9.44979 38.5378 9.01179 39.039 8.71879 39.6249L6.37479 44.3126L4.28379 44.8353M34.5628 0.852603C29.1608 0.399303 23.7358 1.3854 18.8358 3.7043C13.9368 6.0232 9.73679 9.5961 6.66279 14.0608C3.58979 18.5256 1.75079 23.7235 1.33279 29.1279C0.914786 34.5323 1.93279 39.9512 4.28379 44.8353M34.5628 0.852603C39.9188 1.2993 45.0638 3.1456 49.4868 6.2009C53.9088 9.2562 57.4518 13.4172 59.7648 18.2692C62.0778 23.1211 63.0778 28.4944 62.6668 33.8535C62.2548 39.2126 60.4458 44.3703 57.4198 48.8123L56.8148 47.0049C56.3048 45.4743 55.3248 44.1431 54.0158 43.2C52.7068 42.2569 51.1338 41.7496 49.5208 41.7501H47.3748L46.2678 40.6431C45.7118 40.0861 45.0308 39.6693 44.2828 39.4271C43.5338 39.1848 42.7378 39.1241 41.9608 39.25C41.1838 39.3758 40.4478 39.6845 39.8138 40.1507C39.1798 40.6169 38.6658 41.2272 38.3138 41.9312L38.1908 42.1806C37.8558 42.8524 37.3838 43.4472 36.8058 43.9271C36.2288 44.4071 35.5578 44.7617 34.8358 44.9686L31.4528 45.9321C29.5738 46.4685 28.3988 48.3306 28.7198 50.261L28.9688 51.7575C29.2428 53.377 30.6438 54.5626 32.2838 54.5626C35.1738 54.5626 37.7428 56.4144 38.6558 59.158L39.3898 61.3549M4.28379 44.8353C7.34679 51.2033 12.5088 56.3222 18.9028 59.3308C25.2968 62.3394 32.5308 63.0542 39.3898 61.3549M39.3898 61.3549C46.7358 59.5326 53.1528 55.0688 57.4168 48.8158M44.8128 21.2501C44.8128 24.3114 43.4698 27.0584 41.3408 28.9376" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Real estate",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 62.25V34.0625M44.813 62.25V34.0625M19.188 62.25V34.0625M1.25 21.25L32 0.75L62.75 21.25M57.625 62.25V25.801C49.148 24.4738 40.58 23.809 32 23.8125C23.284 23.8125 14.725 24.4958 6.375 25.801V62.25M1.25 62.25H62.75M32 13.5625H32.027V13.5898H32V13.5625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "E-learning",
  },
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="69" height="63" viewBox="0 0 69 63" fill="none">
  <path d="M1.6875 0.75H6.42249C8.16449 0.75 9.68554 1.9219 10.1365 3.6029L11.4455 8.5127M11.4455 8.5127C30.4785 7.9793 49.4925 10.0951 67.9435 14.7993C65.1275 23.1838 61.7825 31.3292 57.9525 39.1875H19.6245M11.4455 8.5127L19.6245 39.1875M19.6245 39.1875C16.9065 39.1875 14.2985 40.2674 12.3765 42.1897C10.4545 44.1119 9.37451 46.719 9.37451 49.4375H63.1875M14.4995 59.6875C14.4995 60.3671 14.2295 61.0189 13.7485 61.4995C13.2685 61.98 12.6165 62.25 11.9375 62.25C11.2575 62.25 10.6055 61.98 10.1255 61.4995C9.64449 61.0189 9.37451 60.3671 9.37451 59.6875C9.37451 59.0079 9.64449 58.3561 10.1255 57.8755C10.6055 57.395 11.2575 57.125 11.9375 57.125C12.6165 57.125 13.2685 57.395 13.7485 57.8755C14.2295 58.3561 14.4995 59.0079 14.4995 59.6875ZM58.0625 59.6875C58.0625 60.3671 57.7925 61.0189 57.3115 61.4995C56.8305 61.98 56.1795 62.25 55.4995 62.25C54.8195 62.25 54.1685 61.98 53.6875 61.4995C53.2065 61.0189 52.9375 60.3671 52.9375 59.6875C52.9375 59.0079 53.2065 58.3561 53.6875 57.8755C54.1685 57.395 54.8195 57.125 55.4995 57.125C56.1795 57.125 56.8305 57.395 57.3115 57.8755C57.7925 58.3561 58.0625 59.0079 58.0625 59.6875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Shopping",
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="65" viewBox="0 0 60 65" fill="none">
  <path d="M34.2199 2.62705C34.7739 3.18435 35.2119 3.84555 35.5099 4.57275C35.8089 5.29985 35.9599 6.07865 35.9569 6.86445V25.2728L56.1709 33.9561C56.3929 34.0436 56.5919 34.1792 56.7539 34.3535C56.9159 34.5277 57.0369 34.736 57.1089 34.9632L58.8799 40.2428C58.9739 40.5352 58.9889 40.8479 58.9229 41.1482C58.8569 41.4485 58.7119 41.7256 58.5039 41.9518C58.2959 42.178 58.0309 42.3447 57.7369 42.4349C57.4429 42.5251 57.1299 42.5357 56.8309 42.4656L35.9909 37.2211L34.9839 55.1432L38.9779 58.13V64.1041C33.9939 62.7852 29.9819 61.6851 29.9819 61.6851C29.9819 61.6851 26.3159 62.693 21.0219 64.1041V58.13L25.0159 55.1432L24.0079 37.2211L3.16889 42.4656C2.86889 42.5357 2.55689 42.5251 2.26289 42.4349C1.96889 42.3447 1.70386 42.178 1.49586 41.9518C1.28786 41.7256 1.14291 41.4485 1.07691 41.1482C1.01091 40.8479 1.02488 40.5352 1.11988 40.2428L2.89088 34.9632C2.96188 34.736 3.08386 34.5277 3.24586 34.3535C3.40786 34.1792 3.60687 34.0436 3.82887 33.9561L24.0429 25.2728V6.86445C24.0399 6.07865 24.1919 5.29985 24.4899 4.57275C24.7869 3.84555 25.2259 3.18435 25.7799 2.62705C26.9039 1.51765 28.4199 0.895752 29.9999 0.895752C31.5789 0.895752 33.0949 1.51765 34.2199 2.62705Z" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Travel",
  },
  {
    id: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.753 44.6234C28.754 47.6267 35.242 47.6267 39.247 44.6234C43.251 41.6202 43.251 36.7548 39.247 33.7516C37.248 32.2483 34.624 31.5 32 31.5C29.523 31.5 27.046 30.7483 25.156 29.2484C21.378 26.2452 21.378 21.3798 25.156 18.3766C28.935 15.3733 35.065 15.3733 38.844 18.3766L40.262 19.5041M62.75 31.5C62.75 35.5381 61.955 39.5368 60.409 43.2675C58.864 46.9983 56.599 50.3881 53.744 53.2435C50.888 56.0989 47.498 58.364 43.768 59.9093C40.037 61.4546 36.038 62.25 32 62.25C27.962 62.25 23.963 61.4546 20.232 59.9093C16.502 58.364 13.112 56.0989 10.256 53.2435C7.40098 50.3881 5.136 46.9983 3.591 43.2675C2.045 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.48998 15.5232 10.256 9.7565C16.023 3.9897 23.845 0.75 32 0.75C40.155 0.75 47.977 3.9897 53.744 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Trading",
  },
  {
    id: 7,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Hospital",
  },
  {
    id: 8,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
  <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    title: "Entertainment",
  },
];

// export type Card = {
//   id: number;
//   title: string;
//   description: string;
// };

// export type Summary = {
//   id: number;
//   title: string;
//   description: string[];
// };

// export type Service = {
//   id: number;
//   slug: string;
//   title: string;
//   peopleTitle: string;
//   description: string;
//   image: string;
//   style: { backgroundColor: string };
//   width: string;
//   metaTitle: string;
//   metaDescription: string;

//   context: {
//     mainTitle: string;
//     subTitle: string;
//     content: string;
//   };

//   workingProcess: Array<{
//     title: string;
//     image: string;
//     alt: string;
//     list: Array<{
//       id: number;
//       title: string;
//       content: string;
//     }>;
//   }>;

//   outcomes: {
//     id: number;
//     title: string;
//     description: string[];
//     servicePlatform: boolean;
//     subContent: {
//       title: string;
//       description: string[];
//       advantages: {
//         id: number;
//         title: string;
//         description: string;
//         points: {
//           id: number;
//           title: string;
//           description: string;
//         }[];
//       };
//       disAdvantages: {
//         id: number;
//         title: string;
//         description: string;
//         points: {
//           id: number;
//           title: string;
//           description: string;
//         }[];
//       };
//     };
//     question: {
//       title: string;
//       cards: Card[];
//     };
//     summery: Summary;
//   };

//   FAQData: Array<{
//     id: number;
//     title: string;
//     content: string;
//   }>;
// };

// export const outcomes = [
//   {
//     id: 1,
//     title: "Best Web Development <br/> company in Calicut",
//     description: [
//       `As the best web development company in Calicut, Wisbato is well aware of  <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" >why you need a professional website</a>.for your business. Thousands of business organizations are there in Calicut, yet only 45% have their website. Such a clear difference shows how important it is to have a strong online presence.Research study indicates that websites convince more customers as easy access to information and services is facilitated within websites. A business website creates trust as the website is of a proper design among customers thus turning out to have some nice return sales and stronger customer loyalty. Organizations whose operations are not online face a serious struggle for customers and their loyalty business in Calicut. Traditional methods usage confines them into low reaches, delayed time response, and less professional image.

// `,
//       `At Wisbato, we are close to providing businesses with the opportunity to overcome the challenges arising from such difficulties by developing suitable web development projects for Kozhikode business owners. We enable the companies to provide access all the time, improve customer interactions, and even enhance their brand image by designing SEO friendly <a href="https://www.wisbato.com/blogs/how-to-build-a-professional-landing-page-on-your-website-best-practices-and-example" target="_blank" >professional landing pages</a> and websites. Companies that have a website are allowed an opportunity to engage customers as much as 80% more, and all this really makes the best investment in the future.
// `,
//       // "Our web development services include defining your purpose and goals, all types of website design, Front-end development, back-end development, content management system (CMS), custom software development, testing & launching, maintenance and updates.",
//       `The Wisbato team uses high-end web development tools like   <a href="https://react.dev/" target="_blank" > ReactJS,</a> <a href="https://angular.dev/" target="_blank">Angular,</a><a href="https://wordpress.com/" target="_blank"> Wordpress</a>
//  VueJS, Django, Svelte, jQuery to develop the most responsive websites for every business. We provide web development services are Front-end development, back-end development, content management system (CMS), custom software development, testing & launching.`,

//       `Today's 5.45 billion people are engaged in the digital world so a website with your digital presence is a powerful tool for your business. Wisbato, the best web development company in Calicut, is here to help to create websites with<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > affordable prices </a>and assure that every business can get ahead and grow through a strong online presence that satisfies its customers.`,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Custom Solutions for Every Business",
//       description: [
//         `At Wisbato, we specialize in delivering exceptional websites in Calicut. We offer solutions for every business. Whether it is an e-commerce application, personal portfolio, blog writing, shopping or a business website, we construct websites that are not only pretty functional but also easy to use. Our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_black" > process of website development</a>, includes understanding your specific needs and goals, coming up with good designs, developing with all the  <a href="https://www.wisbato.com/blogs/top-5-web-development-trends-in-2024" target="_black" >latest trends</a>, and tools with comprehensive support. We make every single website in a way that it works out perfectly, performs and engages better with customers. Whether it is an online store or a business site, we build the best websites in Calicut customers. Contact Wisbato for a web development project with an affordable price. Check out our <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">web development costs.</a>
// `,
//       ],
//       advantages: {
//         id: 1,
//         title: "The advantage of a Website",
//         description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Increased Online Presence",
//             // description:
//             // "A website makes your business look professional and credible. It's the first step towards establishing a strong online presence and building trust with potential customers",
//           },
//           {
//             id: 2,
//             title: "Enhanced Trustworthiness",
//             // description:
//             //   "A website improves your business in online searches, making it easier for potential customers to find you anywhere",
//           },
//           {
//             id: 3,
//             title: "24/7 Accessibility",
//             // description:
//             //   "A professional website with clear information and high-quality design portrays a positive and trustworthy image & brand value",
//           },
//           {
//             id: 4,
//             title: "Expanded Customer Reach",
//             // description:
//             //   "Your website acts as a constantly accessible brochure, showcasing your services, products, and brand story",
//           },
//           {
//             id: 5,
//             title: "Improved Marketing Opportunities",
//             // description:
//             //   "A website allows for two-way communication with customers through contact forms, live chats, or social media integration",
//           },
//           // {
//           //   id: 6,
//           //   title: "Data & Analytics",
//           //   description:
//           //     "Modern websites provide valuable data on user behavior and website traffic, allowing you to refine your online marketing strategies",
//           // },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "The Disadvantage of Being Offline",
//         description:
//           "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Limited Visibility",
//             // description:
//             //   "In 2024, over 4.6 billion people will use the internet globally. Without a website, you're invisible to this vast pool of potential customers who research businesses online before making buying decisions",
//           },
//           {
//             id: 2,
//             title: "Decreased Credibility ",
//             // description:
//             //   "A professional website establishes legitimacy and builds trust with potential clients. Without one, you risk appearing outdated or even unprofessional",
//           },
//           {
//             id: 3,
//             title: "Missed Sales Opportunities",
//             // description:
//             //   "A website serves as your 24/7 salesperson, providing information and showcasing your services even when you're not actively working. It allows customers to learn about your offerings, contact you easily, and potentially convert into paying clients",
//           },
//           {
//             id: 4,
//             title: "Limited Marketing Reach",
//             // description:
//             //   "Without a website, your marketing options are significantly limited. You missed the audience through search engines, social media, and online advertising.",
//           },
//           {
//             id: 5,
//             title: "Poor Customer Accessibility",
//             // description:
//             //   "Customers today expect to find detailed information about your products, services, and company online. Without a website you can provide incomplete information only.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why Choose WISBATO For Web Development?",
//       cards: [
//         {
//           id: 1,
//           title: "Experience & <br/> Expertise",
//           description:
//             "Wisbato exalts a team of seasoned professionals with years of experience in the industry",
//         },
//         {
//           id: 1,
//           title: "Comprehensive <br/> Services",
//           description:
//             "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
//         },
//         {
//           id: 1,
//           title: "Proven <br/> Result",
//           description:
//             "Wisbato guaranteed the best result on our projects that align with your unique goals",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Hire Expert Web Developers to Support Your Business",
//       description: [
//         `An excellent web developing company is a key to the success of your business. We completed over 50 successful web projects at Wisbato that created exceptional digital presence for businesses. Our team of professional web developers offers all kinds of unique, customized E-commerce and professional-looking business websites as per your needs. Wisbato, the best web development company in Calicut ensures that your site is functional and engaging. Check out some of <a href="https://www.wisbato.com/works" target="_black" > our web development previous work </a>case studies to see how we can take your business to the next level through a professional, custom-built website designed for success. And also check out our happy <a href="https://www.google.com/maps/contrib/114938746348114958075/place/ChIJpxgvczJfpjsRzd2kcmKEw_I/@11.3890999,75.8654921,10z/data=!4m6!1m5!8m4!1e1!2s114938746348114958075!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" target="_black" > client words.</a> `,
//       ],
//     },
//   },
//   {
//     id: 2,
//     title: "Leading E-commerce Web Development Company in Calicut.",
//     description: [
//       `Our team specializes in delivering creative e-commerce solutions that enable businesses to arrive in the marketplace. Being the leading e-commerce web development company in Calicut,We aim to create best e-commerce websites for <a href="https://en.wikipedia.org/wiki/Kozhikode" target="_blank">Kozhikode</a>  business owners and that help to increase sales, online visibility and improve the user experience.

// `,
//       `Our ecommerce web developers and designers work together to deliver customized, sector-specific e-commerce platforms according to your business's needs. We service all businesses-from start-ups to well-established enterprises-by providing responsive, user-friendly, feature rich and <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank" > cost effective e- commerce websites</a>`,
//       "At Wisbato, we understand how challenging the e-commerce world is today and how important it is for your business to stay ahead in a highly competitive market. We use the integration of advanced features such as secure gateways for payments e.g.(PayPal, Amazon Pay, Stripe etc…) product management systems, inventory tracking, and SEO optimization so that it ranks high on the search engines and converts best.",
//       `Are you looking for a new online store or upgrading an existing one? Let <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a>  be your partner for designing and developing high-performing, scalable e-commerce websites in Calicut, Kerala that meet your business needs. We can help you grow your business in this ever-changing world of online commerce.
//  `,
//     ],
//     servicePlatform: false,
//     subContent: {
//       title: "Custom Solutions for Every Business",
//       description: [
//         `We believe that every business is unique, and so are the e-commerce needs of this business. Our team knows <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank" > why you need a website</a>  in your e-commerce business, and we develop best solutions to challenge specific goals and problems regarding each client. From small to big <a href="https://www.wisbato.com/works" target="_blank" > website projects </a>,we deliver customized e-commerce platforms, ensuring they are scalable, functional, and thereby able to be supported for growth. With our <a href="https://www.wisbato.com/blogs/a-comprehensive-guide-to-building-your-website-wisbato" target="_blank">professional way of website development </a>  your business gets the right attention and it makes your business successful in the digital world.  `,
//       ],
//       advantages: {
//         id: 1,
//         // title: "Key advantages of having an e-commerce website",
//         title: "Advantages of having an e-commerce website",
//         description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Global Reach",
//             // description:
//             //   "An e-commerce website allows you to reach customers beyond your local area, expanding your market to a global scale. and Your store is open 24/7, enabling customers to browse and purchase products at any time, increasing sales opportunities.",
//           },
//           {
//             id: 2,
//             title: "Cost Efficiency",
//             // description:
//             //   "Operating an e-commerce store can be more cost-effective than running a physical store, with savings on rent, utilities, and staffing. and Digital marketing strategies like SEO, social media, and email campaigns can be more cost-effective than traditional advertising.",
//           },
//           {
//             id: 3,
//             title: "Enhanced Customer Insights",
//             // description:
//             //   "Customers can shop from the comfort of their homes, which can lead to increased customer satisfaction and loyalty.",
//           },
//           {
//             id: 4,
//             title: "Increased Sales Opportunities",
//             // description:
//             //   "E-commerce websites provide valuable data on customer behavior, preferences, and purchase patterns, helping you make informed business decisions. You can easily track the performance of your website, marketing campaigns, and sales, allowing for continuous improvement.",
//           },
//           {
//             id: 5,
//             title: "24/7 Accessibility",
//             // description:
//             //   "Scaling an e-commerce business to handle more products, customers, and markets is often simpler and more cost-effective than expanding a physical store.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "Disadvantages of lacking an e-commerce website",
//         description:
//           "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Limited Market Reach",
//             // description:
//             //   "Without an e-commerce website, your customer base is restricted to your physical location, limiting your market reach. A significant number of consumers prefer shopping online for convenience and variety. Without an online presence, you miss out on this growing market segment.",
//           },
//           {
//             id: 2,
//             title: "Missed Revenue Opportunities",
//             // description:
//             //   "An e-commerce website allows customers to shop anytime, even outside of regular business hours. Without it, you lose potential sales that could occur during non-operational hours.",
//           },
//           {
//             id: 3,
//             title: "Higher Operational Costs",
//             // description:
//             //   "In today’s digital world, consumers expect businesses to have an online presence. Not having an e-commerce website can make your business appear outdated and less competitive. Competitors with e-commerce capabilities can offer more convenience and better accessibility to customers, potentially capturing your market share.",
//           },
//           {
//             id: 4,
//             title: "Loss of Competitive Advantage            ",
//             // description:
//             //   "A professional website enhances your business's credibility and trustworthiness. Without one, potential customers may question your legitimacy and professionalism.",
//           },
//           {
//             id: 5,
//             title: "Lack of Customer Insights",
//             // description:
//             //   "E-commerce platforms often include tools for automating sales processes, inventory management, and customer service. Without these tools, your operations may be less efficient and more labor-intensive.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose WISBATO for e-commerce web development?",
//       cards: [
//         {
//           id: 1,
//           title: "Experience & <br/> Expertise",
//           description:
//             "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
//         },
//         {
//           id: 1,
//           title: "Comprehensive <br/> Services",
//           description:
//             "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof",
//         },
//         {
//           id: 1,
//           title: "Proven <br/> Result",
//           description:
//             "Wisbato guaranteed the best result on our projects that align with your unique goals",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "We make e-commerce easy for you",
//       description: [
//         `Over 40 successful <a href="https://www.wisbato.com/works/wiscart" target="_blank">e-commerce projects</a>  have marked the success story of Wisbato, which has enabled the company to position itself as a leading ecommerce web design and development company in Calicut. Our team is aiming at giving customized, user-friendly, and sales-driven ecommerce websites, so that they succeed in the realms of digital markets. We take pride in being able to meet each customer’s unique needs with personalized solutions that match their expectations. And Choose Wisbato and find a true partner who can commit and drive online success for your business with innovative design and strategy for ecommerce development (<a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">Check our web development cost</a>). Let's make your visions bloom into a thriving e-commerce platform. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>.`,
//       ],
//     },
//   },
//   {
//     id: 3,
//     title:
//       "Choose the No.1 IT company in Calicut for all IT support and solutions.",
//     description: [
//       "We pride ourselves as being the no.1 IT support and solution company in Calicut, which provides all-rounded technology services aimed at making businesses flourish in the fast-paced and rapidly changing today's digital environment. Innovation, efficiency, and customer satisfaction and our end-to-end solutions for the implementation of IT can support any type of business",
//       "We deliver infrastructure management, network security, data backup solutions, and cloud services to ensure your systems run smoothly and securely. We help startups set up their IT platform or support established organizations in the improvement of performance and security capabilities. Our experienced team is ready to provide tailored solutions that can meet the specific goals you may have for your organization.",
//       "Having been a leading IT support and solution provider in Calicut, we take pride in ensuring round-the-clock support to determine as many technical challenges as one may face. From troubleshooting software-related issues to optimizing hardware systems, prompt and reliable services ensure minimal downtime and uninterrupted operations.",
//       `We at <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>  believe in long-term relations with our clients, thus providing proactive solutions not just to current issues but also problems expected to arise in the future. Trust us as your IT partner in empowering your business today with cutting-edge technology and superior support within the highly competitive market.
// `,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Unique solution for every business",
//       description: [
//         "We understand that every business has unique challenges, and that is the reason why we offer specific solutions tailored to the needs of each client. Whether you are a small start-up or a well-established enterprise, our team takes the time to understand your goals, your industry needs, and your operational challenges. That is how we create customized IT strategies that can really boost productivity, enhance security, and ease operations for our clients.",
//         `From advanced <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank">cloud solutions </a> to smooth <a href="https://en.wikipedia.org/wiki/Network_management" target="_blank">network management</a>,our aim here is to deliver services that are efficient and scalable, so your business can expand with minimal effort. We aim to empower you with the right technology and support to get you focused on running your business successfully. Wisbato provides IT services beyond just mere implementation; it's uniquely personalized to meet your success factor and new innovation.`,
//       ],
//       advantages: {
//         id: 1,
//         title: "Advantages of IT support",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Enhanced Security",
//             // description:
//             //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
//           },
//           {
//             id: 2,
//             title: "Minimized Downtime",
//             // description:
//             //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
//           },
//           {
//             id: 3,
//             title: "Cost Efficiency",
//             // description:
//             //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
//           },
//           {
//             id: 4,
//             title: "Access to Expertise",
//             // description:
//             //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
//           },
//           {
//             id: 5,
//             title: "Improved Customer Service",
//             // description:
//             //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "The Drawbacks of avoiding IT support",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Greater Exposure to Cyber Threats",
//             // description:
//             //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
//           },
//           {
//             id: 2,
//             title: "Extended Downtime",
//             // description:
//             //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
//           },
//           {
//             id: 3,
//             title: "Higher Operational Costs",
//             // description:
//             //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
//           },
//           {
//             id: 4,
//             title: "Limited Access to Expertise",
//             // description:
//             //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
//           },
//           {
//             id: 5,
//             title: "Restricted Business Expansion and Adaptability",
//             // description:
//             //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose WISBATO for your IT support?",
//       cards: [
//         {
//           id: 1,
//           title: "Personalized <br/> Solutions",
//           description:
//             "Wisbato offers customized IT support customized to your business's unique needs.",
//         },
//         {
//           id: 2,
//           title: "Modern <br/> Technology",
//           description:
//             "Wisbato stays ahead of the curve by incorporating the latest technological advancements into our services.",
//         },
//         {
//           id: 3,
//           title: "Excellent Customer <br/> Services",
//           description:
//             "At Wisbato, customer satisfaction is our top priority. Our dedicated support team is always ready to assist you.",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Get your IT issues resolved quickly",
//       description: [
//         `Wisbato supports all IT-related problems and their solutions. If you run a firm, you need reliable IT support to ensure smooth operations. From software installation to hardware; configuration of network, cyber security system, and Wisbato also covers  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a>, <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce website development</a> and all IT support . Our team of professionals can get those issues related to your IT solved without taking too much of your time and keep your business running. Choose Wisbato, the no.1 IT support and solution company in Calicut to fulfill all your IT needs. We help your business grow today. Contact us now.
// `,
//       ],
//     },
//   },
//   {
//     id: 4,
//     title: "Mobile App Development Company In Calicut.",
//     description: [
//       `Wisbato is an experienced mobile app development company in Calicut, Kerala. We create innovative and customized mobile applications for your business that help you market your products online. We specialize in creating unique <a href="https://www.wisbato.com/blogs/android-mobile-app-building-a-step-by-step-guide" target="_blank"> Android</a> , iOS, and Flutter apps that best fit your business goals.`,
//       `<span>We specialize in Android app development, so we can build powerful, user-friendly and <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >cost effective mobile apps</a> for the ever growing number of users on this platform. The other wing of our technical team focuses on creating smooth and highly secure applications that offer exceptional</span>`,
//       "usability with all  of  Apple’s devices. Additionally, we have mastered Flutter and it can be used to develop cross-platform applications for both iOS and Android platforms, thus reaching more users while maintaining uniform results.",
//       `<span>We keep ourselves informed about recent developments in technology hence bring expert solutions to our clients. Our approach to mobile application design is open, effective and directed at meeting your business objectives. and we know <a href="https://www.wisbato.com/blogs/why-people-uninstall-your-mobile-apps" target="_blank" >why users uninstall apps</a>, so we will leverage new trends and excellent UX. Wisbato, which is one of the leading Mobile App Development Company in Calicut where the best mobile solutions drive outcomes. Get ahead today with Wisbato for a triumph in your business dreams.</span>`,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Unique ideas for every business",
//       description: [
//         "Statista projects that the global number of mobile users will hit 7.49 billion by 2025. They all are using apps on these devices. Mobile phones are filled with different categories of apps, such as social media apps, e-commerce apps, educational apps, communication apps, gaming apps, music apps, etc. So creating an app for your business is a great idea and this decision will lead to more customer engagement for your business. Now you need a professional team of mobile app developers to fulfill your business needs.",
//         `<span>Wisbato, which is ranked among the best mobile app development companies in Calicut, identifies your desires and the needs of your customers. Through our efficient <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" > app development process </a>, we come up with a design that resonates with your brand perfectly. And we will use the latest <a href="https://www.wisbato.com/blogs/engage-your-audience-with-push-notifications" target="_blank" > push notification</a> technology on your app development projects That increase 90% of users' engagement. Let Wisbato design the best mobile app with an <a href="https://www.wisbato.com/blogs/understanding-mobile-app-development-costs-in-india-wisbato" target="_blank" >affordable price</a> that propels your business forward.</span>`,
//       ],
//       advantages: {
//         id: 1,
//         title: "Advantages of owning a mobile app",
//         points: [
//           {
//             id: 1,
//             title: "Customer Engagement",
//             // description:
//             //   "A mobile app allows you to reach the customer directly. They can get it at their convenience at any time of the day and from any part of the globe. Instant communication, customer loyalty, and notifications are among the digital advancements that help fast-growing businesses through customer relationships.",
//           },
//           {
//             id: 2,
//             title: "Enhanced Brand Experience",
//             // description:
//             //   "Mobile apps are perhaps the best way to communicate your brand personality on a relatively low budget. It offers a unique and easily manageable interface that depicts the company’s brand qualities and fosters customer communication.",
//           },
//           {
//             id: 3,
//             title: "Boost Sales & Revenue",
//             // description:
//             //   "Mobile apps are the best medium for promotions, special offers and campaigns.  Reach your customers directly with the right message at the right time, driving sales and increasing revenue streams.",
//           },
//           {
//             id: 4,
//             title: "Data-Based Insights",
//             // description:
//             //   "Mobile apps offer important insights regarding the consumers, user behavior, preferences and their tendency for purchasing. Such data is useful in segmenting the marketing targets, fine-tuning application features and, in general, you can meet your customers’ needs ideally.",
//           },
//           {
//             id: 5,
//             title: "Location-Based Advantages",
//             // description:
//             //   "Mobile apps have the use of GPS technology to facilitate location-based information services. This feature enables customers in your locality to receive highly relevant information from you about your products and services.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "Disadvantages of skipping the mobile app",
//         points: [
//           {
//             id: 1,
//             title: "Limited Brand Visibility",
//             // description:
//             //   "Consumers are used to having everything right at their fingertips. The inability to have a mobile site can give the overall impression that your business is not trendy or worse, inaccessible, resulting in the customers going to your competitors who are mobile-friendly. If you don’t have a proper mobile app that meets customer’s needs, they will also uninstall the app.",
//           },
//           {
//             id: 2,
//             title: "Loss of Sales Opportunities",
//             // description:
//             //   "Mobile applications are silent partners in marketing to take place. if you are not mobile-friendly, It just means many potential consumers are left outside of the loop and you are unable to send them offers and special deals at a time when you know they may need it.",
//           },
//           {
//             id: 3,
//             title: "Data-Blind Decision Making",
//             // description:
//             //   "Smartphone applications give important information on the users’ behavior and choices. Lacking this specific data, you’re basically operating in a state of near-blindness. Marketing also becomes a challenge to measure your customer base, to decide the right marketing strategies to employ and be in a position to meet all the customer needs.",
//           },
//           {
//             id: 4,
//             title: "Falling Behind the Competition",
//             // description:
//             //   "As it has been observed a number of companies are already using mobile apps to serve their customers and gain advantage over others. If you don’t invest in the mobile apps, you will fall out of the competition scene, unable to cope with the businesses.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose WISBATO for app development?",
//       cards: [
//         {
//           id: 1,
//           title: "Expertise and <br/> Innovation",
//           description:
//             "WISBATO boasts a team of highly skilled mobile app developers who are well-versed in the latest technologies and trends.",
//         },
//         {
//           id: 2,
//           title: "Customized <br/> Solutions",
//           description:
//             "At WISBATO, the focus is on creating customized mobile applications that meet the specific needs and goals of your business.",
//         },
//         {
//           id: 3,
//           title: "Comprehensive <br/> Support",
//           description:
//             "WISBATO provides extensive support and maintenance services post-development. ",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Develop unique apps for your business",
//       description: [
//         `As the mobile app development company in Calicut, we do not hesitate to transform what you have conceived into user-friendly and innovative applications. Our team of professionals is committed to producing quality apps with a built-in ability to improve how you run your business and engage your customers. <a href="https://www.wisbato.com/" target="_blank" >Wisbato</a> will make sure there are no difficulties from idea to implementation. If you trust Wisbato company, we will turn your belief into reality using state-of-the-art technology and stylish approaches. Partner with us and experience the best in app development team in Calicut.`,
//       ],
//     },
//   },
//   {
//     id: 5,
//     title: "Leading SEO Company In Calicut",
//     description: [
//       `In today’s highly competitive digital world, having a strong online presence is no longer optional, it’s essential for business growth. At<a href="https://www.wisbato.com/"target="_blank"> Wisbato</a>, we understand the importance of visibility in the online marketplace. If you <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">build a website</a> but it does not appear first in the search list, it also affects your brand badly. If your <a href="https://en.wikipedia.org/wiki/Keyword" target="_blank">keywords</a> are listed last, the customer may think your brand is not trustworthy or not an established enterprise. Our expert team focuses on best SEO strategies that help businesses grow organically and achieve long-lasting results.

// `,
//       `A good website is essential for effective SEO. First, focus on  <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> building a professional website</a>,then implement SEO strategies. This approach will help you achieve better results. At Wisbato, we don’t just focus on rankings; we aim for sustainable growth. Our method integrates on-page optimization content, link building and technical SEO to ensure the website will not only be in the first rank of the search engine result but also continue to stay there. We work with businesses from a startup to an established business and match our strategy accordingly to suit your approach.
// `,
//       "At Wisbato, we specialize in SEO, focusing on-page SEO, off-page SEO, local SEO, and technical SEO to ensure comprehensive optimization of your website. Our expert team creates website content based on the latest EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) factors to build trust with visitors and improve search rankings. We implement best SEO strategies, such as building relevant, high-quality backlinks, focusing on customer search intent, including case studies and testimonials, AI-driven SEO, voice search optimization, and mobile-first indexing etc... Our SEO specialists stay updated with Google algorithm changes and adapt strategies accordingly to ensure top performance. Choose Wisbato, the leading SEO company in Calicut, and let your online presence bloom into an instrument of growth and success.",
//     ],
//     servicePlatform: false,
//     subContent: {
//       title: "Personalized SEO Strategies for Long-Term Growth",
//       description: [
//         `Being the most success-oriented <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO company in Calicut</a>, we build customized solutions to a potential best. We, at the best SEO agency in Calicut, closely work with you to develop strategies that enhance your online presence.  Whether you want to increase your local rankings or national exposure, we provide you with tailored SEO services to fuel growth and long-term success. From keyword optimization to content strategies, we offer customized solutions for running a mile ahead in today's competitive digital space.Trust Wisbato for excellent SEO solutions that catapult your brand and maximize your growth potential.
// `,
//       ],
//       advantages: {
//         id: 1,
//         title: "Benefits of implementing SEO for your website",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Increased visibility on search engines",
//             // description:
//             //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
//           },
//           {
//             id: 2,
//             title: "Improved user experience",
//             // description:
//             //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
//           },
//           {
//             id: 3,
//             title: "Cost-effective marketing strategy",
//             // description:
//             //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
//           },
//           {
//             id: 4,
//             title: "Enhanced credibility and trust",
//             // description:
//             //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
//           },
//           {
//             id: 5,
//             title: "Long-term traffic and business growth",
//             // description:
//             //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "What Happens When You Don't Use SEO",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Lower visibility on search engines",
//             // description:
//             //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
//           },
//           {
//             id: 2,
//             title: "Missed opportunities for customer engagement",
//             // description:
//             //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
//           },
//           {
//             id: 3,
//             title: "Ineffective and costly marketing efforts",
//             // description:
//             //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
//           },
//           {
//             id: 4,
//             title: "Poor user experience on the website",
//             // description:
//             //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
//           },
//           {
//             id: 5,
//             title: "Limited brand credibility and trust",
//             // description:
//             //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose WISBATO for SEO services?",
//       cards: [
//         {
//           id: 1,
//           title: "EXPERIENCE &<br/> EXPERTISE",
//           description:
//             "Wisbato exalts a team of seasoned professionals with years of experience in the industry.",
//         },
//         {
//           id: 2,
//           title: "Comprehensive <br/> Services",
//           description:
//             "Wisbato provides an extensive array of services intended to fulfill all of your digital requirements under one roof.",
//         },
//         {
//           id: 3,
//           title: "Proven Result",
//           description:
//             "Wisbato guaranteed the best result on our projects that align with your unique goals.",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Boost Your Brand Credibility with Effective SEO",
//       description: [
//         `Hiring the right SEO company for your Calicut business is vital to growing and succeeding in today's digital landscape.Here, we provide SEO services for your <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> website</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce platforms</a>,<a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile apps</a> and other types of platforms. We develop effective SEO strategies to help you achieve optimal results. The right team of <a href="https://www.linkedin.com/in/ansif-pv-43ba35241/" target="_blank"> SEO experts</a> can work together with strategies customized to increase your website's visibility, drive organic traffic, and potential customers. With expertise in search engine algorithms and best practices, we can optimize content and structure for a problem-free user experience. Wisbato, the leading SEO company in Calicut offers maintenance and review along with adjustments to ensure that your website is not left behind. Spending some money on our professional SEO services will position your business for long-term success and higher credibility in the online marketplace. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank"> client words</a>.`,
//       ],
//     },
//   },
//   {
//     id: 6,
//     title: "Leading Branding Agency in Calicut",
//     description: [
//       `Effective <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">branding </a> will be more desired for a business as today's competitive marketplace demands a market presence that lasts. Being the leading branding agency in  Calicut, our primary area of specialization remains in delivering great brand values that make your target audience react to it and make your business stand up from the rest.

// `,
//       `
// Our comprehensive branding capabilities start with an intensive consultation and discovery process with you to learn about your vision, mission, and values. We help you closely develop a specific brand strategy that ensures all of your branding efforts will place you on the right track, in the right direction. From creating memorable logos and taglines to designing cohesive visuals,  <a href="https://www.wisbato.com/team" target="_blank">our team</a> of experienced designers and strategists ensures that your brand tells an empowered story.

// `,
//       "We feel branding is not just an aesthetic but creating an emotion towards your audience. Our approach is toward understanding the needs and tastes of your customers, which we can then build into a brand personality that talks to them exactly. This personal contact not only increases customer loyalty but also helps in engaging and selling more.",
//       `But that's not all. We also offer brand positioning, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>,<a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank">e-commerce web development</a>, market research, and <a href="https://angular.dev/" target="_blank">social media strategy </a> to ensure your brand stands out on every platform. Whether you're a new startup looking to create your mark or an old business seeking a rebranding strategy, Wisbato, a leading branding agency in Calicut is ready for you.`,
//     ],
//     servicePlatform: false,
//     subContent: {
//       title: "Custom Solutions for Every Business",
//       description: [
//         `We believe that each business is unique, and the same strategy for branding approaches just will not be possible thus, we provide client-centric branding solutions customized to match definite needs and aspirational outcomes for each client. Here, our research team analyzes your industry as well as your target audience and develops specific strategies that align with your business's goal and outcome. Whether you need an overall brand transformation, new visual elements, or a targeted marketing campaign, we best branding agency in Calicut are here to help precision and finesse in the solution to make your brand stand out. We're committed to delivering results that not only enhance your brand identity but also deliver growth and engagement to your business. Let's create something extraordinary together.

// `,
//       ],
//       advantages: {
//         id: 1,
//         title: "Advantages of Branding",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Builds Recognition and Trust",
//             // description:
//             //   "SEO helps your website rank higher in search engine results pages (SERPs), leading to more organic traffic from potential customers searching for relevant keywords.",
//           },
//           {
//             id: 2,
//             title: "Differentiates from Competitors",
//             // description:
//             //   "SEO involves optimizing your website's structure and content, improving its overall usability and ensuring a better experience for your visitors.",
//           },
//           {
//             id: 3,
//             title: "Enhances Customer Loyalty",
//             // description:
//             //   "By attracting targeted traffic to your site, SEO increases the likelihood of converting visitors into customers, as they are actively searching for the products or services you offer.",
//           },
//           {
//             id: 4,
//             title: "Increases Business Value",
//             // description:
//             //   "Compared to traditional advertising methods, SEO is more cost-effective, providing a higher return on investment (ROI) over the long term.",
//           },
//           {
//             id: 5,
//             title: "Improves Marketing Efficiency",
//             // description:
//             //   "Unlike paid advertising, the benefits of SEO are long-lasting. Once your website achieves high rankings, it can maintain those positions with ongoing optimization and maintenance.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "Disadvantage of Not Having Branding",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Lack of Recognition and Trust",
//             // description:
//             //   "Without SEO, your website is less likely to appear in search engine results, leading to reduced visibility and fewer visitors finding your site.",
//           },
//           {
//             id: 2,
//             title: "Difficult to Stand Out from Competitors",
//             // description:
//             //   "Lower search engine rankings mean less organic traffic, resulting in fewer potential customers visiting your website.",
//           },
//           {
//             id: 3,
//             title: "Weaker Customer Loyalty",
//             // description:
//             //   "Without local SEO, your business may not appear in local search results, making it harder to attract customers from your area.",
//           },
//           {
//             id: 4,
//             title: "Lower Business Value",
//             // description:
//             //   "If your website doesn’t attract the right audience, you’ll miss out on potential leads and sales,it will negatively impact your conversion rates and revenue.",
//           },
//           {
//             id: 5,
//             title: "Inefficient Marketing Efforts",
//             // description:
//             //   "Without the benefits of organic traffic from SEO, you may need to rely more on paid advertising, which can be more expensive and less sustainable in the long term.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose Wisbato for branding",
//       cards: [
//         {
//           id: 1,
//           title: "EXPERTISE &<br/> INNOVATION ",
//           description:
//             "Our team combines creativity and strategy to create truly distinctive brand identities.",
//         },
//         {
//           id: 2,
//           title: "Effective <br/> Solutions",
//           description:
//             " We create custom-made branding strategies to fit the different needs of each business.",
//         },
//         {
//           id: 3,
//           title: "Result-oriented <br/> solutions",
//           description:
//             " Wisbato delivers impact branding solutions that enhance recognition, customer loyalty, and market presence.",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Choose a Professional Branding Team in Calicut.",
//       description: [
//         `Are you looking for the best branding agency in Calicut, so look no further  <a href="https://www.wisbato.com/" target="_blank">wisbato</a> is the leading branding agency in Calicut. We are inspired to bring your <a href="https://en.wikipedia.org/wiki/Brand" target="_blank"> brand</a>  to life. Branding is not just about a logo or name, it's an identity designed to reflect your values and to be connected with the personal characteristics of your target market. At the same time, we have experienced expertise to help design strategic, visuals, and memorable branding strategies that separate you from the rest of the competition. From being a small startup to an established firm, our branding team works together to ensure that each minute detail about your brand is filled with richness to leave long-lasting impressions. Choose the best branding company in Calicut,for a professional, results-driven branding experience. Check out our  <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#mpd=~18236616690819797880/customers/reviews" target="_blank">client words</a>.
//         `,
//       ],
//     },
//   },
//   {
//     id: 7,
//     title: "Best software development company in Calicut.",
//     description: [
//       `As the best software development company in Calicut, we offer a wide range of services to meet the needs of businesses looking for customized software solutions.<a href="https://www.wisbato.com/team" target="_blank"> Our team</a>  specializes in creating, designing, programming, testing, and maintaining software applications that enhance efficiency and drive growth. Whether you need software for managing internal operations or customer-facing applications, we have the expertise to deliver results. Our goal is to help you bring your ideas to life by developing software that fits perfectly with your business goals.
// `,
//       `We follow the <a href="https://en.wikipedia.org/wiki/Software_development_process" target="_blank">Software Development Life Cycle</a> (SDLC) to ensure that every project is carefully planned and executed. Our team is skilled in popular programming languages like C, C++, Java, JavaScript, PHP, and Python, allowing us to create diverse applications that meet modern business demands.
//  `,
//       `Staying updated with the latest industry trends, we also incorporate agile software methodologies and DevOps practices into our software development process. Many leading companies now adopt these methods to ensure faster delivery and more efficient updates to their software. At our company, we prioritize innovation and flexibility, providing Calicut-based businesses with best solutions that align with the latest software trends and technologies.<a href="https://youtu.be/wUGiIdqjDdk?si=qXjzF6XdHo6_oyve" target="_blank">Watch how to calculate software development cost</a>  `,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Custom software for every business",
//       description: [
//         `Today,<a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank"> custom made software</a> is important for every business aiming for success. Companies like Nike and Amazon have embraced custom software solutions to streamline their operations, and enhance customer experiences. Custom software allows businesses to best applications specifically to their unique needs, ensuring they can adapt quickly to market changes and specific customer demands. For instance, a retail business might require an inventory management system that integrates seamlessly with its e-commerce platform, while a healthcare provider could benefit from a patient management system designed around its specific workflow. By opting for customized software, businesses can improve efficiency, reduce operational costs, and deliver a superior service that meets their customers' expectations. Investing in custom software developed by the best software development company in Calicut, that’s easy for your business,<a href="https://www.wisbato.com/contact" target="_blank"> Contact now</a>.`,
//       ],
//       advantages: {
//         id: 1,
//         title: "What happens you make a software",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Increased Efficiency",
//             // description:
//             //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
//           },
//           {
//             id: 2,
//             title: "Enhanced Decision-Making",
//             // description:
//             //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
//           },
//           {
//             id: 3,
//             title: "Improved Customer Experience",
//             // description:
//             //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
//           },
//           {
//             id: 4,
//             title: "Save time ",
//             // description:
//             //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
//           },
//           {
//             id: 5,
//             title: "Scalability",
//             // description:
//             //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "What happens you don't make a software",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Inefficiency",
//             // description:
//             //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
//           },
//           {
//             id: 2,
//             title: "Lack of Data Insights",
//             // description:
//             //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
//           },
//           {
//             id: 3,
//             title: "Poor Customer Experience",
//             // description:
//             //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
//           },
//           {
//             id: 4,
//             title: "Limited Scalability",
//             // description:
//             //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
//           },
//           {
//             id: 5,
//             title: "Increased Risk",
//             // description:
//             //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why Choose Wisbato for Software Development?",
//       cards: [
//         {
//           id: 1,
//           title: "Expertise &<br/> Experience",
//           description:
//             " Wisbato boasts a team of skilled and experienced software developers who have successfully delivered numerous projects across various industries.",
//         },
//         {
//           id: 2,
//           title: "Customized <br/>  Solutions",
//           description:
//             "We understand that every business has unique requirements. At Wisbato, we prioritize understanding your specific needs and tailoring our solutions accordingly.",
//         },
//         {
//           id: 3,
//           title: "Commitment to Quality &<br/> Innovation",
//           description:
//             "We are dedicated to delivering high-quality software that exceeds your expectations. ",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "why we are different",
//       description: [
//         `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we differentiate ourselves by offering a comprehensive range of software development services to Calicut business owners and companies, all powered by the latest technologies. Our professional software developers understand <a href="https://www.wisbato.com/blogs/why-need-a-custom-software-development" target="_blank">why your business needs a software solution</a>, and we work to fulfill that purpose.From custom software development and mobility solutions to cloud computing, embedded systems, blockchain, and system integration, we have the expertise to create your unique business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team</a> is passionate about staying at the forefront of technological advancements, implementing AI, big data, and augmented reality to create innovative and effective solutions. We are committed to delivering exceptional results, building long-term partnerships, and exceeding your expectations. Choose Wisbato as your trusted software development partner in Calicut and experience the difference.
// `,
//       ],
//     },
//   },
//   {
//     id: 8,
//     title: "Best Digital Marketing Agency In Calicut",
//     description: [
//       `Are you looking for the best digital marketing agency in Calicut to improve your business? Look no further than Wisbato. We specialize in providing best digital marketing services to meet your business needs.<a href="https://www.wisbato.com/team" target="_blank">Our team of digital marketing experts</a>  understands why having a strong online presence is essential for your business success. That’s why we offer a wide range of services, including <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> social media marketing</a>, <a href="https://www.wisbato.com/services/search-engine-optimization-company-in-calicut" target="_blank">SEO</a>, Google Ads,<a href="https://www.wisbato.com/services/branding-agency-in-calicut" target="_blank">branding</a>, YouTube ads, video shoots, email marketing, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web development</a>, and content marketing. Whether you want to boost your brand visibility or drive more leads, Wisbato is here to help.

// `,
//       "At Wisbato, we know that each business is unique, and a one-size-fits-all approach simply won’t work. That's why we customize our strategies based on your business goals and target audience. For businesses looking to improve their search engine rankings, we offer expert Search Engine Optimization (SEO) services that help you rank higher on Google and attract organic traffic. We also specialize in Search Engine Marketing (SEM), ensuring that your business gets noticed by potential customers when they search for products or services you offer. If social media is your focus, we create engaging content that resonates with your audience across platforms like Facebook, Instagram, and LinkedIn.",
//       `With Wisbato, you’ll get a holistic approach to digital marketing that drives results. From content marketing that tells your brand story to video shoots that bring your products to life, we cover all aspects of your digital marketing needs. When you partner with <a href="https://www.wisbato.com/" target="_blank"> Wisbato</a>, you’re choosing a team dedicated to growing your business in the competitive online world.  `,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Unique Digital Marketing Ideas for Every Business",
//       description: [
//         `Every business needs a custom digital <a href="https://en.wikipedia.org/wiki/Marketing_strategy" target="_blank">marketing strategy</a> , so we will focus on business owners who are constantly seeking innovative digital marketing ideas to stand out and connect with their target audience. Customized content marketing strategies, such as interactive blog posts and engaging videos, can help businesses tell their unique story and attract customers. With the rise of AI tools, businesses can now automate tasks, analyze consumer behavior, and deliver personalized content at scale. Incorporating these latest strategies into your digital marketing efforts builds strong, lasting relationships with your customers, ultimately driving growth and success for your business with the best digital marketing agency in Calicut.
// `,
//       ],
//       advantages: {
//         id: 1,
//         title: "Advantages of Using Digital Marketing",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "Increased Online Visibility",
//             // description:
//             //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
//           },
//           {
//             id: 2,
//             title: "Targeted Advertising",
//             // description:
//             //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
//           },
//           {
//             id: 3,
//             title: "Cost Efficiency",
//             // description:
//             //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
//           },
//           {
//             id: 4,
//             title: "Cost Efficiency",
//             // description:
//             //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
//           },
//           {
//             id: 5,
//             title: "Enhanced Customer Interaction",
//             // description:
//             //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "Don't Using Digital Marketing",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Constantly Evolving Strategies",
//             // description:
//             //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
//           },
//           {
//             id: 2,
//             title: "High Competition Online",
//             // description:
//             //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
//           },
//           {
//             id: 3,
//             title: "Time-Consuming",
//             // description:
//             //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
//           },
//           {
//             id: 4,
//             title: "Technical Issues",
//             // description:
//             //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
//           },
//           {
//             id: 5,
//             title: "Risk of Negative Feedback",
//             // description:
//             //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
//           },
//         ],
//       },
//     },
//     question: {
//       title: "Why choose WISBATO for digital marketing?",
//       cards: [
//         {
//           id: 1,
//           title: " Trusted Digital Marketing Partner",
//           description:
//             " Discover how Wisbato can help you achieve your marketing goals through innovative strategies, data-driven insights, and expert execution.",
//         },
//         {
//           id: 2,
//           title: "Expertise You Can Trust",
//           description:
//             "Choosing Wisbato means partnering with a team that has extensive experience in various digital marketing disciplines.",
//         },
//         {
//           id: 3,
//           title: " Results-Oriented Strategies",
//           description:
//             " Our comprehensive digital marketing services, from SEO and social media to content marketing and PPC, are designed to boost your brand visibility and drive conversions. ",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Why we are different from others.",
//       description: [
//         `At  <a href="https://www.wisbato.com/" target="_blank">Wisbato</a>,  we pride ourselves on being different from other digital marketing service providers. Our approach is centered around creating customized digital marketing strategies that align with your unique business goals. Unlike the one-size-fits-all methods many companies use, we offer a variety of marketing techniques, from SEO and social media marketing to Google Ads and content marketing, ensuring that each campaign is customized  to drive the best results for your brand. As the <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank"> best digital marketing company in Calicut</a>, we focus on innovation, data-driven insights, and delivering measurable growth, making us the ideal partner for businesses looking to stand out in the crowded online space. Check out our <a href="https://www.google.com/search?q=Wisbato+Pvt.+Ltd&sca_esv=c64c958eaf0dca0a&sca_upv=1&hl=en-GB&authuser=0&biw=1366&bih=657&sxsrf=ADLYWIIU_1em3_OpIBzuiSTEmB9iLP2Chg%3A1726641860982&ei=xHbqZtjSO7mmvr0PnJaXoAU&ved=0ahUKEwjYxJyW8suIAxU5k68BHRzLBVQQ4dUDCA8&uact=5&oq=Wisbato+Pvt.+Ltd&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhBXaXNiYXRvIFB2dC4gTHRkMgQQIxgnMgQQIxgnMgIQJjIIEAAYgAQYogQyCBAAGIsDGO8FMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIwglQ7QRY7QRwAXgAkAEAmAHVAaAB1QGqAQMyLTG4AQPIAQD4AQGYAgGgAuwBmAMAiAYBkgcDMi0xoAejBw&sclient=gws-wiz-serp#lrd=0x3ba65f32732f18a7:0xf2c3846272a4ddcd,1,,,," target="_blank">client words</a>.
// `,
//       ],
//     },
//   },
//   {
//     id: 9,
//     title: "Web Application Company in Calicut",
//     description: [
//       `As a leading web application company in Kerala, Wisbato specializes in custom <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank"> web development </a>  solutions to meet the needs of various industries. Our emphasis on web application development makes us serve you with innovative and user-friendly applications that will always improve your digital presence. We understand how a reliable web application can make all the difference in this competitive marketplace in gaining hold of customers, streamlining operations, and going global.

// `,
//       `We have successfully developed so many web applications at <a href="https://www.wisbato.com/" target="_blank"> Wisbato </a>, including e-commerce platforms, CRM, and CMS. Our <a href="https://www.wisbato.com/services/ecommerce-development-company-in-calicut" target="_blank"> e-commerce solutions </a>  enable businesses to sell products or services online without any discomfort and properly secure payment gateways. Our CRM systems enable companies to manage customer interactions efficiently for customer satisfaction and retention.
//  `,
//       "Another significant aspect, which remains the same in all the web applications we design, is security. We ensure huge security measures protecting all of your data and ensuring smooth-running business operations. Besides, with continuous maintenance and support, we keep your web application updated so that your website continues at its best performance. With scalable solutions, we march alongside your growing business and welcome new features and functionalities easily. With the technical expertise and  deep understanding of our client's business goals, we provide result-oriented solutions for encouraging business growth.",
//       "Wisbato is proud of delivering high-quality web application development services at costs allowing customers an exceptional value for their money invested. Have Wisbato become your partner, allowing you to gain the power of web applications and propel your business up the digital ladder. In this way, we can build web applications that position you in the marketplace.",
//       ,
//     ],
//     servicePlatform: true,
//     subContent: {
//       title: "Unique Solutions for Every Business",
//       description: [
//         `We at Wisbato understand that every business is different. This is why we offer customized services based on the client's specific needs and goals. Our dedicated <a href="https://www.wisbato.com/team" target="_blank">team of experts</a>  works closely with you to seek insight into your whole business, your target audience, and your vision. Our web application solutions will thus be perfectly aligned with your business vision. Whether you are looking to build an online shop for any product or service you should create a customer management tool. Our flexible approach ensures increased efficiency, superior user experience, and measurable growth. Choose Wisbato to empower your business with web applications that help you grow in a competitive landscape.
// `,
//       ],
//       advantages: {
//         id: 1,
//         title: "Benefits of Having Web Application Development",
//         // description: "A well-designed website offers a multitude of benefits",
//         points: [
//           {
//             id: 1,
//             title: "They are accessible",
//             // description:
//             //   "By providing IT support, your business can implement robust security measures to protect sensitive data and systems from cyber threats, ensuring the integrity and confidentiality of your information.",
//           },
//           {
//             id: 2,
//             title: "User experience gets enhanced",
//             // description:
//             //   "IT support helps streamline operations by maintaining and optimizing hardware, software, and networks. This leads to fewer disruptions, allowing your team to focus on core business activities and boosting overall productivity.",
//           },
//           {
//             id: 3,
//             title: "Scalable",
//             // description:
//             //   "Regular IT support can prevent costly downtime and reduce the need for emergency repairs. By proactively managing and maintaining your IT infrastructure, you can avoid unexpected expenses and better allocate resources.",
//           },
//           {
//             id: 4,
//             title: "Improved collaboration",
//             // description:
//             //   "With IT support, you have access to skilled professionals who can offer guidance and solutions for complex technical issues, ensuring your business stays up-to-date with the latest technology advancements.",
//           },
//           {
//             id: 5,
//             title: "Maintenance is cost-effective",
//             // description:
//             //   "Reliable IT support ensures that your systems and applications are always functioning smoothly, enabling you to provide consistent and high-quality service to your customers, enhancing their experience and satisfaction.",
//           },
//         ],
//       },
//       disAdvantages: {
//         id: 1,
//         title: "Drawbacks of Not Having Web Application Development",
//         // description:
//         //   "Running a business without a website means missing out on a massive audience",
//         points: [
//           {
//             id: 1,
//             title: "Low reach",
//             // description:
//             //   "Without IT support, technical issues can take longer to resolve, leading to prolonged periods of downtime. This may cause operational disruptions for businesses.",
//           },
//           {
//             id: 2,
//             title: "Inefficient processes",
//             // description:
//             //   "Without proper IT support, your business is more susceptible to cyber attacks and data breaches. Lack of security measures and monitoring can put sensitive information at risk.",
//           },
//           {
//             id: 3,
//             title: "Ineffective customer engagement",
//             // description:
//             //   "Ignoring IT support can lead to more significant issues that are expensive to fix. Emergency repairs and reactive solutions often cost more than proactive maintenance and support.",
//           },
//           {
//             id: 4,
//             title: "Unlikely to defeat the competition",
//             // description:
//             //   "Without IT support, your business may fall behind in adopting the latest technology trends and updates. This can impact your competitive edge and efficiency.",
//           },
//           {
//             id: 5,
//             title: "Challenges in data management",
//             // description:
//             //   "Employees may spend valuable time troubleshooting IT issues instead of focusing on their primary tasks. This can lead to lower productivity and overall business inefficiency.",
//           },
//         ],
//       },
//     },
//     question: {
//       title:
//         "Why should one choose Wisbato for website application development?",
//       cards: [
//         {
//           id: 1,
//           title: "Experience & expertise",
//           description:
//             " We have an experienced team that has worked on the production of high-quality, user-friendly web applications in various industries.",
//         },
//         {
//           id: 2,
//           title: "Ongoing Support & Maintenance",
//           description:
//             "We keep your web application ongoing, which makes it stand in perfect condition and always on top of its performance.",
//         },
//         {
//           id: 3,
//           title: " Quality Assurance",
//           description:
//             "We hold quality above everything, at Wisbato, in ensuring that every application meets stringent performance as well as security standards. ",
//         },
//       ],
//     },
//     summery: {
//       id: 1,
//       title: "Partner with Our Expert Web Application Team",
//       description: [
//         `<a href="https://www.wisbato.com/" target="_blank">Wisbato</a> lets you make your business shine above the rest by developing the best of our applications with top web application development. We are a <a href="https://www.wisbato.com/team" target="_blank"> team of professionals</a> who have rich expertise in developing customized solutions relevant to your particular business needs, emphasizing innovative designs, user-friendly interfaces, and efficient functionality that makes your web application much more than what is expected. We are always up-to-date with the latest technologies and trends in industries and styles so that you are assured that the best solutions will help bring growth and engagement to your business. Do not settle for less; partner with the best web application development company in Kerala today and change your digital presence.<a href="https://www.wisbato.com/contact" target="_blank">Call us now</a> to talk about your project.

// `,
//       ],
//     },
//   },
// ];

// export const services = [
//   {
//     id: 1,
//     slug: "web-development-company-in-calicut",
//     title: "Web Development",
//     peopleTitle: "Web Development Team",
//     metaTitle: "Best Web Design & Development Company In Calicut, Kerala",
//     metaDescription:
//       "Are you planning to develop a website for your business in Calicut? Wisbato is the best web design & development company in Calicut, Contact now for your custom website design in Kozhikode.",
//     description:
//       "We believe in developing websites that reach your potential clients through visually appealing and highly responsive websites.",
//     image: "/images/services/webdevelopment",
//     // image: "/images/services/webdevelopment.webp",
//     style: {
//       backgroundColor: "#FFDD78",
//     },
//     width: "55",
//     context: {
//       mainTitle:
//         "Enhance <span>Your Reach</span> by Developing an Eye-Catching Online Presence",
//       subTitle: "Why Web Development is considered important?",
//       content: `<span>In bussiness,<a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" >Web development</a> is important because it would give the business a professional online look, which in turn gives confidence and visitors to know your business. In a competitive market, a website visitor gets an overview of your products and services. While the costs of making a website are usually quite different, the investment in a responsive, SEO-friendly website ensures the growth of a business. Wisbato the best web development company in Calicut specifically engaged in cost-effective web development and design with definite requirements for your specific business needs.
// </span>`,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Planning and Requirement Gathering",
//         image: "/images/workingProcess/planningandexicution.webp",
//         alt: "web development company in Calicut",
//         list: [
//           {
//             id: 1,
//             title: "Understanding project needs",
//             content:
//               "As the initial stage of the working process, we will be gathering the requirements of your project, such as the target audience, objective, features, and functionality.",
//           },
//           {
//             id: 2,
//             title: "Creation of user personas",
//             content:
//               "To guide the web development, our team will be creating user personas and defining user stories.",
//           },
//           {
//             id: 3,
//             title: "Planning of the website",
//             content:
//               "The site structure of the website is planned, and the navigation is designed.",
//           },
//           {
//             id: 4,
//             title: "Development of Strategy",
//             content:
//               "Once the required information is gathered, we will now be developing the most appropriate strategy for further project management.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Design of the web",
//         image: "/images/workingProcess/designoftheweb.webp",
//         alt: "web design company in Calicut",
//         list: [
//           {
//             id: 5,
//             title: "Creation of sitemap",
//             content:
//               "To visualize the layout and functionality of the website, a wireframe or prototype of the website is created. Through this, the clients will be able to perceive how the entire website will appear.",
//           },
//           {
//             id: 6,
//             title: "Receiving approval from the client",
//             content:
//               "We will be waiting for the approval of the client, as we have to confirm that everything looks good so that we can resume our work.",
//           },
//           {
//             id: 7,
//             title: "UI/UX is designed",
//             content:
//               "At this step of web development, user interface (UI) and user experience elements are designed.",
//           },
//           {
//             id: 8,
//             title: "Development of visual design",
//             content: "Colour schemes, imagery, and typography are developed.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Frontend and Backend Development",
//         image: "/images/workingProcess/backend.webp",
//         alt: "website development company in Calicut",
//         list: [
//           {
//             id: 9,
//             title: "Writing and styling HTML markup",
//             content:
//               "To structure the content, the HTML markup is scripted. Then, with the help of CSS, the desired colors, layouts, fonts etc, the HTML elements are styled.",
//           },
//           {
//             id: 10,
//             title: "Implementation of interactivity and dynamic behavior",
//             content:
//               "Interactivity and dynamic behavior are implemented with the help of JavaScript or frontend frameworks/libraries such as React or Angular.",
//           },
//           {
//             id: 11,
//             title: "Selection of backend technology stack",
//             content:
//               "Now that the frontend development has been completed, at this point, a backend technology stack such as PHP, Python with Django, Node.js or Flask is chosen.",
//           },
//           {
//             id: 12,
//             title: "Implementation of data storage",
//             content:
//               "With the help of databases like MongoDB, MySQL, or PostgreSQL, data storage and retrieval are implemented.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Integration and Testing",
//         image: "/images/workingProcess/integrationandtesting.webp",
//         alt: "best web development company in Calicut",
//         list: [
//           {
//             id: 13,
//             title: "Integration of frontend and backend components",
//             content:
//               "At this stage, to work the frontend and backend components together seamlessly, they are integrated.",
//           },
//           {
//             id: 14,
//             title: "Implementation of APIs",
//             content:
//               "To communicate between different parts of the system or with any third-party services, APIs are implemented.",
//           },
//           {
//             id: 15,
//             title: "Conducting unit test",
//             content:
//               "To confirm that individual components are working properly, unit testing is performed.",
//           },
//           {
//             id: 16,
//             title: "Performing usability testing",
//             content:
//               "To examine the user experience, usability testing is carried out. After this, compatibility testing is performed across multiple browsers and devices.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Deployment",
//         image: "/images/workingProcess/deployment.webp",
//         alt: "best web development company in Calicut",
//         list: [
//           {
//             id: 17,
//             title: "Establishing a hosting environment",
//             content:
//               "Through shared hosting, VPS, or cloud hosting, a hosting environment is set up.",
//           },
//           {
//             id: 18,
//             title: "Configuration of server settings",
//             content:
//               "The website files are deployed after the configuration of server settings.",
//           },
//           {
//             id: 19,
//             title: "Considering security measures",
//             content:
//               "Our team will be assuring that required security measures are taken, such as SSL certificates, firewalls etc.",
//           },
//           {
//             id: 20,
//             title: "Final monitoring of the website",
//             content:
//               "The performance of the website is monitored and if any issues are spotted, troubleshooting.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: "Maintenance and Updates",
//         image: "/images/workingProcess/updatesandmaintain.webp",
//         alt: "best web development company in Calicut",
//         list: [
//           {
//             id: 21,
//             title: "Updating of contents and features",
//             content:
//               "As per the feedback from the client and other requirements, both contents and features are regularly updated.",
//           },
//           {
//             id: 22,
//             title: "Monitoring the performance",
//             content:
//               "We will be monitoring the security and performance of the website.",
//           },
//           {
//             id: 23,
//             title: "Application of patches",
//             content: "Patches are applied and updates are done.",
//           },
//           {
//             id: 24,
//             title: "Regular Optimization",
//             content:
//               "With the aim of improving the performance, user experience, and accessibility, our team continuously optimizes the website.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[0],
//     FAQData: [
//       // {
//       //   id: 1,
//       //   title: "How will I make my website mobile-friendly?",
//       //   content:
//       //     "To make your website look visually appealing on both small and large devices, you may develop a responsive website. Once creating such a website, your web traffic will also increase and thereby improve your search engine rankings. If you are hiring us, we deliver a highly responsive website that ensures an optimised browsing experience.",
//       // },
//       // {
//       //   id: 2,
//       //   title: "How does web development differ from web design?",
//       //   content:
//       //     "When web development introduces dynamic and interactive functions to it, web design is the process of creating a website. Moreover, web developers are the ones who add functionalities to the website and the web designers enhance the user experience of the site by adding an aesthetic value to it. Most notably, web developers are held accountable for coding.",
//       // },
//       // {
//       //   id: 3,
//       //   title: "What is the need for hiring a professional web developer?",
//       //   content:
//       //     "Doing web development all by yourselves will prove to be a bad idea, unless you are taking a lot of time and effort, and have the right language and its best practices. A professional web developer possesses the right skills and expertise to get your website running. Besides that, they are most likely to follow the latest web development trends and practices.",
//       // },
//       {
//         id: 4,
//         title: "Why need a website for my business?",
//         content: `In 2024, over 5.35 billion people will use the internet globally. So think of your website as your online store, open 24/7 and easy to access. It builds credibility, showcases your products and service offerings, and attracts customers even when you're not working. It's essential for reaching new audiences, generating leads, and staying competitive in today's online world. This is the reason <a href="https://www.wisbato.com/blogs/why-every-business-needs-a-professional-website" target="_blank">why you need a website for your website</a>.`,
//       },
//       {
//         id: 5,
//         title: "What website should I use for my small business in Calicut?",
//         content:
//           "Are you a small business owner in Calicut?, you should use a website that is professionally designed, user-friendly, and customized to your specific needs. Platforms like WordPress, Wix, or Squarespace are great for creating simple, cost-effective websites. However, for a more customized solution, partnering with a professional web development company in Calicut like WISBATO can ensure your website is unique, scalable, and aligned with your business goals.",
//       },
//       {
//         id: 6,
//         title:
//           "How much time will it take to complete my website from beginning to end?",
//         content:
//           "The time it takes to complete a website from start to finish depends on the type and complexity of your project. Typically, the process begins with planning and organization, which takes about 1-2 weeks. If you require a standard startup website, it usually takes 1-2 weeks to build. However, if you need a more complex site like an e-commerce website, the development time can extend to 2-3 weeks. And graphic design, UI/UX, rich content, and SEO optimization are also crucial & can impact the timeline. Ultimately, the duration largely depends on your specific requirements and the project's complexity.",
//       },
//       {
//         id: 7,
//         title: "How can a professional website benefit my business in Calicut?",
//         content:
//           " A professional website will make a huge difference for your business in terms of efficiency in creating awareness of your business and can easily be accessed by many potential customers. It sets your business credibility and presents your products or services to a bigger market. Hence, with the localized SEO services, your web site can attract local consumers in Calicut in Kerala. The use of an effective website creates favorable opportunities for engaging your company’s customers and fosters trustful cooperation in the long term.",
//       },
//       {
//         id: 8,
//         title: "How much is the website development cost in Calicut?",
//         content: `The cost of website development in Calicut varies based on the size and complexity of the project. For a small dynamic website, prices start from RS: 5,500 to RS: 42,500. Mid-level websites typically range from RS: 8,500 to RS: 85,000. For large business websites, costs begin at RS: 15,000 and can go up to RS: 1,70,000. The final price depends on the client's specific requirements and features they want to include. Check out full details on <a href="https://www.wisbato.com/blogs/website-design-cost-in-kerala" target="_blank">website development cost.</a>
// `,
//       },
//       {
//         id: 9,
//         title:
//           " Why should I choose a Calicut-based company for my web development?",
//         content: `Choosing a Calicut-based web development company offers several benefits. Local companies understand the unique business environment and customer preferences in the region, allowing them to create best solutions that resonate with your target audience.They also provide more personalized support, with easier communication and quicker response times.It reduces the <a href="https://www.wisbato.com/blogs/what-is-the-bounce-rate-how-to-improve-it" target="_blank"> bounce rates</a>, keeps visitors engaged with the website, and increases the rate of conversion.
// `,
//       },
//     ],
//   },
//   {
//     id: 2,
//     slug: "application-development-company-in-calicut",
//     title: "Application Development",
//     peopleTitle: "Application Development Team",
//     metaTitle: "Application Development Company In Calicut",
//     metaDescription:
//       "Wisbato builds custom web applications in Calicut. We craft user-friendly mobile and web applications to meet your unique business needs in Calicut. Get a free quote today!",
//     description:
//       "For a better online presence, we ensure functionality with our unique app services. Make your application more secure and free of bugs, as we follow neat structures of coding.",
//     image: "/images/services/mobileapp",
//     // image: "/images/services/mobileapp.webp",
//     style: {
//       backgroundColor: "#DCD2F7",
//       position: "relative",
//     },
//     width: "45",
//     context: {
//       mainTitle:
//         "<span>Boost productivity and engagement</span> with expertly developed web applications",
//       subTitle:
//         "Why Every Business Needs Web Application Development for Success",
//       content: ` <a href="https://en.wikipedia.org/wiki/Web_application" target="_blank">Web application</a> development is crucial for any business, as it helps business houses sell their products or services on the internet, provide access to very important information, as well as also reach diverse audiences. Additionally, it avails features of consumer engagement, cross-platform compatibility, and centralized data that web applications have in streamlining all operations related to increasing customer experience. They also provide an inexpensive solution for businesses looking to increase their online presence and market scope.
// `,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Idea Generation and Planning",
//         image:
//           "/images/workingProcess/application development/Idea Generation and Planning.jpg",
//         alt: "Idea Generation and Planning",
//         list: [
//           {
//             id: 1,
//             title: "Brainstorming Ideas",
//             content:
//               "At the very step of app development, the brainstorming of ideas will be done about how it will be feasible in the current market.",
//           },
//           {
//             id: 2,
//             title: "Identification of Target Audience",
//             content:
//               "You have to decide who the target audience of the app is, before moving further with your plans.",
//           },
//           {
//             id: 3,
//             title: "Defining the Purpose of the App",
//             content:
//               "Among the feasibility studies done around the app, the major purpose behind the development of the application will be analysed.",
//           },
//           {
//             id: 4,
//             title: "Market Research",
//             content:
//               "Prior to investing significant resources in the app's development and promotion, we will try to determine whether there is a market niche for the app idea.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Wireframing and Prototyping",
//         image:
//           "/images/workingProcess/application development/Wireframing and Prototyping.jpg",
//         alt: "Wireframing and Prototyping",
//         list: [
//           {
//             id: 5,
//             title: "Creation of a Rough Wireframe",
//             content:
//               "A basic illustration of the interface of the screen, which provides a demo about how the target audience is going to use the product, will be created.",
//           },
//           {
//             id: 6,
//             title: "Collecting Feedback on App Wireframes",
//             content:
//               "It is very essential to get feedback on the app wireframes at least from a larger majority of the target audience.",
//           },
//           {
//             id: 7,
//             title: "Making Use of the Tools",
//             content:
//               "The feedbacks are gathered with the help of certain tools.",
//           },
//           {
//             id: 8,
//             title: "Providing Mock-ups to the Clients",
//             content:
//               "Since we believe in an iterative approach, we will be offering as many mock-ups to the users as possible, which allow the strategy for the functionality of the app to change and adapt.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Design",
//         image: "/images/workingProcess/application development/Design.jpg",
//         alt: "Design",
//         list: [
//           {
//             id: 9,
//             title: "Refining the Approved Wireframes",
//             content: "The designs will be crafted by the UX and UI designers.",
//           },
//           {
//             id: 10,
//             title: "Creation of Visual Elements of the App",
//             content:
//               "As per the requirements of the app, these elements will be set up by the designers.",
//           },
//           {
//             id: 11,
//             title: "Production of High-Fidelity Mock-ups",
//             content:
//               "Once the information on what happens if the visual elements are tapped, dragged or swiped, our developers will be turning into a working app.",
//           },
//           {
//             id: 12,
//             title: "Establishment of Brand Guidelines",
//             content:
//               "This ensures that the branding of the app is consistent and well-implied to the designers and developers. After this, the designing of the market strategy will be done.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Development",
//         image: "/images/workingProcess/application development/Development.jpg",
//         alt: "Development",
//         list: [
//           {
//             id: 13,
//             title: "Concluding Iterating through Feedback",
//             content:
//               "Feedback about the wireframes will be received and we will be making visible and large decisions.",
//           },
//           {
//             id: 14,
//             title: "Integration of Analytic Engine",
//             content:
//               "We will be cross-checking about and figuring out how the app is perceived and analyzing the general flow of users.",
//           },
//           {
//             id: 15,
//             title: "Organizing Events",
//             content:
//               "More user interactions will be done to know more about the users and their approach to using the app.",
//           },
//           {
//             id: 16,
//             title: "Further Iteration of the App",
//             content:
//               "To have the best possible outcome, we will be iterating the design of the app before it is released to the world.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Testing and Deployment",
//         image:
//           "/images/workingProcess/application development/Testing and Deployment.jpg",
//         alt: "Testing and Deployment",
//         list: [
//           {
//             id: 17,
//             title: "Identification and Fixing of Bugs",
//             content:
//               "It will be done thoroughly, with the help of Quality assurance testers.",
//           },
//           {
//             id: 18,
//             title: "Functional Testing and Compatibility Testing",
//             content:
//               "Through this, we ensure that all features of the app are functioning as per the expectations. We make sure that the app is compatible with multiple operating systems through compatibility tests.",
//           },
//           {
//             id: 19,
//             title: "Performance Testing and Security Testing",
//             content:
//               "The speed and the level of responsiveness will be assessed through this testing. Finally, the security tests are done to detect and address any vulnerability.",
//           },
//           {
//             id: 20,
//             title: "Deployment",
//             content:
//               "Now that the app has passed all these tests, it will be deployed and made available for download through app stores or channels.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: "Maintenance and Updates",
//         image:
//           "/images/workingProcess/application development/Maintenance and Updates.jpg",
//         alt: "Maintenance and Updates",
//         list: [
//           {
//             id: 21,
//             title: "Monitoring is Resumed",
//             content:
//               "Even after the launch of the application, the performance of the apps will continue to be monitored by our developers.",
//           },
//           {
//             id: 22,
//             title: "Collecting Feedback",
//             content:
//               "Feedback will still be gathered if they have to be iterated. It could be about enhancing functionality or fixing bugs.",
//           },
//           {
//             id: 23,
//             title: "Release Updates",
//             content:
//               "Any more updates will be made as per the feedback gathered by the client. The issues identified in the previous step will be addressed swiftly.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[8],
//     FAQData: [
//       {
//         id: 1,
//         title: "What types of web applications do you develop?",
//         content:
//           "We build almost everything in the e-commerce space, including online selling e-commerce platforms, CRM, content management systems, and many customized applications designed to meet certain business needs. Their solutions are dynamic and scalable, meaning they reflect the needs of businesses from various sectors.",
//       },
//       {
//         id: 2,
//         title: "How long does it take to develop a web application?",
//         content:
//           "Our timeframes for the development of web applications will depend upon the complexity and needs of a particular project. An easy application would take about 4 to 8 weeks; a complex system could take 10 to 12 weeks. We may also be in a position to define a much more specific timeline depending on your requirements and the scope of the project that we assess.",
//       },
//       {
//         id: 3,
//         title:
//           " Can the web application be tailored to fulfill my custom business requirements?",
//         content:
//           "Absolutely. Our company provides customized web application solutions that are absolutely tailored to satisfy your business needs. We can provide you with one-of-a-kind features, industry-specific solutions, or any feature that you may want on the web that would give your users a personal touch. We work closely with you to ensure the application aligns with your goals and enhances operational efficiency.",
//       },
//       {
//         id: 4,
//         title:
//           " Can you provide support and maintenance after the completion of the project?",
//         content:
//           "Yes, we provide support and maintenance services after the successful delivery of your project. for your app. This is achieved through performance monitoring, bug fixes, security updates, feature enhancements, etc. We use the industry's best technology for your project based on your requirements. It will ensure speed, security and optimized performance of your app.  ",
//       },
//       {
//         id: 5,
//         title: "  How do you make sure the web application is secure?",
//         content:
//           "We implement security through SSL encryption, secure authentication, regular security audits, and data protection protocols. We are not only up to date with the best industry practices but also strict with the standards set for regulatory compliance, thereby eliminating vulnerabilities in your web application and attacks.",
//       },
//       {
//         id: 6,
//         title:
//           "  What technology do you use in the development of your web application?",
//         content:
//           "We use the best technologies from React, Angular, Node.js, Laravel, and PHP to create scalable and highly-performing web applications. Based on the specific requirements of your project, we determine the best technology stack for your project. We ensure speed, security, and optimization for the growth of the developed application.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     slug: "branding-agency-in-calicut",
//     title: "Branding",
//     peopleTitle: "Branding Team",
//     metaTitle: "Top Branding Agency In Calicut | Wisbato",
//     metaDescription:
//       "Discover the best branding and advertising agency in Calicut. Brand your business with Wisbato for exceptional results.",
//     description:
//       "Enhance brand awareness with us, as we could aid you to stand out from the ordinary. Refine the visual appeal of your brand with our strong brand strategies.",
//     image: "/images/services/branding",
//     // image: "/images/services/branding.webp",
//     style: {
//       backgroundColor: "#F6C4FE",
//       position: "relative",
//     },
//     width: "45",
//     context: {
//       mainTitle:
//         "Create a Distinct Identity for <span>your Brand</span> with Us",
//       subTitle: "How important is Branding?",
//       content: ` <a href="https://en.wikipedia.org/wiki/Branding" target="_blank">Branding </a>is an important part of your business, because it gives your business a unique identity that sets it apart from competitors.A <a href="https://en.wikipedia.org/wiki/Brand" target="_blank">brand </a>isn't just a logo or a name; it's the entire experience your customers have with your product or service. Whether it's a name, a design, or a symbol, these elements come together to create an image that people recognize and trust. In a crowded marketplace, having a strong brand helps your business stand out, communicate its values, and build lasting relationships with customers. It’s how customers remember you and choose you over others.
// `,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Research and Analysis",
//         image: "/images/workingProcess/branding/Research and Analysis.jpg",
//         alt: "branding agency in Calicut",
//         list: [
//           {
//             id: 1,
//             title: "Conducting Research",
//             content:
//               "As the very first step, we will determine the present condition of your brand and the path you must consider to unlock your potential.",
//           },
//           {
//             id: 2,
//             title: "Gathering of insights",
//             content:
//               "To collect and know about the insights, our team will be conducting surveys, interviews, and market research.",
//           },
//           {
//             id: 3,
//             title: "Identification of opportunities and challenges",
//             content:
//               "Industry trends are analyzed to identify opportunities and challenges.",
//           },
//           {
//             id: 4,
//             title: "Performing research facilities",
//             content:
//               "For the establishment of the vision, mission, values, and strategies for your company, certain research facilities are performed.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Defining Brand Strategy",
//         image: "/images/workingProcess/branding/Defining Brand Strategy.jpg",
//         alt: "best branding company in Kozhikode",
//         list: [
//           {
//             id: 5,
//             title: "Initial development of brand strategy",
//             content:
//               "Here, we will be figuring out the direction in which the brand should proceed to grow the business.",
//           },
//           {
//             id: 6,
//             title: "Assessment of the brand image",
//             content:
//               "Now, we will assess and define how the brand wants to be perceived by its clients.",
//           },
//           {
//             id: 7,
//             title: "Definition of brand positioning",
//             content:
//               "In this stage, our team will define the positioning of your brand and find out how it differs from its competitors.",
//           },
//           {
//             id: 8,
//             title: "Development of brand architecture",
//             content:
//               "In the final step of defining brand strategy, the brand architecture will be developed, and the relationship between the company's master brand and sub-brands, if any will be revealed.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Creation of Brand Identity and Messaging",
//         image:
//           "/images/workingProcess/branding/Creation of Brand Identity and Messaging.jpg",
//         alt: "branding agency for your business growth",
//         list: [
//           {
//             id: 9,
//             title: "Designing visual elements",
//             content:
//               "The visual elements of the brand such as the colour palette, logo, typography, and imagery will be designed.",
//           },
//           {
//             id: 10,
//             title: "Development of brand guidelines",
//             content:
//               "To ensure consistency in how the brand is showcased in diverse channels and touchpoints, specific brand guidelines are developed.",
//           },
//           {
//             id: 11,
//             title: "Preparation of brand messaging",
//             content:
//               "The messaging of the brand such as taglines, key messages, and value propositions are crafted.",
//           },
//           {
//             id: 12,
//             title: "Decision of brand voice",
//             content:
//               "The brand voice, along with brand tone, is defined, as they reflect the personality and values of the brand.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Brand Implementation and Activation",
//         image:
//           "/images/workingProcess/branding/Brand Implementation and Activation.jpg",
//         alt: "Brand Implementation and Activation",
//         list: [
//           {
//             id: 13,
//             title: "Launch of brand identity",
//             content:
//               "Through multiple touchpoints, the brand identity and messaging are rolled out. It would comprise marketing materials such as websites, advertisements, brochures, etc.",
//           },
//           {
//             id: 14,
//             title: "Implementation of marketing campaign",
//             content:
//               "Marketing campaigns are launched with the motive of introducing the brand to the target audience.",
//           },
//           {
//             id: 15,
//             title: "Engaging in PR activities",
//             content:
//               "Companies must get more publicity, so we attain that buzz and media coverage, and we will engage in public relations activities.",
//           },
//           {
//             id: 16,
//             title: "Promotion of brand advocacy",
//             content:
//               "Promote brand advocacy by establishing relationships with customers and encouraging user-generated content and testimonials.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Monitor and Manage Brand Perception",
//         image:
//           "/images/workingProcess/branding/Monitor and Manage Brand Perception.jpg",
//         alt: "Monitor and Manage Brand Perception",

//         list: [
//           {
//             id: 17,
//             title: "Tracking of KPIs and brand metrics",
//             content:
//               "Since the assessment of the effectiveness of branding efforts is crucial, we will track brand metrics and KPIs.",
//           },
//           {
//             id: 18,
//             title: "Monitoring for feedback and sentiment",
//             content:
//               "Reviews, social media, and other channels will be monitored for availing the feedback and sentiment from the customers.",
//           },
//           {
//             id: 19,
//             title: "Addressing issues",
//             content:
//               "If any issues or negative perceptions arise, they will be addressed rapidly and proactively.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: "Brand Evolution and Adaptation",
//         image:
//           "/images/workingProcess/branding/Brand Evolution and Adaptation.jpg",
//         alt: "Brand Evolution and Adaptation",
//         list: [
//           {
//             id: 20,
//             title: "Update the brand strategy",
//             content:
//               "In accordance with the changes in consumer preferences, market, and competitive landscape, we will continuously evaluate and evolve the brand strategy.",
//           },
//           {
//             id: 21,
//             title: "Refreshing brand identity",
//             content:
//               "To stay relevant in the market, we will be refreshing the brand identity and messaging.",
//           },
//           {
//             id: 22,
//             title: "Sticking to the goals of the brand",
//             content:
//               "While we are updating the brand identity, we ensure that we are maintaining alignment with the objectives and values of the brand.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[5],
//     FAQData: [
//       {
//         id: 1,
//         title: "Why is business branding important for companies in Calicut?",
//         content:
//           "Branding plays a crucial role in helping businesses in Calicut stand out in a competitive market. A strong brand helps establish trust with customers, improves recognition, and differentiates your company from competitors. For local businesses, branding also enhances the connection with the community, helping you build long-term loyalty.",
//       },
//       {
//         id: 2,
//         title: "How can branding improve my business presence in Calicut?",
//         content:
//           "Effective branding boosts your visibility and reputation in Calicut by creating a consistent and professional image. It helps you communicate your business values and promises clearly, whether through logos, color schemes, or messaging. This leads to increased customer trust and a stronger market presence, both locally and online.",
//       },
//       {
//         id: 3,
//         title:
//           "What branding services are essential for small businesses in Calicut?",
//         content: `Small or high businesses in Calicut should focus on essential branding services such as logo design, brand messaging, <a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">website development</a>, <a href="https://www.wisbato.com/services/social-media-marketing-agency-in-calicut" target="_blank">social media branding</a>, and business card design. These elements create a cohesive brand identity that reflects your company's values and helps attract and retain customers.
// `,
//       },
//       {
//         id: 4,
//         title:
//           " Can local branding help my business reach more customers in Calicut?",
//         content:
//           "Yes, focusing on local branding strategies can significantly increase your customer base in Calicut. By creating marketing campaigns and brand messaging tailored to local interests and culture, your business will resonate more with Calicut residents. Utilizing local SEO techniques in your branding also ensures that potential customers in the area can easily find you.",
//       },
//       {
//         id: 5,
//         title:
//           " How long does it take to see results from branding efforts for businesses in Calicut?",
//         content:
//           "Branding is a long-term investment, and it takes time to see full results. However, local businesses in Calicut can start seeing increased awareness and customer engagement within a few months if branding efforts are consistent across digital and physical platforms. Over time, a well-executed brand strategy builds trust and leads to lasting customer relationships.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     slug: "ecommerce-development-company-in-calicut",
//     title: "ECommerce Development",
//     peopleTitle: "Ecommerce Development Team",
//     metaTitle: "Leading E-commerce Web Designing Company In Calicut",
//     metaDescription:
//       "Are you planning to create an E-Commerce website for your business in Calicut? Wisbato is Leading E-Commerce web design & development company in Calicut | contact now",
//     description:
//       "With our tailored eCommerce solutions, you may provide a unique shopping experience to your clients, besides boosting your sales.",
//     image: "/images/services/ecommerce",
//     // image: "/images/services/ecommerce.webp",
//     style: {
//       backgroundColor: "#F7D2DB",
//     },
//     width: "55",
//     context: {
//       mainTitle:
//         "Be the Exact Virtual face of <span>your Business</span> through eCommerce development",
//       subTitle: "Why do businesses need Ecommerce?",
//       content: `In 2024 having an <a href="https://en.wikipedia.org/wiki/E-commerce" target="_blank">e-commerce website</a> is an essential part for any business looking to grow and stay competitive. A good e-commerce web development company allows your business to reach all over customers 24/7, and access your website everywhere and expand your market beyond local limits. It offers an easy shopping experience for customers, allowing them to browse and buy from the comfort of their homes or everywhere. And we add client reviews and rating sections that get a trust for your customers. Additionally, an online e-store helps increase your brand’s visibility and credibility while providing valuable insights into customer behavior and preferences. By having an e-commerce website in Calicut, your business can increase sales, improve customer engagement, and trust. So build an Ecommerce website.`,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Requirement Analysis",
//         image: "/images/workingProcess/Ecommerce/RequirementAnalysis.jpg",
//         alt: "Ecommerce development company in Calicut",
//         list: [
//           {
//             id: 1,
//             title: "Client Consultation",
//             content:
//               "Initiating discussions with the client to understand their business model, goals and target audience.",
//           },
//           {
//             id: 2,
//             title: "Market Research",
//             content:
//               "Conducting thorough market research to identify industry trends, competitors, and consumer preferences.",
//           },
//           {
//             id: 3,
//             title: "Feature Identification",
//             content:
//               "Determining the essential features and functionalities required for the e-commerce platform.",
//           },
//           {
//             id: 4,
//             title: "Scope Definition",
//             content:
//               "Defining the project scope, including deliverables, timeline, and budget constraints.",
//           },
//           {
//             id: 5,
//             title: "User Persona Creation",
//             content:
//               "Developing detailed user personas to tailor the platform to the target audience's needs.",
//           },
//           {
//             id: 6,
//             title: "Documentation",
//             content:
//               "Documenting all gathered requirements and insights for reference throughout the development process.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Planning and Strategy",
//         image: "/images/workingProcess/Ecommerce/Planning and Strategy new.jpg",
//         alt: " Ecommerce website development company in calicut ",
//         list: [
//           {
//             id: 7,
//             title: "Platform Selection",
//             content:
//               "Picking out the appropriate ecommerce platform (e.g., WooCommerce, Shopify, Magento) based on client requirements and scalability needs.",
//           },
//           {
//             id: 8,
//             title: "Technology Stack Definition",
//             content:
//               "Determining the technology stack required for both front-end and back-end development.",
//           },
//           {
//             id: 9,
//             title: "Resource Allocation",
//             content:
//               "Assigning roles and responsibilities to team members, including developers, designers, and project managers.",
//           },
//           {
//             id: 10,
//             title: "Milestone Setting",
//             content:
//               "Establishing clear milestones and checkpoints to track progress and ensure timely delivery.",
//           },
//           {
//             id: 11,
//             title: "Risk Assessment",
//             content:
//               "Identifying potential risks and challenges and developing mitigation strategies to address them.",
//           },
//           {
//             id: 12,
//             title: "Budget Planning",
//             content:
//               "Preparing a detailed budget plan accounting for development costs, third-party integrations, and post-launch maintenance.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Design and User Experience (UX)",
//         image:
//           "/images/workingProcess/Ecommerce/Design and User Experience (UX).jpg",
//         alt: " Develop ecommerce website with best UX ",

//         list: [
//           {
//             id: 13,
//             title: "Wireframing",
//             content:
//               "Creating wireframes to visualize the layout and structure of the ecommerce platform.",
//           },
//           {
//             id: 14,
//             title: "UI Design",
//             content:
//               "Developing a visually appealing user interface that aligns with the client's branding and enhances user experience.",
//           },
//           {
//             id: 15,
//             title: "Responsive Design",
//             content:
//               "Ensuring the platform is responsive and optimized for seamless user experience across various devices and screen sizes.",
//           },
//           {
//             id: 16,
//             title: "Prototype Development",
//             content:
//               "Building interactive prototypes to test navigation flow and user interactions.",
//           },
//           {
//             id: 17,
//             title: "Accessibility Considerations",
//             content:
//               "Incorporating accessibility features to ensure the platform is usable by individuals with disabilities.",
//           },
//           {
//             id: 18,
//             title: "Feedback Iteration",
//             content:
//               "Gathering feedback from stakeholders and iterating on the design to refine and improve usability.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Development and Implementation",
//         image:
//           "/images/workingProcess/Ecommerce/Development and Implementation.jpg",
//         alt: " Ecommerce designers in Calicut  ",

//         list: [
//           {
//             id: 19,
//             title: "Front-end Development",
//             content:
//               "Writing clean and efficient front-end code using HTML, CSS, and JavaScript to bring the design to life.",
//           },
//           {
//             id: 20,
//             title: "Back-end Development",
//             content:
//               "Developing robust back-end functionalities using appropriate programming languages and frameworks (e.g., PHP, Node.js, Django).",
//           },
//           {
//             id: 21,
//             title: "Database Design",
//             content:
//               "Designing and implementing a scalable database architecture to manage product data, user information, and transactions.",
//           },
//           {
//             id: 22,
//             title: "Integration of Third-party APIs",
//             content:
//               "Integrating payment gateways, shipping providers, and other third-party services to enable seamless transactions and order management.",
//           },
//           {
//             id: 23,
//             title: "Security Implementation",
//             content:
//               "Implementing security measures such as HTTPS encryption, data encryption, and user authentication to protect sensitive information.",
//           },
//           {
//             id: 24,
//             title: "Version Control",
//             content:
//               "Utilizing version control systems like Git to track changes and collaborate effectively among team members.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Testing and Quality Assurance (QA)",
//         image:
//           "/images/workingProcess/Ecommerce/Testing and Quality Assurance (QA).jpg",
//         alt: "best ecommerce web development company in Calicut  ",

//         list: [
//           {
//             id: 25,
//             title: "Functional Testing",
//             content:
//               "Testing each feature and functionality to ensure they work as intended according to the requirements.",
//           },
//           {
//             id: 26,
//             title: "Compatibility Testing",
//             content:
//               "Verifying cross-browser and cross-device compatibility to ensure a consistent user experience.",
//           },
//           {
//             id: 27,
//             title: "Performance Testing",
//             content:
//               "Assessing the platform's performance under various load conditions and optimizing for speed and responsiveness.",
//           },
//           {
//             id: 28,
//             title: "Security Testing",
//             content:
//               "Conducting security audits and penetration testing to identify and address potential vulnerabilities.",
//           },
//           {
//             id: 29,
//             title: "Usability Testing",
//             content:
//               "Gathering feedback from real users to assess the platform's usability and identify areas for improvement.",
//           },
//           {
//             id: 30,
//             title: "Bug Fixing and Iteration",
//             content:
//               "Addressing any bugs or issues discovered during testing and iterating on the platform to refine and enhance its performance.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: "Deployment and Maintenance",
//         image:
//           "/images/workingProcess/Ecommerce/Deployment and Maintenance.jpg",
//         alt: "Deployment and Maintenance for ecommerce website",
//         list: [
//           {
//             id: 31,
//             title: "Deployment Planning",
//             content:
//               "Planning the deployment process, including server setup, domain configuration, and migration to the production environment.",
//           },
//           {
//             id: 32,
//             title: "Launch Preparation",
//             content:
//               "Performing final checks and user acceptance testing to ensure the platform is ready for launch.",
//           },
//           {
//             id: 33,
//             title: "Go-live Strategy",
//             content:
//               "Coordinating the launch of the ecommerce platform, including marketing initiatives and promotional campaigns.",
//           },
//           {
//             id: 34,
//             title: "Post-launch Monitoring",
//             content:
//               "Monitoring the platform's performance, user feedback, and analytics to identify any issues and opportunities for improvement.",
//           },
//           {
//             id: 35,
//             title: "Ongoing Support",
//             content:
//               "Providing continuous support and maintenance to address any post-launch issues, apply updates, and implement new features or enhancements.",
//           },
//           {
//             id: 36,
//             title: "Performance Optimization",
//             content:
//               "Regularly optimizing the platform for speed, security, and scalability to ensure optimal performance and user experience.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[1],
//     FAQData: [
//       {
//         id: 1,
//         title:
//           " What services does an e-commerce web development company in Calicut offer?",
//         content: `An e-commerce web development company in Calicut typically offers a range of services customized for online businesses. These services include custom e-commerce website design, payment gateway integration, secure shopping cart development, SEO optimization for online stores, and ongoing maintenance. Many companies also provide solutions for inventory management and  <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile app development</a> to complement the e-commerce platform.
// `,
//       },
//       {
//         id: 2,
//         title:
//           " Why should I choose a Calicut-based company for my e-commerce web development?",
//         content:
//           "Choosing a Calicut-based e-commerce web development company provides you with the advantage of localized expertise. These companies are well-versed in the regional market trends, business culture, and customer preferences, allowing them to create best solutions that resonate with local and global audiences. Additionally, they offer affordable rates without compromising on quality, making them a cost-effective option for businesses of all sizes.",
//       },
//       {
//         id: 3,
//         title:
//           " How long does it take to develop a custom e-commerce website in Calicut?",
//         content:
//           "The timeline for developing a custom e-commerce website depends on the complexity of your requirements. A basic e-commerce site with standard features could take 5-7 weeks, while more complex platforms with integrations, custom designs, and advanced functionality may take 8-12 weeks or longer. Calicut-based companies generally offer agile development processes to ensure faster project delivery without sacrificing quality.",
//       },
//       {
//         id: 4,
//         title:
//           " What technologies do e-commerce web development companies in Calicut use?",
//         content:
//           "E-commerce web development companies in Calicut use a variety of technologies depending on the specific needs of the project. Popular platforms include WooCommerce for WordPress, Magento, Shopify, and custom solutions using frameworks like Laravel or Node.js. They also use tools like HTML5, CSS3, JavaScript, and modern front-end frameworks like React or Vue.js to ensure that the website is fast, responsive, and user-friendly.",
//       },
//       {
//         id: 5,
//         title: " How does e-commerce web development ensure website security?",
//         content:
//           "Website security is our top priority for e-commerce development. We implement multiple layers of security, such as SSL certificates for encrypted communication, secure payment gateways, and regular software updates. Additionally, companies follow best practices for data protection and PCI-DSS compliance to ensure that customer transactions and data are secure from cyber threats.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     slug: "digital-marketing-agency-in-calicut",
//     title: "Digital Marketing",
//     peopleTitle: "Digital Marketing Team",

//     metaTitle: "Wisbato- Best Digital Marketing Agency In Calicut.",
//     metaDescription:
//       "Select best digital marketing agency in Calicut, . We provide all digital marketing services like SEO, SMM, SEM, in your business, that boost your online presents. Contact now",
//     description:
//       "Build your brand values by letting us promote your products and services through diverse social channels. Connect with a larger audience using the right channels.",
//     image: "images/services/digitalmarketing",
//     // image: "images/services/digitalmarketing.webp",
//     style: {
//       backgroundColor: "#C3DFFF",
//     },
//     width: "35",
//     context: {
//       mainTitle:
//         "Transform <span>your Buisness</span> with Best Digital Marketing Solutions",
//       subTitle: "Why digital marketing is important",
//       content: `Every business needs <a href="https://en.wikipedia.org/wiki/Digital_marketing" target="_blank"> digital marketing</a>  strategies. With more consumers relying on the internet to discover products and services, digital marketing helps businesses reach their target audience where they spend most of their time online. From social media to search engines, digital marketing allows companies to boost visibility, attract potential customers, and engage with their audience in real-time. It also provides valuable data to measure performance, optimize strategies, and increase <a href="https://en.wikipedia.org/wiki/Return_on_investment" target="_blank"> ROI</a>. Without a strong digital marketing strategy, businesses risk falling behind their competitors and missing out on growth opportunities.
// `,
//     },
//     workingProcess: [
//       {
//         title: "Research & Strategy Development",
//         image: "/images/workingProcess/digital marketing/Research Analysis.jpg",
//         alt: "Best digital marketing agency in Calicut",

//         list: [
//           {
//             id: 1,
//             title: "Market Research",
//             content: "Analyze industry trends and competitor strategies.",
//           },
//           {
//             id: 2,
//             title: " Audience Identification",
//             content: "Define target audience demographics and behaviors.",
//           },
//           {
//             id: 3,
//             title: " Goal Setting",
//             content: " Establish clear, measurable objectives for campaigns.",
//           },
//           {
//             id: 4,
//             title: "Content Planning",
//             content: "Develop a roadmap for content creation and promotion.",
//           },
//         ],
//       },
//       {
//         title: "Content Creation & Optimization",
//         image:
//           "/images/workingProcess/digital marketing/Content Creation & Optimization.jpg",
//         alt: "Digital marketing company in Calicut create best content for marketing",
//         list: [
//           {
//             id: 1,
//             title: "SEO Optimization",
//             content: "Ensure all content is optimized for search engines.",
//           },
//           {
//             id: 2,
//             title: "  Engaging Copywriting",
//             content: "Create compelling, audience-focused content.",
//           },
//           {
//             id: 3,
//             title: " Visual Content",
//             content: "  Design attention-grabbing visuals and graphics.",
//           },
//           {
//             id: 4,
//             title: " Multi-Platform Content",
//             content: " Adapt content for social media, blogs, and websites.",
//           },
//         ],
//       },
//       {
//         title: "Campaign Execution & Monitoring",
//         image:
//           "/images/workingProcess/digital marketing/Campaign Execution & Monitoring.jpg",
//         alt: " Execute a good ad campaign",
//         list: [
//           {
//             id: 1,
//             title: " Social Media Management",
//             content: "Launch and manage social media campaigns.",
//           },
//           {
//             id: 2,
//             title: "  PPC & Ads",
//             content:
//               " Set up and manage pay-per-click and online ad campaigns.",
//           },
//           {
//             id: 3,
//             title: " Email Marketing ",
//             content: "   Implement targeted email campaigns to nurture leads.",
//           },
//           {
//             id: 4,
//             title: "  Performance Tracking",
//             content: " Monitor campaign performance with analytics tools.",
//           },
//         ],
//       },
//       {
//         title: "Analysis & Continuous Improvement",
//         image:
//           "/images/workingProcess/digital marketing/Analysis & Continuous Improvement.jpg",
//         list: [
//           {
//             id: 1,
//             title: "  Data Analysis",
//             content: "Review key performance indicators (KPIs) and metrics.",
//           },
//           {
//             id: 2,
//             title: " A/B Testing",
//             content: "  Test variations of campaigns to optimize performance.",
//           },
//           {
//             id: 3,
//             title: " Client Feedback ",
//             content:
//               "   Gather insights from client feedback for improvements.",
//           },
//           {
//             id: 4,
//             title: "  Strategy Refinement",
//             content: "Adjust strategies based on data for better results.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[7],
//     FAQData: [
//       {
//         id: 1,
//         title:
//           "What digital marketing services do you offer for Calicut businesses?",
//         content:
//           "We offer a range of digital marketing services for Calicut business owners, including SEO, social media marketing, pay-per-click (PPC) advertising, content marketing, web development, email marketing, and online reputation management. Our goal is to create customized strategies that fit your business needs and drive real results.",
//       },
//       {
//         id: 2,
//         title: "How can digital marketing help my local business in Calicut?",
//         content:
//           "Digital marketing helps local businesses in Calicut by increasing their online visibility, attracting potential customers, and building a stronger brand presence. Through targeted campaigns, we help you reach your specific audience in the region, improve website traffic, and ultimately drive sales.",
//       },
//       {
//         id: 3,
//         title:
//           "How do you measure the success of a digital marketing campaign?",
//         content:
//           "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, customer engagement, and return on investment (ROI). We provide regular reports so you can see the impact of each campaign on your business growth.",
//       },
//       {
//         id: 4,
//         title: "How long does it take to see results from digital marketing?",
//         content:
//           "The timeline for results varies depending on the service and strategy. SEO typically takes a few months to show significant improvements, while PPC and social media campaigns can drive faster results. We'll work with you to set realistic expectations and provide ongoing optimization to ensure long-term success.",
//       },
//       {
//         id: 5,
//         title: "How much does your digital marketing service cost per month?",
//         content: `Our digital marketing services start at ₹25,000 per month, which includes social media page management, the creation of 15 posters, and 4 to 5 engaging reel videos, along with effective branding strategies. Please note that pricing may vary based on specific client requirements. If you're interested in paid campaigns or additional packages, feel free to  <a href="https://www.wisbato.com/contact" target="_blank">contact us</a> for more details!
// `,
//       },
//     ],
//   },
//   {
//     id: 6,
//     slug: "search-engine-optimization-company-in-calicut",
//     title: "Search Engine Optimization",
//     peopleTitle: "SEO Team",
//     metaTitle: "Wisbato-Leading SEO Company In Calicut, Kerala",
//     metaDescription:
//       "Wisbato is the best SEO agency in Calicut, Do SEO services that will boost your business website's online presence and organic traffic with our expert SEO services in Kerala.",
//     description:
//       "Increase the visibility of your website, by letting them rank in top search engine results with our customized strategic solutions.",
//     image: "",
//     style: {
//       backgroundColor: "#FFE3C2",
//       position: "relative",
//     },
//     width: "65",
//     context: {
//       mainTitle: "We guarantee <span>your placement</span> in high SERPs",
//       subTitle: "Why do businesses need SEO?",
//       content: `<a href="https://en.wikipedia.org/wiki/Search_engine_optimization">Search engine optimization</a>(SEO) is a great tool guiding potential customers through the buying process. This impacts positively on how effective your SEO strategies will be implemented to increase your SERPs visibility as well as traffic on your website, and makes your company a trusted and authoritative voice in your industry. It builds more brand loyalty through credibility in the customer's minds and trust with the customers.`,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Keyword Research",
//         image: "/images/workingProcess/seo/Keyword Research.jpg",
//         alt: "Keyword Research",
//         list: [
//           {
//             id: 1,
//             title: "Creating a picture of goals",
//             content:
//               "As the very first step of SEO, we will create a rough layout of the content that the potential audience is most likely to consume.",
//           },
//           {
//             id: 2,
//             title: "Identification of relevant keywords",
//             content:
//               "After realizing what the audience will be searching for, we will decide on content creation and the keywords that will be targeted.",
//           },
//           {
//             id: 3,
//             title: "Use of Keywords Research tools",
//             content:
//               "To find a comprehensive keyword list, we will make use of keyword research tools such as Ahrefs, SEMrush, or LongTail Pro.",
//           },
//           {
//             id: 4,
//             title: "Categorization of Keywords",
//             content:
//               "Here we will be grouping the list of keywords into primary and secondary keywords. Besides that, we will also be categorizing them based on their position in the marketing funnel.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Competitive Research",
//         image: "/images/workingProcess/seo/Competitive Research.jpg",
//         alt: "Competitive Research",
//         list: [
//           {
//             id: 5,
//             title: "Evaluation of Competitive Search Landscape",
//             content:
//               "Within the niche, we will evaluate the landscape of competitive search.",
//           },
//           {
//             id: 6,
//             title: "Examining Competitor sites",
//             content:
//               "Our team will be monitoring competitor sites that are placed at the top of search engine result pages and comprehending at what point they are excelling.",
//           },
//           {
//             id: 7,
//             title: "Carrying out content gap analysis",
//             content:
//               "We will be exploring the opportunities for keyword targeting that can be capitalized on the required content.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "On-Page Optimization",
//         image: "/images/workingProcess/seo/On-Page Optimization.jpg",
//         git: "On-Page Optimization",

//         list: [
//           {
//             id: 8,
//             title: "Optimization of title tags",
//             content:
//               "With the use of relevant keywords, headings will be optimized, along with the title tags and Meta descriptions.",
//           },
//           {
//             id: 9,
//             title: "Content Creation",
//             content:
//               "We will be delivering high-quality content that is also keyword-rich. We will also be ensuring that user search queries can also be addressed with these contents.",
//           },
//           {
//             id: 10,
//             title: "Enhancing responsiveness",
//             content:
//               "The speed of the website loading will be improved. Besides that, we will be ensuring the mobile-friendliness of the website is enhanced.",
//           },
//           {
//             id: 11,
//             title: "Optimization of URLs",
//             content:
//               "The site architecture, internal linking structure, and URLs will be optimized.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Technical SEO",
//         image: "/images/workingProcess/seo/Technical SEO.jpg",
//         git: "Technical SEO",
//         list: [
//           {
//             id: 12,
//             title: "Fixing of crawl errors",
//             content:
//               "Issues regarding broken links and redirects will be rectified, by fixing the crawl errors.",
//           },
//           {
//             id: 13,
//             title: "Implementation of XML sitemaps",
//             content:
//               "Using XML sitemaps can assist search engines locate and comprehend the website's structure.",
//           },
//           {
//             id: 14,
//             title: "Optimization of robots.txt file",
//             content:
//               "Optimizing the robots.txt file to specify which sites search engines may crawl and index.",
//           },
//           {
//             id: 15,
//             title: "Improving the security",
//             content:
//               "Strengthening website security (HTTPS) and fixing technological difficulties that prevent crawling and indexing.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Off-Page Optimization",
//         image: "/images/workingProcess/seo/Off-Page Optimization.jpg",
//         git: "Off-Page Optimization",
//         list: [
//           {
//             id: 16,
//             title: "Link Building",
//             content:
//               "To increase the quality and quantity of backlink profiles, we will reach out to other websites for link building through guest posting for example. Our team will fix good yet broken links that point to your domain.",
//           },
//           {
//             id: 17,
//             title: "Attracting natural links",
//             content:
//               "As already done, with the use of high-quality and shareable content, natural backlinks will be attracted.",
//           },
//           {
//             id: 18,
//             title: "Participation in online forums",
//             content:
//               "We ensure that we are taking part in relevant online forums and communities.",
//           },
//           {
//             id: 19,
//             title: "Disavowing spammy backlinks",
//             content:
//               "Once monitoring all the backlinks, we will disavow the backlinks that are toxic and spammy.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: "Monitoring and Analysis",
//         image: "/images/workingProcess/seo/Monitoring and Analysis.jpg",
//         git: "Monitoring and Analysis",
//         list: [
//           {
//             id: 20,
//             title: "Tracking of keywords ranking",
//             content:
//               "As a part of monitoring the performance of the website in traffic metrics and search engine rankings, we will be tracking the keywords ranking and organic traffic.",
//           },
//           {
//             id: 21,
//             title: "Using Google Analytics",
//             content:
//               "We will analyze the user behavior on the website with the help of tools such as Google Analytics.",
//           },
//           {
//             id: 22,
//             title: "Monitoring the competitors",
//             content:
//               "The SEO strategies followed by competitors will be monitored and analyzed.",
//           },
//           {
//             id: 23,
//             title: "Setting up data-driven adjustments",
//             content:
//               "Based on performance insights, data-driven adjustments to SEO strategies will be made.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[4],
//     FAQData: [
//       {
//         id: 1,
//         title: "How Can SEO Help My Calicut-Based Business Grow?",
//         content:
//           "  SEO can significantly enhance your business's online visibility, making it easier for local customers in Calicut to find your services or products. By optimizing your website for local search, using targeted keywords, and improving your online presence, SEO can drive more traffic to your site and lead to increased customer engagement, resulting in long-term business growth.",
//       },
//       {
//         id: 2,
//         title: "What SEO Strategies Work Best for Local Businesses in Calicut?",
//         content:
//           " For local businesses in Calicut, focusing on local SEO is crucial. This includes optimizing your Google My Business profile, using location-specific keywords, and encouraging positive customer reviews. Additionally, having a mobile-friendly website and building relevant, high-quality local backlinks can boost your rankings and attract more local customers.",
//       },
//       {
//         id: 3,
//         title: "How Long Does It Take to See Results from SEO in Calicut?",
//         content:
//           "SEO is a long-term investment, and it may take anywhere from 3 to 6 months to start seeing noticeable improvements in rankings, depending on the competition and your specific goals. For businesses in Calicut, focusing on consistent optimization and adapting to local trends will yield sustainable results over time.",
//       },
//       {
//         id: 4,
//         title: " Why Is Mobile Optimization Important for SEO in Calicut?",
//         content:
//           " Mobile optimization is crucial for businesses in Calicut because most local customers use smartphones to search for products and services. A mobile-friendly website not only improves user experience but also ranks higher on Google, especially since Google uses mobile-first indexing. This ensures your business reaches a larger audience and boosts local SEO performance.",
//       },
//     ],
//   },
//   {
//     id: 7,
//     slug: "mobile-app-development",
//     title: "Mobile App Development",
//     peopleTitle: "Mobile App Development Team",
//     metaTitle: "Mobile App Development Company in Calicut | Develop Now",
//     metaDescription:
//       "Wisbato provides the best mobile app for your business in Calicut, that can help your business growth & online presents all over the world. We are creating Unique android, ios, flutter apps in Calicut.",
//     description:
//       "Our mobile app services will make your business bigger as we provide bespoke web solutions to each of our clients.",
//     image: "",
//     style: {
//       backgroundColor: "#F6C4FE",
//       position: "relative",
//     },
//     width: "45",
//     context: {
//       mainTitle:
//         "Revolutionise <span>your Buisness</span> with our Mobile apps and its innovative design and technology",
//       subTitle: "Why do businesses need mobile apps?",
//       content: `<span>When <a href="https://en.wikipedia.org/wiki/Mobile_app" target="_blank" >mobile apps</a> are designed and released for businesses, a competitive advantage will be gained as they move ahead in the competition. Such apps can be effective in increasing productivity. Furthermore, developing a mobile application lets the customers make inquiries and carry out activities from anywhere. Such things can be advantageous for both users and businesses. Most notably, the portability factor is further enhanced with mobile application development, as it supports the portability of information and tools.</span>`,
//     },
//     workingProcess: [
//       {
//         title: "Strategy Development",
//         image:
//           "/images/workingProcess/mobile_app_dev/Strategy Development- app development company.jpg",
//         alt: "app development company in calicut",
//         list: [
//           {
//             id: 1,
//             title: "Determination of objectives",
//             content:
//               "As the first stage of mobile app development, we will be identifying the objectives of the application such as who should be the target users, the results that should be fulfilled and the purpose of the application.",
//           },
//           {
//             id: 2,
//             title: "Examining the competitors",
//             content:
//               "Here, we will be closely studying the competitors of the application and with this step. We will be able to avert any errors that may have taken place in the sector.",
//           },
//           {
//             id: 3,
//             title: "Selection of platform",
//             content:
//               "The development team of our firm will now come to a decision on which platform we will be building the tool. It could be an iOS app, a custom Android app or even a cross-platform application",
//           },
//           {
//             id: 4,
//             title: "Settling on the monetization method",
//             content:
//               "This step will only apply to those providing a consumer application. Through in-app purchases or affiliate marketing, money could be earned by the client from their investments.",
//           },
//         ],
//       },
//       {
//         title: "Analysis and Planning",
//         image:
//           "/images/workingProcess/mobile_app_dev/mobile app Analysis and Planning.jpg",
//         alt: "mobile app Analysis and Planning",
//         list: [
//           {
//             id: 1,
//             title: "Pinpointing the functional requirement of the app",
//             content:
//               "Here, we will comprehend the functions that your mobile app will be performing.",
//           },
//           {
//             id: 2,
//             title: "Spotting Non-functional requirement",
//             content:
//               "The non-functional needs of software will be considered in this stage. These requirements refer to the quality of the performance of the system and will have a significant influence on the user experience.",
//           },
//           {
//             id: 3,
//             title: "Product roadmap creation",
//             content:
//               "A comprehensive plan will be executed in this roadmap about the ways through which the objective of the apps will be fulfilled. We make a list of the features that the app is capable of prioritising the top priority function and decide which add-on could be introduced later.",
//           },
//           {
//             id: 4,
//             title: "Identifying skills required",
//             content:
//               "Before moving on with the project, we will be ensuring that we have decided on the technology stack aspect of the app project",
//           },
//         ],
//       },
//       {
//         title: "UI/ UX Design",
//         image:
//           "/images/workingProcess/mobile_app_dev/UX Design-mobile app development company.jpg",
//         alt: "UX Design-mobile app development company",
//         list: [
//           {
//             id: 1,
//             title: "Establishment of Information Architecture",
//             content:
//               "As the very first step of the app design process, we will establish rules about the information architecture of information. Workflow diagrams will be developed that aid in tracking user interactions.",
//           },
//           {
//             id: 2,
//             title: "Creation of wireframes",
//             content:
//               "Digital sketches called wireframes will be created, that focus on the user experience and app aesthetics. It is done to make sure the completed application is simple and easy to use.",
//           },
//           {
//             id: 3,
//             title: "Formation of style guides",
//             content:
//               "With the creation of style guides, the consistency within the app is maintained. It could be about the colour schemes, buttons, fonts, widgets, spacing and positioning instructions.",
//           },
//           {
//             id: 4,
//             title: "Mock-ups and development of prototypes",
//             content:
//               "Now that the style guide is developed, the final representation of the graphics of the apps will be done. Application of style guide to wireframes is implemented. Then we will verify that the design is consistent through the app. In the final stage of designing, a prototype is created and the identification of flaws, if any, could be done.1",
//           },
//         ],
//       },
//       {
//         title: "Application Testing",
//         image:
//           "/images/workingProcess/mobile_app_dev/mobile Application Testing.jpg",
//         alt: "mobile app development company in calicut",
//         list: [
//           {
//             id: 1,
//             title: "Checking the functionality",
//             content:
//               "The features of the applications and it is ensured that everything works well.",
//           },
//           {
//             id: 2,
//             title: "Testing the performance of the app",
//             content:
//               "The responsiveness of the app will be tested and how the increase in concurrency users also be checked.",
//           },
//           {
//             id: 3,
//             title: "Security of the app",
//             content:
//               "We will be ensuring that the app can satisfy the security standards, before moving on to the next level.",
//           },
//         ],
//       },
//       {
//         title: "Deployment",
//         image:
//           "/images/workingProcess/mobile_app_dev/mobile app deployment.jpg",
//         alt: "mobile app deployment",
//         list: [
//           {
//             id: 1,
//             title: "Release to app stores",
//             content:
//               "Now that the testing of the app is concluded, it will now be prepared for release to respective app stores. If it is an Android app, then it will be released in Google Play Store and Apple App Store for iOS apps.",
//           },
//           {
//             id: 2,
//             title: "Filling out the forms",
//             content:
//               "For submitting the app for further review, these stores will be expecting us to fill out many forms.",
//           },
//           {
//             id: 3,
//             title: "Adhering to the guidelines of platforms",
//             content:
//               "For the submission of each platform, our developers need to adhere to each of their guidelines and requirements.",
//           },
//           {
//             id: 4,
//             title: "Launch of the app",
//             content:
//               "Now the app is made available for the users to officially download. It will be further promoted by varied social media promotion or press releases, app store optimization (ASO) and so on.",
//           },
//         ],
//       },
//       {
//         title: "Monitoring of the performance",
//         image:
//           "/images/workingProcess/mobile_app_dev/mobile app Monitoring of the performance.jpg",
//         alt: "best mobile app development company in calicut",
//         list: [
//           {
//             id: 1,
//             title: "Keeping track of the performance",
//             content:
//               "Even after the submission of the app, we will keep track of bugs, customer requests and overall app performance.",
//           },
//           {
//             id: 2,
//             title: "Gathering feedback from the users",
//             content:
//               "Our developers will be collecting user feedback and releasing updates.",
//           },
//           {
//             id: 3,
//             title: "Doing continuous maintenance",
//             content:
//               "To keep up with the recent OS changes, performance standards and review guidelines, the mobile apps will be regularly maintained.",
//           },
//           {
//             id: 4,
//             title: "Further Monitoring",
//             content:
//               "New features will be introduced or enhancement of the existing ones will be done to ensure that the app is running seamlessly and retaining the interest of the user.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[3],
//     FAQData: [
//       {
//         id: 1,
//         title: "Is it mandatory for businesses to have a mobile app?",
//         content:
//           "Having a mobile application may aid you to attract new consumers, while also retaining the older ones by promoting new products and services, impressive deals, loyalty programmes and others. A real-time space for communication with your consumers could be created with such mobile applications.",
//       },
//       {
//         id: 2,
//         title: "How do mobile applications vary from mobile apps? ",
//         content:
//           "Mobile websites have restrictions in terms of what can be produced with web technologies and how they display in a browser. Mobile applications, on the other hand, may leverage native device capabilities like push notifications and GPS to provide a more immersive and personalised experience.",
//       },
//       {
//         id: 3,
//         title: "Is a mobile application better than a website?",
//         content:
//           "Yes, a better user experience could be availed through mobile apps much more easily than loading an entire website. It is so because mobile apps are already downloaded on devices and it does not have to be loaded every time from servers.",
//       },
//       {
//         id: 4,
//         title: "How much does it cost to develop a mobile app?",
//         content:
//           "The cost of developing a mobile app varies widely based on its complexity and features. Prices start at ₹50,000 for basic apps and can go up to ₹5,00,000 for apps with advanced features. The final cost depends on the specific requirements and functionalities you need for your app",
//       },
//       {
//         id: 5,
//         title: "What are the steps involved in mobile app development?",
//         content: `The mobile app development process involves several key steps. First, strategy-planning-choose the app development platform-design and development-testing-App store optimization-deployed and launched to users. Finally, ongoing maintenance is essential to address any issues and update the app as needed. Check full detailed <a href="https://www.wisbato.com/blogs/mobile-app-development-process-in-india-wisbato" target="_blank" >app development process</a>`,
//       },
//     ],
//   },
//   {
//     id: 8,
//     slug: "it-support-in-calicut",
//     title: "IT Support",
//     peopleTitle: "IT Support Team",
//     metaTitle: "Wisbato NO1 IT Company In Calicut, Kerala",
//     metaDescription:
//       "We are the leading IT company in Calicut, Provide all types of IT services and IT support on your business",
//     description:
//       "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
//     image: "/images/about3.jpg",
//     style: {
//       backgroundColor: "#F7D2DB",
//     },
//     width: "55",
//     context: {
//       mainTitle:
//         "Your one-stop answer for all of <span>your technical</span> concerns",
//       subTitle: "What is IT Support and how are they crucial?",
//       content: `IT support is the approach to manage and solve technical problems. It ensures the system runs in an efficient and secure manner. It is crucial for businesses because it offers to reduce downtime while increasing efficiency of productivity and secures data against the dangers of losing it. Wisbato's IT support team offers a comprehensive range of services, from fixing issues activities through to system maintenance in operations, ensuring your business thrives worry-free of any technical issues in its way. Trust Wisbato and get your business secure, streamlined, and focused on growth minus all the <a href="https://en.wikipedia.org/wiki/Technical_support" target="_blank">technical support</a>.`,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title: "Issue Identification & Categorization",
//         image:
//           "/images/workingProcess/IT support/Issue Identification & Categorization.jpg",
//         alt: " IT support in calicut",
//         list: [
//           {
//             id: 1,
//             title: "Communication with the IT support team",
//             content:
//               "Through mediums such as phone, email, in-person, or ticketing system, users will be communicating with IT support.",
//           },
//           {
//             id: 2,
//             title: "Gathering of information",
//             content:
//               "Here, required data-reported issues such as error messages and troubleshooting steps will be collected by our support team.",
//           },
//           {
//             id: 3,
//             title: "Analysis of the issue",
//             content:
//               "To assess the severity of the reported issue and its impact on business operations, the IT support team will be analyzing them.",
//           },
//           {
//             id: 4,
//             title: "Categorization of the issue",
//             content:
//               "The issues will be classified according to the nature of the reported issue such as software, hard or network and urgency.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Diagnosis and Troubleshooting",
//         image:
//           "/images/workingProcess/IT support/Diagnosis and Troubleshooting.jpg",
//         alt: "IT support for calicut business owners",
//         list: [
//           {
//             id: 5,
//             title: "Identification of the cause of the issue",
//             content:
//               "The root cause of the issue will be identified through diagnostic tools and knowledge bases by support technicians.",
//           },
//           {
//             id: 6,
//             title: "Troubleshooting",
//             content:
//               "The support team of our firm will perform troubleshooting procedures to isolate and solve the problem. It could be software configuration changes, hardware inspection, or network analysis.",
//           },
//           {
//             id: 7,
//             title: "Resolution of the issue",
//             content:
//               "Now that the root cause is identified, to resolve the issue, the experts of our team will execute adequate fixes or workarounds.",
//           },
//           {
//             id: 8,
//             title: "Workaround implementation",
//             content:
//               "The process of resolution comprises reinstalling drivers, replacing faulty hardware components, applying software patches, or resetting configurations.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Further communication",
//         image: "/images/workingProcess/IT support/Further communication.jpg",
//         alt: "further communication for IT support",
//         list: [
//           {
//             id: 9,
//             title: "Informing about the progress",
//             content:
//               "Our support staff will communicate with customers often during the resolution process to provide information on progress and timelines.",
//           },
//           {
//             id: 10,
//             title: "Documentation of steps taken",
//             content:
//               "A record of the process implemented and solutions applied will be kept by the team for future reference and knowledge sharing.",
//           },
//           {
//             id: 11,
//             title: "Verification",
//             content:
//               "The support team will verify the issue that has been resolved after the implementation of the solution.",
//           },
//           {
//             id: 12,
//             title: "Testing",
//             content:
//               "Tests will be conducted to make sure that the service or the system is functioning properly after the resolution of the issue. To ensure that other functionalities are not impacted, we will be executing user acceptance testing (UAT) or regression testing.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Closure and Follow-up",
//         image: "/images/workingProcess/IT support/Closure and Follow-up.jpg",
//         alt: " follow up for works",
//         list: [
//           {
//             id: 13,
//             title: "Concluding the issue",
//             content:
//               "We will be informing our clients, once the issue is resolved and verified and the support ticket is closed.",
//           },
//           {
//             id: 14,
//             title: "Gathering feedbacks",
//             content:
//               "Feedback will be gathered about the support experience. Moreover, to ensure that the issue has not recurred, our team will be following up with you.",
//           },
//           {
//             id: 15,
//             title: "Further improvement",
//             content:
//               "To identify areas of further improvement, trends, and recurring issues, our team will be reviewing incident data and collecting feedback regularly.",
//           },
//           {
//             id: 16,
//             title: "Taking precautions",
//             content:
//               "As a step to handle future incidents, our support team will update knowledge bases, training materials, and documentation to improve the efficiency and effectiveness of the team.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[2],
//     FAQData: [
//       {
//         id: 1,
//         title:
//           " What types of IT support services do you offer for businesses in Calicut?        ",
//         content:
//           "We offer a wide range of IT and technical support services to businesses in Calicut, including network setup and management, hardware and software troubleshooting, cybersecurity solutions, data backup and recovery, technical support and IT consultancy services. Our team ensures that your business runs smoothly with minimal technical disruptions.",
//       },
//       {
//         id: 2,
//         title: "Do you provide remote IT support for businesses in Calicut?",
//         content:
//           "Yes, we provide both remote and on-site IT support to businesses in Calicut. Our remote services are designed to resolve most issues quickly without needing to visit your location, saving you time and ensuring that your systems are up and running as soon as possible.",
//       },
//       {
//         id: 3,
//         title: "How quickly can you respond to IT emergencies in Calicut?",
//         content:
//           "Our IT support team is available 24/7 to assist with emergencies. For businesses in Calicut, we aim to respond to critical issues within a few hours, whether remotely or in person, depending on the nature of the problem.",
//       },
//       {
//         id: 4,
//         title:
//           " Is your IT support service affordable for small businesses in Calicut?",
//         content:
//           "Absolutely! We offer flexible and affordable IT support plans specifically designed for small businesses in Calicut. Whether you need occasional assistance or ongoing support, we have cost-effective solutions that fit your budget without compromising on quality.",
//       },
//     ],
//   },
//   {
//     id: 9,
//     slug: "software-development-in-calicut",
//     title: "Software Development",
//     peopleTitle: "Software Development Team",
//     metaTitle: " Best software development company in Calicut.",
//     metaDescription:
//       "Develop a custom software for your business with affordable price with leading software development company in Calicut- Contact now",
//     description:
//       "We offer rapid and efficient technical support for your business and enjoy increased productivity at affordable prices. Empower your business with the right IT support.",
//     image: "/images/about3.jpg",
//     style: {
//       backgroundColor: "#F7D2DB",
//     },
//     width: "55",
//     context: {
//       mainTitle:
//         "Simplify Your Business with <span>Customized Software</span> Solutions",
//       subTitle: "WHY BUSINESS NEED A CUSTOMIZED SOFTWARE.",
//       content: `<a href="https://en.wikipedia.org/wiki/Software_development" target="_blank">Software development</a> is key to business success because it helps companies streamline operations, reduce time, enhance customer experiences, and Be competitive in the online marketplace .Custom software solutions allow businesses to automate processes, improve efficiency, and offer custom services to their clients. For businesses in Kerala, partnering with a reliable software development company in Calicut ensures access to new technology and expert guidance, helping them grow and innovate effectively.
// `,
//     },
//     workingProcess: [
//       {
//         id: 1,
//         title:
//           "Customized Software Solutions to Simplify Your Business and Drive To Success.",
//         image:
//           "/images/workingProcess/software/Requirement Gathering and Analysis.jpg",
//         alt: "software company in Calicut",
//         list: [
//           {
//             id: 1,
//             title: "Understanding Business Needs",
//             content:
//               "Before starting any project, the development team works closely with stakeholders to understand the business goals and specific software needs.",
//           },
//           {
//             id: 2,
//             title: "Identifying Target Users",
//             content:
//               "Defining who the end-users will be helps shape the features and usability of the software.",
//           },
//           {
//             id: 3,
//             title: "Technical Feasibility Study",
//             content:
//               "A technical assessment is conducted to determine whether the proposed solution is achievable within the constraints of technology and resources.",
//           },
//           {
//             id: 4,
//             title: "Documenting Requirements",
//             content:
//               "All the gathered requirements are documented in a detailed specification document that guides the rest of the development process.",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Project Planning and Management",
//         image:
//           "/images/workingProcess/software/Project Planning and Management.jpg",
//         alt: " software project planning and manage",
//         list: [
//           {
//             id: 5,
//             title: "Defining Project Scope",
//             content:
//               "The project scope outlines the software’s features, goals, and deliverables, ensuring everyone understands what is expected.",
//           },
//           {
//             id: 6,
//             title: "Timeline and Milestone Setup",
//             content:
//               "Setting clear deadlines and milestones helps keep the project on track and ensures that key goals are met at each stage of development.",
//           },
//           {
//             id: 7,
//             title: "Resource Allocation",
//             content:
//               "Assigning the right team members and tools to different aspects of the project ensures efficient use of resources and skills.",
//           },
//           {
//             id: 8,
//             title: "Risk Management",
//             content:
//               "Identifying potential risks early on allows the team to mitigate issues that may impact the project’s timeline or quality.",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "System Design",
//         image: "/images/workingProcess/software/system design.jpg",
//         alt: "design your software project ",
//         list: [
//           {
//             id: 9,
//             title: "High-Level System Architecture",
//             content:
//               "The team designs a blueprint for the software, outlining the structure and interaction between components.",
//           },
//           {
//             id: 10,
//             title: " Database Design",
//             content:
//               "Database architects define how the software will store, retrieve, and manage data.",
//           },
//           {
//             id: 11,
//             title: " User Interface (UI) Design",
//             content:
//               "Designers create user-friendly interfaces that ensure smooth user interaction with the system.",
//           },
//           {
//             id: 12,
//             title: " Technology Stack Selection",
//             content:
//               "Choosing the right programming languages, frameworks, and tools for building the software is critical at this stage.",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: " Implementation (Coding)",
//         image: "/images/workingProcess/software/Implementation.jpg",
//         alt: "best software development company in Calicut",
//         list: [
//           {
//             id: 13,
//             title: " Modular Coding",
//             content:
//               "The project is divided into smaller, manageable modules that are developed independently.",
//           },
//           {
//             id: 14,
//             title: "Following Best Practices",
//             content:
//               "Developers adhere to coding standards and industry best practices to ensure clean, maintainable code.",
//           },
//           {
//             id: 15,
//             title: "Regular Code Reviews",
//             content:
//               "Senior developers or team leads review the code to identify any issues or improvements.",
//           },
//           {
//             id: 16,
//             title: " Version Control",
//             content:
//               "Version control systems like Git are used to track changes, manage collaboration, and avoid code conflicts.",
//           },
//         ],
//       },
//       {
//         id: 5,
//         title: "Testing and Quality Assurance (QA)",
//         image:
//           "/images/workingProcess/software/Testing and Quality Assurance.jpg",
//         alt: "software developers in Calicut test your quality and mistakes",

//         list: [
//           {
//             id: 13,
//             title: "  Unit Testing",
//             content:
//               "Each module is tested individually to ensure that it functions as expected.",
//           },
//           {
//             id: 14,
//             title: " Integration Testing",
//             content:
//               "The team checks how different modules work together to detect any issues with integration.",
//           },
//           {
//             id: 15,
//             title: "Performance Testing",
//             content:
//               "Testing the software for speed, scalability, and responsiveness under different loads.",
//           },
//           {
//             id: 16,
//             title: "  Bug Fixing and Optimization",
//             content:
//               "Any bugs discovered during testing are fixed, and the software is optimized for better performance.",
//           },
//         ],
//       },
//       {
//         id: 6,
//         title: " Deployment and Maintenance",
//         image:
//           "/images/workingProcess/software/Deployment and Maintenance (2).jpg",
//         alt: "software Deployment and Maintenance",
//         list: [
//           {
//             id: 13,
//             title: "  Deployment to Live Environment",
//             content:
//               "Once the software is thoroughly tested, it is deployed to the production environment for real-world use.",
//           },
//           {
//             id: 14,
//             title: "User Training and Documentation",
//             content:
//               "End-users are trained on how to use the software, and comprehensive documentation is provided.",
//           },
//           {
//             id: 15,
//             title: "Monitoring and Feedback",
//             content:
//               "The software is monitored for any performance issues or bugs, and user feedback is collected for further improvement.",
//           },
//           {
//             id: 16,
//             title: "Ongoing Maintenance and Updates",
//             content:
//               "Regular updates and patches are released to fix issues and add new features, ensuring the software stays up-to-date and secure.",
//           },
//         ],
//       },
//     ],
//     outcomes: outcomes[6],
//     FAQData: [
//       {
//         id: 1,
//         title:
//           "What types of software solutions do you offer for businesses in Calicut?     ",
//         content: ` We offer all types of software solutions custom to meet the unique needs of businesses in Calicut. Our services include custom software development, <a href="https://www.wisbato.com/services/mobile-app-development" target="_blank">mobile applications</a>,<a href="https://www.wisbato.com/services/web-development-company-in-calicut" target="_blank">web applications</a>, cloud computing, system integration, and more. Whether you're a small startup or a large enterprise, we can create solutions that enhance your operations and drive growth.
// `,
//       },
//       {
//         id: 2,
//         title:
//           " How long does the software development process typically take?",
//         content:
//           "The duration of the software development process varies based on the complexity and scope of the project. Generally, smaller projects may take a few weeks, while larger, more complex systems can take several months. We prioritize thorough planning and communication, so we'll provide you with a detailed timeline during the initial consultation to ensure you know what to expect.",
//       },
//       {
//         id: 3,
//         title:
//           "How do you ensure the software meets our specific business needs?",
//         content:
//           " We follow a comprehensive approach to understand your business requirements fully. This includes initial consultations, requirement analysis, and ongoing feedback throughout the development process. Our goal is to create a solution that aligns perfectly with your objectives, and we encourage collaboration to ensure we meet your expectations at every stage.",
//       },
//       {
//         id: 4,
//         title: " What support do you provide after the software is deployed?",
//         content:
//           " Our commitment to your success doesn’t end with deployment. We offer ongoing support and maintenance services to ensure your software runs smoothly. This includes troubleshooting, updates, and enhancements as needed, so you can focus on your core business activities while we take care of the technical aspects.",
//       },
//       {
//         id: 5,
//         title:
//           " How do I know if custom software is the right choice for my business?",
//         content:
//           " Custom software is an excellent choice if your business has specific needs that off-the-shelf solutions cannot meet. It allows for tailored functionality, better integration with existing systems, and scalability as your business grows. If you’re unsure, we offer consultations to discuss your unique challenges and how custom software can address them effectively. This way, you can make an informed decision that aligns with your business goals.",
//       },
//     ],
//   },
// ];

// export type ServicePlatformData = {
//   id: number;
//   icon: string;
//   title?: string;
// };

// export const servicePlatformData: ServicePlatformData[] = [
//   {
//     id: 1,
//     icon: `<svg width="32" height="32" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M44.375 1.3125V44.875L29 37.1875L13.625 44.875V1.3125M44.375 1.3125H49.5C51.5389 1.3125 53.4942 2.1224 54.9359 3.5641C56.3776 5.0058 57.1875 6.9611 57.1875 9V50C57.1875 52.0389 56.3776 53.9942 54.9359 55.4359C53.4942 56.8776 51.5389 57.6875 49.5 57.6875H8.5C6.4611 57.6875 4.5058 56.8776 3.0641 55.4359C1.6224 53.9942 0.8125 52.0389 0.8125 50V9C0.8125 6.9611 1.6224 5.0058 3.0641 3.5641C4.5058 2.1224 6.4611 1.3125 8.5 1.3125H13.625M44.375 1.3125H13.625" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "booking",
//   },
//   {
//     id: 2,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
//   <path d="M34.5628 0.852603V2.7933C34.5628 3.9344 35.0678 5.0141 35.9458 5.7452L39.5948 8.7861C41.1048 10.0468 41.4228 12.2369 40.3328 13.8769L38.5908 16.4941C37.6418 17.9161 36.2458 18.9813 34.6238 19.5213L34.1348 19.6852C33.5838 19.8696 33.0828 20.1785 32.6698 20.588C32.2578 20.9976 31.9448 21.4967 31.7568 22.0466C31.5678 22.5966 31.5088 23.1825 31.5838 23.759C31.6588 24.3355 31.8658 24.8869 32.1878 25.3706C33.4488 27.2668 32.7648 29.8362 30.7288 30.8543L21.7498 35.3438L23.1948 38.9621C23.4868 39.697 23.5018 40.5126 23.2378 41.2578C22.9738 42.0029 22.4478 42.6269 21.7588 43.0141C21.0698 43.4013 20.2628 43.5254 19.4888 43.3633C18.7158 43.2012 18.0268 42.764 17.5508 42.1328L15.2308 39.0373C14.8378 38.5133 14.3168 38.0985 13.7188 37.8323C13.1198 37.5661 12.4638 37.4572 11.8108 37.5161C11.1588 37.575 10.5318 37.7996 9.99079 38.1687C9.44979 38.5378 9.01179 39.039 8.71879 39.6249L6.37479 44.3126L4.28379 44.8353M34.5628 0.852603C29.1608 0.399303 23.7358 1.3854 18.8358 3.7043C13.9368 6.0232 9.73679 9.5961 6.66279 14.0608C3.58979 18.5256 1.75079 23.7235 1.33279 29.1279C0.914786 34.5323 1.93279 39.9512 4.28379 44.8353M34.5628 0.852603C39.9188 1.2993 45.0638 3.1456 49.4868 6.2009C53.9088 9.2562 57.4518 13.4172 59.7648 18.2692C62.0778 23.1211 63.0778 28.4944 62.6668 33.8535C62.2548 39.2126 60.4458 44.3703 57.4198 48.8123L56.8148 47.0049C56.3048 45.4743 55.3248 44.1431 54.0158 43.2C52.7068 42.2569 51.1338 41.7496 49.5208 41.7501H47.3748L46.2678 40.6431C45.7118 40.0861 45.0308 39.6693 44.2828 39.4271C43.5338 39.1848 42.7378 39.1241 41.9608 39.25C41.1838 39.3758 40.4478 39.6845 39.8138 40.1507C39.1798 40.6169 38.6658 41.2272 38.3138 41.9312L38.1908 42.1806C37.8558 42.8524 37.3838 43.4472 36.8058 43.9271C36.2288 44.4071 35.5578 44.7617 34.8358 44.9686L31.4528 45.9321C29.5738 46.4685 28.3988 48.3306 28.7198 50.261L28.9688 51.7575C29.2428 53.377 30.6438 54.5626 32.2838 54.5626C35.1738 54.5626 37.7428 56.4144 38.6558 59.158L39.3898 61.3549M4.28379 44.8353C7.34679 51.2033 12.5088 56.3222 18.9028 59.3308C25.2968 62.3394 32.5308 63.0542 39.3898 61.3549M39.3898 61.3549C46.7358 59.5326 53.1528 55.0688 57.4168 48.8158M44.8128 21.2501C44.8128 24.3114 43.4698 27.0584 41.3408 28.9376" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Real estate",
//   },
//   {
//     id: 3,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
//   <path d="M32 62.25V34.0625M44.813 62.25V34.0625M19.188 62.25V34.0625M1.25 21.25L32 0.75L62.75 21.25M57.625 62.25V25.801C49.148 24.4738 40.58 23.809 32 23.8125C23.284 23.8125 14.725 24.4958 6.375 25.801V62.25M1.25 62.25H62.75M32 13.5625H32.027V13.5898H32V13.5625Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "E-learning",
//   },
//   {
//     id: 4,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="69" height="63" viewBox="0 0 69 63" fill="none">
//   <path d="M1.6875 0.75H6.42249C8.16449 0.75 9.68554 1.9219 10.1365 3.6029L11.4455 8.5127M11.4455 8.5127C30.4785 7.9793 49.4925 10.0951 67.9435 14.7993C65.1275 23.1838 61.7825 31.3292 57.9525 39.1875H19.6245M11.4455 8.5127L19.6245 39.1875M19.6245 39.1875C16.9065 39.1875 14.2985 40.2674 12.3765 42.1897C10.4545 44.1119 9.37451 46.719 9.37451 49.4375H63.1875M14.4995 59.6875C14.4995 60.3671 14.2295 61.0189 13.7485 61.4995C13.2685 61.98 12.6165 62.25 11.9375 62.25C11.2575 62.25 10.6055 61.98 10.1255 61.4995C9.64449 61.0189 9.37451 60.3671 9.37451 59.6875C9.37451 59.0079 9.64449 58.3561 10.1255 57.8755C10.6055 57.395 11.2575 57.125 11.9375 57.125C12.6165 57.125 13.2685 57.395 13.7485 57.8755C14.2295 58.3561 14.4995 59.0079 14.4995 59.6875ZM58.0625 59.6875C58.0625 60.3671 57.7925 61.0189 57.3115 61.4995C56.8305 61.98 56.1795 62.25 55.4995 62.25C54.8195 62.25 54.1685 61.98 53.6875 61.4995C53.2065 61.0189 52.9375 60.3671 52.9375 59.6875C52.9375 59.0079 53.2065 58.3561 53.6875 57.8755C54.1685 57.395 54.8195 57.125 55.4995 57.125C56.1795 57.125 56.8305 57.395 57.3115 57.8755C57.7925 58.3561 58.0625 59.0079 58.0625 59.6875Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Shopping",
//   },
//   {
//     id: 5,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="65" viewBox="0 0 60 65" fill="none">
//   <path d="M34.2199 2.62705C34.7739 3.18435 35.2119 3.84555 35.5099 4.57275C35.8089 5.29985 35.9599 6.07865 35.9569 6.86445V25.2728L56.1709 33.9561C56.3929 34.0436 56.5919 34.1792 56.7539 34.3535C56.9159 34.5277 57.0369 34.736 57.1089 34.9632L58.8799 40.2428C58.9739 40.5352 58.9889 40.8479 58.9229 41.1482C58.8569 41.4485 58.7119 41.7256 58.5039 41.9518C58.2959 42.178 58.0309 42.3447 57.7369 42.4349C57.4429 42.5251 57.1299 42.5357 56.8309 42.4656L35.9909 37.2211L34.9839 55.1432L38.9779 58.13V64.1041C33.9939 62.7852 29.9819 61.6851 29.9819 61.6851C29.9819 61.6851 26.3159 62.693 21.0219 64.1041V58.13L25.0159 55.1432L24.0079 37.2211L3.16889 42.4656C2.86889 42.5357 2.55689 42.5251 2.26289 42.4349C1.96889 42.3447 1.70386 42.178 1.49586 41.9518C1.28786 41.7256 1.14291 41.4485 1.07691 41.1482C1.01091 40.8479 1.02488 40.5352 1.11988 40.2428L2.89088 34.9632C2.96188 34.736 3.08386 34.5277 3.24586 34.3535C3.40786 34.1792 3.60687 34.0436 3.82887 33.9561L24.0429 25.2728V6.86445C24.0399 6.07865 24.1919 5.29985 24.4899 4.57275C24.7869 3.84555 25.2259 3.18435 25.7799 2.62705C26.9039 1.51765 28.4199 0.895752 29.9999 0.895752C31.5789 0.895752 33.0949 1.51765 34.2199 2.62705Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Travel",
//   },
//   {
//     id: 6,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
//   <path d="M32 11V52M21.75 42.3718L24.753 44.6234C28.754 47.6267 35.242 47.6267 39.247 44.6234C43.251 41.6202 43.251 36.7548 39.247 33.7516C37.248 32.2483 34.624 31.5 32 31.5C29.523 31.5 27.046 30.7483 25.156 29.2484C21.378 26.2452 21.378 21.3798 25.156 18.3766C28.935 15.3733 35.065 15.3733 38.844 18.3766L40.262 19.5041M62.75 31.5C62.75 35.5381 61.955 39.5368 60.409 43.2675C58.864 46.9983 56.599 50.3881 53.744 53.2435C50.888 56.0989 47.498 58.364 43.768 59.9093C40.037 61.4546 36.038 62.25 32 62.25C27.962 62.25 23.963 61.4546 20.232 59.9093C16.502 58.364 13.112 56.0989 10.256 53.2435C7.40098 50.3881 5.136 46.9983 3.591 43.2675C2.045 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.48998 15.5232 10.256 9.7565C16.023 3.9897 23.845 0.75 32 0.75C40.155 0.75 47.977 3.9897 53.744 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Trading",
//   },
//   {
//     id: 7,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
//   <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Hospital",
//   },
//   {
//     id: 8,
//     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
//   <path d="M32 11V52M21.75 42.3718L24.75 44.6234C28.75 47.6267 35.24 47.6267 39.25 44.6234C43.25 41.6202 43.25 36.7548 39.25 33.7516C37.25 32.2483 34.62 31.5 32 31.5C29.52 31.5 27.05 30.7483 25.16 29.2484C21.38 26.2452 21.38 21.3798 25.16 18.3766C28.94 15.3733 35.06 15.3733 38.84 18.3766L40.26 19.5041M62.75 31.5C62.75 35.5381 61.95 39.5368 60.41 43.2675C58.86 46.9983 56.6 50.3881 53.74 53.2435C50.89 56.0989 47.5 58.364 43.77 59.9093C40.04 61.4546 36.04 62.25 32 62.25C27.96 62.25 23.96 61.4546 20.23 59.9093C16.5 58.364 13.11 56.0989 10.26 53.2435C7.40001 50.3881 5.13997 46.9983 3.58997 43.2675C2.04997 39.5368 1.25 35.5381 1.25 31.5C1.25 23.3446 4.49001 15.5232 10.26 9.7565C16.02 3.9897 23.84 0.75 32 0.75C40.16 0.75 47.98 3.9897 53.74 9.7565C59.51 15.5232 62.75 23.3446 62.75 31.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// `,
//     title: "Entertainment",
//   },
// ];
