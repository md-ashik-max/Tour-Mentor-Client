
import subFooterBg from '../../assets/sub-footer-bg.png'
// text-[#D2C196]

const SubFooter = () => {
    return (

        <footer className="footer p-6 text-base-content rounded bg-cover bg-center" style={{ backgroundImage: `url(${subFooterBg})` }}>
            <div className='w-full flex justify-between'>
                <aside>
                    <p className='hover:text-[#D2C196] font-rancho text-xl'>Copyright © 2024 - All right reserved by Tour Mentor</p>
                </aside>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </div>

        </footer>
    );
};

export default SubFooter;