"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, RefreshCw, MessageSquare } from "lucide-react";
import { Input, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { inquiryFormSchema, type InquiryFormData, type InquirySubmissionResult } from "../types";
import { itemService } from "../services";

export function ItemInquiryForm() {
  const [submissionResult, setSubmissionResult] = React.useState<InquirySubmissionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      topic: "frontend",
      message: "",
      subscribeNewsletter: true,
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const result = await itemService.submitInquiry(data);
      setSubmissionResult(result);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    reset();
    setSubmissionResult(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-slate-200/80 dark:border-slate-800">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
          <MessageSquare className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl">Gửi Yêu Cầu & Tư Vấn</CardTitle>
        <CardDescription className="text-base max-w-md mx-auto">
          Điền thông tin bên dưới để kết nối với đội ngũ kiến trúc sư công nghệ. Hệ thống xử lý độc lập với dữ liệu mẫu.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        {submissionResult?.success ? (
          <div className="rounded-2xl bg-emerald-50/80 p-8 text-center border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="mt-4 text-xl font-bold text-emerald-950 dark:text-emerald-100">
              Gửi Biểu Mẫu Thành Công!
            </h4>
            <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
              {submissionResult.message}
            </p>
            {submissionResult.trackingId && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-mono font-semibold text-slate-700 shadow-xs border border-emerald-200 dark:bg-slate-900 dark:text-slate-200 dark:border-emerald-800">
                Mã theo dõi: <span className="text-brand-600 font-bold">{submissionResult.trackingId}</span>
              </div>
            )}
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetForm}
                leftIcon={<RefreshCw className="h-4 w-4" />}
              >
                Gửi phản hồi khác
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <Input
                label="Họ và tên *"
                placeholder="Nguyễn Văn A"
                error={errors.fullName?.message}
                {...register("fullName")}
              />

              {/* Email */}
              <Input
                label="Địa chỉ Email *"
                type="email"
                placeholder="email@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <Input
                label="Số điện thoại"
                type="tel"
                placeholder="0912345678"
                error={errors.phone?.message}
                helperText="Không bắt buộc"
                {...register("phone")}
              />

              {/* Topic Select */}
              <div className="w-full space-y-1.5 text-left">
                <label
                  htmlFor="inquiry-topic"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Chủ đề quan tâm *
                </label>
                <select
                  id="inquiry-topic"
                  {...register("topic")}
                  className="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  <option value="frontend">Next.js 15 & React 19 Frontend</option>
                  <option value="architecture">Kiến trúc Feature-Based & Clean Code</option>
                  <option value="ui-ux">Thiết kế UI/UX với Tailwind CSS v4</option>
                  <option value="performance">Tối ưu hiệu năng Core Web Vitals</option>
                  <option value="consulting">Tư vấn dự án doanh nghiệp</option>
                </select>
                {errors.topic && (
                  <p className="text-xs font-medium text-rose-600">
                    {errors.topic.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div className="w-full space-y-1.5 text-left">
              <label
                htmlFor="inquiry-message"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
              >
                Nội dung yêu cầu / Câu hỏi *
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                placeholder="Mô tả chi tiết câu hỏi hoặc yêu cầu tư vấn của bạn..."
                {...register("message")}
                className={`flex w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${
                  errors.message ? "border-rose-500 focus:border-rose-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-xs font-medium text-rose-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="subscribeNewsletter"
                type="checkbox"
                {...register("subscribeNewsletter")}
                className="h-4 w-4 rounded-sm border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <label
                htmlFor="subscribeNewsletter"
                className="text-xs text-slate-600 dark:text-slate-400 select-none cursor-pointer"
              >
                Đăng ký nhận thông báo về bài viết và giải pháp công nghệ mới hàng tuần
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
                rightIcon={<Send className="h-4 w-4" />}
              >
                Gửi thông tin ngay
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
