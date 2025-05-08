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
  Plus,
  Edit,
  Send,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function EmailTemplatesPage() {
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
            <Link href="/employee/email-templates" className="text-sm font-medium text-primary">
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
                      className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary"
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
                <h1 className="text-2xl font-bold">Quản lý email mẫu</h1>
                <Button asChild>
                  <Link href="/employee/email-templates/create">
                    <Plus className="mr-2 h-4 w-4" />
                    Tạo email mẫu
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Tìm kiếm email mẫu..." className="w-full pl-8" />
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
                      <SelectValue placeholder="Loại email" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả loại</SelectItem>
                      <SelectItem value="welcome">Chào mừng</SelectItem>
                      <SelectItem value="interview">Mời phỏng vấn</SelectItem>
                      <SelectItem value="offer">Đề xuất công việc</SelectItem>
                      <SelectItem value="rejection">Từ chối</SelectItem>
                      <SelectItem value="followup">Theo dõi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">Tất cả (12)</TabsTrigger>
                  <TabsTrigger value="welcome">Chào mừng (2)</TabsTrigger>
                  <TabsTrigger value="interview">Phỏng vấn (4)</TabsTrigger>
                  <TabsTrigger value="offer">Đề xuất (3)</TabsTrigger>
                  <TabsTrigger value="rejection">Từ chối (3)</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Xác nhận nhận hồ sơ</h3>
                          <p className="text-sm text-muted-foreground">Email xác nhận đã nhận hồ sơ ứng tuyển</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 10/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              Chào mừng
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/1">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/1/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Mời phỏng vấn vòng 1</h3>
                          <p className="text-sm text-muted-foreground">Email mời ứng viên tham gia phỏng vấn vòng 1</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 08/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Phỏng vấn
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/2">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/2/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Mời phỏng vấn vòng 2</h3>
                          <p className="text-sm text-muted-foreground">Email mời ứng viên tham gia phỏng vấn vòng 2</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 07/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Phỏng vấn
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/3">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/3/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Đề xuất công việc</h3>
                          <p className="text-sm text-muted-foreground">Email gửi đề xuất công việc cho ứng viên</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 05/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-purple-50 text-purple-700">
                              Đề xuất
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/4">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/4/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Từ chối ứng viên</h3>
                          <p className="text-sm text-muted-foreground">Email thông báo từ chối ứng viên</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 03/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-red-50 text-red-700">
                              Từ chối
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/5">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/5/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="welcome" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Xác nhận nhận hồ sơ</h3>
                          <p className="text-sm text-muted-foreground">Email xác nhận đã nhận hồ sơ ứng tuyển</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 10/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              Chào mừng
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/1">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/1/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="interview" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Mời phỏng vấn vòng 1</h3>
                          <p className="text-sm text-muted-foreground">Email mời ứng viên tham gia phỏng vấn vòng 1</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 08/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Phỏng vấn
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/2">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/2/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Mời phỏng vấn vòng 2</h3>
                          <p className="text-sm text-muted-foreground">Email mời ứng viên tham gia phỏng vấn vòng 2</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 07/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Phỏng vấn
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/3">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/3/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="offer" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Đề xuất công việc</h3>
                          <p className="text-sm text-muted-foreground">Email gửi đề xuất công việc cho ứng viên</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 05/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-purple-50 text-purple-700">
                              Đề xuất
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/4">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/4/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rejection" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Từ chối ứng viên</h3>
                          <p className="text-sm text-muted-foreground">Email thông báo từ chối ứng viên</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Cập nhật: 03/05/2024</span>
                            </div>
                            <Badge variant="outline" className="bg-red-50 text-red-700">
                              Từ chối
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/5">
                              <Edit className="mr-1 h-3.5 w-3.5" />
                              Chỉnh sửa
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/employee/email-templates/5/send">
                              <Send className="mr-1 h-3.5 w-3.5" />
                              Gửi
                            </Link>
                          </Button>
                        </div>
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
