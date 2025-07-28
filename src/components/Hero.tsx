export default function Hero() {
  return (
    <div className="h-screen w-screen relative">
      <div className="h-full w-full absolute -z-10">
        <video
          autoPlay
          muted
          className="h-full w-full"
          loop
          playsInline
          height={1080}
          width={1920}
        >
          <source src="/spectra-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="h-screen w-screen flex flex-row ">
        <div className="w-full h-full basis-1/2"></div>
        <div className="w-full text-4xl font-semibold flex h-full justify-center items-center basis-1/2">
          Spectra Design
        </div>
      </div>
    </div>
  );
}
