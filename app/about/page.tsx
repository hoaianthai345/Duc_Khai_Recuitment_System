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

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Về Công ty Cổ phần Đức Khải
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Xây dựng, phát triển để chia sẻ và gắn bó
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/era-town-1.png"
                  alt="Trụ sở Đức Khải - Era Town"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Giới thiệu tổng quan</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hành trình phát triển và những dấu ấn nổi bật của Đức Khải
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Thông tin doanh nghiệp</h3>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-28">Tên đầy đủ:</span>
                      <span>Công ty Cổ phần Đức Khải (DUC KHAI CORPORATION)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-28">Thành lập:</span>
                      <span>Ngày 17/03/2005</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-28">Trụ sở:</span>
                      <span>Quận 7, TP. Hồ Chí Minh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-28">Người sáng lập:</span>
                      <span>Ông Phạm Văn Lai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-28">Lĩnh vực hoạt động:</span>
                      <span>Bất động sản và phát triển hạ tầng</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Thành tựu nổi bật</h3>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Huân chương Lao động hạng Ba</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Bằng khen của Thủ tướng Chính phủ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Bằng khen của UBND TP.HCM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Tầm nhìn</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Trở thành thương hiệu được xã hội công nhận, là đơn vị tiên phong trong lĩnh vực bất động sản và
                    phát triển hạ tầng tại Việt Nam, mang lại giá trị bền vững cho khách hàng, đối tác và cộng đồng.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Sứ mệnh</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Xây dựng, phát triển để chia sẻ và gắn bó" - Chúng tôi cam kết xây dựng những công trình chất
                    lượng, phát triển bền vững, chia sẻ giá trị với cộng đồng và gắn bó lâu dài với khách hàng, đối tác.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Giá trị cốt lõi</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cần cù</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sáng tạo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Đột phá</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Chuẩn mực</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Phát triển bền vững</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Direction and Social Responsibility */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Định hướng phát triển</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cam kết phát triển bền vững và trách nhiệm xã hội
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <Image
                  src=""
                  alt="Dự án Era Town của Đức Khải về đêm"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Phát triển bền vững</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Đức Khải luôn ưu tiên ứng dụng các giải pháp phát triển bền vững trong mọi dự án. Chúng tôi cam kết:
                  </p>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        Áp dụng công nghệ tiên tiến, thân thiện với môi trường trong quá trình thiết kế và xây dựng
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Tối ưu hóa sử dụng năng lượng và tài nguyên thiên nhiên</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Tạo ra không gian sống và làm việc hài hòa với thiên nhiên</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Trách nhiệm xã hội</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Chúng tôi tin rằng sự phát triển của doanh nghiệp phải gắn liền với sự phát triển của cộng đồng:
                  </p>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        Tham gia các hoạt động từ thiện, hỗ trợ người có hoàn cảnh khó khăn và các chương trình phát
                        triển cộng đồng
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Đầu tư vào giáo dục và phát triển nguồn nhân lực chất lượng cao</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Tạo ra môi trường làm việc an toàn, công bằng và phát triển cho nhân viên</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Culture */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Văn hóa doanh nghiệp</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Môi trường làm việc tại Đức Khải
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Môi trường chuyên nghiệp</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Đức Khải xây dựng môi trường làm việc chuyên nghiệp, đề cao tính nhân văn và hợp tác. Chúng tôi
                      tôn trọng sự đa dạng và khuyến khích sự sáng tạo của mỗi cá nhân.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Rocket className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Phát triển sự nghiệp</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Chúng tôi tạo điều kiện cho nhân viên phát triển sự nghiệp dài hạn thông qua các chương trình đào
                      tạo, cơ hội thăng tiến và chính sách đãi ngộ hấp dẫn.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Sáng tạo và học hỏi</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Đức Khải khuyến khích tinh thần sáng tạo, trách nhiệm và học hỏi không ngừng. Chúng tôi tin rằng
                      mỗi thách thức là cơ hội để phát triển và đổi mới.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 mx-auto max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/office-environment.png"
                  alt="Môi trường làm việc tại Đức Khải"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quy trình tuyển dụng minh bạch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Đức Khải tuyển người tài ra sao?
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Sàng lọc hồ sơ</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Đội ngũ tuyển dụng xem xét kỹ lưỡng hồ sơ ứng viên dựa trên yêu cầu của vị trí
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Phỏng vấn chuyên môn</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Đánh giá kiến thức, kỹ năng chuyên môn và kinh nghiệm của ứng viên
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Đánh giá tính phù hợp</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Xem xét sự phù hợp với văn hóa công ty và tiềm năng phát triển lâu dài
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Thông báo kết quả</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Phản hồi đến ứng viên nhanh chóng, rõ ràng và chuyên nghiệp
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                Quy trình tuyển dụng của Đức Khải được thiết kế để đảm bảo công bằng, minh bạch và hiệu quả. Chúng tôi
                ứng dụng công nghệ để cải thiện trải nghiệm và rút ngắn thời gian xử lý, đồng thời vẫn đảm bảo đánh giá
                toàn diện năng lực của ứng viên.
              </p>
              <Button asChild>
                <Link href="/careers">
                  Xem vị trí tuyển dụng
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cơ hội nghề nghiệp tại Đức Khải</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Khám phá hành trình sự nghiệp cùng chúng tôi
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Đa dạng vị trí</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Chúng tôi đang mở rộng nhiều vị trí ở các phòng ban: Kỹ thuật, Kinh doanh, Marketing, Tài chính,
                      Nhân sự và nhiều lĩnh vực khác.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Đội ngũ tài năng</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Đức Khải chào đón mọi ứng viên giàu khát vọng, chuyên môn và tinh thần trách nhiệm. Chúng tôi tìm
                      kiếm những người sẵn sàng đổi mới và phát triển.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Phát triển dài hạn</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Tham gia cùng chúng tôi để cùng nhau xây dựng những công trình ý nghĩa và phát triển sự nghiệp bền
                      vững trong một môi trường năng động và chuyên nghiệp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/careers">
                  Khám phá cơ hội nghề nghiệp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Thông tin liên hệ</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Kết nối với Đức Khải
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Trụ sở chính</h3>
                    <p className="text-gray-500 dark:text-gray-400">123 Đường ABC, Quận 7, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Hotline nhân sự</h3>
                    <p className="text-gray-500 dark:text-gray-400">(028) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email bộ phận tuyển dụng</h3>
                    <p className="text-gray-500 dark:text-gray-400">tuyendung@duckhaigroup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Website</h3>
                    <p className="text-gray-500 dark:text-gray-400">www.duckhaigroup.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Kết nối với chúng tôi</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/images/era-town-2.webp"
                    alt="Khu vực trụ sở Đức Khải"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
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
