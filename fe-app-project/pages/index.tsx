"use client";
import Image from "next/image";
import { Roboto, Inter } from "next/font/google";
import Item from "@/components/item";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import { Button } from "@/components/button";
import Footer from "@/components/footer";
const roboto = Roboto({
  weight: ["300"],
  subsets: ["vietnamese"],
});
const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});
export function Flag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="26"
      viewBox="0 0 48 26"
      fill="none"
    >
      <g clip-path="url(#clip0_1_150)">
        <mask
          id="mask0_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="8"
          y="0"
          width="9"
          height="9"
        >
          <path
            d="M16.3002 0.530029H9.69023C9.30363 0.530029 8.99023 0.84343 8.99023 1.23003V7.84003C8.99023 8.22663 9.30363 8.54003 9.69023 8.54003H16.3002C16.6868 8.54003 17.0002 8.22663 17.0002 7.84003V1.23003C17.0002 0.84343 16.6868 0.530029 16.3002 0.530029Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_150)">
          <path
            d="M16.3002 0.530029H9.69023C9.30363 0.530029 8.99023 0.84343 8.99023 1.23003V7.84003C8.99023 8.22663 9.30363 8.54003 9.69023 8.54003H16.3002C16.6868 8.54003 17.0002 8.22663 17.0002 7.84003V1.23003C17.0002 0.84343 16.6868 0.530029 16.3002 0.530029Z"
            fill="white"
          />
          <path
            d="M8.99023 0.530029H17.0002V8.54003H8.99023V0.530029Z"
            fill="white"
          />
        </g>
        <mask
          id="mask1_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="25"
          y="0"
          width="9"
          height="9"
        >
          <path
            d="M32.3207 0.530029H25.7107C25.3241 0.530029 25.0107 0.84343 25.0107 1.23003V7.86103C25.0107 8.24763 25.3241 8.56103 25.7107 8.56103H32.3207C32.7073 8.56103 33.0207 8.24763 33.0207 7.86103V1.23003C33.0207 0.84343 32.7073 0.530029 32.3207 0.530029Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_1_150)">
          <path
            d="M32.3207 0.530029H25.7107C25.3241 0.530029 25.0107 0.84343 25.0107 1.23003V7.86103C25.0107 8.24763 25.3241 8.56103 25.7107 8.56103H32.3207C32.7073 8.56103 33.0207 8.24763 33.0207 7.86103V1.23003C33.0207 0.84343 32.7073 0.530029 32.3207 0.530029Z"
            fill="white"
          />
          <path
            d="M25.0107 0.530029H33.0207V8.54003H25.0107V0.530029Z"
            fill="white"
          />
        </g>
        <mask
          id="mask2_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="8"
          width="9"
          height="9"
        >
          <path
            d="M8.29047 8.56104H1.68047C1.29387 8.56104 0.980469 8.87444 0.980469 9.26103V15.892C0.980469 16.2786 1.29387 16.592 1.68047 16.592H8.29047C8.67707 16.592 8.99047 16.2786 8.99047 15.892V9.26103C8.99047 8.87444 8.67707 8.56104 8.29047 8.56104Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_1_150)">
          <path
            d="M8.29047 8.56104H1.68047C1.29387 8.56104 0.980469 8.87444 0.980469 9.26103V15.892C0.980469 16.2786 1.29387 16.592 1.68047 16.592H8.29047C8.67707 16.592 8.99047 16.2786 8.99047 15.892V9.26103C8.99047 8.87444 8.67707 8.56104 8.29047 8.56104Z"
            fill="white"
          />
          <path
            d="M0.980469 8.56104H8.99047V16.571H0.980469V8.56104Z"
            fill="white"
          />
        </g>
        <mask
          id="mask3_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="17"
          y="8"
          width="9"
          height="9"
        >
          <path
            d="M24.31 8.56104H17.7C17.3134 8.56104 17 8.87444 17 9.26103V15.892C17 16.2786 17.3134 16.592 17.7 16.592H24.31C24.6966 16.592 25.01 16.2786 25.01 15.892V9.26103C25.01 8.87444 24.6966 8.56104 24.31 8.56104Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask3_1_150)">
          <path
            d="M24.31 8.56104H17.7C17.3134 8.56104 17 8.87444 17 9.26103V15.892C17 16.2786 17.3134 16.592 17.7 16.592H24.31C24.6966 16.592 25.01 16.2786 25.01 15.892V9.26103C25.01 8.87444 24.6966 8.56104 24.31 8.56104Z"
            fill="white"
          />
          <path d="M17 8.56104H25.01V16.571H17V8.56104Z" fill="white" />
        </g>
        <mask
          id="mask4_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="33"
          y="8"
          width="9"
          height="9"
        >
          <path
            d="M40.3305 8.56104H33.7205C33.3339 8.56104 33.0205 8.87444 33.0205 9.26103V15.892C33.0205 16.2786 33.3339 16.592 33.7205 16.592H40.3305C40.7171 16.592 41.0305 16.2786 41.0305 15.892V9.26103C41.0305 8.87444 40.7171 8.56104 40.3305 8.56104Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask4_1_150)">
          <path
            d="M40.3305 8.56104H33.7205C33.3339 8.56104 33.0205 8.87444 33.0205 9.26103V15.892C33.0205 16.2786 33.3339 16.592 33.7205 16.592H40.3305C40.7171 16.592 41.0305 16.2786 41.0305 15.892V9.26103C41.0305 8.87444 40.7171 8.56104 40.3305 8.56104Z"
            fill="white"
          />
          <path
            d="M33.0205 8.56104H41.0305V16.571H33.0205V8.56104Z"
            fill="white"
          />
        </g>
        <mask
          id="mask5_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="8"
          y="16"
          width="9"
          height="9"
        >
          <path
            d="M16.3002 16.592H9.69023C9.30363 16.592 8.99023 16.9054 8.99023 17.292V23.923C8.99023 24.3096 9.30363 24.623 9.69023 24.623H16.3002C16.6868 24.623 17.0002 24.3096 17.0002 23.923V17.292C17.0002 16.9054 16.6868 16.592 16.3002 16.592Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask5_1_150)">
          <path
            d="M16.3002 16.592H9.69023C9.30363 16.592 8.99023 16.9054 8.99023 17.292V23.923C8.99023 24.3096 9.30363 24.623 9.69023 24.623H16.3002C16.6868 24.623 17.0002 24.3096 17.0002 23.923V17.292C17.0002 16.9054 16.6868 16.592 16.3002 16.592Z"
            fill="white"
          />
          <path
            d="M8.99023 16.592H17.0002V24.602H8.99023V16.592Z"
            fill="white"
          />
        </g>
        <mask
          id="mask6_1_150"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="25"
          y="16"
          width="9"
          height="9"
        >
          <path
            d="M32.3207 16.592H25.7107C25.3241 16.592 25.0107 16.9054 25.0107 17.292V23.923C25.0107 24.3096 25.3241 24.623 25.7107 24.623H32.3207C32.7073 24.623 33.0207 24.3096 33.0207 23.923V17.292C33.0207 16.9054 32.7073 16.592 32.3207 16.592Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask6_1_150)">
          <path
            d="M32.3207 16.592H25.7107C25.3241 16.592 25.0107 16.9054 25.0107 17.292V23.923C25.0107 24.3096 25.3241 24.623 25.7107 24.623H32.3207C32.7073 24.623 33.0207 24.3096 33.0207 23.923V17.292C33.0207 16.9054 32.7073 16.592 32.3207 16.592Z"
            fill="white"
          />
          <path
            d="M25.0107 16.592H33.0207V24.602H25.0107V16.592Z"
            fill="white"
          />
        </g>
        <path
          d="M43.9905 6.631C44.5715 6.631 45.0865 6.507 45.5365 6.258C45.9785 6.01508 46.3476 5.65845 46.6055 5.225C46.8645 4.79 46.9935 4.297 46.9935 3.745V3.328C46.9994 2.83115 46.8623 2.34308 46.5985 1.922C46.3341 1.49601 45.9623 1.14701 45.5205 0.910004C45.0523 0.653006 44.5255 0.522061 43.9915 0.530004C43.4195 0.530004 42.9065 0.655004 42.4525 0.904004C42.0113 1.1406 41.6399 1.48888 41.3755 1.914C41.1125 2.334 40.9805 2.805 40.9805 3.328V3.745C40.9805 4.297 41.1105 4.79 41.3685 5.225C41.6275 5.659 41.9835 6.004 42.4385 6.258C42.8925 6.507 43.4095 6.631 43.9905 6.631ZM43.9905 5.971C43.5415 5.971 43.1405 5.874 42.7905 5.679C42.4473 5.49253 42.1609 5.21682 41.9615 4.881C41.7615 4.544 41.6615 4.163 41.6615 3.738V3.335C41.6615 2.94 41.7615 2.578 41.9615 2.251C42.1615 1.924 42.4385 1.665 42.7895 1.475C43.1579 1.27548 43.5716 1.17455 43.9905 1.182C44.4355 1.182 44.8335 1.28 45.1845 1.475C45.5365 1.665 45.8115 1.924 46.0125 2.251C46.2166 2.57545 46.3231 2.95172 46.3195 3.335V3.738C46.3195 4.163 46.2195 4.544 46.0195 4.881C45.8206 5.21694 45.5345 5.49271 45.1915 5.679C44.8234 5.87836 44.41 5.97929 43.9915 5.972L43.9905 5.971ZM43.5305 2.56H44.0575C44.2135 2.56 44.3375 2.594 44.4315 2.662C44.5235 2.731 44.5705 2.838 44.5705 2.985C44.5705 3.165 44.5065 3.285 44.3805 3.343C44.2556 3.39751 44.1207 3.42511 43.9845 3.424H43.5305V2.56ZM43.5225 4.977V3.907H43.9925L44.5775 4.977H45.3545C45.2424 4.78229 45.1273 4.58927 45.0095 4.398L44.6725 3.812C44.8398 3.75867 44.9842 3.65052 45.0825 3.505C45.1971 3.34227 45.2563 3.14699 45.2515 2.948C45.2547 2.82742 45.2321 2.70754 45.1854 2.59633C45.1387 2.48512 45.0688 2.38513 44.9805 2.303C44.8045 2.133 44.5725 2.047 44.2845 2.047H42.8645V4.977H43.5225Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_150">
          <rect
            width="47"
            height="25"
            fill="white"
            transform="translate(0.980469 0.530029)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Home() {
  const [payload, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  async function getPosts() {
    const data = await fetch("http://localhost:1337/api/posts?populate=image", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEYTOKEN}`,
      },
    });
    const payload = await data.json();
    setPosts(payload.data);
  }
  return (
    <div
      style={{
        background:
          "radial-gradient(70.71% 70.71% at 50% 50%,#3a2782 0%,#050506 100%)",
      }}
      className={`${roboto.className}`}
    >
      <div className="mx-auto flex w-full max-w-[390px] flex-col items-center mb:max-w-[976px] mb:pb-[22px] mb:pt-5 lg:max-w-[1165px]">
        <Header />
        <div className="mx-auto max-w-[350px] gap-[34px] mb:mb-10 mb:max-w-[870px] lg:max-w-[1165px]">
          <div className="mb-[86px] mb:mb-16"></div>
          <div className="mb:pt-12">
            <div className="flex justify-center mb:pt-[54px]">
              <span
                style={{
                  textShadow:
                    "0px 1px 100px #000,  20px 0px 40px #000,  20px 20px 20px #000, 10px -10px 10px #000",
                }}
                className={`text-home text-center text-[33px] text-[#fff] mb:text-[44px] ${inter.className}`}
              >
                Threads Gallery
              </span>
            </div>
            <div className="mb-5 flex flex-col items-center px-2 mb:mt-[4px] mb:p-0 lg:mt-[3px]">
              {/* responsive PC */}
              <div className="lg:px-[33px]">
                <p
                  style={{
                    textShadow: "0px 4px 8px rgba(10, 5, 23, 0.12)",
                  }}
                  className={`sub-text-home hidden max-w-[300px] text-center mb:max-w-[566px] lg:block  lg:max-w-[692px] ${roboto.className}`}
                >
                  Become an expert on how to write threads by taking inspiration
                  from our own {"teams'"} curated examples and use cases.
                </p>
              </div>
              {/* responsive Tablet */}
              <span className="sub-text-home hidden text-[23px] mb:block mb:max-w-[566px] lg:hidden lg:max-w-[692px]">
                Become an expert on how to write threads by taking{" "}
              </span>
              <span className="sub-text-home hidden text-[24px] mb:block mb:max-w-[566px] lg:hidden lg:max-w-[692px]">
                inspiration from our own {"teams'"} curated examples and use
                cases.
              </span>
              {/* responsive Mobile */}
              <span className="sub-text-home max-w-[300px] text-base mb:hidden">
                Become an expert on how to write threads by taking inspiration
                from
              </span>
              <span className="sub-text-home max-w-[300px] text-xl mb:hidden">
                our own {"teams'"} curated examples and use cases.
              </span>
            </div>
            <div className="flex  items-center justify-center pb-[24px] pt-[34px] mb:pt-[26px]">
              <Button />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb:mb-16 mb:grid-cols-3 mb:pb-16">
            {payload &&
              payload.length > 0 &&
              payload.map((item: any, index: number) => (
                <Item key={index} data={item.attributes} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
