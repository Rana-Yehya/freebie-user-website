"use client";
import { ContactUsSocialMediaIcon } from "@/components/shared/footer/social-media-icon";
import CustomButton from "@/components/ui/custom-button";
import Link from "next/link";

export default function ContactUsDetails() {
  return (
    <div className="px-4 md:px-8 mt-6 max-w-5xl mx-auto">
      {/* Header - Centered */}

      {/* Two Column Layout - Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info */}

        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
              Let's Talk
            </h2>
            <p className="text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-slate-900 text-base font-semibold">Email</h3>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="flex items-center justify-center bg-slate-200 w-10 h-10 p-2 rounded-full shrink-0">
                    <img
                      src="/envelope.svg"
                      style={{
                        filter:
                          "invert(49%) sepia(2%) saturate(4517%) hue-rotate(177deg) brightness(91%) contrast(98%)",
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <small className="block text-xs text-slate-500">Mail</small>
                    <Link
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-honey hover:text-honey-500 transition-colors"
                    >
                      info@example.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 text-base font-semibold">
                Socials
              </h3>
              <ul className="flex flex-wrap mt-4 gap-2">
                <ContactUsSocialMediaIcon />
              </ul>
            </div>
          </div>
        </div>
        {/* Right Column - Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John doe"
              className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@readymadeui.com"
              className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 800-259-854"
              className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 text-slate-900 font-medium text-sm inline-block"
            >
              Message
            </label>
            <textarea
              placeholder="Write message"
              rows={4}
              id="message"
              name="message"
              className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary transition-all resize-none"
            ></textarea>
          </div>

          <CustomButton
            onClick={() => {}}
            title="Send Message"
            className="w-full md:w-fit bg-primary hover:bg-honey hover:text-white transition-all"
          />
        </form>
      </div>
    </div>
  );
}
