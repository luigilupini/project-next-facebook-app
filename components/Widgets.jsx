import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";

const contacts = [
  { src: "/users/jeff_bezos_profile.jpeg", name: "Jeff Bezoz" },
  { src: "/users/elon_musk_profile.jpg", name: "Elon Musk" },
  { src: "/users/bill_gates_profile.jpg", name: "Bill Gates" },
  { src: "/users/mark_z_profile.jpg", name: "Mark Zuckerberg" },
  { src: "/users/james_bond_profile.jpeg", name: "James Bond" },
  { src: "/users/the_queen_profile.webp", name: "The Queen" },
  { src: "/users/charles_profile.jpeg", name: "Charles Leclerc" },
];

function Contact({ name, src }) {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-200">
      <Image
        className="h-12 w-12 rounded-full object-cover"
        src={src}
        width={100}
        height={100}
        alt="logo"
        priority="100"
      />
      <p className="text-xs">{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-400 shadow-lg"></div>
    </div>
  );
}

function Widgets() {
  return (
    <div className="mt-5 hidden w-60 flex-col p-2 lg:flex">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <h2>Contacts</h2>
        <div className="flex gap-3">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map(({ src, name }) => (
        <Contact key={src} src={src} name={name} />
      ))}
    </div>
  );
}

export default Widgets;
