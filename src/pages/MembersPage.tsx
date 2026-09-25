import { Users } from "lucide-react";
import ChapterHeader from "@/components/ChapterHeader";

import yusuphaJatta from "@/assets/members/member-yusupha-jatta.jpg";
import emilGibba from "@/assets/members/member-emil-gibba.jpg";
import alhagieJallow from "@/assets/members/member-alhagie-jallow.jpg";
import sophieSissoho from "@/assets/members/member-sophie-sissoho.jpg";
import fatouBoye from "@/assets/members/member-fatou-boye.jpg";
import ebrimaSabally from "@/assets/members/member-ebrima-sabally.jpg";
import fodayMinteh from "@/assets/members/member-foday-minteh.jpg";
import ramatoulieJitteh from "@/assets/members/member-ramatoulie-jitteh.jpg";
import aimanBadjan from "@/assets/members/member-aiman-badjan.jpg";

interface Member {
  name: string;
  position: string;
  association: string;
  photo: string;
  isOfficer?: boolean;
}

const members: Member[] = [
  {
    name: "Hon. Yusupha Jatta",
    position: "Speaker",
    association: "Information and Communications Technology Students' Association (ITCA)",
    photo: yusuphaJatta,
    isOfficer: true,
  },
  {
    name: "Hon. Emil Gibba",
    position: "Deputy Speaker",
    association: "Social Sciences and Humanities Students' Association (SoSHSA)",
    photo: emilGibba,
    isOfficer: true,
  },
  {
    name: "Hon. Alhagie Omar Jallow",
    position: "Clerk",
    association: "Journalism Students' Association (JSA)",
    photo: alhagieJallow,
    isOfficer: true,
  },
  {
    name: "Hon. Sophie Sissoho",
    position: "Deputy Clerk",
    association: "Law Students' Association (LSA)",
    photo: sophieSissoho,
    isOfficer: true,
  },
  {
    name: "Hon. Fatou I. Boye",
    position: "Member",
    association: "Agriculture and Environment Students' Association (AESSA)",
    photo: fatouBoye,
  },
  {
    name: "Hon. Ebrima Sabally",
    position: "Member",
    association: "Education Students' Association (EDUSA)",
    photo: ebrimaSabally,
  },
  {
    name: "Hon. Foday Minteh",
    position: "Member",
    association: "Science Students' Association (SSA)",
    photo: fodayMinteh,
  },
  {
    name: "Hon. Ramatoulie Jitteh",
    position: "Member",
    association: "Engineering and Architecture Students' Association (SEASA)",
    photo: ramatoulieJitteh,
  },
  {
    name: "Hon. Aiman Badjan",
    position: "Member",
    association: "Medicine Students' Association (UniGAMSA)",
    photo: aimanBadjan,
  },
];

const MembersPage = () => {
  const officers = members.filter((m) => m.isOfficer);
  const representatives = members.filter((m) => !m.isOfficer);

  return (
    <div>
      <ChapterHeader
        chapter="7th Legislative Body"
        title="Members of the 7th Legislative Body"
        description="The elected representatives of the 2024/2025 academic year"
      />

      <div className="mb-8 p-4 bg-secondary/50 border-l-4 border-primary rounded-r-lg">
        <p className="text-sm text-foreground/80 leading-relaxed">
          The 7th Legislative Body of the University of The Gambia Students' Union
          is composed of one representative from each school or faculty association,
          presided over by the Speaker and Deputy Speaker, with the Clerk and Deputy
          Clerk managing the legislative record. Below are the honourable members
          who serve in this body.
        </p>
      </div>

      {/* Presiding Officers */}
      <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <Users size={24} /> Presiding Officers
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 mb-10">
        {officers.map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </div>

      {/* Representatives */}
      <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <Users size={24} /> Association Representatives
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {representatives.map((member, i) => (
          <MemberCard key={i} member={member} compact />
        ))}
      </div>

      <div className="mt-10 p-4 bg-secondary/50 border-l-4 border-primary rounded-r-lg">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
          Note
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed">
          Each member represents their respective school or faculty students'
          association as provided under Section 29(3) of the UTGSU Constitution 2021,
          which provides that each school/faculty shall be represented by one (1) member
          in the Legislative Body.
        </p>
      </div>
    </div>
  );
};

interface MemberCardProps {
  member: Member;
  compact?: boolean;
}

const MemberCard = ({ member, compact }: MemberCardProps) => {
  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/30 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40"
    >
      {/* Photo with golden gradient base */}
      <div className="relative">
        <div className="gold-gradient absolute inset-0" />
        <img
          src={member.photo}
          alt={member.name}
          className={`relative w-full ${compact ? "h-56" : "h-72"} object-cover object-top`}
        />
        {/* Position badge overlay */}
        {member.isOfficer ? (
          <span className="absolute top-3 right-3 bg-white/70 dark:bg-black/50 backdrop-blur-md text-primary border border-primary/30 text-xs font-semibold px-3 py-1 rounded-full shadow whitespace-nowrap">
            {member.position}
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-white/70 dark:bg-black/50 backdrop-blur-md text-primary border border-primary/30 text-xs font-semibold px-3 py-1 rounded-full shadow whitespace-nowrap">
            Representative
          </span>
        )}
      </div>

      {/* Glassmorphism name plate */}
      <div className="px-5 py-4 text-center bg-white/50 dark:bg-white/5 backdrop-blur-lg">
        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">
          {member.association}
        </p>
      </div>
    </div>
  );
};

export default MembersPage;
