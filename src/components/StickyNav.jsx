import { useEffect, useState } from "react";

export default function StickyNav({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.35, 0.6]
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky-nav" aria-label="Page sections">
      <ul className="sticky-nav-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === activeId ? "active" : ""}
              aria-current={item.id === activeId ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
