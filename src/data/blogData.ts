interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  category: string;
  readTime: string;
  content: {
    introduction: string;
    mainContent: string[];
    keyTakeaways: string[];
    conclusion: string;
    relatedLinks?: {
      title: string;
      url: string;
    }[];
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Choose the Right University for Your Study Abroad Journey',
    excerpt: 'Discover the key factors to consider when selecting your dream university abroad...',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    author: {
      name: 'Dr. Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop',
      role: 'Education Consultant'
    },
    date: 'Dec 20, 2023',
    category: 'University Guide',
    readTime: '5 min read',
    content: {
      introduction: `Choosing the right university for your study abroad journey is one of the most crucial decisions you'll make in your academic career. This comprehensive guide will walk you through the essential factors to consider and help you make an informed choice.`,
      mainContent: [
        `Research is the foundation of making the right choice. Start by creating a list of potential universities that offer your desired program. Consider factors such as program curriculum, faculty expertise, and research opportunities.`,
        `Location plays a vital role in your study abroad experience. Consider the country's culture, climate, cost of living, and job opportunities. Some countries offer post-study work visas, which could be beneficial for your career prospects.`,
        `Financial planning is crucial. Look into tuition fees, living expenses, and available scholarships. Many universities offer financial aid for international students, so research these opportunities early in your application process.`,
        `University rankings and accreditation are important, but they shouldn't be your only criteria. Look into the specific strengths of each university in your field of study. Some lesser-known universities might have excellent programs in your area of interest.`
      ],
      keyTakeaways: [
        'Consider program curriculum and specialization options',
        'Evaluate location and cultural factors',
        'Research financial requirements and scholarship opportunities',
        'Look beyond rankings to find the best fit for your goals',
        'Check accreditation and recognition in your home country'
      ],
      conclusion: `Remember that the "best" university is the one that best fits your academic goals, career aspirations, and personal preferences. Take time to research thoroughly and consider all factors before making your decision.`,
      relatedLinks: [
        {
          title: 'Top Scholarships for International Students',
          url: '/blog/top-scholarships'
        },
        {
          title: 'Student Visa Application Guide',
          url: '/blog/visa-guide'
        }
      ]
    },
    tags: ['University Selection', 'Study Abroad', 'Higher Education', 'Career Planning']
  },
  {
    id: 2,
    title: 'Top Scholarships for International Students in 2024',
    excerpt: 'Comprehensive guide to the most prestigious scholarships available globally...',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    author: {
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      role: 'Scholarship Advisor'
    },
    date: 'Dec 18, 2023',
    category: 'Scholarships',
    readTime: '8 min read',
    content: {
      introduction: `Securing a scholarship can significantly reduce the financial burden of studying abroad. This guide covers the most prestigious scholarships available to international students in 2024, along with application tips and deadlines.`,
      mainContent: [
        `Government scholarships are often the most comprehensive, covering tuition, living expenses, and sometimes travel costs. Many countries offer scholarship programs to attract international talent and promote cultural exchange.`,
        `University-specific scholarships are another excellent option. Many top universities offer merit-based scholarships to international students. These can range from partial tuition waivers to full rides.`,
        `Private organizations and foundations also offer numerous scholarships. These often focus on specific fields of study or target students from particular regions.`,
        `Research grants and fellowships are particularly valuable for graduate students. These often come with research opportunities and can lead to long-term academic collaborations.`
      ],
      keyTakeaways: [
        'Start your scholarship search early',
        'Apply to multiple scholarships to increase your chances',
        'Pay attention to eligibility criteria and deadlines',
        'Prepare strong letters of recommendation',
        'Craft a compelling personal statement'
      ],
      conclusion: `While the scholarship application process can be competitive, thorough preparation and early applications can significantly increase your chances of success.`,
      relatedLinks: [
        {
          title: 'SOP Writing Guide',
          url: '/blog/sop-writing'
        },
        {
          title: 'University Application Tips',
          url: '/blog/application-tips'
        }
      ]
    },
    tags: ['Scholarships', 'Financial Aid', 'International Education', 'Study Abroad']
  }
];

export type { BlogPost };
