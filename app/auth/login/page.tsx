"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building2, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()

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
            <h1 className="text-2xl font-bold">Đăng nhập</h1>
            <p className="text-sm text-muted-foreground">Nhập thông tin đăng nhập của bạn để tiếp tục</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" defaultValue="ungvien@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mật khẩu</Label>
                <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <Input id="password" type="password" defaultValue="password123" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" defaultChecked />
              <Label htmlFor="remember" className="text-sm font-normal">
                Ghi nhớ đăng nhập
              </Label>
            </div>
            <Link href="/candidate/dashboard" passHref legacyBehavior>
              <Button className="w-full">
                Đăng nhập
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Chưa có tài khoản?{" "}
            <Link href="/auth/register" className="text-primary hover:underline">
              Đăng ký
            </Link>
          </div>
          <div className="mt-2 rounded-md bg-muted p-3 text-sm">
            <p className="font-medium">Thông tin đăng nhập demo:</p>
            <p className="mt-1">Email: ungvien@example.com</p>
            <p>Mật khẩu: password123</p>
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
