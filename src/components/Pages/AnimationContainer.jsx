
import { useTypewriter } from 'react-simple-typewriter'
const AnimationContainer = () => {
    const [text] = useTypewriter({
        words: ['Bangladesh', 'Thailand', 'Malaysia', 'Indonesia','Vietnam','cambodia'],
        loop: 0
      })
    return (
        <div className="mt-12">
            <div className="text-center w-full">
                <h1 className="text-4xl font-playFair font-bold">
                    Discover the Diversity:
                    <br />
                     Southeast Asia Vibrant Tourism Zone
                </h1>
            </div>
            <div className="text-center w-full mt-8">
                <h3 className="text-2xl font-rancho">In summer, you can go on refreshing hikes in the mountains, relax on sun-kissed beaches,
                <br /> or explore bustling cities bursting with cultural delights in : <span className='text-blue-500'>{text}</span> </h3>
            </div>

        </div>
    );
};

export default AnimationContainer;