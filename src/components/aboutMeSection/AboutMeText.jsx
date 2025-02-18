import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Jaydeep Chauhan is a dedicated IT Cybersecurity Analyst with a
        Master’s in IT Cybersecurity from Ganpat University. He has over a year
        of experience in cybersecurity, having worked as a Junior Cybersecurity
        Analyst and Cybersecurity Consultant at Virtual Caim Private Limited in
        Ahmedabad. His expertise includes vulnerability assessments, penetration
        testing, email security, and insider threat prevention. He is skilled in
        securing web and network environments using various security tools and
        frameworks. Jaydeep is seeking to join a cybersecurity team focused on
        securing complex systems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
