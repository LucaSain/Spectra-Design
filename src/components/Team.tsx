import Image from "next/image";

export default function Team() {
  return (
    <div className="min-h-screen h-max py-10 w-screen flex flex-col items-center px-10">
      <div className="text-4xl pb-[20vh] sticky top-[20vh]">Team</div>
      <div className="flex flex-col sm:flex-row gap-6 h-[80vh]  bg-base-100 w-full z-10 p-8">
        <div className="basis-1/2 md:pr-40 inset-0">
          <h3 className="text-2xl font-semibold"> Meet the team.</h3>
          <br />
          <br />
          <br />
          <p className="text-lg">
            Sed mattis, ligula eget rhoncus tempor, lectus odio sollicitudin
            est, sit amet feugiat odio eros sit amet odio. Quisque non
            ullamcorper tellus. Donec porta libero tempor dolor iaculis aliquam.
            Sed ut dolor tristique, faucibus nisi vel, suscipit ex. Nulla
            viverra dignissim porta. Ut vitae maximus nulla, sagittis vestibulum
            sem. Ut et orci non neque commodo tincidunt. Sed a pellentesque mi.
            Pellentesque vitae odio enim.
          </p>
        </div>
        <div className="basis-1/2 h-full w-full shadow-2xl">
          <Image
            src="/beliefs.jpg"
            height={1000}
            width={1000}
            alt=""
            className="w-full h-full rounded-lg basis-1/2 object-cover "
          />
        </div>
      </div>
    </div>
  );
}
