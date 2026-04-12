interface SectionCardProps {
  title: string;
  provisions: string[];
  interpretation: string;
}

const SectionCard = ({ title, provisions, interpretation }: SectionCardProps) => {
  return (
    <div className="section-card mb-6 animate-fade-in">
      <h3 className="section-title">{title}</h3>
      <div className="space-y-2 mb-4">
        {provisions.map((p, i) => (
          <p key={i} className="text-foreground/90 text-sm leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      <div className="interpretation-box">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
          📖 Interpretation & Explanation
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed">{interpretation}</p>
      </div>
    </div>
  );
};

export default SectionCard;
