import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div className="flex-grow">
      <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 xl:mr-40">
        {/* <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl"> */}

        <div className="flex max-w-md flex-col items-center md:max-w-lg lg:max-w-2xl">
          <Stories />
          <InputBox />
          <Posts />
        </div>
      </div>
    </div>
  );
}
