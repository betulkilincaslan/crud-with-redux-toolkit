import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showScrollToTop, setshowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollToTop);
    };
  });

  const checkScrollToTop = () => {
    if (!showScrollToTop && window.pageYOffset > 300) {
      setshowScrollToTop(true);
    } else if (showScrollToTop && window.pageYOffset <= 300) {
      setshowScrollToTop(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`bg-peterRiver hover:bg-belizeHole border-none rounded-full cursor-pointer w-8 h-8 fixed bottom-8 md:right-12 right-8 transition-all duration-200 hover:scale-110 focus:scale-90 ${
        showScrollToTop ? "initial" : "hidden"
      }`}
      onClick={scrollTop}
    >
      <i className="bx bxs-chevron-up text-2xl"></i>
    </button>
  );
};

export default ScrollToTopButton;
