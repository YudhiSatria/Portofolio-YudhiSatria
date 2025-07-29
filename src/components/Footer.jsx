import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // dari 
const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About</a>
            <a href="#proyek">Project</a>
        </div>
         <div className="mb-0 lg:mr-15  ">
            
            <a href="https://github.com/yudhisatria" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-gray-400 transition duration-300animate__animated animate__fadeInLeft animate__delay-3s" />
            </a>
            <a href="https://www.instagram.com/yudhisattria/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-500 animate__animated animate__fadeInUp animate__delay-4s" />
            </a>
            <a href="https://wa.me/<083117629068>" >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white hover:text-green-400 transition duration-300 animate__animated animate__fadeInDown animate__delay-3s" />
            </a>
            <a href="https://mahasiswa.undiksha.ac.id/dwi.andika.3" >
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-white hover:text-gray-400 animate__animated animate__fadeInRight animate__delay-4s" />
            </a>
          </div>
    </div>
  )
}

export default Footer