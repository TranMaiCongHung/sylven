"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Check,
  Send,
  Film,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Breadcrumbs } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { language } = useLanguage();
  const { addItem, openBag } = useCart();
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState<string | null>("specs");
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);
  const [enquirySent, setEnquirySent] = React.useState(false);
  const [addedToCart, setAddedToCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  // Form states for enquiry
  const [customerName, setCustomerName] = React.useState("");
  const [customerEmail, setCustomerEmail] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerMessage, setCustomerMessage] = React.useState("");

  const totalImages = product.images.length || 1;

  const handlePrevImage = () => {
    setShowVideo(false);
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setShowVideo(false);
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      subtitle: product.subtitle[language],
      image: product.image,
      price: product.price,
      formattedPrice: product.formattedPrice,
      variant: "(Standard)",
      quantity: quantity,
    });
    openBag();
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleSendEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setIsEnquiryOpen(false);
      setEnquirySent(false);
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      setCustomerMessage("");
    }, 2500);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-32 w-full max-w-full overflow-hidden bg-white">
      {/* TOP BREADCRUMB BAR (MATCHING IMAGE 1 & IMAGE 2) */}
      <section className="px-4 sm:px-8 border-b border-[#EBE7DF]/80 pb-4 mb-8 sm:mb-12">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: "HOME", href: "/" },
              { label: "CREATIONS", href: "/san-pham", isActiveCollection: true },
              { label: `${product.title} – ${product.subtitle[language]}` },
            ]}
            alignment="left"
          />
        </Container>
      </section>

      {/* MAIN PRODUCT DETAIL GRID (2 COLUMNS MATCHING IMAGE 2 EXACTLY) */}
      <section className="px-4 sm:px-8">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: LARGE PRODUCT IMAGE VIEWER + PAGINATION */}
            {/* ========================================================= */}
            <div className="flex flex-col w-full">
              {/* Main Photo Frame: Clean, No artificial background box or border */}
              <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-none flex items-center justify-center group">
                {showVideo && product.video ? (
                  <video
                    src={product.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Image
                      src={product.images[activeImageIndex] || product.image}
                      alt={product.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Zoom Icon (+) in Top-Right Corner */}
                    <button
                      type="button"
                      onClick={() => setIsZoomed(true)}
                      aria-label={language === "vi" ? "Phóng to ảnh" : "Zoom photo"}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 shadow-sm border border-stone-200 transition-all cursor-pointer z-10"
                    >
                      <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Pagination & Arrow Controls (Matching Image 2: "1 / 4" on left, "← →" on right) */}
              <div className="mt-4 flex items-center justify-between text-xs font-lexend tracking-[0.2em] text-stone-500 py-1">
                {/* 1 / N counter */}
                <span className="font-lexend text-xs uppercase select-none">
                  {activeImageIndex + 1} / {totalImages}
                </span>

                {/* Arrows ← and → */}
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label={language === "vi" ? "Ảnh trước" : "Previous photo"}
                    className="p-1 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer text-lg leading-none select-none"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label={language === "vi" ? "Ảnh sau" : "Next photo"}
                    className="p-1 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer text-lg leading-none select-none"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Angle Thumbnails Row */}
              {totalImages > 1 && (
                <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                  {product.images.map((imgUrl, idx) => {
                    const isActive = !showVideo && activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveImageIndex(idx);
                          setShowVideo(false);
                        }}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border transition-all cursor-pointer ${
                          isActive
                            ? "border-stone-950 ring-1 ring-stone-950 scale-102"
                            : "border-stone-200 opacity-60 hover:opacity-100 hover:border-stone-400"
                        }`}
                      >
                        <Image
                          src={imgUrl}
                          alt={`${product.title} angle ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-contain p-1.5"
                        />
                      </button>
                    );
                  })}

                  {/* Optional Video Thumbnail */}
                  {product.video && (
                    <button
                      type="button"
                      onClick={() => setShowVideo(true)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-stone-900 border transition-all cursor-pointer flex flex-col items-center justify-center text-amber-300 ${
                        showVideo
                          ? "border-amber-400 ring-1 ring-amber-400 scale-102"
                          : "border-stone-800 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Film className="w-5 h-5 mb-0.5" />
                      <span className="text-[10px] font-lexend tracking-widest uppercase">Video</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: ATELIER STORY, PRICE & ACTION BUTTONS */}
            {/* ========================================================= */}
            <div className="flex flex-col text-left">
              {/* Title (Serif Font Oranienbaum, All Caps) */}
              <h1 className="font-oranienbaum text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-medium tracking-[0.03em] uppercase leading-tight">
                {product.title}
              </h1>

              {/* Subtitle / Spec Line */}
              <p className="font-oranienbaum text-base sm:text-lg lg:text-xl text-stone-700 tracking-[0.02em] uppercase mt-1.5">
                {product.subtitle[language]}
              </p>

              {/* Concrete Price (Derived from PDF Price Range) */}
              <div className="mt-4 sm:mt-5 text-base sm:text-lg font-lexend text-stone-900 tracking-wide font-normal">
                {product.formattedPrice}
              </div>

              {/* Storytelling Paragraphs (Matching Tone & Structure of Image 2) */}
              <div className="mt-6 sm:mt-8 space-y-4 font-lexend text-[13px] sm:text-sm text-stone-600 leading-relaxed font-normal">
                {/* Paragraph 1: Breathing new life into circuit board */}
                <p>
                  {language === "vi"
                    ? `Tác phẩm ${product.title} thổi nguồn sinh khí mới vào bản mạch vi điều khiển được cứu rỗi từ thiết bị công nghệ nguyên bản. Một báu vật công nghệ đương đại để đeo và tôn vinh, thay vì bị lãng quên như rác thải điện tử.`
                    : `Our ${product.title} breathes new life into a circuit board from a discarded mobile phone. A technological treasure to be worn and adored, not discarded as waste.`}
                </p>

                {/* Paragraph 2: Stones, fine metals, and chain work */}
                <p>
                  {language === "vi"
                    ? `Được tô điểm bởi ${
                        product.specs.gemstones
                          ? product.specs.gemstones.vi
                          : "những giác cắt đá quý tự nhiên tuyển chọn"
                      }, mặt trang sức ${
                        product.specs.material.vi
                      } được gắn kết cùng hệ mắt xích kim loại chế tác tinh vi đạt chuẩn trang sức cao cấp mang lại cảm giác đeo êm ái tuyệt đối trên da.`
                    : `Adorned with ${
                        product.specs.gemstones
                          ? product.specs.gemstones.en
                          : "responsibly sourced rubies, sapphires and emeralds"
                      }, the ${
                        product.specs.material.en
                      } pendant is strung on an extraordinary architectural chain. This piece is crafted for comfort and enduring beauty.`}
                </p>

                {/* Paragraph 3: Italian/Atelier workshop uniqueness */}
                <p>
                  {language === "vi"
                    ? `Được chế tác thủ công độc bản tại xưởng kim hoàn nghệ thuật của chúng tôi, mỗi tác phẩm là duy nhất trên thế giới. Tác phẩm của bạn có thể sở hữu hoa văn vi mạch và dấu ấn phôi quang khắc hơi khác so với hình ảnh do đặc thù độc bản của các linh kiện được cứu sinh. Vui lòng liên hệ với chúng tôi để được tư vấn thêm về tính độc bản của từng mẫu.`
                    : `Handcrafted by our atelier workshop, each piece is unique and your piece may differ slightly from the photograph due to the recycled fragments that we salvage. Please contact us with any queries about the uniqueness of each piece.`}
                </p>

                {/* Paragraph 4: Sustainable timber and cork box packaging */}
                <p>
                  {language === "vi"
                    ? `Mỗi tác phẩm trang sức được lưu giữ trong hộp chế tác riêng từ gỗ mộc tái sinh bền vững, vải tái chế và nút bần Bồ Đào Nha, được hợp tác phát triển cùng xưởng mộc thiết kế London Jan Hendzel Studio.`
                    : `Every piece of jewellery is housed in a bespoke box created from sustainable or reclaimed timber, recycled fabric and cork, created in collaboration with London-based furniture maker Jan Hendzel Studio.`}
                </p>
              </div>

              {/* Quantity Selector: Refined, balanced quiet-luxury bar */}
              <div className="mt-8 flex items-center justify-between py-3 border-y border-[#EBE7DF] text-xs font-lexend">
                <span className="uppercase tracking-[0.2em] text-stone-500 font-light select-none">
                  {language === "vi" ? "SỐ LƯỢNG" : "QUANTITY"}
                </span>
                <div className="flex items-center border border-stone-300 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Giảm số lượng"
                    className="w-9 h-8 flex items-center justify-center text-stone-500 hover:text-stone-950 hover:bg-stone-50 transition-colors text-sm font-light select-none cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-9 text-center text-xs font-normal text-stone-900 font-lexend select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Tăng số lượng"
                    className="w-9 h-8 flex items-center justify-center text-stone-500 hover:text-stone-950 hover:bg-stone-50 transition-colors text-sm font-light select-none cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons: 100% Full-Width, Perfectly Symmetrical (Deep Navy #001A35) */}
              <div className="mt-3.5 space-y-3 font-lexend">
                {/* ADD TO CART */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-4 px-6 bg-[#001A35] hover:bg-[#08264A] text-white font-lexend text-xs uppercase tracking-[0.24em] font-medium transition-all duration-200 cursor-pointer rounded-none active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{language === "vi" ? "ĐÃ THÊM VÀO GIỎ HÀNG" : "ADDED TO CART"}</span>
                    </>
                  ) : (
                    <span>{language === "vi" ? "ADD TO CART" : "ADD TO CART"}</span>
                  )}
                </button>

                {/* MAKE AN ENQUIRY */}
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="w-full py-4 px-6 bg-[#001A35] hover:bg-[#08264A] text-white font-lexend text-xs uppercase tracking-[0.24em] font-medium transition-all duration-200 cursor-pointer rounded-none active:scale-[0.99]"
                >
                  {language === "vi" ? "MAKE AN ENQUIRY" : "MAKE AN ENQUIRY"}
                </button>
              </div>

              {/* Atelier Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[#EBE7DF] grid grid-cols-2 gap-4 text-xs font-lexend text-stone-500">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-stone-700 shrink-0" strokeWidth={1.5} />
                  <span>{language === "vi" ? "Chứng thư bảo hành trọn đời" : "Lifetime atelier warranty"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-stone-700 shrink-0" strokeWidth={1.5} />
                  <span>{language === "vi" ? "Hộp gỗ tái sinh cao cấp" : "Bespoke reclaimed box"}</span>
                </div>
              </div>

              {/* TECHNICAL SPECIFICATIONS ACCORDION */}
              <div className="mt-6 border-t border-[#EBE7DF]">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === "specs" ? null : "specs")}
                  className="w-full py-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] font-lexend text-stone-900 cursor-pointer hover:text-stone-700 transition-colors"
                >
                  <span className="font-medium">
                    {language === "vi" ? "THÔNG SỐ & VẬT LIỆU" : "SPECIFICATIONS & MATERIALS"}
                  </span>
                  <span className="text-sm font-light">{activeAccordion === "specs" ? "−" : "+"}</span>
                </button>

                {activeAccordion === "specs" && (
                  <div className="pb-5 pt-1 space-y-2.5 text-xs font-lexend text-stone-600 border-b border-[#EBE7DF]">
                    <div className="flex justify-between items-baseline gap-4 py-1 border-b border-stone-100">
                      <span className="text-stone-400 uppercase tracking-wider">
                        {language === "vi" ? "Chất liệu:" : "Material:"}
                      </span>
                      <span className="text-stone-900 font-medium text-right">
                        {product.specs.material[language]}
                      </span>
                    </div>

                    {product.specs.gemstones && (
                      <div className="flex justify-between items-baseline gap-4 py-1 border-b border-stone-100">
                        <span className="text-stone-400 uppercase tracking-wider">
                          {language === "vi" ? "Đá quý:" : "Gemstones:"}
                        </span>
                        <span className="text-stone-900 font-medium text-right">
                          {product.specs.gemstones[language]}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-baseline gap-4 py-1 border-b border-stone-100">
                      <span className="text-stone-400 uppercase tracking-wider">
                        {language === "vi" ? "Vi mạch:" : "Circuitry:"}
                      </span>
                      <span className="text-stone-900 font-medium text-right">
                        {product.specs.silicon[language]}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4 py-1">
                      <span className="text-stone-400 uppercase tracking-wider">
                        {language === "vi" ? "Mã chứng chỉ:" : "Certificate ID:"}
                      </span>
                      <span className="text-stone-900 font-mono tracking-wider text-right">
                        {product.specs.certificate}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* LIGHTBOX FULLSCREEN ZOOM MODAL */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            aria-label={language === "vi" ? "Đóng phóng to" : "Close zoom"}
            className="absolute top-6 right-6 p-3 text-white hover:text-amber-400 transition-colors cursor-pointer z-50"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-square overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.images[activeImageIndex] || product.image}
              alt={product.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL (MAKE AN ENQUIRY) */}
      {isEnquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsEnquiryOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white p-8 sm:p-10 border border-stone-200 shadow-2xl rounded-none font-lexend"
          >
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-500 block mb-1">
              ATELIER ENQUIRY
            </span>
            <h2 className="font-oranienbaum text-2xl text-stone-900 uppercase font-medium tracking-[0.03em]">
              {product.title}
            </h2>
            <p className="text-xs text-stone-500 font-lexend mt-1 mb-6">
              {language === "vi"
                ? `Mã tác phẩm: ${product.specs.certificate} • Giá ước tính: ${product.formattedPrice}`
                : `Item code: ${product.specs.certificate} • Estimated price: ${product.formattedPrice}`}
            </p>

            {enquirySent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-oranienbaum text-xl uppercase text-stone-900">
                  {language === "vi" ? "Yêu Cầu Đã Được Gửi" : "Enquiry Received"}
                </h3>
                <p className="text-xs text-stone-600 font-lexend max-w-xs mx-auto">
                  {language === "vi"
                    ? "Chuyên viên trang sức cao cấp Sylven sẽ liên hệ trực tiếp với quý khách trong vòng 24 giờ."
                    : "A Sylven high jewelry specialist will contact you directly within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendEnquiry} className="space-y-4 text-xs font-lexend">
                <div>
                  <label className="block uppercase tracking-wider text-stone-600 mb-1 font-medium">
                    {language === "vi" ? "Họ và tên *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={language === "vi" ? "Nguyễn Văn A" : "Jane Doe"}
                    className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-stone-600 mb-1 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-stone-600 mb-1 font-medium">
                      {language === "vi" ? "Số điện thoại *" : "Phone Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+84 90 000 0000"
                      className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-stone-600 mb-1 font-medium">
                    {language === "vi" ? "Nội dung cần tư vấn" : "Enquiry message"}
                  </label>
                  <textarea
                    rows={3}
                    value={customerMessage}
                    onChange={(e) => setCustomerMessage(e.target.value)}
                    placeholder={
                      language === "vi"
                        ? "Tôi muốn tùy chỉnh kích thước chuỗi dây chuyền / tư vấn trực tiếp..."
                        : "I would like to inquire about chain length customization..."
                    }
                    className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#001A35] hover:bg-[#08264A] text-white font-lexend text-xs uppercase tracking-[0.24em] font-medium transition-colors cursor-pointer rounded-none mt-2 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === "vi" ? "GỬI YÊU CẦU TƯ VẤN" : "SUBMIT ENQUIRY"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
