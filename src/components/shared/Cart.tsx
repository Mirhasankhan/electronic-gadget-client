// "use client";
// // components/Carousel.js
// import React, { useRef, useEffect } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import vercelImag from "../../assets/vercel.svg";
// import img1 from "../../assets/heino.jpg";
// import img2 from "../../assets/watch.jpg";

// const Carot = () => {
//   const [sliderRef, slider] = useKeenSlider({
//     loop: true,
//     mode: "snap",
//     spacing: 10,
//     breakpoints: {
//       "(min-width: 768px)": {
//         slidesPerView: 2,
//         spacing: 15,
//       },
//       "(min-width: 1024px)": {
//         slidesPerView: 3,
//         spacing: 20,
//       },
//     },
//   });
//   return (
//     <div ref={sliderRef} className="keen-slider">
//       <div className="keen-slider__slide">
//         <div style={{ height: "500px", width: "100%", position: "relative" }}>
//           <Image layout="fill" src={vercelImag} alt="" objectFit="cover" />
//         </div>
//       </div>
//       <div className="keen-slider__slide">
//         <div style={{ height: "500px", width: "100%", position: "relative" }}>
//           <Image layout="fill" src={img2} alt="" objectFit="cover" />
//         </div>
//       </div>
//       <div className="keen-slider__slide">
//         <div style={{ height: "500px", width: "100%", position: "relative" }}>
//           <Image layout="fill" src={img1} alt="" objectFit="cover" />
//         </div>
//       </div>
//       <div className="keen-slider__slide">
//         <div style={{ height: "500px", width: "100%", position: "relative" }}>
//           <Image layout="fill" src={img2} alt="" objectFit="cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carot;
import React from "react";

const Cart = () => {
  return <div>cart</div>;
};

export default Cart;
