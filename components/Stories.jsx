import Image from "next/image";

const stories = [
  {
    id: 0,
    name: "Elon Musk",
    src: "/users/elon_musk_background.webp",
    profile: "/users/elon_musk_profile.webp",
  },
  {
    id: 1,
    name: "Brad Garlinghouse",
    src: "/users/brad_garlinghouse_background.jpeg",
    profile: "/users/brad_garlinghouse_profile.jpg",
  },
  {
    id: 2,
    name: "Jeff Bezoz",
    src: "/users/jeff_bezos_background.webp",
    profile: "/users/jeff_bezos_profile.jpeg",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "/users/mark_z_background.jpg",
    profile: "/users/mark_z_profile.jpg",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "/users/bill_gates_background.jpeg",
    profile: "/users/bill_gates_profile.jpg",
  },
];

function StoryCard({ name, src, profile }) {
  return (
    <div
      className="relative h-14 w-14 cursor-pointer overflow-x-hidden p-3 duration-200 ease-in
      hover:scale-105 hover:animate-pulse md:h-20 md:w-20 lg:h-56 lg:w-32"
    >
      <Image
        className="absolute top-10 z-40 h-10 w-10 rounded-full border-2 object-cover opacity-0 shadow lg:opacity-100"
        src={profile}
        width={100}
        height={100}
        alt="story"
      />
      <Image
        src={src}
        alt="background"
        fill
        sizes="100"
        priority="100"
        className="rounded-full object-cover brightness-75 filter lg:rounded-3xl"
      />
    </div>
  );
}

export default function Stories() {
  return (
    <div className="mx-auto flex justify-center space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
