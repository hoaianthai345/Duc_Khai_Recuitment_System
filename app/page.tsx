import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Building2, Users, UserPlus, Award, ChevronRight, Briefcase } from "lucide-react"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tham gia đội ngũ Đức Khải
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Chúng tôi luôn tìm kiếm những tài năng xuất sắc để cùng nhau phát triển và đổi mới. Khám phá cơ hội
                  nghề nghiệp tại Đức Khải ngay hôm nay.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/careers">
                    <Button className="w-full min-[400px]:w-auto">Xem vị trí tuyển dụng</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/recruitment-team.jpeg"
                  alt="Đội ngũ tuyển dụng Đức Khải"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Về Công ty Cổ phần Đức Khải</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Công ty Cổ phần Đức Khải là đơn vị tiên phong trong lĩnh vực của mình, với tầm nhìn và sứ mệnh rõ
                  ràng.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Tầm nhìn</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Trở thành công ty hàng đầu trong lĩnh vực, mang lại giá trị bền vững cho khách hàng, đối tác và cộng
                    đồng.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Sứ mệnh</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Cung cấp sản phẩm và dịch vụ chất lượng cao, đáp ứng nhu cầu ngày càng tăng của thị trường, đồng
                    thời phát triển đội ngũ nhân sự xuất sắc.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Giá trị cốt lõi</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Chính trực - Sáng tạo - Chất lượng - Hợp tác - Phát triển bền vững
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/era-town-1.png"
                  alt="Dự án Era Town của Đức Khải"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cổng thông tin</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Truy cập vào các cổng thông tin dành riêng cho từng đối tượng
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Dành cho Ứng viên
                  </CardTitle>
                  <CardDescription>Quản lý hồ sơ và theo dõi quá trình ứng tuyển của bạn</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Tạo và cập nhật hồ sơ cá nhân</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Nộp đơn ứng tuyển</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Theo dõi trạng thái ứng tuyển</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Xem lịch phỏng vấn</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/candidate/dashboard" className="w-full">
                    <Button className="w-full">Truy cập</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Dành cho Nhân viên
                  </CardTitle>
                  <CardDescription>Quản lý quy trình tuyển dụng và đánh giá ứng viên</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Quản lý hồ sơ ứng viên</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Lên lịch phỏng vấn</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Đánh giá ứng viên</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Xem báo cáo tuyển dụng</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/employee/dashboard" className="w-full">
                    <Button className="w-full">Truy cập</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Tham gia đội ngũ
                  </CardTitle>
                  <CardDescription>Khám phá cơ hội nghề nghiệp tại Đức Khải</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Xem vị trí tuyển dụng</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Tìm hiểu về công ty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Đọc câu chuyện từ nhân viên</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Phúc lợi và cơ hội phát triển</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/careers" className="w-full">
                    <Button className="w-full">Khám phá</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Thành tựu nổi bật</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Những dấu mốc quan trọng trong hành trình phát triển của Đức Khải
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Top 10 Doanh nghiệp tiêu biểu</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Được vinh danh trong Top 10 Doanh nghiệp tiêu biểu năm 2023
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">500+ Nhân sự</h3>
                <p className="text-gray-500 dark:text-gray-400">Đội ngũ hơn 500 nhân sự chuyên nghiệp, tận tâm</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">15 năm phát triển</h3>
                <p className="text-gray-500 dark:text-gray-400">15 năm xây dựng và phát triển bền vững</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-bold">Đức Khải</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Công ty Cổ phần Đức Khải. Tất cả các quyền được bảo lưu.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Liên kết</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Về chúng tôi
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Cơ hội nghề nghiệp
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Liên hệ
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Cổng thông tin</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/candidate/dashboard"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Dành cho Ứng viên
                </Link>
                <Link
                  href="/employee/dashboard"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Dành cho Nhân viên
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Tham gia đội ngũ
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Liên hệ</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                <p>123 Đường ABC, Quận XYZ</p>
                <p>Thành phố Hồ Chí Minh, Việt Nam</p>
                <p>Email: info@duckhaigroup.com</p>
                <p>Điện thoại: (028) 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
