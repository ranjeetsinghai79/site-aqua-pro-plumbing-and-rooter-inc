import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Aqua Pro Plumbing and Rooter, INC",
    tagline: "Expert Plumbing. Fast. Reliable. Done Right.",
    phone: "(209) 831-9415",
    phoneHref: "tel:+12098319415",
    email: "info@aquaproplumbing.com",
    address: "793 S Tracy Blvd #238, Tracy, CA 95376, USA",
    city: "Tracy",
    serviceAreas: ["Tracy", "Mountain House", "Manteca", "Lathrop", "Ripon", "French Camp"],
    license: "CA C36-1087400",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "noir",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Drain Cleaning", desc: "We clear stubborn clogs and restore proper drainage quickly and efficiently.", urgent: false },
    { icon: "thermometer", title: "Water Heater Repair & Install", desc: "From minor repairs to new installations, we ensure you have reliable hot water.", urgent: false },
    { icon: "droplets", title: "Leak Repair", desc: "We accurately detect and repair all types of leaks, preventing further water damage.", urgent: true },
    { icon: "phone", title: "Emergency Plumbing", desc: "Available 24/7 for urgent plumbing issues, providing rapid response when you need it most.", urgent: true },
    { icon: "wrench", title: "Pipe Repair & Repiping", desc: "Expert solutions for damaged or aging pipes, ensuring long-lasting plumbing integrity.", urgent: false },
    { icon: "hammer", title: "Fixture Installation", desc: "Professional installation of new faucets, toilets, showers, and other plumbing fixtures.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Tracy, CA", stars: 5, text: "Our water heater stopped working on a Sunday morning. Aqua Pro Plumbing responded within an hour and had it fixed by lunchtime. The technician was incredibly professional and explained everything clearly. So grateful for their quick and efficient service!" },
    { name: "David L.", location: "Mountain House, CA", stars: 5, text: "Had a persistent drain clog that other companies couldn't fix. Aqua Pro Plumbing used a camera inspection to find the root cause and cleared it completely. Their attention to detail saved us from a bigger problem. Highly recommend their expertise!" },
    { name: "Jessica R.", location: "Manteca, CA", stars: 5, text: "We had a mysterious leak under our sink. Aqua Pro Plumbing came out the same day, quickly identified the source, and repaired it on the spot. The pricing was fair, and the plumber was very courteous. Excellent service from start to finish." }
  ],

  trustBadges: [
    "CA C36-1087400 Licensed", "Insured & Bonded", "24/7 Emergency Service", "Same-Day Service Available", "5-Star Rated on Google", "Upfront Pricing"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 6, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We understand plumbing emergencies can't wait. Our team responds quickly to minimize damage and disruption." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins, so you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, certified, and experienced in all aspects of plumbing services." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your satisfaction is our priority. We stand behind our work with a commitment to quality and lasting solutions." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our advanced AI reception ensures your calls are answered promptly, day or night, for immediate assistance." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts to handle most repairs on the first visit." }
  ],

  formServiceOptions: ["Drain Cleaning", "Water Heater Repair & Install", "Leak Repair", "Emergency Plumbing", "Pipe Repair & Repiping", "Fixture Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!