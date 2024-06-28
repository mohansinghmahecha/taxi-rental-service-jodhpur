import './MainNevbar.css';
import logo from '../../assets/JCR_Logo_white.webp';
import NavBarMainList from './NavBarMainList';
const MainNevbar = () => {
    return <nav>
        <div className="main-menu">
            <div className='flex bg-black w-full justify-end font-medium text-white p-2'>Call us for Booking +919414137405 +919799735500 / jcrcab12@gmail.com</div>
            <div className="sub-main">

                <div></div>
                <div><img src={logo} width={180} height={100} /></div>
                <div>
                    <div className='block  '>
                        <NavBarMainList />
                    </div>
                </div>



            </div>

        </div>
    </nav>

}
export default MainNevbar;