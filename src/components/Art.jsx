import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        scrub: 1.5,
        pin: true,
      },
    });
    maskTL
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#mask-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className=" container mx-auto h-full pt-20">
        <h2 className="wil-fade">The Art</h2>
        <div className=" content ">
          <ul className="space-y-4n will-fade">
            {goodLists.map((list, index) => (
              <li key={index} className=" flex items-center gap-2 ">
                <img src="/images/check.png" alt="check-image" />
                <p>{list}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail-image"
              className=" abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4n will-fade">
            {featureLists.map((list, index) => (
              <li
                key={index}
                className=" flex items-center justify-start gap-2 "
              >
                <img src="/images/check.png" alt="check-image" />
                <p className=" md:w-fit w-60">{list}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-worthy Perfection</h2>
          <div id="mask-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
