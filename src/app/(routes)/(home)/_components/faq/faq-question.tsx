// components/faq/FaqQuestions.tsx (Server Component)
import axios from "axios";
import FaqItem from "./faq-item";
import { FAQ, FAQItem } from "../../../../../types/faq";
import NotFound from "../../../not-found";

// ✅ Server Component - fetches data and passes to client component
export default async function FaqQuestion() {
  try {
    const response = await axios.get<FAQ>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/faq`,
      {
        timeout: 10000,
      },
    );
    // console.log(response.data);
    const faqData: FAQItem[] = response.data.data ?? [];

    return (
      <div className="space-y-4">
        {faqData.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    );
  } catch (error) {
    return <NotFound />;
  }
}
