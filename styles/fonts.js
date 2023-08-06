import { 
  Inter, 
  Montserrat, 
  Montserrat_Alternates, Montserrat_Subrayada} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ["latin"] });
const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat_sub = Montserrat_Subrayada(
  {subsets: ["latin"],
   weight: ["400", "700"],
}
)

const brightYoungThings = localFont({
  src: "../public/fonts/brightYoungThings.woff",
  weight: "400",
});

const syncopate = localFont({
  src: "../public/fonts/Syncopate.woff2",
  weight: "400",
})

export { inter, montserrat, montserrat_alt, montserrat_sub, brightYoungThings, syncopate };
