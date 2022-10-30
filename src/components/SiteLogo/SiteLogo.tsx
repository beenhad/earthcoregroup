/* eslint-disable @next/next/no-img-element */
import { APP_NAME } from "@config/constants";
import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <a>
        <img src={"/img/ecg-3.png"} alt={APP_NAME} width={160} height={127} />
      </a>
    </Link>
  );
};

export default SiteLogo;
