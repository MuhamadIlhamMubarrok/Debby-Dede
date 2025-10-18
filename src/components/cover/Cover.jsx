import { motion as Motion } from "framer-motion";
import Bunga1 from "../../assets/bunga1.webp";
import burung from "../../assets/burung.webp";
import wayang from "../../assets/wayang.webp"; // tambahkan wayang kamu di folder assets

const Cover = ({ onOpen }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-110 bg-[#f3ece4] overflow-hidden">
      {/* === MOTIF BACKGROUND === */}
      <div className="absolute inset-0 opacity-20 bg-motif2" />

      {/* === EFEK CAHAYA LEMBUT === */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffffff20] via-transparent to-[#cdb8a840] mix-blend-soft-light pointer-events-none" />

      {/* === BURUNG TERBANG === */}
      <Motion.img src={burung} alt="burung" initial={{ x: "-10%" }} animate={{ x: "110%" }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="absolute top-24 left-0 w-40 opacity-70 pointer-events-none" />
      <Motion.img
        src={burung}
        alt="burung"
        initial={{ x: "110%", y: 120 }}
        animate={{ x: "-10%" }}
        transition={{ repeat: Infinity, duration: 13, ease: "linear", delay: 2 }}
        className="absolute top-52 right-0 w-32 opacity-70 pointer-events-none"
      />

      {/* === DEKORASI WAYANG KIRI === */}
      <Motion.img
        src={wayang}
        alt="wayang kiri"
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        animate={{ opacity: 0.25, x: 0, rotate: 0 }}
        transition={{ delay: 0.8, duration: 1.4, ease: "easeOut" }}
        className="absolute bottom-0 left-[-50px] w-[200px] md:w-[280px] pointer-events-none select-none"
      />

      {/* === DEKORASI WAYANG KANAN === */}
      <Motion.img
        src={wayang}
        alt="wayang kanan"
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 0.25, x: 0, rotate: 0 }}
        transition={{ delay: 1, duration: 1.4, ease: "easeOut" }}
        className="absolute bottom-0 right-[-50px] w-[200px] md:w-[280px] pointer-events-none select-none scale-x-[-1]"
      />

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
        src={Bunga1 || Bunga1}
        alt="bunga kanan"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-40px] right-[-80px] w-72 md:w-80 pointer-events-none select-none rotate-[15deg] scale-x-[-1]"
      />
      <Motion.img
        src={Bunga1 || Bunga1}
        alt="bunga kanan"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-40px] right-[-80px] w-72 md:w-80 pointer-events-none select-none rotate-[15deg] scale-x-[-1]"
      />

      {/* === KONTEN UTAMA === */}
      <div className="relative z-10 text-[#5b4636]">
        <Motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-2xl md:text-6xl font-bodoni tracking-wide drop-shadow-md">
          Undangan Pernikahan
        </Motion.h1>

        <Motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: "easeOut" }} className="font-playwrite text-6xl md:text-3xl mb-4">
          Debby & Dede
        </Motion.p>

        <Motion.button
          onClick={onOpen}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(140, 122, 111, 0.5)",
          }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="px-4 py-2  bg-gradient-to-r from-primary-01 font-poppins font-thin to-primary-02 hover:from-primary-02 hover:to-primary-0 text-white rounded-full shadow-md text-[14px] font-semibold hover:scale-105 transition-all duration-300"
        >
          Buka Undangan
        </Motion.button>
      </div>

      {/* === PARTIKEL HALUS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.3, 0.6, 0], y: [-10, 20, -10] }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
            className="absolute w-[3px] h-[3px] rounded-full bg-[#a59083]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cover;
