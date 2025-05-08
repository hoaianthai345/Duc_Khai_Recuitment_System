import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Globe, Send, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Liên hệ với chúng tôi</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với Đức Khải ngay hôm nay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Thông tin liên hệ</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Trụ sở chính</h3>
                        <p className="text-gray-500 dark:text-gray-400">123 Đường ABC, Quận 7, TP. Hồ Chí Minh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Điện thoại</h3>
                        <p className="text-gray-500 dark:text-gray-400">(028) 1234 5678</p>
                        <p className="text-gray-500 dark:text-gray-400">Hotline: 0901 234 567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Email</h3>
                        <p className="text-gray-500 dark:text-gray-400">info@duckhaigroup.com</p>
                        <p className="text-gray-500 dark:text-gray-400">tuyendung@duckhaigroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Giờ làm việc</h3>
                        <p className="text-gray-500 dark:text-gray-400">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                        <p className="text-gray-500 dark:text-gray-400">Thứ Bảy: 8:00 - 12:00</p>
                        <p className="text-gray-500 dark:text-gray-400">Chủ Nhật: Nghỉ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Website</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="aspect-video overflow-hidden rounded-xl border">
                  <Image
                    src="/images/era-town-2.webp"
                    alt="Khu vực trụ sở Đức Khải"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
                    <CardDescription>
                      Điền thông tin của bạn vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Họ</Label>
                          <Input id="first-name" placeholder="Nguyễn" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Tên</Label>
                          <Input id="last-name" placeholder="Văn A" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" type="tel" placeholder="0901 234 567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Chủ đề</Label>
                        <Select>
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Chọn chủ đề" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="recruitment">Tuyển dụng</SelectItem>
                            <SelectItem value="partnership">Hợp tác</SelectItem>
                            <SelectItem value="information">Thông tin</SelectItem>
                            <SelectItem value="support">Hỗ trợ</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Tin nhắn</Label>
                        <Textarea
                          id="message"
                          placeholder="Nhập nội dung tin nhắn của bạn..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Gửi tin nhắn
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Câu hỏi thường gặp</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Một số câu hỏi phổ biến về tuyển dụng tại Đức Khải
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Làm thế nào để ứng tuyển vào Đức Khải?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bạn có thể ứng tuyển vào Đức Khải bằng cách tạo tài khoản trên website tuyển dụng của chúng tôi, sau
                    đó tìm kiếm vị trí phù hợp và nộp hồ sơ trực tuyến. Ngoài ra, bạn cũng có thể gửi CV trực tiếp qua
                    email tuyendung@duckhaigroup.com.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quy trình tuyển dụng tại Đức Khải diễn ra như thế nào?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Quy trình tuyển dụng của chúng tôi thường bao gồm 4 bước: sàng lọc hồ sơ, phỏng vấn chuyên môn, đánh
                    giá tính phù hợp và thông báo kết quả. Tùy thuộc vào vị trí, có thể có thêm các bước đánh giá bổ
                    sung như bài kiểm tra kỹ năng hoặc phỏng vấn với lãnh đạo cấp cao.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Đức Khải có chính sách đào tạo và phát triển nhân viên không?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Có, Đức Khải có chương trình đào tạo và phát triển toàn diện cho nhân viên. Chúng tôi cung cấp các
                    khóa đào tạo nội bộ, hỗ trợ học phí cho các khóa học bên ngoài và tạo điều kiện cho nhân viên phát
                    triển sự nghiệp dài hạn thông qua các cơ hội thăng tiến và luân chuyển công việc.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Làm thế nào để biết thêm thông tin về các vị trí đang tuyển dụng?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bạn có thể xem tất cả các vị trí đang tuyển dụng tại mục "Cơ hội nghề nghiệp" trên website của chúng
                    tôi. Ngoài ra, bạn cũng có thể theo dõi fanpage Facebook và LinkedIn của Đức Khải để cập nhật thông
                    tin tuyển dụng mới nhất.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sẵn sàng tham gia đội ngũ Đức Khải?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                  Khám phá cơ hội nghề nghiệp và phát triển sự nghiệp cùng chúng tôi
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/careers">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Xem vị trí tuyển dụng
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/auth/register">Đăng ký tài khoản</Link>
                </Button>
              </div>
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
