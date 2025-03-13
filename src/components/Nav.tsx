import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/images/logo.png";

import config from "../config.json";

interface Props {
  isAbsolute: boolean;
}

const Nav = ({ isAbsolute }: Props) => {
  const [showNav, setShowNav] = useState(false);
  gsap.registerPlugin(useGSAP);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const mobileNavRef = useRef<HTMLUListElement>(null);

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.to(mobileNavRef.current, {
      height: "auto",
      duration: 0.3,
      ease: "power1.inOut",
    });
  });

  const toggleTimeline = contextSafe(() => {
    setShowNav(!showNav);
  });

  useEffect(() => {
    if (showNav) {
      if (tl.current) {
        tl.current.play();
      }
    } else {
      if (tl.current) {
        tl.current.reverse();
      }
    }
  }, [showNav]);

  return (
    <div>
      <div
        className={`navbar z-50 ${
          isAbsolute ? "absolute top-0 left-0 bg-transparent" : "bg-primary"
        } max-md:hidden py-4`}
      >
        <div className={`navbar-start ${isAbsolute ? "" : ""}`}>
          <ul className="menu menu-horizontal px-1">
            {config.pages.slice(1).map((page, index) => (
              <li
                key={index}
                className={`text-xl max-lg:text-sm ${
                  isAbsolute ? "" : ""
                } transition`}
              >
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost btn-xl" href="/">
            <img src={logo.src} className="w-72" alt="logo" />
          </a>
        </div>
        <div className="navbar-end max-xl:hidden">
          <a
            href={config.bookingLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent"
          >
            Book Your Free Chat
          </a>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isAbsolute ? "absolute top-0 left-0" : ""
        }  w-full h-full z-50 md:hidden`}
      >
        <div className="flex justify-between items-center py-4 px-4 sticky">
          <a className="btn btn-ghost btn-lg" href="/">
            <img src={logo.src} className="w-24" alt="logo" />
          </a>
          <button className="btn btn-ghost" onClick={toggleTimeline}>
            <Icon
              icon={showNav ? "mdi:close" : "mdi:menu"}
              className="text-5xl"
            />
          </button>
        </div>
        <ul
          ref={mobileNavRef}
          className={`flex flex-col overflow-hidden z-50 h-0`}
        >
          {config.pages.map((page, index) => (
            <li key={index} className="py-4 px-8">
              <a className="link link-hover" href={page.url}>
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
