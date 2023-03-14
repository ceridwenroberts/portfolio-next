import { NameIcon } from '../NameIcon';
import Navbar from '../Navbar'
import Navi from "../Navi"


export default function SubdirLayout({ children }) {
  return (
    <>
        <div className='styles.main'>
          <NameIcon />
          <Navbar />
        </div>
        {children}
    </>
  );
}
