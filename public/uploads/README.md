# THƯ MỤC CHỨA ẢNH TẢI LÊN (PUBLIC UPLOADS)

Bạn có thể sao chép / thả các tệp hình ảnh (jpg, png, webp, svg, gif...) trực tiếp vào thư mục này:
`D:\sylven\public\uploads\`

### Cách sử dụng trong code Next.js:
Mọi tệp đặt trong thư mục này có thể được truy cập trực tiếp bằng đường dẫn URL bắt đầu bằng `/uploads/`:

Ví dụ:
Nếu bạn copy tệp ảnh `tac-pham-1.jpg` vào đây:
- Đường dẫn file trên máy: `D:\sylven\public\uploads\tac-pham-1.jpg`
- Đường dẫn gọi trong web / code: `/uploads/tac-pham-1.jpg`

Trong JSX/HTML:
```tsx
<img src="/uploads/tac-pham-1.jpg" alt="Tác phẩm điêu khắc" />
```
hoặc với Next.js Image:
```tsx
import Image from "next/image";

<Image
  src="/uploads/tac-pham-1.jpg"
  alt="Tác phẩm"
  width={800}
  height={600}
/>
```
