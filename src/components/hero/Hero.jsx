import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import wayang from "../../assets/wayang.webp";
import fotoMempelai from "../../assets/galeri/gambar3.webp";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Variants biar motion-nya rapi dan sinkron
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Motion.section ref={setRefs} initial="hidden" animate={controls} variants={fadeUp} className="relative inset-0 flex flex-col justify-start items-center text-center overflow-hidden py-24 px-4 bg-primary-02">
      <div className="absolute inset-0 opacity-10 bg-motif" />
      <div className="absolute inset-0 bg-primary-02/40" />

      {/* Wayang */}
      <Motion.img src={wayang} alt="wayang kanan" variants={fadeScale} transition={{ delay: 0.6 }} className="absolute z-20 bottom-[350px] right-[-70px] max-w-60 pointer-events-none" />
      <Motion.img src={wayang} alt="wayang kiri" variants={fadeScale} transition={{ delay: 0.8 }} className="absolute bottom-[60px] left-[-110px] w-82 max-w-56 pointer-events-none rotate-[15deg] scale-x-[-1]" />

      {/* Konten Utama */}
      <div className="relative z-10 text-gray-800 max-w-[600px]">
        <Motion.h2 variants={fadeUp} transition={{ delay: 0.2 }} className="text-5xl font-bodoni mb-2">
          The Wedding Of
        </Motion.h2>

        <Motion.h2 variants={fadeScale} transition={{ delay: 0.4 }} className="text-5xl font-playwrite mb-2 text-primary-01">
          Debby & Dede
        </Motion.h2>

        <Motion.p variants={fadeUp} transition={{ delay: 0.6 }} className="font-bodoni text-2xl">
          25 . 09 . 2025
        </Motion.p>
      </div>

      {/* Foto Mempelai */}
      <Motion.img src={fotoMempelai} alt="foto mempelai" variants={fadeScale} transition={{ delay: 0.8 }} className="relative z-10 max-w-full h-auto rounded-xl shadow-lg mt-6 border-2 border-gray-800/50" />

      {/* Ayat Qur'an */}
      <Motion.div variants={fadeUp} transition={{ delay: 1.0 }} className="relative z-30 mt-40">
        <div className="bg-primary-01/25 backdrop-blur-sm rounded-2xl border border-gray-800/50 px-5 py-6 max-w-full text-white shadow-md">
          <p className="font-poppins text-justify text-md font-thin leading-relaxed mb-3">
            Allah SWT menciptakan pasangan dari jenis yang sama agar manusia dapat merasa tenteram, dan di antara keduanya dijadikan rasa cinta (mawaddah) dan kasih sayang (rahmah)
          </p>
          <p className="text-base font-playwrite font-semibold">QS. Ar-Rum : 21</p>
        </div>
      </Motion.div>
    </Motion.section>
  );
};

export default Hero;
