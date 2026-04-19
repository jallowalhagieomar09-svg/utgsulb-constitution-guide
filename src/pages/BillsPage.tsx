import { FileText, CheckCircle2, Circle, Clock, Gavel, ScrollText, Users, Accessibility, Vote, CalendarClock } from "lucide-react";
import ChapterHeader from "@/components/ChapterHeader";

const stages = [
  { key: "introduction", label: "Introduction & Drafting", desc: "Bill is drafted and formally tabled before the Legislative Body." },
  { key: "first", label: "First Reading", desc: "Official introduction of the bill at the Legislative Body for preliminaries — Section 34(3)(a)." },
  { key: "second", label: "Second Reading", desc: "Members debate the motion. The Speaker calls for a vote; an absolute majority is required to pass the bill — Section 34(3)(b)." },
  { key: "experts", label: "Committee of Experts", desc: "Once passed, the bill is forwarded to the Committee of Experts to draft the proper language — Section 34(6)." },
  { key: "assent", label: "Presidential Assent", desc: "The bill is presented to the President for assent within seven (7) working days — Section 34(6)." },
  { key: "law", label: "Becomes Law", desc: "The bill becomes law upon assent and comes into force on that day or a future date set by the Legal Adviser — Section 34(7)." },
];

type BillStatus = "active" | "rejected";

interface Bill {
  number: number;
  title: string;
  shortTitle: string;
  icon: typeof FileText;
  section: string;
  purpose: string;
  provisions: { heading: string; text: string }[];
  justification: string[];
  currentStage: string; // matches stages.key
  nextStage?: string;
  status: BillStatus;
  rejectedAt?: string;
}

const bills: Bill[] = [
  {
    number: 1,
    title: "Persons With Disabilities Amendment Bill, 2025",
    shortTitle: "Inclusion & Accessibility",
    icon: Accessibility,
    section: "Proposes new Section 24(2)–(4)",
    purpose:
      "To guarantee full participation, representation, and protection of the rights of students with disabilities within the Students' Union and all its affiliated bodies.",
    provisions: [
      {
        heading: "Section 24(2)(a) — Establishment",
        text: "There shall be established a Persons With Disabilities Committee as a standing committee of the Union.",
      },
      {
        heading: "Section 24(2)(b) — Supervision",
        text: "The Committee shall operate under the direct supervision of the Minister of Justice, who shall provide guidance on matters of rights, accessibility, and inclusion in accordance with this Constitution.",
      },
      {
        heading: "Section 24(3) — Functions",
        text: "The Committee shall: (a) Represent the interests and concerns of disabled students; (b) Propose policies and measures to promote accessibility, non-discrimination, and participation; (c) Advise the Minister of Justice on all matters affecting students with disabilities.",
      },
      {
        heading: "Section 24(4) — Reporting",
        text: "All matters, recommendations, or concerns raised by the Committee shall be formally submitted to the Minister of Justice, who shall, without undue delay, transmit such matters to the Executive Council for consideration and appropriate action.",
      },
    ],
    justification: [
      "Ensures compliance with local and international human rights standards.",
      "Promotes equality and participation of all students.",
      "Strengthens the Union's commitment to inclusivity and representation.",
      "Addresses existing barriers and systemic exclusion faced by disabled students.",
      "Encourages the University to improve infrastructure and support services.",
    ],
    currentStage: "experts",
    nextStage: "assent",
    status: "active",
  },
  {
    number: 2,
    title: "UTGSU Electoral Commission Amendment Bill, 2025",
    shortTitle: "Electoral Commission Reform",
    icon: Vote,
    section: "Amends Section 68(1) & (2)",
    purpose:
      "To amend Section 68(1) & (2) of the UTGSU Constitution to provide for the nomination of Electoral Commission members by the twelve (12) Sub-Associations, enhancing representation, transparency, and decentralization.",
    provisions: [
      {
        heading: "Section 68(1) — Establishment & Nomination",
        text: "There shall be established an Electoral Commission. (a) Each school/faculty-based Sub-Association shall nominate one person to Congress for approval. (b) Congress may refuse the recommendation by absolute majority, and the school/faculty concerned shall recommend another person within two weeks, subject to Executive Council approval. (c) The Commission shall serve a term of one (1) academic year. (d) Where a member vacates office before the end of the term, such position shall be filled in the next ensuing Congress.",
      },
      {
        heading: "Section 68(2) — Composition",
        text: "The Commission shall consist of twelve (12) electoral members and shall be headed by a Chairperson elected from among them.",
      },
      {
        heading: "Transitional Provision",
        text: "Any Electoral Commission constituted prior to the commencement of this Act shall continue in office until the expiry of its term.",
      },
    ],
    justification: [
      "Entrusts each of the twelve (12) Sub-Associations with authority to nominate one EC representative.",
      "Enhances democratic legitimacy, fairness, and balanced representation in elections.",
      "Strengthens accountability of nominees to their constituent academic units.",
      "Streamlines the appointment process while preserving Congress's oversight role.",
      "Avoids chaos in the selection process during Congress.",
    ],
    currentStage: "first",
    nextStage: "second",
  },
  {
    number: 3,
    title: "Special Meetings Amendment Bill, 2025",
    shortTitle: "Executive Council Special Meetings",
    icon: CalendarClock,
    section: "Amends Section 27(1)(b) & (c)",
    purpose:
      "To amend the provisions governing special meetings of the Executive Council — extending the notice period for requesting a special meeting from 48 to 72 hours, while maintaining the Secretary General's 48-hour communication requirement.",
    provisions: [
      {
        heading: "Section 27(1)(b) — Summoning Special Meetings",
        text: "Special meetings may be summoned by any member of the Executive Council, provided that the member concerned has submitted a written request to the Secretary General at least seventy-two (72) hours prior to the proposed meeting.",
      },
      {
        heading: "Section 27(1)(c) — Communication by the Secretary General",
        text: "Upon receiving such a request, the Secretary General shall inform the Executive Council of the proposed special meeting, stating the agenda, no later than forty-eight (48) hours before the proposed meeting.",
      },
    ],
    justification: [
      "Enhances administrative coordination by giving the Secretary General enough time to process requests.",
      "Promotes transparency and readiness among Executive Council members.",
      "Strengthens governance by establishing clearer timelines for convening special meetings.",
      "Aligns procedural timelines with best practices in student governance.",
    ],
    currentStage: "first",
    nextStage: "second",
  },
];

const StageTimeline = ({ currentStage }: { currentStage: string }) => {
  const currentIdx = stages.findIndex((s) => s.key === currentStage);
  return (
    <div className="space-y-3">
      {stages.map((stage, idx) => {
        const completed = idx < currentIdx;
        const active = idx === currentIdx;
        return (
          <div key={stage.key} className="flex gap-3 items-start">
            <div className="flex flex-col items-center shrink-0">
              {completed ? (
                <CheckCircle2 size={20} className="text-primary" />
              ) : active ? (
                <div className="relative">
                  <Circle size={20} className="text-primary" fill="currentColor" />
                  <span className="absolute -inset-1 rounded-full border-2 border-primary animate-pulse" />
                </div>
              ) : (
                <Circle size={20} className="text-muted-foreground/40" />
              )}
              {idx < stages.length - 1 && (
                <div className={`w-0.5 h-8 mt-1 ${completed ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
            <div className="pb-2">
              <p
                className={`text-sm font-semibold ${
                  active ? "text-primary" : completed ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {stage.label}
                {active && (
                  <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Current
                  </span>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{stage.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const BillCard = ({ bill }: { bill: Bill }) => {
  const Icon = bill.icon;
  const currentStageObj = stages.find((s) => s.key === bill.currentStage)!;
  const nextStageObj = stages.find((s) => s.key === bill.nextStage)!;

  return (
    <article className="section-card animate-fade-in">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4 pb-4 border-b border-border">
        <div className="gold-gradient p-3 rounded-lg text-primary-foreground shrink-0">
          <Icon size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
              Bill No. {bill.number} of 2025
            </span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-tight">
            {bill.title}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{bill.section}</p>
        </div>
      </div>

      {/* Purpose */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <ScrollText size={14} /> Purpose
        </h3>
        <p className="text-sm text-foreground/85 leading-relaxed">{bill.purpose}</p>
      </div>

      {/* Provisions */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Gavel size={14} /> Proposed Provisions
        </h3>
        <div className="space-y-3">
          {bill.provisions.map((p, i) => (
            <div key={i} className="interpretation-box">
              <p className="text-sm font-semibold text-foreground mb-1">{p.heading}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Justification */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <CheckCircle2 size={14} /> Justification
        </h3>
        <ul className="space-y-1.5">
          {bill.justification.map((j, i) => (
            <li key={i} className="text-sm text-foreground/85 leading-relaxed flex gap-2">
              <span className="text-primary shrink-0">•</span>
              <span>{j}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stage Timeline */}
      <div className="bg-secondary/50 rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
            <Clock size={14} /> Legislative Stage
          </h3>
          <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
            Currently: {currentStageObj.label}
          </span>
        </div>
        <StageTimeline currentStage={bill.currentStage} />
        <div className="mt-4 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">What this means:</strong> {currentStageObj.desc} The bill is now
            scheduled for the <strong className="text-primary">{nextStageObj.label}</strong>, where{" "}
            {nextStageObj.desc.toLowerCase()}
          </p>
        </div>
      </div>
    </article>
  );
};

const BillsPage = () => {
  return (
    <div>
      <ChapterHeader
        chapter="Ongoing"
        title="Bills Before the Legislative Body"
        description="Track the active bills currently moving through the UTGSU legislative process — their content, purpose, and the stage of transition into law as defined by Section 34(3) of the Constitution."
      />

      {/* Process Overview */}
      <div className="section-card mb-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="text-primary" size={20} />
          <h2 className="font-heading text-lg font-semibold text-foreground">How a Bill Becomes Law</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Under <strong className="text-foreground">Section 34(3)–(8)</strong> of the UTGSU Constitution, every
          amendment bill must complete a defined journey before it can take effect. Each bill below shows its
          current position on this journey.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          {stages.map((s, i) => (
            <div key={s.key} className="flex items-center gap-1.5 text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-[10px]">
                {i + 1}
              </span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bills (ordered by number) */}
      <div className="space-y-8">
        {bills
          .sort((a, b) => a.number - b.number)
          .map((bill) => (
            <BillCard key={bill.number} bill={bill} />
          ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 section-card text-center bg-secondary/30">
        <Users className="text-primary mx-auto mb-2" size={24} />
        <h3 className="font-heading font-semibold text-foreground mb-1">All Three Bills Have Passed First Reading</h3>
        <p className="text-sm text-muted-foreground">
          Each of the bills above has successfully completed its <strong className="text-foreground">First Reading</strong> and
          is now scheduled for the <strong className="text-primary">Second Reading</strong>, where Legislative Body members
          will debate the motions and vote. An absolute majority is required to pass each bill to the next stage.
        </p>
      </div>
    </div>
  );
};

export default BillsPage;
