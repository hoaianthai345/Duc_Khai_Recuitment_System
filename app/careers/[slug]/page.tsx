import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  Share2,
  BookmarkPlus,
  ChevronLeft,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Header } from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  // Giả lập dữ liệu công việc dựa trên slug
  const jobData = {
    title: params.slug === "software-engineer" ? "Kỹ sư phần mềm" : "Vị trí tuyển dụng",
    department: params.slug === "software-engineer" ? "Phòng Công nghệ" : "Phòng ban",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    experience: "2-3 năm",
    salary: "15-25 triệu VNĐ",
    deadline: "30/06/2024",
    positions: 2,
    postedDate: "01/05/2024",
    shortDescription: "Phát triển và bảo trì các ứng dụng phần mềm của công ty, làm việc với các công nghệ hiện đại.",
    description: [
      "Phát triển và bảo trì các ứng dụng phần mềm của công ty",
      "Thiết kế và triển khai các tính năng mới",
      "Tối ưu hóa hiệu suất ứng dụng",
      "Viết mã sạch, dễ bảo trì và có khả năng mở rộng",
      "Tham gia vào quá trình review code",
      "Làm việc trong môi trường Agile/Scrum",
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Công nghệ thông tin hoặc tương đương",
      "Có ít nhất 2 năm kinh nghiệm phát triển phần mềm",
      "Thành thạo JavaScript, TypeScript, React và Node.js",
      "Hiểu biết về cơ sở dữ liệu SQL và NoSQL",
      "Có kinh nghiệm làm việc với Git và CI/CD",
      "Kỹ năng giao tiếp và làm việc nhóm tốt",
      "Tiếng Anh đọc hiểu tài liệu chuyên ngành",
    ],
    benefits: [
      "Mức lương cạnh tranh, thưởng theo hiệu suất công việc",
      "Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo quy định",
      "Gói bảo hiểm sức khỏe cao cấp",
      "Môi trường làm việc chuyên nghiệp, năng động",
      "Cơ hội đào tạo và phát triển kỹ năng",
      "Các hoạt động team building, du lịch hàng năm",
      "Lịch làm việc linh hoạt",
    ],
    hiringProcess: [
      "Sàng lọc hồ sơ",
      "Phỏng vấn sơ bộ qua điện thoại",
      "Bài kiểm tra kỹ thuật",
      "Phỏng vấn chuyên môn",
      "Phỏng vấn với quản lý",
      "Đề xuất công việc",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "SQL", "NoSQL", "Git", "CI/CD"],
  }

  // Các công việc liên quan
  const relatedJobs = [
    {
      id: 1,
      title: "Kỹ sư Frontend",
      department: "Phòng Công nghệ",
      location: "TP. Hồ Chí Minh",
      type: "Toàn thời gian",
      postedDate: "05/05/2024",
      slug: "frontend-engineer",
    },
    {
      id: 2,
      title: "Kỹ sư Backend",
      department: "Phòng Công nghệ",
      location: "TP. Hồ Chí Minh",
      type: "Toàn thời gian",
      postedDate: "03/05/2024",
      slug: "backend-engineer",
    },
    {
      id: 3,
      title: "Kỹ sư QA",
      department: "Phòng Công nghệ",
      location: "TP. Hồ Chí Minh",
      type: "Toàn thời gian",
      postedDate: "02/05/2024",
      slug: "qa-engineer",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link href="/careers" className="flex items-center text-muted-foreground hover:text-foreground">
                      <ChevronLeft className="h-4 w-4" />
                      <span>Quay lại danh sách</span>
                    </Link>
                  </Button>
                </div>
                <h1 className="text-3xl font-bold">{jobData.title}</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm">{jobData.department}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{jobData.type}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{jobData.experience}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/auth/register">Ứng tuyển ngay</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Lưu công việc
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Chia sẻ</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Vị trí tuyển dụng</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{jobData.shortDescription}</p>
                <ul className="space-y-2">
                  {jobData.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Yêu cầu ứng viên</h2>
                <ul className="space-y-2">
                  {jobData.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Quyền lợi</h2>
                <ul className="space-y-2">
                  {jobData.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Quy trình tuyển dụng</h2>
                <ol className="space-y-4">
                  {jobData.hiringProcess.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p>{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Kỹ năng</h2>
                <div className="flex flex-wrap gap-2">
                  {jobData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/auth/register">
                    Ứng tuyển ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border">
                <h3 className="text-lg font-bold mb-4">Thông tin công việc</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ngày đăng</span>
                    <span className="font-medium">{jobData.postedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hạn nộp hồ sơ</span>
                    <span className="font-medium">{jobData.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vị trí</span>
                    <span className="font-medium">{jobData.positions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mức lương</span>
                    <span className="font-medium">{jobData.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loại hình</span>
                    <span className="font-medium">{jobData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Địa điểm</span>
                    <span className="font-medium">{jobData.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border">
                <h3 className="text-lg font-bold mb-4">Về công ty</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Image 
                      src="/images/logo_vn.png" 
                      alt="Đức Khải Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Công ty Cổ phần Đức Khải</h4>
                    <p className="text-sm text-muted-foreground">Bất động sản và phát triển hạ tầng</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Công ty Cổ phần Đức Khải là đơn vị tiên phong trong lĩnh vực bất động sản và phát triển hạ tầng tại
                  Việt Nam, với tầm nhìn và sứ mệnh rõ ràng.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/about">Tìm hiểu thêm về công ty</Link>
                </Button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border">
                <h3 className="text-lg font-bold mb-4">Vị trí tương tự</h3>
                <div className="space-y-4">
                  {relatedJobs.map((job) => (
                    <div key={job.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-bold hover:text-primary">
                        <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Image 
                            src="/images/logo_vn.png" 
                            alt="Đức Khải Logo"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          <span className="text-xs">{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span className="text-xs">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="text-xs">{job.postedDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground py-12">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Bạn quan tâm đến vị trí này?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Đừng bỏ lỡ cơ hội tham gia đội ngũ Đức Khải. Hãy ứng tuyển ngay hôm nay để bắt đầu hành trình sự nghiệp
              cùng chúng tôi.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/register">Ứng tuyển ngay</Link>
            </Button>
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
