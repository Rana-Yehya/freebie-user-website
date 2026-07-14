"use client";

export default function SideMenu({ onClick }: { onClick: () => void }) {
  const sidebarItems = [
    {
      name: "Dashboard",
      href: "#",
      current: true,
    },
    {
      name: "Audience",
      href: "#",
    },
    {
      name: "Posts",
      href: "#",
    },
    {
      name: "Schedules",
      href: "#",
    },
    {
      name: "Earnings and taxes",
      href: "#",
    },
    {
      name: "Refunds",
      href: "#",
    },
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Settings",
      href: "#",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-slate-200 w-full h-full flex flex-col fixed top-0 left-0 max-w-[264px] py-6 overflow-y-auto transition-all duration-300 z-40 shadow-2xl shadow-slate-200/80"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img
              src="https://readymadeui.com/logo-alt.svg"
              className="w-8 h-8"
              alt="company logo"
            />
            <div className="text-base text-slate-600 font-semibold">Madeui</div>
          </div>
          <button
            type="button"
            onClick={onClick}
            aria-label="Collapse sidebar"
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 hover:bg-slate-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`size-3.5 fill-slate-400 transition-transform duration-300 rotate-0"
              }`}
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M21.683 237.115c-10.4 10.4-10.4 27.373 0 37.773l203.702 203.694c10.415 10.416 27.358 10.416 37.773 0l11.394-11.394c10.425-10.424 10.427-27.358 0-37.785l-154.525-154.51c-10.427-10.426-10.427-27.363 0-37.788L274.552 82.594c10.427-10.426 10.426-27.359-.001-37.785l-11.395-11.394c-10.399-10.4-27.373-10.4-37.772 0zM441.136 33.413c10.41-10.411 27.369-10.41 37.779 0l11.394 11.394c10.405 10.405 10.406 27.38 0 37.786L335.792 237.105c-10.426 10.426-10.426 27.361 0 37.787L490.31 429.404c10.41 10.409 10.409 27.377 0 37.785l-11.394 11.395c-10.414 10.414-27.364 10.415-37.779 0L255.53 292.97c-52.065 52.014-38.896 38.823-.038-.038l-18.044-18.044c-10.406-10.407-10.405-27.368 0-37.774z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <hr className="my-6 border-slate-200" />

        {/* Navigation */}
        <nav aria-label="Primary sidebar navigation" className="flex-1 px-3">
          <ul className="space-y-0.5 text-sm text-slate-700 font-medium">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    item.current
                      ? "text-slate-900 bg-slate-100 shadow-sm"
                      : "hover:text-slate-900 hover:bg-slate-50"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <a
          href="#"
          className="flex items-center gap-3 cursor-pointer mt-6 px-4 pt-4 border-t border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <img
            src="https://readymadeui.com/team-2.webp"
            className="w-10 h-10 rounded-full border border-slate-200"
            alt="User avatar"
          />
          <div>
            <p className="text-sm text-slate-800 font-medium">John Doe</p>
            <p className="text-xs text-slate-500 mt-0.5">Active free account</p>
          </div>
        </a>
      </aside>
    </>
  );
}
