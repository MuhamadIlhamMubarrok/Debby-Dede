import { motion as Motion } from "framer-motion";

// import semua gambar galeri kamu
import g1 from "../../assets/galeri/gambar1.webp";
import g2 from "../../assets/galeri/gambar2.webp";
import g3 from "../../assets/galeri/gambar3.webp";
import g4 from "../../assets/galeri/gambar4.webp";
import g5 from "../../assets/galeri/gambar5.webp";
import g6 from "../../assets/galeri/gambar6.webp";
import g7 from "../../assets/galeri/gambar7.webp";
import g8 from "../../assets/galeri/gambar8.webp";
import g9 from "../../assets/galeri/gambar9.webp";

import bungaKiri from "../../assets/bunga1.webp";
import bungaKanan from "../../assets/bunga1.webp";

const Galeri = () => {
  const galeri = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  return (
    <section id="galeri" className="relative flex flex-col items-center justify-center text-center bg-primary-02 py-24 px-4 md:px-10 overflow-hidden min-h-screen">
      {/* Ornamen bunga samar di background */}
      <img src={bungaKiri} alt="" className="absolute top-0 left-0 w-72 opacity-15 rotate-[-20deg] pointer-events-none select-none" />
      <img src={bungaKanan} alt="" className="absolute bottom-0 right-0 w-72 opacity-15 rotate-[20deg] scale-x-[-1] pointer-events-none select-none" />

      {/* Konten utama */}
      <div className="relative z-10 text-white bg-gray-800/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-10 md:p-14 max-w-6xl w-full shadow-2xl">
        {/* Judul */}
        <Motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bodoni mb-12 text-primary-01 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Galeri
        </Motion.h2>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {galeri.map((img, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.1 + index * 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative group overflow-hidden rounded-3xl shadow-lg border border-white/10 hover:border-primary-01/40 transition-all duration-500"
            >
              <img src={img} alt={`Galeri ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
