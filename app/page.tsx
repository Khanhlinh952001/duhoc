import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaSearchLocation } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import BasicTabs from "./components/tabpage.jsx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-white">
      {/* head */}
      <div>
        <div className="h-8 bg-green-700 flex justify-around">
          <div className="flex mt-1">
            <IoIosCall className="text-white text-xl" />
            <p className="ml-2">Hotline : 01025000935</p>
          </div>
          <div className="flex mt-1">
            <HiMiniMapPin className="text-white text-xl" />
            <p className="ml-2">Khanh Hoa Nha Trang </p>
            <FaSearchLocation className="text-white text-lg mt-1 ml-4" />
          </div>
        </div>

        <div className="flex justify-center h-20 pb-4">
          <div>
            <h1 className="text-5xl font-bold text-green-500 mt-5">BTREE</h1>
          </div>

          <div className="flex ml-10 mt-10">
            <h1 className=" text-green-700 font-medium mx-2">TRANG CHU</h1>
            <h1 className=" text-green-700 font-medium mx-2">GIOI THIEU</h1>
            <h1 className=" text-green-700 font-medium mx-2 flex">
              DU LICH HAN QUOC <FaAngleDown className="mt-1 ml-1" />
            </h1>
            <h1 className=" text-green-700 font-medium mx-2 flex">
              DU HOC HAN QUOC
              <FaAngleDown className="mt-1 ml-1" />
            </h1>
            <h1 className=" text-green-700 font-medium mx-2 ">LIEN HE</h1>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <img className="h-80 w-full" src="hinhanh.jpg" alt="" />
      </div>

      <div className="flex justify-center mt-10">
        <div className="mr-4 w-[600px] bg-green-600 pb-10">
          <div className="border-b-2 mx-24">
            <h1 className="text-white text-center mt-8 text-2xl mb-2">
              TIN TUC MOI NHAT
            </h1>
          </div>
          <div className="max-h-[450px] h-[450px] overflow-y-auto">
            <div className="flex mt-8 mx-4 h-48 bg-slate-100 rounded-xl p-2">
              <div>
                <img
                  className="h-40 w-40 min-w-40 mt-2 ml-2 rounded-sm"
                  src="visa.jpeg"
                  alt="Visa Image"
                />
              </div>
              <div className="ml-4 h-3">
                <h1 className="text-gray-900 text-xl font-semibold mt-1 ">
                  DU HOC SINH BAO LANH BA ME SANG THAM THAN
                </h1>
                <p className="text-gray-800 text-base text-justify text-overflow-hidden px-2">
                  Khi đi du học Hàn Quốc, du học sinh sẽ được tạo điều kiện để
                  bảo lãnh người thân sang thăm. Vậy bảo lãnh người thân sang
                  Hàn Quốc như thế nào? Cần điều kiện gì? Cần chuẩn bị thủ tục
                  gì?
                </p>
              </div>
            </div>
            <div className="flex mt-8 mx-4 h-48 bg-slate-100 rounded-xl p-2">
              <div>
                <img
                  className="h-40 w-40 min-w-40 mt-2 ml-2 rounded-sm"
                  src="visa.jpeg"
                  alt="Visa Image"
                />
              </div>
              <div className="ml-4 h-3">
                <h1 className="text-gray-900 text-xl font-semibold mt-1 ">
                  DU HOC SINH BAO LANH BA ME SANG THAM THAN
                </h1>
                <p className="text-gray-800 text-base text-justify text-overflow-hidden px-2">
                  Khi đi du học Hàn Quốc, du học sinh sẽ được tạo điều kiện để
                  bảo lãnh người thân sang thăm. Vậy bảo lãnh người thân sang
                  Hàn Quốc như thế nào? Cần điều kiện gì? Cần chuẩn bị thủ tục
                  gì?
                </p>
              </div>
            </div>
            <div className="flex mt-8 mx-4 h-48 bg-slate-100 rounded-xl p-2">
              <div>
                <img
                  className="h-40 w-40 min-w-40 mt-2 ml-2 rounded-sm"
                  src="visa.jpeg"
                  alt="Visa Image"
                />
              </div>
              <div className="ml-4 h-3">
                <h1 className="text-gray-900 text-xl font-semibold mt-1 ">
                  DU HOC SINH BAO LANH BA ME SANG THAM THAN
                </h1>
                <p className="text-gray-800 text-base text-justify text-overflow-hidden px-2">
                  Khi đi du học Hàn Quốc, du học sinh sẽ được tạo điều kiện để
                  bảo lãnh người thân sang thăm. Vậy bảo lãnh người thân sang
                  Hàn Quốc như thế nào? Cần điều kiện gì? Cần chuẩn bị thủ tục
                  gì?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-10 w-[300px] mt-10">
          <div className="bg-green-800 h-20 flex">
            <div className="h-16 w-16 bg-white m-2 ml-8 rounded-full">
              <BiSolidPhoneCall className="text-green-800 text-3xl m-4 " />
            </div>
            <div className="text-white mt-4 ml-5 justify-center font-semibold">
              <h1>HOTLINE TU VAN</h1>
              <h2>01025000935 </h2>
            </div>
          </div>
          <div>
            <input
              className="flex w-full h-10 border rounded pl-2 mt-4"
              type="text"
              placeholder="Ho Ten"
            />
            <input
              className="flex w-full h-10 border rounded pl-2 mt-4"
              type="text"
              placeholder="Email*"
            />
            <input
              className="flex w-full h-10 border rounded pl-2 mt-4"
              type="text"
              placeholder="Phone Number *"
            />
            <input
              className="flex w-full h-10 border rounded pl-2 mt-4"
              type="text"
              placeholder="Yeu Cau"
            />

            <button className="mx-16 mt-8 rounded bg-green-700 px-6 py-3">
              GUI YEU CAU
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20">
        <h1 className="text-gray-800 font-bold text-xl text-center">
          DU HOC <span className="text-yellow-400">HAN QUOC</span>{" "}
        </h1>
        <div className="px-20">
          <BasicTabs />
        </div>
      </div>

      <footer className="h-80 bg-green-700">
        <div className="flex justify-center pt-8 px-40">
          <div>
            <h1 className="text-white text-xl mt-1 mr-8">
              NHAN THONG TIN MIEN PHI
            </h1>
          </div>
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Can ho tro"
              className="flex-1 h-10 w-full pl-1 bg-white border rounded-lg"
            />
          </div>
          <div>
            <button className="bg-yellow-400 px-4 text-gray-700 py-2 rounded-xl ml-8 font-semibold">
              DANG KY
            </button>
          </div>
        </div>


        <div className="flex justify-around mt-10">
            <div>
              <h1 className="text-lg font-semibold text-center">THONG TIN LIEN HE</h1>
              <p className="mt-4 flex text-center"><FaMapMarkedAlt className="text-xl mr-4"/> Dia chi : Khanh hoa Nha Trang</p>
              <p className="mt-2 ml-4 flex text-center"><IoIosCall className="text-xl mr-4"/> Dien thoai : 01025000935</p>
              <p className="mt-2 flex text-center"><CiMail className="text-xl mr-4"/> Email : Name@gmail.com</p>

            </div>


            <div>
            <h1 className="text-lg font-semibold text-center">DICH VU CUA CHUNG TOI</h1>
                  <p className="text-white text-center mt-8">Du hoc Han Quoc </p>
                  <p className="text-white text-center">Du Lich Han Quoc </p>

            </div>

            
       <div>
       <h1 className="text-lg font-semibold text-center">KET NOI VOI CHUNG TOI </h1>
          <div className="flex mt-10">
              <FaFacebookSquare className="text-white text-3xl mt-2 ml-2 mx-3" />
              <FaTiktok className="text-white text-3xl mt-2 ml-2 mx-3" />
              <FaSquareInstagram className="text-white text-3xl mt-2 ml-2 mx-3" />
              <SiZalo className="text-white text-3xl mt-2 ml-2 mx-3" />

          </div>
       </div>

        </div>
      </footer>
    </div>
  );
}
