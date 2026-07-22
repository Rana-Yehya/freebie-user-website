import TextSpaceSeparation from "@/components/shared/text/text-space-separation";

export default function FaqTitleDescription() {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
        FAQ
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        <TextSpaceSeparation title="Frequently Asked Questions" />
      </h2>
      <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
        <TextSpaceSeparation title="Everything you need to know about our platform. Can't find what you're looking for? Contact our support team." />
      </p>
    </div>
  );
}
