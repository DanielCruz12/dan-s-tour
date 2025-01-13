'use client'
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const UpTop = () => {
  const [showBtn, setShowBtn] = useState("myBtn none");

  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowBtn("myBtn");
      } else {
        setShowBtn("none");
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      onClick={topFunction}
      id="myBtn"
      className={showBtn}
      title="Go to top"
    >
      <ArrowUp />
    </button>
  );
};

export default UpTop;
