import DashboardNavBar from "@/components/dashboard/dashboard-navbar";

export default async function Page() {
  return (
    <div className="min-h-screen grid grid-cols-[256px_1fr] text-black ">
      <DashboardNavBar />
      <div className="font-bold">
        <h1>Esta página é para caso a autenticação de certo!</h1>
      </div>
    </div>
  );
}
