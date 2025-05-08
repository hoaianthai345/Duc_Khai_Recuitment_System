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
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function EmployeeApplications() {
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
                      className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Hồ sơ ứng viên</span>
                    </Link>
                    <Link
                      href="/employee/interviews"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
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
                <h1 className="text-2xl font-bold">Quản lý hồ sơ ứng viên</h1>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Tìm kiếm ứng viên..." className="w-full pl-8" />
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
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả trạng thái</SelectItem>
                      <SelectItem value="pending">Chưa xử lý</SelectItem>
                      <SelectItem value="approved">Đã duyệt</SelectItem>
                      <SelectItem value="rejected">Từ chối</SelectItem>
                      <SelectItem value="interview">Mời phỏng vấn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">Tất cả (124)</TabsTrigger>
                  <TabsTrigger value="pending">Chưa xử lý (45)</TabsTrigger>
                  <TabsTrigger value="approved">Đã duyệt (32)</TabsTrigger>
                  <TabsTrigger value="interview">Phỏng vấn (18)</TabsTrigger>
                  <TabsTrigger value="rejected">Từ chối (29)</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>NVA</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Nguyễn Văn A</h3>
                          <p className="text-sm text-muted-foreground">Kỹ sư phần mềm</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 10/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-yellow-500">Chưa xử lý</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/1">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>LTH</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Lê Thị H</h3>
                          <p className="text-sm text-muted-foreground">Chuyên viên Marketing</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 09/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-green-500">Đã duyệt</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/2">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>TVC</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Trần Văn C</h3>
                          <p className="text-sm text-muted-foreground">Nhân viên kinh doanh</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 08/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-red-500">Từ chối</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/3">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>PVD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Phạm Văn D</h3>
                          <p className="text-sm text-muted-foreground">Kỹ sư phần mềm</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 07/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-blue-500">Mời phỏng vấn</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/4">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>NTM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Nguyễn Thị M</h3>
                          <p className="text-sm text-muted-foreground">Kế toán viên</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 06/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-yellow-500">Chưa xử lý</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/5">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <Button variant="outline" size="sm" className="mx-1">
                      Trước
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1 bg-primary/10">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1">
                      ...
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1">
                      12
                    </Button>
                    <Button variant="outline" size="sm" className="mx-1">
                      Sau
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="pending" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>NVA</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Nguyễn Văn A</h3>
                          <p className="text-sm text-muted-foreground">Kỹ sư phần mềm</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 10/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-yellow-500">Chưa xử lý</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/1">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>NTM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Nguyễn Thị M</h3>
                          <p className="text-sm text-muted-foreground">Kế toán viên</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 06/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-yellow-500">Chưa xử lý</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/5">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="approved" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>LTH</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Lê Thị H</h3>
                          <p className="text-sm text-muted-foreground">Chuyên viên Marketing</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 09/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-green-500">Đã duyệt</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/2">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="interview" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>PVD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Phạm Văn D</h3>
                          <p className="text-sm text-muted-foreground">Kỹ sư phần mềm</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 07/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-blue-500">Mời phỏng vấn</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/4">Xem hồ sơ</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rejected" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt="@user" />
                          <AvatarFallback>TVC</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Trần Văn C</h3>
                          <p className="text-sm text-muted-foreground">Nhân viên kinh doanh</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Đã nộp: 08/05/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-red-500">Từ chối</Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/employee/applications/3">Xem hồ sơ</Link>
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
