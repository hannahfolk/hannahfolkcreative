import Image from "next/image";
import loading from "../../public/images/running.png";

const Startup = () => {
  return (
    <div className="startup">
      <Image src={loading} alt="ninja running to the right" />
    </div>
  );
};

export default Startup;
