import React from "react";
import Button from "../components/Button";
import { BsBarChartFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import Cards from "../components/Cards";
import BarChart from "../components/Barchart";
import Table from "../components/Table";
import { productData, tableData } from "../data";
import ProductsChart from "../components/ProductChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-5">
        <div className="w-[70%] mt-5  h-[50%]">
          <div className="space-y-12 border-4 border-green-500 p-5">
            <div className="flex justify-between items-center  ">
              <div>
                <h2 className="font-semibold text-cyan-950">
                  Todays order Summary
                </h2>
              </div>
              <div className="space-x-3">
                <input
                  type="date"
                  className="text-[#F3941E] w-[120px] bg-transparent"
                  value="2024-11-16"
                  
                />
                <Button btnstyle="bg-transparent  text-sky-900 font-semibold hover:text-sky-500  border border-slate-900 text-sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="flex flex-col-4 space-x-6 justify-center  ">
              <Cards
                bg="bg-[#FFE2E5]"
                iconbg="bg-[#FA5A7D]"
                value="300"
                title="Total Order"
                detail="+5% from yesterday"
                icon={<BsBarChartFill color="white" />}
              />
              <Cards
                bg="bg-[#FFF4DE]"
                iconbg="bg-[#FF8F73]"
                value="50"
                title="Approval Pending"
                detail="+7% from yesterday"
                icon={<IoDocumentText color="white" />}
              />
              <Cards
                bg="bg-[#DCFCE7]"
                iconbg="bg-[#42D95B]"
                value="250"
                title="Tota Transaction"
                detail="4% from yesterday"
                icon={<MdAttachMoney color="white" />}
              />
              <Cards
                bg="bg-[#F3E8FF]"
                iconbg="bg-[#BE82FF]"
                value="20"
                title="Requests Received"
                detail="2% from yesterday"
                icon={<IoMdContact color="white" />}
              />
            </div>
          </div>
          <div className="mt-10">
            <BarChart
              totalOrder={[15, 20, 5, 10, 12, 18, 22]}
              orderApprove={[10, 12, 20, 6, 8, 14, 16]}
            />
          </div>
        </div>

        <div>
          <Table
            headers={["Sl No", "Name", "Date", "Status", "Amount"]}
            data={tableData}
          />
        </div>
      </div>

      <div className="flex flex-col-3 mt-10 space-x-9">
        <div >
        <ProductsChart data={productData}/> 
        </div>

        <div>
        <div className="bg-blue-500 text-white rounded-lg px-20 py-10 text-start">
          <h1 className="text-lg font-semibold">Axis Bank</h1>
          <p className="text-xs">Platinum Card</p>
          <div className="mt-4 text-center text-lg tracking-widest">
            5789 **** **** 2847
          </div>
          <div className="flex justify-between text-sm mt-6">
            <div>
              <p className="text-xs">Card Holder</p>
              <p className="font-semibold text-sm">Kaveri Hospitals</p>
            </div>
            <div>
              <p className="xs">Expire Date</p>
              <p className="font-semibold text-sm">05/24</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
          <p className="text-gray-500">Weekly payment limit</p>
           <h3>Rs. 5,00,000</h3> 
          </div>
        </div>
      
            
        </div>
        <div className="border-2 border-gray-700 p-5  bg-gray-50 rounded-lg h-[40%] w-[20%]">
          <h2 className="text-gray-700 text-center font-bold mb-2">Balance Details</h2>
          <div className=" flex-col flex justify-center text-lg space-y-4 mt-8 ">
            <div className="text-center">
            <p className="text-blue-500 font-semibold ">Rs. 10,00,000</p>
              <p className="text-gray-500 text-sm">Current balance</p>
             
            </div>
            <div className="text-center">
            <p className="text-green-500 font-semibold">Rs. 2,00,000</p>
              <p className="text-gray-500 text-sm">Today's spent</p>
              
            </div>
          </div>
        </div>
     
      </div>
      
    
    </div>
  );
};

export default Dashboard;
