"use client";
import React, { useState } from "react";

const BrandSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div>
      <h3>Select Brand:</h3>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Samsung"
            checked={selectedBrand === "Samsung"}
            onChange={handleBrandChange}
          />
          Samsung
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Mi"
            checked={selectedBrand === "Mi"}
            onChange={handleBrandChange}
          />
          Mi
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Apple"
            checked={selectedBrand === "Apple"}
            onChange={handleBrandChange}
          />
          Apple
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Nokia"
            checked={selectedBrand === "Nokia"}
            onChange={handleBrandChange}
          />
          Nokia
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="brand"
            value="Huawei"
            checked={selectedBrand === "Huawei"}
            onChange={handleBrandChange}
          />
          Huawei
        </label>
      </div>
      <label>
        <input
          type="radio"
          name="brand"
          value="Oppo"
          checked={selectedBrand === "Oppo"}
          onChange={handleBrandChange}
        />
        Oppo
      </label>
      {selectedBrand && <p>You selected: {selectedBrand}</p>}
    </div>
  );
};

export default BrandSelector;
