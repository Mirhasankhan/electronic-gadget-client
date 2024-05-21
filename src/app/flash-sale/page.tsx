import CountdownTimer from "@/components/home/CountDown";
import { TProduct } from "@/types/product.type";
import Image from "next/image";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://electronic-gadget-server.vercel.app/allProducts",
    {
      cache: "no-store",
    }
  );
  const allProducts = await res.json();
  const flashSaleProduct = allProducts.filter(
    (flash: TProduct) => flash.flash_sale == true
  );
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return (
    <div>
      <div>
        <h1 className="text-4xl py-6 text-center  font-semibold">Flash Sale</h1>
      </div>
      <div className="mx-6 md:mx-24 pb-3">
        <div className="md:flex gap-24">
          <h1 className="text-red-400 border-b-4 mb-2 border-red-500">
            On Sale Now
          </h1>
          <div className="flex gap-2">
            Ending In :<CountdownTimer targetDate={targetDate}></CountdownTimer>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {flashSaleProduct?.map((trend: TProduct) => (
            <div className="border p-2 rounded-md" key={trend._id}>
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
              <p className="text-orange-400">
                ${(trend.price * 0.9).toFixed(2)}
              </p>
              <h1>
                <span className="line-through">${trend.price}</span> - 10%
              </h1>
              <div className="flex gap-2 mt-2">
                <button className="border border-red-400 text-red-400 w-full rounded-sm py-1">
                  Buy Now
                </button>
                <button className="border border-green-400 text-green-400 w-full rounded-sm py-1">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
