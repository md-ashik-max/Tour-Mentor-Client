import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import logo from '../../assets/company logo.png'

const Footer = () => {
    return (
        <div className='md:flex justify-around items-center'>
            <div>
                <footer className="footer p-10 md:px-0 md:py-10 text-primary-content">
                    <aside>
                    <img className="w-12 h-12" src="https://i.ibb.co/b59v5m2/company-logo.png" alt="" />
                    <h3 className="text-3xl font-bold text-[#2095AE] font-niconne">Tour <span className="text-yellow-400">Mentor</span></h3>
                        <p className='text-xl text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your
                            <br /> memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4 my-6'>
                            <FaFacebook className='text-[#2095AE] text-4xl'></FaFacebook>
                            <FaTwitter className='text-[#2095AE] text-4xl'></FaTwitter>
                            <FaInstagram className='text-[#2095AE] text-4xl'></FaInstagram>
                            <FaLinkedin className='text-[#2095AE] text-4xl'></FaLinkedin>
                        </div>
                        <h3 className='font-rancho text-[#2095AE] text-[45px] mb-6'>Get in Touch</h3>
                        <p className='text-xl text-[#1B1A1A]'>+88 01533 333 333</p>
                        <p className='text-xl text-[#1B1A1A]'>info@gmail.com</p>
                        <p className='text-xl text-[#1B1A1A]'>72, Wall street, King Road, Dhaka</p>
                    </aside>
                </footer>
            </div>
            <div className='flex flex-col justify-center p-10 md:p-0'>
                <h3 className='font-rancho text-[#2095AE] text-[45px] my-6'>Contact with us</h3>
                <input type="text" placeholder="Name" className="input input-bordered w-full  hover:border-2 hover:border-[#2095AE]" />
                <input type="text" placeholder="Email" className="input input-bordered w-full  my-4 hover:border-2 hover:border-[#2095AE]" />
                <textarea className="textarea textarea-bordered hover:border-2 hover:border-[#2095AE]" placeholder="Message"></textarea>
                <button className='my-6 text-2xl text-[#2095AE] font-rancho rounded-full border-2 border-[#2095AE] hover:bg-[#2095AE] hover:text-white'>Send Message</button>
            </div>

        </div>
    );
};

export default Footer;