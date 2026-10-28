import type { Product } from "@/types/product";

/**
 * SYLVEN MOCK DATABASE - PRODUCT REPOSITORY SEED DATA
 * Toàn bộ 36 sản phẩm phân định theo 3 bộ sưu tập chính (3 Collections theo Catalog & Final Report):
 * 1. Silver Collection (Bạc 925, Bạc 999, Bạc 925 mạ vàng, Bạc 999 mạ vàng) - material: "silver"
 * 2. F136 Titanium Collection (Titanium ASTM F136, Titanium F136 mạ vàng) - material: "titanium"
 * 3. Gold 18K (Vàng 18K / Au750) - material: "gold"
 * 
 * Bảng giá niêm yết chuẩn xác theo Catalog 28 cấu hình / 84 SKU và Báo cáo SYLVEN.
 */
export const PRODUCTS_DATABASE: Product[] = [
  // ==========================================
  // VÒNG CỔ (NECKLACES) - 9 SẢN PHẨM
  // ==========================================
  {
    id: "necklaces-1",
    itemNumber: 1,
    slug: "constellation-titanium-circuit-necklace-01",
    title: "Constellation Necklace",
    category: "necklaces",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-ConstellationNecklaceshort-03_1280x1280_crop_bottom.jpg?v=1674844024",
      "https://www.oushaba.com/cdn/shop/products/Oushaba_1_2_223822_finalcopy_1280x1280_crop_center.jpg?v=1679402964",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-ConstellationNecklaceshort-05_1280x1280_crop_center.jpg?v=1679402964",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "ASTM F136 Titanium • Vi Mạch Bọc Resin Ngọc",
      en: "ASTM F136 Titanium • Resin-Shielded Circuitry",
    },
    description: {
      vi: "Thiết kế dây chuyền định hình cấu trúc chòm sao vi mạch, đúc từ Titanium y sinh F136 siêu nhẹ chống dị ứng, phong ấn phẳng mịn dưới lớp resin ngọc cấp trang sức bảo vệ da tuyệt đối.",
      en: "Constellation-inspired architectural necklace forged from hypoallergenic ASTM F136 Titanium, sealing screened circuitry beneath crystal-clear protective jewelry resin.",
    },
    specs: {
      material: {
        vi: "Titanium y sinh ASTM F136 chống dị ứng",
        en: "Hypoallergenic ASTM F136 Biocompatible Titanium",
      },
      gemstones: {
        vi: "Kim cương tấm vi điểm 0.2ct",
        en: "Micro-pave diamonds 0.2ct",
      },
      silicon: {
        vi: "Bo mạch vệ tinh quang khắc vi mô tuyển chọn",
        en: "Screened micro-satellite photolithographic circuit",
      },
      certificate: "SLV-2026-NC-01",
    },
    featuredFlags: {
      isCurated: true,
      isHeroShowcase: true,
      isCarousel: true,
    },
    status: "published",
    price: 1690000,
    formattedPrice: "1.690.000₫",
    createdAt: "2026-01-10",
  },

  {
    id: "necklaces-2",
    itemNumber: 2,
    slug: "ascent-architectural-titanium-necklace-02",
    title: "Ascent Necklace",
    category: "necklaces",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Ascentnecklaceshort-05_1280x1280_crop_bottom.jpg?v=1676294499",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Ascentnecklaceshort-06_1280x1280_crop_bottom.jpg?v=1676294499",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Ascentnecklacelong-03_1280x1280_crop_center.jpg?v=1674840998",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Ascentnecklaceshort-04_1280x1280_crop_center.jpg?v=1674840970",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Titanium F136 • Mắt Xích Hình Học Vị Lai",
      en: "F136 Titanium • Geometric Futurist Links",
    },
    description: {
      vi: "Bộ dây chuyền Ascent với hệ khớp xích Titanium F136 phay CNC chuẩn vi mô, kết nối các module vi mạch silicon theo phương đứng đầy khí chất điêu khắc đương đại.",
      en: "Ascent necklace featuring micro-milled F136 Titanium geometric links, articulating vertical silicon circuit modules with contemporary sculptural presence.",
    },
    specs: {
      material: {
        vi: "Titanium ASTM F136 siêu nhẹ",
        en: "Ultra-lightweight ASTM F136 Titanium",
      },
      silicon: {
        vi: "Module vi xử lý đa tầng bọc resin chống ẩm",
        en: "Multi-tier microprocessor module sealed in moisture-proof resin",
      },
      certificate: "SLV-2026-NC-02",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 1790000,
    formattedPrice: "1.790.000₫",
    createdAt: "2026-01-14",
  },

  {
    id: "necklaces-3",
    itemNumber: 3,
    slug: "silver-code-necklace-ruby-pearl-03",
    title: "Code Necklace",
    category: "necklaces",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silvercodenecklacewithrubyandpearl-01_1280x1280_crop_bottom.jpg?v=1671395547",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silvercodenecklacewithrubyandpearl-04_1280x1280_crop_center.jpg?v=1674841343",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silvercodenecklacewithrubyandpearl-02_1280x1280_crop_bottom.jpg?v=1674841343",
      "/images/catalog/catalog_01.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Ngọc Trai Baroque & Hồng Ngọc",
      en: "925 Silver • Baroque Pearl & Ruby",
    },
    description: {
      vi: "Bản giao hưởng giữa vẻ đẹp tự nhiên của ngọc trai nước ngọt, sắc đỏ kiêu sa của hồng ngọc và cấu trúc mạch mã hóa trên nền phôi Bạc 925 hoàn thiện thủ công.",
      en: "A symphony blending natural baroque freshwater pearl, vivid red ruby, and encoded circuit geometry on hand-finished 925 sterling silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925 tái sinh phủ lớp Rhodium chống oxy hóa",
        en: "Recycled 925 Silver with anti-tarnish Rhodium finish",
      },
      gemstones: {
        vi: "Hồng ngọc tự nhiên 0.45ct & Ngọc trai Baroque tuyển chọn",
        en: "Natural Ruby 0.45ct & Selected Baroque Pearl",
      },
      silicon: {
        vi: "Bo mạch giải mã âm thanh cổ điển",
        en: "Vintage audio decoding circuit traces",
      },
      certificate: "SLV-2026-NC-03",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 2730000,
    formattedPrice: "2.730.000₫",
    createdAt: "2026-01-20",
  },

  {
    id: "necklaces-4",
    itemNumber: 4,
    slug: "memento-gold-circuit-necklace-04",
    title: "Memento Necklace",
    category: "necklaces",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Mementonecklacegold_-03_1280x1280_crop_bottom.jpg?v=1671395481",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Mementonecklacegold_-02_1280x1280_crop_bottom.jpg?v=1674841237",
      "/images/catalog/report_page_9.png",
      "/images/catalog/catalog_25.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K (Au750) • Kỷ Vật Vi Mạch Cá Nhân",
      en: "18K Gold (Au750) • Sentimental Tech Keepsake",
    },
    description: {
      vi: "Tác phẩm mặt dây chuyền vàng 18K chạm trổ tinh xảo, gìn giữ mảnh vi mạch như một di vật số vượt thời gian. Dành cho những ai muốn lưu giữ kỷ niệm công nghệ cá nhân.",
      en: "18K Gold pendant delicately sculpted to encase personal silicon fragments as timeless digital relics.",
    },
    specs: {
      material: {
        vi: "Vàng vàng 18K (750) đúc đặc",
        en: "Solid 18K Yellow Gold (Au750)",
      },
      silicon: {
        vi: "Mảnh chip vi điều khiển kỷ vật cá nhân hóa",
        en: "Personal bespoke microcontroller chip fragment",
      },
      certificate: "SLV-2026-NC-04",
    },
    featuredFlags: {
      isHeroShowcase: true,
      isCarousel: true,
    },
    status: "published",
    price: 23290000,
    formattedPrice: "23.290.000₫",
    createdAt: "2026-02-01",
  },

  {
    id: "necklaces-5",
    itemNumber: 5,
    slug: "mini-silver-code-necklace-blue-jade-05",
    title: "Mini Code Necklace",
    category: "necklaces",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Minisilvercodenecklacewithbluejade-02_1280x1280_crop_bottom.jpg?v=1674841251",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Minisilvercodenecklacewithbluejade-01_1280x1280_crop_bottom.jpg?v=1674841251",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Ngọc Bích Lam & Vi Phiến Silicon",
      en: "925 Silver • Blue Jade & Silicon Die",
    },
    description: {
      vi: "Dây chuyền dáng thanh mảnh Mini Code kết hợp đá ngọc bích lam dịu mát cùng mẩu vi phiến bán dẫn quang khắc trên khung Bạc 925 đánh bóng gương.",
      en: "Mini Code slender necklace harmonizing calming blue jade with a photolithographic silicon die set in mirror-polished 925 silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925 cao cấp",
        en: "Fine 925 Sterling Silver",
      },
      gemstones: {
        vi: "Ngọc bích lam tự nhiên (Blue Jade)",
        en: "Natural Blue Jade cabochon",
      },
      silicon: {
        vi: "Vi phiến bán dẫn quang khắc UV",
        en: "UV photolithographic semiconductor die",
      },
      certificate: "SLV-2026-NC-05",
    },
    status: "published",
    price: 2490000,
    formattedPrice: "2.490.000₫",
    createdAt: "2026-02-05",
  },

  {
    id: "necklaces-6",
    itemNumber: 6,
    slug: "silver-constellation-circuit-necklace-06",
    title: "Silver Constellation",
    category: "necklaces",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silverconstellationnecklace_-01_1280x1280_crop_bottom.jpg?v=1671395562",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silverconstellationnecklace_-03_1280x1280_crop_center.jpg?v=1674841350",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Silverconstellationnecklace_-02_1280x1280_crop_center.jpg?v=1674841350",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Đồ Họa Mạch Tích Hợp Chòm Sao",
      en: "925 Silver • Constellation Integrated Circuitry",
    },
    description: {
      vi: "Mặt dây chuyền tròn tinh tế mô phỏng bản đồ chòm sao qua các đường mạch đồng mạ vàng chạy trên phiến silicon, lồng trong khung Bạc 925 chạm khắc hình học.",
      en: "Pendant depicting celestial constellations via gold-plated copper traces on a silicon substrate, framed in geometric 925 silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925",
        en: "925 Sterling Silver",
      },
      silicon: {
        vi: "Bo mạch quang khắc đồ họa chòm sao",
        en: "Constellation pattern photolithographic board",
      },
      certificate: "SLV-2026-NC-06",
    },
    status: "published",
    price: 2730000,
    formattedPrice: "2.730.000₫",
    createdAt: "2026-02-12",
  },

  {
    id: "necklaces-7",
    itemNumber: 7,
    slug: "usb-relic-gold-necklace-07",
    title: "USB Relic Necklace",
    category: "necklaces",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-USBnecklacegold-04_1280x1280_crop_bottom.jpg?v=1671395640",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-USBnecklacegold-05_1280x1280_crop_bottom.jpg?v=1676293067",
      "/images/catalog/catalog_09.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 Mạ Vàng PVD 18K • Cổng Dữ Liệu Tái Sinh",
      en: "18K PVD Gold • Reclaimed Data Port Interface",
    },
    description: {
      vi: "Cổng kết nối USB biểu tượng của kỷ nguyên số được đúc lại bằng vàng 18K, biến một chuẩn kết nối quen thuộc thành tuyên ngôn thẩm mỹ thời thượng.",
      en: "Iconic USB interface cast into luxurious 18K gold, elevating everyday digital connectivity into avant-garde jewelry couture.",
    },
    specs: {
      material: {
        vi: "Bạc 925 mạ vàng PVD 18K (Gold-plated Silver 925)",
        en: "18K PVD Gold over 925 Silver core",
      },
      silicon: {
        vi: "Chân tiếp xúc mạ vàng chuẩn kết nối dữ liệu",
        en: "Gold-plated high-conductivity connector pins",
      },
      certificate: "SLV-2026-NC-07",
    },
    featuredFlags: {
      isCarousel: true,
    },
    status: "published",
    price: 2830000,
    formattedPrice: "2.830.000₫",
    createdAt: "2026-02-18",
  },

  {
    id: "necklaces-8",
    itemNumber: 8,
    slug: "silver-ascent-necklace-pearl-08",
    title: "Baroque Ascent",
    category: "necklaces",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Necklaces-SilverAscentnecklacewithpearl-01_1280x1280_crop_center.jpg?v=1674835686",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-SilverAscentnecklacewithpearl-04_1280x1280_crop_center.jpg?v=1674841320",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-SilverAscentnecklacewithpearl-02_1280x1280_crop_bottom.jpg?v=1674841320",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Ngọc Trai Nước Ngọt & Cấu Trúc Vi Mạch",
      en: "925 Silver • Freshwater Pearl & Circuit Geometry",
    },
    description: {
      vi: "Sự đối lập lôi cuốn giữa viên ngọc trai tự nhiên mềm mại và cấu trúc bo mạch góc cạnh làm từ Bạc 925 cao cấp.",
      en: "Captivating contrast between fluid organic freshwater pearl and geometric circuit architecture in 925 silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925 cao cấp",
        en: "925 Sterling Silver",
      },
      gemstones: {
        vi: "Ngọc trai nước ngọt baroque tuyển chọn 12mm",
        en: "Selected freshwater baroque pearl 12mm",
      },
      silicon: {
        vi: "Phiến bán dẫn silicon quang khắc",
        en: "Screened silicon micro-wafer",
      },
      certificate: "SLV-2026-NC-08",
    },
    status: "published",
    price: 2790000,
    formattedPrice: "2.790.000₫",
    createdAt: "2026-02-22",
  },

  {
    id: "necklaces-9",
    itemNumber: 9,
    slug: "voyage-modern-titanium-bronze-necklace-09",
    title: "Voyage Necklace",
    category: "necklaces",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Oushaba2_29_8_221686_rt2_1280x1280_crop_bottom.jpg?v=1676294326",
      "https://www.oushaba.com/cdn/shop/products/Oushaba_M_14_9_225026_rt1_1280x1280_crop_center.jpg?v=1676294326",
      "https://www.oushaba.com/cdn/shop/products/Necklaces-Voyagenecklacebronzechain-02_1280x1280_crop_bottom.jpg?v=1676294326",
      "/images/catalog/catalog_17.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Titanium F136 • Dây Xích Đồng Điêu Khắc & Vi Mạch",
      en: "F136 Titanium • Sculpted Bronze Chain & Circuitry",
    },
    description: {
      vi: "Chuỗi vòng cổ Voyage phá cách kết hợp Titanium F136, mắt xích đồng cổ điển và bộ khung vi mạch công nghệ cao, thể hiện tinh thần khám phá không giới hạn.",
      en: "Avant-garde Voyage necklace unifying F136 Titanium, sculptural bronze chain, and high-tech circuit frameworks.",
    },
    specs: {
      material: {
        vi: "Titanium ASTM F136 & Hợp kim đồng nghệ thuật",
        en: "ASTM F136 Titanium & Artisanal Bronze alloy",
      },
      silicon: {
        vi: "Bo mạch xử lý dữ liệu hàng không bọc resin",
        en: "Avionics data-processing board in protective resin",
      },
      certificate: "SLV-2026-NC-09",
    },
    status: "published",
    price: 1690000,
    formattedPrice: "1.690.000₫",
    createdAt: "2026-02-26",
  },

  // ==========================================
  // VÒNG TAY (BRACELETS) - 3 SẢN PHẨM
  // ==========================================
  {
    id: "bracelets-1",
    itemNumber: 1,
    slug: "vestige-silver-circuit-bracelet-01",
    title: "Vestige Bracelet",
    category: "bracelets",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Bracelets-vestigebraceletsilver-01_1280x1280_crop_center.jpg?v=1671395302",
      "https://www.oushaba.com/cdn/shop/products/Bracelets-vestigebraceletsilver-03_1280x1280_crop_center.jpg?v=1674841407",
      "/images/catalog/catalog_02.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Vi Mạch Bọc Resin & Khớp Nối Công Thái Học",
      en: "925 Silver • Resin-Sealed Circuit & Ergonomic Hinge",
    },
    description: {
      vi: "Chiếc vòng tay Vestige bằng Bạc 925 nguyên khối ôm trọn cổ tay, đính dải vi mạch bán dẫn được xử lý bề mặt phẳng mịn mang lại cảm giác đeo êm ái hàng ngày.",
      en: "Vestige cuff bracelet in solid 925 silver, contouring the wrist with seamlessly inlaid semiconductor circuit ribbons for effortless daily wear.",
    },
    specs: {
      material: {
        vi: "Bạc 925 đúc nguyên khối chống dị ứng",
        en: "Solid hypoallergenic 925 Sterling Silver",
      },
      silicon: {
        vi: "Dải mạch in bán dẫn mạ vàng vi mô",
        en: "Micro gold-plated semiconductor flex circuit",
      },
      certificate: "SLV-2026-BR-01",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 2440000,
    formattedPrice: "2.440.000₫",
    createdAt: "2026-01-18",
  },

  {
    id: "bracelets-2",
    itemNumber: 2,
    slug: "vestige-gold-architectural-cuff-bracelet-02",
    title: "Vestige Cuff",
    category: "bracelets",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Bracelets-Vestigebraceletgold-02_1080x1080_crop_left.jpg?v=1671400620",
      "https://www.oushaba.com/cdn/shop/products/Oushaba_M_14_9_224801_rt1copy2_1280x1280_crop_center.jpg?v=1676292659",
      "/images/catalog/catalog_10.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 Mạ Vàng • Cấu Trúc 4 Dây Điêu Khắc & Vi Xử Lý",
      en: "18K Gold • Sculptural Architecture & Upcycled Microprocessor",
    },
    description: {
      vi: "Kiệt tác vòng tay dạng cuff đúc từ vàng 18K sang trọng với hoa văn bo mạch cắt laser chuẩn xác, khẳng định đẳng cấp nghệ thuật chế tác đương đại.",
      en: "Masterpiece cuff bracelet forged in 18K gold featuring laser-precision circuit relief patterns, embodying high contemporary craft.",
    },
    specs: {
      material: {
        vi: "Bạc 925 mạ vàng 18K (Gold-plated Silver 925) kết hợp 4 dải dây kỹ thuật",
        en: "18K Yellow Gold (Au750) 24.8g",
      },
      silicon: {
        vi: "Bo mạch vi xử lý trung tâm tuyển chọn",
        en: "Screened central computing core PCB",
      },
      certificate: "SLV-2026-BR-02",
    },
    featuredFlags: {
      isHeroShowcase: true,
    },
    status: "published",
    price: 2910000,
    formattedPrice: "2.910.000₫",
    createdAt: "2026-02-08",
  },

  {
    id: "bracelets-3",
    itemNumber: 3,
    slug: "orbit-gold-micro-orbit-bracelet-03",
    title: "Orbit Bracelet",
    category: "bracelets",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Bracelets-Orbitbraceletgold-05_1080x1080_crop_bottom.jpg?v=1678927843",
      "https://www.oushaba.com/cdn/shop/products/Bracelets-Orbitbraceletgold-04_1280x1280_crop_center.jpg?v=1678287848",
      "https://www.oushaba.com/cdn/shop/products/Bracelets-Orbitbraceletgold-03_1280x1280_crop_center.jpg?v=1674841268",
      "/images/catalog/report_page_6.png",
      "/images/catalog/catalog_26.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K • Quỹ Đạo Chuyển Động & Tinh Thể Bán Dẫn",
      en: "18K Gold • Kinetic Orbital Links & Semiconductor Elements",
    },
    description: {
      vi: "Cấu trúc vòng Orbit xoay chuyển nhịp nhàng quanh cổ tay với các module tròn khảm vi mạch bán dẫn bọc kính sapphire bảo vệ tối đa.",
      en: "Orbit bracelet featuring kinetic circular links rotating around the wrist, set with semiconductor discs under sapphire crystals.",
    },
    specs: {
      material: {
        vi: "Vàng vàng 18K",
        en: "18K Yellow Gold",
      },
      silicon: {
        vi: "Mảnh silicon đĩa wafer quang khắc",
        en: "Photolithographic silicon wafer discs",
      },
      certificate: "SLV-2026-BR-03",
    },
    status: "published",
    price: 65210000,
    formattedPrice: "65.210.000₫",
    createdAt: "2026-02-20",
  },

  // ==========================================
  // KHUYÊN TAI (EARRINGS) - 10 SẢN PHẨM
  // ==========================================
  {
    id: "earrings-1",
    itemNumber: 1,
    slug: "silver-circuit-studs-emeralds-01",
    title: "Circuit Studs",
    category: "earrings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Silvercufflinkswithcircuitboardandcabochonemeralds_01_1280x1280_crop_center.jpg?v=1674842277",
      "https://www.oushaba.com/cdn/shop/products/Silvercufflinkswithcircuitboardandcabochonemeralds_04_1280x1280_crop_center.jpg?v=1674842277",
      "https://www.oushaba.com/cdn/shop/products/Silvercufflinkswithcircuitboardandcabochonemeralds_02_1280x1280_crop_center.jpg?v=1674842277",
      "/images/catalog/catalog_03.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Ngọc Lục Bảo Cabochon & Bo Mạch",
      en: "925 Silver • Cabochon Emeralds & Circuitry",
    },
    description: {
      vi: "Khuyên tai đinh tán chế tác từ Bạc 925 đính ngọc lục bảo cabochon xanh mướt, kết hợp cùng họa tiết bo mạch điện tử vi mô tạo vẻ đẹp thanh lịch bí ẩn.",
      en: "Refined 925 silver stud earrings featuring vivid cabochon emeralds mounted over intricate micro-circuit trace patterns.",
    },
    specs: {
      material: {
        vi: "Bạc 925 phủ Rhodium sáng bóng",
        en: "925 Sterling Silver with high-shine Rhodium",
      },
      gemstones: {
        vi: "Ngọc lục bảo tự nhiên Cabochon 1.2ct",
        en: "Natural Cabochon Emeralds 1.2ct",
      },
      silicon: {
        vi: "Bo mạch quang học xanh ngọc bọc resin",
        en: "Emerald-green optical PCB encased in resin",
      },
      certificate: "SLV-2026-ER-01",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 1480000,
    formattedPrice: "1.480.000₫",
    createdAt: "2026-01-12",
  },

  {
    id: "earrings-2",
    itemNumber: 2,
    slug: "futurist-titanium-geometric-earrings-02",
    title: "Futurist Earrings",
    category: "earrings",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/Screenshot2023-12-06at16.10.55_1280x1280_crop_center.png?v=1701879155",
      "https://www.oushaba.com/cdn/shop/files/Screenshot2023-12-06at16.12.13_1280x1280_crop_center.png?v=1701879155",
      "/images/catalog/catalog_19.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Titanium ASTM F136 • Dáng Hình Học Siêu Nhẹ",
      en: "ASTM F136 Titanium • Ultra-Light Geometric Forms",
    },
    description: {
      vi: "Thiết kế hoa tai Titanium F136 siêu nhẹ chống kích ứng tuyệt đối, tạo hình kiến trúc tối giản vị lai mang lại sự thoải mái khi đeo cả ngày dài.",
      en: "Hypoallergenic ultra-lightweight F136 Titanium geometric earrings crafted with sleek architectural minimalism for effortless wear.",
    },
    specs: {
      material: {
        vi: "ASTM F136 Titanium y sinh",
        en: "Biocompatible ASTM F136 Titanium",
      },
      silicon: {
        vi: "Mảnh vi mạch tích hợp xử lý tín hiệu",
        en: "Signal-processing integrated circuit die",
      },
      certificate: "SLV-2026-ER-02",
    },
    featuredFlags: {
      isHeroShowcase: true,
    },
    status: "published",
    price: 1200000,
    formattedPrice: "1.200.000₫",
    createdAt: "2026-01-22",
  },

  {
    id: "earrings-3",
    itemNumber: 3,
    slug: "connection-salvaged-silver-drop-earrings-03",
    title: "Connection Drops",
    category: "earrings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/connectionsalvagedearrings_1280x1280_crop_center.png?v=1701880224",
      "/images/catalog/catalog_03.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Hoa Tai Dáng Thả & Cổng Kết Nối Tái Sinh",
      en: "925 Silver • Drop Silhouette & Salvaged Connectors",
    },
    description: {
      vi: "Dáng hoa tai thả mềm mại chuyển động theo từng bước đi, kết hợp các cổng kết nối micro mạ bạc tái sinh qua bàn tay chế tác kim hoàn thủ công.",
      en: "Articulated drop earrings flowing with bodily motion, integrating salvaged micro-connectors into polished 925 sterling silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925 tái sinh cao cấp",
        en: "Recycled fine 925 Silver",
      },
      silicon: {
        vi: "Chân tiếp xúc vi mô mạ vàng",
        en: "Micro gold-plated salvaged connectors",
      },
      certificate: "SLV-2026-ER-03",
    },
    status: "published",
    price: 1480000,
    formattedPrice: "1.480.000₫",
    createdAt: "2026-02-02",
  },

  {
    id: "earrings-4",
    itemNumber: 4,
    slug: "digital-odyssey-white-gold-sapphire-earrings-04",
    title: "Sapphire Odyssey",
    category: "earrings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Earrings-Digitalodysseywhitegolddiamondsapphire-04_1280x1280_crop_center.jpg?v=1671395979",
      "https://www.oushaba.com/cdn/shop/products/Cropped1_1280x1280_crop_top.png?v=1676293969",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Digitalodysseywhitegolddiamondsapphire-02_1280x1280_crop_center.jpg?v=1676293969",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng Trắng 18K • Kim Cương & Sapphire Hoàng Gia",
      en: "18K White Gold • Diamonds & Royal Blue Sapphire",
    },
    description: {
      vi: "Sắc xanh hoàng gia của đá Sapphire hòa quyện cùng khung vàng trắng 18k thanh khiết. Mỗi đường cắt đều được tính toán theo tỷ lệ vàng của các bản thiết kế kiến trúc vi xử lý.",
      en: "Royal blue sapphires meeting pure 18k white gold and pave diamonds, mirroring the mathematical ratios of historic microprocessor blueprints.",
    },
    specs: {
      material: {
        vi: "Vàng trắng 18K (750) 8.6g",
        en: "18K White Gold (750) 8.6g",
      },
      gemstones: {
        vi: "Royal Blue Sapphire 2.4ct, Kim cương tấm 0.6ct",
        en: "Royal Blue Sapphire 2.4ct, Pave Diamonds 0.6ct",
      },
      silicon: {
        vi: "Đĩa wafer bán dẫn quang khắc UV",
        en: "UV photolithographic semiconductor wafer",
      },
      certificate: "SLV-2026-ER-04",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 8400000,
    formattedPrice: "8.400.000₫",
    createdAt: "2026-02-09",
  },

  {
    id: "earrings-5",
    itemNumber: 5,
    slug: "alliance-gold-silver-duality-earrings-05",
    title: "Alliance Duality",
    category: "earrings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/files/alliancegoldsilverearrings_1280x1280_crop_center.png?v=1701880486",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Alliance_yellowgoldandsilverhoopswithchargerplugs_-03_1280x1280_crop_center.jpg?v=1671395947",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Alliance_yellowgoldandsilverhoopswithchargerplugs_-04_1280x1280_crop_top.jpg?v=1671395947"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K & Bạc 925 • Sự Giao Thoa Kim Loại Quý",
      en: "18K Gold & 925 Silver • Precious Metal Duality",
    },
    description: {
      vi: "Sự kết hợp táo bạo giữa sắc ấm của vàng 18K và vẻ lạnh lùng thanh khiết của Bạc 925, đan xen cùng các chi tiết vi mạch điện tử tái sinh.",
      en: "Duality earrings harmonizing warm 18K gold and cool 925 sterling silver, interwoven with delicate salvaged micro-circuit details.",
    },
    specs: {
      material: {
        vi: "Vàng 18K (750) kết hợp Bạc 925",
        en: "18K Yellow Gold & 925 Sterling Silver",
      },
      silicon: {
        vi: "Linh kiện vi mạch siêu nhỏ bọc bảo vệ",
        en: "Encapsulated micro-circuit core",
      },
      certificate: "SLV-2026-ER-05",
    },
    status: "published",
    price: 7800000,
    formattedPrice: "7.800.000₫",
    createdAt: "2026-02-15",
  },

  {
    id: "earrings-6",
    itemNumber: 6,
    slug: "digital-odyssey-silver-aquamarine-earrings-06",
    title: "Aquamarine Odyssey",
    category: "earrings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Earrings-DigitalOdysseySilveraquamarineearrings-01_1280x1280_crop_center.jpg?v=1671396032",
      "https://www.oushaba.com/cdn/shop/products/Earrings-DigitalOdysseySilveraquamarineearrings-03_1280x1280_crop_center.jpg?v=1671396034",
      "/images/catalog/catalog_07.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc Tái Sinh • Aquamarine Giọt Nước & Bo Mạch",
      en: "Reclaimed Silver • Pear Aquamarine & Circuitry",
    },
    description: {
      vi: "Viên đá Aquamarine nước biển xanh biếc thả dáng mềm mại bên dưới cấu trúc bo mạch mạng lưới vi mô. Toát lên vẻ đẹp kiêu sa và thanh lịch đỉnh cao của trường phái điêu khắc số.",
      en: "Luminous ocean-blue pear Aquamarine cascading gently beneath a microscopic satellite antenna grid in 925 silver.",
    },
    specs: {
      material: {
        vi: "Bạch kim Pt950 & Bạc 925 tái sinh",
        en: "Pt950 Platinum & Reclaimed 925 Silver",
      },
      gemstones: {
        vi: "Aquamarine giọt nước 3.8ct, Kim cương 0.4ct",
        en: "Pear-cut Aquamarine 3.8ct, Diamonds 0.4ct",
      },
      silicon: {
        vi: "Mạng ăng-ten vi mạch vệ tinh vi mô",
        en: "Micro satellite antenna circuitry network",
      },
      certificate: "SLV-2026-ER-06",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 1500000,
    formattedPrice: "1.500.000₫",
    createdAt: "2026-02-19",
  },

  {
    id: "earrings-7",
    itemNumber: 7,
    slug: "fossil-silver-emerald-circuit-earrings-07",
    title: "Emerald Fossil",
    category: "earrings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Earrings-Fossilearringssilverandemeralds-01_1280x1280_crop_center.jpg?v=1671396009",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Fossilearringssilverandemeralds-03_1280x1280_crop_center.jpg?v=1671396011",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Ngọc Lục Bảo & Hóa Thạch Vi Mạch",
      en: "925 Silver • Natural Emeralds & Circuit Fossil",
    },
    description: {
      vi: "Tựa như hóa thạch thời đại số, đôi khuyên tai lồng ghép các đường vân vi mạch cùng ngọc lục bảo thiên nhiên vào phôi Bạc 925 điêu khắc thô mộc mà tinh xảo.",
      en: "Digital age fossils: raw yet refined 925 silver studs framing natural emeralds alongside fossilized circuit traces.",
    },
    specs: {
      material: {
        vi: "Bạc 925 đúc",
        en: "Cast 925 Sterling Silver",
      },
      gemstones: {
        vi: "Ngọc lục bảo thiên nhiên 0.9ct",
        en: "Natural Emeralds 0.9ct",
      },
      silicon: {
        vi: "Mảnh bo mạch cổ phục hồi",
        en: "Restored vintage circuit fragment",
      },
      certificate: "SLV-2026-ER-07",
    },
    status: "published",
    price: 1480000,
    formattedPrice: "1.480.000₫",
    createdAt: "2026-02-23",
  },

  {
    id: "earrings-8",
    itemNumber: 8,
    slug: "digital-odyssey-white-gold-emerald-wire-08",
    title: "Wire Odyssey",
    category: "earrings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Earrings-Digitalodysseywhitegoldemeraldwire-04_1280x1280_crop_center.jpg?v=1671395993",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Digitalodysseywhitegoldemeraldwire-02_1280x1280_crop_center.jpg?v=1671395993",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Digitalodysseywhitegoldemeraldwire-03_1280x1280_crop_center.jpg?v=1671395993"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Vàng Trắng 18K • Ngọc Lục Bảo Dây Quang",
      en: "18K White Gold • Emerald & Optical Wire Motif",
    },
    description: {
      vi: "Thiết kế dây treo thanh thoát từ vàng trắng 18k nâng đỡ viên ngọc lục bảo lung linh, đan xen cùng sợi cáp quang kim loại siêu nhỏ.",
      en: "Graceful wire drop earrings in 18K white gold suspending luminous emeralds along microscopic optical wire motifs.",
    },
    specs: {
      material: {
        vi: "Vàng trắng 18K (Au750)",
        en: "18K White Gold (Au750)",
      },
      gemstones: {
        vi: "Ngọc lục bảo giác cắt cushion 1.5ct",
        en: "Cushion-cut Emerald 1.5ct",
      },
      silicon: {
        vi: "Dây cáp truyền tín hiệu bọc vàng",
        en: "Gold-wrapped optical transmission cable",
      },
      certificate: "SLV-2026-ER-08",
    },
    status: "published",
    price: 8400000,
    formattedPrice: "8.400.000₫",
    createdAt: "2026-02-25",
  },

  {
    id: "earrings-9",
    itemNumber: 9,
    slug: "alliance-gold-hoops-charger-plugs-09",
    title: "Alliance Hoops",
    category: "earrings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Earrings-Alliance_yellowgoldandsilverhoopswithchargerplugs_-03_1280x1280_crop_center.jpg?v=1671395947",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Alliance_yellowgoldandsilverhoopswithchargerplugs_-04_1280x1280_crop_top.jpg?v=1671395947",
      "/images/catalog/report_page_7.png",
      "/images/catalog/catalog_27.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng Vàng 18K & Bạc • Khuyên Tròn Cổng Sạc Kỷ Vật",
      en: "18K Yellow Gold & Silver • Charger Plug Hoop Motif",
    },
    description: {
      vi: "Khuyên tai tròn độc đáo mô phỏng đầu cắm sạc công nghệ từ vàng 18K và Bạc 925, biểu trưng cho sự kết nối năng lượng và ký ức số bất tận.",
      en: "Distinctive hoop earrings reinterpreting charging plug interfaces in 18K gold and 925 silver, symbolizing infinite energy and digital memory.",
    },
    specs: {
      material: {
        vi: "Vàng vàng 18K & Bạc 925",
        en: "18K Yellow Gold & 925 Sterling Silver",
      },
      silicon: {
        vi: "Đầu cắm sạc dữ liệu điêu khắc mạ vàng",
        en: "Sculpted gold-plated charger plug interface",
      },
      certificate: "SLV-2026-ER-09",
    },
    status: "published",
    price: 8400000,
    formattedPrice: "8.400.000₫",
    createdAt: "2026-03-01",
  },

  {
    id: "earrings-10",
    itemNumber: 10,
    slug: "fossil-gold-circuitboard-emerald-earrings-10",
    title: "Circuit Fossil",
    category: "earrings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/GoldFossilEarrings_1280x1280_crop_center.png?v=1701884844",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Fossil_Circuitboard_emerald_yellowgoldandsilverearrings_-05_1280x1280_crop_center.jpg?v=1674841965",
      "https://www.oushaba.com/cdn/shop/products/Earrings-Fossil_Circuitboard_emerald_yellowgoldandsilverearrings_-03_1280x1280_crop_center.jpg?v=1679403622",
      "/images/catalog/catalog_11.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 Mạ Vàng • Ngọc Lục Bảo & Bo Mạch Điêu Khắc",
      en: "18K Gold • Emeralds & Sculpted Circuitboard",
    },
    description: {
      vi: "Đôi khuyên tai Fossil phiên bản cao cấp bằng vàng 18K, kết hợp ngọc lục bảo tỏa sáng trên nền bo mạch vi tính cổ điển được phong ấn tỉ mỉ.",
      en: "High-jewelry Fossil earrings in 18K gold setting natural emeralds against vintage circuit board relics in high-gloss protective resin.",
    },
    specs: {
      material: {
        vi: "Bạc 925 mạ vàng (Gold-plated Silver 925)",
        en: "18K Yellow Gold (Au750) 10.2g",
      },
      gemstones: {
        vi: "Ngọc lục bảo thiên nhiên 1.6ct",
        en: "Natural Emeralds 1.6ct",
      },
      silicon: {
        vi: "Bo mạch vi xử lý mạ vàng cổ điển",
        en: "Gilded vintage microprocessor PCB",
      },
      certificate: "SLV-2026-ER-10",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 1580000,
    formattedPrice: "1.580.000₫",
    createdAt: "2026-03-05",
  },

  // ==========================================
  // NHẪN (RINGS) - 14 SẢN PHẨM
  // ==========================================
  {
    id: "rings-1",
    itemNumber: 1,
    slug: "architectural-titanium-relief-ring-01",
    title: "Relief Ring",
    category: "rings",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/Oushaba_21_11_230922_rt1_sm_1280x1280_crop_center.jpg?v=1701884242",
      "/images/catalog/catalog_20.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "ASTM F136 Titanium • Chạm Khắc Kiến Trúc Vi Mạch",
      en: "ASTM F136 Titanium • Architectural Circuit Relief",
    },
    description: {
      vi: "Nhẫn Titanium ASTM F136 nguyên khối tiện CNC chuẩn xác, chạm khắc các đường vi mạch nổi như sơ đồ thành phố công nghệ tương lai.",
      en: "Monolithic ASTM F136 Titanium ring CNC-milled with precision relief circuit traces reminiscent of a futuristic tech metropolis.",
    },
    specs: {
      material: {
        vi: "Titanium y sinh ASTM F136 nguyên khối",
        en: "Solid Biocompatible ASTM F136 Titanium",
      },
      silicon: {
        vi: "Vi mạch silicon chạm khắc phù điêu",
        en: "Silicon relief circuitry inlay",
      },
      certificate: "SLV-2026-RG-01",
    },
    featuredFlags: {
      isHeroShowcase: true,
      isCarousel: true,
    },
    status: "published",
    price: 1560000,
    formattedPrice: "1.560.000₫",
    createdAt: "2026-01-16",
  },

  {
    id: "rings-2",
    itemNumber: 2,
    slug: "cyber-relic-silver-statement-ring-02",
    title: "Cyber Relic Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Oushaba2_29_8_222010_rt2_1280x1280_crop_center.jpg?v=1678927278",
      "https://www.oushaba.com/cdn/shop/products/Oushaba_M_14_9_224995_rt1_1280x1280_crop_bottom.jpg?v=1678284657",
      "/images/catalog/catalog_04.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Vi Mạch Bọc Resin Ngọc Dáng Vuông",
      en: "925 Silver • Resin-Sealed Square Microchip",
    },
    description: {
      vi: "Nhẫn bản lớn Statement từ Bạc 925 với mặt vuông phẳng mịn phong ấn mảnh chip vi xử lý độc bản, tạo điểm nhấn cá tính mạnh mẽ.",
      en: "Bold statement signet ring in 925 silver sealing a unique microprocessor die under polished jewelry-grade resin.",
    },
    specs: {
      material: {
        vi: "Bạc 925 nguyên khối",
        en: "Solid 925 Sterling Silver",
      },
      silicon: {
        vi: "Chip vi xử lý silicon trung tâm",
        en: "Central silicon processor die",
      },
      certificate: "SLV-2026-RG-02",
    },
    featuredFlags: {
      isCurated: true,
    },
    status: "published",
    price: 2110000,
    formattedPrice: "2.110.000₫",
    createdAt: "2026-01-25",
  },

  {
    id: "rings-3",
    itemNumber: 3,
    slug: "diamond-cable-optical-gold-ring-03",
    title: "Diamond Cable Ring",
    category: "rings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-Diamondcablering-03_1280x1280_crop_center.jpg?v=1674843261",
      "https://www.oushaba.com/cdn/shop/products/Rings-Diamondcablering-02_1280x1280_crop_center.jpg?v=1676292946",
    ],
    video:
      "https://www.oushaba.com/cdn/shop/videos/c/vp/3646cda551744946bcab9770313a596c/3646cda551744946bcab9770313a596c.HD-720p-4.5Mbps-12018984.mp4?v=0",
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K • Kim Cương Thiên Nhiên & Cáp Quang Học",
      en: "18K Gold • Natural Diamonds & Optical Cable Motif",
    },
    description: {
      vi: "Kiệt tác nhẫn đúc vàng 18K mô phỏng đường cáp truyền dữ liệu quang học nạm kim cương tấm lấp lánh, kèm video chuyển động 360 độ chân thực.",
      en: "Masterwork 18K gold ring mimicking high-speed fiber-optic cables paved with brilliant diamonds, accompanied by a dynamic 360 video preview.",
    },
    specs: {
      material: {
        vi: "Vàng vàng 18K (Au750) 9.8g",
        en: "18K Yellow Gold (Au750) 9.8g",
      },
      gemstones: {
        vi: "Kim cương tấm tròn F/VVS 0.55ct",
        en: "Round brilliant diamonds F/VVS 0.55ct",
      },
      silicon: {
        vi: "Lõi cáp dẫn tín hiệu vi mô",
        en: "Micro-optic transmission cable motif",
      },
      certificate: "SLV-2026-RG-03",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 50910000,
    formattedPrice: "50.910.000₫",
    createdAt: "2026-01-28",
  },

  {
    id: "rings-4",
    itemNumber: 4,
    slug: "fragments-gold-sculptural-ring-04",
    title: "Fragments Band",
    category: "rings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-Fragmentsringingold-02_1280x1280_crop_center.jpg?v=1671395822",
      "https://www.oushaba.com/cdn/shop/products/Rings-Fragmentsringingold-03_1280x1280_crop_center.jpg?v=1671395822",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K • Mảnh Ghép Vi Mạch Cấu Trúc Điêu Khắc",
      en: "18K Gold • Sculptural Circuit Fragments",
    },
    description: {
      vi: "Chiếc nhẫn Fragments tôn vinh vẻ đẹp của những mảnh vỡ linh kiện công nghệ, tái định hình thành dải băng vàng 18K nguyên khối lượn sóng.",
      en: "Fragments band celebrating the fractured beauty of electronic relics reassembled into an undulating 18K gold band.",
    },
    specs: {
      material: {
        vi: "Vàng 18K (750)",
        en: "18K Yellow Gold",
      },
      silicon: {
        vi: "Mảnh vi mạch đa lớp khảm vàng",
        en: "Gold-inlaid multi-layer circuit fragments",
      },
      certificate: "SLV-2026-RG-04",
    },
    status: "published",
    price: 49240000,
    formattedPrice: "49.240.000₫",
    createdAt: "2026-02-04",
  },

  {
    id: "rings-5",
    itemNumber: 5,
    slug: "f136-titanium-modern-monolith-ring-05",
    title: "Monolith Ring",
    category: "rings",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/Oushaba_21_11_230875_rt1_sm_1280x1280_crop_center.jpg?v=1701883390",
      "/images/catalog/catalog_20.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Titanium F136 • Dáng Vuông Nguyên Khối Vị Lai",
      en: "F136 Titanium • Futurist Monolith Silhouette",
    },
    description: {
      vi: "Nhẫn Monolith từ phôi Titanium F136 xước mờ satin, chống trầy xước và ăn mòn vượt trội, tối giản và mạnh mẽ.",
      en: "Monolith ring forged from satin-brushed F136 Titanium, delivering superior scratch resistance and monolithic poise.",
    },
    specs: {
      material: {
        vi: "ASTM F136 Titanium y sinh hoàn thiện satin",
        en: "Biocompatible ASTM F136 Titanium satin finish",
      },
      silicon: {
        vi: "Vi phiến cảm biến áp suất siêu mỏng",
        en: "Ultra-thin pressure sensor silicon die",
      },
      certificate: "SLV-2026-RG-05",
    },
    featuredFlags: {
      isCarousel: true,
    },
    status: "published",
    price: 1560000,
    formattedPrice: "1.560.000₫",
    createdAt: "2026-02-10",
  },

  {
    id: "rings-6",
    itemNumber: 6,
    slug: "circuit-gold-ring-natural-emerald-06",
    title: "Circuit Emerald Ring",
    category: "rings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-Circuitringwithgoldandemerald-05_1280x1280_crop_center.jpg?v=1674842556",
      "https://www.oushaba.com/cdn/shop/products/Rings-Circuitringwithgoldandemerald-06_1280x1280_crop_center.jpg?v=1674842556",
      "/images/catalog/report_page_8.png",
      "/images/catalog/catalog_28.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng 18K • Ngọc Lục Bảo & Bo Mạch Xanh Lục",
      en: "18K Gold • Natural Emerald & Green PCB Matrix",
    },
    description: {
      vi: "Sự kết hợp hoàn mỹ giữa ngọc lục bảo thiên nhiên và sắc xanh đặc trưng của bo mạch vi tính trong lòng ổ nhẫn vàng 18K cao cấp.",
      en: "Seamless union of vibrant natural emerald and deep green circuit board matrices set in a heavy 18K gold ring.",
    },
    specs: {
      material: {
        vi: "Vàng vàng 18K (Au750)",
        en: "18K Yellow Gold (Au750)",
      },
      gemstones: {
        vi: "Ngọc lục bảo thiên nhiên giác cắt emerald 1.1ct",
        en: "Emerald-cut natural Emerald 1.1ct",
      },
      silicon: {
        vi: "Bo mạch quang học xanh bọc resin ngọc",
        en: "Green optical motherboard matrix",
      },
      certificate: "SLV-2026-RG-06",
    },
    featuredFlags: {
      isCurated: true,
    },
    status: "published",
    price: 50910000,
    formattedPrice: "50.910.000₫",
    createdAt: "2026-02-14",
  },

  {
    id: "rings-7",
    itemNumber: 7,
    slug: "silver-circuit-inlaid-band-ring-07",
    title: "Circuit Inlaid Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-silvercircuitring-01_3b186c49-8a0e-4a40-94e2-2f67df088c32_1280x1280_crop_center.jpg?v=1671395879",
      "https://www.oushaba.com/cdn/shop/products/Rings-silvercircuitring-04_814060b6-b36e-4fe4-a482-4e55087afddd_1280x1280_crop_center.jpg?v=1674841333",
      "https://www.oushaba.com/cdn/shop/products/Rings-silvercircuitring-02_7169cd21-93bb-4c6a-9a1f-6d558e549ed9_1280x1280_crop_center.jpg?v=1674841333",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Đai Nhẫn Khảm Vi Mạch Chạy Vòng",
      en: "925 Silver • Continuous 360 Circuit Inlay",
    },
    description: {
      vi: "Đai nhẫn cưới/nhẫn đeo cặp Bạc 925 với đường vi mạch khảm liên tục 360 độ quanh thân nhẫn, an toàn tuyệt đối và bền bỉ với thời gian.",
      en: "Continuous 360-degree circuit inlay band in 925 sterling silver, sleekly proportioned for couple bands or standalone elegance.",
    },
    specs: {
      material: {
        vi: "Bạc 925 phủ Rhodium",
        en: "925 Sterling Silver with Rhodium plating",
      },
      silicon: {
        vi: "Dải vi mạch linh hoạt bọc resin chịu lực",
        en: "Continuous flexible circuit under durable resin",
      },
      certificate: "SLV-2026-RG-07",
    },
    status: "published",
    price: 2110000,
    formattedPrice: "2.110.000₫",
    createdAt: "2026-02-17",
  },

  {
    id: "rings-8",
    itemNumber: 8,
    slug: "silver-optical-cable-woven-ring-08",
    title: "Optical Woven Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-silvercablering-03_1280x1280_crop_center.jpg?v=1671395869",
      "https://www.oushaba.com/cdn/shop/products/Rings-silvercablering-02_1280x1280_crop_center.jpg?v=1671395869",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Cấu Trúc Bện Cáp Dữ Liệu Tinh Xảo",
      en: "925 Silver • Woven Data Cable Construction",
    },
    description: {
      vi: "Từng sợi bạc 925 mảnh mai được đan bện mô phỏng dây cáp mạng dữ liệu cao tốc, kết hợp kỹ nghệ kim hoàn truyền thống và thẩm mỹ công nghệ.",
      en: "Fine 925 silver wires woven into a structure echoing high-speed data cables, bridging heritage silversmithing with high-tech symbolism.",
    },
    specs: {
      material: {
        vi: "Bạc 925 bện thủ công",
        en: "Hand-woven 925 Sterling Silver",
      },
      silicon: {
        vi: "Chi tiết khóa cáp mạ rhodium",
        en: "Rhodium-accented cable termination clamps",
      },
      certificate: "SLV-2026-RG-08",
    },
    status: "published",
    price: 2080000,
    formattedPrice: "2.080.000₫",
    createdAt: "2026-02-21",
  },

  {
    id: "rings-9",
    itemNumber: 9,
    slug: "circuit-white-gold-ring-emerald-09",
    title: "White Emerald Ring",
    category: "rings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-Circuitringwithwhitegoldandemerald-04_1280x1280_crop_center.jpg?v=1674842549",
      "https://www.oushaba.com/cdn/shop/products/Rings-Circuitringwithwhitegoldandemerald-03_1280x1280_crop_center.jpg?v=1674842549"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Vàng Trắng 18K • Ngọc Lục Bảo & Bo Mạch Băng Giá",
      en: "18K White Gold • Emerald & Icy Circuit Trace",
    },
    description: {
      vi: "Vẻ đẹp băng giá thanh nhã của vàng trắng 18k nâng đỡ viên ngọc lục bảo sâu thẳm, nổi bật trên nền các chân tiếp xúc mạch đồng mạ bạc vi mô.",
      en: "Icy elegance of 18K white gold framing a deep green emerald, contrasted with silver-plated micro-contact circuit pathways.",
    },
    specs: {
      material: {
        vi: "Vàng trắng 18K (Au750)",
        en: "18K White Gold (Au750)",
      },
      gemstones: {
        vi: "Ngọc lục bảo thiên nhiên 0.95ct",
        en: "Natural Emerald 0.95ct",
      },
      silicon: {
        vi: "Mạch điện tử chân tiếp xúc mạ bạch kim",
        en: "Platinum-plated micro contact circuit",
      },
      certificate: "SLV-2026-RG-09",
    },
    status: "published",
    price: 50910000,
    formattedPrice: "50.910.000₫",
    createdAt: "2026-02-24",
  },

  {
    id: "rings-10",
    itemNumber: 10,
    slug: "sapphire-bud-silver-micro-relic-ring-10",
    title: "Sapphire Bud Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-sapphirebudring-02_1280x1280_crop_center.jpg?v=1674841314",
      "https://www.oushaba.com/cdn/shop/products/Rings-sapphirebudring-04_1280x1280_crop_center.jpg?v=1674841314",
      "https://www.oushaba.com/cdn/shop/products/Rings-sapphirebudring-01_1280x1280_crop_center.jpg?v=1674841314",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 • Nụ Sapphire Tự Nhiên & Mảnh Chip",
      en: "925 Silver • Natural Sapphire Bud & Microchip Die",
    },
    description: {
      vi: "Thiết kế chấu nhẫn ôm lấy viên đá Sapphire như một nụ hoa đang hé nở giữa khu rừng kim loại số, đúc từ Bạc 925 thanh khiết.",
      en: "Prongs embracing a blue sapphire bud blossoming amidst a digital metallic thicket, cast in pure 925 sterling silver.",
    },
    specs: {
      material: {
        vi: "Bạc 925 cao cấp",
        en: "Fine 925 Sterling Silver",
      },
      gemstones: {
        vi: "Blue Sapphire tự nhiên 1.35ct",
        en: "Natural Blue Sapphire 1.35ct",
      },
      silicon: {
        vi: "Mảnh vi phiến bán dẫn quang khắc",
        en: "Photolithographic semiconductor die",
      },
      certificate: "SLV-2026-RG-10",
    },
    status: "published",
    price: 2200000,
    formattedPrice: "2.200.000₫",
    createdAt: "2026-02-28",
  },

  {
    id: "rings-11",
    itemNumber: 11,
    slug: "fragments-white-gold-architectural-ring-11",
    title: "Fragments Architecture",
    category: "rings",
    material: "gold",
    collection: "Gold 18K",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-fragmentsringinwhitegold-02_1280x1280_crop_center.jpg?v=1671395841",
      "https://www.oushaba.com/cdn/shop/products/Rings-fragmentsringinwhitegold-04_1280x1280_crop_center.jpg?v=1674841466",
      "https://www.oushaba.com/cdn/shop/products/Rings-fragmentsringinwhitegold-03_1280x1280_crop_center.jpg?v=1674841466",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Vàng Trắng 18K • Mảnh Ghép Khối Hình Học Kiến Trúc",
      en: "18K White Gold • Architectural Geometry Fragments",
    },
    description: {
      vi: "Nhẫn Fragments phiên bản vàng trắng 18k mang phong cách kiến trúc phi đối xứng avant-garde, đính mảnh vi mạch tuyển chọn.",
      en: "Fragments ring in 18K white gold displaying asymmetrical avant-garde architectural planes embedded with screened circuitry.",
    },
    specs: {
      material: {
        vi: "Vàng trắng 18K (Au750)",
        en: "18K White Gold (Au750)",
      },
      silicon: {
        vi: "Mảnh vi mạch xử lý tín hiệu không dây",
        en: "Wireless RF processor circuit fragment",
      },
      certificate: "SLV-2026-RG-11",
    },
    status: "published",
    price: 52580000,
    formattedPrice: "52.580.000₫",
    createdAt: "2026-03-02",
  },

  {
    id: "rings-12",
    itemNumber: 12,
    slug: "wide-silver-fragments-statement-ring-12",
    title: "Wide Fragments Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-SilverFragmentsRing_wider_-03_1280x1280_crop_center.jpg?v=1674841365",
      "https://www.oushaba.com/cdn/shop/products/Rings-SilverFragmentsRing_wider_-05_1280x1280_crop_center.jpg?v=1674841365",
      "https://www.oushaba.com/cdn/shop/products/Rings-SilverFragmentsRing_wider_-02_1280x1280_crop_center.jpg?v=1674841365",
      "https://www.oushaba.com/cdn/shop/products/Rings-SilverFragmentsRing_wider_-01_1280x1280_crop_center.jpg?v=1674841365",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 Bản Rộng • Điêu Khắc Mảnh Vỡ Công Nghệ",
      en: "925 Silver Wide Band • Tech Fragments Sculpture",
    },
    description: {
      vi: "Bản nhẫn rộng 12mm đầy quyền lực đúc từ Bạc 925, khảm các mẩu vi mạch nhiều sắc độ được gia công chống trầy và bóng gương hoàn hảo.",
      en: "Commanding 12mm wide band cast in 925 sterling silver, inlaying multi-tone silicon circuit fragments with scratch-proof high-polish finish.",
    },
    specs: {
      material: {
        vi: "Bạc 925 dày đúc nguyên khối",
        en: "Heavy solid 925 Sterling Silver",
      },
      silicon: {
        vi: "Mảnh bo mạch đồ họa đa lớp",
        en: "Multi-layer graphics board fragments",
      },
      certificate: "SLV-2026-RG-12",
    },
    featuredFlags: {
      isCurated: true,
      isCarousel: true,
    },
    status: "published",
    price: 2260000,
    formattedPrice: "2.260.000₫",
    createdAt: "2026-03-04",
  },

  {
    id: "rings-13",
    itemNumber: 13,
    slug: "slim-silver-fragments-stackable-ring-13",
    title: "Slim Fragments Ring",
    category: "rings",
    material: "silver",
    collection: "Silver Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/products/Rings-silverfragmentsring_thin_-01_1280x1280_crop_center.jpg?v=1671395891",
      "https://www.oushaba.com/cdn/shop/products/Rings-silverfragmentsring_thin_-03_1280x1280_crop_center.jpg?v=1674841374",
      "https://www.oushaba.com/cdn/shop/products/Rings-silverfragmentsring_thin_-02_1280x1280_crop_center.jpg?v=1674841374",
      "https://www.oushaba.com/cdn/shop/products/Rings-silverfragmentsring_thin_-06_1280x1280_crop_bottom.jpg?v=1671395894",
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[1] || this.images[0];
    },
    subtitle: {
      vi: "Bạc 925 Bản Mảnh • Dễ Dàng Đeo Xếp Tầng (Stackable)",
      en: "925 Silver Slim Band • Stackable Daily Essential",
    },
    description: {
      vi: "Thiết kế nhẫn mảnh thanh nhã cho phép đeo đơn lẻ hoặc xếp tầng nhiều chiếc cùng nhau, mỗi chiếc mang một mảnh vi mạch độc nhất vô nhị.",
      en: "Delicate slim band engineered for effortless stacking or subtle solo wear, each holding a one-of-a-kind micro-circuit slice.",
    },
    specs: {
      material: {
        vi: "Bạc 925 thanh mảnh 2.5mm",
        en: "Slim 2.5mm 925 Sterling Silver",
      },
      silicon: {
        vi: "Vi phiến silicon siêu mỏng",
        en: "Micro-thin silicon wafer segment",
      },
      certificate: "SLV-2026-RG-13",
    },
    status: "published",
    price: 1890000,
    formattedPrice: "1.890.000₫",
    createdAt: "2026-03-06",
  },

  {
    id: "rings-14",
    itemNumber: 14,
    slug: "titanium-f136-minimalist-tech-ring-14",
    title: "Minimalist Tech Ring",
    category: "rings",
    material: "titanium",
    collection: "F136 Titanium Collection",
    images: [
      "https://www.oushaba.com/cdn/shop/files/Oushaba_21_11_230894_rt1_sm_1280x1280_crop_center.jpg?v=1701883048",
      "/images/catalog/catalog_20.png"
    ],
    get image() {
      return this.images[0];
    },
    get hoverImage() {
      return this.images[0];
    },
    subtitle: {
      vi: "Titanium ASTM F136 • Phong Cách Tối Giản Vượt Thời Gian",
      en: "ASTM F136 Titanium • Timeless Minimalist Tech",
    },
    description: {
      vi: "Đỉnh cao của sự tinh gọn: Nhẫn Titanium y sinh ASTM F136 siêu nhẹ, viền bo công thái học êm ái với điểm xuyết vi mạch công nghệ kín đáo.",
      en: "Pinnacle of minimalist precision: featherlight biocompatible ASTM F136 Titanium ring with ergonomic comfort-fit contouring.",
    },
    specs: {
      material: {
        vi: "Titanium y sinh ASTM F136 siêu bền",
        en: "Biocompatible ultra-durable ASTM F136 Titanium",
      },
      silicon: {
        vi: "Vi điểm bán dẫn bảo mật cao",
        en: "Discrete secure-element semiconductor dot",
      },
      certificate: "SLV-2026-RG-14",
    },
    featuredFlags: {
      isCarousel: true,
    },
    status: "published",
    price: 1520000,
    formattedPrice: "1.520.000₫",
    createdAt: "2026-03-08",
  },
];
