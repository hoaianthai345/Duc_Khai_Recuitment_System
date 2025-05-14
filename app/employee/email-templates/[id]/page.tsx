"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Save, Trash2, Send } from "lucide-react"
import { Header } from "@/components/header"

export default function EmailTemplateDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("edit")
  const [emailSubject, setEmailSubject] = useState(params.id === "1" ? "Xác nhận đã nhận hồ sơ ứng tuyển của bạn" : "")
  const [emailContent, setEmailContent] = useState(
    params.id === "1"
      ? `Kính gửi {{candidate_name}},

Cảm ơn bạn đã ứng tuyển vào vị trí {{job_title}} tại Công ty Cổ phần Đức Khải.

Chúng tôi xác nhận đã nhận được hồ sơ ứng tuyển của bạn và sẽ xem xét kỹ lưỡng trong thời gian sớm nhất. Quá trình xem xét hồ sơ có thể mất từ 5-7 ngày làm việc.

Nếu hồ sơ của bạn phù hợp với yêu cầu của vị trí, chúng tôi sẽ liên hệ với bạn để sắp xếp buổi phỏng vấn. Trong trường hợp không được chọn, chúng tôi cũng sẽ thông báo để bạn biết.

Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email tuyendung@duckhaigroup.com hoặc số điện thoại (028) 1234 5678.

Trân trọng,
{{sender_name}}
Phòng Nhân sự
Công ty Cổ phần Đức Khải
`
      : "",
  )

  const previewEmail = () => {
    // Replace placeholders with sample data
    const candidate_name = "Nguyễn Duy Tân"
    const job_title = "Kỹ sư phần mềm"
    const sender_name = "Trần Thị B"
    const interview_date = "15/05/2024"
    const interview_time = "10:00"
    const interview_location = "Phòng họp A, Tầng 3"

    const preview = emailContent
      .replace(/{{candidate_name}}/g, candidate_name)
      .replace(/{{job_title}}/g, job_title)
      .replace(/{{sender_name}}/g, sender_name)
      .replace(/{{interview_date}}/g, interview_date)
      .replace(/{{interview_time}}/g, interview_time)
      .replace(/{{interview_location}}/g, interview_location)

    return preview
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/employee/email-templates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách
            </Link>
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{params.id === "1" ? "Chỉnh sửa email mẫu" : "Tạo email mẫu mới"}</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href={`/employee/email-templates/${params.id}/send`}>
                <Send className="mr-2 h-4 w-4" />
                Gửi email
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
                <CardTitle>Nội dung email</CardTitle>
                <CardDescription>Chỉnh sửa nội dung email mẫu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="edit">Chỉnh sửa</TabsTrigger>
                    <TabsTrigger value="preview">Xem trước</TabsTrigger>
                  </TabsList>
                  <TabsContent value="edit" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-subject">Tiêu đề email</Label>
                      <Input
                        id="email-subject"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-content">Nội dung email</Label>
                      <Textarea
                        id="email-content"
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        className="min-h-[400px] font-mono"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="preview" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>{emailSubject}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose max-w-none dark:prose-invert">
                          {previewEmail()
                            .split("\n")
                            .map((line, index) => (
                              <p key={index}>{line || <br />}</p>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Tên mẫu</Label>
                  <Input id="template-name" defaultValue={params.id === "1" ? "Xác nhận nhận hồ sơ" : ""} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-description">Mô tả</Label>
                  <Textarea
                    id="template-description"
                    defaultValue={params.id === "1" ? "Email xác nhận đã nhận hồ sơ ứng tuyển" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-type">Loại email</Label>
                  <Select defaultValue={params.id === "1" ? "welcome" : ""}>
                    <SelectTrigger id="template-type">
                      <SelectValue placeholder="Chọn loại email" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welcome">Chào mừng</SelectItem>
                      <SelectItem value="interview">Mời phỏng vấn</SelectItem>
                      <SelectItem value="offer">Đề xuất công việc</SelectItem>
                      <SelectItem value="rejection">Từ chối</SelectItem>
                      <SelectItem value="followup">Theo dõi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="is-active">Kích hoạt</Label>
                  <Switch id="is-active" defaultChecked={params.id === "1"} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Biến thay thế</CardTitle>
                <CardDescription>Các biến có thể sử dụng trong mẫu email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{candidate_name}}"}</div>
                    <div>Tên ứng viên</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{job_title}}"}</div>
                    <div>Tên vị trí công việc</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{sender_name}}"}</div>
                    <div>Tên người gửi</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{interview_date}}"}</div>
                    <div>Ngày phỏng vấn</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{interview_time}}"}</div>
                    <div>Thời gian phỏng vấn</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="font-mono bg-muted px-1 rounded">{"{{interview_location}}"}</div>
                    <div>Địa điểm phỏng vấn</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hành động</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="destructive" className="w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Xóa email mẫu
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
