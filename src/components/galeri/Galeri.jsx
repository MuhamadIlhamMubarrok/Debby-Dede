import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// import semua gambar galeri kamu
import g1 from "../../assets/galeri/gambar1.webp";
import g2 from "../../assets/galeri/gambar2.webp";
import g3 from "../../assets/galeri/gambar3.webp";
import g4 from "../../assets/galeri/gambar4.webp";

const Galeri = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  const galeri = [g1, g2, g3, g4];

  return (
    <Motion.section ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls} id="galeri" className="relative flex flex-col items-center justify-center text-center bg-primary-02 py-20 px-6 overflow-hidden min-h-screen">
      <div className="relative z-10 text-white bg-gray-800/20 backdrop-blur-lg rounded-3xl border border-primary-01/50 p-10 md:p-14 max-w-6xl w-full shadow-2xl">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -30 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bodoni mb-12 text-primary-01 drop-shadow-lg">
          Galeri
        </Motion.h2>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galeri.map((img, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={controls}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              className={`overflow-hidden rounded-2xl border border-white/10 shadow-md hover:scale-[1.03] transition-transform duration-300 ease-out`}
            >
              <img src={img} alt={`Galeri ${index + 1}`} className="w-full h-full object-cover" />
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default Galeri;
