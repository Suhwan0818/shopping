import Nav from '../components/Nav';
import NameSpace from '../components/NameSpace';
import Infomation from '../components/Infomation';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <NameSpace />
        <Infomation />
        <Infomation />
        <Infomation />
        <Infomation />
        <Infomation />
        <Infomation />
      </div>
      <Footer />
    </>
  );
};

export default Main;
