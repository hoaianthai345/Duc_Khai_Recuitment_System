"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building2, User, Lock, Mail, Eye, EyeOff } from "lucide-react"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Thêm thông tin đăng nhập mẫu
  const [candidateEmail, setCandidateEmail] = useState("ungvien@example.com")
  const [candidatePassword, setCandidatePassword] = useState("password123")
  const [employeeEmail, setEmployeeEmail] = useState("nhanvien@duckhaigroup.com")
  const [employeePassword, setEmployeePassword] = useState("password123")

  const handleLogin = (role: string, e: React.FormEvent) => {
    e.preventDefault()
    setIsOpen(false)

    // Redirect based on role
    if (role === "candidate") {
      router.push("/candidate/dashboard")
    } else {
      router.push("/employee/dashboard")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Đăng nhập
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl">Đăng nhập vào Đức Khải</DialogTitle>
          <DialogDescription>Chọn vai trò của bạn để tiếp tục</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="candidate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="candidate" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Ứng viên</span>
            </TabsTrigger>
            <TabsTrigger value="employee" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Nhân viên</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidate">
            <form onSubmit={(e) => handleLogin("candidate", e)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="candidate-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="candidate-email"
                    placeholder="name@example.com"
                    type="email"
                    className="pl-10"
                    required
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="candidate-password">Mật khẩu</Label>
                  <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="candidate-password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    required
                    value={candidatePassword}
                    onChange={(e) => setCandidatePassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="candidate-remember" />
                <Label htmlFor="candidate-remember" className="text-sm font-normal">
                  Ghi nhớ đăng nhập
                </Label>
              </div>
              <Button className="w-full" type="submit">
                Đăng nhập
              </Button>
              <div className="mt-4 text-center text-sm">
                Chưa có tài khoản?{" "}
                <Link href="/auth/register" className="text-primary hover:underline" onClick={() => setIsOpen(false)}>
                  Đăng ký
                </Link>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="employee">
            <form onSubmit={(e) => handleLogin("employee", e)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="employee-email">Email công ty</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="employee-email"
                    placeholder="name@duckhaigroup.com"
                    type="email"
                    className="pl-10"
                    required
                    value={employeeEmail}
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="employee-password">Mật khẩu</Label>
                  <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="employee-password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10"
                    required
                    value={employeePassword}
                    onChange={(e) => setEmployeePassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="employee-remember" />
                <Label htmlFor="employee-remember" className="text-sm font-normal">
                  Ghi nhớ đăng nhập
                </Label>
              </div>
              <Button className="w-full" type="submit">
                Đăng nhập
              </Button>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Liên hệ quản trị viên nếu bạn cần hỗ trợ truy cập.
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
