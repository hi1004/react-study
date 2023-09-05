import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Home = () => {
  return (
    <section name="home" className="flex w-full h-screen bg-zinc-200">
      <div className="grid md:grid-cols-2 md:gap-10 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
          <h3 className="text-4xl">Use our chat platform.</h3>
          <h2 className="py-3 text-5xl font-bold md:text-6xl">
            Chat management
          </h2>
          <p className="text-2xl">Chatty is the best chat platform.</p>
          <button className="py-3 px-6 sm:w-[60%] mt-10 transition-all">
            Get Started
          </button>
        </div>
        <div className="flex flex-col justify-center px-2">
          <h2 className="font-semibold sm:text-[48px] text-[40px] sm:leading-[76.8px] leading-[66.8px]">
            Easily download app <br className="hidden sm:block" />
            Google & Apple
          </h2>
          <p className="text-[18px] leading-[1.8] max-w-[470px] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            corrupti reprehenderit harum maiores recusandae natus molestiae
            laborum blanditiis, voluptas, provident ipsam esse incidunt possimus
            nisi vel a. Quis, voluptatibus officia!
          </p>

          <div className="flex flex-wrap mt-6 sm:mt-10 w-full">
            <img
              src={apple}
              alt="apple_play"
              className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google_play"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
