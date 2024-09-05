import BILogo from "../../assets/logo/bank-indonesia-with-text.svg";

const Navbar = () => {
  return (
    <>
      <nav class="border">
        <div class="py-2 md:py-4 md:px-4 ">
          <div class="container mx-auto flex md:justify-start justify-center">
            <a href="/">
              <img src={BILogo} class="h-12" alt="BI Logo" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
