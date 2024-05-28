import Image from "next/image";
import React from "react";

export function Button() {
  return (
    <div className="box-button w-full max-w-[204px] p-[5px]">
      <button
        style={{
          background: "linear-gradient(180deg, #896EFD 0%, #6B4AFC 100%)",
          boxShadow: "0px 0px 0px 1px rgba(255, 255, 255, 0.10) inset",
        }}
        className="flex w-full max-w-[194px] items-center justify-center gap-[10px] rounded-lg pb-[11px] pt-[13px]"
      >
        <span className="font-semibold text-[#efeff1]">Sign up today</span>
        <div>
          <Image
            src="/image.png"
            width={28}
            height={28}
            alt="Picture of the author"
          />
        </div>
      </button>
    </div>
  );
}
