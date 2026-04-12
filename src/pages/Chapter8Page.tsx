import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter8Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 8"
        title="Sub-Associations, Committees & Commissions"
        description="This chapter regulates student organizations, faculty-based associations, ad-hoc committees, and the independent Electoral Commission."
      />

      <SectionCard
        title="Section 65: Sub-Associations"
        provisions={[
          "(1) The UTG Debate Association (UTG-DA) is the parent body of all debate associations.",
          "(2) UTG-DA is the only body that can organize inter-school debating activities.",
          "(3) All sub-associations must register with the Union through the Secretary General and submit their constitutions.",
          "(4) Sub-association constitutions inconsistent with the UTGSU constitution forfeit registration.",
          "(5-6) Sub-associations only exist after registration; the Executive can deny registration.",
          "(7) Registered sub-associations pay an annual fee.",
          "(8) Unregistered sub-associations are illegal.",
          "(9) Registered sub-associations are eligible for Union support.",
          "(10) Must submit activity plans and budgets within 30 school days of election.",
          "(11) Must notify Executive 2 weeks before events.",
          "(12) Union events take priority over sub-association events.",
          "(13) Sub-associations can request priority via a plea letter.",
          "(14) Must renew registration annually.",
          "(15) Failure to renew leads to suspension."
        ]}
        interpretation="The Union has comprehensive authority over all student organizations. No sub-association can operate independently — they must register, submit their constitutions for review, and pay annual fees. This creates an organized ecosystem where all student groups operate under a common framework. The requirement for constitutional consistency prevents sub-associations from having rules that conflict with the Union's principles. Annual renewal ensures active monitoring."
      />

      <SectionCard
        title="Section 66: Duties of Sub-Associations"
        provisions={[
          "(1) Membership is voluntary except for faculty/department/school-based associations.",
          "(2) Must strive for unity, peace, and stability.",
          "(3) Cannot conduct secret or immoral activities.",
          "(4) Upon dissolution, assets surrender to the Union.",
          "(5) The Union takes 40% of asset value when it contributed to acquisition.",
          "(6) Must seek clearance from the Union for travel.",
          "(7) No sub-association is independent of the Union.",
          "(8) Violations will be dealt with accordingly.",
          "(9) Must only act within their stated aims and objectives.",
          "(10) Only the Judicial Tribunal can suspend or dissolve a registered sub-association."
        ]}
        interpretation="Faculty-based associations are mandatory for students of that faculty — you're automatically a member. Other clubs are voluntary. The asset surrender rule upon dissolution prevents misuse of collectively-built resources. The travel clearance requirement ensures the Union knows when student groups are traveling, which has safety implications. Only the Judicial Tribunal can dissolve a sub-association, providing judicial protection against arbitrary Executive action."
      />

      <SectionCard
        title="Section 67: Power to Setup Committees"
        provisions={[
          "(1) The Executive can setup committees under any Ministry as necessary.",
          "(2) Committees are headed by the relevant Minister unless otherwise agreed.",
          "(3) Must reflect fair representation of all schools/faculties.",
          "(4) Committees can make their own rules (not contrary to the constitution).",
          "(5) Members serve only for the duration of the specific task.",
          "(6) No committee can be permanent or perpetual."
        ]}
        interpretation="Committees are temporary, task-specific bodies. The representation requirement ensures no school dominates committee decisions. The explicit prohibition on permanent committees prevents the creation of unelected bureaucratic structures. Once the event, program, or task is completed, the committee automatically ceases to exist. This keeps governance lean and purpose-driven."
      />

      <SectionCard
        title="Sections 68-70: Electoral Commission"
        provisions={[
          "Section 68: Electoral Commission members approved by Congress for one academic year. Composed of 10 electoral officers headed by a chairperson. Chairperson appointed by the President from among commission members within 1 week, subject to Legislative Body approval.",
          "Section 69: The Electoral Commission is the only body competent to conduct UTGSU elections. Also conducts sub-association elections when required.",
          "Section 70: The Electoral Commission is independent and cannot be subject to the direction or control of any Union organ."
        ]}
        interpretation="The Electoral Commission is the guardian of democracy within the Union. With 10 members, it's large enough to manage complex elections across multiple schools. The independence provision in Section 70 is crucial — no one, not even the President, can direct the Commission on how to conduct elections. This prevents electoral manipulation. The Legislative Body's approval of the chairperson adds accountability without compromising independence. The Commission can also conduct sub-association elections, ensuring all student elections meet the same standards."
      />
    </div>
  );
};

export default Chapter8Page;
