/* eslint-disable */
import strategy from '../assets/svg/services/strategy.svg';
import design from '../assets/svg/services/design.svg';
import appDev from '../assets/svg/services/appDev.svg';
import qaTesting from '../assets/svg/services/qaTesting.svg';
import launch from '../assets/svg/services/launch.svg';
import commitment from '../assets/svg/services/commitment.svg';


import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer,  FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";


export const serviceIntro = {
    description1: "We cover all the bits and pieces needed to develop a top-notch, innovative mobile product, from strategy, to design and coding all the product components.",
    description2: "We work agile: two-week sprints and stand-ups ensure a fast delivery and an effective communication with the client. Our Product Discovery Workshops, Mobile MVP solutions and accurate Prototypes bring our clients clarity and amazing product value. We always advise on fast validation and doing user testing as early and as often as possible."

}
           
   
export const servicesData = [
    {
        id: 1,
        title: 'Product Strategy',
        image: strategy,
        icon: <BiPencil /> ,
        desc:"Our team of agile thinkers is made up of specialists in every area of the mobile application lifecycle. We’re able to translate the market and user data into effective strategies that bring you closer to your business goals, improving the bottom line.",

    },
    {
        id: 2,
        title: 'UI/UX Design',
        image: design,
        icon: <AiOutlineMail />,
        desc:"We’ve got a user-centered mobile app design philosophy that guides our every creative move. Our app design department is specialized in decoding the user’s wants and needs, making for well-informed UI and UX decisions.",
    },

    {
        id: 3,
        title: 'App Development',
        image: appDev,
        icon: <BsCodeSlash />,
        desc:"We develop high-quality applications from one end to the other. And we do it well. Intuitive, engaging, and scalable – that’s our apps in a nutshell. Our engineering is agile to ensure an efficient and effective collaboration.",
    },
    {
        id: 4,
        title: 'QA & Testing',
        image: qaTesting,
        icon: <FaCameraRetro />,
        desc:"We’ll be tapping, swiping,  and pushing the app until every last bug is fixed. We’ll make sure that your mobile app is in top shape for its app store launch and that it will make good on its promise. While adhering to the industry standards and best practices, everytime. ",
    },
    {
        id: 5,
        title: 'The Launch',
        image: launch,
        icon: <FaVideo />,
        desc:"Think of us like your senior product team you never thought you could afford. We’re a bunch of strategists, designers, coders and product managers who bring hands on expertise based on years of experience in building, launching, maintaining and growing mobile products.",
    },
    {
        id: 6,
        title: 'Our Commitment',
        image: commitment,
        icon: <FaTabletAlt />,
        desc:"We offer a 45 day warranty period on all the products we build. We encourage our clients to hire a third-party consultant to vigrously test our products, and find a bug or two. For service-level agreements we offer various models to suit your budget and requirments.",
    },

]

// Uncomment your required service.
// Couldn't find the required services? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.