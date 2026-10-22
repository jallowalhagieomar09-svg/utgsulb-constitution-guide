interface ChapterHeaderProps {
  chapter: string;
  title: string;
  description: string;
}

const ChapterHeader = ({ chapter, title }: ChapterHeaderProps) => {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-1">{chapter}</p>
      <h2 className="chapter-header">{title}</h2>
      <div className="h-1 w-20 gold-gradient rounded-full mt-4" />
    </div>
  );
};

export default ChapterHeader;
