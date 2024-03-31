import React, { Fragment, useState } from "react";
import { HOME_LITERALS } from "../../../constants";
import { Accordion } from "../../../components";

export const FAQ: React.FC = () => {
  const [accordionShow, setAccordionShow] = useState(-1);

  return (
    <div className="flex justify-center py-12">
      <div className="text-white max-w-[1200px] w-full">
        <h1 className="text-5xl text-center font-bold my-6">
          Frequently Asked Questions
        </h1>
        <div>
          {HOME_LITERALS.faqData?.map((item) => {
            return (
              <Accordion
                key={item.id}
                title={item.title}
                show={accordionShow === item.id}
                onChange={() => setAccordionShow(item.id)}
              >
                {item.description.map((desc) => {
                  return (
                    <Fragment key={desc}>
                      <p className="text-2xl">{desc}</p>
                      <br />
                    </Fragment>
                  );
                })}
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};
