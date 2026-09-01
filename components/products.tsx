import { products, fmt } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function Products() {
  return (
    <>
      <section id="products" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Heading
              eyebrow="Two Launches"
              title="مرحلتان مختلفتان تمامًا داخل وادي يم"
              sub="مجموعة فلل محدودة على البحر مباشرة، ولونش سكني متنوع على المارينا وملعب الجولف. لكل مرحلة وحداتها وجدية حجزها."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <article className="slab h-full overflow-hidden shadow-sm">
                  <div className="frame m-0 h-52 w-full border-s-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-52 w-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow">{p.eyebrow}</p>
                    <h3 className="num mt-3 text-xl tracking-[0.14em] text-ink">
                      {p.nameEn}
                    </h3>
                    <p className="mt-1 text-lg text-ink/80">{p.name}</p>
                    <div className="ribbon-rule my-5 w-28" />
                    <p className="text-[15px] leading-8 text-ink/70">
                      {p.intro}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-[15px] text-ink/75"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-sand-2 pt-5">
                      <div>
                        <p className="text-xs text-ink/55">جدية الحجز</p>
                        <p className="num mt-1 text-lg text-ink">
                          {fmt(p.eoi)}{" "}
                          <span className="text-sm text-ink/60">EGP</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-ink/55">التقسيط</p>
                        <p className="num mt-1 text-lg text-ink">
                          {p.years}{" "}
                          <span className="text-sm text-ink/60">سنوات</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-ink/55">محدودية الطرح</p>
                        <p className="mt-1 text-[15px] text-ink">
                          {p.scarcity}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#units"
                      className="mt-7 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
                    >
                      شاهد أسعار {p.name}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
