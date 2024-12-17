import ContactInfo from "@/components/ContactInfo";
import DevProfile from "@/components/DevProfile";


const ContactPage = () => {

  return (
    <div className="flex flex-col gap-14 items-center justify-center p-4">
      <ContactInfo />
      <DevProfile />
    </div>
  );
};

export default ContactPage;