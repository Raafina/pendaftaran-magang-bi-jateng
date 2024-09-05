import BILogo from "../../assets/logo/bank-indonesia-with-text.svg";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900 border">
      <div class="py-4 px-4">
        <div className="container mx-auto flex flex-col">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-6 mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img src={BILogo} class="h-12" alt="BI Logo" />
              </a>
            </div>
            <div class="col-span-12 lg:col-span-6 md:mt-5 lg:mt-0 lg:text-end">
              <div className=" font-sans text-grey opacity-80">
                <h2 class="mb-2  font-bold dark:text-white text-blue">
                  CONTACT US
                </h2>
                <ul>
                  <li>
                    <a href="https://maps.app.goo.gl/6YCtv4GhMYqq1X3u8">
                      Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.app.goo.gl/6YCtv4GhMYqq1X3u8">
                      Jl. Imam Bardjo SH No.4, Pleburan, Kec. Semarang Sel.,
                      Kota Semarang, Jawa Tengah 50241
                    </a>
                  </li>
                  <li>
                    <a href="mailto:humas.bijateng@bi.go.id">
                      humas.bijateng@bi.go.id
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" class="hover:underline">
                Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://x.com/KPwBI_Jateng"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="https://www.instagram.com/bank_indonesia_jateng/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.027.26 2.516.436a5.923 5.923 0 0 1 2.07 1.282 5.923 5.923 0 0 1 1.282 2.07c.176.489.378 1.31.436 2.516.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.26 2.027-.436 2.516a5.923 5.923 0 0 1-1.282 2.07 5.923 5.923 0 0 1-2.07 1.282c-.489.176-1.31.378-2.516.436-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.027-.26-2.516-.436a5.923 5.923 0 0 1-2.07-1.282 5.923 5.923 0 0 1-1.282-2.07c-.176-.489-.378-1.31-.436-2.516-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.206.26-2.027.436-2.516a5.923 5.923 0 0 1 1.282-2.07 5.923 5.923 0 0 1 2.07-1.282c.489-.176 1.31-.378 2.516-.436 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.015-4.947.072-1.276.057-2.182.24-2.944.513a7.921 7.921 0 0 0-2.916 1.864 7.921 7.921 0 0 0-1.864 2.916c-.273.762-.456 1.668-.513 2.944-.057 1.276-.072 1.688-.072 4.947s.015 3.67.072 4.947c.057 1.276.24 2.182.513 2.944a7.921 7.921 0 0 0 1.864 2.916 7.921 7.921 0 0 0 2.916 1.864c.762.273 1.668.456 2.944.513 1.276.057 1.688.072 4.947.072s3.67-.015 4.947-.072c1.276-.057 2.182-.24 2.944-.513a7.921 7.921 0 0 0 2.916-1.864 7.921 7.921 0 0 0 1.864-2.916c.273-.762.456-1.668.513-2.944.057-1.276.072-1.688.072-4.947s-.015-3.67-.072-4.947c-.057-1.276-.24-2.182-.513-2.944a7.921 7.921 0 0 0-1.864-2.916 7.921 7.921 0 0 0-2.916-1.864c-.762-.273-1.668-.456-2.944-.513-1.276-.057-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
                </svg>
                <span class="sr-only">Instagram account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
