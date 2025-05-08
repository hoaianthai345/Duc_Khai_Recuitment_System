"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Image 
            src="/images/logo_vn.png" 
            alt="Đức Khải Logo"
            width={100}
            height={32}
            className="object-contain"
          />
        </Link>
        <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Đăng ký</h1>
            <p className="text-sm text-muted-foreground">Tạo tài khoản mới để bắt đầu ứng tuyển</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Họ</Label>
                <Input id="first-name" placeholder="Nguyễn" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Tên</Label>
                <Input id="last-name" placeholder="Văn A" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal">
                Tôi đồng ý với{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Chính sách bảo mật
                </Link>
              </Label>
            </div>
            <Button className="w-full" type="submit">
              Đăng ký
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Đã có tài khoản?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Đăng nhập
            </Link>
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline" size="sm" onClick={handleGoBack} className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Quay lại trang trước</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
