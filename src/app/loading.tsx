import { Loader } from "@/components/common";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Loader size="lg" text="Đang tải trang..." />
    </div>
  );
}
