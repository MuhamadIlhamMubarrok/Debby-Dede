import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bungaKiri from "../../assets/bunga1.webp";
import bungaKanan from "../../assets/bunga1.webp";

const GiftSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 80 });
    }
  }, [inView, controls]);

  return (
    <Motion.section ref={ref} initial={{ opacity: 0, y: 80 }} animate={controls} transition={{ duration: 1.2, ease: "easeOut" }} className="relative bg-primary-02 text-white py-24 px-6 text-center overflow-hidden">
      {/* === Ornamen bunga kiri bawah === */}
      <Motion.img
        src={bungaKiri}
        alt="ornamen kiri"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-[-20px] left-[-60px] w-60 md:w-72 opacity-70 pointer-events-none"
      />

      {/* === Ornamen bunga kanan atas === */}
      <Motion.img
        src={bungaKanan}
        alt="ornamen kanan"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={controls}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-[-20px] right-[-60px] w-60 md:w-72 opacity-70 rotate-[10deg] pointer-events-none"
      />

      {/* === Konten utama === */}
      <div className="relative z-10 bg-gray-800/20 backdrop-blur-xl border border-primary-01/50 rounded-3xl shadow-2xl p-10 md:p-14 max-w-4xl mx-auto">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -30 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-playwrite text-primary-01 mb-8 drop-shadow-lg">
          Kado Digital
        </Motion.h2>

        {/* Teks sopan */}
        <Motion.p initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 0.4, duration: 1 }} className="max-w-2xl mx-auto text-white/90 font-bodoni leading-relaxed mb-12">
          Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih secara digital, kami dengan senang hati menerimanya melalui rekening di bawah ini. Kehadiran dan doa restu Anda sudah merupakan hadiah
          terindah bagi kami.
        </Motion.p>

        {/* === Kartu rekening === */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* CPW */}
          <Motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} className="bg-white/10 backdrop-blur-lg border border-primary-01/40 rounded-2xl p-6 md:p-8 w-full md:w-80 shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold text-primary-01 mb-2">Dede Astuti (CPW)</h3>
            <p className="text-white/90 mb-1 font-bodoni">Bank Mandiri</p>
            <p className="text-lg font-mono tracking-wider mb-4">1730006392204</p>
          </Motion.div>

          {/* CPP */}
          <Motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} className="bg-white/10 backdrop-blur-lg border border-primary-01/40 rounded-2xl p-6 md:p-8 w-full md:w-80 shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold text-primary-01 mb-2">Debby Pangestu Haryanto (CPP)</h3>
            <p className="text-white/90 mb-1 font-bodoni">Bank BNI</p>
            <p className="text-lg font-mono tracking-wider mb-4">1630464389</p>
          </Motion.div>
        </div>

        {/* Catatan bawah */}
        <Motion.p initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 1.2, duration: 1 }} className="text-sm text-white/70 mt-12 italic font-bodoni">
          Terima kasih atas perhatian dan doa restu yang tulus. Semoga segala kebaikan kembali berlipat kepada Anda.
        </Motion.p>
      </div>
    </Motion.section>
  );
};

export default GiftSection;
