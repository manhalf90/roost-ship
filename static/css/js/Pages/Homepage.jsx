import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import AOS from "aos";
// import "aos/dist/aos.css";
import gsap from 'gsap';
import prefix from '../Components/Animations/prefix'
import Accordion from '../Components/Accordion/Accordion';
import { useNavigate } from 'react-router';
import { LargeHeroEeg, MobileHeroEeg } from '../Components/Svg/Homepage';
import PieChartDistribution from '../Components/Chart/PieChartDistribution';

const Homepage = () => {
    const navigate = useNavigate()
    // const refreshAos = () => {
    //     AOS.refresh();
    // }

    // useEffect(() => {
    //     AOS.init({
    //         once: true,
    //     });
    //     window.addEventListener('scroll', refreshAos);
    // }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            prefix.MoveInvinite(".wrapText", true, ".textMoveLeft", false, false)
        },);
        return () => ctx.revert();
    }, [])


    // const [inputText, setInputText] = useState('Coming Soon');
    const inputText = '0xeD899bfDB28c8ad65307Fa40f4acAB113AE2E14c';

    const handleCopyText = () => {
        // Salin teks dari input field ke clipboard
        navigator.clipboard.writeText(inputText)
            .catch((err) => {
                console.error('Err: ', err);
            });
    };

    const faqData = [
        {
            title: "WHO IS ROOST?",
            desc: `ROOST is the champion of the Base ecosystem. 
            Protecting, vibing and growing the $ROOST community.`
        },
        {
            title: "WHAT CHAIN IS <span class='text-[#3A80FE]'>$ROOST</span> ON?",
            desc: "$ROOST is on Base."
        },
        {
            title: "HOW CAN I BUY <span class='text-[#3A80FE]'>$ROOST</span>?",
            desc: "Make sure you download the Metamask Wallet app or browser extension for you phone. Simply purchase $ROOST using BASE-ETH through a DEX like Uniswap. Easy!"
        },
    ]

    const [toogle, settoogle] = useState(-1)

    const toogleClick = (e) => {
        console.log(e)
        if (e === toogle) {
            settoogle(-1)
        } else {
            settoogle(e)
        }
    }

    const dataChartDistributionOne = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            data: [50, 15, 15, 10, 10],
            backgroundColor: ['#7B90FF', '#7BC8FF', '#FF4652', '#FFDD71', '#A5EE79'],
            borderColor: '#000',
            borderWidth: 2,
        }]
    };

    const dataChartDistributionTwo = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            data: [50, 50],
            backgroundColor: ['#7B90FF', '#FFDD71'],
            borderColor: '#000',
            borderWidth: 2,
        }]
    };

    return (
        <Fragment>
            <div className='w-full h-full overflow-hidden relative'>
                <div className='z-50 absolute right-6 top-6'>
                    <div onClick={() => navigate('/tokenomics')} className='bg-[#FFDD71] pl-2 pr-2 py-1 lg:py-2 rounded-full flex items-center gap-3 border-[5px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-white transition-all duration-300 hover:shadow-none cursor-pointer'>
                        {/* <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Group 200.png" className='xl:w-auto w-[40px] lg:w-[48px]' alt="" /> */}
                        <div className='px-6 py-0.3 text-[18px] sm:text-[20px] md:text-[24px] xl:text-[32px]'>PRESALE</div>
                    </div>
                </div>
                <section className='maxH650:min-h-screen bg-[#E1ECF7] relative pt-[60px] pb-[40px] md:pb-0 lg:pt-[40px] ss:pt-[80px]'>
                    <Container className='relative'>
                        <div className="text-center md:mb-0 mb-[3rem]">
                            <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/logo.svg" className='mx-auto -mb-[16px]' alt="" />
                        </div>

                        <div className="relative md:inline-block -mb-[0.5rem] hidden">
                            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[78%] w-max mx-auto md:mx-0 -mb-[5rem] xxs:-mb-[6rem] md:mb-0 pl-[20vw] xxs:pl-[24vw] xs:pl-[8vw] md:pl-0">
                                <div className="relative inline-block">
                                    <div className="inline-block text-left absolute top-[42%] md:top-[45%] xl:top-1/2 -translate-y-1/2 left-[22%] right-[10%]">
                                        <h4 className='text-[20px] xs:text-[24px] lg:text-[32px] xl:text-[44px] text-center uppercase'>Hey there, I'm Roost, <br /> champion of the <br /> BASE ecosystem.</h4>
                                    </div>

                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/sadsadsad.svg" className='w-[400px] lg:w-[500px] xl:w-auto hidden md:block' alt="" />


                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/sdsfsfsd.svg" className='w-[250px] xs:w-[300px] md:hidden' alt="" />

                                    <LargeHeroEeg telegram='https://t.me/BaseRoostCoin' twitter='https://x.com/roostcoin?s=21&t=nivIN4WMitrGtb9V5IJ_wA' classData={'absolute w-[110px] xs:w-[140px] lg:w-[180px] xl:w-[240px] -right-[0] xx:-right-[2rem] md:-right-[2.5rem] lg:-right-[4rem] bottom-[0] md:-bottom-[3rem] lg:-bottom-[2rem] xl:-bottom-[6rem]'} />

                                    {/* <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Group 3.png" className='absolute w-[110px] xs:w-[140px] lg:w-[180px] xl:w-[240px] -right-[0] xx:-right-[2rem] lg:-right-[4rem] bottom-[0] md:-bottom-[2rem] xl:-bottom-[6rem]' alt="" /> */}
                                </div>
                            </div>
                            <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Frame 202.svg" className='-ml-[2rem] ss:ml-[0] w-[360px] lg:w-[400px] xl:w-auto' alt="" />
                        </div>

                        <div className="text-center md:hidden">
                            <h5 className='text-[28px] text-[#343230] mb-[2rem] uppercase'>Hey there, I'm Roost, <br /> champion of the BASE  <br className='ss:block hidden' /> ecosystem.</h5>

                            {/* <a href="#!" target='_blank' className='transition-all duration-300 hover:scale-[1.1] inline-block text-[18px] sm:text-[20px] lg:text-[32px] px-6 py-2 md:!py-3 rounded-full text-white border-[5px] !border-Mblack bg-[#3A80FE]'>
                                BUY $ROOST
                            </a> */}

                            <div className="mt-[1.5rem]">
                                <MobileHeroEeg telegram='https://t.me/BaseRoostCoin' twitter='https://x.com/roostcoin?s=21&t=nivIN4WMitrGtb9V5IJ_wA' classData={"mx-auto"} />
                                {/* <img src="./../images/rtretewer.svg" className='mx-auto' alt="" /> */}
                            </div>
                        </div>
                    </Container>
                </section>

                <section className='overflow-hidden w-full py-[20px] bg-[#3A80FE] border-t-[4px] border-b-[4px] !border-Mblack relative z-[1]'>
                    <div className="wrapText flex items-center w-max gap-3">
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                        <h5 className='text-[32px] text-white text-outlineBlack-thin [text-shadow:-4px_3px_0px_#000000] textMoveLeft w-max'>$ROOST</h5>
                    </div>
                </section>
                <section className='bg-[#A6C2FA] '>
                    <Container className='overflow-visible'>
                        <h2 className='text-center text__72 text-white text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-4'>CONTRACT ADDRESS</h2>
                        <div className="w-full md:w-[65%] xl:w-[58%] mx-auto">
                            <div className="flex items-center gap-3 bg-white pl-4 xs:pl-6 pr-1 xs:pr-3 py-1 xs:py-2 rounded-full border-[3px] !border-Mblack">
                                <input type="text" className='w-full bg-transparent border-none outline-none hover:active:focus:border-none hover:active:focus:outline-none text__20 font-Varela' value={inputText} />
                                <div className='text__20 text-Mblack px-4 xs:px-6 py-1 xs:py-2 rounded-full bg-[#3A80FE] border-[3px] !border-Mblack cursor-pointer transition-all duration-300 hover:scale-[1.1]' onClick={handleCopyText}>COPY</div>
                            </div>
                            <div className="mb-[2rem] lg:mb-[3rem]"></div>
                            <div className="flex items-center gap-4 justify-center mb-[2rem] lg:mb-[3rem]">
                            <a href="https://www.dextools.io/app/en/base/pair-explorer/0xc08ae9e9ec06e3f5ee779178625c7180efc9cf21?t=1715276119779" target='_blank' className='bg-[#3A80FE] pl-1 pr-2 py-1 lg:py-1.5 rounded-full flex items-center gap-3 border-[5px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-white transition-all duration-300 hover:shadow-none'>
                                <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/dextools.png" className='xl:w-auto w-[40px] lg:w-[48px]' alt="" />
                                <div className='text-[18px] sm:text-[20px] md:text-[24px] xl:text-[32px]'>DEX TOOLS</div>
                            </a>
                        </div>
                        </div>
                        
                        
                        

                        {/* <div className="w-full md:w-[65%] xl:w-[58%] mx-auto">
                            <div className="flex items-center gap-3 bg-white pl-4 xs:pl-6 pr-1 xs:pr-3 py-1 xs:py-2 rounded-full border-[3px] !border-Mblack">
                                <input type="text" className='w-full bg-transparent border-none outline-none hover:active:focus:border-none hover:active:focus:outline-none text__20 font-Varela' value={inputText} />
                                <div className='text__20 text-Mblack px-4 xs:px-6 py-1 xs:py-2 rounded-full bg-[#3A80FE] border-[3px] !border-Mblack cursor-pointer transition-all duration-300 hover:scale-[1.1]' onClick={handleCopyText}>COPY</div>
                            </div>
                        </div>
                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/fdhdfhfdhdf.svg" className='mx-auto mt-[3rem] lg:mt-[4rem] lg:block hidden' alt="" /> */}
                    </Container>
                    {/* <div className=" mt-[3rem] lg:mt-[4rem] lg:hidden">
                        <div className="w-[340px] mx-auto">
                         
                        </div>

                    </div> */}
                    {/* <div className="text-center lg:hidden -mt-[1rem]">
                        <a href="#!" target='_blank' className='transition-all duration-300 hover:scale-[1.1] inline-block text-[18px] sm:text-[20px] lg:text-[32px] px-6 py-2 md:!py-3 rounded-full text-white border-[5px] !border-Mblack bg-[#3A80FE] mt-[2rem]'>
                            BUY $ROOST
                        </a>
                    </div> */}
                </section>

                <section className='bg-[#E1ECF7] pb-0 pt-[40px] ss:pt-[80px]'>
                    <Container className='relative z-[1]'>
                        <div className=" mb-[2.5rem]">
                            <h2 className='text-center text__122 text-[#3A80FE] text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-1'>ROOST 101</h2>
                            <div className="flex justify-center items-center gap-2">
                                <p className='text-center text__32'>$ROOST is on</p> <img src="./../images/Group 216.svg" className='lg:w-auto md:w-[80px] w-[60px]' alt="" />
                            </div>
                        </div>
                        <div className="lg:w-[830px] mx-auto mb-[2rem]">

                            <Row>
                                <Col md={6} className="relative text-center">
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 3.png" className='md:block hidden absolute right-0  translate-x-[67%] lg:translate-x-[78%] top-[65%] -translate-y-1/2' alt="" />
                                    <div className="relative bg-white md:w-[350px] lg:w-[440px] px-[2rem] md:px-[1.5rem] py-6 rounded-[40px] border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-center mx-auto md:mx-0 w-full xx:w-[80%] md:inline-block">
                                        <h2 className='text-center text__28 text-[#3A80FE] text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000] mb-3'><div className="flex items-center gap-x-2 justify-center">ADD <img src="./../images/Group 216.svg" className="md:w-[80px] w-[60px]" alt="" /></div>
                                            TO METAMASK
                                        </h2>
                                        <p className='font-Varela  text__14 text-[#6E3B26] leading-[1.2]'>Download & install the Metamask Wallet either from the app store on your phone or the browser extension for desktop.</p>

                                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/eegn (1).png" className=' w-[100px] md:w-[140px] xl:w-[183px] absolute -left-[3rem] md:-left-[6rem] lg:-left-[7rem] xl:-left-[9.5rem] -bottom-[1.4rem] lg:-bottom-[1rem]' alt="" />
                                    </div>
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 1 (2).png" className='mx-auto md:hidden' alt="" />
                                </Col>
                                <Col md={6} className="relative md:block hidden"> </Col>
                                <Col md={6} className="relative md:block hidden"> </Col>
                                <Col md={6} className="relative text-center">
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 2.png" className='md:block hidden absolute left-0  -translate-x-[57%] lg:-translate-x-[70%] top-[65%] -translate-y-1/2' alt="" />
                                    <div className="relative bg-white md:w-[300px] lg:w-[365px] px-[1.5rem] lg:px-[2.5rem] py-6 rounded-[40px] border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-center mx-auto md:mx-0 w-full xx:w-[80%] md:inline-block md:-mt-[1rem] xl:-mt-[2rem]">
                                        <h2 className='text-center text__28 text-[#3A80FE] text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000] mb-3 md:mr-[3rem]'>LOAD UP <br />
                                            ETH</h2>
                                        <p className='font-Varela  text__14 text-[#6E3B26] leading-[1.2]'>Head over to bridge.base.org, connect your wallet on the Ethereum blockchain. Choose how much ETH you would like to bridge from the erc20 network to Base. Remember to leave enough for gas fees.</p>

                                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/eegn (4).png" className=' w-[100px] md:w-[140px] xl:w-[183px] absolute -right-[2rem] md:-right-[5rem] xl:-right-[4rem] -top-[3rem] md:-top-[4rem] xl:-top-[6rem]' alt="" />
                                    </div>
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 1 (2).png" className='mx-auto md:hidden' alt="" />
                                </Col>

                                <Col md={6} className="relative text-center">
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 3.png" className='md:block hidden absolute right-0   translate-x-[49%] lg:translate-x-[60%] top-[65%] -translate-y-1/2' alt="" />
                                    <div className="relative bg-white md:w-[300px] lg:w-[344px] px-[1.5rem] lg:px-[2.5rem] py-6 rounded-[40px] border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-center mx-auto md:mx-0 w-full xx:w-[80%] md:inline-block ">
                                        <h2 className='pl-[2rem] text-center text__28 text-[#3A80FE] text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000] mb-3'>BUY $ROOST</h2>
                                        <p className='md:pl-[2rem] font-Varela  text__14 text-[#6E3B26] leading-[1.2]'>Head over to Uniswap and paste the $ROOST contract Address listed on this website to swap your ETH.</p>

                                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/eegn (2).png" className=' w-[100px] md:w-[140px] xl:w-[183px] absolute -left-[3rem] md:-left-[5rem] lg:-left-[7rem] xl:-left-[7rem] -bottom-[1rem] md:bottom-[2rem]' alt="" />
                                    </div>
                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Vector 1 (2).png" className='mx-auto md:hidden' alt="" />
                                </Col>
                                <Col md={6} className="relative md:block hidden"> </Col>
                                <Col md={6} className="relative md:block hidden"> </Col>
                                <Col md={6} className="relative text-center">
                                    <div className="relative bg-white md:w-[320px] lg:w-[394px] px-[1.5rem] lg:px-[2.5rem] py-6 rounded-[40px] border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-center mx-auto  w-full xx:w-[80%]  md:inline-block md:-mt-[1rem]  xl:-mt-[2rem] md:!-ml-[6rem]">
                                        <h2 className='text-center text__28 text-[#3A80FE] text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000] mb-3 md:pr-[1rem] lg:pr-0'>Add $ROOST <br />
                                            to your Wallet</h2>
                                        <p className='font-Varela  text__14 text-[#6E3B26] leading-[1.2] md:pr-[1rem] lg:pr-0'>Now all you have to do is add the $ROOST contract address to your Metamask Wallet for your $ROOST tokens to show. Welcome aboard!</p>


                                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/eegn (3).png" className=' w-[100px] md:w-[140px] xl:w-[183px] absolute -right-[3rem] md:-right-[6rem] xl:-right-[9rem] -top-[3rem] xl:-top-[2rem]' alt="" />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/dfdsfsdfdf.svg" className='mx-auto ss:block hidden -mb-[3rem] xs:-mb-[4rem] md:-mb-[5rem] lg:-mb-[8rem] xl:-mb-[9rem]' alt="" />
                    </Container>
                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/tututyyiy.svg" className='w-full object-cover -mb-[0.5rem] ss:block hidden' alt="" />
                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/fssdfsdfsd.svg" className='w-full object-cover -mb-[0.5rem] ss:hidden' alt="" />
                </section>

                <section className='bg-[#A6C2FA] '>
                    <Container className='overflow-visible'>
                        <h2 className='text-center text__72 text-white text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-4'>ROOST TOKENOMICS</h2>

                        <div className="mb-[2rem]">
                            <div className="p-[2rem] xs:p-[3rem] rounded-[40px] bg-white border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] relative">
                                <h2 className='text__64 text-[#3A80FE] text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-4 lg:hidden text-center'>Supply Breakdown</h2>
                                <Row className='justify-between'>
                                    <Col lg={6} className='lg:!my-auto flex items-center justify-center mb-3'>
                                        <div className="w-full ss:!w-[350px]">
                                            <PieChartDistribution data={dataChartDistributionOne} />
                                        </div>
                                    </Col>
                                    <Col lg={6} className='my-auto'>
                                        <h2 className='text__64 text-[#3A80FE] text-outlineBlack [text-shadow:-4px_6px_0px_#000000] hidden lg:block'>Supply Breakdown</h2>

                                        <h5 className='my-3 text__32'>Total Supply: 1 Billion Tokens</h5>

                                        <div className="grid grid-cols-1 gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#7B90FF] border-[2px] !border-Mblack"></div>
                                                <p className='text__18'>50% of Supply to Presale Participants</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#7BC8FF] border-[2px] !border-Mblack"></div>
                                                <p className='text__18'>15% of Supply to LP</p>
                                            </div>
                                            <div className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#FF4652] border-[2px] !border-Mblack"></div>
                                                    <div>
                                                        <p className='text__18'>15% of Tokens for Exchanges + Market Making</p>
                                                    </div>
                                                </div>
                                                <ol className='list-disc pl-[3rem]'>
                                                    <li>10% for CEX</li>
                                                    <li>5% for Market Making</li>
                                                </ol>
                                            </div>
                                            <div className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#FFDD71] border-[2px] !border-Mblack"></div>
                                                    <div>
                                                        <p className='text__18'>10% Marketing</p>
                                                    </div>
                                                </div>
                                                <ol className='list-disc pl-[3rem]'>
                                                    <li>5% Strategic Partnerships</li>
                                                    <li>5% Advertisement</li>
                                                </ol>
                                            </div>
                                            <div className="">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#A5EE79] border-[2px] !border-Mblack"></div>
                                                    <div>
                                                        <p className='text__18'>10% Team/Advisors</p>
                                                    </div>
                                                </div>
                                                <ol className='list-disc pl-[3rem]'>
                                                    <li>5% Team (Vested for 1 Year)</li>
                                                    <li>5% Advisors</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-[2rem] xs:p-[3rem] rounded-[40px] bg-white border-[2px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] relative">
                                <h2 className=' text__64 text-[#3A80FE] text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-4 text-center lg:hidden'>Presale Breakdown</h2>
                                <Row className='justify-between'>
                                    <Col lg={6} className='lg:!my-auto flex items-center justify-center mb-3'>
                                        <div className="w-full ss:!w-[350px]">
                                            <PieChartDistribution data={dataChartDistributionTwo} />
                                        </div>
                                    </Col>
                                    <Col lg={6} className='my-auto'>
                                        <h2 className=' text__64 text-[#3A80FE] text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-3 lg:block hidden'>Presale Breakdown</h2>

                                        <div className="grid grid-cols-1 gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#7B90FF] border-[2px] !border-Mblack"></div>
                                                <p className='text__18'>50% of Raise to LP</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full bg-[#FFDD71] border-[2px] !border-Mblack"></div>
                                                <p className='text__18'>50% of Raise for expenses/development/distribution</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* <div className="w-full md:w-[65%] xl:w-[58%] mx-auto">
                            <div className="flex items-center gap-3 bg-white pl-4 xs:pl-6 pr-1 xs:pr-3 py-1 xs:py-2 rounded-full border-[3px] !border-Mblack">
                                <input type="text" className='w-full bg-transparent border-none outline-none hover:active:focus:border-none hover:active:focus:outline-none text__20 font-Varela' value={inputText} />
                                <div className='text__20 text-Mblack px-4 xs:px-6 py-1 xs:py-2 rounded-full bg-[#3A80FE] border-[3px] !border-Mblack cursor-pointer transition-all duration-300 hover:scale-[1.1]' onClick={handleCopyText}>COPY</div>
                            </div>
                        </div>
                        <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/fdhdfhfdhdf.svg" className='mx-auto mt-[3rem] lg:mt-[4rem] lg:block hidden' alt="" /> */}
                    </Container>
                    {/* <div className=" mt-[3rem] lg:mt-[4rem] lg:hidden">
                        <div className="w-[340px] mx-auto">
                         
                        </div>

                    </div> */}
                    {/* <div className="text-center lg:hidden -mt-[1rem]">
                        <a href="#!" target='_blank' className='transition-all duration-300 hover:scale-[1.1] inline-block text-[18px] sm:text-[20px] lg:text-[32px] px-6 py-2 md:!py-3 rounded-full text-white border-[5px] !border-Mblack bg-[#3A80FE] mt-[2rem]'>
                            BUY $ROOST
                        </a>
                    </div> */}
                </section>

                

                <section className='bg-[#A6C2FA] py-[40px] ss:py-[80px]'>
                    <Container>
                        <Row className="justify-center">
                            <Col xl={11}>
                                <Row>
                                    <Col md={6}>
                                        <h2 className='text__72 text-white text-outlineBlack [text-shadow:-4px_6px_0px_#000000] text-center md:!text-left mb-[2rem] md:mb-[0]'>TRADE YOUR
                                            QUESTIONS <br className='xl:block hidden' />
                                            FOR ANSWERS</h2>
                                    </Col>
                                    <Col md={6}>
                                        <div className="flex flex-wrap gap-y-4">
                                            {
                                                faqData.map((obj, idx) => {
                                                    return <div className="w-full">
                                                        <Accordion toogleClick={(e) => toogleClick(e)} toogle={toogle} title={obj.title} desc={obj.desc} id={idx} />
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='relative bg-[#E1ECF7] overflow-hidden pt-[40px] ss:pt-[80px] pb-0 md:!pb-[80px]'>
                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Group 213.svg" className='absolute left-0 bottom-0 lg:w-autp w-[90%] h-full hidden md:block' alt="" />

                    <Container className='relative z-[1]'>
                        <div className="text-center md:!text-right">
                            <Row className="justify-center">
                                <Col xl={11}>
                                    <Row className="justify-center md:justify-end">
                                        <Col md={6}>
                                            <h2 className='text-[64px] lg:text-[90px] xl:text-[122px] text-white text-outlineBlack [text-shadow:-4px_6px_0px_#000000] mb-[2rem] lg:mb-[2.5rem] tracking-tight mb-2 ss:mb-6'>SOCIALS</h2>

                                            <h5 className='text-[24px] xl:text-[28px] text-[#3A80FE] text-outlineBlack-thin tracking-tight leading-[1] [text-shadow:-4px_3px_0px_#000000] mb-4'>JOIN THE $ROOST COMMUNITY</h5>
                                            
                                            <h5 className='text-[24px] xl:text-[28px] text-[#3A80FE] text-white text-outlineBlack [text-shadow:-1px_1px_0px_#000000] mb-4'>info@roost.wtf</h5>
                                            
                                            <div className="flex items-center gap-4 justify-center md:justify-end mb-[2rem] lg:mb-[3rem]">
                                                { <a href='https://t.me/BaseRoostCoin' target='_blank' rel="noreferrer" className="transition-all duration-300 hover:shadow-none w-[50px] lg:w-[65px] xl:w-[88px] h-[50px] lg:h-[65px] xl:h-[88px] rounded-[12px] lg:rounded-[20px] bg-white  border-[3px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] flex items-center justify-center">
                                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/basil_telegram-solid.svg" className='lg:w-auto w-[32px]' alt="" />
                                                </a> }
                                                <a href='https://x.com/roostcoin?s=21&t=nivIN4WMitrGtb9V5IJ_wA' target='_blank' rel="noreferrer" className="transition-all duration-300 hover:shadow-none w-[50px] lg:w-[65px] xl:w-[88px] h-[50px] lg:h-[65px] xl:h-[88px] rounded-[12px] lg:rounded-[20px] bg-white  border-[3px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] flex items-center justify-center">
                                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/basil_telegram-solid (1).svg" className='lg:w-auto w-[32px]' alt="" />
                                                </a>
                                            </div>

                                            <div className="inline-block mb-[3rem] md:mb-[4rem] lg:mb-[6rem]">
                                                <a href="https://www.dextools.io/app/en/base/pair-explorer/0xec9259978b2007e190b6f6eb821ad47b9857cd3d?t=1711484819014" target='_blank' className='bg-[#3A80FE] pl-2 pr-4 py-1 lg:py-2 rounded-full flex items-center gap-3 border-[5px] !border-Mblack [box-shadow:-4px_6px_0px_#000000] text-white transition-all duration-300 hover:shadow-none'>
                                                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/Group 200.png" className='xl:w-auto w-[40px] lg:w-[48px]' alt="" />
                                                    <div className='text-[18px] sm:text-[20px] md:text-[24px] xl:text-[32px]'>BUY $ROOST</div>
                                                </a>
                                            </div>

                                            <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/sasas.svg" className='ml-auto mr-auto md:mr-0 md:!ml-auto md:w-auto w-[200px]' alt="" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <img fetchpriority="high" decoding="async" data-nimg="fill" src="./../images/fsfsfsdfgsdg.svg" className='w-full object-cover md:hidden' alt="" />
                </section>
            </div>
        </Fragment >
    )
}

export default React.memo(Homepage);
