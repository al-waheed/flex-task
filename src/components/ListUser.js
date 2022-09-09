import React, { useEffect, useState } from "react";
import { ActivityRow } from "./ActivityRow";
import { MessageCard } from "./MessageCard";
import { apiUrl } from "./../utils";
import { sortBydate } from "./../utils";
import NameLogo from "./NameLogo";

export const NameList = () => {
  const [list, setList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeRow, setActiveRow] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const sortedList = sortBydate(list);
  const firstSixData = sortedList.filter((s, i) => i < 6);
  const dataToShow = showAll ? sortedList : firstSixData;

  return (
    <div className="container">
      {dataToShow?.map((l, index) => (
        <div className="radio-btn" onClick={() => setActiveRow(index)}>
          <div className="select_btn">
            <input type="radio" checked={index <= activeRow ? true : false} className="select_btn"/>
            <NameLogo title={l.author} />
          </div>
          {l.type === "comment" ? (
            <MessageCard details={l} />
          ) : (
            <ActivityRow details={l} />
          )}
        </div>
      ))}
      <h2 className="showmore_btn" onClick={() => setShowAll(!showAll)}>
        {showAll? "Show less events" : `Show ${sortedList.length - firstSixData.length} more events`}
      </h2>
    </div>
  );
};
