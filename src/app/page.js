export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center  bg-base-100 text-base-content font-sans">
      <div>
        <div className="w-full bg-base-100 ">

          {/* Carousel */}
          <div className="carousel w-full ">

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-[400px]">
              <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    }}
  ></div>


              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4"
              >

                <h1 className="text-4xl font-bold drop-shadow-lg">
                  Welcome to IdeaVault 💡
                </h1>

                <p className="mt-4 max-w-xl text-lg text-gray-200">
                  Store, organize, and grow your ideas in one powerful place.
                  Built for creators, thinkers, and innovators.
                </p>

                <button className="btn btn-primary mt-6">
                  Get Started
                </button>
              </div>

              {/* navigation */}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    }}
  ></div>
<div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">

                <h1 className="text-4xl font-bold drop-shadow-lg">
                  Capture Ideas Instantly ⚡
                </h1>

                <p className="mt-4 max-w-xl text-lg text-gray-200">
                  Never lose a thought again. Save ideas in seconds and revisit anytime.
                </p>

                <button className="btn btn-primary mt-6">
                  Explore Ideas
                </button>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-[400px]">
                <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    }}
  ></div>
<div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">

                <h1 className="text-4xl font-bold drop-shadow-lg">
                  Build Your Future 🚀
                </h1>

                <p className="mt-4 max-w-xl text-lg text-gray-200">
                  Turn ideas into reality with structured planning and creativity tools.
                </p>

                <button className="btn btn-primary mt-6">
                  Start Now
                </button>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}