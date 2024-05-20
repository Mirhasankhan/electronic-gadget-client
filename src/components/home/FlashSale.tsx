import { TProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountdownTimer from "./CountDown";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/allProducts", {
    cache: "no-store",
  });
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
        <div className="flex gap-24">
          <h1 className="text-red-400">On Sale Now</h1>
          <div className="flex gap-2">
            Ending In :<CountdownTimer targetDate={targetDate}></CountdownTimer>
          </div>
        </div>
        <div>
          <Link href="/flash-sale">
            <button className="bg-black p-3 rounded-md text-white">
              View All
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-3">
        {flashSaleProduct?.slice(0, 4).map((trend: TProduct) => (
          <div
            className="shadow-md rounded-md p-2 hover:border-2"
            key={trend._id}
          >
            <Link href={`/products/${trend._id}`}>
              <Image
                className="rounded-md"
                src={trend.image}
                width={350}
                height={100}
                alt=""
              />
              <h1>{trend.name}</h1>
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
