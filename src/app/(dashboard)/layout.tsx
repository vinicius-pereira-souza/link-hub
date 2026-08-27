export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen overflow-hidden bg-gray-50">{children}</main>
  );
}
