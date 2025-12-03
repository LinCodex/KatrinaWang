/**
 * Property listings data
 */
export const PROPERTIES = [
  {
    id: 1,
    title: "The Skyview Penthouse",
    location: "Flushing, NY",
    price: "$2,500,000",
    priceRaw: 2500000,
    status: "active",
    type: "Luxury Condo",
    specs: { beds: 3, baths: 3, sqft: 1800 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 12,
      pricePerSqFt: 1388,
      appreciation: "+5.2%",
      risks: { flood: 10, fire: 30, heat: 45 },
      schools: [
        { name: "PS 20 John Bowne", rating: 8, distance: "0.3mi" },
        { name: "JHS 189 Daniel Carter", rating: 7, distance: "0.5mi" },
        { name: "Flushing High School", rating: 6, distance: "0.8mi" }
      ],
      history: [
        { date: '2020', price: 2.1 },
        { date: '2021', price: 2.2 },
        { date: '2022', price: 2.25 },
        { date: '2023', price: 2.35 },
        { date: '2024', price: 2.5 }
      ]
    }
  },
  {
    id: 2,
    title: "Commercial Hub",
    location: "Long Island City, NY",
    price: "$8,200,000",
    priceRaw: 8200000,
    status: "active",
    type: "Commercial",
    specs: { beds: 0, baths: 4, sqft: 12000 },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 45,
      pricePerSqFt: 683,
      appreciation: "+12.1%",
      risks: { flood: 60, fire: 20, heat: 50 },
      schools: [],
      history: [
        { date: '2020', price: 6.5 },
        { date: '2021', price: 6.8 },
        { date: '2022', price: 7.2 },
        { date: '2023', price: 7.8 },
        { date: '2024', price: 8.2 }
      ]
    }
  },
  {
    id: 5,
    title: "Whitestone Waterfront",
    location: "Whitestone, NY",
    price: "$4,500,000",
    priceRaw: 4500000,
    status: "sold",
    type: "Waterfront",
    specs: { beds: 5, baths: 5, sqft: 5000 },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 90,
      pricePerSqFt: 900,
      appreciation: "+2.8%",
      risks: { flood: 85, fire: 10, heat: 30 },
      schools: [
        { name: "PS 193 Alfred Kennedy", rating: 7, distance: "0.6mi" }
      ],
      history: [
        { date: '2020', price: 3.9 },
        { date: '2021', price: 4.1 },
        { date: '2022', price: 4.2 },
        { date: '2023', price: 4.4 },
        { date: '2024', price: 4.5 }
      ]
    }
  },
  {
    id: 6,
    title: "Main St Retail",
    location: "Flushing, NY",
    price: "$5,400,000",
    priceRaw: 5400000,
    status: "sold",
    type: "Commercial",
    specs: { beds: 0, baths: 2, sqft: 3500 },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 15,
      pricePerSqFt: 1542,
      appreciation: "+8.5%",
      risks: { flood: 20, fire: 50, heat: 70 },
      schools: [],
      history: [
        { date: '2020', price: 4.5 },
        { date: '2021', price: 4.8 },
        { date: '2022', price: 5.0 },
        { date: '2023', price: 5.2 },
        { date: '2024', price: 5.4 }
      ]
    }
  },
  {
    id: 7,
    title: "Coming Soon",
    location: "Queens, NY",
    price: "Inquire",
    priceRaw: 0,
    status: "underContract",
    type: "Placeholder",
    specs: { beds: 0, baths: 0, sqft: 0 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 0,
      pricePerSqFt: 0,
      appreciation: "0%",
      risks: { flood: 0, fire: 0, heat: 0 },
      schools: [],
      history: []
    }
  },
  {
    id: 8,
    title: "Coming Soon",
    location: "Long Island, NY",
    price: "Inquire",
    priceRaw: 0,
    status: "underContract",
    type: "Placeholder",
    specs: { beds: 0, baths: 0, sqft: 0 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    analytics: {
      daysOnMarket: 0,
      pricePerSqFt: 0,
      appreciation: "0%",
      risks: { flood: 0, fire: 0, heat: 0 },
      schools: [],
      history: []
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Katrina turned a complex commercial transaction into a seamless success. Her market knowledge in Flushing is unmatched.",
    author: "James L.",
    role: "Property Developer"
  },
  {
    id: 2,
    quote: "Precision, discretion, and results. I've worked with many agents in NY, but Katrina operates on a different level.",
    author: "Sarah Chen",
    role: "Investor"
  },
  {
    id: 3,
    quote: "She didn't just sell our home; she curated a strategy that set a new price record for our block. Truly exceptional.",
    author: "The Rodriguez Family",
    role: "Sellers, Forest Hills"
  }
];
