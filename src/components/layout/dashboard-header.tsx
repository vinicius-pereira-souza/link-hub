import Logo from "../ui/logo";
import {
  DrawerButton,
  ToggleButtonColapseSideBar,
} from "./navigation/buttons-actions";
import AddLinkButton from "../shared/add-link-button";
import PublicUserLink from "../shared/public-user-link";
import SearchInput from "../feature/dashboard/search";
import { ButtonOpenLivePreview } from "../feature/dashboard/live-preview-sheet";

export default function DashboardHeader() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <HeaderMobile />
      <DesktopHeader />
    </header>
  );
}

function HeaderMobile() {
  return (
    <div className="block lg:hidden">
      <div className="py-2.5 md:py-3 px-3.5 md:px-5 bg-white flex items-center gap-x-2 md:gap-x-3 border-b border-slate-200">
        <DrawerButton action="open" />
        <Logo color="dark" />
        <AddLinkButton subClass={"ml-auto"} />
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

function DesktopHeader() {
  return (
    <div
      className={`hidden container mx-auto lg:flex items-center  border-b border-slate-200 px-8 py-3 
        gap-x-3`}
    >
      <ToggleButtonColapseSideBar />
      <PublicUserLink />
      <SearchInput
        placeholder="Pesquise links..."
        subClass={`md:w-[320px] h-8.5`}
      />
      <ButtonOpenLivePreview />
      <AddLinkButton />
    </div>
  );
}
