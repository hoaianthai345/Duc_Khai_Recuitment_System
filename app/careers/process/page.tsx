import { Header } from "@/components/header";
import Image from "next/image"
export default function RecruitmentProcessPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="flex-1">      
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Quy Trình Tuyển Dụng
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tìm hiểu về các bước trong quy trình tuyển dụng của chúng tôi.
                </p>
                <Image
                src="/images/BPMN moi tong.png"
                alt="Quy trình tuyển dụng"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
              </div>

              <div className="space-y-10">
                {/* Bước 1 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Bước 1: Tiếp nhận và sàng lọc hồ sơ (Sơ vấn)
                  </h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Sau khi tiếp nhận hồ sơ, Phòng Nhân sự sẽ cho hệ thống tự động gán nhãn "không đạt" đối với
                      những hồ sơ không đạt yêu cầu tối thiểu chung hoặc yêu cầu tối thiểu đối với vị trí tuyển dụng.
                    </p>
                    <p>
                      Tổ trưởng và các Thành viên thuộc mảng chuyên trách sẽ tiến hành nhận diện ứng viên về: mục
                      tiêu, định hướng nghề nghiệp, tính cách dựa trên mẫu phiếu "Thông tin ứng viên tuyển dụng"
                      (theo mẫu của Công ty), để từ đó sàng lọc, gán nhãn hồ sơ "đạt" hoặc "không đạt" dựa trên
                      các tiêu chuẩn tuyển dụng.
                    </p>
                    <p>
                      Phòng Nhân sự tiến hành lên lịch phỏng vấn và gửi thư mời ứng viên đến phỏng vấn theo mẫu
                      "Thư mời phỏng vấn (lần 1)" đã soạn sẵn trên hệ thống.
                    </p>
                  </div>
                </div>

                {/* Bước 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Bước 2: Phỏng vấn vòng 1 (Đánh giá ứng viên về chuyên môn)
                  </h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Căn cứ vào kế hoạch phỏng vấn, Tổ trưởng, các Thành viên phụ trách mảng và/hoặc sự tham dự
                      của các Thành viên khác theo thẩm quyền của Hội đồng tuyển dụng, trực tiếp phỏng vấn, cụ thể:
                    </p>
                    <ul className="list-disc space-y-1 pl-6">
                      <li>Trao đổi về nghiệp vụ chuyên môn, kinh nghiệm, năng lực…</li>
                      <li>
                        Trao đổi và xác định với ứng viên về vị trí công tác: vị trí tuyển dụng, trách nhiệm,
                        quyền hạn…
                      </li>
                    </ul>
                    <p>Hội đồng tuyển dụng tiến hành đánh giá ý kiến vào phiếu "Kết quả phỏng vấn".</p>
                    <h3 className="text-lg font-medium pt-2">Phỏng vấn không đạt (vòng 1)</h3>
                    <p>
                      Phỏng vấn không đạt, phòng Nhân sự gửi "Thư phúc đáp" đến mail ứng viên theo mẫu soạn sẵn
                      trên hệ thống ngay sau khi có kết quả phỏng vấn.
                    </p>
                  </div>
                </div>

                {/* Bước 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Bước 3: Tổng hợp danh sách ứng viên cần phỏng vấn vòng 2
                  </h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Căn cứ vào hồ sơ, kết quả phỏng vấn vòng 1, Phòng nhân sự lấy ý kiến các thành viên cần
                      tham gia phỏng vấn vòng 2 để lên lịch vào hệ thống và gửi thư mời phỏng vấn theo mẫu "Thư
                      mời phỏng vấn (lần 2)" có sẵn trên hệ thống. Với các ứng viên không cần phỏng vấn vòng 2
                      sẽ tiến hành bước 5.
                    </p>
                  </div>
                </div>

                {/* Bước 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Bước 4: Phỏng vấn vòng 2 (Đánh giá ứng viên chuyên môn (lần 2) và sự phù hợp, thích nghi của
                    ứng viên với vị trí đảm nhận)
                  </h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Chủ tịch Hội đồng, Phó Chủ tịch và các Thành viên chuyên môn cấp cao tương ứng với lĩnh vực
                      tuyển dụng xét tuyển chọn → quyết định tuyển dụng đối với các nhân sự.
                    </p>
                    <p>
                      Các ứng viên cần phỏng vấn thêm ở vòng 2 hoặc các vị trí quản lý thuộc mảng chuyên trách.
                    </p>
                    <p>
                      Các vị trí tuyển dụng là: ứng viên cao cấp hoặc những ứng viên thuộc thẩm quyền của Chủ tịch
                      Hội đồng tuyển dụng.
                    </p>
                    <p>Họp Hội đồng tuyển dụng tiến hành đánh giá ý kiến vào phiếu "Kết quả phỏng vấn".</p>
                    <h3 className="text-lg font-medium pt-2">Phỏng vấn không đạt (vòng 2)</h3>
                    <p>
                      Phỏng vấn không đạt, phòng Nhân sự gửi "Thư phúc đáp" đến mail ứng viên theo mẫu soạn sẵn
                      trên hệ thống ngay sau khi có kết quả phỏng vấn.
                    </p>
                  </div>
                </div>

                {/* Bước 5 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Bước 5: Quyết định tuyển dụng</h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>Họp Hội đồng tuyển dụng tổng kết và lập quyết định tuyển dụng.</p>
                  </div>
                </div>

                {/* Bước 6 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Bước 6: Thông báo kết quả tuyển dụng và mời nhận việc
                  </h2>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Sau khi đã có quyết định phê duyệt của Hội đồng tuyển dụng, Phòng Nhân sự gửi "Thư mời nhận
                      việc" từ hệ thống, mời ứng viên đạt tham gia nhận việc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 