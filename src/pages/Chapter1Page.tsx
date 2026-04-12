import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter1Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 1"
        title="Preliminary"
        description="This chapter lays the groundwork — how to cite the constitution, what key terms mean, the Union's identity, legal status, and the supremacy of this document."
      />

      <SectionCard
        title="Section 1: Citation"
        provisions={[
          '(1) This Constitution shall be cited as "The University of The Gambia Students\' Union Constitution 2021."'
        ]}
        interpretation="This is the official name of the document. Whenever anyone refers to the UTGSU Constitution, this is the document they mean. It was adopted in 2021 and any amendments are incorporated into it. If you need to reference this constitution in any formal document, petition, or legal proceeding, use this exact citation."
      />

      <SectionCard
        title="Section 2: Interpretation"
        provisions={[
          "(a) Academic Year means the two semesters in accordance with the University of the Gambia Calendar.",
          "(b) Working Day means public working days (not weekends or public holidays).",
          "(c) Union means University of The Gambia Students' Union.",
          "(d) Constitution means the Constitution of the University of The Gambia Students' Union 2021.",
          "(e) Member means a student enrolled in the University of The Gambia.",
          "(f) Dues mean a prescribed monetary sum to be paid by each member to the Union.",
          "(g) Upper Class means students who are in 3rd year and above of their program.",
          "(h) Electoral Commission means the body responsible for conducting students' elections.",
          "(i) Sub-association means all faculty-based associations and any other association registered under the Union.",
          "(j) General Students' Body means a unit of enrolled students of the University of The Gambia.",
          "(k) Executive Council means the members of the Executive of the UTGSU.",
          "(l) Students' Legislative Body means the legislative arm of the Union.",
          "(m) Bill means a proposed draft to amend any provision of this Constitution.",
          "(n) Students' Judicial Tribunal means the judicial arm of the Union.",
          "(o) Brief means a written argument prepared by a party for proceedings before the Judicial Tribunal."
        ]}
        interpretation="This section is like a dictionary for the constitution. Whenever you see these terms used anywhere in the document, they carry these exact meanings. For example, 'Upper Class' doesn't mean social status — it specifically means 3rd year students and above. 'Working Day' excludes weekends and holidays, which matters when calculating deadlines. Understanding these definitions is crucial for correctly applying any provision of the constitution."
      />

      <SectionCard
        title="Section 3: Name and Address"
        provisions={[
          '(1) The name of the Union shall be "The University of The Gambia Students\' Union" abbreviated as "UTGSU" or "Union".',
          "(2) The Union shall establish a secretariat housed within the premises of The University of The Gambia.",
          "(3) The Secretariat shall serve as the headquarters of the Union."
        ]}
        interpretation="This establishes the official identity of the Union. The abbreviation 'UTGSU' is the formal short form. Importantly, the Union must have a physical secretariat within the university premises — this ensures students can always access their Union representatives. The secretariat is the official headquarters where records are kept and official business is conducted."
      />

      <SectionCard
        title="Section 4: Legal Recognition"
        provisions={[
          "(1) The UTGSU constitution is in line with section 42(2) of the Tertiary and Higher Education Act, and shall be presented to Congress for approval.",
          "(2) The existence and continuity of the Union is hereby recognized by this Constitution as by law established which shall have rights, interests, duties and aspirations, which shall not be inconsistent with the Laws of The Gambia."
        ]}
        interpretation="This is vital — it means the Union is not just a student club but a legally recognized entity under Gambian law. The Tertiary and Higher Education Act gives students the right to form unions, and this constitution exercises that right. However, the Union cannot operate in ways that contradict the national laws of The Gambia. Congress (the general assembly of all students) must approve the constitution, giving it democratic legitimacy."
      />

      <SectionCard
        title="Section 5: Seal and Motto"
        provisions={[
          "(1) The Seal features: (a) Wall – representing Infrastructural Development, (b) Assemblage of Students – Humanity, (c) A Hand Shake – Peace and Solidarity.",
          "(2) The motto of The Union shall be 'Dedication, Service and Solidarity.'"
        ]}
        interpretation="The Union's seal is rich with symbolism. The wall represents the drive for infrastructural development at the university. The assemblage of students represents humanity and collective strength. The handshake symbolizes peace and solidarity among students. The motto 'Dedication, Service and Solidarity' captures the three core values every Union member and leader must embody — dedication to academic and union duties, service to fellow students, and solidarity in standing together."
      />

      <SectionCard
        title="Section 6: Supremacy"
        provisions={[
          "(1) This Constitution shall be the supreme law of the UTGSU regarding all student matters and any other law found inconsistent with any provision of this Constitution shall be null and void.",
          "(2) Notwithstanding Subsection (1), the application of this Constitution shall be limited to matters regarding the Union and matters that affect or are likely to affect students' interest and wellbeing."
        ]}
        interpretation="This is perhaps the most powerful provision in the entire constitution. It establishes constitutional supremacy — meaning no rule, policy, or decision by any Union organ (Executive, Legislative Body, or Judicial Tribunal) can override this constitution. Any action inconsistent with the constitution is automatically null and void. However, this supremacy applies only to student union matters, not to university academic policies or national laws. The constitution knows its boundaries."
      />
    </div>
  );
};

export default Chapter1Page;
