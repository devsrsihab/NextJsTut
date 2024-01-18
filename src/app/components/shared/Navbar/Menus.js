
'use client'


const Menus = () => {

  const handlerAlert = (innerText) => {
    alert(innerText);
  };



  return (
    <nav
      aria-label="Header Navigation"
      className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
    >
      <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
        <li className="lg:mr-12">
          <a
            className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="lg:mr-12">
          <a
            className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#"
          >
            Pricing
          </a>
        </li>
        <li className="lg:mr-12">
          <a
            className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#"
          >
            Contact
          </a>
        </li>
        <li className="lg:mr-12">
          <a
            className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#"
          >
            FAQ
          </a>
        </li>
      </ul>
      <hr className="mt-4 w-full lg:hidden" />
      <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <a
          href="#"
          title=""
          className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
        >
          {" "}
          Log in{" "}
        </a>
        <a
          onClick={(e) => handlerAlert(e.target.innerText)}
          href="#"
          title=""
          className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
        >
          Get free trial
        </a>
      </div>
    </nav>
  );
};

export default Menus;
