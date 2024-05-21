import { TProduct } from "@/types/product.type";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnLight } from "react-icons/pi";

const DetailCard = ({ single }: { single: TProduct }) => {
  const { image, description, rating, price, name } = single;
  return (
    <div className=" mx-6 md:mx-14 my-5">
      <div className="grid grid-cols-7 gap-5">
        <div className="bg-green-400 col-span-1">hell</div>
        <div className="col-span-6 md:col-span-3 ">
          <div style={{ height: "320px", width: "100%", position: "relative" }}>
            <Image
              className="border rounded-md"
              layout="fill"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <h1 className="pt-5">{name}</h1>
          <div className="flex items-center mt-4 border-b pb-6">
            <h1 className="border-r-2 pr-2 mr-2">${price}</h1>
            <Rating
              className=""
              style={{ maxWidth: 100 }}
              value={Math.round(rating)}
              readOnly
            />
            <h1>(12 review)</h1>
          </div>
          <p className="pt-5"> {description}</p>
          <div className="flex items-center gap-2 pt-5 text-gray-500">
            <FaShippingFast />
            <p className="text-sm ">
              Free worldwide shipping on all orders over $100
            </p>
          </div>
          <div className="flex text-gray-500 items-center gap-2">
            <PiKeyReturnLight />
            <p className="text-sm text-gray-500">
              Delivers in: 3-7 Working Days Shipping & Retur
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl py-5">Description</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex
          officia porro perspiciatis, sunt pariatur eaque tenetur, ut accusamus
          quis nostrum voluptates doloribus non quisquam, aliquam ab obcaecati
          assumenda natus modi. Odit ipsam ullam, nesciunt sint earum alias
          soluta et rerum, necessitatibus aperiam unde! Vel non ratione sunt
          quidem molestias praesentium provident, molestiae, placeat facilis
          laboriosam accusantium incidunt deserunt. Totam libero eaque, sit iste
          quam culpa voluptas perspiciatis omnis ab doloribus ut consequuntur
          quidem recusandae dolor, quis odio ipsam ducimus!
        </p>
        <ul className="list-disc mt-5 pl-5">
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailCard;
