import HeroImage from "../../assets/image/join-us.svg";

const Hero = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8 lg:py-8 xl:px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
          <img src={HeroImage} alt="Hero 1" />
        </div>
        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 mx-4 flex flex-col justify-center ">
          <h1 className="text-[40px] md:text-[52] text-center  md:text-[69px] leading-tight ">
            Jadilah Bagian Untuk
            <span className="text-blue"> Bangga BI Bermakna </span>
          </h1>
          <p className="font-sans text-inter text-center text-base md:text-[18px] text-grey opacity-50 mt-2 md:mt-5 mx-auto w-3/4 flex justify-center">
            Program Magang di Kantor Perwakilan Bank Indonesia Provinsi Jawa
            Tengah
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-5 md:mt-8 lg:mt-5 justify-center items-center ">
            <a href="/daftar">
              <button className="bg-blue hover:bg-blueHover text-white font-circular font-bold px-20 py-4 rounded-full drop-shadow-getStarted ">
                Daftar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
