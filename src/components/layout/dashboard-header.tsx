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
      <div className="px-4 py-3 bg-white border-b border-slate-200">
        <div className="flex items-center gap-x-2 md:gap-x-3 mb-3">
          <DrawerButton action="open" />
          <Logo color="dark" />
          <AddLinkButton subClass={"ml-auto"} />
        </div>
        <SearchInput placeholder="Pesquise links..." subClass={"mb-3"} />
        <div className="flex items-center justify-between gap-x-2 md:gap-x-3">
          <PublicUserLink />
          <ButtonOpenLivePreview />
        </div>
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
