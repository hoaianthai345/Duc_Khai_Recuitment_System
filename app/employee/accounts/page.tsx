"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  FileText,
  Calendar,
  Bell,
  LogOut,
  User,
  Briefcase,
  Clock,
  Users,
  BarChart,
  Mail,
  PlusCircle,
  Edit,
  Trash2,
  ClipboardList,
  Search,
  Filter,
  ArrowUpDown,
  UserCog,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

// Define interfaces
interface Account {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  createdAt: string
  lastLogin: string
  avatar?: string
}

// Mock data
const MOCK_ACCOUNTS: Account[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-01-01",
    lastLogin: "2024-03-15",
    avatar: "/images/avatar1.png"
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@example.com",
    role: "Employee",
    status: "active",
    createdAt: "2024-01-15",
    lastLogin: "2024-03-14",
    avatar: "/images/avatar2.png"
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@example.com",
    role: "Employee",
    status: "inactive",
    createdAt: "2024-02-01",
    lastLogin: "2024-03-10",
    avatar: "/images/avatar3.png"
  },
]

const ROLES = ["All", "Admin", "Employee", "Manager"]
const STATUSES = ["All", "active", "inactive"]
const SORT_OPTIONS = [
  { value: "name_asc", label: "Tên (A-Z)" },
  { value: "name_desc", label: "Tên (Z-A)" },
  { value: "created_asc", label: "Ngày tạo (cũ nhất)" },
  { value: "created_desc", label: "Ngày tạo (mới nhất)" },
  { value: "role_asc", label: "Vai trò (A-Z)" },
  { value: "role_desc", label: "Vai trò (Z-A)" },
]

export default function EmployeeAccountsPage() {
  const employeeName = "Nguyễn Thị Thùy Dương"
  const employeeEmail = "duongnguyen.31231022904@st.ueh.edu.vn"
  const avatarSrc = "/images/duongthuy.png"
  const avatarFallback = "ND"

  // State management
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [sortBy, setSortBy] = useState("name_asc")

  // Filter and sort accounts
  const filteredAccounts = MOCK_ACCOUNTS.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         account.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "All" || account.role === selectedRole
    const matchesStatus = selectedStatus === "All" || account.status === selectedStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  // Sort accounts
  const sortedAccounts = [...filteredAccounts].sort((a, b) => {
    switch (sortBy) {
      case "name_asc":
        return a.name.localeCompare(b.name)
      case "name_desc":
        return b.name.localeCompare(a.name)
      case "created_asc":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case "created_desc":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case "role_asc":
        return a.role.localeCompare(b.role)
      case "role_desc":
        return b.role.localeCompare(a.role)
      default:
        return 0
    }
  })

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
            <Link href="/employee/interviews" className="text-sm font-medium">
              Lịch phỏng vấn
            </Link>
            <Link href="/employee/job-descriptions" className="text-sm font-medium">
              Vị trí tuyển dụng
            </Link>
            <Link href="/employee/criteria" className="text-sm font-medium">
              Quản lý tiêu chí
            </Link>
            <Link href="/employee/accounts" className="text-sm font-medium">
              Quản lý tài khoản
            </Link>
            <Link href="/employee/email-templates" className="text-sm font-medium">
              Email mẫu
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
                  <AvatarImage src={avatarSrc} alt={employeeName} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">{employeeName}</p>
                  <p className="text-xs text-muted-foreground">{employeeEmail}</p>
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
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="space-y-4">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={avatarSrc} alt={employeeName} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{employeeName}</h2>
                <p className="text-sm text-muted-foreground">Nhân viên tuyển dụng</p>
                <p className="text-sm text-muted-foreground">{employeeEmail}</p>
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
                      href="/employee/criteria"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <ClipboardList className="h-4 w-4" />
                      <span>Quản lý tiêu chí</span>
                    </Link>
                    <Link
                      href="/employee/accounts"
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <UserCog className="h-4 w-4" />
                      <span>Quản lý tài khoản</span>
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

          {/* Main Content */}
          <div className="md:w-3/4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Quản lý Tài khoản</CardTitle>
                    <CardDescription>
                      Xem và quản lý danh sách tài khoản trong hệ thống.
                    </CardDescription>
                  </div>
                  <Button variant="outline">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Thêm tài khoản
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filter Section */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Tìm kiếm theo tên hoặc email..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Vai trò" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role === "All" ? "Tất cả vai trò" : role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUSES.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status === "All" ? "Tất cả trạng thái" : 
                             status === "active" ? "Đang hoạt động" : "Không hoạt động"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sắp xếp theo" />
                      </SelectTrigger>
                      <SelectContent>
                        {SORT_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Accounts Table */}
                {sortedAccounts.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <Users className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Không tìm thấy tài khoản nào</h3>
                    <p>Hãy thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tài khoản</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Vai trò</TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead>Chỉnh sửa gần nhất</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedAccounts.map((account) => (
                        <TableRow key={account.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={account.avatar} alt={account.name} />
                                <AvatarFallback>{account.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{account.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{account.email}</TableCell>
                          <TableCell>{account.role}</TableCell>
                          <TableCell>{new Date(account.createdAt).toLocaleDateString('vi-VN')}</TableCell>
                          <TableCell>{new Date(account.lastLogin).toLocaleDateString('vi-VN')}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" className="hover:text-blue-500">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
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