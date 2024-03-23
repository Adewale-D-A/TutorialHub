import { useState } from "react";
import EditRequestModal from "../editRequest";
import DelistModal from "../deList";
import Pagination from "../pagination";

interface tableProps {
  dataset: {
    id: number;
    sn: number;
    programme: {
      programme: string;
      faculty: string;
    };
    utme_subjects: string;
    de_requirements: string;
    utme_requirements: string;
  }[];
}

function ProgrammesTable({ dataset }: tableProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelist, setOpenDelist] = useState(false);
  return (
    <div className=" w-full mt-10 overflow-x-auto">
      <table className=" w-full py-10 border rounded-md">
        <thead>
          <tr className=" text-left bg-gray-200/15 text-gray-500">
            <th>S/N</th>
            <th>Programme/Faculty</th>
            <th>UTME Subjects</th>
            <th>DE Requirements</th>
            <th>UTME Requirements</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {dataset.map((request) => {
            return (
              <tr key={request?.id} className=" border-b">
                <td className=" text-gray-500  max-w-xs">{request?.sn}</td>
                <td className=" max-w-xs">
                  {" "}
                  <div className="flex flex-col">
                    <span>
                      <b>{request?.programme?.programme}</b>
                    </span>
                    <span className=" text-xs text-gray-500">
                      {request?.programme?.faculty}
                    </span>
                  </div>
                </td>{" "}
                <td className=" max-w-xs">{request?.utme_subjects}</td>
                <td className="max-w-xs">{request?.de_requirements}</td>
                <td className=" max-w-xs">{request?.utme_requirements}</td>
                <td className=" text-sm flex items-center gap-3">
                  <button
                    type="button"
                    title="edit"
                    onClick={() => setOpenEdit(true)}
                    className="group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary_green-500 group-hover:scale-125 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="de-list"
                    onClick={() => setOpenDelist(true)}
                    className="group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 group-hover:scale-125 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination />
      <EditRequestModal openModal={openEdit} setOpenModal={setOpenEdit} />
      <DelistModal openModal={openDelist} setOpenModal={setOpenDelist} />
    </div>
  );
}

export default ProgrammesTable;
