import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleCerificate from "./SingleCerificate";

const certifications = [
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuedBy: "Red Hat",
    date: "06/2017 - 06/2020",
    description:
      "Demonstrated expertise in Linux systems administration, including configuration, troubleshooting, and security.",
    link: "https://www.redhat.com/en/services/certification/rhcsa",
  },
  {
    name: "Certified Secure Computer User (CSCU)",
    issuedBy: "EC-Council",
    date: "09/2016 - 09/2019",
    description:
      "Developed secure computer usage habits, including preventing malware attacks and securing personal data.",
    link: "https://www.eccouncil.org/programs/cscu/",
  },
  {
    name: "CompTIA IT Fundamentals+",
    issuedBy: "CompTIA",
    date: "11/2016 - 11/2019",
    description:
      "Basic IT knowledge covering hardware, software, networking, security, and troubleshooting.",
    link: "https://www.comptia.org/certifications/it-fundamentals",
  },
  {
    name: "STAR Secure User",
    issuedBy: "STAR",
    date: "02/2017 - 12/2020",
    description:
      "Focused on secure internet practices and safe use of digital platforms to protect personal information.",
    link: "https://www.starprogram.org",
  },
];

const certifications2 = [
  
  {
    name: "Cyber Sanjivani Quiz Certificate",
    issuedBy: "Cyber Sanjivani",
    date: "08/2021 - Present",
    description:
      "Participation in a cybersecurity awareness quiz organized by Cyber Sanjivani.",
    link: "https://www.cybersanjivani.org",
  },
  {
    name: "Capture the Flag (CTF) Challenges",
    issuedBy: "Various CTF Platforms",
    date: "03/2021 - Present",
    description:
      "Active participant in multiple CTF competitions that focus on ethical hacking and penetration testing.",
    link: "https://www.hackthebox.eu/",
  },
  {
    name: "Gurugram Police Cybersecurity Summer Internship",
    issuedBy: "Gurugram Police",
    date: "06/2021 - 07/2021",
    description:
      "Gained hands-on experience in cybersecurity tasks such as threat analysis and network security under professional guidance.",
    link: "https://www.gurugrampolice.gov.in/",
  },
];

const AllCertificate = () => {
  return (
    <>
      <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {certifications.map((certification, index) => {
          return (
            <>
              <SingleCerificate key={index} certification={certification} />
              {index < 2 ? (
                <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  {/* <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" /> */}
                </motion.div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {certifications2.map((certification, index) => {
          return (
            <>
              <SingleCerificate key={index} certification={certification} />
              {index < 2 ? (
                <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  {/* <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" /> */}
                </motion.div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllCertificate;
