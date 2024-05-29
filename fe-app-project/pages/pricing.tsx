"use client";
import Header from "@/components/header";
import { Feature } from "@/constant/pricing.types";
import { renderData } from "@/utills/utills";
import { Inter, Roboto, Manrope } from "next/font/google";
import Image from "next/image";
import { Button as ButtonV2 } from "@/components/button";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer";
const roboto = Roboto({
  weight: ["400"],
  subsets: ["vietnamese"],
});
const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin"],
});
function Button({
  button_class,
  content,
  button_style,
}: {
  button_class?: string;
  content: string;
  button_style?: React.CSSProperties;
}) {
  return (
    <button
      style={button_style}
      className={`flex w-full items-center justify-center rounded-lg py-4 ${button_class ? button_class : "bg-[#f2f2f2]"}`}
    >
      <span className="text-sm font-bold leading-4 text-[#0a0517]">
        {content}
      </span>
    </button>
  );
}

function Advertisement({
  background_style,
  text_style,
  heading,
  description,
  desc_sub,
  button_style,
}: {
  background_style: React.CSSProperties;
  text_style: React.CSSProperties;
  heading: string;
  description: string;
  desc_sub?: string;
  button_style: React.CSSProperties;
}) {
  return (
    <div
      className="flex justify-between gap-9 rounded-[20px] px-7 py-6  "
      style={background_style}
    >
      <div className=" flex flex-col justify-between mb:gap-[10px]">
        <div>
          <p
            style={text_style}
            className={`${inter.className} text-[23px] leading-[48px] tracking-[0.1px] mb:text-[31px]`}
          >
            {heading}
          </p>
        </div>
        <div className="mb-9 mb:mb-0 mb:pr-[14px] mb:pt-9">
          <p
            className={`${roboto.className} text-lg font-normal leading-[27px] tracking-[0.1px] text-white`}
          >
            {description}
          </p>
        </div>
        {desc_sub && (
          <div className="mb-9 mt-[27px] mb:mb-0">
            <p className="text-lg leading-[27px] tracking-[0.1px] text-white">
              {desc_sub}
            </p>
          </div>
        )}
        <div className="flex w-full max-w-[248px] items-center mb:hidden">
          <Button content="Contact Sales" button_style={button_style} />
        </div>
      </div>
      <div className="hidden w-full max-w-[248px] items-center mb:flex ">
        <Button content="Contact Sales" button_style={button_style} />
      </div>
    </div>
  );
}

function ItemLevel({
  level,
  price,
  description,
  features,
  desc_sub,
  button_class,
  class_style,
}: {
  features: string[];
  level: string;
  price: string;
  description: string;
  desc_sub?: string;
  button_class?: string;
  class_style: React.CSSProperties;
}) {
  return (
    <div style={class_style} className="col-span-1 rounded-[20px] p-9 mb:p-4">
      <div className="flex flex-col mb:items-center mb:justify-center">
        <p
          className={`mb-4 w-full text-start text-white mb:text-center ${inter.className} text-[19px] leading-[30px] `}
        >
          {level}
        </p>
        <div className="mb-4 flex gap-6 justify-self-start mb:max-w-[105px] mb:flex-col mb:items-start mb:gap-0">
          <h3
            className={`text-[51px] leading-[54px] tracking-[-2px] text-white ${inter.className}`}
          >
            {price}
          </h3>
          <div className="flex flex-col">
            <p
              className={`w-full text-sm font-semibold leading-[21px] text-white ${manrope.className}`}
            >
              {description}
            </p>
            {desc_sub && (
              <p
                className={`w-full text-xs font-semibold leading-[18px] text-white/50 ${manrope.className}`}
              >
                {desc_sub}
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <ul className="flex min-h-[260px] flex-col gap-[10px] pt-5">
          {features.map((feature, index) => {
            return (
              <li key={index}>
                <div className="flex gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.5383 0.25C5.15333 0.25 0.78833 4.615 0.78833 10C0.78833 15.385 5.15333 19.75 10.5383 19.75C15.9233 19.75 20.2883 15.385 20.2883 10C20.2783 4.62 15.9183 0.26 10.5383 0.25ZM15.1793 8.294L9.68533 13.544C9.54333 13.677 9.35533 13.751 9.16033 13.75C8.96733 13.753 8.78233 13.679 8.64433 13.544L5.89733 10.919C5.69033 10.738 5.59833 10.458 5.65933 10.189C5.71933 9.92 5.92233 9.706 6.18733 9.632C6.45233 9.557 6.73733 9.634 6.92933 9.831L9.16033 11.959L14.1473 7.206C14.4503 6.942 14.9083 6.964 15.1853 7.255C15.4613 7.547 15.4593 8.005 15.1793 8.294Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    className={`text-white ${manrope.className} text-xs font-semibold leading-[18px]`}
                  >
                    {feature}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-4">
        <Button button_class={button_class} content="Sign up today" />
      </div>
    </div>
  );
}
function Options() {
  return (
    <div className="grid grid-cols-5 gap-4 pt-6">
      <div className="col-span-1"></div>
      <div className="col-span-1">
        <div className="h-[95px] text-center text-white">
          <h3
            className={`${inter.className} text-[30px] leading-8 tracking-[-1px]`}
          >
            Free
          </h3>
          <p
            className={`${manrope.className} text-sm font-semibold leading-[21px]`}
          >
            for everyone
          </p>
        </div>
        <div>
          <Button content="Sign up today" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="h-[95px] text-center text-white">
          <h3
            className={`${inter.className} text-[30px] leading-8 tracking-[-1px]`}
          >
            $10
          </h3>
          <div>
            <p
              className={`${manrope.className} text-xs font-semibold leading-[18px]`}
            >
              per user/month
            </p>
            <p
              className={`${manrope.className} text-xs font-semibold leading-[18px] tracking-[0.3px] text-white/50`}
            >
              billed monthly
            </p>
          </div>
        </div>
        <div>
          <Button content="Sign up today" button_class="bg-[#70FF88]" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="h-[95px] text-center text-white">
          <h3
            className={`${inter.className} text-[30px] leading-8 tracking-[-1px]`}
          >
            $18
          </h3>
          <div>
            <p
              className={`${manrope.className} text-xs font-semibold leading-[18px]`}
            >
              per user/month
            </p>
            <p
              className={`${manrope.className} text-xs font-semibold leading-[18px] tracking-[0.3px] text-white/50`}
            >
              billed monthly
            </p>
          </div>
        </div>
        <div>
          <Button content="Sign up today" button_class="bg-[#75EFFF]" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="h-[95px] text-center text-white">
          <h3
            className={`${inter.className} text-[30px] leading-8 tracking-[-1px]`}
          >
            📨
          </h3>
          <p
            className={`${manrope.className} mt-3 text-xs font-semibold leading-[18px]`}
          >
            Contact for pricing
          </p>
        </div>
        <div>
          <Button content="Sign up today" button_class="bg-[#FEB445]" />
        </div>
      </div>
    </div>
  );
}
function PricingPage() {
  const [data, setData] = useState<Feature[] | null>([]);
  const checkData = (plan: any) => {
    return renderData(plan) === true ? (
      <Image src={"/check.png"} width={24} height={24} alt="tick" />
    ) : renderData(plan) ? (
      renderData(plan)
    ) : (
      ""
    );
  };
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const data = await fetch(
      "http://localhost:1337/api/features?populate=*&sort=createdAt",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 2eb31109d41241e4151cd16ff756f70030932ad9d19527a5ff59736901f026ee64be7e3b84ad323873fc246448971e08d6b015986a21a2a3531082c9a300d7f7bc9af16ece6ee9dbd79fb067e7cc1e34e31b5fbe696072dec9c486a088adf65834e2c5ba7c7f48a09a99cd33799d7cc6481b760a098edc70dff9316ef38ee23e`,
        },
      },
    );
    const payload = await data.json();
    setData(payload.data);
  }
  return (
    <div
      style={{
        background: "#0A0517",
      }}
      className={`${roboto.className} h-auto`}
    >
      <div className="mb:pt-5">
        <div className="flex justify-center">
          <Header />
        </div>
        <div className="mx-auto mb-[30px] mt-[10px] flex flex-col items-center">
          <p
            style={{
              textShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            }}
            className={`text-center text-[#efeff1] ${inter.className} text-[39px] leading-[56px]`}
          >
            Pricing
          </p>
          <div className="max-w-[340px]">
            <p
              style={{
                textShadow: " 0px 4px 8px rgba(10, 5, 23, 0.16)",
              }}
              className={`text-white/60 ${roboto.className} text-center text-[24px] leading-7`}
            >
              Use Threads for free with your whole team or upgrade to enable
              even more features.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full px-5 py-10 mb:max-w-[922px] mb:px-0 lg:max-w-[940px]">
        <div className="grid grid-cols-1 gap-4 mb:grid-cols-3">
          <ItemLevel
            level="Starter"
            price="Free"
            features={[
              "Unlimited  users",
              "All integrations and APIs ",
              "50 threads",
              "500 chat messages",
              "SOC2 + GDPR compliance",
            ]}
            class_style={{
              background:
                "linear-gradient(0deg, rgba(66, 66, 66, 0.00) 0%, rgba(112, 112, 178, 0.20) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            description="Unlimited users and guests"
          />
          <ItemLevel
            button_class="bg-[#70FF88]"
            class_style={{
              background:
                "linear-gradient(0deg, rgba(66, 66, 66, 0.00) 0%, rgba(34, 103, 46, 0.30) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            level="Professional"
            price="$10"
            features={[
              "Unlimited users",
              "All integrations and APIs",
              "Unlimited threads & chats",
              "SOC2 + GDPR compliance",
            ]}
            description="per user/month"
            desc_sub="billed monthly"
          />
          <ItemLevel
            class_style={{
              background:
                "linear-gradient(0deg, rgba(66, 66, 66, 0.00) 0%, rgba(8, 124, 140, 0.30) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            level="Organization"
            price="$18"
            features={[
              "Unlimited users",
              "All integrations and APIs",
              "Unlimited threads & chats",
              "SOC2 + GDPR compliance",
              "Unlimited threads & chats",
              "Advanced invitation controls for members",
              "SCIM",
              "SSO",
            ]}
            description="per user/month"
            desc_sub="billed monthly"
            button_class="bg-[#75EFFF]"
          />
        </div>
        <div className="my-12 flex flex-col gap-12">
          <Advertisement
            heading="Are you a startup?"
            description="Get started with a discount on any plan."
            background_style={{
              background:
                "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.20) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            text_style={{
              background: "linear-gradient(91deg, #A1B4F2 0%, #5F65E3 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            button_style={{
              background: "linear-gradient(180deg, #A1A5F2 0%, #8175EA 100%)",
            }}
          />
          <Advertisement
            heading="Threads Enterprise"
            description="For enterprises who want to scale with confidence, Threads Enterprise 
offers advanced security, additional admin controls, dedicated customer 
support, and more."
            background_style={{
              background:
                "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(181, 131, 23, 0.20) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            text_style={{
              background: "linear-gradient(91deg, #FFF29F 0%, #FFA52C 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            button_style={{
              background: "linear-gradient(180deg, #FAE475 0%, #FFAB52 100%)",
            }}
          />
          <Advertisement
            heading="Threads Community"
            description="Threads Community offers communities the same tools that Threads 
Professional provides at a more achievable price point. "
            desc_sub="This plan is currently invite-only. "
            background_style={{
              background:
                "linear-gradient(0deg, rgba(69, 69, 69, 0.15) 0%, rgba(131, 58, 141, 0.20) 100%)",
              boxShadow:
                "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
            }}
            text_style={{
              background: "linear-gradient(91deg, #E99FF2 0%, #C85FE3 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            button_style={{
              background: "linear-gradient(180deg, #E99FF2 0%, #D375EA 100%)",
            }}
          />
          <div className="hidden pt-[71px] text-center mb:block">
            <span
              className={`text-center text-5xl font-semibold leading-[56px] text-white ${roboto.className}`}
            >
              Compare plans & features
            </span>
          </div>
        </div>
        <div
          className="hidden rounded-[20px] p-4 mb:block"
          style={{
            background:
              "linear-gradient(0deg, rgba(66, 66, 66, 0.15) 0%, rgba(112, 112, 178, 0.20) 100%)",
            boxShadow:
              "0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Options />
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="grid grid-cols-5 gap-4 border-b border-b-[#2e3541f2] pb-6 pt-[72px]"
                  >
                    <div className="col-span-1">
                      <span
                        className={`${inter.className} leading-5`}
                        style={{
                          background:
                            "linear-gradient(87deg, #FA5CFA 0%, #6F5CFF 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {item.attributes.name}
                      </span>
                    </div>
                    <div className="col-span-1 text-center">
                      <span
                        className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                      >
                        Starter
                      </span>
                    </div>
                    <div className="col-span-1 text-center">
                      <span
                        className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-[#6FFF88]`}
                      >
                        Professional
                      </span>
                    </div>
                    <div className="col-span-1 text-center">
                      <span
                        className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-[#75EFFF]`}
                      >
                        Organization
                      </span>
                    </div>
                    <div className="col-span-1 text-center">
                      <span
                        className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-[#FFB445]`}
                      >
                        Enterprise
                      </span>
                    </div>
                  </div>
                  {item.attributes.plans.data.length > 0 &&
                    item.attributes.plans.data.map((plan) => {
                      return (
                        <div
                          key={plan.id}
                          className="grid grid-cols-5 gap-4 border-b border-b-[#2e3541f2] py-6"
                        >
                          <div className="col-span-1 text-start">
                            <span
                              className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                            >
                              {plan.attributes.name}
                            </span>
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <span
                              className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                            >
                              {checkData(plan.attributes.starter)}
                            </span>
                          </div>
                          <div className="col-span-1  flex items-center justify-center">
                            <span
                              className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                            >
                              {checkData(plan.attributes.professional)}
                            </span>
                          </div>
                          <div className="col-span-1  flex items-center justify-center">
                            <span
                              className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                            >
                              {checkData(plan.attributes.organization)}
                            </span>
                          </div>
                          <div className="col-span-1  flex items-center justify-center">
                            <span
                              className={`${roboto.className}  text-[19px] font-semibold leading-[30px] text-white`}
                            >
                              {checkData(plan.attributes.enterprise)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  {(item.id === 5 || item.id === 9) && <Options />}
                </>
              );
            })}
        </div>
        <div
          style={{
            background:
              'url("http://localhost:3000/background.png") lightgray 0px -122.78px /\r\n    100% 186.712% no-repeat',
          }}
          className="mt-12 flex flex-col items-center rounded-[20px]"
        >
          <div className="mt-[47px]">
            <p className="text-center text-[32px] font-semibold leading-[43px] tracking-[-0.2px] text-white mb:text-4xl ">
              Make the switch to Threads
            </p>
          </div>
          <div className="my-12 flex w-full justify-center pb-6 pt-[10px]">
            <ButtonV2 />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default PricingPage;
