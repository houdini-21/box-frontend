import TopBar from "@/app/Components/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-y-scroll w-screen h-screen antialiased text-white">
      <TopBar />
      <div className="flex flex-col justify-center items-center lg:px-12 pt-16">
        <div className="w-3/4">
          <div className="w-full mb-8">
            <h1 className="text-2xl font-bold text-gray-600">Crea una orden</h1>
            <p className="text-gray-500 font-regular">
              Dale una ventaja competitiva a tu negocio con entregas
              <span className="font-bold"> el mismo día</span> y (Área
              Metropolitana) y
              <span className="font-bold"> el día siguiente </span>a nivel
              nacional.{" "}
            </p>
          </div>

          <div className="w-full bg-white rounded-lg shadow-sm lg:px-10 px-6 py-4">
            {children}
          </div>
        </div>

        {/* <div className="p-2 w-full text-gray-800">{children}</div> */}
      </div>
    </div>
  );
}
