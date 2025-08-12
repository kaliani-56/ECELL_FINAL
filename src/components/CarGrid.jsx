import React from 'react';



const cards = [
  {
    id: 1,
    title: "E-Summit",
    description:
      "Biggest enterprise tech acquisitions of 2021 in reverse chronological order.",
    url: "#",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 2,
    title: "InnovateX",
    description:
      "Discover the new AI tools that are transforming the tech landscape in 2025.",
    url: "#",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 3,
    title: "Consiglere",
    description:
      "Companies are shifting to cloud-native infrastructures faster than ever.",
    url: "#",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 4,
    title: "Boiler's Room",
    description:
      "Learn how cybersecurity is evolving to keep up with threats in 2025.",
    url: "#",
    image: "https://i.pravatar.cc/300?img=8",
  },
];

const CardGrid = () => {
  return (
    <section className="p-6 bg-transparent">
      <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 mb-6 text-center py-1 mt-20 mask-b-to-100%">OUR INITIATIVES</h2>
      <div className="w-3/4 md:ml-20 lg:ml-40 lg:-mt-20">
      <div style={{position: 'relative', height: '150px'}}>

</div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 bg-transparent mt-0">
        {cards.map(({ id, title, description, url, image }) => (
          <div
            key={id}
            className="group flex flex-col justify-between h-full p-4 bg-zinc-900 border border-gray-700 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-orange-400/40"
          >
            <div>
              {/* Image with zoom on hover */}
              <div className="overflow-hidden rounded mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <a href={url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-300">{description}</p>
            </div>

            {/* Read More Button */}
            <a
              href={url}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-orange-400 bg-stone-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-orange-500"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
