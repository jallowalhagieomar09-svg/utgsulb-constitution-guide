import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter4Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 4"
        title="The Students' Legislative Body"
        description="This chapter establishes the legislative arm of the Union — the body responsible for lawmaking, oversight, constitutional amendments, and impeachment."
      />

      <SectionCard
        title="Section 29: Establishment of the Legislative Body"
        provisions={[
          "(1) There shall be the Students' Legislative Body which shall be the legislative arm of the Union.",
          "(2) The Legislative Body shall be composed of representatives from each school/faculty-based sub-association.",
          "(3) Each school/faculty shall be represented by three (3) members.",
          "(4) Members are recommended by their sub-associations and approved by Congress.",
          "(5) Members serve for one academic year.",
          "(6) A candidate must submit a nomination form with signatures of at least 30 students from their school/faculty.",
          "(7) Congress may refuse a recommendation by absolute majority.",
          "(8) Selection occurs after dissolution of the previous Legislative Body, 2 weeks before the first Congress.",
          "(9) Secretary General notifies sub-associations to send candidates.",
          "(10) Selection must be done in utmost good faith based on experience and competence.",
          "(11) Candidates must have at least 2 semesters left for study."
        ]}
        interpretation="The Legislative Body is the Union's parliament. Each faculty/school sends 3 representatives, ensuring proportional representation across the university. The requirement of 30 signatures from their own school ensures candidates have genuine support from their constituents. Congress has the final say on approving members, adding democratic accountability. The 2-semester minimum ensures continuity — legislators can serve a full term without graduating mid-session."
      />

      <SectionCard
        title="Section 30: Functions of the Legislative Body"
        provisions={[
          "(a) Hear proposed amendment bills to the Constitution.",
          "(b) Defend and scrutinize the Executive's annual budget and monetary appropriations.",
          "(c) Justify any withdrawal from Union accounts exceeding D75,000.",
          "(d) Address contentious or urgent matters affecting student wellbeing.",
          "(e) Deliberate on matters requiring Legislative Body approval.",
          "(f) Receive and review the President's semester activity report.",
          "(g) Scrutinize the Executive's budget and policy document (submitted within 50 days of taking office).",
          "(h) The Speaker presides over Congress.",
          "(i) Deputy Speaker presides when Speaker is absent."
        ]}
        interpretation="The Legislative Body has powerful oversight functions. It controls constitutional amendments, approves large expenditures (over D75,000), and scrutinizes the Executive's budget. The requirement that the Executive submit its budget and policy document within 50 days of taking office ensures prompt governance. The President must present semester reports and answer questions — similar to a parliamentary question time. This is the primary accountability mechanism for the Executive."
      />

      <SectionCard
        title="Section 31: Power to Investigate"
        provisions={[
          "(1) The Legislative Body can investigate matters affecting student wellbeing.",
          "(2) Can request in writing for any document from the Executive or affiliates.",
          "(3) The Executive must hand over requested documents."
        ]}
        interpretation="This is a critical oversight power. The Legislative Body can launch investigations and compel the Executive to produce documents. The Executive cannot refuse — they 'shall' hand over documents. This provision prevents cover-ups and ensures transparency. It's similar to parliamentary inquiry powers in national governments."
      />

      <SectionCard
        title="Section 32: Responsibilities of Members"
        provisions={[
          "(1) Members must maintain the dignity of the Legislative Body at all times.",
          "(2) Members shall regard themselves as servants of the student body, desist from self-enrichment, and be guided by conscience and students' interest."
        ]}
        interpretation="Legislative Body members are explicitly called 'servants of the student body' — not leaders above students. They must not use their position for personal gain. Their decisions must be guided by conscience and student interest, not personal agendas or external pressure. This sets a high ethical standard for legislative service."
      />

      <SectionCard
        title="Section 33: Sittings and Proceedings"
        provisions={[
          "(1) The Legislative Body shall not sit more than 10 times per semester.",
          "(2) May sit at any time for urgent matters including impeachment motions.",
          "(3) The Speaker presides; Deputy Speaker presides in Speaker's absence.",
          "(4) The Speaker has power to discipline and suspend members for breaches.",
          "(5) The Speaker decides the venue within UTG premises.",
          "(6) All sittings are open for students to attend."
        ]}
        interpretation="The 10-sitting limit per semester prevents excessive legislative activity that could disrupt academic schedules. However, emergency sessions for urgent matters and impeachment are unlimited — urgency overrides the cap. Crucially, all sittings are OPEN to all students — this ensures full transparency. Any student can attend and observe the proceedings, promoting accountability and public engagement."
      />

      <SectionCard
        title="Section 34: Introduction of Bills and Motions"
        provisions={[
          "(1) Members can introduce bills or motions except: (a) impeachment motions, (b) constitutional amendments.",
          "(2) Any student can file impeachment or amendment bills with support of at least 200 students (including 15 from each school/faculty).",
          "(3) Amendment bills go through: (a) First reading — official introduction for preliminaries, (b) Second reading — debate followed by vote requiring absolute majority, (c) If tied, Speaker has deciding vote.",
          "(6) Passed bills go to the Committee of Experts for proper language drafting.",
          "(7) The bill becomes law when the President assents to it.",
          "(8) If the President fails to assent, reasons go to the Speaker, then to Congress for final determination."
        ]}
        interpretation="The legislative process is well-structured with multiple readings, debates, and votes — similar to national parliamentary procedures. The requirement of 200 signatures for impeachment or constitutional amendments ensures these serious actions have genuine popular support, not just the wish of a small group. The Committee of Experts ensures bills are properly drafted. The President can effectively delay a bill by not signing it, but Congress has the final say — the presidential veto can be overridden, maintaining democratic supremacy."
      />

      <SectionCard
        title="Section 35-36: Clerk and Leadership Selection"
        provisions={[
          "Section 35: The Clerk is the administrative head, keeps all records, takes notes of proceedings, and briefs Congress.",
          "Section 36: The President nominates 3 candidates for Speaker; members elect one. The Principal Arbitrator presides over the Speaker's election. Deputy Speaker, Clerk, and Assistant Clerk are elected by members."
        ]}
        interpretation="The Clerk plays a vital administrative role — they are the institutional memory of the Legislative Body. The Speaker selection process involves the President nominating candidates but the Legislative Body making the final choice, balancing executive influence with legislative independence. Having the Principal Arbitrator (head of the Judicial Tribunal) preside over the Speaker's election adds judicial neutrality to the process."
      />

      <SectionCard
        title="Sections 37-39: Funding, Resignation & Rules"
        provisions={[
          "Section 37: The Union is the main funder; Legislative Body submits an annual budget to the Finance Minister (requires 1/3 Executive approval). Members receive sitting allowances.",
          "Section 38: Members resign by writing to the Speaker. Replacements are appointed by sub-associations without needing Congress approval.",
          "Section 39: The Legislative Body must create its own procedural rules within 30 days of formation, establishing quorum, proceedings, disciplinary measures, and a Committee of Experts."
        ]}
        interpretation="Financial independence is limited — the Legislative Body depends on the Union (Executive) for funding, which could create tensions. However, the right to sitting allowances recognizes the time commitment of legislative service. The 30-day deadline for creating procedural rules ensures the Body can function quickly. Replacement members don't need Congress approval — a practical measure to fill vacancies quickly."
      />

      <SectionCard
        title="Sections 40-42: Impeachment"
        provisions={[
          "Section 40: The Legislative Body can impeach any Executive member for: (a) willful constitutional violation, (b) abuse of office or misconduct, (c) mismanagement or embezzlement of funds.",
          "Section 41: Procedure — any student can file a motion (200 signatures needed), verification of signatures, notification within 72 hours, hearing of both sides, investigation panel, debate and vote.",
          "Section 42: Appeals go to the Judicial Tribunal within 7 working days. The Tribunal decides within 14 working days, and its judgment is final."
        ]}
        interpretation="Impeachment is the ultimate accountability tool. The three grounds are clear: constitutional violation, misconduct, and financial mismanagement. The process has strong due process protections — the accused gets to be heard, an investigation panel examines the facts, and there's a right of appeal to the Judicial Tribunal. The 200-signature requirement prevents frivolous impeachment attempts. The Tribunal's judgment being 'final' means there is no further appeal — the Tribunal has the last word."
      />

      <SectionCard
        title="Sections 43-44: Constitutional Amendment & Enforcement"
        provisions={[
          "Section 43: Only the Legislative Body can amend the Constitution. Amendments require Congress approval by 2/3 majority.",
          "Section 44: All Legislative Body decisions must be implemented by the Executive. Failure to enforce decisions is grounds for impeachment."
        ]}
        interpretation="Constitutional amendment requires both Legislative Body passage AND 2/3 Congress approval — this high bar protects the constitution from casual changes. The enforcement provision is powerful: if the President or any Executive member ignores a Legislative Body resolution, they can be impeached. This makes the Legislative Body's decisions binding, not merely advisory."
      />
    </div>
  );
};

export default Chapter4Page;
