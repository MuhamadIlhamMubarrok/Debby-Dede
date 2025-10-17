import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Bunga1 from "../../assets/bunga1.webp";
import { useInView } from "react-intersection-observer";
import fotoResepsi from "../../assets/galeri/gambar3.webp"; // gambar mempelai tanpa background
import burung from "../../assets/burung.webp"; // animasi burung

const Resepsi = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target waktu resepsi
  const targetDate = new Date("2025-11-02T19:00:00+07:00").getTime();

  // Logika hitung mundur
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Animasi saat in view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <Motion.section ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls} id="lokasi" className="relative flex items-center justify-center text-center bg-primary-02 min-h-screen px-6 overflow-hidden">
      {/* Layer 2: Foto Mempelai */}
      <img src={fotoResepsi} alt="Mempelai" className="absolute left-1/2 -translate-x-1/2 min-w-screen min-h-screen opacity-50 pointer-events-none select-none" />
      {/* === BUNGA KIRI === */}
      <Motion.img
        src={Bunga1}
        alt="bunga kiri"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-40px] left-[-80px] w-72 md:w-80 pointer-events-none select-none"
      />
      <Motion.img
        src={Bunga1}
        alt="bunga kiri"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-40px] left-[-80px] w-72 md:w-80 pointer-events-none select-none"
      />

      {/* === BUNGA KANAN === */}
      <Motion.img
        src={Bunga1}
        alt="bunga kanan"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-40px] right-[-80px] w-72 md:w-80 pointer-events-none select-none rotate-[15deg] scale-x-[-1]"
      />
      <Motion.img
        src={Bunga1}
        alt="bunga kanan"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-40px] right-[-80px] w-72 md:w-80 pointer-events-none select-none rotate-[15deg] scale-x-[-1]"
      />

      {/* Layer 3: Konten */}
      <div className="relative z-10 text-white bg-gray-800/30 border border-primary-01/50 p-10 md:p-14 pt-30 rounded-t-full max-w-3xl shadow-2xl">
        {/* Judul */}
        <Motion.h2 initial={{ opacity: 0, y: -30 }} animate={controls} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-5xl font-bodoni mb-10 text-primary-01 drop-shadow-lg">
          Resepsi
        </Motion.h2>

        {/* Detail Resepsi */}
        <Motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.4, duration: 1 }} className="space-y-3 font-playwrite">
          <p className="text-xl md:text-2xl text-white/90">Minggu, 02 November 2025</p>
          <p className="text-lg md:text-xl text-white/80">10.00 - 16.00 WIB</p>
          <p className="text-white/70 text-base md:text-lg">Kp. Babakan Tugu Rt/Rw: 14/05 Desa. Sindang Panon Kec. Bojong Kab. Purwakarta, Jawa Barat</p>
        </Motion.div>

        {/* Button Buka Maps */}
        <Motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.6, duration: 1 }} className="mt-8">
          <a
            href="https://maps.app.goo.gl/DaKLV8PoJbDSD3aC6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-playwrite bg-gradient-to-r from-primary-01 to-primary-02 hover:from-primary-02 hover:to-primary-01 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Buka Maps
          </a>
        </Motion.div>

        {/* Hitung Mundur */}
        <Motion.div initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ delay: 0.8, duration: 1 }} className="mt-10 flex justify-center gap-5 md:gap-8 text-center">
          {["Hari", "Jam", "Menit", "Detik"].map((label, i) => {
            const keys = ["days", "hours", "minutes", "seconds"];
            return (
              <div key={label} className="bg-gray-800/40 backdrop-blur-md p-4 rounded-lg shadow-lg w-16 md:w-20 border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-white/80 drop-shadow-md">{countdown[keys[i]]}</p>
                <p className="text-sm md:text-base text-white/80">{label}</p>
              </div>
            );
          })}
        </Motion.div>
      </div>

      {/* Layer terakhir: Burung Terbang */}
      <Motion.img
        src={burung}
        alt="Burung Terbang"
        initial={{ x: "-20vw", y: "-10vh", opacity: 0 }}
        animate={{ x: "120vw", y: "10vh", opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-40 md:w-48 opacity-70 pointer-events-none select-none"
      />
    </Motion.section>
  );
};

export default Resepsi;
