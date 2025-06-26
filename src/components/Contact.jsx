import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const textSplit = SplitText.create("#contact h2", {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.from(textSplit.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.04,
    });
    tl.from("#contact h3 , #contact p", {
      opacity: 0,
      yPercent: 100,
      stagger: 0.04,
    });
    tl.to("#f-right-leaf,#f-left-leaf", {
      y: "-50",
      duration: 1,
      ease: "power1.inOut",
    },"<");
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find Us</h2>
        <div>
          <h3>Visit our Bar</h3>
          <p>456, #404 No Bug Found, Los Angeles</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>mooenmalik374@gmail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((hour) => (
            <p key={hour.day}>
              {hour.day} : {hour.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className=" flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
