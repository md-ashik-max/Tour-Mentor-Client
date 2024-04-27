
import subFooterBg from '../../assets/sub-footer-bg.png'
// text-[#D2C196]

const SubFooter = () => {
    return (

        <footer className="footer footer-center p-6 text-base-content rounded bg-cover bg-center" style={{ backgroundImage: `url(${subFooterBg})` }}>
            <div>
                <aside>
                    <p className='hover:text-[#D2C196] font-rancho text-xl'>Copyright © 2024 - All right reserved by Tour Mentor</p>
                </aside>
            </div>

        </footer>
    );
};

export default SubFooter;