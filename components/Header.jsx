import Image from "next/image";
import logo from "../public/social-facebook.webp";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

/* https://nextjs.org/docs/basic-features/image-optimization: 
A Image component `next/image` is an extension of the HTML <img> element evolved
for the modern web. It includes a variety of built-in performance optimizations,
to help you achieve good core web vitals. An important measurement of UI on your
website, and are factored into Google's search rankings. Some optimization built
into the `<Image>` component include:

- Improved Performance: Always serve correctly sized image for each device
- Visual Stability: Prevent cumulative layout Shift automatically
- Faster Page Loads: Images are only loaded when they enter the viewport
- Asset Flexibility: On-demand image resizing, even for images on remote servers

Styling a Image component is similar to styling a normal <img> element but there
are a few guidelines to keep in mind, use className or style, not styled-jsx. In
most cases, we recommend using `className` prop. You can also use a style prop.
You cannot use styled-jsx because it's scoped to the current component. */
function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      {/* Left/Logo */}
      <div className="flex items-center">
        <Image src={logo} width={40} height={40} alt="logo" priority="100" />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="ml-2 hidden flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center/Feed */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2 ">
          {/* When you pass a component as a parameter "prop" directly you pass
          it un-instantiated & instantiate it by retrieving it as `props`. This
          is a more "natural way" of passing down components, which will then be
          instantiated by the components down the tree. After all, React `props`
          are just regular JS object properties and can hold any value - be it a
          string, function or a complex object. For more info see Documentation:
          https://reactjs.org/docs/composition-vs-inheritance.html */}
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right/Contacts */}
      <div className="flex items-center justify-end gap-1 sm:space-x-1">
        <p className="whitespace-nowrap pr-3 font-semibold">Luigi Lupini</p>
        {/* See globals.css styles for icon component layer style */}
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
