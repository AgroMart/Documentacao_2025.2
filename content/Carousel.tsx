"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = {
  title: string;
  description: string;
  img: string;   // ex.: "/img/csa.png"
  href?: string;
};

export default function Carousel({
  items = [],
  interval = 4000,
  bg = "rgba(0,0,0,.04)",   // fundo atrás da imagem
  maxHeight = 320,          // 🔹 altura máxima da imagem
}: {
  items?: Item[];
  interval?: number;
  bg?: string;
  maxHeight?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items, interval]);

  if (!items.length) return null;

  const item = items[i];

  const ImageBlock = (
    <div
      style={{
        width: "100%",
        background: bg,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: "hidden", // mantém cantos arredondados
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: `${maxHeight}px`, // 🔹 limita a altura
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
        }}
        loading="eager"
      />
    </div>
  );

  const SlideContent = (
    <>
      {ImageBlock}

      <div style={{ padding: "1rem 1.25rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
            {item.title}
          </h3>
          <div style={{ display: "flex", gap: 6 }}>
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`slide ${idx + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: idx === i ? "var(--fd-primary, #16a34a)" : "rgba(0,0,0,.25)",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        <p style={{ marginTop: 8, color: "var(--fd-muted, #6b7280)", lineHeight: 1.6 }}>
          {item.description}
        </p>
      </div>
    </>
  );

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720, // 🔹 deixa o carrossel mais estreito também
        margin: "1.5rem auto",
        borderRadius: 16,
        boxShadow: "0 6px 24px rgba(0,0,0,.08)",
        background: "var(--fd-card, #fff)",
      }}
    >
      {item.href ? (
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {SlideContent}
        </Link>
      ) : (
        SlideContent
      )}
    </div>
  );
}
