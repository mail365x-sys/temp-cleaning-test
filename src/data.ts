export interface Service {
  name: string;
  basePrice: number;
  popular?: boolean;
  description: string;
  includes: string[];
}

export interface Extra {
  name: string;
  price: number;
}

export interface FrequencyOption {
  name: string;
  discount: number;
  badge?: string | null;
}

export interface Testimonial {
  rating: number;
  text: string;
  author: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    name: "Standard Clean",
    basePrice: 129,
    description: "Perfect for regular maintenance",
    includes: [
      "Dust all surfaces",
      "Vacuum & mop floors",
      "Clean bathrooms (toilets, showers, sinks)",
      "Kitchen cleaning (counters, outside appliances, sink)",
      "Empty trash bins",
      "Make beds & tidy rooms"
    ]
  },
  {
    name: "Deep Clean",
    basePrice: 219,
    popular: true,
    description: "Thorough top-to-bottom cleaning",
    includes: [
      "Everything in Standard Clean, PLUS:",
      "Baseboards & window sills",
      "Inside cabinets (optional)",
      "Behind appliances",
      "Ceiling fans & light fixtures",
      "Detailed bathroom grout scrubbing"
    ]
  },
  {
    name: "Move-In/Move-Out",
    basePrice: 299,
    description: "For empty homes",
    includes: [
      "Complete deep cleaning of empty space",
      "Inside all cabinets & closets",
      "Inside oven & refrigerator",
      "Window tracks",
      "All baseboards",
      "Rent-ready guarantee"
    ]
  }
];

export const EXTRAS: Extra[] = [
  { name: "Inside Fridge", price: 25 },
  { name: "Inside Oven", price: 25 },
  { name: "Interior Windows", price: 35 },
  { name: "Laundry (wash, dry, fold)", price: 40 },
  { name: "Inside Cabinets", price: 30 }
];

export const FREQUENCY_DISCOUNTS: FrequencyOption[] = [
  { name: "One-Time", discount: 0 },
  { name: "Monthly", discount: 5, badge: null },
  { name: "Bi-Weekly", discount: 10, badge: "Most Popular" },
  { name: "Weekly", discount: 15, badge: "Best Value" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: "I was nervous about leaving my dog, but the cleaner loved him! The house looked amazing. Highly recommend!",
    author: "Sarah M.",
    location: "Whiteaker"
  },
  {
    rating: 5,
    text: "Best cleaning service in Eugene. They're always on time, professional, and my house smells like a spa after.",
    author: "Michael R.",
    location: "Downtown"
  },
  {
    rating: 5,
    text: "I love coming home to a clean house without lifting a finger. The bi-weekly plan is a game changer!",
    author: "Jennifer K.",
    location: "South Eugene"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to be home?",
    answer: "No! Most clients provide a key, lockbox code, or garage code."
  },
  {
    question: "Are you pet friendly?",
    answer: "Absolutely! We love pets. Just let us know if yours is nervous around strangers."
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "Nope. We bring our own professional-grade, eco-friendly products."
  },
  {
    question: "What if I need to cancel?",
    answer: "Free cancellation up to 24 hours before your appointment."
  },
  {
    question: "How do you ensure quality?",
    answer: "Every cleaner is trained, background-checked, and monitored. Plus our 100% guarantee."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Often yes! Check availability in the booking form."
  }
];

export const COMPANY_INFO = {
  name: "CleanHub",
  tagline: "Where Clean Meets Care",
  location: "Eugene, Oregon",
  phone: "+1 (458) 274-5665",
  phoneDisplay: "(458) 274-5665",
  email: "valerii67@gmail.com",
  address: "1140 Aspen St, Eugene, OR 97477",
  instagram: "https://www.instagram.com/wallsyaccentwalls/?igsh=MXBqMXBhaHhtdWl4dg%3D%3D#",
  facebook: "https://www.facebook.com/wallsyart",
  whatsapp: "+1 (458) 274-5665",
  rating: 4.8,
  reviewCount: 248,
  clientCount: "1,000+",
  hours: "Mon-Sat: 8am-7pm | Sun: 9am-5pm"
};
