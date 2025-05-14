import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  Building2,
  Bell,
  Briefcase,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Download,
  CheckCircle,
  XCircle,
  User,
  LogOut,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ApplicationDetail() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">Đức Khải</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/employee/dashboard" className="text-sm font-medium">
              Trang chủ
            </Link>
            <Link href="/employee/applications" className="text-sm font-medium text-primary">
              Hồ sơ ứng viên
            </Link>
            <Link href="/employee/interviews" className="text-sm font-medium">
              Lịch phỏng vấn
            </Link>
            <Link href="/employee/job-descriptions" className="text-sm font-medium">
              Vị trí tuyển dụng
            </Link>
            <Link href="/employee/reports" className="text-sm font-medium">
              Báo cáo
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="/images/duongthuy.png" alt="@user" />
                  <AvatarFallback>NV</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  {/* TODO: Fetch actual employee name and email */}
                  <p className="font-medium">Nguyễn Thị Thùy Dương</p>
                  <p className="text-xs text-muted-foreground">duongnguyen.31231023384@st.ueh.edu.vn</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/employee/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Hồ sơ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">
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
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/employee/applications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Thông tin ứng viên</CardTitle>
                  <Badge className="bg-yellow-500">Chưa xử lý</Badge>
                </div>
                <CardDescription>Đã nộp: 10/05/2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/images/candidate-avatar.png" alt="Nguyễn Duy Tân" />
                    <AvatarFallback>NDT</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">Nguyễn Duy Tân</h2>
                  <p className="text-sm text-muted-foreground">Kỹ sư phần mềm</p>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">tannguyen.31231023384@st.ueh.edu.vn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">0123 456 789</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">TP. Hồ Chí Minh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">3 năm kinh nghiệm</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Tải CV
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Lịch sử hoạt động</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Download className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Ứng viên nộp hồ sơ</p>
                      <p className="text-xs text-muted-foreground">10/05/2024 - 09:45 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Hệ thống xác nhận hồ sơ</p>
                      <p className="text-xs text-muted-foreground">10/05/2024 - 09:46 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Gửi email xác nhận</p>
                      <p className="text-xs text-muted-foreground">10/05/2024 - 09:47 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-2/3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
                <TabsTrigger value="evaluation">Đánh giá</TabsTrigger>
                <TabsTrigger value="interview">Phỏng vấn</TabsTrigger>
                <TabsTrigger value="documents">Tài liệu</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin chi tiết</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium mb-1">Họ và tên</h3>
                          <p>Nguyễn Duy Tân</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Ngày sinh</h3>
                          <p>15/04/2005</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Email</h3>
                          <p>tannguyen.31231023384@st.ueh.edu.vn</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Số điện thoại</h3>
                          <p>0123 456 789</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Địa chỉ</h3>
                          <p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Vị trí ứng tuyển</h3>
                          <p>Kỹ sư phần mềm</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Phòng ban</h3>
                          <p>Phòng Công nghệ</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Kinh nghiệm</h3>
                          <p>3 năm</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-1">Giới thiệu bản thân</h3>
                        <p className="text-sm text-muted-foreground">
                          Tôi là một kỹ sư phần mềm với 3 năm kinh nghiệm trong việc phát triển các ứng dụng web và
                          mobile. Tôi có kiến thức sâu về JavaScript, React, Node.js và các công nghệ liên quan. Tôi đam
                          mê tạo ra các sản phẩm có giá trị và luôn tìm kiếm cơ hội để học hỏi và phát triển kỹ năng của
                          mình.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-1">Kỹ năng</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">JavaScript</Badge>
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">Node.js</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                          <Badge variant="outline">HTML/CSS</Badge>
                          <Badge variant="outline">Git</Badge>
                          <Badge variant="outline">RESTful API</Badge>
                          <Badge variant="outline">SQL</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Kinh nghiệm làm việc</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-2 border-primary/20 pl-4 pb-2">
                        <h3 className="text-base font-medium">Công ty XYZ</h3>
                        <p className="text-sm text-muted-foreground">Kỹ sư phần mềm | 06/2021 - Hiện tại</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                          <li>Phát triển và bảo trì các ứng dụng web sử dụng React và Node.js</li>
                          <li>Tối ưu hóa hiệu suất ứng dụng và cải thiện trải nghiệm người dùng</li>
                          <li>Làm việc trong môi trường Agile/Scrum với các sprint 2 tuần</li>
                        </ul>
                      </div>

                      <div className="border-l-2 border-primary/20 pl-4 pb-2">
                        <h3 className="text-base font-medium">Công ty ABC</h3>
                        <p className="text-sm text-muted-foreground">Lập trình viên Frontend | 01/2020 - 05/2021</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                          <li>Phát triển giao diện người dùng cho các ứng dụng web</li>
                          <li>Làm việc với HTML, CSS, JavaScript và các framework như React</li>
                          <li>Tham gia vào quá trình thiết kế và phát triển sản phẩm</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Học vấn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-2 border-primary/20 pl-4 pb-2">
                        <h3 className="text-base font-medium">Đại học Kinh tế TP.HCM</h3>
                        <p className="text-sm text-muted-foreground">Kỹ sư Công nghệ thông tin | 2016 - 2020</p>
                        <p className="text-sm text-muted-foreground mt-2">Tốt nghiệp loại Giỏi, GPA: 3.9/4.0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evaluation" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Đánh giá hồ sơ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Đánh giá chung</h3>
                        <RadioGroup defaultValue="pending">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="approved" id="approved" />
                            <Label htmlFor="approved" className="flex items-center">
                              <CheckCircle className="mr-1.5 h-4 w-4 text-green-500" />
                              Đạt yêu cầu
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pending" id="pending" />
                            <Label htmlFor="pending">Cần xem xét thêm</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="rejected" id="rejected" />
                            <Label htmlFor="rejected" className="flex items-center">
                              <XCircle className="mr-1.5 h-4 w-4 text-red-500" />
                              Không đạt yêu cầu
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-2">Ghi chú đánh giá</h3>
                        <Textarea placeholder="Nhập ghi chú đánh giá của bạn..." className="min-h-[120px]" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Lưu nháp</Button>
                    <div className="space-x-2">
                      <Button variant="destructive">Từ chối</Button>
                      <Button>Duyệt hồ sơ</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="interview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lên lịch phỏng vấn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="interview-date" className="text-sm font-medium mb-1 block">
                            Ngày phỏng vấn
                          </Label>
                          <input
                            type="date"
                            id="interview-date"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="interview-time" className="text-sm font-medium mb-1 block">
                            Thời gian
                          </Label>
                          <input
                            type="time"
                            id="interview-time"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <Label htmlFor="interview-type" className="text-sm font-medium mb-1 block">
                            Hình thức
                          </Label>
                          <select
                            id="interview-type"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="offline">Trực tiếp</option>
                            <option value="online">Trực tuyến</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="interview-round" className="text-sm font-medium mb-1 block">
                            Vòng phỏng vấn
                          </Label>
                          <select
                            id="interview-round"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="round1">Vòng 1 - Sơ loại</option>
                            <option value="round2">Vòng 2 - Chuyên môn</option>
                            <option value="round3">Vòng 3 - Phỏng vấn với Trưởng phòng</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="interview-location" className="text-sm font-medium mb-1 block">
                          Địa điểm
                        </Label>
                        <input
                          type="text"
                          id="interview-location"
                          placeholder="Nhập địa điểm phỏng vấn..."
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <Label htmlFor="interview-interviewers" className="text-sm font-medium mb-1 block">
                          Người phỏng vấn
                        </Label>
                        <input
                          type="text"
                          id="interview-interviewers"
                          placeholder="Nhập tên người phỏng vấn..."
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <Label htmlFor="interview-notes" className="text-sm font-medium mb-1 block">
                          Ghi chú
                        </Label>
                        <Textarea
                          id="interview-notes"
                          placeholder="Nhập ghi chú về buổi phỏng vấn..."
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Hủy</Button>
                    <div className="space-x-2">
                      <Button variant="outline">Lưu nháp</Button>
                      <Button>Gửi lời mời phỏng vấn</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tài liệu đính kèm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">CV_NguyenDuyTan.pdf</p>
                            <p className="text-xs text-muted-foreground">Đã tải lên: 10/05/2024</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="#">Tải xuống</Link>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Portfolio_NguyenDuyTan.pdf</p>
                            <p className="text-xs text-muted-foreground">Đã tải lên: 10/05/2024</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="#">Tải xuống</Link>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Certificate_NguyenDuyTan.pdf</p>
                            <p className="text-xs text-muted-foreground">Đã tải lên: 10/05/2024</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="#">Tải xuống</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
