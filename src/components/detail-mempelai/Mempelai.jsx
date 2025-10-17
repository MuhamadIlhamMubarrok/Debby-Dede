import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import fotoPria from "../../assets/galeri/pria.png";
import fotoWanita from "../../assets/galeri/wanita.png";
import bungaKiri from "../../assets/bunga1.webp";
import bungaKanan from "../../assets/bunga1.webp";

const Mempelai = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <Motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      id="mempelai"
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center text-center bg-primary-02 py-24 px-4 overflow-hidden"
    >
      {/* Ornamen bunga kiri bawah */}
      <Motion.img
        src={bungaKiri}
        alt="bunga kiri"
        initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[20px] left-[-60px] w-60 md:w-80 opacity-70 pointer-events-none"
      />

      {/* Ornamen bunga kanan atas */}
      <Motion.img
        src={bungaKanan}
        alt="bunga kanan"
        initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
        animate={controls}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[30px] right-[-60px] w-60 md:w-80 opacity-70 rotate-[10deg] pointer-events-none"
      />

      {/* Kartu utama */}
      <div className="relative z-10 text-white bg-gray-800/20 backdrop-blur-lg rounded-3xl border border-primary-01/50 p-10 md:p-14 max-w-4xl shadow-2xl">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -30 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bodoni mb-12 text-primary-01 drop-shadow-lg">
          Mempelai
        </Motion.h2>

        {/* Foto & Nama */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Mempelai Pria */}
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.4, duration: 1 }} className="flex flex-col items-center">
            <img src={fotoPria} alt="Mempelai Pria" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary-01/50 shadow-lg mb-5" />
            <h3 className="text-2xl md:text-3xl font-playwrite text-primary-01">Debby Pangestu Haryanto S.T</h3>
            <p className="text-white/80 font-bodoni mt-1">Putra Pertama dari Bapak Tri Haryanto dan Ibu Tri Paryani</p>
          </Motion.div>

          {/* Simbol "&" */}
          <Motion.span initial={{ opacity: 0 }} animate={controls} transition={{ delay: 0.6, duration: 1 }} className="text-5xl md:text-6xl font-bodoni text-primary-01">
            &
          </Motion.span>

          {/* Mempelai Wanita */}
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.8, duration: 1 }} className="flex flex-col items-center">
            <img src={fotoWanita} alt="Mempelai Wanita" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary-01/50 shadow-lg mb-5" />
            <h3 className="text-2xl md:text-3xl font-playwrite text-primary-01">Dede Astuti S.T</h3>
            <p className="text-white/80 font-bodoni mt-1">Putri ke 2 dari Bapak Bono dan Ibu Enung Halimah</p>
          </Motion.div>
        </div>

        {/* Kutipan */}
        <Motion.p initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 1.2, duration: 1 }} className="mt-14 text-lg md:text-xl font-playwrite text-white/90 max-w-2xl mx-auto leading-relaxed">
          “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan untukmu pasangan hidup agar kamu hidup tenteram bersamanya.”
        </Motion.p>
      </div>
    </Motion.section>
  );
};

export default Mempelai;
