import { useSession } from "next-auth/client";
import SideBarColumn from "./SideBarColumn";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function SideBar() {
  const [session, loading] = useSession();
  // console.log({ session, loading });
  return (
    <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
      <SideBarColumn src={session.user.image} title={session.user.name} />
      <SideBarColumn Icon={UserIcon} title="Friends" />
      <SideBarColumn Icon={UserGroupIcon} title="Groups" />
      <SideBarColumn Icon={ShoppingBagIcon} title="Marketplace" />
      <SideBarColumn Icon={DesktopComputerIcon} title="Watch" />
      <SideBarColumn Icon={CalendarIcon} title="Events" />
      <SideBarColumn Icon={ClockIcon} title="Memories" />
      <SideBarColumn Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}
