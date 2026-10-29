"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { X, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PaymentMethodsRow } from "./PaymentIcons";

export function BagDrawer() {
  const router = useRouter();
  const {
    items,
    isOpen,
    totalCount,
    formattedTotal,
    closeBag,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = React.useState(false);
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);

  // Close drawer on ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (isCheckingOut) {
          setIsCheckingOut(false);
        } else {
          closeBag();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBag, isCheckingOut]);

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsCheckingOut(false);
      setCheckoutComplete(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleShopNow = () => {
    closeBag();
    router.push("/san-pham");
  };

  const handleProceedCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      setCheckoutComplete(false);
      closeBag();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={closeBag}
            aria-hidden="true"
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
          />

          {/* Slide-out Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 350 }}
              className="w-screen max-w-[440px] bg-white shadow-2xl flex flex-col relative z-10 select-none"
            >
              {/* Drawer Header (Matching Image 2 & 3: "BAG   1 ITEM" / "BAG   0 ITEMS" + ✕) */}
              <div className="px-6 sm:px-8 py-5 border-b border-stone-200/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-lexend text-xs tracking-[0.24em] font-medium text-stone-900">
                    Bag
                  </span>
                  <span className="font-lexend text-xs uppercase tracking-[0.2em] font-light text-stone-500">
                    {totalCount} {totalCount === 1 ? "ITEM" : "ITEMS"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeBag}
                  aria-label="Đóng túi đồ"
                  className="p-1.5 -mr-1.5 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer focus:outline-hidden"
                >
                  <X className="w-5 h-5 stroke-[1.25]" />
                </button>
              </div>

              {/* Main Drawer Content */}
              {items.length === 0 ? (
                /* ============================================================ */
                /* EMPTY STATE (Matching Image 3: Header + Full-width SHOP NOW) */
                /* ============================================================ */
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <button
                    type="button"
                    onClick={handleShopNow}
                    className="w-full py-4 bg-[#001A35] hover:bg-[#08264A] text-white text-xs uppercase tracking-[0.24em] font-lexend font-medium transition-all duration-200 cursor-pointer rounded-none active:scale-[0.99] text-center"
                  >
                    SHOP NOW
                  </button>
                </div>
              ) : isCheckingOut ? (
                /* ============================================================ */
                /* CHECKOUT FORM VIEW */
                /* ============================================================ */
                <div className="flex-1 flex flex-col justify-between overflow-y-auto p-6 sm:p-8 font-lexend">
                  {checkoutComplete ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
                      <div className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center">
                        <Check className="w-7 h-7 stroke-[2]" />
                      </div>
                      <h3 className="font-oranienbaum text-2xl uppercase tracking-wider text-stone-900">
                        ĐÃ TIẾP NHẬN ĐƠN HÀNG
                      </h3>
                      <p className="text-xs text-stone-600 font-light max-w-xs leading-relaxed">
                        Cảm ơn quý khách. Chuyên viên cố vấn của Sylven Atelier sẽ liên hệ trực tiếp để hoàn tất thanh toán và xác nhận giao tác phẩm độc bản.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleCompleteOrder} className="space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-stone-200/80">
                        <h3 className="font-oranienbaum text-base uppercase tracking-wider text-stone-900">
                          THÔNG TIN ĐẶT HÀNG
                        </h3>
                        <button
                          type="button"
                          onClick={() => setIsCheckingOut(false)}
                          className="text-xs text-stone-400 hover:text-stone-900 cursor-pointer font-light"
                        >
                          ← Quay lại túi đồ
                        </button>
                      </div>

                      <div className="space-y-3.5 text-xs">
                        <div>
                          <label className="block text-stone-500 uppercase tracking-wider text-[10px] mb-1">
                            Họ và tên của quý khách *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nguyễn Văn A"
                            className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-500 uppercase tracking-wider text-[10px] mb-1">
                            Số điện thoại liên hệ *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="0901 234 567"
                            className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none"
                          />
                        </div>

                        <div>
                          <label className="block text-stone-500 uppercase tracking-wider text-[10px] mb-1">
                            Địa chỉ giao hàng bảo mật *
                          </label>
                          <textarea
                            rows={3}
                            required
                            placeholder="Số nhà, tên đường, phường/xã, quận/huyện, thành phố"
                            className="w-full px-3.5 py-2.5 border border-stone-300 focus:border-stone-900 focus:outline-hidden transition-colors rounded-none resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-stone-200/80">
                        <div className="flex justify-between items-baseline mb-4">
                          <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-900">
                            TỔNG CỘNG
                          </span>
                          <span className="text-base font-normal text-stone-900 tracking-wide">
                            {formattedTotal}
                          </span>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 bg-[#001A35] hover:bg-[#08264A] text-white text-xs uppercase tracking-[0.24em] font-lexend font-medium transition-all duration-200 cursor-pointer rounded-none active:scale-[0.99] text-center"
                        >
                          XÁC NHẬN ĐƠN HÀNG
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                /* ============================================================ */
                /* FILLED BAG STATE (Matching Image 2: Item List + Total + Checkout) */
                /* ============================================================ */
                <>
                  {/* Items List */}
                  <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6 divide-y divide-stone-100 scrollbar-thin">
                    {items.map((item) => (
                      <div key={item.id} className="pt-6 first:pt-0 flex gap-4 sm:gap-5 items-start">
                        {/* Square product thumbnail on soft neutral background */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#F5F5F3] shrink-0 overflow-hidden flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="96px"
                            className="object-contain p-1.5"
                          />
                        </div>

                        {/* Product details */}
                        <div className="flex-1 min-w-0 flex flex-col font-lexend text-left">
                          <Link
                            href={`/san-pham/${item.slug}`}
                            onClick={closeBag}
                            className="font-oranienbaum text-sm sm:text-[15px] text-stone-900 leading-snug tracking-wide hover:text-stone-700 transition-colors uppercase line-clamp-2"
                          >
                            {item.title}
                          </Link>

                          {item.variant && (
                            <p className="text-xs text-stone-500 font-light mt-1">
                              {item.variant}
                            </p>
                          )}

                          <p className="text-sm font-normal text-stone-900 mt-2 font-lexend tracking-wide">
                            {item.formattedPrice}
                          </p>

                          <div className="flex items-center justify-between mt-3 pt-1">
                            {/* Quantity Stepper: Minus, Quantity, Plus */}
                            <div className="flex items-center border border-stone-200 bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                aria-label="Giảm số lượng"
                                className="w-7 h-7 flex items-center justify-center text-stone-500 hover:text-stone-950 hover:bg-stone-50 transition-colors text-xs font-light select-none cursor-pointer"
                              >
                                −
                              </button>
                              <span className="w-8 text-center text-xs font-normal text-stone-900 font-lexend select-none">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                aria-label="Tăng số lượng"
                                className="w-7 h-7 flex items-center justify-center text-stone-500 hover:text-stone-950 hover:bg-stone-50 transition-colors text-xs font-light select-none cursor-pointer"
                              >
                                +
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-xs text-stone-400 hover:text-stone-900 transition-colors font-light cursor-pointer underline-offset-2 hover:underline select-none"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Drawer Footer (Matching Image 2: Total + Checkout + Payment Icons) */}
                  <div className="p-6 sm:p-8 border-t border-stone-200/80 bg-white space-y-4 font-lexend">
                    {/* Total Row */}
                    <div className="flex items-baseline justify-between text-stone-900">
                      <span className="text-xs uppercase tracking-[0.24em] font-normal text-stone-900">
                        TOTAL
                      </span>
                      <span className="text-base sm:text-lg font-normal tracking-wide text-stone-900">
                        {formattedTotal}
                      </span>
                    </div>

                    {/* Subtext */}
                    <p className="text-[11px] text-stone-400 font-light">
                      Shipping & taxes calculated at checkout
                    </p>

                    {/* Full-width CHECKOUT Button */}
                    <button
                      type="button"
                      onClick={handleProceedCheckout}
                      className="w-full py-4 bg-[#001A35] hover:bg-[#08264A] text-white text-xs uppercase tracking-[0.24em] font-lexend font-medium transition-all duration-200 cursor-pointer rounded-none active:scale-[0.99] text-center"
                    >
                      CHECKOUT
                    </button>

                    {/* Payment methods row (PayPal, Mastercard, VISA, Apple Pay, Google Pay) */}
                    <PaymentMethodsRow />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

