import AllInclusiveTwoToneIcon from '@mui/icons-material/AllInclusiveTwoTone';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ShieldIcon from '@mui/icons-material/Shield';
import Paper from '@mui/material/Paper';
import TextType from '../compoents/HeroText';
import ImagesinHero from './ImagesInHero';
import "../Styles/Hero.css"

export default function Hero() {

    let styles = {
        marginTop: "25px",
        textAlign: "start"
    }


    return (

        <>
            <div className="ResumeBulider gap-0">

                <div className='Combine'>

                    <div className="smallcont">
                        <p><AllInclusiveTwoToneIcon sx={{ height: "18px" }} />AI-Powered Resume Bulider</p>
                    </div>
                    <div className="BoldContent" style={styles}>
                        <TextType className='textsize'
                            text={[`Resume Mint`, "Build Your Perfect Resume in Minutes", "Boost Your Resume in one Minutes"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                        <p>Create professional resumes with our intelligent builder and get instant feedback to improve your chances of landing your dream job.</p>
                        <button>Start Buliding <ArrowRightAltIcon id="move" /></button>
                    </div>

                </div>

                <div>
                    <ImagesinHero />
                </div>

            </div>

            <div className="Features">
                <div className="TwolineContent">
                    <h1>Powerful <span style={{ color: "#129db6" }}>Features</span></h1>
                    <p>Everything you need to create an outstanding resume</p>
                </div>
                <div className="FourBox">
                    <Paper elevation={3} className='onecolor' sx={{backgroundColor:"#161748",borderRadius:"20px"}}>
                    <div id="one">
                        <DescriptionIcon sx={{ width: "60px", height: "100px", color: "#129db6" }} />
                        <h2>Smart Builder</h2>
                        <p>Interactive resume builder with real-time preview and professional templates</p>
                    </div>
                    </Paper>
                    <Paper elevation={3} className='onecolor' sx={{backgroundColor:"#161748",borderRadius:"20px"}}>
                    <div id="one">
                        <AnalyticsIcon sx={{ width: "60px", height: "100px", color: "#129db6" }} />
                        <h2>AI Analyzer</h2>
                        <p>Get intelligent feedback and suggestions to improve your resume content</p>
                    </div>
                    </Paper>
                    <Paper elevation={3} className='onecolor' sx={{backgroundColor:"#161748",borderRadius:"20px"}}>
                    <div id="one">
                        <ElectricBoltIcon sx={{ width: "60px", height: "100px", color: "#129db6" }} />
                        <h2>Instant Preview</h2>
                        <p>See your changes in real-time with our live preview feature</p>
                    </div>
                    </Paper>
                    <Paper elevation={3} className='onecolor' sx={{backgroundColor:"#161748",borderRadius:"20px"}}>
                    <div id="one">
                        <ShieldIcon className='iconcolor' sx={{ width: "60px", height: "90px", color: "#129db6",borderRadius:"40%" }} />
                        <h2>ATS Optimized</h2>
                        <p>Ensure your resume passes through applicant tracking systems</p>
                    </div>
                    </Paper>
                </div>
            </div>

            <div className="SuccesssRate">
                <div id="Successone">
                    <h1>50K+</h1>
                    <p>Resume Created</p>
                </div>
                <div id="Successone">
                    <h1>98%</h1>
                    <p>Success Rate</p>
                </div>
                <div id="Successone">
                    <h1>24/7</h1>
                    <p>Support</p>
                </div>
            </div>

            <div className="BuildResume">
                <h1>Ready to Build Your Resume?</h1>
                <p>Join thousand of professionals who have successfully landed thier dream jobs</p>
                <button>Start Bulding Now</button>
            </div>

        </>

    )
}

// bg-[#161748]