import SingleSkill from "./SingleSkill";
import { FaBug, FaExclamationTriangle, FaLinux } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiMetasploit, SiBurpsuite, SiWireshark, SiOwasp, SiKubernetes, SiGnubash } from "react-icons/si";
import { TbNetwork } from "react-icons/tb";
import { MdTerminal } from "react-icons/md";

const skills = [
  {
    skill: "Linux",
    icon: FaLinux,
  },
 {
     skill: "Metasploit",
     icon: SiMetasploit,
   },
   {
     skill: "Burpsuite",
     icon: SiBurpsuite,
   },
   {
     skill: "Wireshark",
     icon: SiWireshark,
   },
   {
     skill: "Owasp",
     icon: SiOwasp,
   },
   {
     skill: "Kubernetes",
     icon: SiKubernetes,
   },
   {
     skill: "Gnubash",
     icon: SiGnubash,
   },
  {
    skill: "Network",
    icon: TbNetwork,
  },
  {
    skill: "Terminal",
    icon: MdTerminal,
  },
  {
    skill: "VAPT",
    icon: FaBug,
  },
  
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
