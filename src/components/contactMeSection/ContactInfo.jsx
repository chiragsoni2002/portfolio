import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text=" jaychauhan.jk.101@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7984802928" Image={FiPhone} />
      <SingleInfo text="Palanpur, Gujarat 385001 India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
