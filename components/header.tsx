"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LoginModal } from "@/components/login-modal"

interface NavItem {
  title: string
  href: string
  isActive: boolean
  children?: { title: string; href: string }[]
}

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems: NavItem[] = [
    {
      title: "Trang chủ",
      href: "/",
      isActive: pathname === "/",
    },
    {
      title: "Về chúng tôi",
      href: "/about",
      isActive: pathname === "/about",
      children: [
        { title: "Giới thiệu", href: "/about" },
        { title: "Lịch sử phát triển", href: "/about/history" },
        { title: "Đội ngũ lãnh đạo", href: "/about/leadership" },
      ],
    },
    {
      title: "Cơ hội nghề nghiệp",
      href: "/careers",
      isActive: pathname === "/careers" || pathname.startsWith("/careers/"),
      children: [
        { title: "Vị trí tuyển dụng", href: "/careers" },
        { title: "Quy trình tuyển dụng", href: "/careers/process" }
      ],
    },
    {
      title: "Liên hệ",
      href: "/contact",
      isActive: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/images/logo_vn.png" 
              alt="Đức Khải Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <React.Fragment key={item.href}>
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                        item.isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent",
                      )}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} className="w-full cursor-pointer">
                          {child.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    item.isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent",
                  )}
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <div className="hidden md:flex items-center gap-2">
            <LoginModal />
            <Link href="/auth/register">
              <Button size="sm">Đăng ký</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                      <Image 
                        src="/images/logo_vn.png" 
                        alt="Đức Khải Logo"
                        width={100}
                        height={32}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.href} className="flex flex-col">
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          item.isActive
                            ? "text-primary bg-primary/5"
                            : "text-foreground/70 hover:text-foreground hover:bg-accent",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="px-4 py-2 text-sm transition-colors rounded-md text-foreground/70 hover:text-foreground hover:bg-accent"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <LoginModal />
                  <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Đăng ký</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
