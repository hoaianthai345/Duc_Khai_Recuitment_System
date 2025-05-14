import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Building2, Bell, User, Briefcase, FileText, Calendar, LogOut, BarChart, Mail, Edit, KeyRound, ClipboardList } from "lucide-react"

export default function EmployeeProfilePage() {
  // Hardcoded data for prototype
  const employeeData = {
    name: "Nguyễn Thị Thùy Dương",
    email: "duongnguyen.31231022904@st.ueh.edu.vn",
    position: "Nhân viên tuyển dụng",
    department: "Phòng Nhân sự", // Added field
    phone: "0987 654 321",
    birthday: "01/01/2005" // Added field
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header: Copied from dashboard, includes Avatar Dropdown */}
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
                  <AvatarImage src="/images/duongthuy.png" alt={employeeData.name} />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">{employeeData.name}</p>
                  <p className="text-xs text-muted-foreground">{employeeData.email}</p>
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

      {/* Main Content */}
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar: Copied from dashboard, highlight "Xem hồ sơ" */}
          <div className="md:w-1/4">
            <div className="space-y-4">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/images/duongthuy.png" alt={employeeData.name} />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{employeeData.name}</h2>
                <p className="text-sm text-muted-foreground">{employeeData.position}</p>
                <p className="text-sm text-muted-foreground">{employeeData.email}</p>
                {/* Highlight this button as it leads here */}
                <Button variant="secondary" className="w-full mt-4" asChild>
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
                    <Link href="/employee/dashboard" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <Briefcase className="h-4 w-4" />
                      <span>Trang chủ</span>
                    </Link>
                    <Link href="/employee/applications" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <FileText className="h-4 w-4" />
                      <span>Hồ sơ ứng viên</span>
                    </Link>
                    <Link href="/employee/interviews" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
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
                      href="/employee/criteria"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <ClipboardList className="h-4 w-4" />
                      <span>Quản lý tiêu chí</span>
                    </Link>
                    <Link
                      href="/employee/email-templates"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email mẫu</span>
                    </Link>
                    <Link href="/employee/reports" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <BarChart className="h-4 w-4" />
                      <span>Báo cáo</span>
                    </Link>
                    <Link href="/about" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted text-red-500">
                      <LogOut className="h-4 w-4" />
                      <span>Đăng xuất</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="md:w-3/4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Hồ sơ Nhân viên</CardTitle>
                    <CardDescription>Xem và chỉnh sửa thông tin tài khoản của bạn.</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Edit className="mr-2 h-4 w-4" />
                    Chỉnh sửa
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input id="name" value={employeeData.name} readOnly />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={employeeData.email} readOnly />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="position">Vai trò</Label>
                    <Input id="position" value={employeeData.position} readOnly />
                  </div>
                   <div className="space-y-1">
                    <Label htmlFor="department">Phòng ban</Label>
                    <Input id="department" value={employeeData.department} readOnly />
                  </div>
                   <div className="space-y-1">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" type="tel" value={employeeData.phone} readOnly />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="birthday">Ngày sinh</Label>
                    <Input id="birthday" value={employeeData.birthday} readOnly />
                  </div>
                </div>
                 {/* Add more sections as needed, e.g., Change Password */}
                 <Card>
                   <CardHeader>
                     <CardTitle className="text-lg">Đổi mật khẩu</CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div className="space-y-1">
                       <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                       <Input id="current-password" type="password" />
                     </div>
                     <div className="space-y-1">
                       <Label htmlFor="new-password">Mật khẩu mới</Label>
                       <Input id="new-password" type="password" />
                     </div>
                     <div className="space-y-1">
                       <Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
                       <Input id="confirm-password" type="password" />
                     </div>
                     <Button>Cập nhật mật khẩu</Button>
                   </CardContent>
                 </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer: Copied from dashboard */}
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