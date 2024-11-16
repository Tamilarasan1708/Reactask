import React from "react";

const ProductsTable = ({data}) => {
 

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-xl mx-auto ">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Popularity</th>
            <th className="py-2 px-4">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} >
              <td className="py-2 px-4 text-gray-800">{`0${index + 1}`}</td>
              <td className="py-2 px-4 font-medium text-gray-800">{item.name}</td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${item.popularity}%`,
                        backgroundColor:
                          index === 0
                            ? "#1E90FF"
                            : index === 1
                            ? "#28B463"
                            : index === 2
                            ? "#9B59B6"
                            : "#FF5733",
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {item.popularity}%
                  </span>
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                
                  <div className=" p-1"    >
                  <span className="ml-2 border px-3 py-1 text-sm text-gray-600 rounded-xl " 
                     style={{
                    //    borderRadius:"15px",
                        border: `2px solid ${
                          index === 0
                            ? "#1E90FF"
                            : index === 1
                            ? "#28B463"
                            : index === 2
                            ? "#9B59B6"
                            : "#FF5733"
                        }`,
                        backgroundColor: "transparent",
                      }}    >
                    {item.sales}%
                  </span>
                  </div>
                
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
