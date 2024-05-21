import { TProduct } from "@/types/product.type";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingProducts = async () => {
  const res = await fetch(
    "https://electronic-gadget-server.vercel.app/allProducts",
    {
      cache: "no-store",
    }
  );
  const trending = await res.json();
  const sortedProducts = trending.sort(
    (a: TProduct, b: TProduct) => b.rating - a.rating
  );

  return (
    <div className="mx-6 md:mx-24 mt-24 pb-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Trending Products</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisi ing elit. <br />
            Delectus eius, eum saepe explicabo.
          </p>
        </div>
        <div>
          <Link href="/products">
            <button className="bg-black p-3 rounded-md text-white">
              View All Products
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {sortedProducts?.slice(0, 6).map((trend: TProduct) => (
          <div key={trend._id}>
            <Link href={`/products/${trend._id}`}>
              <div
                style={{ height: "220px", width: "100%", position: "relative" }}
              >
                <Image
                  className="border rounded-md hover:scale-110 transition-transform duration-600"
                  layout="fill"
                  src={trend.image}
                  alt=""
                />
              </div>
              <h1>{trend.name}</h1>
              <div className="flex items-center gap-2 mt-4 border-b pb-6">
                <h1 className="">${trend.price}</h1>
                <Rating
                  className=""
                  style={{ maxWidth: 100 }}
                  value={Math.round(trend.rating)}
                  readOnly
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
