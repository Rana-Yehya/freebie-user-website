import axios from "axios";
import ProductCard from "../../product/_components/product-card";

type User = {
  id: number;
  userId: string;
  username: string;
  title: string;
  body: string;
};
export default async function ProductDisplay() {
  try {
    // const agent = new HttpsProxyAgent("http://172.67.167.151:*");
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const response = await axios.get<User[]>(
    //   "https://fake-json-api.mock.beeceptor.com/users",
    //   {
    //     // httpsAgent: agent,
    //     timeout: 10000, // 10 second timeout
    //   },
    // );
    // const users: User[] = response.data;
    // // console.log(users);
    // return [1, 2, 3, 4, 5, 6].map((product, index) => (
    //   <div
    //     key={index}
    //     className="w-72 sm:w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    //   >
    //     <ProductCard />
    //   </div>
    // ));
    return [1, 2, 3, 4, 5, 6].map((product, index) => (
      <div
        key={index}
        className="w-72 sm:w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <ProductCard />
      </div>
    ));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
