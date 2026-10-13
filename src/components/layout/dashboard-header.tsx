import Logo from "../ui/logo";
import {
  DrawerButton,
  ToggleButtonColapseSideBar,
} from "./navigation/buttons-actions";
import AddLinkButton from "../shared/add-link-button";
import PublicUserLink from "../shared/public-user-link";
import SearchInput from "../feature/dashboard/search";

export default function DashboardHeader() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <HeaderMobile />
    </header>
  );
}

function HeaderMobile() {
  return (
    <div className="block lg:hidden">
      <div className="py-2.5 md:py-3 px-3.5 md:px-5 bg-white flex items-center gap-x-2 md:gap-x-3 border-b border-slate-200">
        <DrawerButton action="open" />
        <Logo color="dark" />
        <AddLinkButton />
      </div>
      <div className="py-2 px-3.5 bg-white grid items-center justify-between grid-cols-[auto_1fr] gap-x-2 border-b border-slate-200">
        <PublicUserLink />
        <SearchInput
          placeholder="Pesquise links..."
          subClass={`md:w-[256px] `}
        />
      </div>
    </div>
  );
}

function DesktopHeader() {}
