import ChapterHeader from "@/components/ChapterHeader";
import SectionCard from "@/components/SectionCard";

const Chapter9Page = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Chapter 9"
        title="Miscellaneous Provisions"
        description="This final chapter covers awards, correspondence protocols, the code of conduct, oath of office, and the commencement and review of the constitution."
      />

      <SectionCard
        title="Section 71: Awards and Honors"
        provisions={[
          "(1) The Union may bestow awards and honors on deserving students, staff, and other persons.",
          "(2) Awards shall be given to persons who have made outstanding contributions to the Union or the University.",
          "(3) The criteria and categories of awards shall be determined by the Executive Council."
        ]}
        interpretation="This provision allows the Union to formally recognize excellence and service. Awards can go to students, staff, or external persons — acknowledging that contributions to the university community come from many sources. By leaving the criteria to the Executive Council, the constitution allows flexibility to create different award categories as needs evolve."
      />

      <SectionCard
        title="Section 72: Correspondences in the Name of the Union"
        provisions={[
          "(1) All official correspondences of the Union shall be signed by the Secretary General.",
          "(2) No member of the Executive Council shall write in the name of the Union without authorization.",
          "(3) All correspondences shall be filed and documented by the Secretary General."
        ]}
        interpretation="This centralizes official communication through the Secretary General, preventing unauthorized letters or statements being made in the Union's name. It protects the Union from rogue members making unauthorized commitments or statements. The documentation requirement creates an institutional record of all Union communications."
      />

      <SectionCard
        title="Section 73: Code of Conduct of the Executive Council"
        provisions={[
          "(1) Members of the Executive Council shall conduct themselves with dignity and integrity.",
          "(2) Executive members shall not use their position for personal gain.",
          "(3) Executive members shall be transparent and accountable in all their dealings.",
          "(4) Members must avoid conflicts of interest.",
          "(5) Members shall treat all students with respect and fairness."
        ]}
        interpretation="The Code of Conduct establishes ethical standards for Executive members. It prohibits self-enrichment, demands transparency, and requires equal treatment of all students. Violations of this code could constitute 'misconduct' under the impeachment provisions, making it not just aspirational but enforceable. This section reinforces that executive office is a service, not a privilege."
      />

      <SectionCard
        title="Section 74: Oath of Office"
        provisions={[
          "All elected and appointed officials must take an oath of office before assuming their duties.",
          "The oath requires them to uphold the constitution, serve faithfully, and act in the best interest of students."
        ]}
        interpretation="The oath of office is a solemn commitment that binds officials to the constitution. Taking the oath is a prerequisite for assuming office — no official can exercise their powers before being sworn in. Willful violation of the oath is a ground for impeachment under Section 40. The oath ceremony also serves a symbolic purpose, publicly marking the transition of authority."
      />

      <SectionCard
        title="Section 75: Commencement"
        provisions={[
          "This Constitution shall come into force upon approval by Congress."
        ]}
        interpretation="The constitution requires democratic approval by Congress — the general assembly of students — before it takes effect. This ensures the entire student body has the opportunity to accept or reject the supreme law that will govern them. It reflects the democratic principle that legitimacy comes from the consent of the governed."
      />

      <SectionCard
        title="Section 76: Repeal"
        provisions={[
          "This Constitution repeals all previous constitutions of the University of The Gambia Students' Union."
        ]}
        interpretation="Upon adoption of this 2021 constitution, all previous versions cease to exist. There can be no appeal to provisions of older constitutions. This ensures clarity — there is only one governing document, and this is it. Any rights or structures from previous constitutions only survive if they are included in this version."
      />

      <SectionCard
        title="Section 77: Constitutional Review"
        provisions={[
          "The constitution shall be reviewed periodically to ensure it remains relevant and responsive to the needs of the student body."
        ]}
        interpretation="This forward-looking provision acknowledges that the constitution is a living document. As the University grows and student needs evolve, the constitution should adapt. The review process would follow the amendment procedures established in Section 43 — through the Legislative Body with Congress approval. This balances stability (the constitution is supreme) with adaptability (it can evolve with the times)."
      />
    </div>
  );
};

export default Chapter9Page;
