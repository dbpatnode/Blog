import Faq from "react-faq-component";
import { data, styles, config } from "../data/FAQData";

export default function About() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
