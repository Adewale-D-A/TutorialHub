import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import MainLayout from "../../layouts/mainLayout";
import meetingRecordData from "../../assets/meetingRecordData.json";
import MeetingsRecordTable from "./meentingRecordTable";
import Search from "../../components/filterAndSearch/search";

const breadCrumb = [
  {
    url: "#",
    label: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
];
function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());

  const onDateChange = useCallback((dates: any) => {
    setStartDate(dates);
  }, []);

  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="w-full flex gap-5 px-5 md:px-10 py-10">
        <section className="w-full flex-[.7] flex flex-col gap-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
            {[
              {
                id: 1,
                label: "Tutees",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-secondary-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                ),
                value: 50,
              },
              {
                id: 2,
                label: "Meetings",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[#12B76A]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                ),
                value: 115,
              },
              {
                id: 3,
                label: "Your Rating",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[#F79009]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ),
                value: 8,
              },
            ].map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-full justify-between bg-white flex items-center rounded-md text-dark-500 p-5 shadow-md border"
                >
                  <div className="flex flex-col gap-2">
                    <span className=" text-gray-500">{item?.label}</span>{" "}
                    {item?.id === 3 ? (
                      <div className="flex items-start gap-1">
                        <h4 className=" text-5xl font-semibold mb-3">
                          {item?.value}
                          <span className=" text-gray-300">/</span>{" "}
                        </h4>
                        <span className=" text-gray-300 text-xl font-semibold">
                          10
                        </span>
                      </div>
                    ) : (
                      <h4 className=" text-5xl font-semibold mb-3">
                        {item?.value}
                      </h4>
                    )}
                  </div>
                  <span className=" p-3 bg-gray-200/20 text-secondary-500 rounded-full aspect-square border border-secondary-500/20">
                    {item?.icon}
                  </span>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="w-full border rounded-lg p-3"></div>
            <div className="w-full border rounded-lg p-3"></div>
          </div>
          <div className="w-full border rounded-2xl">
            <div className="flex items-center w-full justify-between px-3 my-4">
              <h3 className=" text-3xl font-semibold">Meeting Records</h3>
              <div className="">
                <Search placeholder="Search" id="search" label="" />
              </div>
            </div>
            <MeetingsRecordTable dataset={meetingRecordData} />
          </div>
        </section>
        <section className="w-full flex-[.3] border rounded-lg p-3">
          <h1>Section 2</h1>
          <div>
            <DatePicker
              selected={startDate}
              onChange={onDateChange}
              startDate={startDate}
              // selectsRange
              inline
            />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Dashboard;
