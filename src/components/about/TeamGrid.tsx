
import { User, Users } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Lucky Loonkishu Nakola",
    role: "Founder & CEO",
    bio: "Visionary leader, passionate about empowering Africa through technology.",
    highlight: true,
    img: null, // You can replace with image src if needed
  },
  {
    name: "Amina Wanjiru",
    role: "Lead Software Engineer",
    bio: "Drives innovation with AI-powered solutions. [Placeholder]",
    img: null,
  },
  {
    name: "Samuel Njoroge",
    role: "Head of Cybersecurity",
    bio: "Ensures client safety across all platforms. [Placeholder]",
    img: null,
  },
  {
    name: "Esi Mensah",
    role: "UX/UI Designer",
    bio: "Creates culturally resonant interfaces. [Placeholder]",
    img: null,
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
      {team.map((member, idx) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.5 }}
          className={`rounded-xl border-2 shadow-card h-40 flex flex-col items-center justify-center bg-white hover:shadow-lg group transition-all
            ${member.highlight ? "border-[#FFD700] shadow-[0_4px_24px_#FFD70052]" : "border-blue-100"}
          `}
        >
          <div className="mb-2">
            {member.img ? (
              <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              member.highlight ? (
                <User className="w-10 h-10 text-[#FFD700]" />
              ) : (
                <Users className="w-10 h-10 text-blue-900/70" />
              )
            )}
          </div>
          <div className={`font-bold ${member.highlight ? "text-blue-900" : "text-black"}`}>{member.name}</div>
          <div className="text-xs text-black/60">{member.role}</div>
          <div className="text-xs text-black/50 mt-1 text-center">{member.bio}</div>
        </motion.div>
      ))}
    </div>
  );
}
