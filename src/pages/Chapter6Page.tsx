import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter6Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 6"
        title="Financial Matters"
        description="This chapter governs the Union's finances — where money comes from, how it's managed, and the oversight mechanisms in place."
      />

      <SectionCard
        title="Section 55: Source of Finance"
        provisions={[
          "(1) The main source of finance for the Union shall be from students' dues.",
          "(2) The Union may receive donations, grants, and any other lawful income.",
          "(3) The Union may engage in income-generating activities to supplement its finances."
        ]}
        interpretation="Student dues form the financial backbone of the Union. Every enrolled student contributes, creating a collective fund. Additionally, the Union can seek external funding through donations and grants, and can run income-generating ventures (like events, merchandise, etc.). This diversified approach reduces dependence on dues alone and allows the Union to build financial sustainability."
      />

      <SectionCard
        title="Section 56: Accounts of the Union"
        provisions={[
          "(1) The Union shall maintain a bank account in a reputable bank.",
          "(2) There shall be three (3) signatories to the Union's account: the President, the Secretary General, and the Minister of Finance.",
          "(3) Any withdrawal from the Union's account must be signed by at least two (2) of the three signatories.",
          "(4) All financial transactions must be properly documented and recorded."
        ]}
        interpretation="The three-signatory system is a critical financial safeguard. No single person can withdraw Union funds alone — at least two of the three authorized officials must sign. This prevents embezzlement and unauthorized spending. The requirement for proper documentation creates an audit trail that the Auditor and Legislative Body can review. This is one of the most important accountability mechanisms in the entire constitution."
      />

      <SectionCard
        title="Section 57: Congress Finance Committee"
        provisions={[
          "(1) There shall be a Congress Finance Committee comprising the Minister of Finance as chairperson.",
          "(2) The President shall temporarily appoint five other members for each Congress.",
          "(3) The Committee handles Congress budgeting and related matters.",
          "(4) The Committee has no other functions beyond Congress finance."
        ]}
        interpretation="This is a temporary, purpose-specific committee that exists only to handle the financial aspects of organizing Congress meetings. It's chaired by the Finance Minister for expertise, but includes additional members to ensure broader oversight. The explicit statement that it has 'no other functions' prevents mission creep — the committee cannot expand its authority beyond its narrow mandate."
      />
    </div>
  );
};

export default Chapter6Page;
