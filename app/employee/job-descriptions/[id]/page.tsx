"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Save, Eye, Trash2, Clock, FileText } from "lucide-react"
import { Header } from "@/components/header"

export default function JobDescriptionDetailPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState("active")
  const [isPublished, setIsPublished] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/employee/job-descriptions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách
            </Link>
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Thêm vị trí tuyển dụng</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href={`/careers/${params.id === "1" ? "software-engineer" : "job-detail"}`} target="_blank">
                <Eye className="mr-2 h-4 w-4" />
                Xem chi tiết
              </Link>
            </Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Lưu thay đổi
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cơ bản</CardTitle>
                <CardDescription>Nhập thông tin cơ bản về vị trí tuyển dụng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Tên vị trí</Label>
                  <Input id="job-title" defaultValue={params.id === "1" ? "Kỹ sư phần mềm" : ""} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Phòng ban</Label>
                    <Select defaultValue={params.id === "1" ? "it" : ""}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Chọn phòng ban" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Công nghệ thông tin</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Kinh doanh</SelectItem>
                        <SelectItem value="hr">Nhân sự</SelectItem>
                        <SelectItem value="finance">Tài chính</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Địa điểm làm việc</Label>
                    <Input id="location" defaultValue={params.id === "1" ? "TP. Hồ Chí Minh" : ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employment-type">Loại hình công việc</Label>
                    <Select defaultValue={params.id === "1" ? "full-time" : ""}>
                      <SelectTrigger id="employment-type">
                        <SelectValue placeholder="Chọn loại hình" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Toàn thời gian</SelectItem>
                        <SelectItem value="part-time">Bán thời gian</SelectItem>
                        <SelectItem value="contract">Hợp đồng</SelectItem>
                        <SelectItem value="internship">Thực tập</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Kinh nghiệm yêu cầu</Label>
                    <Select defaultValue={params.id === "1" ? "2-3" : ""}>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Chọn kinh nghiệm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Dưới 1 năm</SelectItem>
                        <SelectItem value="1-2">1-2 năm</SelectItem>
                        <SelectItem value="2-3">2-3 năm</SelectItem>
                        <SelectItem value="3-5">3-5 năm</SelectItem>
                        <SelectItem value="5+">Trên 5 năm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Mức lương tối thiểu (VNĐ)</Label>
                    <Input id="salary-min" type="number" defaultValue={params.id === "1" ? "15000000" : ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary-max">Mức lương tối đa (VNĐ)</Label>
                    <Input id="salary-max" type="number" defaultValue={params.id === "1" ? "25000000" : ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Hạn nộp hồ sơ</Label>
                    <Input id="deadline" type="date" defaultValue={params.id === "1" ? "2024-06-30" : ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="positions">Số lượng cần tuyển</Label>
                    <Input id="positions" type="number" defaultValue={params.id === "1" ? "2" : ""} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="short-description">Mô tả ngắn</Label>
                  <Textarea
                    id="short-description"
                    defaultValue={
                      params.id === "1"
                        ? "Phát triển và bảo trì các ứng dụng phần mềm của công ty, làm việc với các công nghệ hiện đại."
                        : ""
                    }
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-description">Vị trí tuyển dụng</Label>
                  <Textarea
                    id="job-description"
                    defaultValue={
                      params.id === "1"
                        ? "- Phát triển và bảo trì các ứng dụng phần mềm của công ty\n- Thiết kế và triển khai các tính năng mới\n- Tối ưu hóa hiệu suất ứng dụng\n- Viết mã sạch, dễ bảo trì và có khả năng mở rộng\n- Tham gia vào quá trình review code\n- Làm việc trong môi trường Agile/Scrum"
                        : ""
                    }
                    className="min-h-[200px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Yêu cầu ứng viên</Label>
                  <Textarea
                    id="requirements"
                    defaultValue={
                      params.id === "1"
                        ? "- Tốt nghiệp Đại học chuyên ngành Công nghệ thông tin hoặc tương đương\n- Có ít nhất 2 năm kinh nghiệm phát triển phần mềm\n- Thành thạo JavaScript, TypeScript, React và Node.js\n- Hiểu biết về cơ sở dữ liệu SQL và NoSQL\n- Có kinh nghiệm làm việc với Git và CI/CD\n- Kỹ năng giao tiếp và làm việc nhóm tốt\n- Tiếng Anh đọc hiểu tài liệu chuyên ngành"
                        : ""
                    }
                    className="min-h-[200px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Quyền lợi</Label>
                  <Textarea
                    id="benefits"
                    defaultValue={
                      params.id === "1"
                        ? "- Mức lương cạnh tranh, thưởng theo hiệu suất công việc\n- Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo quy định\n- Gói bảo hiểm sức khỏe cao cấp\n- Môi trường làm việc chuyên nghiệp, năng động\n- Cơ hội đào tạo và phát triển kỹ năng\n- Các hoạt động team building, du lịch hàng năm\n- Lịch làm việc linh hoạt"
                        : ""
                    }
                    className="min-h-[200px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quy trình tuyển dụng</CardTitle>
                <CardDescription>Mô tả quy trình tuyển dụng cho vị trí này</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  defaultValue={
                    params.id === "1"
                      ? "1. Sàng lọc hồ sơ\n2. Phỏng vấn sơ bộ qua điện thoại\n3. Bài kiểm tra kỹ thuật\n4. Phỏng vấn chuyên môn\n5. Phỏng vấn với quản lý\n6. Đề xuất công việc"
                      : ""
                  }
                  className="min-h-[150px]"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trạng thái</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">Công khai</Label>
                  <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Trạng thái tuyển dụng</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Đang tuyển</SelectItem>
                      <SelectItem value="draft">Bản nháp</SelectItem>
                      <SelectItem value="closed">Đã đóng</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Đường dẫn</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">/careers/</span>
                    <Input id="slug" defaultValue={params.id === "1" ? "software-engineer" : ""} className="flex-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thông tin bổ sung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Kỹ năng</Label>
                  <Textarea
                    id="skills"
                    defaultValue={
                      params.id === "1" ? "JavaScript, TypeScript, React, Node.js, SQL, NoSQL, Git, CI/CD" : ""
                    }
                    placeholder="Nhập các kỹ năng, phân cách bằng dấu phẩy"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Thẻ</Label>
                  <Textarea
                    id="tags"
                    defaultValue={
                      params.id === "1" ? "Công nghệ, Phát triển phần mềm, Frontend, Backend, Fullstack" : ""
                    }
                    placeholder="Nhập các thẻ, phân cách bằng dấu phẩy"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hành động</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/employee/job-descriptions/${params.id}/applications`}>
                    <FileText className="mr-2 h-4 w-4" />
                    Xem danh sách ứng viên
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Clock className="mr-2 h-4 w-4" />
                  Gia hạn thời gian
                </Button>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Xóa vị trí tuyển dụng
                </Button>
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
