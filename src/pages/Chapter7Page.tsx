import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter7Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 7"
        title="Electoral Matters & Congress"
        description="This chapter governs elections, candidate qualifications, disqualifications, Congress (the general assembly), and extraordinary sessions."
      />

      <SectionCard
        title="Section 58: Elections"
        provisions={[
          "(1) Elections for the Executive Council shall be held once every academic year.",
          "(2) Elections shall be held during semester school days, not holidays.",
          "(3) Conducted by the Electoral Commission of the Union.",
          "(4) Conducted in accordance with the Electoral laws of the Union and The Gambia.",
          "(5) The election process commences 3 months before the incumbent's mandate expires.",
          "(6) Handing over and inauguration within 2 weeks after elections.",
          "(7) Elections shall not be held 2 weeks before the mandate expires."
        ]}
        interpretation="Elections are held annually, ensuring regular democratic renewal. The 3-month lead time gives the Electoral Commission adequate time to organize. The prohibition on holiday elections ensures maximum student participation. The 2-week inauguration deadline ensures swift power transitions with no governance vacuum. The rule against holding elections in the last 2 weeks of a mandate prevents the outgoing Executive from manipulating the timing."
      />

      <SectionCard
        title="Section 59: Election Procedure"
        provisions={[
          "(1) Elections conducted by secret ballot.",
          "(2) Each student has one vote per position.",
          "(3) Two (2) weeks of campaign period.",
          "(4) Candidates submit typed manifestos to the Electoral Commission.",
          "(5) Convention for candidates to present and defend manifestos.",
          "(6) Candidate representatives present during voting and counting.",
          "(7-8) Nomination forms require endorsement by at least 20 students from each School.",
          "(9) Unopposed candidates are automatically elected and refunded their deposit.",
          "(10) Candidates must deposit a prescribed amount before nomination.",
          "(11) Presidential candidate must receive the highest number of votes on first ballot.",
          "(12) If tied, a second ballot within 14 days between tied candidates.",
          "(13) New Executive sworn in by the Principal Arbitrator.",
          "(14) Outgoing Executive hands over all records and responsibilities."
        ]}
        interpretation="The electoral process is comprehensive and democratic. Secret ballot protects voter choice. The 2-week campaign period gives candidates fair exposure. The convention/debate allows students to evaluate candidates directly. The nomination deposit discourages frivolous candidacies. The requirement for endorsements from each School ensures candidates have cross-campus support. Having candidate representatives observe counting prevents fraud. The swearing-in by the Judicial Tribunal head adds judicial legitimacy to the transition."
      />

      <SectionCard
        title="Section 60: Qualifications for Election"
        provisions={[
          "(1) President, VP, Secretary General, and Finance Minister must be Gambian nationals.",
          "(2) These top positions require: (a) permanent residency in The Gambia, (b) CGPA of 3.0+, (c) evidence of good character, (d) leadership experience, (e) upper-class status (3rd year+).",
          "(3) Other positions open to all bona fide students with CGPA of at least 2.7.",
          "(4) Must have at least 2 semesters left for study.",
          "(5) Must have a sound mind."
        ]}
        interpretation="The top four positions have higher requirements including nationality, higher GPA (3.0 vs 2.7), and upper-class status. This ensures the most critical leadership positions are held by experienced students with strong academic standing. The 2-semester minimum for all positions prevents 'lame duck' executives who would graduate before completing their term. The nationality requirement for top positions reflects the Union's mandate to represent Gambian students' interests."
      />

      <SectionCard
        title="Section 61: Disqualifications"
        provisions={[
          "(a) Previously terminated from a held position.",
          "(b) Guilty of grave misconduct and negligence.",
          "(c) Failed to show evidence of good character.",
          "(d) Suspended from the university (not yet revoked).",
          "(e) Suspended or discontinued from any other university before joining UTG.",
          "(f) Served as an executive for two (2) terms.",
          "(g) Previously served as President.",
          "(h) Found guilty of corruption by the Judicial Tribunal.",
          "(i) Convicted of a criminal offence in any country."
        ]}
        interpretation="These disqualifications protect the Union from unfit leaders. The two-term limit prevents power consolidation. Former presidents cannot run for any Executive position again, ensuring fresh leadership. Criminal convictions anywhere in the world disqualify candidates. Students who were problematic at other universities are also barred. These strict standards ensure the integrity of Union leadership."
      />

      <SectionCard
        title="Sections 62-64: Congress"
        provisions={[
          "Section 62: Congress is the general assembly of all UTG students. Convened at least once per semester. Quorum: 200 students (not more than half from one school/faculty). If quorum isn't met, the next congress proceeds without quorum requirements.",
          "Section 63: Congress can approve/disapprove matters, recommend issues to the Legislative Body, and enforce constitutional provisions.",
          "Section 64: Extraordinary Congress requires 3/4 of congressional quorum in signatures plus a detailed written agenda. Must be convened within 1 week if criteria are met."
        ]}
        interpretation="Congress is the supreme democratic body — all students can participate. The quorum of 200 ensures significant representation, while the diversity requirement prevents any single faculty from dominating decisions. The pragmatic 'second congress without quorum' rule prevents deadlock. Extraordinary Congress allows students to address urgent matters outside regular schedules, but the high signature requirement prevents misuse. Decisions at Congress are made by simple majority, making it accessible and democratic."
      />
    </div>
  );
};

export default Chapter7Page;
