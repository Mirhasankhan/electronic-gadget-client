import Image from "next/image";
import vercelImag from "../../assets/vercel.svg";
import img1 from "../../assets/heino.jpg";
import img2 from "../../assets/watch.jpg";

const Carousel = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div style={{ height: "500px", width: "100%", position: "relative" }}>
            <Image layout="fill" src={img1} alt="" objectFit="cover" />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div style={{ height: "500px", width: "100%", position: "relative" }}>
            <Image layout="fill" src={vercelImag} alt="" objectFit="cover" />
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div style={{ height: "500px", width: "100%", position: "relative" }}>
            <Image layout="fill" src={img2} alt="" objectFit="cover" />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Carousel;
