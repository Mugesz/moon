import React from 'react'
import './hero.css';
import moon from '../../assets/moons.png';
import imgs from '../../assets/imgs.png'

const Hero = () => {
return (
<div>
<div className="top">
<h1>moonrepo</h1>
<h3>New era of productivity tooling</h3>
<p>From build to deploy,moonrepo is a better way to manage codebases,save developer time,and boost your business</p>
</div>
           {/* ========================1 part======================= */}

<div className="system_found">
<div className="super">
    <h5>A system for a solid foundation</h5>
    <div className="img1">
        <img src={moon} alt="" width='110'  />
        <h1>Superchange your codebase</h1>
    </div>
    <p>For repositories with multiple projects, any number of language, and team members constantly pushing changes, our task runner <span>moon</span>will helps simply the experience of working in and maintaining your codebase</p>
    <button>Learn more about moon</button>
 </div>

 <div className="flex">
 <div className="effic">
    <div className="euro">
    <h2><i class="fas fa-euro-sign"></i><span className='task'>Efficent task orchestation</span></h2>
    </div>
    <p>Never run the same task twice. with our smart hashing,robust caching, and efficent task execution ,moon will avoid unnecessary work</p>
 </div>

 <div className="effic">
    <div className="euro">
    <h2><i class="fas fa-toolbox"></i><span className='task'>Better project organization</span></h2>
    </div>
    <p>Neatly organize your codebase, declare ownership information, and simplify project discovery.</p>
 </div>

 <div className="effic">
    <div className="euro">
    <h2><i class="fas fa-toolbox"></i><span className='task'>Integrated development environment</span></h2>
    </div>
    <p>With our <span> integrated toolchain,</span> development environments will be spun up in minutes, ensuring the exact tools and versions are used across developers and machines.</p>
 </div>

 </div>


 </div>

 {/* ==========================2 part========================= */}

 <div className="system-two">
 <div className="overall-img">
 <div className="oneimgr">
    <img src={imgs} alt=""  width='50%' />
 </div>

 <div className="imgs">
    <img src={imgs} alt="" />
 </div>
 </div>

 <div className="pipeline">
    <h5>A service to expand to the cloud</h5>
    <div className="img1">
        <img src={moon} alt="" width='110'  />
        <h1>Accelerate your pipelines</h1>
    </div>
    <p>With our hosted service moonbase, easily cache build artifacts to reduce CI times, gain insight into your CI pipelines, track the health of your repositories, and overall cut costs.</p>
    <button className='moonbase'>Learn more about moonbase</button>
 </div>


 </div>

 {/* ==================3 part ================= */}

 <div className="system_three">
<div className="automate">
    <h5>Automate your environments</h5>
    <div className="img1">
        <img src={moon} alt="" width='110'  />
        <h1>Automate your environments</h1>
    </div>
    <p>Remove the hassle of managing and enforcing specific versions of programming languages across teams or projects. With <span>proto</span> , our modern toolchain manager, this entire workflow is automated away through a single tool.</p>
    <button>Learn more about photo</button>
 </div>

 <div className="flex">
 <div className="effis">
    <div className="euro">
    <h2><i class="fas fa-podcast"></i><span className='task'>Multi-language support</span></h2>
    </div>
    <p>Manage versions of multiple languages and dependency managers through a single interface. A single source of truth.</p>
 </div>

 <div className="effis">
    <div className="euro">
    <h2><i class="fas fa-leaf"></i><span className='task'>Contextual version detection</span></h2>
    </div>
    <p>Detects and infers versions and semantics from a language's ecosystem for maximum compatibility and interoperability.</p>
 </div>

 <div className="effis">
    <div className="euro">
    <h2><i class="fas fa-thunderstorm"></i><span className='task'>Lightspeed interface</span></h2>
    </div>
    <p>Download, install, and run tools with lightspeed, thanks to our Rust based foundation.</p>
 </div>
 </div>
 </div>


       {/* ================== 4part===================== */}

       <div className="small_part">
       <div className="small-img">
       <h3>Used by these innovative companies</h3>
       </div>

       <div className="imgs">
        <h1><i class="fas fa-cube"></i>Depot</h1>
        <h1>(GALLERY)</h1>
        <h1><i class="fas fa-plus-circle"></i></h1>
       </div>
        

       </div>
 </div>
 )
}

export default Hero
