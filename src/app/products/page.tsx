import BrandSelector from "@/components/shared/Filter";
import { TProduct } from "@/types/product.type";
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
      ? `http://localhost:5000/allProducts?brand=${searchParams.brand}`
      : "http://localhost:5000/allProducts";
  const res = await fetch(url, {
    cache: "no-store",
  });
  const allProducts = await res.json();

  return (
    <div className="grid grid-cols-4 mx-6 md:mx-14 gap-3 mt-6 pb-3">
      <div className="col-span-1">
        <BrandSelector />
      </div>
      <div className="col-span-3">
        <h1 className="font-semibold text-2xl">Our Collection Of Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {allProducts?.map((p: TProduct) => (
            <div key={p._id}>
              <Link href={`/products/${p._id}`}>
                <h1>{p.brand}</h1>
                <Image src={p.image} width={500} height={500} alt="" />
                <h1>{p.name}</h1>

                <p>{p.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
