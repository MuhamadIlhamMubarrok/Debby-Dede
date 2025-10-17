import { useState } from "react";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/layout";
import Cover from "./components/cover/cover";
import Mempelai from "./components/detail-mempelai/Mempelai";
import Resepsi from "./components/resepsi/Resepsi";
import Galeri from "./components/galeri/Galeri";
import GiftSection from "./components/gift/Gift";
import Penutup from "./components/penutup/Penutup";
import Music from "./components/music/Music";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      {!isOpen ? <Cover onOpen={() => setIsOpen(true)} /> : <Hero />}
      <Mempelai />
      <Resepsi />
      <Galeri />
      <GiftSection />
      <Penutup />
      <Music />
    </Layout>
  );
}

export default App;
