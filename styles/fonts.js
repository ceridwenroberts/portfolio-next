import { Montserrat, Montserrat_Alternates } from "@next/font/google";
import localFont from "@next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });
const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const brightYoungThings = localFont({
  src: "../public/fonts/brightYoungThings.woff",
  weight: "400",
});

export { montserrat, montserrat_alt, brightYoungThings };
