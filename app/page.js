import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import img from "@/public/assets/game4.jpg";
import img2 from "@/public/assets/game2.jpg";
import img3 from "@/public/assets/game.jpg";
import ig from "@/public/assets/ig.webp";
import fb from "@/public/assets/fb.svg";
import mail from "@/public/assets/mail.png";
import wp from "@/public/assets/wp.png";

const page = () => {
  return (
    <>
      <Nav />
      <div className="bg-white mt-16">
        <Image src={img} width="100%" alt="board" />
      </div>
      <div className="flex max-sm:flex max-sm:flex-col">
        <div className="flex flex-col p-10 gap-7 w-1/2 max-sm:w-full">
          <div className="text-gray-900 font-bold text-4xl max-sm:text-3xl">
            What is BrainSproutGames?
          </div>
          <div className="text-gray-900 font-semibold text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quam
            assumenda facilis aperiam dignissimos soluta alias, sint vero
            expedita! Perferendis aut facilis repudiandae dolorem. Deserunt ut
            ex consequuntur officiis fugit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aliquid perspiciatis numquam
            architecto est totam quos enim voluptatibus aliquam, fugit dolor
            facilis exercitationem veritatis dolorem! Sint quo fugit tenetur
            neque aspernatur!
          </div>
        </div>
        <div className="w-1/2 p-10 flex justify-center max-sm:w-full">
          <Image className="rounded-2xl" src={img2} width={400} alt="game" />
        </div>
      </div>
      <div className="bg-gray-900 -skew-y-2 w-full p-10 mb-20 max-sm:mb-10">
        <div className="text-center text-white text-4xl skew-y-2">
          Our Board Games
        </div>
        <section className="text-white body-font skew-y-2">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image src={img2} alt="prodict" />
                </a>
                <div className="mt-4">
                  <h3 className="text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image src={img3} alt="prodict" />
                </a>
                <div className="mt-4">
                  <h3 className="text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image src={img2} alt="prodict" />
                </a>
                <div className="mt-4">
                  <h3 className="text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-10 text-gray-900 flex justify-center items-center max-sm:flex max-sm:flex-col max-sm:gap-6 max-sm:p-8">
        <div className="w-1/2 flex items-center flex-col justify-center border-r-2 border-gray-900 max-sm:border-none">
          <div className="font-bold text-3xl max-sm:text-2xl">Follow Us!</div>
          <div className="flex gap-8 py-10 max-sm:gap-10 max-sm:py-4">
            <Image className="max-sm:h-14 max-sm:w-auto" src={ig} width={70} alt="ig"></Image>
            <Image className="max-sm:h-14 max-sm:w-auto" src={fb} width={70} alt="fb"></Image>
          </div>
        </div>
        <div className="w-1/2 flex items-center flex-col justify-center border-l-2 border-gray-900  max-sm:border-none">
          <div className="font-bold text-3xl max-sm:text-2xl">Contact Us!</div>
          <div className="flex gap-8 py-10 max-sm:gap-10 max-sm:py-4">
            <Image className="max-sm:w-auto max-sm:h-12" src={mail} width={90} alt="mail"></Image>
            <Image className="max-sm:h-14 max-sm:w-auto" src={wp} width={70} alt="wp"></Image>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
