import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter5Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 5"
        title="The Students' Judicial Tribunal"
        description="This chapter establishes the judicial arm — the body that interprets the constitution, settles disputes, and serves as the final arbiter of Union justice."
      />

      <SectionCard
        title="Section 45: Establishment"
        provisions={[
          "(1) There shall be the Students' Judicial Tribunal headed by a Principal Arbitrator and assisted by a Registrar.",
          "(2) The Tribunal is the judicial branch exercising all judicial functions of the Union.",
          "(3) Composed of five (5) students from across the University.",
          "(4) Members nominated by the President in consultation with the Executive, approved by the Legislative Body.",
          "(5) The Principal Arbitrator is selected from among the 5 members in their first sitting, presided over by the President.",
          "(6) The Principal Arbitrator must demonstrate a high level of understanding of legal issues.",
          "(7) Members must have at least 2 semesters left for study.",
          "(8) Members serve for one academic year.",
          "(9) Dissolved 2 weeks after term expiry; new members selected within 50 days."
        ]}
        interpretation="The Tribunal is the Union's court system. With only 5 members, it's designed to be a small, focused body of students with legal aptitude. The appointment process involves all three branches: the Executive nominates, the Legislative Body approves, creating checks and balances. The Principal Arbitrator must have legal knowledge, ensuring quality jurisprudence. The 50-day deadline for selecting new members prevents prolonged vacancies in the judicial branch."
      />

      <SectionCard
        title="Section 46: Jurisdiction"
        provisions={[
          "(a) Petition of election results from aggrieved candidates.",
          "(b) Interpretation of this Constitution and all Sub-association constitutions.",
          "(c) Interpretation of electoral laws.",
          "(d) Inter or intra-association or Union organ disputes.",
          "(e) Any matter referred to it by the Executive Council, Legislative Body, or Electoral Commission.",
          "(f) Impeachment appeals.",
          "(g) Disputes between students and the Union or its sub-associations."
        ]}
        interpretation="The Tribunal has broad jurisdiction covering election disputes, constitutional interpretation, and conflicts between Union organs. Notably, individual students can bring cases against the Union itself — this protects students' rights against potential institutional overreach. The power to interpret the constitution means the Tribunal has the final word on what any provision means, similar to a Supreme Court."
      />

      <SectionCard
        title="Section 47: Powers"
        provisions={[
          "(1) Issue summons with penalty of suspension for non-compliance.",
          "(2) Compel the production of relevant documents.",
          "(3) Examine, question, and cross-examine parties under oath.",
          "(4) Declare any action/decision of Union organs null and void if inconsistent with the Constitution.",
          "(5) May recommend sanctions to the Executive for enforcement."
        ]}
        interpretation="These are powerful quasi-judicial powers. The Tribunal can summon anyone and compel documents — non-compliance leads to suspension from Union activities. The power to declare actions 'null and void' is the ultimate constitutional check. The oath requirement ensures truthful testimony. However, the Tribunal cannot enforce its own sanctions — it recommends to the Executive for implementation, maintaining separation of powers."
      />

      <SectionCard
        title="Section 48: Proceedings"
        provisions={[
          "(1) Quorum is three (3) members.",
          "(2) Hearings are conducted in open court unless otherwise decided.",
          "(3) Decisions by simple majority.",
          "(4) Must follow fair hearing rules and due process.",
          "(5) The Principal Arbitrator has the deciding vote in case of a tie.",
          "(6) Must deliver judgment within 14 working days of the last hearing."
        ]}
        interpretation="The proceedings mirror real judicial practices: open hearings, fair hearing rules, and due process guarantees. The 14-day judgment deadline ensures cases are resolved promptly — justice delayed is justice denied. A quorum of 3 out of 5 members is practical, and the tie-breaking power of the Principal Arbitrator ensures decisions are always reached."
      />

      <SectionCard
        title="Section 49: Filing of Cases"
        provisions={[
          "(1) Any member of the Union can file a case.",
          "(2) Cases are filed with the Registrar of the Tribunal.",
          "(3) The Registrar notifies the other party within 3 working days.",
          "(4) Cases must include a brief (written argument)."
        ]}
        interpretation="Access to justice is universal — any Union member can bring a case. The brief (written argument) requirement ensures parties come prepared and the Tribunal understands the issues before the hearing. The 3-day notification requirement ensures the other party has adequate time to prepare their defense."
      />

      <SectionCard
        title="Sections 50-54: Enforcement, Records, Funding & Rules"
        provisions={[
          "Section 50: Judgments are enforced by the Executive Council. The Executive must comply within 7 working days.",
          "Section 51: The Registrar maintains all Tribunal records and makes them available.",
          "Section 52: The Union funds the Tribunal; the Tribunal submits a budget to the Finance Minister.",
          "Section 53: Members may resign by writing to the Principal Arbitrator.",
          "Section 54: The Tribunal can make its own subsidiary procedural rules within 30 days."
        ]}
        interpretation="The 7-day compliance deadline for enforcing judgments ensures swift justice. Like the Legislative Body, the Tribunal depends on the Union for funding but has the right to create its own procedural rules, maintaining judicial independence. The Registrar serves as the administrative arm, maintaining institutional memory and public access to judicial records."
      />
    </div>
  );
};

export default Chapter5Page;
