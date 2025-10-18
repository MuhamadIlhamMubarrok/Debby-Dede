import { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";
import lagu from "../../assets/audio/music.mp3"; // ganti dengan path lagu kamu

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
      setIsPlaying(true);
    }
  };

  // Mainkan otomatis saat load halaman
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

  return (
    <>
      {/* Audio tag tersembunyi */}
      <audio ref={audioRef} loop src={lagu} />

      {/* Tombol musik */}
      <Motion.button
        onClick={toggleMusic}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-20 right-5 z-[120] bg-white/30 backdrop-blur-md border border-white/50 rounded-full shadow-lg p-4 text-primary-01 hover:bg-white/60 transition-all duration-300"
      >
        {isPlaying ? (
          <Motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
            <FaMusic size={22} />
          </Motion.div>
        ) : (
          <FaPause size={22} />
        )}
      </Motion.button>
    </>
  );
};

export default Music;
