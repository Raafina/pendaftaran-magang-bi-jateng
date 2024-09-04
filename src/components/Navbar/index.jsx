import BILogo from "../../assets/logo/bank-indonesia-with-text.svg";

const Navbar = () => {
  return (
    <>
      <nav class="border">
        <div class="py-4 px-4">
          <div class="container mx-auto flex justify-between">
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
