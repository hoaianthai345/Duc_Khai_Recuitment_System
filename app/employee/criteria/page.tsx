import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
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
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ArrowUpDown, 
  Eye,
  Check
} from "lucide-react";
import { useState } from "react";

// Define an interface for a single criterion
interface Criterion {
  id: string;
  name: string;
  description: string;
  category: string;
  weight: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define an interface for CriteriaForm data
interface CriteriaFormData {
  name: string;
  description: string;
  category: string;
  weight: number;
  isActive: boolean;
}

// Mock data for criteria
const MOCK_CRITERIA: Criterion[] = [
  { 
    id: "1", 
    name: "Kinh nghiệm làm việc", 
    description: "Đánh giá kinh nghiệm làm việc của ứng viên trong lĩnh vực tương ứng.",
    category: "Kỹ năng chuyên môn",
    weight: 30,
    isActive: true,
    createdAt: "15/06/2024",
    updatedAt: "20/06/2024"
  },
  { 
    id: "2", 
    name: "Kỹ năng giao tiếp", 
    description: "Đánh giá khả năng truyền đạt thông tin, giao tiếp và làm việc nhóm.",
    category: "Kỹ năng mềm",
    weight: 20,
    isActive: true,
    createdAt: "15/06/2024",
    updatedAt: "20/06/2024"
  },
  { 
    id: "3", 
    name: "Trình độ học vấn", 
    description: "Đánh giá bằng cấp, chứng chỉ và thành tích học tập của ứng viên.",
    category: "Học vấn",
    weight: 15,
    isActive: true,
    createdAt: "15/06/2024",
    updatedAt: "20/06/2024"
  },
  { 
    id: "4", 
    name: "Kỹ năng lãnh đạo", 
    description: "Đánh giá khả năng lãnh đạo và quản lý nhóm của ứng viên.",
    category: "Kỹ năng mềm",
    weight: 15,
    isActive: false,
    createdAt: "16/06/2024",
    updatedAt: "21/06/2024"
  },
  { 
    id: "5", 
    name: "Kỹ năng giải quyết vấn đề", 
    description: "Đánh giá khả năng phân tích và giải quyết vấn đề của ứng viên.",
    category: "Kỹ năng mềm",
    weight: 20,
    isActive: true,
    createdAt: "16/06/2024",
    updatedAt: "21/06/2024"
  }
];

const CATEGORIES: string[] = [
  "Kỹ năng chuyên môn",
  "Kỹ năng mềm",
  "Học vấn",
  "Thái độ làm việc",
  "Phù hợp văn hóa",
  "Khác"
];

// Mock data for UI prototype
const MOCK_CRITERIA_UI = [
  {
    id: "1",
    name: "Kinh nghiệm làm việc",
    category: "Kỹ năng chuyên môn",
    weight: 30,
    isActive: true,
  },
  {
    id: "2",
    name: "Kỹ năng giao tiếp",
    category: "Kỹ năng mềm",
    weight: 20,
    isActive: true,
  },
  {
    id: "3",
    name: "Trình độ học vấn",
    category: "Học vấn",
    weight: 15,
    isActive: false,
  },
];

export default function EmployeeCriteriaPage() {
  const employeeName = "Nguyễn Thị Thùy Dương";
  const employeeEmail = "duongnguyen.31231022904@st.ueh.edu.vn";
  const avatarSrc = "/images/duongthuy.png";
  const avatarFallback = "ND";

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
            <Link href="/employee/criteria" className="text-sm font-medium text-primary">
              Quản lý tiêu chí
            </Link>
            <Link href="/employee/accounts" className="text-sm font-medium">
              Quản lý tài khoản
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
                      className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"
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
          <div className="md:w-3/4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Quản lý Tiêu chí</CardTitle>
                    <CardDescription>
                      Xem và quản lý các tiêu chí đánh giá ứng viên.
                    </CardDescription>
                  </div>
                  <Button variant="outline">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Thêm tiêu chí
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Search and Filter Section */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Tìm kiếm tiêu chí..."
                          className="w-full pl-8"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Danh mục" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tất cả danh mục</SelectItem>
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Vị trí" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tất cả vị trí</SelectItem>
                          <SelectItem value="active">Phòng Công nghệ</SelectItem>
                          <SelectItem value="inactive">Phòng Marketing</SelectItem>
                          <SelectItem value="inactive">Phòng Kinh doanh</SelectItem>
                          <SelectItem value="inactive">Phòng Nhân sự</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sắp xếp theo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name-asc">Tên (A-Z)</SelectItem>
                          <SelectItem value="name-desc">Tên (Z-A)</SelectItem>
                          <SelectItem value="weight-asc">Trọng số (tăng dần)</SelectItem>
                          <SelectItem value="weight-desc">Trọng số (giảm dần)</SelectItem>
                          <SelectItem value="date-asc">Ngày tạo (mới nhất)</SelectItem>
                          <SelectItem value="date-desc">Ngày tạo (cũ nhất)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Table Section */}
                  {MOCK_CRITERIA_UI.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <Users className="mx-auto h-12 w-12 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Chưa có tiêu chí nào</h3>
                      <p>Nhấn "Thêm tiêu chí" để bắt đầu.</p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tên tiêu chí</TableHead>
                          <TableHead>Danh mục</TableHead>
                          <TableHead className="text-center">Trọng số (%)</TableHead>
                          <TableHead className="text-center">Vị trí</TableHead>
                          <TableHead className="text-right">Thao tác</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {MOCK_CRITERIA_UI.map((criterion) => (
                          <TableRow key={criterion.id}>
                            <TableCell className="font-medium">{criterion.name}</TableCell>
                            <TableCell>{criterion.category}</TableCell>
                            <TableCell className="text-center">{criterion.weight}%</TableCell>
                            <TableCell className="text-center">
                              {criterion.isActive ? (
                                <Badge variant="outline" className="text-gray-700 border-gray-200 bg-gray-50">
                                  Phòng Công nghệ
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                                  Tất cả vị trí
                                </Badge>
                              )}
                            </TableCell>
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
                </div>
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
