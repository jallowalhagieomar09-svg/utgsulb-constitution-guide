import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter2Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 2"
        title="Membership & Objectives"
        description="This chapter defines who the Union serves, what it aims to achieve, and the rights and responsibilities of every member."
      />

      <SectionCard
        title="Section 7: Aims and Objectives"
        provisions={[
          "(1) Pursue and safeguard the general interest and welfare of students.",
          "(2) Monitor and safeguard educational service delivery and take appropriate measures where necessary.",
          "(3) Promote good relationship between members and close associates.",
          "(4) Dialogue with stakeholders regarding student matters whenever necessary.",
          "(5) Ensure students speak with one voice on major issues.",
          "(6) Support and complement government educational initiative programs.",
          "(7) Extend support and humanitarian assistance to needy students.",
          "(8) Organize forums, symposiums and academic programs for student expression.",
          "(9) Establish and maintain viable mechanisms for resource mobilization.",
          "(10) Promote standards and values in academics, politics, culture.",
          "(11) Uphold values espoused by the University to prepare students for community service.",
          "(12) Create and promote regional and international relationships with sister universities.",
          "(13) Pursue any other undertakings beneficial to the Students Body."
        ]}
        interpretation="These 13 objectives define the Union's entire reason for existence. They range from welfare (protecting students' interests) to academic advocacy (monitoring educational quality) to humanitarian work (helping needy students). Notably, objective (5) emphasizes unity — the Union must ensure students speak with one voice, not as divided factions. Objective (12) looks outward, establishing partnerships with other universities. These objectives should guide every decision the Executive Council makes and every resolution the Legislative Body passes."
      />

      <SectionCard
        title="Section 8: Membership"
        provisions={[
          "(1) Any person duly enrolled and registered under the University of The Gambia shall become a member of the Union except for those on exchange program."
        ]}
        interpretation="Membership is automatic and universal — every enrolled UTG student is a member by default. You don't need to apply or sign up. The only exception is exchange students (those temporarily studying at UTG from other universities). This means every registered student has the right to participate in Union activities, vote in elections, and benefit from Union services. It also means every student has the responsibilities outlined in the next section."
      />

      <SectionCard
        title="Section 9: Rights and Responsibilities of Members"
        provisions={[
          "(a) Uphold the prestige and good reputation of UTG/UTGSU and respect their symbols.",
          "(b) Uphold, defend and respect the Union's constitution and the University Act.",
          "(c) Foster unity, harmony and respect the rights and freedoms of others.",
          "(d) Serve the University by working conscientiously in their chosen occupations.",
          "(e) Use, protect and preserve University facilities and properties.",
          "(f) Be loyal to the Union, the University and the country.",
          "(g) Cooperate with relevant authorities in maintaining law and order.",
          "(h) Protect and conserve the environment of the University and the Nation."
        ]}
        interpretation="Rights come with responsibilities. Every student must uphold the constitution, respect fellow students, protect university property, and maintain law and order. This section creates a social contract: the Union protects your interests, and in return, you are expected to be a responsible member. Violation of these responsibilities could be grounds for disciplinary action. The environmental duty in (h) is notable — students are expected to care for their campus environment."
      />

      <SectionCard
        title="Section 10: Cessation of Membership"
        provisions={[
          "(1) A student will cease to be a member when:",
          "(a) They complete their program of studies (indicated by collection of an attestation).",
          "(b) They are expelled from the University.",
          "(c) They transfer to another University."
        ]}
        interpretation="Membership ends in three ways: graduation, expulsion, or transfer. Once you collect your attestation (proof of completion), you are no longer a Union member and cannot participate in Union elections or governance. Expelled students lose membership immediately. Students who transfer to another institution also lose their UTGSU membership. There is no provision for voluntary resignation from the Union while still enrolled — every active student remains a member."
      />
    </div>
  );
};

export default Chapter2Page;
