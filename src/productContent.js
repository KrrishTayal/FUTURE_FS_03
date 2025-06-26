const Products = [
  // ─── Graphic Cards ───────────────────────
  {
    id: 1,
    title: "Asus ProArt GeForce RTX 4070",
    price: 999.99,
    category: "Graphic Cards",
    description:
      "SFF-ready ProArt RTX 4070 SUPER OC 12GB GDDR6X brings minimalist style and powerful creator performance.",
    image: "/src/assets/images/rtx4070.jpg",
  },
  {
    id: 2,
    title: "MSI Ventus GeForce RTX 4060 Ti",
    price: 439.99,
    category: "Graphic Cards",
    description:
      "MSI Ventus 4060 Ti with dual fan cooling and 8GB GDDR6 memory for smooth gaming performance.",
    image: "/src/assets/images/RTX_4060.jpg",
  },
  {
    id: 3,
    title: "Gigabyte Eagle RTX 4080 16GB",
    price: 1199.99,
    category: "Graphic Cards",
    description:
      "The Eagle RTX 4080 is built for 4K and ray tracing with 16GB GDDR6X and triple-fan cooling.",
    image: "/src/assets/images/RTX_4080.jpg",
  },
  {
    id: 4,
    title: "Zotac RTX 4070 Twin Edge OC",
    price: 929.99,
    category: "Graphic Cards",
    description:
      "Compact and efficient RTX 4070 with enhanced cooling and sleek design from Zotac.",
    image: "/src/assets/images/Zotac.jpg",
  },
  {
    id: 5,
    title: "Sapphire Radeon RX 7700 XT Pulse",
    price: 449.99,
    category: "Graphic Cards",
    description:
      "Built with RDNA 3, 12GB GDDR6 and dual-X cooling for high FPS gaming in 1440p.",
    image: "/src/assets/images/Sapphire.jpg",
  },

  // ─── Laptop ───────────────────────────────
  {
    id: 6,
    title: "ASUS ROG Strix G16 (2024)",
    price: 1399.99,
    category: "Laptop",
    description:
      "16-inch ROG gaming laptop with Intel i9 14th Gen, RTX 4070, 32GB RAM and 1TB SSD.",
    image: "/src/assets/images/ASUS_Rog.jpg",
  },
  {
    id: 7,
    title: "Dell XPS 15 OLED (2023)",
    price: 1799.99,
    category: "Laptop",
    description:
      "Ultra-sharp 3.5K OLED display, Intel i7, RTX 4050 GPU and sleek aluminum chassis.",
    image: "/src/assets/images/Dell_XPS.jpg",
  },
  {
    id: 8,
    title: "MacBook Pro M2 (14-inch)",
    price: 1999.99,
    category: "Laptop",
    description:
      "Apple's flagship laptop with M2 Pro chip, Liquid Retina XDR and all-day battery life.",
    image: "/src/assets/images/MacBook.jpg",
  },
  {
    id: 9,
    title: "Lenovo Legion 5 Pro",
    price: 1249.99,
    category: "Laptop",
    description:
      "Ryzen 7 7840HS with RTX 4060, QHD 165Hz display and advanced cooling system.",
    image: "/src/assets/images/Legion.jpg",
  },
  {
    id: 10,
    title: "HP Envy x360 Touch 2-in-1",
    price: 899.99,
    category: "Laptop",
    description:
      "Convertible touch-screen laptop with AMD Ryzen 5, 16GB RAM and stylus support.",
    image: "/src/assets/images/HP.jpg",
  },

  // ─── Monitors ─────────────────────────────
  {
    id: 11,
    title: "LG UltraGear 27GP950",
    price: 749.99,
    category: "Monitors",
    description:
      "27-inch 4K UHD Nano IPS with 144Hz refresh rate and G-Sync/FreeSync compatibility.",
    image: "/src/assets/images/LG_UltraGear.jpg",
  },
  {
    id: 12,
    title: "Samsung Odyssey G9 Neo",
    price: 1599.99,
    category: "Monitors",
    description:
      "49-inch Dual QHD 240Hz curved gaming monitor with HDR2000 and quantum mini-LED tech.",
    image: "/src/assets/images/Odyssey.jpg",
  },
  {
    id: 13,
    title: "ASUS ProArt Display PA278CV",
    price: 459.99,
    category: "Monitors",
    description:
      "27-inch WQHD professional monitor with 100% sRGB, factory calibration and USB-C.",
    image: "/src/assets/images/ASUS_ProArt.jpg",
  },
  {
    id: 14,
    title: "Acer Nitro XV272U",
    price: 299.99,
    category: "Monitors",
    description:
      "Budget 1440p 170Hz IPS gaming monitor with vivid colors and adaptive sync.",
    image: "/src/assets/images/ACER_Nitro.jpg",
  },
  {
    id: 15,
    title: "Dell UltraSharp U2723QE",
    price: 599.99,
    category: "Monitors",
    description:
      "27-inch 4K IPS display with USB-C hub and ultra-thin bezels for pro productivity.",
    image: "/src/assets/images/DELL_UltraSharp.jpg",
  },

  // ─── Power Supply ────────────────────────
  {
    id: 16,
    title: "Corsair RM850x 850W Gold",
    price: 139.99,
    category: "Power Supply",
    description:
      "Fully modular 80+ Gold certified PSU with silent fan mode and reliable build.",
    image: "/src/assets/images/Corsair_RM850x.jpg",
  },
  {
    id: 17,
    title: "Seasonic Focus GX-750",
    price: 119.99,
    category: "Power Supply",
    description:
      "Premium PSU with 80+ Gold certification, fully modular design and Japanese capacitors.",
    image: "/src/assets/images/Seasonic.jpg",
  },
  {
    id: 18,
    title: "Cooler Master MWE 650 Bronze V2",
    price: 69.99,
    category: "Power Supply",
    description:
      "Affordable 80+ Bronze PSU with DC-to-DC conversion and quiet 120mm HDB fan.",
    image: "/src/assets/images/Cooler.jpg",
  },
  {
    id: 19,
    title: "EVGA SuperNOVA 1000 P3",
    price: 179.99,
    category: "Power Supply",
    description:
      "1000W Platinum-rated PSU with ECO fan mode and full modular cabling.",
    image: "/src/assets/images/EVGA.jpg",
  },
  {
    id: 20,
    title: "NZXT C750 750W 80+ Gold",
    price: 109.99,
    category: "Power Supply",
    description:
      "Minimalist, efficient PSU with semi-modular design and high thermal performance.",
    image: "/src/assets/images/NZXT.jpg",
  },
];

export default Products;
