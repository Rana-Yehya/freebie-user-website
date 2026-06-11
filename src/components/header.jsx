import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-autoxl:px-0">
        <div className="bg-white flex items-center justify-between gap-x-4 py-2.5 pl-5 pr-2.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-stretch lg:rounded-br-[1.375rem] lg:rounded-bl-[1.375rem]">
          <div className="flex items-center gap-x-10">
            <a href="/" title="Home">
              <img
                className="h-8"
                src="https://tailkits.com/ui/iframe/assets/img/logo.svg"
                alt="Logo"
              />
            </a>
            <span className="hidden h-4 w-[1px] bg-neutral-300 lg:block"></span>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center">
              <li>
                <a
                  className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                  href="#"
                >
                  About
                </a>
              </li>
              {/* <li>
                  <a
                    className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                    href="#"
                  >
                    Categories
                  </a>
                </li> */}

              {/* <li>
                  <a
                    className="flex items-center gap-x-1.5 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                    href="#"
                  >
                    Contact
                    <svg
                      className="h-4 text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li> */}
              <li>
                <a
                  className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-10 justify-self-end">
            <span className="hidden h-4 w-[1px] bg-neutral-300 lg:block"></span>
            <div className="flex items-center gap-x-3 lg:gap-x-2">
              <Link
                href="/login"
                title="Log in"
                className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] border border-neutral-100 bg-white text-neutral-700 hover:border-neutral-200 hover:bg-neutral-100 disabled:border-slate-900/5 disabled:bg-slate-50/30 disabled:text-slate-900/20 px-3 py-2 rounded-[0.625rem] hidden lg:flex"
              >
                Log in
              </Link>
              <Link
                href="/register"
                title="Register"
                className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] bg-primary text-white hover:bg-secondary disabled:bg-slate-900/30 disabled:text-slate-50/70 px-3 py-2 rounded-[0.625rem] flex"
              >
                Register
                {/* <span className="ml-1 text-slate-400"> - 14 days</span> */}
              </Link>
              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden"
                title="Open menu"
              >
                <svg
                  className="h-6 text-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    //  <div className="bg-white dark:bg-gray-900">

    //   <div className="relative isolate px-6 pt-14 lg:px-8">
    //     {/* <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
    //       <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
    //     </div> */}
    //     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    //       <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    //         <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
    //           Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
    //         </div>
    //       </div>
    //       <div className="text-center">
    //         <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">Data to enrich your online business</h1>
    //         <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
    //         <div className="mt-10 flex items-center justify-center gap-x-6">
    //           <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Get started</a>
    //           <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
    //       <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
    //     </div> */}
    //   </div>
    // </div>
  );
}
