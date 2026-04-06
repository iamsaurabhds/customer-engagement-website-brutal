export default function FeatureCard({ feature, index }) {
  return (
    <article className="feature-card" id={feature.id} aria-labelledby={`${feature.id}-title`}>
      <p className="feature-number">Capability {index + 1}</p>
      <h3 id={`${feature.id}-title`}>{feature.title}</h3>
      <div className="feature-grid">
        <section>
          <h4>Business Benefits</h4>
          <ul>
            {feature.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>
        <section>
          <h4>Business Impact</h4>
          <ul>
            {feature.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
