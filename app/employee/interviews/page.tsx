import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  Bell,
  User,
  Briefcase,
  FileText,
  Calendar,
  LogOut,
  Search,
  Filter,
  Clock,
  BarChart,
  Mail,
  MapPin,
  Video,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function EmployeeInterviews() {
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
            <Link href="/employee/dashboard" className="text-sm font-medium">
              Trang chủ
            </Link>
            <Link href="/employee/applications" className="text-sm font-medium">
              Hồ sơ ứng viên
            </Link>
            <Link href="/employee/interviews" className="text-sm font-medium text-primary">
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
                  <AvatarImage src="/images/duongthuy.png" alt="Nguyễn Thị Thùy Dương" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">Nguyễn Thị Thùy Dương</p>
                  <p className="text-xs text-muted-foreground">duongnguyen.31231022904@st.ueh.edu.vn</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/employee/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Hồ sơ</span>
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
                  <AvatarImage src="/images/duongthuy.png" alt="Nguyễn Thị Thùy Dương" />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Nguyễn Thị Thùy Dương</h2>
                <p className="text-sm text-muted-foreground">Nhân viên tuyển dụng</p>
                <p className="text-sm text-muted-foreground">duongnguyen.31231022904@st.ueh.edu.vn</p>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/employee/profile">
                    <User className="mr-2 h-4 w-4" />
                    Xem hồ sơ
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-lg border shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Menu</h3>
                  <nav className="space-y-1">
                    <Link
                      href="/employee/dashboard"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Trang chủ</span>
                    </Link>
                    <Link
                      href="/employee/applications"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Hồ sơ ứng viên</span>
                    </Link>
                    <Link
                      href="/employee/interviews"
                      className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Lịch phỏng vấn</span>
                    </Link>
                    <Link
                      href="/employee/job-descriptions"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Vị trí tuyển dụng</span>
                    </Link>
                    <Link
                      href="/employee/email-templates"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email mẫu</span>
                    </Link>
                    <Link
                      href="/employee/reports"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <BarChart className="h-4 w-4" />
                      <span>Báo cáo</span>
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
                <h1 className="text-2xl font-bold">Quản lý lịch phỏng vấn</h1>
                <Button asChild>
                  <Link href="/employee/interviews/create">
                    <Calendar className="mr-2 h-4 w-4" />
                    Tạo lịch phỏng vấn
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Tìm kiếm lịch phỏng vấn..." className="w-full pl-8" />
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
                      <SelectValue placeholder="Vòng phỏng vấn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả vòng</SelectItem>
                      <SelectItem value="round1">Vòng 1</SelectItem>
                      <SelectItem value="round2">Vòng 2</SelectItem>
                      <SelectItem value="round3">Vòng 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Sắp tới (5)</TabsTrigger>
                  <TabsTrigger value="completed">Đã hoàn thành (12)</TabsTrigger>
                  <TabsTrigger value="canceled">Đã hủy (1)</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Phỏng vấn: Lê Thị H - Chuyên viên Marketing</h3>
                            <Badge>Vòng 1</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">15/05/2024 - 10:00 AM</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Phòng họp A - Tầng 3</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="@interviewer" />
                              <AvatarFallback>NV</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">Người phỏng vấn: Nguyễn Văn X, Trần Văn Y</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                            <Video className="mr-1 h-3 w-3" />
                            Trực tuyến
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/interviews/1">Chi tiết</Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href="/employee/interviews/1/evaluation">Đánh giá</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Phỏng vấn: Phạm Văn D - Kỹ sư phần mềm</h3>
                            <Badge>Vòng 2</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">16/05/2024 - 14:00 PM</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Phòng họp B - Tầng 3</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="@interviewer" />
                              <AvatarFallback>NV</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">Người phỏng vấn: Lê Văn Z, Nguyễn Thị W</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            <MapPin className="mr-1 h-3 w-3" />
                            Trực tiếp
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/interviews/2">Chi tiết</Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href="/employee/interviews/2/evaluation">Đánh giá</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Phỏng vấn: Nguyễn Thị M - Kế toán viên</h3>
                            <Badge>Vòng 1</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">17/05/2024 - 09:00 AM</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Phòng họp A - Tầng 3</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="@interviewer" />
                              <AvatarFallback>NV</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">Người phỏng vấn: Trần Thị B, Phạm Văn C</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            <MapPin className="mr-1 h-3 w-3" />
                            Trực tiếp
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/interviews/3">Chi tiết</Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href="/employee/interviews/3/evaluation">Đánh giá</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="completed" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Phỏng vấn: Trần Văn C - Nhân viên kinh doanh</h3>
                            <Badge>Vòng 1</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">10/05/2024 - 10:00 AM</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Phòng họp A - Tầng 3</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                              Không đạt
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/employee/interviews/4">Xem kết quả</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="canceled" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Phỏng vấn: Hoàng Văn E - Nhân viên kinh doanh</h3>
                            <Badge>Vòng 1</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">08/05/2024 - 14:00 PM</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Phòng họp B - Tầng 3</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-50">
                              Đã hủy bởi ứng viên
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/employee/interviews/5">Chi tiết</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
