import { React, useState, useEffect, useCallback } from "react";
import classes from "./Tabs.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Duty from "./Duty";
function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [sortedTabs, setSortedTabs] = useState([]);

  useEffect(() => {
    const sorteddTabs = tabs.sort((a, b) => a.order - b.order);
    setSortedTabs(sorteddTabs);
  }, [tabs]);

  const { title, company, dates, duties } = sortedTabs[currentTab] || {};

  return (
    <>
      <div className={classes.tabs}>
        {sortedTabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`${classes.btn} ${
              index === currentTab ? classes.active : ""
            }`}
            onClick={() => setCurrentTab(index)}
          >
            {tab.company}
          </button>
        ))}
      </div>
      <div className={classes.tabContent}>
        <h2>{title}</h2>
        <span className={classes.company}>{company}</span>
        <h5>{dates}</h5>
        {duties?.map((item, index) => (
          <Duty
            key={index}
            icon={<FaAngleDoubleRight color={"var(--primary)"} />}
            content={item}
          />
        ))}
      </div>
    </>
  );
}

export default Tabs;
