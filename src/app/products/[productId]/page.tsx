import DetailCard from "@/components/Product/DetailCard";
import { TProduct } from "@/types/product.type";

type TParams = {
  params: {
    productId: string;
  };
};

const Product = async ({ params }: TParams) => {
  const res = await fetch(
    `https://electronic-gadget-server.vercel.app/allProducts/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const singleProduct = await res.json();

  return (
    <div>
      {singleProduct?.map((sp: TProduct) => (
        <DetailCard key={sp._id} single={sp}></DetailCard>
      ))}
    </div>
  );
};

export default Product;
