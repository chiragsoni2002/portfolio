import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleCerificate = ({ certification }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[300px] md:w-[250px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-cyan">{certification.name}</p>
      <p className="text-orange">{certification.issuedBy}</p>
      <p className="text-lightGrey">{certification.date}</p>
      <p className="text-white">{certification.description}</p>
      <a
        href={certification.link}
        className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center md:justify-self-end"
      >
        View <BsFillArrowUpRightCircleFill />
      </a>
      {/* <ul className="list-disc mt-5 pl-4">
        {certification.description.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul> */}
    </motion.div>
  );
};

export default SingleCerificate;
