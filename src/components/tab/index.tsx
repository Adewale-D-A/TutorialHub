import { useState } from "react";
import RequestTable from "../requestTable";

import changeDataset from "../../assets/requestTableChange.json";
import delistDataset from "../../assets/requestTableDelist.json";
import FilterAndSearch from "../filterAndSearch";
import UnreadIndicator from "../unreadIndicator";

function Tab({
  unread,
  tabType,
}: {
  unread: {
    all_requests: number;
    pending: number;
    declined: number;
    approved: number;
  };
  tabType: string;
}) {
  const [tabValue, setTabValue] = useState(1);
  return (
    <div className="w-full flex flex-col gap-5 mt-10">
      {/* tab buttons */}
      <div className="w-full flex gap-5">
        <button
          type="button"
          className={`${
            tabValue === 1
              ? " text-primary_green-500 pb-2 border-b-2 border-primary_green-500 font-semibold flex items-center gap-3"
              : " text-gray-500 pb-2 hover:border-b-2 hover:text-primary_green-500 hover:font-semibold border-primary_green-500 transition-all flex items-center gap-3"
          }`}
          onClick={() => setTabValue(1)}
        >
          <span>All Requests </span>
          <UnreadIndicator number={unread?.all_requests} />
        </button>
        <button
          type="button"
          className={`${
            tabValue === 2
              ? " text-primary_green-500 pb-2 border-b-2 border-primary_green-500 font-semibold flex items-center gap-3"
              : " text-gray-500 pb-2 hover:border-b-2 hover:text-primary_green-500 hover:font-semibold border-primary_green-500 transition-all flex items-center gap-3"
          }`}
          onClick={() => setTabValue(2)}
        >
          <span>Pending</span>
          <UnreadIndicator number={unread?.pending} />
        </button>
        <button
          type="button"
          className={`${
            tabValue === 3
              ? " text-primary_green-500 pb-2 border-b-2 border-primary_green-500 font-semibold flex items-center gap-3"
              : " text-gray-500 pb-2 hover:border-b-2 hover:text-primary_green-500 hover:font-semibold border-primary_green-500 transition-all flex items-center gap-3"
          }`}
          onClick={() => setTabValue(3)}
        >
          <span>Declined</span>

          <UnreadIndicator number={unread?.declined} />
        </button>
        <button
          type="button"
          className={`${
            tabValue === 4
              ? " text-primary_green-500 pb-2 border-b-2 border-primary_green-500 font-semibold flex items-center gap-3"
              : " text-gray-500 pb-2 hover:border-b-2 hover:text-primary_green-500 hover:font-semibold border-primary_green-500 transition-all flex items-center gap-3"
          }`}
          onClick={() => setTabValue(4)}
        >
          <span>Approved</span>
          <UnreadIndicator number={unread?.approved} />
        </button>
      </div>

      {/* filter and search section */}
      <FilterAndSearch />
      {/* tab contents */}
      <div>
        {tabValue === 2 ? (
          <div className="w-full">
            <RequestTable
              dataset={tabType === "delist" ? delistDataset : changeDataset}
            />
          </div>
        ) : tabValue === 3 ? (
          <div className="w-full">
            <RequestTable
              dataset={tabType === "delist" ? delistDataset : changeDataset}
            />
          </div>
        ) : tabValue === 4 ? (
          <div className="w-full">
            <RequestTable
              dataset={tabType === "delist" ? delistDataset : changeDataset}
            />
          </div>
        ) : (
          <div className="w-full">
            <RequestTable
              dataset={tabType === "delist" ? delistDataset : changeDataset}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab;
