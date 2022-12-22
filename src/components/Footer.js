import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0", textAlign: "center" }}>
        ©All Rights Reserved | Use of this site constitutes acceptance of our user agreement and privacy policy | DhumketuX
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
