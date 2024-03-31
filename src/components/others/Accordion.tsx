import React from "react";
import IconCross from "../../assets/images/icon-cross.png";
import { AccordionProps } from "../../types";

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  show,
  onChange,
}) => {
  return (
    <>
      <div
        className="flex items-center justify-between bg-[#2d2d2d] p-6 mt-2 cursor-pointer"
        onClick={onChange}
      >
        <label className="text-2xl">{title}</label>
        <div>
          <img
            className={`w-12 h-12 transition-transform ${
              !show ? "rotate-45" : ""
            }`}
            src={IconCross}
            alt="close"
          />
        </div>
      </div>
      {show && <div className="mt-[2px] bg-[#2d2d2d] p-6">{children}</div>}
    </>
  );
};

export default Accordion;
