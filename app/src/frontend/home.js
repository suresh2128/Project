import Navbar from './navbar';
import Offeres from './offers';
import Brand from './brands';
import Foot from './footer';
import Img from './imgslider';
import ScrollToTopButton from './scroll';
import Imag from './brands slider';
function Home(){
    return(
        <div>
            <Navbar/>
            <Img/>
            <Brand/>
            <Imag/>
            <Offeres/>
            <Foot/>
            <ScrollToTopButton/>
        </div>
    )
}
export default Home;