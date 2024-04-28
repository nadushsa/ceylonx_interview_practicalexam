import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <img src='/img/dotLine.png' className='dotLine'/>
            <img src='/img/rocket.png' className='rocket'/>

            <div className='featured'>
                <div className='container'>
                    <div className='row'>
                        <div className='left col-lg-6 col-md-6 col-sm-12 col-12'>
                            <h1>Making Kids Fall in Love with Math!</h1>
                            <p className='book'>Book your FREE class with age group</p>

                            <div className='row btnGroup'>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 3</button>
                                </div>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 4</button>
                                </div>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 5</button>
                                </div>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 6</button>
                                </div>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 7</button>
                                </div>
                                <div className='btnArea col-lg-3 col-md-3 col-sm-4 col-4'>
                                    <button>age - 8</button>
                                </div>
                            </div>

                            <button className='btnMain'>Book a free live class</button>

                            <p className='offer'><span className='₹0'>₹0</span> for first class <span className='off'>100% Off</span></p>

                            <p className='join'>Booked a demo already? <span>Join now</span></p>
                        </div>

                        <div className='right col-lg-6 col-md-6 col-sm-12 col-12'>
                            <img src='/img/featured.png' className='imgFeatured'/>
                            <img src='/img/commaStart.png' className='imgCommaStart'/>
                            <img src='/img/commaEnd.png' className='imgCommaEnd'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section1'>
                <div className='container'>
                    <h2 className='mathMastery'>Adaptive learning path + best teachers = Math mastery</h2>
                    <p className='mathWizard'>The guaranteed formula to be a Math wizard</p>

                    <div className='textboxArea'>
                        <div className='row'>
                            <div className='box col-lg-3 col-md-3 col-sm-6 col-6'>
                                <div className='boxPink'>
                                    <div className='mainPoint'>
                                        <img src='/img/imgPink.png' />
                                        <p>Professional Curriculum Helps Parents Rest Easy</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointPink.png' />
                                        <p>Systematic curriculum for kids ages 3-8</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointPink.png' />
                                        <p>Interactive AI content fosters and maintains kids' interest in learning</p>
                                    </div>
                                    
                                    <div className='point'>
                                        <img src='/img/pointPink.png' />
                                        <p>Immersive classes with interactive learning experiences</p>
                                    </div>
                                </div>
                            </div>

                            <div className='box col-lg-3 col-md-3 col-sm-6 col-6'>
                                <div className='boxOrange'>
                                    <div className='mainPoint'>
                                        <img src='/img/imgOrange.png' />
                                        <p>Personal Mentoring Service</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointOrange.png' />
                                        <p>Your Mentor provides 1-on-1 mentoring at any time</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointOrange.png' />
                                        <p>Daily reports keep you up to date on your child's learning</p>
                                    </div>
                                    
                                    <div className='point'>
                                        <img src='/img/pointOrange.png' />
                                        <p>Instant feedback keeps kids encouraged and motivated</p>
                                    </div>
                                </div>
                            </div>

                            <div className='box col-lg-3 col-md-3 col-sm-6 col-6'>
                                <div className='boxBlue'>
                                    <div className='mainPoint'>
                                        <img src='/img/imgBlue.png' />
                                        <p>A Math Learning App Kids Crave</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointBlue.png' />
                                        <p>Developed by early education specialists from Ivy League and other top universities</p>
                                    </div>

                                    <div className='point'>
                                        <img src='/img/pointBlue.png' />
                                        <p>Progressive learning pathways thoughtfully developed for each child</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='box masterBanner col-lg-3 col-md-3 col-sm-6 col-6'>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='section2'>
                <div className='container'>
                    <h2 className='culSkills'>Cultivate thinking skills from all aspects</h2>
                    <p className='ourExperts'>Our expert advisors can help you find the right workplace solution for you and your team</p>

                    <img src='/img/select.png' className='imgSelect' />

                    <img src='/img/section2Banner.png' className='imgBanner' />
                </div>
            </div>
        </div>
    );
}

export default Home;
