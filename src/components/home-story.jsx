import Image from "next/image";
import Link from "next/link";
export default function HomeStory() {
  return (
    <section
      id="_blogdetails_fullwidth_v6_001"
      className="py-20 sm:py-24 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* <!-- Image --> */}
          <div
            data-motion="image"
            className="lg:col-span-6 rounded-3xl overflow-hidden h-80 lg:h-[500px]"
            style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
          >
            <Image
              data-motion="image"
              src="/about.png"
              alt="image"
              width={0}
              height={0}
              className="w-full object-cover"
              objectFit="contain"
              sizes="100vw"
              style={{
                opacity: 1,
                transform: "scale(1)",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          {/* <!-- Content --> */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">One Platform to Automate Your Entire Funnel</h3>
            <p className="text-slate-600 dark:text-neutral-400">From lead capture to conversion, automate every touchpoint with personalized messaging that converts.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* <!-- Feature 1 --> */}
            <div data-motion="card" className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl" style={{opacity: 1, transform: "translateY(0px)", filter: "blur(0px)"}}>
              <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
               
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Email Sequences</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm">Drip campaigns that nurture leads with perfectly timed messages.</p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div data-motion="card" className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl" style={{opacity: 1, transform: "translateY(0px)", filter: "blur(0px)"}}>
              <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
             
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Lead Scoring</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm">Automatically rank prospects based on engagement and fit.</p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div data-motion="card" className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl" style={{opacity: 1, transform: "translateY(0px)", filter: "blur(0px)"}}>
              <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">AI Personalization</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm">Dynamic content that adapts to each visitor's interests.</p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div data-motion="card" className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl" style={{opacity: 1, transform: "translateY(0px)", filter: "blur(0px)"}}>
              <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
              
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Revenue Attribution</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm">Track every touchpoint to understand what drives revenue.</p>
            </div>
          </div>

          <Link data-motion="button" href="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all w-fit" style={{opacity: 1, transform: "translateY(0px)", filter: "blur(0px)"}}>
            Start Automating
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg> */}
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
