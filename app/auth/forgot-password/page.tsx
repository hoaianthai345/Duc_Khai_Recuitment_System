"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-xl font-bold">Đức Khải</span>
        </Link>
        <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Quên mật khẩu</h1>
            <p className="text-sm text-muted-foreground">Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <Button className="w-full" type="submit">
              Gửi hướng dẫn đặt lại
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Nhớ mật khẩu?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Quay lại đăng nhập
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
