
function App() {

  return (
    <>
      <div className="grid grid-cols-4 mx-40 h-[42rem]">
        <div className=" bg-slate-800 text-white p-7">
          <div className="flex">
            <input className="rounded-lg bg-slate-900 border-none focus:border-none p-2 w-5/6" placeholder="Search" />
            <button className="ms-10 rounded-full cursor-pointer"><i class="fa-solid fa-plus"></i></button>
          </div>

          {/* group */}
          <div className="flex mt-10">
            <img className="w-14 h-14 rounded-full mr-5" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
            <div>
              <h5>Phuc Nguyen</h5>
              <span className="text-gray-400">Hello my friend</span>
            </div>
          </div>
          <div className="flex mt-10">
            <img className="w-14 h-14 rounded-full mr-5" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
            <div>
              <h5>Phuc Nguyen</h5>
              <span className="text-gray-400">Hello my friend</span>
            </div>
          </div>

        </div>

        <div className="bg-slate-300 col-span-3 relative">
          <div className="grid grid-cols-4">
            <div className=" col-span-3">

              {/* Thanh Header */}
              <div className="flex justify-evenly items-center p-4">
                <h3>Admin Phuc</h3>
                <span>Admin</span>
                <b>CreatedDate</b>
                <span>10/11/2024</span>
              </div>
              <hr />

              {/* Message receive */}

              <div className="flex justify-start mt-3 pl-2">
                <img className="w-10 h-10 rounded-full mr-3" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
                <div>
                  <p className="bg-slate-100 p-2 rounded-md break-words w-80">Hey, what do you like to do for fun?</p>
                  <span className="text-[0.75rem]">28-6 10:23 PM</span>
                </div>
              </div>


              {/* Message Send */}
              <div className="flex justify-end mt-3 pr-2">
                <div>
                  <button className="mr-1"><i class="fa-solid fa-ellipsis-vertical"> </i></button>
                  <span className="bg-purple-400 p-2 rounded-md break-words w-80">
                    I like playing football, chilling with my parents...
                  </span>
                  <br></br>
                  <span className="text-[0.75rem] float-end mt-2">28-6 10:23 PM</span>
                </div>
                <img className="w-10 h-10 rounded-full mr-3 ml-1" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
              </div>

              {/* Chat box */}

              <div className=" bg-white px-6 border-b flex justify-between absolute bottom-0 w-3/4">
                <button className="mr-3"><i class="fa-solid fa-face-smile"></i></button>
                <button className="mr-5"><i class="fa-solid fa-link"></i></button>
                <textarea
                  className="flex-grow p-2 outline-none resize-none max-h-[80px]"
                  placeholder="Type a message..."
                ></textarea>

                <button><i class="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>



            {/* User connect */}
            <div className="">
              <div className="p-2 bg-gray-300">
                <p>Who's here? (10)</p>
                <hr />
                <div className="flex">
                  <img className="w-10 h-10 rounded-full mt-2 mr-2" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="Profile" />
                  <div>
                    <p>Nguyen Phuc</p>
                    <span>Web</span>
                  </div>
                </div>

                <div className="flex">
                  <img className="w-10 h-10 rounded-full mt-2 mr-2" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="Profile" />
                  <div>
                    <p>Nguyen Phuc</p>
                    <span>Web</span>
                  </div>
                </div>
              </div>

              {/* Proflie */}
              <div className="bg-gray-200 w-1/4 p-3 flex items-center justify-center absolute bottom-0">
                <div className="text-center">
                  <img className="w-24 h-24 rounded-full mx-auto" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="Profile" />
                  <h3 className="mt-2">Nguyen Phuc</h3>
                  <p className="text-sm text-gray-500">Software development</p>
                  <button className="mt-5"><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
