"use client";


export default function MobileMockup() {
    return (
<div className="border-4 border-black rounded-3xl h-[400px] w-[240px] relative" style={{ boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)", display: "flex", justifyContent: "center" }}>
    {/* Content goes here */}
    <div className="absolute top-0 bg-black h-[10px] w-[70px] rounded-b-lg" style={{ left: "50%", transform: "translateX(-50%)" }}></div>
</div>


    )
}