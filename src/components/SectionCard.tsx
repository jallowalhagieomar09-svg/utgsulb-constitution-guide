interface SectionCardProps {
  title: string;
  provisions: string[];
  interpretation?: string;
  explanation?: string;
}

const SectionCard = ({ title, provisions }: SectionCardProps) => {
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
    </div>
  );
};

export default SectionCard;
