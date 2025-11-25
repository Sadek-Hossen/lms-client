"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation";

function Cashout() {

  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const img = searchParams.get("img");
  const desc = searchParams.get("desc");

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10">
      <div
        className="
          flex flex-col lg:flex-row 
          justify-between items-start 
          gap-10 
          w-full
        "
      >

        {/* LEFT SIDE - PAYMENT FORM */}
        <div className="w-full lg:w-1/2 shadow-2xl px-6 sm:px-10 py-6 rounded-xl bg-white">
          <h1 className="text-2xl font-semibold py-4">Checkout</h1>

          <p className="text-gray-600 py-3">Card Type</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Image src="https://assets.weforum.org/organization/image/responsive_small_webp_ktSFaikjtTuIrdL-p8mH4Z_-pDG6DN-VotbLtdE2KR4.webp" alt="" height={50} width={50} className="rounded-xl" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png" alt="" height={50} width={50} className="rounded-xl" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Visa_Debit_SVG_logo.svg/2560px-Visa_Debit_SVG_logo.svg.png" alt="" height={50} width={50} className="rounded-xl" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="" height={50} width={50} className="rounded-xl" />
          </div>

          <form>
            <label>Name of card:</label><br />
            <input type="text" className="px-4 mb-6 py-3 border w-full rounded-2xl" placeholder="Enter your Card name" />

            <label>Card No:</label><br />
            <input type="text" className="px-4 mb-6 py-3 border w-full rounded-2xl" placeholder="Enter your Card number" />

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label>Expiration Date (MM/YY):</label><br />
                <input type="text" className="px-4 mb-6 py-3 border w-full rounded-2xl" placeholder="MM/YY" />
              </div>

              <div className="w-full">
                <label>CVC:</label><br />
                <input type="text" className="px-4 mb-6 py-3 border w-full rounded-2xl" placeholder="CVC" />
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input type="checkbox" />
              <p className="text-gray-400 text-sm sm:text-base">Save my information for faster checkout</p>
            </div>

            <Link href="/">
              <button className="w-full mt-4 text-white font-semibold rounded-2xl bg-[#49BBBD] py-4 px-10 hover:opacity-80">
                Confirm Payment
              </button>
            </Link>
          </form>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="w-full lg:w-1/3 shadow-xl p-6 rounded-xl bg-white">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {img && (
            <div className="w-full flex justify-center mb-4">
              <Image
                src={img}
                alt={title || "Product"}
                width={300}
                height={220}
                className="rounded-md object-cover"
              />
            </div>
          )}

          <p className="text-lg font-semibold">{title}</p>
          <p className="text-gray-600 my-2">{desc}</p>

          <p className="text-xl font-semibold mt-3">
            Price:{" "}
            <span className="text-[#0FABCA]">${price}</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Cashout;
