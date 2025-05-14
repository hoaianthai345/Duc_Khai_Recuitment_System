'use client'; // If using client-side components like Select, useState (though we'll keep it simple first)

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input"; // For date range potentially
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import {
  Building2,
  FileText,
  Calendar,
  Bell,
  LogOut,
  User,
  Briefcase,
  BarChart,
  Mail,
  Users, // For sidebar icon for criteria, keep for consistency if used elsewhere
  Download, // For export button
  FileSpreadsheet, // For Excel
  FileJson, // For CSV (though FileText is also an option)
  Printer, // For PDF
  ClipboardList, // Added for Criteria icon
  UserCog, // Added for accounts icon
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for report options
const reportTypes = [
  { value: "candidate_summary", label: "Tổng hợp ứng viên" },
  { value: "source_effectiveness", label: "Hiệu quả nguồn tuyển dụng" },
  { value: "time_to_hire", label: "Thời gian tuyển dụng trung bình" },
  { value: "cost_per_hire", label: "Chi phí tuyển dụng" },
  { value: "interview_conversion", label: "Tỷ lệ chuyển đổi phỏng vấn" },
];

const exportFormats = [
  { value: "excel", label: "Excel (.xlsx)", icon: FileSpreadsheet },
  { value: "pdf", label: "PDF (.pdf)", icon: Printer },
  { value: "csv", label: "CSV (.csv)", icon: FileJson },
];

export default function EmployeeReportsPage() {
  const employeeName = "Nguyễn Thị Thùy Dương";
  const employeeEmail = "duongnguyen.31231022904@st.ueh.edu.vn";
  const avatarFallback = "ND";
  const avatarSrc = "/images/duongthuy.png"; // Consistent avatar

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2"> {/* Wrap logo in Link */}
            <Image 
              src="/images/logo_vn.png" 
              alt="Đức Khải Logo"
              width={100} // Adjust width as needed
              height={32} // Adjust height as needed
              className="object-contain" // Maintain aspect ratio
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
            <Link href="/employee/reports" className="text-sm font-medium text-primary"> {/* Active Link */}
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

      {/* Main Content */}
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
                    <Link href="/employee/job-descriptions" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <Briefcase className="h-4 w-4" />
                      <span>Vị trí tuyển dụng</span>
                    </Link>
                    <Link href="/employee/criteria" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <ClipboardList className="h-4 w-4" />
                      <span>Quản lý tiêu chí</span>
                    </Link>
                    <Link href="/employee/accounts" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <UserCog className="h-4 w-4" />
                      <span>Quản lý tài khoản</span>
                    </Link>
                    <Link href="/employee/email-templates" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <Mail className="h-4 w-4" />
                      <span>Email mẫu</span>
                    </Link>
                    <Link href="/employee/reports" className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"> {/* Active link */}
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

          {/* Reports Content */}
          <div className="md:w-3/4">
            <Card>
              <CardHeader>
                <CardTitle>Xuất Báo cáo Tuyển dụng</CardTitle>
                <CardDescription>
                  Chọn loại báo cáo, khoảng thời gian và định dạng để xuất dữ liệu.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="reportType">Loại báo cáo</Label>
                  <Select defaultValue={reportTypes[0].value}>
                    <SelectTrigger id="reportType">
                      <SelectValue placeholder="Chọn loại báo cáo" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((report) => (
                        <SelectItem key={report.value} value={report.value}>
                          {report.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Từ ngày</Label>
                    <Input id="startDate" type="date" placeholder="Chọn ngày bắt đầu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">Đến ngày</Label>
                    <Input id="endDate" type="date" placeholder="Chọn ngày kết thúc" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="exportFormat">Định dạng xuất</Label>
                  <Select defaultValue={exportFormats[0].value}>
                    <SelectTrigger id="exportFormat">
                      <SelectValue placeholder="Chọn định dạng" />
                    </SelectTrigger>
                    <SelectContent>
                      {exportFormats.map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          <div className="flex items-center gap-2">
                            <format.icon className="h-4 w-4 text-muted-foreground" />
                            <span>{format.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full md:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Xuất báo cáo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
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
  );
}
