import Title from "./Components/Title";
import StepsPrincipal from "./Components/StepsPrincipal";

export default function FormCreate() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:p-4 p-0">
      <div className="w-3/4">
        <Title
          title="Crea Orden"
          subTitle={
            <>
              Dale una ventaja competitiva a tu negocio con entregas
              <span className="font-bold"> el mismo día</span> y (Área
              Metropolitana) y
              <span className="font-bold"> el día siguiente </span>a nivel
              nacional.{" "}
            </>
          }
        />
        <div className="w-full bg-white rounded-lg shadow-sm lg:px-10 px-6 py-4">
          <StepsPrincipal />
        </div>
      </div>
    </div>
  );
}
