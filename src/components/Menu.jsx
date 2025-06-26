"use client";
import { useRef, useState } from "react";
import { allCocktails } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Menu = () => {
  const contentRef = useRef(null);

  const [currIndex, setcurrIndex] = useState(0);
  const tc = allCocktails.length;
  const handleGoto = (index) => {
    const newIDX = (index + tc) % tc;
    setcurrIndex(newIDX);
  };

  const getCocktail = (indexOffset) => {
    return allCocktails[(currIndex + indexOffset + tc) % tc];
  };

  const currCocktail = getCocktail(0);
  const prevCocktail = getCocktail(-1);
  const nextCocktail = getCocktail(1);

  useGSAP(() => {
    gsap.fromTo("#title", {
      opacity: 0,
    } ,{
      opacity:1,
      duration:1
    });

    gsap.fromTo(".cocktail img",{
      opacity:0,
      xPercent:-100,

    },{
      xPercent:0,
      opacity:1,
      duration:1,
      ease:"power1.inOut"
    })
    gsap.fromTo(".details h2",{
      opacity:0,
      yPercent:100,
    },{
      opacity:1,
      yPercent:0,
      duration:1,
      ease:"power1.inOut"
    })
     gsap.fromTo(".details p",{
      opacity:0,
      yPercent:100,
    },{
      opacity:1,
      yPercent:0,
      duration:1,
      ease:"power1.inOut"
    })
  });

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currIndex;
          return (
            <button
              key={cocktail.id}
              className={
                isActive
                  ? " text-white border-white"
                  : " text-white/50 border-white/50"
              }
              onClick={() => handleGoto(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => handleGoto(currIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => handleGoto(currIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currCocktail.image}
            alt={currCocktail.name}
            className=" object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currCocktail.title}</h2>
            <p>{currCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
