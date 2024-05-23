import BrandSelector from "@/components/shared/Filter";
import { TProduct } from "@/types/product.type";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TSearch = {
  searchParams: {
    brand: string;
  };
};

const Products = async ({ searchParams }: TSearch) => {
  const url =
    searchParams && searchParams.brand
      ? `https://electronic-gadget-server.vercel.app/allProducts?brand=${searchParams.brand}`
      : "https://electronic-gadget-server.vercel.app/allProducts";
  const res = await fetch(url, {
    cache: "no-store",
  });
  const allProducts = await res.json();

  return (
    <div className="md:grid grid-cols-5 mx-6 md:mx-14 gap-3 mt-6 pb-3">
      <div className="col-span-1">
        <BrandSelector />
      </div>
      <div className="col-span-4">
        <h1 className="font-semibold text-xl md:text-2xl py-4 pl-6">
          Our Collection Of Products
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {allProducts?.map((p: TProduct) => (
            <div className="border p-2 overflow-hidden rounded-md" key={p._id}>
              <Link href={`/products/${p._id}`}>
                <div
                  style={{
                    height: "220px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    className="border rounded-md hover:scale-110 transition-transform duration-600"
                    layout="fill"
                    src={p.image}
                    alt=""
                  />
                </div>
                <h1 className="text-xl font-semibold py-2">{p.name}</h1>

                <p>{p.description}</p>
                <div className="flex items-center gap-2 mt-4 pb-1">
                  <h1 className="">${p.price}</h1>
                  <Rating
                    className=""
                    style={{ maxWidth: 100 }}
                    value={Math.round(p.rating)}
                    readOnly
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
