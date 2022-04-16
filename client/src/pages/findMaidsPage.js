import { React, useState } from "react";
import Filters from "../components/findMaidsPage/filters";
import SortBy from "../components/findMaidsPage/sortby";
import ShowMaids from "../components/findMaidsPage/showMaids";

function FindMaids() {
  const [filters, setfilters] = useState({});

  return (
    <div  style={{ width: "800px", marginTop: "50px", marginRight: "auto", marginLeft: "auto" }}>
      <Filters filters={filters} setfilters={setfilters} />
      <SortBy filters={filters} setfilters={setfilters} />
      <ShowMaids filters={filters} />
    </div>
  );
}
export default FindMaids;
