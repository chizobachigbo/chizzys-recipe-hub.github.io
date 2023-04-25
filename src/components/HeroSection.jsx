import { Link } from "react-router-dom";

import CustomImage from "./CustomImage";

export default function HeroSection() {
  const images = [
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img1.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img2.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img3.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img4.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img5.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img6.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img7.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img8.jpg",
    "https://chizobachigbo.github.io/recipe-hub/img/gallery/img9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h2 className="title">Who Are We?</h2>
        <p className="info">
          Chizzy's Recipe Hub is a place where you can search and explore
          various recipes and cuisines from any part of the world. Our colorful
          and interactive display guarantees a seamless and efficient experience
          while looking up desired recipes. Our service is absolutely free,
          explore and have fun!
        </p>
        <Link className="btn" to="/recipes">
          explore now
        </Link>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
