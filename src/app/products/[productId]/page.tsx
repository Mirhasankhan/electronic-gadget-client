import DetailCard from "@/components/Product/DetailCard";
import { TProduct } from "@/types/product.type";

type TParams = {
  params: {
    productId: string;
  };
};

const generateStaticParams = async () => {
  const res = await fetch(
    "https://electronic-gadget-server.vercel.app/allProducts"
  );
  const product = await res.json();
  return product.slice(0, 9).map((p: TProduct) => ({
    productId: p._id,
  }));
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
