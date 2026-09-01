import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

const pillars = [
  {
    title: "مدن القابضة الإماراتية",
    body:
      "مطور إماراتي مدرج، بمحفظة مشروعات عمرانية وسياحية كبرى داخل الإمارات وخارجها.",
  },
  {
    title: "شراكة استثمارية بين الدولتين",
    body:
      "المشروع جزء من صفقة رأس الحكمة، أكبر استثمار مباشر في تاريخ السوق العقاري المصري.",
  },
  {
    title: "مخطط عام من 17 منطقة",
    body:
      "وادي يم أولى المناطق المطروحة داخل مخطط يمتد على واجهة بحرية طولها 44 كم.",
  },
  {
    title: "تسليم معلن 2029",
    body: "جدول تنفيذ محدد للمراحل المطروحة حاليًا داخل وادي يم.",
  },
];

export default function Developer() {
  return (
    <section id="developer" className="bg-ink-2 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="frame h-full min-h-[320px]">
            <img
              src="/images/yemm-views.svg"
              alt="مشروعات مدن القابضة"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={70}>
          <Heading
            light
            eyebrow="The Developer"
            title="من يقف خلف المشروع"
            sub="حجم المطور والشراكة الحكومية هما ما يميز رأس الحكمة عن باقي طروحات الساحل."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} style={{ transitionDelay: `${i * 40}ms` }}>
                <h3 className="text-base text-paper">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-8 text-paper/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <CtaWhatsapp
            message="برجاء إرسال بروفايل شركة مدن القابضة والماستر بلان الرسمي لمشروع رأس الحكمة."
            className="mt-8 inline-block rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2"
          >
            اطلب الماستر بلان الرسمي
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
