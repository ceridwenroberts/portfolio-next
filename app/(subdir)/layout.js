import Navbar from './Navbar'


export default function SubdirLayout({ children }) {
  return (
    <>
        <div>
          <h2>Det här är min nav bar</h2>
          <Navbar />
        </div>
        {children}
    </>
  );
}
