import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Heart, Gift } from "lucide-react"; // icon cantik dari lucide-react
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
    <Motion.section ref={ref} initial={{ opacity: 0, y: 80 }} animate={controls} transition={{ duration: 1.2, ease: "easeOut" }} className="relative bg-primary-02 text-white py-24 px-4 text-center overflow-hidden min-h-screen">
      {/* === Background motif lembut === */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/motif-pattern.png')] bg-repeat pointer-events-none" />

      {/* === Ornamen bunga === */}
      <Motion.img
        src={bungaKiri}
        alt="bunga kiri"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-[-30px] left-[-60px] w-60 sm:w-72 opacity-60 pointer-events-none select-none"
      />
      <Motion.img
        src={bungaKanan}
        alt="bunga kanan"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={controls}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-[-30px] right-[-60px] w-60 sm:w-72 opacity-60 rotate-[15deg] scale-x-[-1] pointer-events-none select-none"
      />

      {/* === KONTEN UTAMA === */}
      <div className="relative z-10 bg-gray-800/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl p-8 sm:p-10 md:p-14 max-w-4xl mx-auto">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -30 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-bodoni text-primary-01 mb-8 drop-shadow-lg">
          <Gift size={34} className="text-primary-01" />
          Kado Digital
        </Motion.h2>

        {/* Teks sopan */}
        <Motion.p initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 0.4, duration: 1 }} className="max-w-2xl font-poppins font-light mx-auto text-white/90 text-[15px] sm:text-base leading-relaxed text-justify mb-12">
          Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih secara digital, kami dengan senang hati menerimanya melalui rekening di bawah ini. Kehadiran dan doa restu Anda sudah merupakan hadiah
          terindah bagi kami.
        </Motion.p>

        {/* === KARTU REKENING === */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          {[
            { nama: "Dede Astuti", bank: "Mandiri", norek: "1730006392204" },
            { nama: "Debby Pangestu Haryanto", bank: "BNI", norek: "1630464389" },
          ].map((data, i) => (
            <Motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white/10 backdrop-blur-md border border-primary-01/40 rounded-3xl p-6 sm:p-8 w-full sm:w-72 shadow-lg font-poppins group overflow-hidden"
            >
              {/* Efek shimmer lembut */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-01/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-lg sm:text-xl text-primary-01 mb-1 font-semibold">{data.nama}</h3>
              <p className="text-white/85 mb-1 text-sm">{data.bank}</p>
              <p className="text-lg sm:text-xl tracking-wider mb-3">{data.norek}</p>

              {/* Tombol salin */}
              <button onClick={() => navigator.clipboard.writeText(data.norek)} className="text-xs sm:text-sm text-primary-01 underline hover:text-primary-02 transition-colors duration-300">
                Salin Nomor Rekening
              </button>
            </Motion.div>
          ))}
        </div>

        {/* === CATATAN TERIMA KASIH === */}
        <Motion.p initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ delay: 1.2, duration: 1 }} className="text-sm text-white/75 mt-14 italic font-bodoni flex justify-center items-center gap-2">
          <Heart size={16} className="text-primary-01 animate-pulse" />
          Terima kasih atas doa dan perhatian tulus Anda.
        </Motion.p>
      </div>
    </Motion.section>
  );
};

export default GiftSection;
