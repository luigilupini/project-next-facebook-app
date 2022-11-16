import Image from "next/image";

export default function SideBarColumn({ Icon, src, title }) {
  // console.log({ Icon, src, title });
  return (
    <div
      className="flex cursor-pointer items-center space-x-2 rounded-xl p-4
    hover:bg-gray-200"
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          alt="profile"
          priority="100"
        />
      )}
      {Icon && <Icon className={"w8 h-8 text-blue-500"} />}
      <p className="hidden text-sm font-medium sm:inline-flex">{title}</p>
    </div>
  );
}
