import { FaHeart, FaBookOpen, FaMapMarkerAlt, FaImage } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[100] bg-white/60 backdrop-blur-md border-t border-[#d4c4b6]/40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] py-3">
      <div className="flex justify-around items-center max-w-md mx-auto text-[#8c7a6f]">
        {/* Mempelai */}
        <button onClick={() => scrollToSection("mempelai")} className="flex flex-col items-center gap-1 group focus:outline-none">
          <FaHeart size={22} className="transition-all duration-300 group-hover:text-primary-01 group-active:scale-110" />
          <span className="text-[10px] font-medium group-hover:text-primary-01">Mempelai</span>
        </button>

        {/* Galeri */}
        <button onClick={() => scrollToSection("galeri")} className="flex flex-col items-center gap-1 group focus:outline-none">
          <FaImage size={22} className="transition-all duration-300 group-hover:text-primary-01 group-active:scale-110" />
          <span className="text-[10px] font-medium group-hover:text-primary-01">Galeri</span>
        </button>

        {/* Lokasi */}
        <button onClick={() => scrollToSection("lokasi")} className="flex flex-col items-center gap-1 group focus:outline-none">
          <FaMapMarkerAlt size={22} className="transition-all duration-300 group-hover:text-primary-01 group-active:scale-110" />
          <span className="text-[10px] font-medium group-hover:text-primary-01">Lokasi</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
