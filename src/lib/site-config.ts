export const siteConfig = {
  name: "Expert Claim Solutions",
  shortName: "ECSI",
  legalName: "Expert Claim Solutions India Pvt Ltd",
  tagline: "Insurance claim recovery, handled by specialists.",
  phone: "+91 9985060600",
  phoneAlt: "+91 7396253535",
  phoneHref: "tel:+919985060600",
  whatsapp: "https://wa.me/919985060600",
  email: "support@expertclaims.co.in",
  address: "Plot no: 12, Road no: 1, Dharmareddy colony, Near JNTU metro station, Vasanth Nagar, Kukatpally, Hyderabad - 500 085",
  branches: [
    {
      city: "Delhi",
      address: "MYDESK CO-WORKING SPACE 311-315, 3rd Floor, B Block, Naurang House, 21, KG Marg, Delhi-110001",
    },
    {
      city: "Mumbai",
      address: "#27, 7th Floor, Mumbai Coworks, Times Square, Next to Sai Service W. Exp Highway, Andheri East, Mumbai-400069",
    },
  ],
  mapLink: "https://share.google/HHKiE8IjAaQ2EOL9j",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.3907!3d17.4947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzQxLjAiTiA3OMKwMjMnMjYuNSJF!5e0!3m2!1sen!2sin!4v1",
  hours: "Mon-Sat, 9:30 AM - 7:00 PM IST",
  partnerPortal: "https://expert-claims-g8p9.vercel.app/registeraspartner",
  socials: {
    instagram: "https://www.instagram.com/expert_claims_solutions",
    facebook: "https://www.facebook.com/profile.php?id=61560343072139",
    linkedin: "https://www.linkedin.com/company/expertclaimsolutions",
  },
  testimonialVideos: [
    {
      title: "Client testimonial 01",
      url: "https://youtube.com/shorts/haqpqFp948E?si=F7qWnLFgfDlK4l-4",
      embedUrl: "https://www.youtube.com/embed/haqpqFp948E",
    },
    {
      title: "Client testimonial 02",
      url: "https://youtu.be/IxVC-JjSx_g?si=lsfyR_TFGzAip92Y",
      embedUrl: "https://www.youtube.com/embed/IxVC-JjSx_g",
    },
    {
      title: "Client testimonial 03",
      url: "https://youtube.com/shorts/5C3EKqzdMFU?si=UeNMlevCAD3JIsr-",
      embedUrl: "https://www.youtube.com/embed/5C3EKqzdMFU",
    },
    {
      title: "Client testimonial 04",
      url: "https://youtube.com/shorts/AoHgDbXYip0?si=vYUrlRj2w-71TdWI",
      embedUrl: "https://www.youtube.com/embed/AoHgDbXYip0",
    },
    {
      title: "Client testimonial 05",
      url: "https://youtube.com/shorts/2TYYrsVR2ik?si=X3mdX5jMriYeWTRb",
      embedUrl: "https://www.youtube.com/embed/2TYYrsVR2ik",
    },
  ],
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Claim Assessment", href: "/services/claim-assessment" },
      { label: "Documentation Review & Support", href: "/services/documentation-review" },
      { label: "Negotiation with Insurers", href: "/services/insurer-negotiation" },
      { label: "Legal Assistance", href: "/services/legal-assistance" },
      { label: "Liaison with Surveyors & Officials", href: "/services/liaison-services" },
      { label: "Insurance Knowledge & Awareness", href: "/services/insurance-awareness" },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Claim Assessment", href: "/services/claim-assessment" },
    { label: "Documentation Review", href: "/services/documentation-review" },
    { label: "Insurer Negotiation", href: "/services/insurer-negotiation" },
    { label: "Legal Assistance", href: "/services/legal-assistance" },
    { label: "Liaison Services", href: "/services/liaison-services" },
  ],
  resources: [
    { label: "Knowledge Centre", href: "/blog" },
    { label: "Insurance Gap Analysis", href: "https://expert-claims-g8p9.vercel.app/registeraspartner#gap" },
    { label: "Partner Registration", href: "https://expert-claims-g8p9.vercel.app/registeraspartner" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
