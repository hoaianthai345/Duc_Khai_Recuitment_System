import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Briefcase, Clock, Filter } from "lucide-react"
import { Header } from "@/components/header"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Khám phá cơ hội nghề nghiệp tại Đức Khải
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tham gia đội ngũ của chúng tôi và phát triển sự nghiệp của bạn trong một môi trường năng động, sáng
                  tạo và đầy thử thách.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/office-environment.png"
                  alt="Môi trường làm việc tại Đức Khải"
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vị trí tuyển dụng</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Khám phá các vị trí đang tuyển dụng tại Đức Khải và tìm kiếm cơ hội phù hợp với bạn
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4 lg:gap-8 mb-8">
              <div className="md:col-span-3">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Tìm kiếm vị trí..." className="w-full pl-8" />
                  </div>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Lọc</span>
                  </Button>
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Phòng ban" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả phòng ban</SelectItem>
                    <SelectItem value="it">Công nghệ thông tin</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Kinh doanh</SelectItem>
                    <SelectItem value="hr">Nhân sự</SelectItem>
                    <SelectItem value="finance">Tài chính</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Toàn thời gian</Badge>
                  <CardTitle>Kỹ sư phần mềm</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Công nghệ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 01/05/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Phát triển và bảo trì các ứng dụng phần mềm của công ty, làm việc với các công nghệ hiện đại.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/careers/software-engineer">Xem chi tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Toàn thời gian</Badge>
                  <CardTitle>Chuyên viên Marketing</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 28/04/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Lập kế hoạch và thực hiện các chiến dịch marketing, quản lý nội dung trên các kênh truyền thông.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Toàn thời gian</Badge>
                  <CardTitle>Nhân viên kinh doanh</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Kinh doanh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 25/04/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Tìm kiếm và phát triển khách hàng mới, duy trì mối quan hệ với khách hàng hiện tại.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Toàn thời gian</Badge>
                  <CardTitle>Kế toán viên</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Tài chính</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 20/04/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Quản lý sổ sách kế toán, lập báo cáo tài chính, xử lý các giao dịch tài chính.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Toàn thời gian</Badge>
                  <CardTitle>Chuyên viên nhân sự</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Nhân sự</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 18/04/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Tuyển dụng, đào tạo và phát triển nhân viên, quản lý chính sách nhân sự.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <Badge className="w-fit mb-2">Bán thời gian</Badge>
                  <CardTitle>Thực tập sinh thiết kế</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>TP. Hồ Chí Minh</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Phòng Marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Đăng tuyển: 15/04/2024</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Hỗ trợ thiết kế đồ họa cho các dự án marketing, học hỏi và phát triển kỹ năng thiết kế.
                    </p>
                  </div>
                </CardContent>

              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Xem thêm vị trí</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quy trình tuyển dụng</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hiểu rõ các bước trong quy trình tuyển dụng của Đức Khải
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Nộp đơn ứng tuyển</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tạo tài khoản và nộp hồ sơ ứng tuyển trực tuyến với vị trí phù hợp
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Sàng lọc hồ sơ</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Đội ngũ tuyển dụng xem xét hồ sơ và liên hệ với ứng viên tiềm năng
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Phỏng vấn</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tham gia các vòng phỏng vấn với nhà tuyển dụng và quản lý trực tiếp
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Nhận việc</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Nhận thư mời làm việc và tham gia chương trình định hướng nhân viên mới
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Phúc lợi và đãi ngộ</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Khám phá những lợi ích khi trở thành thành viên của Đức Khải
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Chế độ lương thưởng hấp dẫn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Mức lương cạnh tranh, thưởng theo hiệu suất công việc, thưởng các dịp lễ tết và thưởng cuối năm.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bảo hiểm và chăm sóc sức khỏe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo quy định và gói bảo hiểm sức khỏe cao cấp.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Môi trường làm việc chuyên nghiệp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Văn phòng hiện đại, trang thiết bị đầy đủ, không gian làm việc thoải mái và sáng tạo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cơ hội đào tạo và phát triển</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Các khóa đào tạo nội bộ, hỗ trợ học phí cho các khóa học bên ngoài và cơ hội thăng tiến.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Hoạt động ngoại khóa và team building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Các hoạt động thể thao, văn nghệ, du lịch và team building được tổ chức thường xuyên.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chính sách ưu đãi cho nhân viên</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ưu đãi khi mua sản phẩm và dịch vụ của công ty, hỗ trợ vay vốn và các chính sách khác.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between md:py-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Công ty Cổ phần Đức Khải. Tất cả các quyền được bảo lưu.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline">
              Điều khoản sử dụng
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
              Chính sách bảo mật
            </Link>
            <Link href="/help" className="text-xs text-muted-foreground hover:underline">
              Trợ giúp
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
