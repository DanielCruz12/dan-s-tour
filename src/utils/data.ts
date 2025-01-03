import { Category } from "@/stores/useFilterStorage";

const tours = [
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "California Sunset/Twilight Boat Cruise",
    rating: 5.0,
    reviews: 672,
    duration: 7,
    groupSize: "Small group",
    price: 35.62,
    exceptional: true,
    description:
      "Experience the magic of California as you sail at sunset or under the stars. This 7-day, small-group boat cruise offers spectacular ocean views, unforgettable sunsets, and serene nature. Perfect for couples or small groups seeking an intimate and relaxing adventure.",
    category: Category.TOURS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    title: "Luxury Stay at Grand Palace Hotel",
    rating: 4.9,
    reviews: 850,
    duration: 3,
    groupSize: "Couples",
    price: 400.0,
    exceptional: true,
    description:
      "Enjoy a luxurious stay at the Grand Palace Hotel. This 3-day package includes spa treatments, fine dining, and breathtaking city views. Perfect for couples seeking a romantic getaway.",
    category: Category.HOTELS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1564694202779-bc908c327862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=lTTajzrSkCw",
    title: "Car Rental: Explore Los Angeles",
    rating: 4.8,
    reviews: 530,
    duration: 1,
    groupSize: "Solo traveler",
    price: 45.0,
    description:
      "Rent a car and explore the vibrant streets of Los Angeles at your own pace. Perfect for solo travelers or families wanting the freedom to visit iconic landmarks and hidden gems.",
    category: Category.RENTAL,
  },
  {
    image:
      "https://images.unsplash.com/photo-1564694202779-bc908c327862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    title: "VIP Access to Disneyland California",
    rating: 4.7,
    reviews: 1040,
    duration: 1,
    groupSize: "Families",
    price: 150.0,
    exceptional: false,
    description:
      "Enjoy a magical day at Disneyland California with VIP access. Skip the lines and make unforgettable memories with your family in the happiest place on Earth.",
    category: Category.TICKETS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=f2JuxM-snGc",
    title: "Beach Club Day Pass in Malibu",
    rating: 4.6,
    reviews: 920,
    duration: 1,
    groupSize: "Small group",
    price: 80.0,
    exceptional: false,
    description:
      "Relax and unwind with a day pass to a luxurious beach club in Malibu. Enjoy exclusive beach access, premium facilities, and delicious cocktails by the sea.",
    category: Category.DAY_PASS,
  },
  {
    image:
      "https://picsum.photos/1000?ramdom=1212.png",
    video: "https://www.youtube.com/watch?v=3AtDnEC4zak",
    title: "Grand Canyon Helicopter Tour",
    rating: 5.0,
    reviews: 784,
    duration: 1,
    groupSize: "Couples",
    price: 350.0,
    exceptional: true,
    description:
      "Soar above the breathtaking Grand Canyon on a private helicopter tour. Witness stunning vistas and create memories that will last a lifetime.",
    category: Category.TOURS,
  },
  {
    image:
      "https://picsum.photos/1000?ramdom=1213.png",
    video: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    title: "Universal Studios Hollywood Day Pass",
    rating: 4.8,
    reviews: 650,
    duration: 1,
    groupSize: "Families",
    price: 120.0,
    exceptional: true,
    description:
      "Dive into the action-packed world of Universal Studios Hollywood with a full-day pass. Enjoy thrilling rides, movie sets, and entertainment for the whole family.",
    category: Category.TICKETS,
  },
  {
    image:
      "https://picsum.photos/1000?ramdom=124.png",
    video: "https://www.youtube.com/watch?v=aJOTlE1K90k",
    title: "Wine Tasting in Napa Valley",
    rating: 4.9,
    reviews: 820,
    duration: 2,
    groupSize: "Small group",
    price: 150.0,
    exceptional: true,
    description:
      "Indulge in a luxurious wine-tasting experience in the heart of Napa Valley. Explore exquisite vineyards, sample premium wines, and enjoy picturesque scenery.",
    category: Category.TOURS,
  },
  // New Entries
  {
    image:
      "https://picsum.photos/1000?ramdom=1215.png",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Maui Island Helicopter Tour",
    rating: 5.0,
    reviews: 410,
    duration: 1,
    groupSize: "Couples",
    price: 500.0,
    exceptional: true,
    description:
      "Experience the beauty of Maui from the sky! Soar above lush forests, waterfalls, and the rugged coastline with this exclusive helicopter tour.",
    category: Category.TOURS,
  },
  {
    image:
      "https://picsum.photos/1000?ramdom=1216.png",
    video: "https://www.youtube.com/watch?v=lTTajzrSkCw",
    title: "5-Star Ski Resort in Aspen",
    rating: 4.9,
    reviews: 600,
    duration: 5,
    groupSize: "Couples",
    price: 1200.0,
    exceptional: true,
    description:
      "Stay at a luxurious 5-star ski resort in Aspen. Enjoy pristine slopes, fine dining, and unparalleled comfort.",
    category: Category.HOTELS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1486504701189-e8a60f3a6f34?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=400",
    video: "https://www.youtube.com/watch?v=3AtDnEC4zak",
    title: "Ferrari Driving Experience in Miami",
    rating: 4.8,
    reviews: 432,
    duration: 1,
    groupSize: "Solo traveler",
    price: 400.0,
    exceptional: true,
    description:
      "Live your dream with a Ferrari driving experience in Miami. Drive a high-performance Ferrari on open roads, with a professional instructor by your side.",
    category: Category.RENTAL,
  },
  {
    image:
      "https://picsum.photos/1000?ramdom=1218.png",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    title: "Royal Palace Tour in Madrid",
    rating: 4.9,
    reviews: 350,
    duration: 2,
    groupSize: "Families",
    price: 100.0,
    exceptional: false,
    description:
      "Explore the grandeur of the Royal Palace in Madrid. This guided tour takes you through the magnificent rooms and gardens of Spain's royal residence.",
    category: Category.TOURS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1495390164512-79c9a8a7b0ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=400",
    video: "https://www.youtube.com/watch?v=f2JuxM-snGc",
    title: "Beachfront Resort Stay in Bali",
    rating: 4.7,
    reviews: 620,
    duration: 7,
    groupSize: "Couples",
    price: 1500.0,
    exceptional: true,
    description:
      "Escape to a beautiful beachfront resort in Bali. Enjoy stunning ocean views, private pools, and personalized services on this romantic getaway.",
    category: Category.HOTELS,
  },
  {
    image:
      "https://images.unsplash.com/photo-1470719539295-e7b313348a67?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=400",
    video: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    title: "Private Yacht Charter in Miami",
    rating: 5.0,
    reviews: 150,
    duration: 1,
    groupSize: "Groups",
    price: 2000.0,
    exceptional: true,
    description:
      "Charter a private yacht and cruise through the pristine waters of Miami. Perfect for group events, celebrations, or a relaxing day at sea.",
    category: Category.RENTAL,
  },
  {
    image:
      "https://images.unsplash.com/photo-1544162351-0db4ff465b93?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=400",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "VIP Paris Fashion Week Access",
    rating: 5.0,
    reviews: 250,
    duration: 3,
    groupSize: "Solo traveler",
    price: 5000.0,
    exceptional: true,
    description:
      "Experience the glamour of Paris Fashion Week with VIP access. Attend exclusive shows, meet designers, and be part of the fashion elite.",
    category: Category.TICKETS,
  },
]
export default tours