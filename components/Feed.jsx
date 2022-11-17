import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";
// [scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)
// Tailwind plugin for hide scrollbars, although the element can still scroll if
// the element's content overflows. Install plugin then add to config.js file.
export default function Feed() {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 scrollbar-hide xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}
