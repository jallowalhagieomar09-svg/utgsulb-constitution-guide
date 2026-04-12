import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter3Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 3"
        title="The Executive Council"
        description="This chapter establishes the executive arm of the Union — its composition, the detailed functions of each office, powers, meetings, and removal procedures."
      />

      <SectionCard
        title="Section 11: Composition of the Executive Council"
        provisions={[
          "The Executive Council comprises: President, Vice President, Secretary General, Asst. Secretary General, Minister of Finance (+ Deputy), Minister of Social Welfare & Culture (+ Deputy), Minister of Sports (+ Deputy), Minister of Information & Communication (+ Deputy), Auditor General, Minister of Technical & Logistics Services (+ Deputy), Minister of Education & Research (+ Deputy), Minister of Gender & Health (+ Deputy), Minister of Agriculture & Environment (+ Deputy), and Minister of Justice."
        ]}
        interpretation="The Executive Council is essentially the student government's cabinet. It mirrors a national government structure with a President, Vice President, and various ministers handling specific portfolios. Each minister (except the Auditor and Minister of Justice) has a deputy. This structure ensures comprehensive coverage of student affairs — from finance to sports, from welfare to the environment. The total composition includes approximately 21 positions, making it a large and diverse governing body."
      />

      <SectionCard
        title="Section 12: Functions of the President"
        provisions={[
          "(a) Head of the Union and leader of the Executive Council.",
          "(b) Supervises and coordinates Executive Council functions.",
          "(c) Accountable for Union property management.",
          "(d) Embodiment of the Students' Union.",
          "(e) Protects and defends the Union's image.",
          "(f) Presides over Executive Council meetings with impartiality.",
          "(g) Presides over Congress for dissolving the Legislative Body.",
          "(h) Can take action against erring Executive members (in consultation with others), but cannot terminate their services.",
          "(i) Has the deciding vote in case of ties.",
          "(j) Signatory to the Union's account.",
          "(k) Approves petty cash payments; must defend expenditures exceeding D75,000 before the Legislative Body.",
          "(l) Has veto power over Executive decisions (but not binding — 2/3 quorum can override by simple majority).",
          "(m) Authorizes Union spending.",
          "(n) Represents students at the UTG Governing Council.",
          "(o) Represents students at the UTG Alumni Association.",
          "(p) Receives visitors on behalf of the Union.",
          "(q) Presents semester activity reports to the Legislative Body.",
          "(r) Exercises other constitutional powers."
        ]}
        interpretation="The President has the most extensive responsibilities in the Union. Key points: (1) The President CANNOT unilaterally fire Executive members — only take action in consultation with others. (2) The veto power exists but is deliberately weakened — the Executive can override it with a 2/3 quorum and simple majority, ensuring checks and balances. (3) Any spending over D75,000 must be justified before the Legislative Body, ensuring financial accountability. (4) The President sits on the UTG Governing Council, giving students a voice at the highest university decision-making level."
      />

      <SectionCard
        title="Section 13: Functions of the Vice President"
        provisions={[
          "(a) Acts in the President's absence and assumes presidential duties.",
          "(b) Consults with Education Minister to organize new student orientation.",
          "(c) Principal assistant to the President.",
          "(d) Represents the Students' Body at the Senate.",
          "(e) Performs other duties assigned by the President."
        ]}
        interpretation="The VP is the President's right hand. Their most significant role is representing students at the University Senate — a key academic governance body. The VP also leads new student orientation, which is critical for integrating freshmen. When the President is unavailable, the VP automatically assumes full presidential powers and responsibilities."
      />

      <SectionCard
        title="Section 14: Functions of the Secretary General"
        provisions={[
          "(a) Responsible for all official Union correspondence and minutes.",
          "(b) Prepares meeting agendas in consultation with the President.",
          "(c) Prepares Congress agendas in consultation with the Speaker.",
          "(d) Maintains active files of all correspondence.",
          "(e) Presents quarterly reports to Executive Council and terminal reports to Congress.",
          "(f) Records, files, documents and transfers all union activities.",
          "(g) Signatory to the Union's account.",
          "(h) Oversees all Sub-associations.",
          "(i) Registers all student bodies within the University.",
          "(j) Acts for President when both President and VP are absent.",
          "(k) Performs other assigned duties."
        ]}
        interpretation="The Secretary General is the administrative backbone of the Union. They control all official records, correspondence, and documentation. Being a signatory to the Union's account adds a layer of financial oversight. Their role overseeing sub-associations means they have authority over all faculty-based student groups. Crucially, the SG is third in the line of succession after the President and VP."
      />

      <SectionCard
        title="Sections 15-23: Functions of Ministers"
        provisions={[
          "Minister of Finance: Manages all financial transactions, collection of dues, revenue generation, budget preparation, and financial reporting.",
          "Minister of Welfare & Culture: Social activities, student support services, cultural programs.",
          "Minister of Education & Research: Follows up on unpublished grades, coordinates research, organizes educational activities and tutorials.",
          "Minister of Agriculture & Environment: Agricultural activities, environmental cleansing, farm management.",
          "Minister of Sports: Sporting activities, UTG Sports Day, inter-school tournaments, works with Directorate of Sports.",
          "Minister of Information & Communication: Publicity, information dissemination, media relations, monthly activity reports.",
          "Minister of Gender & Health: Gender mainstreaming, sanitary conditions, health seminars, Students' sick bay.",
          "Minister of Technical & Logistics: Transport, venue arrangements, ID cards, transport scheduling.",
          "Auditor: Audits Union accounts, certifies expenditures, audits executive performance, quarterly financial reports."
        ]}
        interpretation="Each minister has a clearly defined portfolio. Notable points: The Finance Minister must present AND defend the budget before the Legislative Body — this ensures the legislature controls the purse. The Auditor has a dual mandate — auditing both finances AND performance of executive members, making this arguably the most important accountability position. The Education Minister can even organize tutorial classes, showing the Union's commitment to academic support."
      />

      <SectionCard
        title="Section 24: Minister of Justice"
        provisions={[
          "(a) Appointed by the President in consultation with the Executive, subject to Legislative Body approval within 7 days.",
          "(b) If rejected, the replacement cannot be rejected again.",
          "(c) Must be an upper-class law student with at least 2 semesters remaining.",
          "(d) Proffers legal advice and represents the Union before the Judicial Tribunal.",
          "(e) Investigates all matters affecting the Union.",
          "(f) Not subject to elections — appointed position.",
          "(g) May appoint a committee."
        ]}
        interpretation="The Minister of Justice is unique — it's the only Executive position that is appointed rather than elected. This requires a law student to ensure qualified legal advice. The Legislative Body acts as a check on this appointment. The provision that a second nominee cannot be rejected prevents the Legislative Body from indefinitely blocking the appointment, balancing power between the branches."
      />

      <SectionCard
        title="Sections 26-28: Executive Powers, Meetings & Removal"
        provisions={[
          "Section 26: Executive Council coordinates Congress decisions, upholds Union interests, meets authorities, takes emergency decisions (communicated within 72 hours), and can appoint interim members for vacancies.",
          "Section 27: Executive Council meets at least twice monthly; quorum is 2/3 of members; the President summons and presides.",
          "Section 28: Officers can resign by writing to the President (copied to SG and Speaker). The Executive fills vacancies with interim appointments pending by-elections."
        ]}
        interpretation="The Executive must meet at least twice per month, ensuring regular governance. Emergency decisions are allowed but must be communicated to students within 72 hours — transparency is mandatory. The 2/3 quorum requirement ensures decisions have broad support. Resignation requires written notice to multiple officials, creating a formal record and ensuring smooth transitions. Vacancies are filled by interim appointments until proper by-elections can be held."
      />
    </div>
  );
};

export default Chapter3Page;
