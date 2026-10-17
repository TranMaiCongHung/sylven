export type Language = "vi" | "en";

export interface PillarItem {
  title: string;
  desc: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    languageToggle: string;
  };
  hero: {
    tagline: string;
    scrollPrompt: string;
    backToTop: string;
  };
  manifesto: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    exploreBtn: string;
    philosophyBtn: string;
  };
  showcase: {
    badge: string;
    title: string;
    description: string;
  };
  alchemy: {
    badge: string;
    titleMain: string;
    titleItalic: string;
    description: string;
    pillars: PillarItem[];
  };
  collection: {
    badge: string;
    title: string;
    description: string;
    ctaBtn: string;
  };
  productsPage: {
    title: string;
    subtitle: string;
    allCount: string;
    showingCount: string;
    categories: {
      all: string;
      necklaces: string;
      bracelets: string;
      rings: string;
      earrings: string;
    };
    materialsFilter: {
      all: string;
      titanium: string;
      silver: string;
      gold: string;
    };
    emptyCategory: string;
    certificateLabel: string;
    specsLabel: string;
    materials: string;
    gemstones: string;
    silicon: string;
    inquiryTitle: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    submitInquiry: string;
    inquirySuccess: string;
    closeModal: string;
  };
  footer: {
    description: string;
    rights: string;
    columns: {
      explore: string;
      artworks: string;
      manifesto: string;
      alchemy: string;
      collection: string;
      legal: string;
      privacy: string;
      terms: string;
      certification: string;
    };
  };
}

export const translations: Record<Language, TranslationSchema> = {
  vi: {
    // Header & Navigation
    nav: {
      home: "Trang chủ",
      products: "Sản phẩm",
      languageToggle: "Chuyển đổi ngôn ngữ",
    },

    // Hero Section (Home)
    hero: {
      tagline: "Trang Sức Đương Đại Từ Linh Kiện Công Nghệ Tái Sinh • Design-Led Upcycled Jewelry",
      scrollPrompt: "Cuộn để khám phá",
      backToTop: "Quay về đầu trang",
    },

    // Manifesto Section
    manifesto: {
      badge: "Sylven • Trang Sức Công Nghệ Tái Sinh",
      titlePrefix: "Tái sinh công nghệ thành ",
      titleHighlight: "trang sức đương đại",
      titleSuffix: "",
      description:
        "Bản hòa ca giữa kỹ nghệ chế tác kim loại chuẩn mực (Bạc 925, Titanium F136 y sinh) và vẻ đẹp cấu trúc vi mạch điện tử. Thiết kế thời thượng, êm ái khi đeo hàng ngày, an toàn cho da và truyền tải câu chuyện vật liệu tuần hoàn.",
      exploreBtn: "Khám phá bộ sưu tập",
      philosophyBtn: "Triết lý & Quy trình",
    },

    // Showcase Section
    showcase: {
      badge: "Dấu Ấn Thiết Kế • Bộ Sưu Tập Tiêu Biểu",
      title: "Bộ Sưu Tập Thiết Kế Tiêu Biểu",
      description:
        "Tuyển chọn các thiết kế chủ đạo từ phôi Bạc 925 và Titanium F136 y sinh. Từng mảnh vi mạch được sàng lọc, cắt gọt tinh xảo và phong ấn phẳng mịn dưới lớp resin ngọc cấp trang sức bảo vệ da.",
    },

    // Alchemy / Philosophy Section
    alchemy: {
      badge: "Triết Lý & Quy Trình Chế Tác",
      titleMain: "Nghệ Thuật Giả Kim",
      titleItalic: "",
      description:
        "SYLVEN định vị là dòng trang sức đương đại định hướng thiết kế (design-led), tiên phong tái sinh linh kiện công nghệ thành tác phẩm đeo thẩm mỹ. Từng mảnh vi mạch được sàng lọc và khử trùng nghiêm ngặt, loại bỏ 100% tạp chất nguy hại, sau đó kết hợp cùng Bạc 925 và Titanium F136 y sinh chống dị ứng dưới lớp resin quang học phẳng mịn. Mỗi tác phẩm đều đi kèm Storytelling Card và mã QR TechDNA minh bạch, xác thực hồ sơ vật liệu cùng dấu ấn chế tác độc bản.",
      pillars: [
        {
          title: "Sàng Lọc Vi Mạch An Toàn",
          desc: "Loại bỏ hoàn toàn pin và tạp chất độc hại, khử khuẩn đa tầng trước khi đưa vào chế tác.",
        },
        {
          title: "Bạc 925 & Titanium F136 Y Sinh",
          desc: "Chất liệu cao cấp chống dị ứng, siêu nhẹ, phong ấn phẳng mịn dưới lớp resin ngọc bảo vệ da.",
        },
        {
          title: "Minh Bạch TechDNA & Thẻ Câu Chuyện",
          desc: "Đi kèm Storytelling Card và mã QR TechDNA truy xuất nguồn gốc linh kiện độc bản.",
        },
      ],
    },

    // Collection Section
    collection: {
      badge: "Hệ Sinh Thái Sản Phẩm • Product Portfolio",
      title: "Khám Phá Các Tác Phẩm Mới Nhất",
      description:
        "Đa dạng lựa chọn từ dòng Ready-to-wear Bạc 925 & Titanium F136 sản xuất mẻ nhỏ, giải pháp Personalization Lite tùy biến linh hoạt, cho đến Customize Service biến linh kiện kỷ vật cá nhân thành món trang sức độc bản.",
      ctaBtn: "Khám phá các sản phẩm",
    },

    // Products Page & Modals
    productsPage: {
      title: "Tuyển Tập Tác Phẩm Đương Đại",
      subtitle: "Chế tác tinh xảo từ Bạc 925, Titanium F136 Y Sinh & Linh Kiện Vi Mạch Tái Sinh",
      allCount: "tác phẩm",
      showingCount: "Hiển thị",
      categories: {
        all: "Tất cả",
        necklaces: "Vòng cổ",
        bracelets: "Vòng tay",
        earrings: "Khuyên tai",
        rings: "Nhẫn",
      },
      materialsFilter: {
        all: "Tất cả chất liệu",
        titanium: "Titanium F136",
        silver: "Bạc 925",
        gold: "Vàng 18K",
      },
      emptyCategory: "Hiện chưa có tác phẩm nào trong danh mục này.",
      certificateLabel: "Chứng chỉ:",
      specsLabel: "Thông số giám định",
      materials: "Chất liệu quý:",
      gemstones: "Đá quý đính kèm:",
      silicon: "Thành phần vi mạch:",
      inquiryTitle: "Yêu cầu tư vấn giám định & sở hữu",
      namePlaceholder: "Họ tên của quý khách",
      contactPlaceholder: "Số điện thoại hoặc Email liên hệ",
      submitInquiry: "Gửi yêu cầu tư vấn độc bản",
      inquirySuccess:
        "Yêu cầu đã được gửi tới Sylven Curator. Chúng tôi sẽ liên hệ với quý khách trong vòng 24 giờ làm việc.",
      closeModal: "Đóng chi tiết tác phẩm",
    },

    // Footer
    footer: {
      description:
        "SYLVEN – Thương hiệu trang sức đương đại định hướng thiết kế, tái sinh linh kiện điện tử thành những tạo tác đeo được tinh tế từ Bạc 925 và Titanium F136. An toàn cho da, thẩm mỹ vị lai và minh bạch nguồn gốc.",
      rights: "Bản quyền thuộc về Nhóm 02 - ĐH Tôn Đức Thắng.",
      columns: {
        explore: "Khám Phá",
        artworks: "Thiết kế tiêu biểu",
        manifesto: "Tuyên ngôn thương hiệu",
        alchemy: "Triết lý & Quy trình",
        collection: "Danh mục sản phẩm",
        legal: "Tiêu Chuẩn & Minh Bạch",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản dịch vụ",
        certification: "Tiêu chuẩn Titanium F136 & Bạc",
      },
    },
  },

  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      products: "Creations",
      languageToggle: "Switch language",
    },

    // Hero Section (Home)
    hero: {
      tagline: "Design-Led Jewelry From Upcycled Technology • 925 Silver & F136 Titanium",
      scrollPrompt: "Scroll to explore",
      backToTop: "Back to top",
    },

    // Manifesto Section
    manifesto: {
      badge: "Sylven • Design-Led Upcycled Jewelry",
      titlePrefix: "Transforming electronics into ",
      titleHighlight: "contemporary jewelry",
      titleSuffix: "",
      description:
        "Where precision metallurgy (925 Silver, ASTM F136 Titanium) meets the visual poetry of microcircuitry. Ergonomically refined for daily wear, skin-safe, and deeply rooted in meaningful circular storytelling.",
      exploreBtn: "Explore Collections",
      philosophyBtn: "Craft & Philosophy",
    },

    // Showcase Section
    showcase: {
      badge: "Signature Designs • Hero Showcase",
      title: "Signature Hero Collection",
      description:
        "Curated hero designs forged from 925 Silver and biocompatible ASTM F136 Titanium. Each screened microchip is precisely inlaid and sealed under crystal-clear jewelry resin.",
    },

    // Alchemy / Philosophy Section
    alchemy: {
      badge: "Philosophy & Craftsmanship Process",
      titleMain: "The Art of Modern Alchemy",
      titleItalic: "",
      description:
        "Positioned as a design-led contemporary jewelry atelier, SYLVEN transforms selected technology components into sculptural wearable art. Every microcircuit is rigorously screened, sanitized, and certified 100% free of hazardous elements, then seamlessly set alongside hypoallergenic 925 Silver and biocompatible ASTM F136 Titanium beneath crystal-clear jewelry-grade resin. Each creation is accompanied by a Storytelling Card and traceable TechDNA QR profile verifying material provenance and bespoke craftsmanship.",
      pillars: [
        {
          title: "Screened Silicon Safety",
          desc: "100% free of hazardous residues and batteries, deeply sanitized before crafting.",
        },
        {
          title: "925 Silver & Biocompatible Titanium",
          desc: "Ultra-lightweight, hypoallergenic metals sealed under crystal-clear jewelry resin.",
        },
        {
          title: "Traceable TechDNA & Story Card",
          desc: "Accompanied by a Storytelling Card and QR code detailing the origin and craft profile.",
        },
      ],
    },

    // Collection Section
    collection: {
      badge: "Curated Offerings • Product Portfolio",
      title: "Discover Our Latest Creations",
      description:
        "From standardized small-batch Ready-to-wear in Silver & F136 Titanium, flexible Personalization Lite options, to bespoke Customize Services transforming your sentimental tech keepsakes into unique jewelry.",
      ctaBtn: "Explore All Creations",
    },

    // Products Page & Modals
    productsPage: {
      title: "CONTEMPORARY CREATIONS CATALOG",
      subtitle: "Masterfully crafted from 925 Silver, Biocompatible F136 Titanium & Upcycled Circuitry",
      allCount: "creations",
      showingCount: "Showing",
      categories: {
        all: "All",
        necklaces: "Necklaces",
        bracelets: "Bracelets",
        earrings: "Earrings",
        rings: "Rings",
      },
      materialsFilter: {
        all: "All Materials",
        titanium: "Titanium F136",
        silver: "925 Silver",
        gold: "18K Gold",
      },
      emptyCategory: "No creations available in this category yet.",
      certificateLabel: "Certificate:",
      specsLabel: "Appraisal Specifications",
      materials: "Precious Metallurgy:",
      gemstones: "Mounted Gemstones:",
      silicon: "Circuitry Components:",
      inquiryTitle: "Request Private Acquisition & Consultation",
      namePlaceholder: "Your Full Name",
      contactPlaceholder: "Phone Number or Email Address",
      submitInquiry: "Send Private Inquiry",
      inquirySuccess:
        "Your inquiry has been delivered to the Sylven Curator. We will contact you within 24 business hours.",
      closeModal: "Close artwork details",
    },

    // Footer
    footer: {
      description:
        "SYLVEN – A design-led contemporary jewelry brand transforming screened electronic components into wearable statements in 925 Silver and ASTM F136 Titanium. Skin-safe, futuristic, and fully traceable.",
      rights: "All rights reserved. Ton Duc Thang University Group 02.",
      columns: {
        explore: "Explore",
        artworks: "Hero Creations",
        manifesto: "Brand Manifesto",
        alchemy: "Craft Philosophy",
        collection: "Full Catalog",
        legal: "Standards & Transparency",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        certification: "ASTM F136 & Silver Standards",
      },
    },
  },
};

export type ProductCategory = "necklaces" | "bracelets" | "rings" | "earrings";

export interface ProductTranslationItem {
  id: string;
  title: string;
  category: ProductCategory;
  subtitle: {
    vi: string;
    en: string;
  };
  image: string;
  hoverImage: string;
  specs: {
    gold: { vi: string; en: string };
    gem: { vi: string; en: string };
    silicon: { vi: string; en: string };
    certificate: string;
  };
  description: {
    vi: string;
    en: string;
  };
}

export const PRODUCTS_I18N: ProductTranslationItem[] = [
  {
    id: "prod-01",
    title: "Digital Odyssey Earrings",
    category: "earrings",
    subtitle: {
      vi: "Aquamarines & Bạc tái sinh",
      en: "Aquamarines & Reclaimed Silver",
    },
    image: "/images/artworks/curated_01_a.jpg",
    hoverImage: "/images/artworks/curated_01_b.jpg",
    specs: {
      gold: {
        vi: "Bạch kim Pt950 & Bạc 925 tái sinh",
        en: "Pt950 Platinum & Reclaimed 925 Silver",
      },
      gem: {
        vi: "Aquamarine giọt nước 3.8ct, Kim cương 0.4ct",
        en: "Pear-cut Aquamarine 3.8ct, Diamonds 0.4ct",
      },
      silicon: {
        vi: "Mạng ăng-ten vi mạch vệ tinh vi mô",
        en: "Micro satellite antenna circuitry network",
      },
      certificate: "SLV-2026-CUR-01",
    },
    description: {
      vi: "Viên đá Aquamarine nước biển xanh biếc thả dáng mềm mại bên dưới cấu trúc bo mạch mạng lưới vi mô. Toát lên vẻ đẹp kiêu sa và thanh lịch đỉnh cao của trường phái điêu khắc số.",
      en: "A luminous ocean-blue pear Aquamarine cascades gently beneath a microscopic satellite antenna grid. Exuding refined luxury and the pinnacle of digital sculptural elegance.",
    },
  },
  {
    id: "prod-02",
    title: "Digital Odyssey Sapphire Earrings",
    category: "earrings",
    subtitle: {
      vi: "Vàng trắng, Kim cương & Sapphire",
      en: "White Gold, Diamonds & Sapphire",
    },
    image: "/images/artworks/curated_02_a.jpg",
    hoverImage: "/images/artworks/curated_02_b.png",
    specs: {
      gold: {
        vi: "Vàng trắng 18K (750) 8.6g",
        en: "18K White Gold (750) 8.6g",
      },
      gem: {
        vi: "Royal Blue Sapphire 2.4ct, Kim cương tấm 0.6ct",
        en: "Royal Blue Sapphire 2.4ct, Pave Diamonds 0.6ct",
      },
      silicon: {
        vi: "Đĩa wafer bán dẫn quang khắc UV",
        en: "UV photolithographic semiconductor wafer",
      },
      certificate: "SLV-2026-CUR-02",
    },
    description: {
      vi: "Sắc xanh hoàng gia của đá Sapphire hòa quyện cùng khung vàng trắng 18k thanh khiết. Mỗi đường cắt đều được tính toán theo tỷ lệ vàng Fibonacci của các bản thiết kế kiến trúc vi xử lý.",
      en: "The royal blue brilliance of sapphires meets pure 18k white gold. Every facet is calculated to mirror the golden ratio of historic microprocessor architectural blueprints.",
    },
  },
  {
    id: "prod-03",
    title: "Silver Code Necklace",
    category: "necklaces",
    subtitle: {
      vi: "Ruby, Ngọc trai & Bạc",
      en: "Ruby, Pearls & Silver",
    },
    image: "/images/artworks/curated_03_a.jpg",
    hoverImage: "/images/artworks/curated_03_b.jpg",
    specs: {
      gold: {
        vi: "Bạc 925 mạ Rhodium & Vàng 18K",
        en: "Rhodium-plated 925 Silver & 18K Gold",
      },
      gem: {
        vi: "Ruby Myanmar tự nhiên 1.5ct, Ngọc trai biển Akoya",
        en: "Natural Burmese Ruby 1.5ct, Akoya Sea Pearls",
      },
      silicon: {
        vi: "Vi mạch vi phân logic analog cổ điển",
        en: "Vintage analog differential logic die",
      },
      certificate: "SLV-2026-CUR-03",
    },
    description: {
      vi: "Tác phẩm mặt dây chuyền khắc họa dòng chảy mã nguồn dạng hạt. Viên Ruby huyết bồ câu điểm xuyết giữa chuỗi ngọc trai biển và phiến vi mạch phủ kim loại quý.",
      en: "A sculptural pendant portraying the granular flow of binary code. A vivid pigeon-blood ruby nestles between lustrous Akoya pearls and precious metal-bonded circuitry.",
    },
  },
  {
    id: "prod-04",
    title: "Connection Salvaged Earrings",
    category: "earrings",
    subtitle: {
      vi: "Vàng 18k & Bo mạch vi xử lý RISC",
      en: "18k Gold & RISC Microprocessor Board",
    },
    image: "/images/artworks/collection_01.png",
    hoverImage: "/images/artworks/curated_01_b.jpg",
    specs: {
      gold: {
        vi: "Vàng vàng 18K (750) 6.2g",
        en: "18K Yellow Gold (750) 6.2g",
      },
      gem: {
        vi: "Sapphire thiên nhiên 0.45ct",
        en: "Natural Blue Sapphire 0.45ct",
      },
      silicon: {
        vi: "Vi mạch silicon mạ vàng vi mô thập niên 1990",
        en: "1990s micro gold-bonded silicon architecture",
      },
      certificate: "SLV-2026-COL-04",
    },
    description: {
      vi: "Hoa tai điêu khắc độc bản tái hiện lại các đường bus truyền dẫn tín hiệu logic. Vàng 18k được nung chảy và uốn lượn ôm trọn các chân linh kiện bán dẫn xử lý nano.",
      en: "Bespoke sculptural earrings capturing the rhythm of logic buses. 18k gold is melted and contoured around nano-treated historic semiconductor pins.",
    },
  },
  {
    id: "prod-05",
    title: "Constellation Relic Necklace",
    category: "necklaces",
    subtitle: {
      vi: "Vàng khối 18k, Kim cương & Vi tinh thể MEMS",
      en: "Solid 18k Gold, Diamonds & MEMS Crystals",
    },
    image: "/images/artworks/collection_02.jpg",
    hoverImage: "/images/artworks/curated_02_b.png",
    specs: {
      gold: {
        vi: "Vàng trắng 18K 14.8g",
        en: "18K White Gold 14.8g",
      },
      gem: {
        vi: "Kim cương tự nhiên F/VVS1 0.8ct",
        en: "Natural F/VVS1 Diamonds 0.8ct",
      },
      silicon: {
        vi: "Tinh thể bán dẫn vi cơ điện tử MEMS",
        en: "Micro-electro-mechanical MEMS semiconductor",
      },
      certificate: "SLV-2026-COL-05",
    },
    description: {
      vi: "Cấu trúc mặt dây chuyền đa tầng như một chòm sao kỹ thuật số. Khi tiếp xúc với ánh sáng tự nhiên, cấu trúc vi cơ điện tử tạo ra hiệu ứng phản xạ ánh sao độc đáo.",
      en: "A multi-layered pendant inspired by celestial digital constellations. Under natural lighting, the micro-mechanical surface creates an ethereal prism reflection.",
    },
  },
  {
    id: "prod-06",
    title: "Alliance Salvaged Earrings",
    category: "earrings",
    subtitle: {
      vi: "Bạch kim Pt950, Vàng 18k & Vi mạch tích hợp",
      en: "Pt950 Platinum, 18k Gold & Integrated IC",
    },
    image: "/images/artworks/collection_03.png",
    hoverImage: "/images/artworks/curated_01_a.jpg",
    specs: {
      gold: {
        vi: "Bạch kim Pt950 & Vàng 18K 7.5g",
        en: "Pt950 Platinum & 18K Gold 7.5g",
      },
      gem: {
        vi: "Kim cương baguette 0.35ct",
        en: "Baguette Cut Diamonds 0.35ct",
      },
      silicon: {
        vi: "Lát cắt vi mạch tích hợp lưỡng cực cổ",
        en: "Vintage bipolar integrated circuit slice",
      },
      certificate: "SLV-2026-COL-06",
    },
    description: {
      vi: "Sự hội ngộ giữa kim loại quý bạch kim vĩnh cửu và tinh hoa vi điện tử. Đường nét đối xứng phá cách tôn vinh sự tinh tế và khí chất người sở hữu.",
      en: "An encounter between eternal platinum metallurgy and microscopic electronics. Asymmetric avant-garde balance highlighting pure refined sophistication.",
    },
  },
  {
    id: "prod-07",
    title: "Memento Relic Necklace",
    category: "necklaces",
    subtitle: {
      vi: "Vàng nguyên khối 18k & Vi xử lý 8-bit lịch sử",
      en: "Solid 18k Gold & Historic 8-bit Processor",
    },
    image: "/images/artworks/collection_04.jpg",
    hoverImage: "/images/artworks/curated_03_b.jpg",
    specs: {
      gold: {
        vi: "Vàng vàng 18K 18.2g",
        en: "18K Yellow Gold 18.2g",
      },
      gem: {
        vi: "Ruby cabochon tự nhiên 1.2ct",
        en: "Natural Cabochon Ruby 1.2ct",
      },
      silicon: {
        vi: "Die vi mạch 8-bit nguyên bản thập niên 1980",
        en: "Original 1980s 8-bit computing die",
      },
      certificate: "SLV-2026-COL-07",
    },
    description: {
      vi: "Lưu giữ linh hồn của buổi bình minh công nghệ điện toán cá nhân. Khung vàng 18k dày dặn được chạm khắc họa tiết guilloché tỉ mỉ ôm lấy phiến die 8-bit lịch sử.",
      en: "Preserving the pioneer spirit of the personal computing revolution. A heavy 18k gold casing featuring hand-engraved guilloché embraces an authentic 8-bit die.",
    },
  },
  {
    id: "prod-08",
    title: "Mini Code & Blue Jade Necklace",
    category: "necklaces",
    subtitle: {
      vi: "Ngọc bích lam thiên nhiên, Bạc 925 & Vi phiến Silicon",
      en: "Natural Blue Jade, 925 Silver & Silicon Die",
    },
    image: "/images/artworks/collection_05.jpg",
    hoverImage: "/images/artworks/curated_03_a.jpg",
    specs: {
      gold: {
        vi: "Bạc 925 mạ Rhodium đen & Vàng 18K",
        en: "Black Rhodium 925 Silver & 18K Gold",
      },
      gem: {
        vi: "Ngọc bích lam thiên nhiên Myanmar loại A",
        en: "Grade-A Natural Burmese Blue Jade",
      },
      silicon: {
        vi: "Vi phiến cảm quang quang học",
        en: "Optical photosensitive silicon segment",
      },
      certificate: "SLV-2026-COL-08",
    },
    description: {
      vi: "Giao thoa thi vị giữa triết lý ngọc bích lam phương Đông và cấu trúc mạng tinh thể vi mô phương Tây. Tác phẩm mang vẻ đẹp tĩnh tại, sâu lắng và độc tôn.",
      en: "Poetic convergence between Eastern blue jade philosophy and Western crystalline silicon geometry. A serene, deeply meditative wearable monument.",
    },
  },
  {
    id: "prod-09",
    title: "Solid Gold USB Relic Necklace",
    category: "necklaces",
    subtitle: {
      vi: "Vàng 18k chạm khắc & Cổng dữ liệu số",
      en: "Hand-engraved 18k Gold & Digital Port",
    },
    image: "/images/artworks/collection_06.jpg",
    hoverImage: "/images/artworks/oushaba_sculpture.jpg",
    specs: {
      gold: {
        vi: "Vàng 18K nguyên khối 22.4g",
        en: "Solid 18K Gold 22.4g",
      },
      gem: {
        vi: "Kim cương đen tự nhiên đính chìm 0.5ct",
        en: "Flush-set Natural Black Diamonds 0.5ct",
      },
      silicon: {
        vi: "Khối cổng giao tiếp bộ nhớ thời kỳ đầu",
        en: "First-generation flash bus interface",
      },
      certificate: "SLV-2026-COL-09",
    },
    description: {
      vi: "Tác phẩm mang tính suy ngẫm sâu sắc về tính hữu hạn của dữ liệu số và sự trường tồn bất diệt của vàng nguyên khối qua các thời kỳ lịch sử.",
      en: "A philosophical statement on the transience of digital memory contrasted with the eternal permanence of solid sculpted gold throughout human history.",
    },
  },
  {
    id: "prod-10",
    title: "Titanium Logic Statement Ring",
    category: "rings",
    subtitle: {
      vi: "Titanium F136 Y Sinh, Kim Cương Đen & Vi Mạch Khảm Resin",
      en: "Biocompatible F136 Titanium, Black Diamonds & Encased Logic Chip",
    },
    image: "/images/artworks/model_02.jpg",
    hoverImage: "/images/artworks/curated_01_b.jpg",
    specs: {
      gold: {
        vi: "Hợp kim ASTM F136 Titanium y sinh cao cấp 4.8g",
        en: "High-grade ASTM F136 Implant Titanium 4.8g",
      },
      gem: {
        vi: "Kim cương đen thiên nhiên 0.25ct",
        en: "Natural Black Diamond 0.25ct",
      },
      silicon: {
        vi: "Vi mạch xử lý tín hiệu analog bọc nhựa sinh học bảo vệ",
        en: "Analog signal processing die shielded with bio-resin",
      },
      certificate: "SLV-2026-RNG-10",
    },
    description: {
      vi: "Chiếc nhẫn điêu khắc tương lai kết hợp độ nhẹ và bền phi thường của Titanium y sinh F136 cùng các đường mạch dẫn điện toán cổ điển. Cấu trúc ôm sát ngón tay, an toàn tuyệt đối cho làn da nhạy cảm.",
      en: "A sculptural ring combining the ultra-lightweight strength of biocompatible F136 Titanium with historic computing traces. Contoured ergonomically for effortless, hypoallergenic daily wear.",
    },
  },
  {
    id: "prod-11",
    title: "Sculptural Armor Gold Ring",
    category: "rings",
    subtitle: {
      vi: "Vàng 18K Nguyên Khối, Sapphire & Phiến Silicon Quang Khắc",
      en: "Solid 18K Gold, Sapphire & Photolithographic Silicon Die",
    },
    image: "/images/artworks/model_alchemy.jpg",
    hoverImage: "/images/artworks/model_02.jpg",
    specs: {
      gold: {
        vi: "Vàng vàng 18K (750) 9.6g",
        en: "18K Yellow Gold (750) 9.6g",
      },
      gem: {
        vi: "Blue Sapphire thiên nhiên cắt giác đệm 0.8ct",
        en: "Cushion-cut Natural Blue Sapphire 0.8ct",
      },
      silicon: {
        vi: "Phiến vi mạch quang khắc mật độ cao",
        en: "High-density photolithographic silicon substrate",
      },
      certificate: "SLV-2026-RNG-11",
    },
    description: {
      vi: "Tạo tác nhẫn giáp điêu khắc nổi bật với những mảng cắt đa diện lấy cảm hứng từ cấu trúc vi mạch nguyên khối. Vàng 18K nguyên khối ôm trọn viên Sapphire tự nhiên và phiến silicon độc bản.",
      en: "A bold statement armor ring with multifaceted surfaces mirroring monolithic circuit boards. Solid 18K gold embraces a rich natural sapphire and a historic silicon artifact.",
    },
  },
  {
    id: "prod-12",
    title: "Quantum Wave Band Ring",
    category: "rings",
    subtitle: {
      vi: "Bạc 925 Mạ Rhodium & Bo Mạch Sóng Vi Tần",
      en: "Rhodium 925 Silver & Micro-Frequency Circuit Band",
    },
    image: "/images/artworks/curated_02_b.png",
    hoverImage: "/images/artworks/model_01.jpg",
    specs: {
      gold: {
        vi: "Bạc 925 mạ Rhodium chống oxy hóa 5.2g",
        en: "Anti-tarnish Rhodium-plated 925 Silver 5.2g",
      },
      gem: {
        vi: "Moissanite giác cắt tròn 0.3ct",
        en: "Brilliant-cut Moissanite 0.3ct",
      },
      silicon: {
        vi: "Đường dẫn vi mạch sóng tần số cao",
        en: "High-frequency RF circuit trace inlay",
      },
      certificate: "SLV-2026-RNG-12",
    },
    description: {
      vi: "Mẫu nhẫn đeo hàng ngày với viền vi mạch ẩn chìm tinh tế. Lớp mạ Rhodium sáng bóng bảo vệ bạc vĩnh cửu, mang vẻ đẹp hiện đại, tối giản và cuốn hút.",
      en: "An everyday band featuring discreetly embedded micro-circuit traces. Bright rhodium shielding preserves the silver forever, achieving minimalist contemporary charm.",
    },
  },
];
