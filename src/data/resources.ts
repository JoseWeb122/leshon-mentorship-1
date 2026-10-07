export type Resource = {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  services: string[];
  website: string;
  contact: string;
  hours: string;
};

export const RESOURCE_CATEGORIES = [
  "All Categories",
  "Education",
  "Family Support",
  "Youth Programs",
  "Community Services",
  "Financial Support",
  "Health & Wellness",
  "Other Resources",
];

export const RESOURCES: Resource[] = [
  {
    id: "r1",
    name: "Harbor Family Support Center",
    description:
      "A welcoming local center offering family counseling, parenting workshops, and connection to essential community services. Walk-ins are warmly received and staff work closely with each family to understand their situation.",
    category: "Family Support",
    location: "Riverdale District",
    services: [
      "One-on-one family mentoring",
      "Parenting workshops",
      "Case management referrals",
      "Peer support groups",
    ],
    website: "harborfamilysupport.example",
    contact: "(555) 210-3344",
    hours: "Mon – Fri · 9:00 AM – 6:00 PM",
  },
  {
    id: "r2",
    name: "Bridge Educational Advocacy",
    description:
      "Helping parents understand school programs, IEP processes, and communication with educators. Advocates work alongside families during important meetings and transitions.",
    category: "Education",
    location: "Greater Metro Area",
    services: [
      "School meeting preparation",
      "IEP & 504 plan guidance",
      "Family–educator mediation",
      "Educational rights education",
    ],
    website: "bridgeadvocacy.example",
    contact: "(555) 311-7720",
    hours: "Mon – Sat · By appointment",
  },
  {
    id: "r3",
    name: "Northside Youth Collective",
    description:
      "A youth development organization offering after-school programs, mentorship, leadership opportunities, and creative arts experiences for young people ages 10 to 18.",
    category: "Youth Programs",
    location: "Northside Neighborhood",
    services: [
      "After-school programming",
      "Youth mentorship",
      "Leadership development",
      "Summer enrichment",
    ],
    website: "northsideyouth.example",
    contact: "(555) 422-9911",
    hours: "Mon – Fri · 3:00 PM – 8:00 PM",
  },
  {
    id: "r4",
    name: "Cornerstone Community Services",
    description:
      "A neighborhood hub connecting residents to food programs, housing navigation, employment support, and other essential services in their community.",
    category: "Community Services",
    location: "Westview District",
    services: [
      "Food pantry access",
      "Housing navigation",
      "Employment support",
      "Benefits enrollment help",
    ],
    website: "cornerstonecs.example",
    contact: "(555) 503-2288",
    hours: "Mon – Fri · 8:30 AM – 5:30 PM",
  },
  {
    id: "r5",
    name: "Pathways Financial Guidance",
    description:
      "Free financial counseling and planning support for families working toward stability. Sessions cover budgeting, savings, credit, and navigating benefits.",
    category: "Financial Support",
    location: "Citywide (virtual available)",
    services: [
      "One-on-one budgeting sessions",
      "Credit & debt counseling",
      "Benefits screening",
      "Financial planning workshops",
    ],
    website: "pathwaysfg.example",
    contact: "(555) 614-5522",
    hours: "Tue – Sat · By appointment",
  },
  {
    id: "r6",
    name: "Grove Health & Wellness Collective",
    description:
      "A community-centered wellness organization connecting families with mental health resources, peer support, and culturally aware care providers.",
    category: "Health & Wellness",
    location: "Grove District",
    services: [
      "Mental health referrals",
      "Family wellness workshops",
      "Peer support circles",
      "Care navigation",
    ],
    website: "grovewellness.example",
    contact: "(555) 725-8090",
    hours: "Mon – Fri · 10:00 AM – 7:00 PM",
  },
  {
    id: "r7",
    name: "Lighthouse Parent Network",
    description:
      "A peer-led network of parents and caregivers sharing experiences, advice, and encouragement through regular gatherings and online community.",
    category: "Family Support",
    location: "Online & In-Person Meetups",
    services: [
      "Monthly parent circles",
      "Online discussion community",
      "Resource library",
      "Mentor matching",
    ],
    website: "lighthouseparents.example",
    contact: "(555) 836-1145",
    hours: "Community access 24/7",
  },
  {
    id: "r8",
    name: "Eastside Learning Project",
    description:
      "Tutoring, homework support, and enrichment for K–12 students. Volunteer mentors work with small groups and individual learners in a calm, supportive setting.",
    category: "Education",
    location: "Eastside Community",
    services: [
      "Tutoring for K–12",
      "Homework support",
      "Mentorship",
      "Family learning workshops",
    ],
    website: "eastlearning.example",
    contact: "(555) 947-6612",
    hours: "Mon – Thu · 4:00 PM – 7:30 PM",
  },
  {
    id: "r9",
    name: "Heartline Volunteer Hub",
    description:
      "Connects caring community members with opportunities to support local families through volunteer service, meal trains, and resource drives.",
    category: "Other Resources",
    location: "Greater Metro Area",
    services: [
      "Volunteer matching",
      "Community meal programs",
      "Resource drives",
      "Neighborhood outreach",
    ],
    website: "heartlinehub.example",
    contact: "(555) 158-4477",
    hours: "Mon – Fri · 9:00 AM – 5:00 PM",
  },
];