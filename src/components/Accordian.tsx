import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordian = (): React.ReactElement => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  return (
    <div className="divide-y divide-copy-light">
      <motion.div
        className="relative"
        animate={checkedMap.one ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setCheckedMap({ ...checkedMap, one: !checkedMap.one })}
          className="flex h-12 w-full items-center rounded-t-lg bg-dm-foreground fill-primary-content"
        >
          <p className="ml-6 mr-auto text-xl font-extrabold">Our mission</p>
          <motion.div
            variants={{
              open: { rotate: 180, margin: "0 1.5rem 0 0" },
              closed: { rotate: 0, margin: "0 1.5rem 0 0" },
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          variants={{
            open: { height: "auto", opacity: 1, padding: ".75rem .75rem" },
            closed: {
              height: 0,
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className="w-full bg-dm-foreground/60 text-sm font-medium lg:text-lg"
        >
          Is to honorably attend the services of Fallen Officers across the
          country who have made the ultimate sacrifice, giving his/her life
          during the performance of their duties, by providing safety for the
          citizens of the United States. Our goal is to attend the services to
          give support to the families, department, and communities the officers
          serve.
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        className="relative"
        animate={checkedMap.two ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setCheckedMap({ ...checkedMap, two: !checkedMap.two })}
          className="flex h-12 w-full items-center bg-dm-foreground fill-primary-content"
        >
          <p className="ml-6 mr-auto text-xl font-extrabold">
            Origin of The Brotherhood
          </p>
          <motion.div
            variants={{
              open: { rotate: 180, margin: "0 1.5rem 0 0" },
              closed: { rotate: 0, margin: "0 1.5rem 0 0" },
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          variants={{
            open: { height: "auto", opacity: 1, padding: ".75rem .75rem" },
            closed: {
              height: 0,
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className="w-full bg-dm-foreground/60 text-sm font-medium lg:text-lg"
        >
          The Chicago Police Department formed the first Brotherhood chapter in
          2010, the NYPD organized the second chapter in June of 2015 with the
          Colorado Chapter organized in July of 2015 by members of the Aurora
          Police Department. The Fort Worth chapter organized in 2016 along with
          Suffolk County (NY) PD, Dallas PD and Boston PD forming in late 2017.
          The Horry-Georgetown, SC chapter came on board in 2020 and the newest
          addition is the chapter from the great state of Arkansas in 2021.
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        className="relative"
        animate={checkedMap.three ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            setCheckedMap({ ...checkedMap, three: !checkedMap.three })
          }
          className="flex h-12 w-full items-center bg-dm-foreground fill-primary-content"
        >
          <p className="ml-6 mr-auto text-xl font-extrabold">
            About BFTF Colorado
          </p>
          <motion.div
            variants={{
              open: { rotate: 180, margin: "0 1.5rem 0 0" },
              closed: { rotate: 0, margin: "0 1.5rem 0 0" },
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          variants={{
            open: { height: "auto", opacity: 1, padding: ".75rem .75rem" },
            closed: {
              height: 0,
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className="w-full bg-dm-foreground/60 text-sm font-medium lg:text-lg"
        >
          Brotherhood for the Fallen Colorado was the third of nine chapters in
          the nation. Our chapter consists of members from the Aurora Police
          Department, Thornton Police Department, and the Douglas County
          Sheriff's Office. We are currently open to all Colorado Law
          Enforcement agencies.
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        className="relative"
        animate={checkedMap.four ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            setCheckedMap({ ...checkedMap, four: !checkedMap.four })
          }
          className="flex h-12 w-full items-center bg-dm-foreground fill-primary-content"
          variants={{
            open: {
              borderBottomLeftRadius: "unset",
              borderBottomRightRadius: "unset",
            },
            closed: {
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
            },
          }}
        >
          <p className="ml-6 mr-auto text-xl font-extrabold">
            You can help us!
          </p>
          <motion.div
            variants={{
              open: { rotate: 180, margin: "0 1.5rem 0 0" },
              closed: {
                rotate: 0,
                margin: "0 1.5rem 0 0",
                borderBottomLeftRadius: "0.5rem",
                borderBottomRightRadius: "0.5rem",
              },
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          variants={{
            open: { height: "auto", opacity: 1, padding: ".75rem .75rem" },
            closed: {
              height: 0,
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className="w-full rounded-b-lg bg-dm-foreground/60 text-sm font-medium lg:text-lg"
        >
          We are a certified <span className="badge">501(c)(3)</span> non-profit
          organization in the State of Colorado. We are funded solely from
          membership dues, donations, fundraising events, and partnerships that
          help reduce our operating costs.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Accordian;
