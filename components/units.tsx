"use client";

import { useMemo, useState } from "react";
import { products, fmt } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import { track } from "@/lib/track";
import { waLink } from "@/lib/site";

type Card = {
  key: string;
  product: string;
  productEn: string;
  group: string;
  type: string;
  beds: string;
  price: number;
  eoi: number;
  years: number;
  image: string;
  note?: string;
};

const cards: Card[] = products.flatMap((p) =>
  p.groups.flatMap((g) =>
    g.units.map((u) => ({
      key: `${p.slug}-${g.title}-${u.beds}`,
      product: p.name,
      productEn: p.nameEn,
      group: g.title,
      type: u.type,
      beds: u.beds,
      price: u.price,
      eoi: p.eoi,
      years: p.years,
      image:
        g.title === "الفلل"
          ? "/images/community-aerial.webp"
          : g.title === "تاون هاوس ووتر فرونت"
          ? "/images/townhouse-living.webp"
          : g.title === "الدوبلكس"
          ? "/images/pool-view.webp"
          : "/images/arrival-lobby.webp",
      note: g.note,
    }))
  )
);

const tabs = [
  { id: "all", label: "كل الوحدات" },
  { id: "الفلل", label: "فلل" },
  { id: "الشقق", label: "شقق" },
  { id: "الدوبلكس", label: "دوبلكس" },
  { id: "تاون هاوس ووتر فرونت", label: "تاون هاوس" },
];

export default function Units() {
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const f = tab === "all" ? cards : cards.filter((c) => c.group === tab);
    return [...f].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [tab, sort]);

  return (
    <section id="units" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="وحدات وأسعار وادي يم"
            sub="أسعار بداية كل نوع على نظام 8 سنوات. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي من المطور."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  tab === t.id
                    ? "bg-brass-2 font-semibold text-ink"
                    : "border border-paper/25 text-paper/75 hover:border-brass-2 hover:text-brass-2"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))}
            className="text-sm text-paper/60 underline underline-offset-8 hover:text-brass-2"
          >
            {sort === "asc" ? "الأقل سعرًا أولًا" : "الأعلى سعرًا أولًا"}
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 50}>
              <article className="slab-dark flex h-full flex-col overflow-hidden">
                <div className="relative h-44 w-full">
                  <img
                    src={c.image}
                    alt={`${c.type} ${c.beds} — ${c.product}`}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">
                    {c.productEn}
                  </span>
                  {c.note && (
                    <span className="absolute start-3 top-3 rounded-full bg-brass-2 px-3 py-1 text-[11px] font-semibold text-ink">
                      {c.note}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-paper/50">{c.group}</p>
                  <h3 className="mt-1 text-lg text-paper">
                    {c.type} — {c.beds}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-ink/50 p-4 text-[13px]">
                    <div>
                      <p className="text-paper/50">المقدم</p>
                      <p className="num mt-1 text-paper">5%</p>
                    </div>
                    <div>
                      <p className="text-paper/50">التقسيط</p>
                      <p className="num mt-1 text-paper">{c.years} سنوات</p>
                    </div>
                    <div>
                      <p className="text-paper/50">جدية الحجز</p>
                      <p className="num mt-1 text-paper">{fmt(c.eoi)}</p>
                    </div>
                    <div>
                      <p className="text-paper/50">التسليم</p>
                      <p className="num mt-1 text-paper">2029</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs text-paper/55">تبدأ من</p>
                    <p className="num mt-1 text-2xl text-brass-2">
                      {fmt(c.price)}{" "}
                      <span className="text-sm text-paper/60">EGP</span>
                    </p>
                  </div>

                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={waLink(
                        `مهتم بـ ${c.type} ${c.beds} في ${c.product} — مدن رأس الحكمة. برجاء إرسال التفاصيل وخطة السداد.`
                      )}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track("whatsapp")}
                      className="flex-1 rounded-full bg-brass-2 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
                    >
                      التفاصيل والحجز
                    </a>
                    <a
                      href="#calc"
                      className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2"
                    >
                      احسب القسط
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs leading-6 text-paper/45">
          الأسعار المعروضة أسعار بداية للوحدة (Starting Price) وتختلف حسب
          المساحة والموقع والدور داخل المرحلة.
        </p>
      </div>
    </section>
  );
}
