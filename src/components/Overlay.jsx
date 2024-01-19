export function Overlay() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full p-4 md:p-10 flex items-start flex-col  select-none overflow-hidden">
        <div className="flex w-full p-0 items-center justify-between">
          <p className="font-antonio text-5xl tracking-[-2px] font-bold">3D WEB</p>
          <p className="text-3xl">⍫</p>
        </div>
        <div className="mt-16 w-full p-0 flex items-start justify-between">
          <div className="flex flex-col h-full text-sm">
            <p className="font-bold">R3F, Vite</p>
            <p>Interactive technology</p>
            <p>—</p>
          </div>
          <p
            className="transform rotate-90 translate-x-full translate-y-2 origin-right text-md font-bold leading-normal text-right whitespace-nowrap"
            style={{
              transform: 'rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)'
            }}>
            DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
          </p>
        </div>
        <div className="font-antonio w-full h-full flex justify-between items-end p-0">
          <p className="text-[100px] md:text-[250px] leading-[100%] text-[#080808cb]">ߥ</p>
          <p className="hidden md:block md:text-[200px] leading-[100%] text-[#08080883]">ﮯ1</p>
          <p className="text-[100px] md:text-[250px] leading-[100%] text-[#08080827]">ﮮ</p>
        </div>
        <div className="mt-14 w-full flex items-end justify-between p-0">
          <div className="text-md flex flex-col">
            <p className="font-semibold">Dreaming of Shaders</p>
            <p className="hidden md:block tracking-wide">Dreaming of Shaders</p>
          </div>

          <p className="justify-self-end text-md italic">Berlin, San Francisco</p>
        </div>
      </div>
      <div className="left-0 right-0 fixed mb-24 md:mb-14 text-center bottom-0 font-semibold tracking-tighter text-xl">
        <p className="cursor-pointer select-none">CLICK SOMEWHERE</p>
      </div>
    </>
  )
}
