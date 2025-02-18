import { FaBug, FaLinux } from "react-icons/fa";
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
