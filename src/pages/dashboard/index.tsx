import { useState } from "react";
import RequestTable from "../../components/requestTable";
import MainLayout from "../../layouts/mainLayout";

import tableDatasetAll from "../../assets/requestTableAll.json";
import CreateNewRequestModal from "../../components/createRequest";

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
  const [openNewRequestModal, setOpenNewRequestModal] = useState(false);
  return (
    <MainLayout breadCrumb={breadCrumb}>
      <main className="">
        <div className=" relative w-full">
          <div>
            <div className={`bg-gradient w-full h-60 flex`}>
              <div className="bg-semi-circle-left h-full w-full"></div>
              <div className="bg-semi-circle-right h-full w-full opacity-30"></div>
            </div>
            <div className=" bg-white h-20 w-full"></div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full p-5 md:p-10 text-white">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="max-w-screen-2xl w-full flex justify-between gap-5 items-center">
                <div>
                  <h3 className=" text-2xl md:text-3xl font-semibold">
                    Federal University of Technology, Minna
                  </h3>
                  <p>Gidan Kwano, Minna, Niger State</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenNewRequestModal(true)}
                  className=" text-primary_green-500 text-sm bg-white rounded-lg px-5 py-3 hover:bg-primary_green-500 hover:text-white transition-all"
                >
                  Create New Request
                </button>
              </div>
            </div>
            <div className=" flex justify-center mt-10">
              <div className=" max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
                {[
                  {
                    id: 1,
                    label: "Programmes",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    ),
                    value: 54,
                    subSection: [
                      {
                        id: 1.1,
                        value: 5,
                        label: "Delisted",
                      },
                    ],
                  },
                  {
                    id: 2,
                    label: "Faculties",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    ),
                    value: 12,
                    subSection: [
                      {
                        id: 2.1,
                        value: 3,
                        label: "Assigned",
                      },
                    ],
                  },
                  {
                    id: 3,
                    label: "Change Requests",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    ),
                    value: 6,
                    subSection: [
                      {
                        id: 3.1,
                        value: 3,
                        label: "Requirements",
                      },
                      {
                        id: 3.2,
                        value: 3,
                        label: "DE-lists",
                      },
                    ],
                  },
                ].map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className=" bg-white rounded-md text-dark-500 p-5 shadow-lg border"
                    >
                      <div>
                        <div className=" flex items-center justify-between mb-5">
                          <span className=" text-gray-800">{item?.label}</span>{" "}
                          <span className=" p-2 bg-primary_green-500/40 text-primary_green-500 rounded-md">
                            {item?.icon}
                          </span>
                        </div>
                        <h4 className=" text-5xl font-semibold mb-3">
                          {item?.value}
                        </h4>
                        <div className=" flex justify-between w-full flex-wrap">
                          {item?.subSection?.map((subSection) => {
                            return (
                              <div
                                key={subSection?.id}
                                className=" text-xs text-gray-700"
                              >
                                <span className=" font-semibold">
                                  {subSection?.value}
                                </span>{" "}
                                <span>{subSection?.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <section className="w-full flex flex-col gap-10 items-center justify-center">
          <div className="mt-[500px] md:mt-10 max-w-screen-2xl w-full px-5 md:px-10 h-full">
            <h2 className=" text-2xl font-semibold">Most Recent Requests</h2>
            <RequestTable dataset={tableDatasetAll} />
          </div>
        </section>
      </main>
      <CreateNewRequestModal
        openModal={openNewRequestModal}
        setOpenModal={setOpenNewRequestModal}
      />
    </MainLayout>
  );
}

export default Dashboard;
