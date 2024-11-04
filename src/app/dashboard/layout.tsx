import Title from "./form/Components/Title";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center lg:px-12 pt-16">
      {children}
    </div>
  );
}
