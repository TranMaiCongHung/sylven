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
      tagline: "Atelier d'Art Contemporain",
      scrollPrompt: "Cuộn để khám phá",
      backToTop: "Quay về đầu trang",
    },

    // Manifesto Section
    manifesto: {
      badge: "Sylven Atelier • Điêu Khắc Đương Đại",
      titlePrefix: "Tái sinh mảnh ghép công nghệ thành ",
      titleHighlight: "tác phẩm điêu khắc",
      titleSuffix: " đương đại.",
      description:
        "Bản hòa ca giữa kỹ thuật chế tác kim hoàn và vẻ đẹp cấu trúc vi mạch. Mỗi thiết kế là một tác phẩm độc bản lưu giữ dấu ấn của kỷ nguyên số.",
      exploreBtn: "Khám phá tác phẩm",
      philosophyBtn: "Triết lý thương hiệu",
    },

    // Showcase Section
    showcase: {
      badge: "Interactive WebGL Exhibition",
      title: "Bộ Sưu Tập Tác Phẩm Tiêu Biểu",
      description:
        "Trải nghiệm dòng chảy thấu kính chất lỏng WebGL. Kéo chuột hoặc lướt nhẹ để chiêm ngưỡng các thiết kế điêu khắc độc bản.",
    },

    // Alchemy / Philosophy Section
    alchemy: {
      badge: "Triết Lý Thương Hiệu",
      titleMain: "Nghệ Thuật Giả Kim",
      titleItalic: "Kỷ Nguyên Số",
      description:
        "Tại Sylven Atelier, chúng tôi hòa quyện kỹ nghệ kim hoàn bậc thầy cùng kiến trúc bán dẫn. Từng vi mạch, tinh thể silicon và vàng khối được tái sinh thành tác phẩm điêu khắc độc bản lưu giữ linh hồn thời đại số.",
      pillars: [
        {
          title: "Khai Quật Vi Mạch (Silicon Archaeology)",
          desc: "Tuyển chọn chip và tinh thể bán dẫn mang tính biểu tượng từ các cột mốc công nghệ.",
        },
        {
          title: "Chế Tác Kim Hoàn (Haute Craftsmanship)",
          desc: "Chế tác vi mô bằng vàng 24k dát mỏng, bạch kim và đá sapphire dưới kính hiển vi.",
        },
        {
          title: "Mỗi Thiết Kế Là Độc Bản (Unique Pieces)",
          desc: "Không sản xuất hàng loạt. Từng tác phẩm là duy nhất với chứng thư giám định số.",
        },
      ],
    },

    // Collection Section
    collection: {
      badge: "Curated Masterpieces",
      title: "Tác Phẩm Sưu Tập Độc Bản",
      description:
        "Mỗi tác phẩm đi kèm chứng chỉ giám định chất liệu, mã số vi mạch lịch sử và hòm lưu trữ cao cấp.",
      ctaBtn: "Khám phá các sản phẩm",
    },

    // Products Page & Modals
    productsPage: {
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
        "Tái sinh mảnh ghép công nghệ thành tác phẩm điêu khắc đương đại. Bản hòa ca giữa kỹ thuật chế tác kim hoàn và vẻ đẹp cấu trúc vi mạch.",
      rights: "Bảo lưu mọi quyền.",
      columns: {
        explore: "Khám Phá",
        artworks: "Tác phẩm tiêu biểu",
        manifesto: "Tuyên ngôn nghệ thuật",
        alchemy: "Triết lý chế tác",
        collection: "Bộ sưu tập",
        legal: "Thông Tin",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản dịch vụ",
        certification: "Giám định tác phẩm",
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
      tagline: "Atelier d'Art Contemporain",
      scrollPrompt: "Scroll to explore",
      backToTop: "Back to top",
    },

    // Manifesto Section
    manifesto: {
      badge: "Sylven Atelier • Contemporary Sculpture",
      titlePrefix: "Reincarnating technological relics into ",
      titleHighlight: "contemporary sculptures.",
      titleSuffix: "",
      description:
        "A symphony uniting master goldsmith craftsmanship and the geometric poetry of integrated circuitry. Each creation is a bespoke artefact honoring the digital epoch.",
      exploreBtn: "Explore Artworks",
      philosophyBtn: "Brand Philosophy",
    },

    // Showcase Section
    showcase: {
      badge: "Interactive WebGL Exhibition",
      title: "Signature Sculpture Exhibition",
      description:
        "Experience the liquid refractive WebGL flow. Drag or swipe to immerse yourself in our unique digital sculpture designs.",
    },

    // Alchemy / Philosophy Section
    alchemy: {
      badge: "Brand Philosophy",
      titleMain: "The Art of Modern Alchemy in the",
      titleItalic: "Digital Dawn",
      description:
        "At Sylven Atelier, we weave haute joaillerie mastery with semiconductor architecture. Rare vintage microchips, silicon crystals, and solid gold are reborn into unique sculptural relics carrying the soul of computing history.",
      pillars: [
        {
          title: "Silicon Archaeology",
          desc: "Curating iconic microchips and crystal semiconductors from historic milestones in technology.",
        },
        {
          title: "Haute Craftsmanship",
          desc: "Micro-sculpting with 24k gold leaf, solid platinum, and sapphires under optical microscopes.",
        },
        {
          title: "Bespoke & Unrepeatable",
          desc: "Never mass-produced. Every piece is strictly one-of-a-kind with a cryptographic authenticity certificate.",
        },
      ],
    },

    // Collection Section
    collection: {
      badge: "Curated Masterpieces",
      title: "Curated Masterpieces",
      description:
        "Each masterwork is accompanied by material authentication, historical circuitry provenance, and a bespoke archival vault.",
      ctaBtn: "Explore All Creations",
    },

    // Products Page & Modals
    productsPage: {
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
        "Reincarnating technology relics into contemporary sculptures. A harmony of goldsmith craftsmanship and integrated circuitry geometry.",
      rights: "All rights reserved.",
      columns: {
        explore: "Explore",
        artworks: "Signature Artworks",
        manifesto: "Artistic Manifesto",
        alchemy: "Craft Philosophy",
        collection: "Bespoke Collection",
        legal: "Information",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        certification: "Artwork Authentication",
      },
    },
  },
};

export interface ProductTranslationItem {
  id: string;
  title: string;
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
];
