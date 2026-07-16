import { Suspense } from "react";
import FaqQuestions from "./faq-question";
import FaqTitleDescription from "./faq-title-description";
import FAQForm from "./faq-form";

export default function FAQMenuHome() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqTitleDescription />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <Suspense
              fallback={
                <div className="text-center py-8 text-slate-500">
                  Loading...
                </div>
              }
            >
              <FaqQuestions />
            </Suspense>
          </div>

          <FAQForm />
        </div>
      </div>
    </section>
  );
}
