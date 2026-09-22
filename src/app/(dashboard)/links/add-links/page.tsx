import AddLinkButton from "@/components/dashboard/add-link-button";
import SortableList from "@/components/dashboard/sortable-list";
import UnsavedChangesBar from "@/components/dashboard/unsaved-changes-bar";
import { LinkItem } from "@/lib/definitions";

const listLinks: LinkItem[] = [
  {
    id: 1,
    title: "Instagram",
    url: "http://instagram.com",
    iconName: "Instagram",
    position_at: 1,
    is_active: true,
  },
  {
    id: 2,
    title: "Lindkedin",
    url: "http://lindkedin.com",
    iconName: "LinkedIn",
    position_at: 2,
    is_active: true,
  },
  {
    id: 3,
    title: "Meu perfil do spotfy",
    url: "http://spotfy.com",
    iconName: "Spotify",
    position_at: 3,
    is_active: true,
  },
];

export default function Page() {
  return (
    <div className="flex items-center">
      <div className="flex-1 min-h-screen p-12">
        <header className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-[32px] leading-10 font-semibold text-indigo-900">
              Adicione seus links
            </h1>
            <h2 className="text-base leading-6 text-zinc-600">
              Gerencie e organize o perfil do seu link público.
            </h2>
          </div>
          <AddLinkButton />
        </header>
        <main>
          <SortableList links={listLinks} />
        </main>
        <UnsavedChangesBar />
      </div>
      <div className="flex-1 min-h-screen"></div>
    </div>
  );
}
