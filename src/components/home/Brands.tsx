import brand1 from "../../assets/logo.avif";
import brand2 from "../../assets/oppo2.png";
import brand3 from "../../assets/samsung.jpeg";
import brand4 from "../../assets/huawei.jpg";
import brand5 from "../../assets/nokia.png";
import brand6 from "../../assets/mi.png";
import Image from "next/image";
import Link from "next/link";

const Brands = async () => {
  // const res = await fetch("http://localhost:5000/brands");
  // const allBrands = await res.json();
  return (
    <div className="mx-6 md:mx-24 my-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Top Brands</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          eligendi <br /> dolorum nemo eos? Esse, dicta ab!
        </p>
      </div>
      <div className="md:grid grid-cols-4 gap-8 mt-8">
        <Link href={`/products?brand=Nokia`}>
          <div style={{ height: "320px", width: "100%", position: "relative" }}>
            <Image
              className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
              layout="fill"
              src={brand5}
              alt=""
            />
          </div>
        </Link>
        <div className="flex flex-col gap-3">
          <Link href={`/products?brand=Mi`}>
            <div
              style={{ height: "150px", width: "100%", position: "relative" }}
            >
              <Image
                className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
                layout="fill"
                src={brand6}
                alt=""
              />
            </div>
          </Link>
          <Link href={`/products?brand=Samsung`}>
            <div
              style={{ height: "150px", width: "100%", position: "relative" }}
            >
              <Image
                className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
                layout="fill"
                src={brand3}
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link href={`/products?brand=Oppo`}>
            <div
              style={{ height: "150px", width: "100%", position: "relative" }}
            >
              <Image
                className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
                layout="fill"
                src={brand2}
                alt=""
              />
            </div>
          </Link>
          <Link href={`/products?brand=Huawei`}>
            <div
              style={{ height: "150px", width: "100%", position: "relative" }}
            >
              <Image
                className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
                layout="fill"
                src={brand4}
                alt=""
              />
            </div>
          </Link>
        </div>
        <Link href={`/products?brand=Apple`}>
          <div style={{ height: "320px", width: "100%", position: "relative" }}>
            <Image
              className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
              layout="fill"
              src={brand1}
              alt=""
            />
          </div>
        </Link>
      </div>
      {/* <div className="grid grid-cols-3 gap-3">
        {allBrands?.map(
          (brand: { _id: string; brand: string; image: string }) => (
            <div key={brand._id}>
              <Link href={`/products?brand=${brand.brand}`}>
                <div
                  style={{
                    height: "320px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    className="border rounded-md shadow-xl hover:scale-110 transition-transform duration-600"
                    layout="fill"
                    src={brand.image}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          )
        )}
      </div> */}
      <div className="flex justify-center mt-5">
        <button className="bg-black p-3 rounded-md text-white">
          View All Brands
        </button>
      </div>
    </div>
  );
};

export default Brands;
