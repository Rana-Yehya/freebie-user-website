import Image from "next/image";

export default async function Home() {
  return (
    <section className="pt-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-start pb-80 sm:items-center sm:text-center md:mx-4 lg:mx-8 lg:w-5/12 lg:items-start lg:pb-0 lg:text-left xl:mx-10">
          <div className="items-center justify-center rounded-full text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] inline-flex bg-white text-neutral-700 px-2.5 py-1">
            Introducing saaslandings
          </div>
          <div className="bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl mt-4 sm:mx-auto sm:w-2/3 sm:text-center md:w-1/2 lg:mx-0 lg:mt-6 lg:w-5/6 lg:text-left lg:leading-tight">
            Redefining SaaS Standards
          </div>
          <p className="mt-4 font-medium text-slate-600 sm:mx-auto sm:w-2/3 sm:text-center md:w-1/2 lg:mx-0 lg:mt-6 lg:w-11/12 lg:text-left">
            Join the league of mavericks and push the boundaries of SaaS design
            with inspiring design resources
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-12">
            <a
              href="#"
              title="Learn more"
              className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] border border-neutral-100 bg-white text-neutral-700 hover:border-neutral-200 hover:bg-neutral-100 disabled:border-slate-900/5 disabled:bg-slate-50/30 disabled:text-slate-900/20 px-4 py-2.5 rounded-[0.625rem] flex"
            >
              <svg
                className="shrink-0 mr-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Learn more
              <svg
                className="shrink-0 ml-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              title="Try free"
              className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-900/30 disabled:text-slate-50/70 px-4 py-2.5 rounded-[0.625rem] flex"
            >
              Try free
              <span className="ml-1 text-slate-400"> - 14 days</span>
              <svg
                className="shrink-0 ml-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <img
        className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
        src="https://tailkits.com/ui/iframe/assets/img/bg-12.png"
        alt="Background image"
      /> */
}
