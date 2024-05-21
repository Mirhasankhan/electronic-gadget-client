import { TProduct } from "@/types/product.type";
import Image from "next/image";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://electronic-gadget-server.vercel.app/allProducts",
    {
      cache: "no-store",
    }
  );
  const allProducts = await res.json();
  return (
    <div>
      <h1 className="text-2xl font-semibold p-4">All Products</h1>
      <div className="mx-4 border mb-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-600 text-white">
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Flash Sale</th>
              </tr>
            </thead>
            <tbody>
              {allProducts?.map((product: TProduct, index: number) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <Image
                      className="rounded-full"
                      src={product.image}
                      height={100}
                      width={100}
                      alt=""
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>{product.flash_sale ? "Available" : "Not Available"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
