
'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Menus = () => {

  const pathname = usePathname()

  const router = useRouter()

  // handlerAlert
  const buyNow = () => {
    alert('Click ok to buy now')
    return  router.push('/')
  }



  return (
    <nav
      aria-label="Header Navigation"
      className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
    >
      <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
        <li className="lg:mr-12">
          <Link
            className={` ${pathname === '/' ? 'active' : '' }  rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="lg:mr-12">
          <Link
            className={`${pathname === '/pricing' ? 'active' : '' } rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2`}
            href="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li className="lg:mr-12">
          <button
            type="button"
            className={` ${pathname === '/contact' ? 'active' : '' } rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2`}
            onClick={() => router.push('/contact')}
          >
            Contact
          </button>
        </li>
        <li className="lg:mr-12">
          <Link
            className={`${pathname === '/contact/office' ? 'active' : '' } rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2`}
            href="/contact/office"
          >
            Contact Office
          </Link>
        </li>
        <li className="lg:mr-12">
          <Link
            className={`${pathname === '/faqs' ? 'active' : '' } rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2`}
            href="/faqs"
          >
            FAQ
          </Link>
        </li>
      </ul>
      <hr className="mt-4 w-full lg:hidden" />
      <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <Link
          href="/signin"
          title=""
          className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
        >
         Log in
        </Link>
        <a
          onClick={buyNow}
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
