import Image from "next/image";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Wanderlust Travel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 mb-4">
            At Wanderlust Travel, we believe that travel is not just about
            visiting new places, but about creating unforgettable experiences
            that enrich your life. Founded in 2010, we&apos;ve been helping
            adventurers like you explore the world&apos;s most beautiful
            destinations for over a decade.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of experienced travel experts is passionate about curating
            unique, immersive journeys that cater to your individual interests
            and preferences. Whether you&apos;re seeking relaxation on pristine
            beaches, cultural experiences in bustling cities, or thrilling
            adventures in the great outdoors, we have the perfect package for
            you.
          </p>
          <p className="text-gray-600">
            We pride ourselves on our commitment to sustainable tourism, working
            closely with local communities to ensure that our travels have a
            positive impact on the places we visit. Join us on a journey of
            discovery, and let Wanderlust Travel turn your travel dreams into
            reality.
          </p>
        </div>
        <div>
          <Image
            src="/tour.jpg"
            alt="Wanderlust Travel Team"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
