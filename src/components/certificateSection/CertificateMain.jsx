import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CertificateText from "./CerificateText";
import AllCertificate from "./AllCertificate";


const CertificateMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificateText />
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        
      </motion.div>
      <AllCertificate />
    </div>
  );
};

export default CertificateMain;
