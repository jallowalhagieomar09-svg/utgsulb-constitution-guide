import ChapterHeader from "@/components/ChapterHeader";

const PreamblePage = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Preamble"
        title="The Foundation of the Constitution"
        description="The preamble sets out the guiding philosophy, aspirations, and authority behind the UTGSU Constitution 2021."
      />

      <div className="section-card mb-6">
        <h3 className="section-title">The Preamble Text</h3>
        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 leading-relaxed text-sm space-y-4">
          <p>
            We the Students of the University of The Gambia acting in accordance with Section 42 of the Tertiary and Higher Education Act 2016 and in the spirit of unionism hereby establish the University of the Gambia Students' Union (UTGSU) which shall be governed within the limits and spirit of the provisions of this Constitution.
          </p>
          <p>
            We seek to further academic excellence, support good initiatives and promote values of an open society, national service and respect for rule of law. We endeavor to prevent discrimination on any basis and enable fruitful collaboration within and outside the university and to prepare ourselves for a successful and inspiring future.
          </p>
          <p>
            We recognize the Students' Union and its organs to be the only competent body to engage the University administration and any other institution, corporation or association within and outside The Gambia regarding any matter that affects or is likely to affect the interest and general wellbeing of the University of the Gambia Students.
          </p>
          <p>
            The University of The Gambia Students' Union has derived their legitimate power from the Students of the University of The Gambia and shall act faithfully to pursue the best interest of the students.
          </p>
        </blockquote>
      </div>

      <div className="interpretation-box">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">📖 Detailed Interpretation</p>
        <div className="text-sm text-foreground/80 leading-relaxed space-y-3">
          <p>
            <strong>Legal Basis:</strong> The preamble grounds the constitution in the Tertiary and Higher Education Act 2016 (Section 42), giving it formal legal standing. This means the Union isn't just an informal club — it's a legally recognized student body under Gambian law.
          </p>
          <p>
            <strong>Core Values:</strong> The constitution explicitly commits to academic excellence, openness, non-discrimination, national service, and rule of law. These are not mere aspirations — they are binding principles that should guide every decision of the Union.
          </p>
          <p>
            <strong>Exclusive Mandate:</strong> The Union is recognized as the ONLY body authorized to represent students before the University administration or any external entity. No other student group can claim to speak on behalf of the entire student body.
          </p>
          <p>
            <strong>Source of Power:</strong> Sovereignty rests with the students themselves. The Union derives its power FROM the students and must act in their best interest. This is a critical democratic principle — leaders are servants of the student body, not rulers over it.
          </p>
          <p>
            <strong>Protective Duty:</strong> The Union has a proactive obligation to identify and address situations that threaten student welfare — it must not wait until harm occurs but should act preventatively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreamblePage;
