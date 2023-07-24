import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./Sidebar.module.css";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const [openSub, setopenSub] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  function closeAllTabs(
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return setState(false);
  }
  function toggle() {
    setIsOpen(!isOpen);
  }
  function toggleOpen() {
    setIsOpen(true);
  }
  function blurHandler() {
    setIsOpen(false);
  }

  function handleClick() {
    blurHandler();
    closeAllTabs(setopenSub);
  }

  return (
    <>
      <div className={styles.container}>
        <span className={styles.innerCon}>
          <div
            style={{ width: isOpen ? "250px" : "0px" }}
            className={styles.sidebar}
          >
            <div className={styles.top_section}>
              <button
                onClick={toggle}
                style={{ marginLeft: isOpen ? "0px" : "0px" }}
                className={styles.bars}
              >
                {isOpen ? (
                  <TfiClose className={styles.toggle} />
                ) : (
                  <TfiAlignRight className={styles.toggle} />
                )}
              </button>
            </div>

            <div
              onClick={() => setopenSub(!openSub)}
              className={
                openSub ? [styles.active, styles.link].join(" ") : styles.link
              }
            >
              <div className={styles.icon}>
                <MdAccountBox />
              </div>
              <p
                style={{ display: isOpen ? "block" : "none" }}
                className={styles.link_text}
              >
                My Account
              </p>
              {openSub ? (
                <FaAngleUp className="text-lg self-center font-bold duration-1000" />
              ) : (
                <FaAngleDown className="text-lg self-center font-bold duration-1000" />
              )}
            </div>
            <ul
              style={{ display: openSub ? "block" : "none" }}
              className={styles.dropDown}
            >
              {/* <li onClick={handleClick} className="text-sm">
                Update Information
              </li> */}
              <li className="text-sm">LinkedIn</li>
            </ul>
          </div>
        </span>

        <main onClick={handleClick}>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
