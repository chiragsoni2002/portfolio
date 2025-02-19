import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import pdfUrl from "./../../../public/Jaydeep_resume.pdf";

const NavbarBtn = () => {

  const downloadResume = async () => {
    //const pdfUrl = {pdf} // Replace with your file path
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "Jaydeep_resume.pdf"; // Set file name
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    onClick={downloadResume}
    >
      {/* <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link> */}
      My Resume
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
