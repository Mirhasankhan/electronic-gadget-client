"use client";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const BrandSelector: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="border p-2 md:p-8 h-60">
      <h3 className="underline text-center">Brands</h3>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Samsung"
            className="hidden"
            checked={selectedBrand === "Samsung"}
            onChange={handleBrandChange}
          />
          <Link href={`/products?brand=Samsung`}>Samsung</Link>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            className="hidden"
            value="Mi"
            checked={selectedBrand === "Mi"}
            onChange={handleBrandChange}
          />
          <Link href={`/products?brand=Mi`}>Mi</Link>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Apple"
            className="hidden"
            checked={selectedBrand === "Apple"}
            onChange={handleBrandChange}
          />
          <Link href={`/products?brand=Apple`}>Apple</Link>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Nokia"
            className="hidden"
            checked={selectedBrand === "Nokia"}
            onChange={handleBrandChange}
          />
          <Link href={`/products?brand=Nokia`}>Nokia</Link>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Huawei"
            className="hidden"
            checked={selectedBrand === "Huawei"}
            onChange={handleBrandChange}
          />
          <Link href={`/products?brand=Huawei`}>Huawei</Link>
        </label>
      </div>
      <label>
        <input
          type="radio"
          name="brand"
          value="Oppo"
          className="hidden"
          checked={selectedBrand === "Oppo"}
          onChange={handleBrandChange}
        />
        <Link href={`/products?brand=Oppo`}>Oppo</Link>
      </label>
    </div>
  );
};

export default BrandSelector;
