import React from 'react'

export const Banner = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://praxent.com/wp-content/uploads/2021/08/Newsletter-Header-Banner-2.png" />
              </div>
              <h2 className="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">Moving soon? Take your Internet with you.</h2>
              <p className="leading-relaxed text-base">We'll work to get you connected on the day of your move. <br/> Setting up your services has never been easier.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Start your move</button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.jotform.com/blog/wp-content/uploads/2019/08/image1-4-1200x500.jpg" />
              </div>
              <h2 className="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">Students can get up to $200 back with our latest deals</h2>
              <p className="leading-relaxed text-base">Go back to school with fast internet and big savings.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Shop student deals</button>
            </div>
          </div>
        </div>
    </section>
        )
}
