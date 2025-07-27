import React, { useState } from 'react';
import { Cookie, Cake, Info, ChevronDown } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
  {
    id: 1,
    name: "Nastar Cookies",
    description: "Harga Nastar/Pcs dengan ukuran 500 gram",
    price: 95.000,
    imageUrl: "https://cdn0-production-images-kly.akamaized.net/M9MGC19HtSfZYJaG4EpuOsg3lPw=/0x436:714x838/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3126538/original/099164200_1589344558-shutterstock_1714073662.jpg"
  },
  {
    id: 2,
    name: "Putri Salju Cookies",
    description: "Harga Putri Salju/Pcs dengan ukuran 500 gram",
    price: 95.000,
    imageUrl: "https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/03/resep-kue-putri-salju-yang-lembut-buat-lebaran.jpg?fit=750%2C500&ssl=1"
  },
  {
    id: 3,
    name: "Choco Balls Cookies",
    description: "Harga Choco Balls/Pcs dengan ukuran 500 gram",
    price: 100.000,
    imageUrl: "https://sumbarfokus.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-09-at-23.08.38-1.jpeg"
  },
  {
    id: 4,
    name: "Kaastengels Cookies",
    description: "Harga Kaastengels/Pcs dengan ukuran 500 gram",
    price: 95.000,
    imageUrl: "https://asset.kompas.com/crops/Xcdege5Zh-ewH2rgFeC_s0e548M=/0x258:800x791/1200x800/data/photo/2022/04/17/625bae2b74ac6.jpg"
  },
  {
    id: 5,
    name: "Lidah Kucing Cookies",
    description: "Harga Lidah Kucing/Pcs dengan ukuran 500 Gram",
    price: 85.000,
    imageUrl: "https://storage.googleapis.com/bakingworld-web-production/uploads/media/content/f578f8f8516dc728166f55b384509d6e_resize_w1000-1680259564579.jpg"
  },
  {
    id: 6,
    name: "Cake Roll",
    description: "Ukuran Panjang Cake Roll - 22 Centimeter",
    price: 50.000,
    imageUrl: "https://id-live-01.slatic.net/p/62d40b8f0858157ca78244945970c6de.jpg"
  },
  {
    id: 7,
    name: "Black Forest Cake",
    description: "Luas Black Forest - 18 x 18 Centimeter",
    price: 180.000,
    imageUrl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-159610771/latezza-cake_black-forest-circle-cake-blackforest-birthday-cake-premium-kue-ultah_full02.jpg"
  },
  {
    id: 8,
    name: "Rainbow Cake",
    description: "Luas Rainbow Cake - 18 x 18 Centimeter",
    price: 88.000,
    imageUrl: "https://image.idntimes.com/post/20240920/screenshot-20240919-144316-1e2f91098a6d03f143c82d5d18da0a0a.png"
  },
  {
    id: 9,
    name: "Cinnamon Roll",
    description: "Harga Cinnamon Roll/3-Pcs",
    price: 20.000,
    imageUrl: "https://image.idntimes.com/post/20240824/cinnamon-rolls-1417494-1280-5631132fab8905a1e503786f524ae802.jpg"
  },
  {
    id: 10,
    name: "Brownies Kukus",
    description: "Luas Brownies Kukus - 20 x 15 Centimeter",
    price: 48.000,
    imageUrl: "https://asset.kompas.com/crops/c-O98idIzWXR9vGBvUHMF-XzSpk=/0x0:1000x667/1200x800/data/photo/2021/03/30/606297bf5cb32.jpg"
  },
  {
    id: 11,
    name: "Brownies Panggang Fudgy",
    description: "Luas Brownies Panggang Fudgy - 20x 15 Centimeter",
    price: 65.000,
    imageUrl: "https://www.palmia.co.id/media/recipe/medium/aac9f2ea96f3de88cdc984686d05ba0f.jpg"
  },
  {
    id: 12,
    name: "Donat",
    description: "Harga Donat(Aneka Rasa)/Pcs",
    price: 4.500,
    imageUrl: "https://www.thedailymeal.com/img/gallery/bitter-donut-flavors-reign-supreme-on-dunkin-thailands-menu/intro-1677770919.jpg"
  },
];


  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <ProductList products={products} />
          </>
        );
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <>
            <HeroSection />
            <ProductList products={products} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-green-50 font-inter">
      <Header setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ setActiveSection }) => (
  <header className="bg-green-700 text-white p-4 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <h1 className="font-serif text-4xl font-medium mb-4 md:mb-0 text-white">V'tha Cookies ~</h1>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg">
          <li>
            <button
              onClick={() => setActiveSection('home')}
              className="hover:text-lime-300 transition-colors duration-300 flex items-center gap-2 p-2 rounded-md hover:bg-green-600"
            >
              <Cookie size={20} /> Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('about')}
              className="hover:text-lime-300 transition-colors duration-300 flex items-center gap-2 p-2 rounded-md hover:bg-green-600"
            >
              <Info size={20} /> Pemesanan
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => {
  const scrollToProducts = () => {
    const section = document.getElementById('product-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-4 rounded-xl shadow-xl text-center mb-12 animate-fade-in">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Rasakan Manisnya Kue V'tha!
      </h2>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Dibuat dengan penuh cinta, kue dan biskuit kami dipanggang segar setiap hari untuk menghadirkan kebahagiaan di setiap gigitan Anda.
      </p>
      <button
        onClick={scrollToProducts}
        className="bg-lime-300 text-green-800 font-bold py-3 px-6 rounded-full text-xl shadow-lg hover:bg-lime-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto w-fit animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

// ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-green-200">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover object-center"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/E5E7EB/6B7280?text=Image+Not+Found"; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl font-bold text-green-700">Rp.{product.price.toFixed(3)}</span>
          {product.name.includes("Cookie") ? (
            <Cookie size={30} className="text-lime-500" />
          ) : (
            <Cake size={30} className="text-green-500" />
          )}
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => (
  <section id="product-section" className="py-12">
  <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Penawaran Lezat Kami</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  </section>
);

const AboutUs = () => (
  <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in">
    <h2 className="text-4xl font-bold text-center text-green-800 mb-8">About V'tha Cookies</h2>
    <div className="flex flex-col md:flex-row items-center md:space-x-8">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src=".\public\V'tha-Cookies-Kitchen.jpg"
          alt="V'tha Cookies Bakery"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
        <p className="mb-4">
          Selamat datang di V'tha Cookies, tempat setiap kue dipanggang dengan penuh presisi.
          Perkembang sejak tahun 2020, bisnis kue V'tha Cookies sudah menjadi andalan beberapa orang.
          Temukan favoritmu di antara koleksi kami dan buat harimu lebih manis dengan V'tha Cookies.
          Yuk, dipesan segera melalui kontak dibawah ini.
        </p>
        <p className="mb-4">
          Berikut adalah Nomor Kontak yang dapat dijangkau jika ingin melakukan pesanan.
        </p>
        <ul>
          <li>No. HP(Solfiana) : 0838-0814-8515</li>
          <li>No. HP(Zaldy) : 0895-3217-48547</li>
        </ul>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-green-900 text-white px-6 py-10 text-center mt-12 rounded-t-xl shadow-inner">
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} V'tha Cookies. All rights reserved.</p>
        <p className="text-sm mt-2">Baked with love, served with joy.</p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg border border-green-700">
        <iframe
          title="V'tha Cookies Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.369775446359!2d106.86937207511262!3d-6.214836560801281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25d53dd7315%3A0x5f688387cbdbd53!2sJl.%20Raya%20Condet%2C%20RT.1%2FRW.1%2C%20Gedong%2C%20Kec.%20Ps.%20Rebo%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013760!5e0!3m2!1sen!2sid!4v1694787260385!5m2!1sen!2sid"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-128 border-0"
        ></iframe>
        <p className="mt-3 text-sm text-lime-300">
          📍 Jl. Raya Condet, RT.1/RW.1, Gedong, Kec. Ps. Rebo, Kota Jakarta Timur, DKI Jakarta 13760
        </p>
      </div>
    </div>
  </footer>
);


export default App;