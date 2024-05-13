import HeadComponent from "@/components/Head";

// const Footer = () => (
//   <footer className="mt-5 text-gray-500 font-normal w-full text-center">
//     {new Date().getFullYear()} © Playroom
//   </footer>
// );

const Layout = ({ children }) => (
  <>
    <HeadComponent />
    {/* <div className="w-full bg-cover bg-center h-fit sm:h-[calc(100vh-4rem)] place-items-start" style={{ backgroundImage: `url("/imgs/hero-bg.svg")` }}> */}
    <div className="w-screen h-screen place-items-start">
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 to-red-500 sm:from-transparent sm:to-transparent h-full w-full flex flex-col sm:flex-row justify-center gap-8 sm:gap-4">
        <div className="sm:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 to-red-500 sm:w-1/2 sm:h-full flex justify-center items-center -mt-20 sm:mt-0 text-white sm:pt-0">
          <div className="min-w-[20rem] sm:w-72 flex flex-col sm:gap-4">
            <h1 className="font-black sm:text-6xl text-3xl">Playroom</h1>
            <p className="font-light sm:text-2xl text-lg">Connect in one music room,<br/> from anywhere.</p>
          </div>
        </div>
        <div className="sm:w-1/2 sm:h-full flex justify-center">
          <div className="sm:w-full flex items-center justify-center">{children}</div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </>
);

export default Layout;
