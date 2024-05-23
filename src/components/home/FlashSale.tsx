import { TProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountdownTimer from "./CountDown";

const FlashSale = async () => {
  const res = await fetch(
    "https://electronic-gadget-server.vercel.app/allProducts",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const allProducts = await res.json();
  const flashSaleProduct = allProducts.filter(
    (flash: TProduct) => flash.flash_sale == true
  );

  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return (
    <div className="mx-6 md:mx-24 pb-6 mt-12">
      <div>
        <h1 className="text-2xl font-semibold">Flash Sale</h1>
      </div>
      <div className="flex justify-between items-center border-b pb-2">
        <div className="md:flex gap-24">
          <h1 className="text-red-400 pb-3">On Sale Now</h1>
          <div className="flex gap-2">
            Ending In :<CountdownTimer targetDate={targetDate}></CountdownTimer>
          </div>
        </div>
        <div>
          <Link href="/flash-sale">
            <button className="bg-black p-3 rounded-md text-white">
              See All
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 mt-3">
        {flashSaleProduct?.slice(0, 4).map((trend: TProduct) => (
          <div
            className="shadow-md rounded-md p-2 hover:border-2 overflow-hidden"
            key={trend._id}
          >
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
              <h1 className="text-xl font-semibold py-2">{trend.name}</h1>
              <p className="text-orange-400">
                ${(trend.price * 0.9).toFixed(2)}
              </p>
              <h1>
                <span className="line-through">${trend.price}</span> - 10%
              </h1>
              <div className="flex gap-3 mt-2">
                <button className="border border-red-400 text-red-400 w-full rounded-md py-1">
                  Buy Now
                </button>
                <button className="border border-green-400 text-green-400 w-full rounded-md py-1">
                  Add To Cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
