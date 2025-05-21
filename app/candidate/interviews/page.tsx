import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Building2, Bell, User, Briefcase, FileText, Calendar, LogOut, Clock, MapPin, Video } from "lucide-react"

export default function CandidateInterviewsPage() {
  // Hardcoded data for prototype
  const candidateData = {
    name: "Nguyễn Duy Tân",
    email: "tannguyen.31231023384@st.ueh.edu.vn",
    avatar: "/images/candidate-avatar.png",
    avatarFallback: "ND",
    profileCompletion: 75,
  }

  // Hardcoded interview data for prototype
  const interviews = [
    {
      id: 1,
      jobTitle: "Chuyên viên Marketing",
      round: "Vòng 1",
      dateTime: "15/05/2024 - 10:00 AM",
      location: "Phòng họp A - Tầng 3",
      type: "Trực tiếp", // 'Trực tuyến' or 'Trực tiếp'
      status: "Sắp tới", // 'Sắp tới', 'Đã hoàn thành', 'Đã hủy'
      interviewer: "Nguyễn Văn X", // Example
    },
    {
      id: 2,
      jobTitle: "Kỹ sư phần mềm",
      round: "Vòng 2",
      dateTime: "16/05/2024 - 14:00 PM",
      location: "Google Meet (Link trong email)",
      type: "Trực tuyến",
      status: "Sắp tới",
      interviewer: "Lê Văn Z",
    },
     {
       id: 3,
       jobTitle: "Kỹ sư phần mềm",
       round: "Vòng 1",
       dateTime: "10/05/2024 - 09:00 AM",
       location: "Phòng họp B - Tầng 3",
       type: "Trực tiếp",
       status: "Đã hoàn thành",
       interviewer: "Trần Thị B",
     },
      {
       id: 4,
       jobTitle: "Nhân viên kinh doanh",
       round: "Vòng 1",
       dateTime: "08/05/2024 - 11:00 AM",
       location: "Văn phòng công ty",
       type: "Trực tiếp",
       status: "Đã hủy", // Example cancelled interview
       interviewer: "Phạm Văn C",
     },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header: Copied, includes Avatar Dropdown */}
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
            <Link href="/candidate/profile" className="text-sm font-medium">
              Hồ sơ cá nhân
            </Link>
            <Link href="/candidate/applications" className="text-sm font-medium">
              Vị trí tuyển dụng
            </Link>
            {/* Highlight this link */}
            <Link href="/candidate/interviews" className="text-sm font-medium text-primary">
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
               <DropdownMenuContent align="end" className="w-64">
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
          {/* Sidebar: Copied, highlight "Lịch phỏng vấn" */}
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
                 <Button variant="outline" className="w-full mt-4" asChild>
                   <Link href="/candidate/profile">
                     <User className="mr-2 h-4 w-4" />
                     Cập nhật hồ sơ
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
                    <Link href="/candidate/profile" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <User className="h-4 w-4" />
                      <span>Hồ sơ cá nhân</span>
                    </Link>
                    <Link href="/candidate/applications" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
                      <FileText className="h-4 w-4" />
                      <span>Vị trí tuyển dụng</span>
                    </Link>
                    {/* Highlight this link */}
                    <Link href="/candidate/interviews" className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary">
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

          {/* Interview List Content */}
          <div className="md:w-3/4 space-y-6">
             <Card>
                <CardHeader>
                 <CardTitle>Lịch phỏng vấn của tôi</CardTitle>
                 <CardDescription>Danh sách các buổi phỏng vấn đã được lên lịch.</CardDescription>
                </CardHeader>
                <CardContent>
                    {interviews.length === 0 ? (
                        <p className="text-center text-muted-foreground py-6">Bạn chưa có lịch phỏng vấn nào.</p>
                    ) : (
                        <div className="space-y-4">
                            {interviews.map((interview) => (
                                <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                    <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{`Phỏng vấn ${interview.round}: ${interview.jobTitle}`}</h3>
                                        <Badge variant={ 
                                            interview.status === 'Sắp tới' ? 'default' :
                                            interview.status === 'Đã hoàn thành' ? 'secondary' :
                                            'outline' // For 'Đã hủy' or others
                                            }
                                            className={ 
                                            interview.status === 'Sắp tới' ? 'bg-blue-500' :
                                            interview.status === 'Đã hoàn thành' ? 'bg-green-500' :
                                            interview.status === 'Đã hủy' ? 'bg-red-500 text-white' : ''
                                            }
                                        >
                                            {interview.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>{interview.dateTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {interview.type === 'Trực tuyến' ? <Video className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                                            <span>{interview.location}</span>
                                        </div>
                                    </div>
                                     <p className="text-xs text-muted-foreground mt-1">Người phỏng vấn: {interview.interviewer}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                     <Button variant="ghost" size="sm" asChild>
                                        {/* Link to a potential detail page, or disable if no action */}
                                        <div>Chi tiết</div>
                                     </Button>
                                     {interview.status === 'Sắp tới' && interview.type === 'Trực tuyến' && (
                                        <Button size="sm">
                                            Tham gia ngay
                                        </Button>
                                     )}
                                      {interview.status === 'Sắp tới' && interview.type === 'Trực tiếp' && (
                                        <Button variant="outline" size="sm" >
                                           Xem chỉ đường
                                        </Button>
                                     )}
                                </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
             </Card>
          </div>
        </div>
      </main>

      {/* Footer: Copied */}
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