import React from "react";


const Portfolio = () => {
  return (
    <section className="bg-[#e6d0b6] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Portfolio
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={"https://res.cloudinary.com/dbkji7rbd/image/upload/v1775036065/21_udwnof_ujmtto.png"}
              alt="Portfolio work 1"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Item 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={"https://res.cloudinary.com/dbkji7rbd/image/upload/v1775036063/13_mgolmi_ndzss5.png"}
              alt="Portfolio work 2"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={"https://res.cloudinary.com/dbkji7rbd/image/upload/v1775036063/14_wdvo7i_hbz5hi.png"}
              alt="Portfolio work 3"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Item 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={"https://res.cloudinary.com/dbkji7rbd/image/upload/v1775036065/12_muqok6_kwrwpi.png"}
              alt="Portfolio work 4"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
