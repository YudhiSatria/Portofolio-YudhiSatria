import DataImage from "./asset/img/herooo.png";
import LogoImage from "./asset/img/logo-icon.png";
import Rotasi from "./asset/img/rotasi-1.png";
import Rotasi2 from "./asset/img/rotasih-2.png";
import RingImage from "./asset/img/linesz.png";
import Lines from "./asset/img/linesss.png";
import Tools1 from "./asset/img/vscode.png";
import Tools2 from "./asset/img/Adobe-XD.png";
import Tools3 from "./asset/img/canvalogo.svg";
import Tools4 from "./asset/img/figma.png";
import Tools5 from "./asset/img/flutter.png";
import Tools6 from "./asset/img/github.webp";
import Tools7 from "./asset/img/flutterflow-logo.png";
import Tools8 from "./asset/img/js.png";
import Tools9 from "./asset/img/wordpres.png";
import Tools10 from "./asset/img/laragon.svg";
import Tools11 from "./asset/img/pycharm.jpg";
import Tools12 from "./asset/img/intellij-idea.png";
import Tools13 from "./asset/img/apache.png";
import Tools14 from "./asset/img/chatgptt.png";
import Tools15 from "./asset/img/next-js.jpg";
import Tools16 from "./asset/img/vite.png";
import { listProyek } from './data';

import ScrollArrow from './components/ScrollArrow';
import { TypeAnimation } from "react-type-animation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // dari paket "brands"




function App() {

  return (
    <>
      {/* Konten halaman */}
      <div className="z-50"> {/* supaya bisa scroll */}

      </div>

      {/* Tombol panah */}
      <ScrollArrow />
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-0 px-4 mx-auto box-border">
        <div className="md:pt-20">

          {/* <div className="flex items-center text-2xl gap-3 mb-6 w-fit rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
            <p className="font-bold">I'm Ready For Job</p>
            <p className="bg-blue-600 font-bold p-1 px-4 rounded-lg" >Web Developer</p>
          </div> */}

          <div className="text-3xl/tight  flex text-center font-bold mb-2 ml-0 motion-preset-typewriter-1 animate__animated animate__fadeInUp animate__delay-3s" >
            <h1 className="">I'm, Yudhi Satria</h1>
          </div>
          <div className="text-7xl/tight font-bold mb-4 animate__animated animate__fadeInLeft animate__delay-3s bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">
            <TypeAnimation
              sequence={[
                "I'm Web Developer",
                1000,
                "I'm UI/UX Designer",
                1000
              ]}
              wrapper="span"
              speed={30}
              className="text-6xl font-bold"
              repeat={Infinity}
            />
          </div>
          <p className="text-base/loose mb-6 opacity-50 animate__animated animate__fadeInUp animate__delay-3s">For the past three years, I’ve been passionate about crafting thoughtful digital experiences—whether through sleek websites or eye-catching <br />visual assets like posters and banners.</p>
          <div className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <a href="https://github.com/yudhisatria" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-gray-400 animate__animated animate__fadeInLeft animate__delay-3s" />
            </a>
            <a href="https://www.instagram.com/yudhisattria/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-500 animate__animated animate__fadeInUp animate__delay-4s" />
            </a>
            <a href="https://wa.me/<083117629068>" >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white hover:text-green-400 animate__animated animate__fadeInDown animate__delay-3s" />
            </a>
            <a href="https://mahasiswa.undiksha.ac.id/dwi.andika.3" >
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-white hover:text-gray-400 animate__animated animate__fadeInRight animate__delay-4s" />
            </a>
          </div>
          <div className="flex items-center sm:gap-5 gap-2 animate__animated animate__fadeInUp animate__delay-3s">
            <a href="https://drive.google.com/uc?export=download&id=1uLTC7-NjoxLx_ZrZbL4zFXFpR7Bh5PVq" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-300 hover:to-pink-300 rounded-2xl p-3 transition-all duration-300">Download CV <i className="ri-download-cloud-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 rounded-2xl hover:bg-zinc-600 p-3">View Projects<i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage} alt="Image Hero" className=" bottom-20 w-145 md:ml-auto animate__animated animate__fadeInRight animate__delay-3s z-40" loading="lazy" />
        <div className="animate__animated animate__zoomIn animate__delay-3s relative bottom-145 left-50">
          <img src={Rotasi} alt="" className="flex absolute w-120 animate-[spin_3s_linear_infinite] md:left-140 top-55 -left-35" />
        </div>
        <div className="animate__animated animate__zoomIn animate__delay-3s relative bottom-100 right-15">
          <img src={Rotasi2} alt="" className="flex absolute w-100 animate-[spin_3s_linear_infinite]" />
        </div>
      </div>
      {/* Hero Section */}

      {/* Tentang */}
      <img src={RingImage} alt="" className="w-145 absolute z-[-1] left-[0px] rotate-50" loading="lazy" data-aos="fade-right" data-aos-duration="1000" />
      <img src={Lines} alt="" className="w-100 absolute z-[-1] right-[25px] pt-60 hidden lg:block" loading="lazy" data-aos="fade-left" data-aos-duration="1500" />
      <div className=" tentang py-10 mt-30" id="tentang" data-aos="fade-up" data-aos-duration="1000">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-2xl opacity-97">
          <div className="flex text-center mx-au ">
            <h1 className="text-justify font-bold text-4xl sm:text-3xl md:text-4xl leading-tight mb-4 bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text text-transparent">
              Hi, I'm Yudhi Satria
            </h1>
            <h1 className="text-4xl" data-aos="zoom-in" data-aos-duration="6000">👋🏻</h1>
          </div>
          <p
            className="text-base/loose mb-10 text-justify">
            A Frontend Web Developer and Designer who focuses on creating responsive and attractive websites. I have experience in various web technologies, including HTML, CSS, JavaScript, and various modern frameworks. In addition, I also have expertise in graphic design.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
            {/* Atas */}
            <div>
              <h1 className="text-4xl font-bold mb-1">
                14 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">+</span>
              </h1>
              <p>Project Completed</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-1">
                3 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">+</span>
              </h1>
              <p>Years of Experience</p>
            </div>

            {/* Bawah */}
            <div>
              <h1 className="text-4xl font-bold mb-1">
                2 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">+</span>
              </h1>
              <p>Clients</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-1">
                99 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">%</span>
              </h1>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32 px-4">
        <h1 className="text-4xl/snug font-bold mb-4 " data-aos="fade-up" data-aos-duration="1000">Tools used</h1>
        <p
          className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-full w-full text-base/loose opacity-50 whitespace-normal text-wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Here are some of the essential tools that I frequently use in developing website and design projects, helping me streamline workflows and bring creative ideas to life.
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-10" >
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools1} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Visual Studio Code</h4>
              <p>Code Editor</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools2} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Adobe XD</h4>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools3} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Canva</h4>
              <p>Graphic Design</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools4} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Figma</h4>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools5} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Flutter</h4>
              <p>Mobile Development</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools6} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">GitHub</h4>
              <p>Version Control</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools7} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">FlutterFlow</h4>
              <p>No-Code App Builder</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools8} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">JavaScript</h4>
              <p>Programming Language</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools9} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">WordPress</h4>
              <p>CMS</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools10} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Laragon</h4>
              <p>Local Server</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools11} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">PyCharm</h4>
              <p>Python IDE</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools12} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">IntelliJ IDEA</h4>
              <p>Java IDE</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools13} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Apache</h4>
              <p>Web Server</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools14} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">ChatGPT</h4>
              <p>AI Assistant</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools15} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Next.js</h4>
              <p>React Framework</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 p-3 border-1 border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000">
            <img src={Tools16} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md" />
            <div>
              <h4 className="font-bold">Vite</h4>
              <p>Frontend Build Tool</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* <Proyek />*/}
      <div className=" px-4" id="proyek">
        <div className="mt-32 py-5">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Project</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000">Here are some projects I have worked on.</p>
        </div>
        <div className="proyek-box mt-14 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.image} alt={proyek.judul} />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base-loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600 hover:bg-zinc-800" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-300 hover:to-pink-300 rounded-lg p-3 transition-all duration-300 block w-full cursor-pointer ">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-5 p-0" id="kontak" >
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000">Let's Connect with me</p>
        <form action="https://formsubmit.co/satriayudhi70@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="nama" placeholder="Enter Full Name" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Message</label>
              <textarea name="pesan" id="pesan" cols="35" rows="5" placeholder="Enter Massage" className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-300 hover:to-pink-300 rounded-lg p-3 transition-all duration-300 block w-full cursor-pointer ">Send Massage</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );

}

export default App;
