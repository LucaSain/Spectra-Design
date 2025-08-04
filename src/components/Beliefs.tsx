import Image from "next/image";

export default function Beliefs() {
  return (
    <div className="min-h-screen flex relative flex-col justify-end items-center">
      <div className="bg-gradient-to-t from-transparent via-transparent to-base-100  z-30 h-screen w-screen absolute top-0 "></div>

      <h2 id="beliefs" className="text-4xl sticky top-1/2 z-20 pb-10">
        Beliefs
      </h2>

      {/* Sa ma bata mama ce am facut aici */}
      <div className="min-h-[160vh] h-max w-screen relative">
        <div className=""></div>
        {/* <div
          className="absolute -z-10 inset-0 h-full w-full
      bg-[radial-gradient(circle,#73737350_1px,transparent_1px)]
      bg-[size:10px_10px]"
        /> */}
        <div className="h-full w-screen bg-gradient-to-tr from-transparent via-base-100 to-base-100/70 z-10 absolute top-0"></div>
        <Image
          src="/beliefs.jpg"
          alt="Background"
          height={1080}
          width={1920}
          className="object-cover top-0  sticky h-screen w-screen"
        />
        <div className="text-lg sticky top-[10vh] sm:top-[30vh] sm:left-[70vw] pr-10  pb-10 mx-3 sm:max-w-[40%] z-40 sm:z-30 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu enim
          ut libero vestibulum maximus. Nam odio dolor, accumsan eget posuere
          vitae, imperdiet a lorem. Sed vitae lacus feugiat enim consequat
          auctor in vel purus. Integer malesuada hendrerit lorem, vitae placerat
          massa congue in. Suspendisse fermentum faucibus nisl vitae mattis. In
          fringilla a sapien vitae venenatis. Sed vitae odio auctor, tincidunt
          mi at, consectetur justo. Maecenas vitae turpis pharetra, vestibulum
          sem vitae, consectetur nulla. Aliquam vel rhoncus enim. In molestie
          bibendum neque, eget vulputate est convallis sed. Suspendisse bibendum
          nisl quis sodales rhoncus. Aenean elit quam, egestas id scelerisque
          placerat, condimentum nec urna. Vivamus et tempor lorem.
        </div>
      </div>

      <div className="bg-gradient-to-b from-transparent via-base-100/70 to-base-100  z-30 h-screen w-screen absolute bottom-0 "></div>
    </div>
  );
}
