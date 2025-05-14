import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  Trophy,
  Users,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Globe,
  ArrowRight,
  Clock,
  Briefcase,
} from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Giới thiệu dự án */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-700 dark:to-indigo-800">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Hệ Thống Tuyển Dụng Nhân Sự
            </h1>
            <p className="mx-auto max-w-[700px] text-sky-100 md:text-xl mt-4 dark:text-sky-200">
              Website phục vụ quy trình tuyển dụng cho Công ty Cổ phần Đức Khải.
            </p>
            <p className="mx-auto max-w-[700px] text-sky-200 md:text-lg mt-2 dark:text-sky-300">
              <p>Môn học: Business Analyst (BA)</p>
              <p>Giải viên hướng dẫn: Phạm Thị Thanh Tâm</p>
            </p>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Tổng quan
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Giới thiệu dự án</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Đây là website được phát triển trong khuôn khổ môn học Business Analyst, nhằm mục đích xây dựng một Hệ thống tuyển dụng nhân sự cho Công ty Cổ phần Đức Khải. Hệ thống giúp tối ưu hóa quy trình tìm kiếm, sàng lọc ứng viên và quản lý thông tin tuyển dụng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Introduction Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-700">
                  Đội ngũ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Về chúng tôi</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Gặp gỡ đội ngũ sinh viên thực hiện dự án.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5].map((member) => (
                <Card key={member} className="text-center">
                  <CardHeader>
                    <Avatar className="mx-auto h-24 w-24 mb-4">
                      <AvatarImage src={`/images/candidate-avatar.png`} alt={`Thành viên ${member}`} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <CardTitle>Tên Sinh Viên {member}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mã số sinh viên: [Nhập MSSV]
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Vai trò: [Vai trò trong dự án]
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information - Keep existing or modify if needed */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Liên hệ</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nếu có hứng thú hoặc bất kỳ câu hỏi nào về dự án, hãy liên hệ với chúng tôi.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button type="submit" className="w-full" asChild>
                <Link href="anthai.31231025020@st.ueh.edu.vn">Gửi Email</Link>
              </Button>
            </div>
          </div>
        </section>
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
