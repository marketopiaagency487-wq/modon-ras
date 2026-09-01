import { site, fmt, minPrice } from "@/lib/site";
import { Ribbon } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";
import LeadForm from "./lead-form";

const stats = [
  { value: "5%", label: "مقدم التعاقد" },
  { value: "8", label: "سنوات تقسيط" },
  { value: "71", label: "فيلا في يم فيوز" },
  { value: "21", label: "تاون هاوس ووتر فرونت" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="مدن رأس الحكمة على البحر المتوسط"
          className="kenburns h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28">
        <div className="inline-flex items-center gap-3 rounded-full border border-brass-2/40 bg-ink/60 px-5 py-2 text-sm text-paper/85 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brass-2" />
          مطروح الآن: يم فيوز 71 فيلا · مارينا ووتر فرونت شقق ودوبلكس وتاون هاوس
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.1fr_420px]">
          <div>
            <p className="eyebrow">Ras El Hekma · Wadi Yemm</p>
            <h1 className="mt-4 text-4xl leading-[1.25] text-paper md:text-6xl">
              مدن رأس الحكمة
            </h1>
            <Ribbon light />
            <p className="mt-4 max-w-xl text-lg leading-9 text-paper/80">
              مدينة ساحلية متكاملة من مدن القابضة الإماراتية على 44 كم من شواطئ
              البحر المتوسط. مرحلتان مطروحتان الآن داخل وادي يم بأسعار تبدأ من{" "}
              <span className="num text-brass-2">{fmt(minPrice)}</span> جنيه.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#units"
                className="rounded-full bg-brass-2 px-7 py-3 font-semibold text-ink transition hover:bg-brass-2/85"
              >
                تصفّح الوحدات والأسعار
              </a>
              <CtaWhatsapp
                message="مهتم بمشروع مدن رأس الحكمة — وادي يم. برجاء إرسال جدول الأسعار."
                className="rounded-full border border-paper/30 px-7 py-3 font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2"
              >
                واتساب مباشر
              </CtaWhatsapp>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink/85 px-5 py-5">
                  <p className="num text-2xl text-brass-2">{s.value}</p>
                  <p className="mt-2 text-[13px] leading-6 text-paper/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper/45">
              {site.agency} — وسيط عقاري معتمد. أسعار استرشادية قابلة للتغيير.
            </p>
          </div>

          <div className="rounded-2xl bg-paper p-6 shadow-2xl">
            <p className="eyebrow">Register Interest</p>
            <h2 className="mt-2 text-xl text-ink">استلم جدول الأسعار</h2>
            <p className="mt-2 text-sm leading-7 text-ink/60">
              الأسعار الكاملة والماستر بلان والمتاح الحالي في المرحلتين.
            </p>
            <div className="mt-5">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
