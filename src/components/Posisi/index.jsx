import Moneter from "../../assets/image/moneter.svg";
import Market from "../../assets/image/market.svg";
import Stabilitas from "../../assets/image/stabilitas.svg";
import Sp from "../../assets/image/sp.svg";
import Enabler from "../../assets/image/enabler.svg";

const Posisi = () => {
  return (
    <>
      <div className="container container mx-auto px-4 py-14 sm:px-6 md:px-8 lg:py-8 xl:px-4">
        <h1 className="text-[40px] md:text-5xl text-center mb-16">
          Posisi Kerja
        </h1>
        <div className="gird grid-cols-12">
          <div className="border">
            <div className="flex justify-center">
              <img src={Moneter} alt="" />
            </div>
            <h3 className="font-sans text-center mt-6">Moneter</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posisi;
