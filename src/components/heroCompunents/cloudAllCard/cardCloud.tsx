import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";

const cardDatas = [
  {
    icon: <SiGoogledocs className="text-5xl text-[#49BBBD] " />,
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.",
  },
  {
    icon: <SlCalender className="text-5xl text-[#49BBBD]" />,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
  },
  {
    icon: <IoIosPeople className="text-5xl text-[#49BBBD]" />,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
  },
];

function CardCloud() {
  return (
    <div className="py-16 bg-gray-100 mt-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-10 grid-cols-1 gap-8">
          {cardDatas.map((e, id) => (
            <div
              key={id}
              className="bg-white shadow-md shadow-black rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center -mt-16 items-center mb-5">
                <span className="bg-[#E7F6F6] p-5 rounded-full">{e.icon}</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-800 mb-3">
                {e.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardCloud;
