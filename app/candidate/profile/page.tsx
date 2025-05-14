import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Building2, Bell, User, Briefcase, FileText, Calendar, LogOut, Edit, Plus, Download, Trash2 } from "lucide-react"

export default function CandidateProfilePage() {
  // Hardcoded data for prototype
  const candidateData = {
    name: "Nguyễn Duy Tân",
    email: "tannguyen.31231023384@st.ueh.edu.vn",
    avatar: "/images/candidate-avatar.png",
    avatarFallback: "ND",
    phone: "0912 345 678",
    address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh",
    dob: "15/08/1998", // Example DOB
    summary: "Tôi là một kỹ sư phần mềm với 3 năm kinh nghiệm trong việc phát triển các ứng dụng web và mobile. Tôi có kiến thức sâu về JavaScript, React, Node.js và các công nghệ liên quan. Tôi đam mê tạo ra các sản phẩm có giá trị và luôn tìm kiếm cơ hội để học hỏi và phát triển kỹ năng của mình.",
    profileCompletion: 75,
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "Git", "RESTful API", "SQL"],
    experience: [
      {
        id: 1,
        company: "Công ty XYZ",
        position: "Kỹ sư phần mềm",
        duration: "06/2021 - Hiện tại",
        description: [
          "Phát triển và bảo trì các ứng dụng web sử dụng React và Node.js",
          "Tối ưu hóa hiệu suất ứng dụng và cải thiện trải nghiệm người dùng",
          "Làm việc trong môi trường Agile/Scrum với các sprint 2 tuần",
        ],
      },
      {
        id: 2,
        company: "Công ty ABC",
        position: "Lập trình viên Frontend",
        duration: "01/2020 - 05/2021",
        description: [
          "Phát triển giao diện người dùng cho các ứng dụng web",
          "Làm việc với HTML, CSS, JavaScript và các framework như React",
          "Tham gia vào quá trình thiết kế và phát triển sản phẩm",
        ],
      },
    ],
    education: [
      {
        id: 1,
        institution: "Đại học Kinh tế TP.HCM",
        degree: "Kỹ sư Công nghệ thông tin",
        duration: "2016 - 2020",
        notes: "Tốt nghiệp loại Giỏi, GPA: 3.5/4.0",
      },
    ],
    documents: [
        { id: 1, name: "CV_NguyenDuyTan.pdf", uploadedDate: "10/05/2024", url: "#"},
        { id: 2, name: "Portfolio_NguyenDuyTan.pdf", uploadedDate: "10/05/2024", url: "#"},
        { id: 3, name: "Certificate_Professional_Scrum_Master.pdf", uploadedDate: "11/05/2024", url: "#"}
    ]
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header: Copied from candidate dashboard, includes Avatar Dropdown */}
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
            <Link href="/candidate/dashboard" className="text-sm font-medium">
              Trang chủ
            </Link>
            {/* Highlight this link */}
            <Link href="/candidate/profile" className="text-sm font-medium text-primary">
              Hồ sơ cá nhân
            </Link>
            <Link href="/candidate/applications" className="text-sm font-medium">
              Đơn ứng tuyển
            </Link>
            <Link href="/candidate/interviews" className="text-sm font-medium">
              Lịch phỏng vấn
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={candidateData.avatar} alt={candidateData.name} />
                  <AvatarFallback>{candidateData.avatarFallback}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64"> {/* Slightly wider */}
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm">
                  <p className="font-medium">{candidateData.name}</p>
                  <p className="text-xs text-muted-foreground">{candidateData.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/candidate/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Hồ sơ cá nhân</span>
                  </Link>
                </DropdownMenuItem>
                 {/* <DropdownMenuItem disabled>
                   <Settings className="mr-2 h-4 w-4" />
                   <span>Cài đặt tài khoản</span>
                 </DropdownMenuItem> */}
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
          {/* Sidebar: Copied from candidate dashboard, highlight "Hồ sơ cá nhân" */}
          <div className="md:w-1/4">
            <div className="space-y-4">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={candidateData.avatar} alt={candidateData.name} />
                  <AvatarFallback>{candidateData.avatarFallback}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{candidateData.name}</h2>
                <p className="text-sm text-muted-foreground">{candidateData.email}</p>
                 <div className="w-full mt-4">
                   <div className="flex justify-between text-sm mb-1">
                     <span>Hoàn thiện hồ sơ</span>
                     <span>{candidateData.profileCompletion}%</span>
                   </div>
                   <Progress value={candidateData.profileCompletion} className="h-2" />
                 </div>
                {/* Highlight this button */}
                 <Button variant="secondary" className="w-full mt-4" asChild>
                   <Link href="/candidate/profile">
                     <User className="mr-2 h-4 w-4" />
                     Hồ sơ cá nhân
                   </Link>
                 </Button>
              </div>
              <div className="bg-card rounded-lg border shadow-sm">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Menu</h3>
                  <nav className="space-y-1">
                    <Link href="/candidate/dashboard" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <Briefcase className="h-4 w-4" />
                      <span>Trang chủ</span>
                    </Link>
                    {/* Highlight this link */}
                    <Link href="/candidate/profile" className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary">
                      <User className="h-4 w-4" />
                      <span>Hồ sơ cá nhân</span>
                    </Link>
                    <Link href="/candidate/applications" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <FileText className="h-4 w-4" />
                      <span>Đơn ứng tuyển</span>
                    </Link>
                    <Link href="/candidate/interviews" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <Calendar className="h-4 w-4" />
                      <span>Lịch phỏng vấn</span>
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
          <div className="md:w-3/4 space-y-6">
            {/* Personal Information Card */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Thông tin cá nhân</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-1 h-3.5 w-3.5" />
                    Chỉnh sửa
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <Label>Họ và tên</Label>
                   <p className="text-sm">{candidateData.name}</p>
                 </div>
                 <div className="space-y-1">
                   <Label>Email</Label>
                   <p className="text-sm">{candidateData.email}</p>
                 </div>
                 <div className="space-y-1">
                   <Label>Số điện thoại</Label>
                   <p className="text-sm">{candidateData.phone}</p>
                 </div>
                 <div className="space-y-1">
                   <Label>Ngày sinh</Label>
                   <p className="text-sm">{candidateData.dob}</p>
                 </div>
                 <div className="space-y-1 md:col-span-2">
                   <Label>Địa chỉ</Label>
                   <p className="text-sm">{candidateData.address}</p>
                 </div>
              </CardContent>
            </Card>

            {/* Summary Card */}
             <Card>
               <CardHeader>
                 <div className="flex justify-between items-center">
                   <CardTitle>Giới thiệu bản thân</CardTitle>
                   <Button variant="outline" size="sm">
                     <Edit className="mr-1 h-3.5 w-3.5" />
                     Chỉnh sửa
                   </Button>
                 </div>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-muted-foreground">{candidateData.summary}</p>
               </CardContent>
             </Card>

            {/* Skills Card */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Kỹ năng</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-1 h-3.5 w-3.5" />
                    Chỉnh sửa
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {candidateData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                  {/* Maybe add a button to add new skills */}
                  {/* <Button variant="ghost" size="sm"><Plus className="mr-1 h-3.5 w-3.5" /> Thêm kỹ năng</Button> */}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Card */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Kinh nghiệm làm việc</CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-1 h-3.5 w-3.5" />
                    Thêm
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {candidateData.experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-primary/20 pl-4 pb-4 relative group">
                     <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
                       <Button variant="ghost" size="icon" className="h-7 w-7">
                         <Edit className="h-4 w-4" />
                       </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive">
                         <Trash2 className="h-4 w-4" />
                       </Button>
                     </div>
                     <h3 className="text-base font-medium">{exp.position}</h3>
                     <p className="text-sm font-semibold">{exp.company}</p>
                     <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                     <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                       {exp.description.map((desc, index) => (
                         <li key={index}>{desc}</li>
                       ))}
                     </ul>
                   </div>
                ))}
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card>
               <CardHeader>
                 <div className="flex justify-between items-center">
                   <CardTitle>Học vấn</CardTitle>
                   <Button variant="outline" size="sm">
                     <Plus className="mr-1 h-3.5 w-3.5" />
                     Thêm
                   </Button>
                 </div>
               </CardHeader>
               <CardContent className="space-y-6">
                 {candidateData.education.map((edu) => (
                   <div key={edu.id} className="border-l-2 border-primary/20 pl-4 pb-4 relative group">
                       <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
                       <Button variant="ghost" size="icon" className="h-7 w-7">
                         <Edit className="h-4 w-4" />
                       </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive">
                         <Trash2 className="h-4 w-4" />
                       </Button>
                     </div>
                     <h3 className="text-base font-medium">{edu.institution}</h3>
                     <p className="text-sm font-semibold">{edu.degree}</p>
                     <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                     {edu.notes && <p className="text-sm text-muted-foreground">{edu.notes}</p>}
                   </div>
                 ))}
               </CardContent>
             </Card>

              {/* Documents Card */}
             <Card>
                <CardHeader>
                 <div className="flex justify-between items-center">
                   <CardTitle>Tài liệu đính kèm</CardTitle>
                   <Button variant="outline" size="sm">
                     <Plus className="mr-1 h-3.5 w-3.5" />
                     Tải lên
                   </Button>
                 </div>
                 <CardDescription>Tải lên CV, thư giới thiệu, hoặc các tài liệu khác.</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-3">
                   {candidateData.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg group">
                        <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">Đã tải lên: {doc.uploadedDate}</p>
                        </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
                           <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <Link href={doc.url} target="_blank"> <Download className="h-4 w-4" /></Link>
                           </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                             <Trash2 className="h-4 w-4" />
                           </Button>
                         </div>
                    </div>
                   ))}
                 </div>
               </CardContent>
             </Card>

             {/* Account Settings - Optional */}
              <Card>
                  <CardHeader>
                      <CardTitle>Cài đặt tài khoản</CardTitle>
                      <CardDescription>Quản lý thông tin đăng nhập và bảo mật.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div className="space-y-1">
                          <Label htmlFor="profile-email">Email</Label>
                          <Input id="profile-email" value={candidateData.email} disabled/>
                      </div>
                      <Button variant="outline">Đổi mật khẩu</Button>
                       <div className="flex items-center justify-between pt-4 border-t">
                         <div>
                           <p className="text-sm font-medium">Xóa tài khoản/hồ sơ ứng tuyển</p>
                           <p className="text-xs text-muted-foreground">Hành động này không thể hoàn tác.</p>
                         </div>
                         <Button variant="outline">Xóa hồ sơ ứng tuyển</Button>
                         <Button variant="destructive">Xóa tài khoản</Button>
                       </div>
                  </CardContent>
              </Card>

          </div>
        </div>
      </main>

       {/* Footer: Copied from candidate dashboard */}
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