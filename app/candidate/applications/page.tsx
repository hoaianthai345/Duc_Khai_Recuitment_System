import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building2, FileText, Calendar, Bell, LogOut, User, Briefcase, Clock, MapPin, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function CandidateApplicationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/images/logo_vn.png" 
              alt="Đức Khải Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
            <Link href="/candidate/dashboard" className="text-sm font-medium">
              Trang chủ
            </Link>
            <Link href="/candidate/profile" className="text-sm font-medium">
              Hồ sơ cá nhân
            </Link>
            <Link href="/candidate/applications" className="text-sm font-medium text-primary font-semibold">
              Đơn ứng tuyển
            </Link>
            <Link href="/candidate/interviews" className="text-sm font-medium">
              Lịch phỏng vấn
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/images/candidate-avatar.png" alt="Nguyễn Duy Tân" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">Nguyễn Duy Tân</p>
                  <p className="text-xs text-muted-foreground">tannguyen.31231023384@st.ueh.edu.vn</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/candidate/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Hồ sơ cá nhân</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Đăng xuất</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="space-y-4">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/images/candidate-avatar.png" alt="Nguyễn Duy Tân" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Nguyễn Duy Tân</h2>
                <p className="text-sm text-muted-foreground">tannguyen.31231023384@st.ueh.edu.vn</p>
                <div className="w-full mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Hoàn thiện hồ sơ</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/candidate/profile">
                    <User className="mr-2 h-4 w-4" />
                    Cập nhật hồ sơ
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-lg border shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Menu</h3>
                  <nav className="space-y-1">
                    <Link
                      href="/candidate/dashboard"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Trang chủ</span>
                    </Link>
                    <Link
                      href="/candidate/profile"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <User className="h-4 w-4" />
                      <span>Hồ sơ cá nhân</span>
                    </Link>
                    <Link
                      href="/candidate/applications"
                      className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Đơn ứng tuyển</span>
                    </Link>
                    <Link
                      href="/candidate/interviews"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Lịch phỏng vấn</span>
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted text-red-500"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Đăng xuất</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Quản lý Đơn ứng tuyển</h1>
                <Button asChild>
                  <Link href="/careers">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Nộp hồ sơ mới
                  </Link>
                </Button>
              </div>

              {/* Công việc đã ứng tuyển */}
              <Card>
                <CardHeader>
                  <CardTitle>Công việc đã ứng tuyển</CardTitle>
                  <CardDescription>Theo dõi trạng thái hồ sơ ứng tuyển của bạn</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Kỹ sư Phần mềm Cao cấp</h3>
                          <p className="text-sm text-muted-foreground">Công ty Cổ phần Đức Khải</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">TP. Hồ Chí Minh</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 15/07/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium bg-yellow-500/20 text-yellow-700">
                          <AlertCircle className="mr-1 h-3 w-3" />
                          Đang xử lý
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <div>Chi tiết</div>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Chuyên viên Phân tích Nghiệp vụ</h3>
                          <p className="text-sm text-muted-foreground">Công ty Cổ phần Đức Khải</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">TP. Hà Nội</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 10/07/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-700">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Mời phỏng vấn
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <div>Chi tiết</div>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Thực tập sinh Marketing</h3>
                          <p className="text-sm text-muted-foreground">Công ty Cổ phần Đức Khải</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đà Nẵng</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 20/06/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium bg-red-500/20 text-red-700">
                          <XCircle className="mr-1 h-3 w-3" />
                          Đã từ chối
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <div>Chi tiết</div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vị trí tuyển dụng */}
              <Card>
                <CardHeader>
                  <CardTitle>Vị trí tuyển dụng</CardTitle>
                  <CardDescription>Khám phá cơ hội việc làm phù hợp với bạn</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium line-clamp-2">Kỹ sư Phần mềm Cao cấp</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" /> 
                            <span>Công nghệ Thông tin</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" /> TP. Hồ Chí Minh
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" /> Toàn thời gian
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-sm">Lương:</span>
                          <span className="text-sm text-muted-foreground ml-1">Thỏa thuận</span>
                        </div>
                        <p className="text-sm text-muted-foreground pt-2 line-clamp-3">
                          Phát triển và duy trì các ứng dụng web hiệu suất cao, tham gia vào toàn bộ vòng đời phát triển phần mềm...
                        </p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button className="w-full" asChild disabled>
                          <div>Xem chi tiết & Ứng tuyển</div>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium line-clamp-2">Chuyên viên Phân tích Nghiệp vụ</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" /> 
                            <span>Phân tích Kinh doanh</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" /> TP. Hà Nội
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" /> Toàn thời gian
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-sm">Lương:</span>
                          <span className="text-sm text-muted-foreground ml-1">Cạnh tranh</span>
                        </div>
                        <p className="text-sm text-muted-foreground pt-2 line-clamp-3">
                          Thu thập, phân tích yêu cầu nghiệp vụ, làm việc với các bên liên quan để xác định giải pháp, hỗ trợ đội ngũ phát triển...
                        </p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button className="w-full" asChild>
                          <div>Xem chi tiết & Ứng tuyển</div>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium line-clamp-2">Nhân viên Content Marketing</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" /> 
                            <span>Marketing</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" /> TP. Hồ Chí Minh
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" /> Bán thời gian
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-sm">Lương:</span>
                          <span className="text-sm text-muted-foreground ml-1">10.000.000 VNĐ - 15.000.000 VNĐ</span>
                        </div>
                        <p className="text-sm text-muted-foreground pt-2 line-clamp-3">
                          Sáng tạo nội dung hấp dẫn cho các kênh truyền thông, quản lý fanpage, website, triển khai các chiến dịch marketing...
                        </p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button className="w-full" asChild>
                          <div>Xem chi tiết & Ứng tuyển</div>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/careers">Xem tất cả vị trí tuyển dụng</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
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
