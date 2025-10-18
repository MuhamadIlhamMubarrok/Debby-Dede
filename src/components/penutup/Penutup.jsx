import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bungaKiri from "../../assets/bunga1.webp";
import bungaKanan from "../../assets/bunga1.webp";
import burung from "../../assets/burung.webp";
import wayang from "../../assets/wayang.webp";
import fotoPria from "../../assets/galeri/pria.png";
import fotoWanita from "../../assets/galeri/wanita.png";

const Penutup = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 80 });
    }
  }, [inView, controls]);

  return (
    <Motion.section ref={ref} initial={{ opacity: 0, y: 80 }} animate={controls} transition={{ duration: 1.2, ease: "easeOut" }} className="relative bg-primary-02 text-white py-24 px-4 text-center overflow-hidden">
      {/* === Motif & Dekorasi Background === */}
      <div className="absolute inset-0 opacity-15 bg-motif pointer-events-none" />
      <Motion.img
        src={wayang}
        alt="wayang kiri"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ delay: 0.4, duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-60 md:w-72 opacity-25 pointer-events-none"
      />
      <Motion.img
        src={wayang}
        alt="wayang kanan"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ delay: 0.6, duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-60 md:w-72 opacity-25 pointer-events-none rotate-y-180"
      />
      <Motion.img src={burung} alt="burung terbang" initial={{ x: "-10%" }} animate={{ x: "110%" }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-40 left-0 w-40 opacity-70 pointer-events-none" />

      {/* === Ornamen Bunga === */}
      <Motion.img
        src={bungaKiri}
        alt="bunga kiri"
        initial={{ opacity: 0, scale: 0.9, x: -40, y: 40 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-[-20px] left-[-60px] w-60 md:w-72 opacity-80 pointer-events-none"
      />
      <Motion.img
        src={bungaKanan}
        alt="bunga kanan"
        initial={{ opacity: 0, scale: 0.9, x: 40, y: -40 }}
        animate={controls}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-[-10px] right-[-60px] w-60 md:w-72 opacity-80 rotate-[10deg] pointer-events-none"
      />

      {/* === Konten utama === */}
      <div className="relative z-10 bg-gray-800/20 backdrop-blur-xl border border-primary-01/50 rounded-3xl shadow-2xl p-10 md:p-14 max-w-4xl mx-auto">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -20 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl font-playwrite text-primary-01 mb-10">
          Terima Kasih
        </Motion.h2>

        {/* Foto Mempelai */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-12">
          {/* Wanita */}
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 0.5, duration: 1 }} className="flex flex-col items-center">
            <div className="relative">
              <img src={fotoWanita} alt="Mempelai Wanita" className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-primary-01/50 shadow-xl" />
              <Motion.img
                src={bungaKanan}
                alt="bunga dekor"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-5 -right-5 w-24 rotate-[15deg] pointer-events-none"
              />
            </div>
            <p className="text-primary-01 mt-4 text-3xl font-playwrite">Dede Astuti</p>
          </Motion.div>

          {/* Simbol & */}
          <Motion.span initial={{ opacity: 0 }} animate={controls} transition={{ delay: 0.6, duration: 1 }} className="text-5xl font-bodoni text-primary-01">
            &
          </Motion.span>

          {/* Pria */}
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col items-center">
            <div className="relative">
              <img src={fotoPria} alt="Mempelai Pria" className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-primary-01/50 shadow-xl" />
              <Motion.img
                src={bungaKiri}
                alt="bunga dekor"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-5 -left-5 w-24 rotate-[-15deg] pointer-events-none"
              />
            </div>
            <p className="text-primary-01 mt-4 text-3xl font-playwrite">Debby Pangestu Haryanto</p>
          </Motion.div>
        </div>

        {/* Ucapan Penutup */}
        <Motion.p initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 1.2, duration: 1 }} className="text-white/90 font-poppins font-thin text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Dengan penuh rasa syukur dan bahagia, kami mengucapkan terima kasih atas kehadiran, doa, dan restu yang telah diberikan. Semoga Tuhan membalas segala kebaikan Bapak/Ibu/Saudara/i dengan limpahan rahmat dan kebahagiaan.
        </Motion.p>

        {/* Catatan Bawah */}
        <Motion.p initial={{ opacity: 0 }} animate={controls} transition={{ delay: 1.6, duration: 1 }} className="text-sm text-white/70 mt-10 italic">
          – Sampai jumpa di hari bahagia kami –
        </Motion.p>
      </div>
    </Motion.section>
  );
};

export default Penutup;
