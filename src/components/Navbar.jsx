import gsap from "gsap";
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: "bottom top",
      },
    });
    navTween.fromTo(navRef.current, { backgroundColor: "transparent" },{
      backgroundColor:"#00000050",
      backgroundFilter:"blur(10px)",
      duration:1,
      ease:"power1.inOut"
    });
  });

  return (
    <nav ref={navRef}>
      <div>
        <a className=" flex items-center gap-2 " href="#home">
          <img src="/images/logo.png" alt="Valvet" />
          <p>SipVerse</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
