import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Cybersecurity Intern",
    company: "Virtual Caim – Ahmedabad",
    date: "December 2021 – May 2022",
    responsibilities: [
      "Assisted in research, documentation, and testing of security systems.",
      "Gained hands-on experience in threat intelligence & digital forensics."
    ],
  },
  {
    job: "Junior Cybersecurity Analyst",
    company: "Virtual Caim – Ahmedabad",
    date: "June 2022 – December 2022",
    responsibilities: [
      "Conducted penetration testing & security assessments for web and network security.",
      "Created and enforced security policies to mitigate risks.",
      "Assisted teams in resolving security incidents and reducing threats.",
    ],
  },
  {
    job: "Cyber Security Consultant",
    company: "Virtual Caim – Ahmedabad",
    date: "January 2022 – Present",
    responsibilities: [
      "Led vulnerability assessments & penetration testing for web, mobile, and network security.",
      "Developed threat detection & incident response protocols to improve security.",
      "Ensured compliance with industry security standards and business continuity."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
