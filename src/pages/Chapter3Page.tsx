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
        title="Section 15: Functions of the Minister of Finance"
        provisions={[
          "(1) The Minister of Finance shall discharge the following functions:",
          "(a) He or she shall be responsible and accountable for all financial transactions of the Union.",
          "(b) He or she shall be a signatory to the Union's account.",
          "(c) He or she shall be responsible for the collection of all Union dues.",
          "(d) He or she shall ensure all incomes and expenditure of the Union is accounted for and recorded.",
          "(e) He or she shall be responsible for strategizing means of generating revenue for the Union.",
          "(f) He or she shall present and defend the annual budget of the Union before the Students' Legislative Body.",
          "(g) He or she shall present an audited financial report to the student body at least three (3) working days prior to congress.",
          "(h) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"The Finance Minister manages the Union's money and is answerable for every transaction. Being an account signatory does not replace the duty to record all income and spending. The minister collects dues, develops ways to raise revenue, and must explain and defend the annual budget before the Legislative Body. Students must receive an audited financial report at least three working days before Congress, giving them time to review the accounts and ask informed questions. The President may also assign additional duties."}
      />

      <SectionCard
        title="Section 16: Functions of the Minister of Welfare and Culture"
        provisions={[
          "(1) The Minister of Welfare and Culture shall discharge the following functions;",
          "(a) He or she shall consult with the Vice President for providing and maintaining students' support services.",
          "(b) He or she shall be responsible for organizing all social activities, programs and events involving the Union in the University.",
          "(e) He or she shall advise the Executive Council on all Welfare and cultural matters.",
          "(f) He or she shall collaborate with any student body in organizing social and cultural activities.",
          "(g) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"This minister looks after student support and the Union's social and cultural life. Support services are to be developed and maintained in consultation with the Vice President. The minister organizes Union social events, advises the Executive Council on welfare and culture, and works with student bodies on shared activities. This is both a support role and a coordination role, rather than only an events position. The President may assign further duties."}
      />

      <SectionCard
        title="Section 17: Functions of the Minister of Education and Research"
        provisions={[
          "(1) The Minister of Education and Research shall discharge the following functions:",
          "(a) He or she shall be responsible for making follow ups on all unpublished and missing grades of students.",
          "(b) He or she shall be responsible for coordinating all research activities the students may want to embark on.",
          "(c) He or she shall be responsible for organizing educational activities.",
          "(d) He or she may organize tutorial classes for students of the University and may set up foundation classes for students in grade 12.",
          "(e) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"The Education and Research Minister supports students' academic interests. Following up missing or unpublished grades means pursuing the matter with the relevant authorities; it does not give the minister power to award or change grades. The minister must coordinate student research and educational activities. Tutorial classes for university students and foundation classes for grade 12 students are permitted, but the word 'may' makes these optional initiatives rather than mandatory programmes. Additional duties may be assigned by the President."}
      />

      <SectionCard
        title="Section 18: Functions of the Minister of Agriculture and Environment"
        provisions={[
          "(1) The Minister of Agriculture and Environment shall discharge the following functions:",
          "(a) He or she shall be responsible for promoting and coordinating all agricultural and Environmental activities of The Union.",
          "(b) He or she shall organize and supervise environmental cleansing and preservation exercises within and outside the university.",
          "(c) He or she shall be responsible for all agricultural research and field work services.",
          "(d) He or she shall be the custodian of The Union farm(s) and farm implements.",
          "(e) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"This minister coordinates the Union's agriculture and environmental work, including clean-up and preservation exercises both on campus and beyond it. The portfolio also covers agricultural research and field work. Being the custodian of Union farms and farm implements means having responsibility for their care and management, not personal ownership. The President may assign further duties."}
      />

      <SectionCard
        title="Section 19: Functions of the Minister of Sports"
        provisions={[
          "(1) The Minister of Sports shall discharge the following functions:",
          "(a) He or she shall be responsible for organizing and co-coordinating all sporting activities of The Union;",
          "(b) He or she shall explore and adopt suitable means of improving the standards of sporting activities in the University;",
          "(c) He or she shall publish information to update the students on the sporting activities of The Union;",
          "(e) He or she shall organize the UTG sports Day once every year",
          "(f) He or she shall organize sporting activities every semester including interschool tournaments.",
          "(g) He or She shall work in co-operation with the Directorate of sports and recreation of the University of The Gambia on all matters relating to sports.",
          "(h) He or she shall appoint a sports committee which may include all sports ministers of various sub-associations of which he or she shall be the chairperson.",
          "(i) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"The Sports Minister must organize Union sport, improve its standard, and keep students informed. The section specifically requires a UTG Sports Day every year and sporting activities every semester, including interschool tournaments. The minister must cooperate with the University's Directorate of Sports and Recreation and appoint a sports committee chaired by the minister. Sub-association sports ministers may be included in that committee, but their inclusion is not stated as compulsory. The President may assign other duties."}
      />

      <SectionCard
        title="Section 20: Functions of the Minister of Information and Communication"
        provisions={[
          "(1) The Minister of Information and Communication shall discharge the following functions:",
          "(a) He or she shall be responsible for publicity and updating students on the Union's activities;",
          "(b) He or she shall be responsible for generating and disseminating information that affects students;",
          "(e) He or she shall be the liaison officer of the Union;",
          "(f) He or she shall propagate the good image of the Union through the media;",
          "(g) He or she shall on monthly basis, compile and publish the activities of The Union.",
          "(h) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"This minister keeps students informed about Union activities and other information affecting them. As liaison officer, the minister serves as a communication link for the Union. The role includes promoting the Union's image through the media, but also a specific monthly obligation to compile and publish its activities. This regular reporting allows students to follow what their Union is doing. The President may assign additional duties."}
      />

      <SectionCard
        title="Section 21: Functions of the Minister of Gender and Health"
        provisions={[
          "(1) The Minister of Gender and Health shall discharge the following functions:",
          "(a) He or she shall implement all activities related to the mainstreaming of gender and health in the Union's programmes.",
          "(b) He or she shall coordinate all gender-related activities and initiatives that seek to address gender discrimination.",
          "(c) He or she shall help improve the general sanitary conditions within the university.",
          "(d) He or she shall partner with the Minister of Education and Research to organize seminars and symposia on health related matters.",
          "(e) He or she shall be responsible for maintaining the Students' sick bay.",
          "(f) He or She shall liaise with relevant authorities on matters pertaining to the health of the members of the Union.",
          "(g) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"Gender mainstreaming means considering gender equality throughout the Union's programmes, rather than treating it as a separate occasional issue. This minister coordinates efforts against gender discrimination, supports better sanitation, and works with the Education and Research Minister on health education. Maintaining the students' sick bay and liaising with health authorities are also explicit responsibilities. The role involves support and coordination; this section does not itself authorize the minister to provide clinical treatment. The President may assign further duties."}
      />

      <SectionCard
        title="Section 22: Functions of the Minister of Technical and Logistics Services"
        provisions={[
          "(1) The Minister of Technical and Logistics Services shall discharge the following functions:",
          "(a) He or she shall be responsible for transport arrangements and any other arrangement incidental there to;",
          "(b) He or she shall facilitate travel and transportation means for all activities of the Union;",
          "(c) He or she shall at the beginning of every semester publish a transport schedule for the student community;",
          "(d) He or she shall cooperate with the relevant authorities for the issuance of student Identity Cards;",
          "(e) He or she shall represent the Union in the transport committee of the University administration.",
          "(f) He or she shall be responsible for all venue arrangements and any other arrangement incidental thereto. This shall be done in consultation with the welfare minister.",
          "(g) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"This minister handles the practical arrangements that allow Union activities to take place. Duties include arranging transport and travel, publishing a transport schedule at the start of every semester, and representing the Union on the University's transport committee. Student identity cards are handled in cooperation with the relevant authorities. Venues and related arrangements must be organized in consultation with the Welfare Minister. The President may assign further duties."}
      />

      <SectionCard
        title="Section 23: Functions of the Auditor"
        provisions={[
          "(1) The Auditor shall discharge the following functions:",
          "(a) He or she shall be responsible for auditing the accounts of the Union;",
          "(b) He or she shall Countersign all statements of account(s) of The Union;",
          "(c) He or she shall Certify that money charged on the Union's account and expended has been applied for the purpose for which it was so charged or appropriated, and that expenditure conforms to the authority that governs it;",
          "(d) He or she shall quarterly submit the Union's audited report on the financial statement prepared by the finance minister to the Students' Legislative Body, Executive Council and shall present it to the general student body at Congress;",
          "(e) He or she shall audit the performance of all executive members in the execution of their duties and submit a comprehensive report to the Students' legislative body and present it to the general student body at Congress.",
          "(f) He or she shall draw attention to any irregularity in the audited accounts, and to any other matter(s) which in his or her opinion ought to be brought to the notice of the Executive Council and general student body.",
          "(g) He or she shall give advice to the Minister of Finance on the adoption or establishment of a reliable, transparent and accountable financial system.",
          "(h) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"The Auditor checks whether Union money was properly recorded, authorized, and spent for its approved purpose. Countersigning and certifying accounts are accountability responsibilities, not simply administrative signatures. Audited financial reports must be submitted quarterly to the Legislative Body and Executive Council and presented to students at Congress. The Auditor also reviews how every executive member performs their duties and reports to the Legislative Body and Congress. Irregularities must be brought to attention, and the Finance Minister should receive advice on a transparent financial system. The President may assign additional duties."}
      />

      <SectionCard
        title="Section 24: Functions of the Minister of Justice"
        provisions={[
          "(a) The Minister of Justice shall be appointed by the President in consultation with the Executive Council subject to the approval of the Legislative Body within seven (7) days of the presentation of the request.",
          "(b) If the Legislative Body rejects the person nominated by the president to serve as the Minister of Justice, it shall not again reject the person nominated to replace him or her.",
          "(c) He or She shall be an upper-class law student and shall have at least two semesters left for study.",
          "(d) He or she shall be competent person to proffer legal advice to the Union and represent the Union in matters of adjudication before the UTGSU Judicial Tribunal.",
          "(e) He or She shall investigate all matters affecting the Union.",
          "(f) Subject to the provisions of this constitution, the Minister of Justice shall not be subjected to elections.",
          "(g) He or She shall be responsible for any other duties assigned to him or her by the Executive or Congress.",
          "(h) He or She shall appoint a committee of which he or she shall be the chairman.",
          "(i) He or She may perform such duties as assigned to him or her by the President from time to time.",
        ]}
        interpretation={"The Minister of Justice is appointed rather than elected. The President must consult the Executive Council, and the appointment is subject to Legislative Body approval within seven days of presenting the request. If the first nominee is rejected, the legislature cannot reject the replacement nominee again. The appointee must be an upper-class law student with at least two semesters remaining and competent to advise the Union and represent it before the Judicial Tribunal. The minister investigates matters affecting the Union, must appoint and chair a committee, and carries out duties assigned by the Executive or Congress, as well as further duties assigned by the President."}
      />

      <SectionCard
        title="Section 25: Functions of Assistant Secretary General and Deputy Ministers"
        provisions={[
          "(1) The Assistant Secretary General and Deputy Ministers shall discharge the following functions:",
          "(a) He or she shall be the principal assistants to their respective areas of concentration.",
          "(b) He or she shall assume the responsibilities of their heads in case of absence;",
          "(c) He or she shall execute all other duties assigned to him or her by the heads.",
        ]}
        interpretation={"The Assistant Secretary General and Deputy Ministers support the heads of their respective offices. When a head is absent, the assistant or deputy assumes that head's responsibilities, helping the office continue functioning. They must also carry out duties assigned by their heads. This section gives them a defined supporting and acting role rather than a separate, unrelated portfolio."}
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
