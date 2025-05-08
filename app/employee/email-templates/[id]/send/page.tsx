"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowLeft, Send, Filter, Search, CheckCircle, Info } from "lucide-react"
import { Header } from "@/components/header"

export default function SendEmailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("recipients")
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
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  // Danh sách ứng viên mẫu
  const candidates = [
    {
      id: "1",
      name: "Nguyễn Duy Tân",
      email: "tannguyen@example.com",
      position: "Kỹ sư phần mềm",
      status: "pending",
      avatar: "/images/candidate-avatar.png",
    },
    {
      id: "2",
      name: "Lê Thị H",
      email: "lethih@example.com",
      position: "Chuyên viên Marketing",
      status: "interview",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Trần Văn C",
      email: "tranvanc@example.com",
      position: "Nhân viên kinh doanh",
      status: "rejected",
      avatar: "/placeholder.svg",
    },
    {
      id: "4",
      name: "Phạm Văn D",
      email: "phamvand@example.com",
      position: "Kỹ sư phần mềm",
      status: "interview",
      avatar: "/placeholder.svg",
    },
    {
      id: "5",
      name: "Nguyễn Thị M",
      email: "nguyenthim@example.com",
      position: "Kế toán viên",
      status: "pending",
      avatar: "/placeholder.svg",
    },
  ]

  const toggleSelectAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(candidates.map((c) => c.id))
    }
  }

  const toggleCandidate = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== id))
    } else {
      setSelectedCandidates([...selectedCandidates, id])
    }
  }

  const handleSendEmail = () => {
    setIsSending(true)
    // Giả lập gửi email
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
    }, 2000)
  }

  const previewEmail = (candidateId: string) => {
    const candidate = candidates.find((c) => c.id === candidateId)
    if (!candidate) return emailContent

    // Replace placeholders with candidate data
    const preview = emailContent
      .replace(/{{candidate_name}}/g, candidate.name)
      .replace(/{{job_title}}/g, candidate.position)
      .replace(/{{sender_name}}/g, "Trần Thị B")
      .replace(/{{interview_date}}/g, "15/05/2024")
      .replace(/{{interview_time}}/g, "10:00")
      .replace(/{{interview_location}}/g, "Phòng họp A, Tầng 3")

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
          <h1 className="text-2xl font-bold">Gửi email đồng loạt</h1>
          <div className="flex items-center gap-2">
            {!isSent && (
              <Button onClick={handleSendEmail} disabled={selectedCandidates.length === 0 || isSending}>
                <Send className="mr-2 h-4 w-4" />
                {isSending ? "Đang gửi..." : "Gửi email"}
              </Button>
            )}
          </div>
        </div>

        {isSent ? (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Email đã được gửi thành công!</h2>
                <p className="text-muted-foreground mb-6">
                  Đã gửi email đến {selectedCandidates.length} ứng viên. Bạn có thể theo dõi trạng thái gửi email trong
                  mục báo cáo.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/employee/email-templates">Quay lại danh sách</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/employee/reports/emails">Xem báo cáo</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Gửi email</CardTitle>
                  <CardDescription>Chọn người nhận và xem trước nội dung email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="recipients">Người nhận</TabsTrigger>
                      <TabsTrigger value="preview">Xem trước</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recipients" className="space-y-4 mt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="select-all"
                            checked={selectedCandidates.length === candidates.length}
                            onCheckedChange={toggleSelectAll}
                          />
                          <Label htmlFor="select-all">Chọn tất cả</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Tìm kiếm ứng viên..." className="pl-8 w-[250px]" />
                          </div>
                          <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                            <span className="sr-only">Lọc</span>
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-md">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12"></TableHead>
                              <TableHead>Ứng viên</TableHead>
                              <TableHead>Vị trí</TableHead>
                              <TableHead>Trạng thái</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {candidates.map((candidate) => (
                              <TableRow key={candidate.id}>
                                <TableCell>
                                  <Checkbox
                                    checked={selectedCandidates.includes(candidate.id)}
                                    onCheckedChange={() => toggleCandidate(candidate.id)}
                                  />
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
                                      <AvatarFallback>
                                        {candidate.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">{candidate.name}</div>
                                      <div className="text-sm text-muted-foreground">{candidate.email}</div>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>{candidate.position}</TableCell>
                                <TableCell>
                                  {candidate.status === "pending" && (
                                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                                      Chưa xử lý
                                    </Badge>
                                  )}
                                  {candidate.status === "interview" && (
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                      Phỏng vấn
                                    </Badge>
                                  )}
                                  {candidate.status === "rejected" && (
                                    <Badge variant="outline" className="bg-red-50 text-red-700">
                                      Từ chối
                                    </Badge>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Đã chọn {selectedCandidates.length} / {candidates.length} ứng viên
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="preview" className="mt-4">
                      {selectedCandidates.length > 0 ? (
                        <div className="space-y-6">
                          <div className="flex items-center gap-2">
                            <Label>Xem trước cho:</Label>
                            <Select
                              value={selectedCandidates[0]}
                              onValueChange={(value) => {
                                // Move the selected candidate to the first position
                                setSelectedCandidates([value, ...selectedCandidates.filter((id) => id !== value)])
                              }}
                            >
                              <SelectTrigger className="w-[250px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {selectedCandidates.map((id) => {
                                  const candidate = candidates.find((c) => c.id === id)
                                  return (
                                    <SelectItem key={id} value={id}>
                                      {candidate?.name}
                                    </SelectItem>
                                  )
                                })}
                              </SelectContent>
                            </Select>
                          </div>

                          <Card>
                            <CardHeader>
                              <CardTitle>{emailSubject}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="prose max-w-none dark:prose-invert">
                                {previewEmail(selectedCandidates[0])
                                  .split("\n")
                                  .map((line, index) => (
                                    <p key={index}>{line || <br />}</p>
                                  ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-6 border rounded-md">
                          <Info className="h-12 w-12 text-muted-foreground mb-4" />
                          <h3 className="text-lg font-medium mb-2">Chưa có người nhận nào được chọn</h3>
                          <p className="text-muted-foreground mb-4">
                            Vui lòng chọn ít nhất một ứng viên để xem trước email.
                          </p>
                          <Button variant="outline" onClick={() => setActiveTab("recipients")}>
                            Chọn người nhận
                          </Button>
                        </div>
                      )}
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
                    <Label htmlFor="email-subject">Tiêu đề email</Label>
                    <Input id="email-subject" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-content">Nội dung email</Label>
                    <Textarea
                      id="email-content"
                      value={emailContent}
                      onChange={(e) => setEmailContent(e.target.value)}
                      className="min-h-[200px] font-mono"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tùy chọn gửi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sender-name">Tên người gửi</Label>
                    <Input id="sender-name" defaultValue="Trần Thị B" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sender-email">Email người gửi</Label>
                    <Input id="sender-email" defaultValue="tranthib@duckhaigroup.com" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-log" defaultChecked />
                    <Label htmlFor="save-log">Lưu nhật ký gửi email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="send-copy" />
                    <Label htmlFor="send-copy">Gửi bản sao cho tôi</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lịch trình gửi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="schedule" />
                    <Label htmlFor="schedule">Lên lịch gửi</Label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule-date">Ngày</Label>
                      <Input id="schedule-date" type="date" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schedule-time">Thời gian</Label>
                      <Input id="schedule-time" type="time" disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
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
