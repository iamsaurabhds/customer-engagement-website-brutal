import FeatureCard from "./components/FeatureCard";
import StickyNav from "./components/StickyNav";
import { customerEngagementData } from "./data/customerEngagementData";

const navItems = [
  { id: "hero", label: "Hero" },
  ...customerEngagementData.features.map((feature, index) => ({
    id: feature.id,
    label: `F${index + 1}`
  }))
];

export default function App() {
  return (
    <div className="app-shell">
      <StickyNav items={navItems} />

      <main>
        <header className="hero section-frame" id="hero">
          <p className="eyebrow">Strategic Platform Snapshot</p>
          <h1>{customerEngagementData.platformName}</h1>
          <p className="hero-lead">{customerEngagementData.headline}</p>
          <p>{customerEngagementData.description}</p>
          <div className="theme-row">
            {customerEngagementData.businessThemes.map((theme) => (
              <span key={theme} className="theme-chip">
                {theme}
              </span>
            ))}
          </div>
        </header>

        <section className="features-wrap" aria-labelledby="features-title">
          <h2 id="features-title" className="features-title section-frame">
            Capabilities
          </h2>
          {customerEngagementData.features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </section>

      </main>
    </div>
  );
}
