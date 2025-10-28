import { useState } from 'react'
import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
  }

  return (
    <div className='parent'>
      <section className='nav' style={{backgroundColor: menuOpen ? '#8DCB04' : '', transition: "background-color 0.2s linear"}}>
        <div className='nav-container'>
          { !menuOpen && <img className='nav-logo' src='/j-logo.svg'/>}
          { menuOpen && <img className='nav-logo' src='/j-dark.svg'/>}
          { !menuOpen &&<img onClick={handleMenuOpen} className='nav-options' src='/option.svg'/>}
          { menuOpen &&<img onClick={handleMenuClose} className='nav-options' src='/close.svg'/>}
          <div className='menu-container2'>
            <a className='menu-gallery' href='#gallery'>Services</a>
            <a className='menu-contact' href='#contact'>Contact</a>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='hero-container'>
          <div className='hero-main'>
            <p className='hero-main-mob'>Whatever it is, we'll talk through it</p>
            <p className='hero-main-desk'>Whatever it is, we’ll talk through it—<span className='hero-text-highlight'>I’m here to design for you.</span></p>
            <img className='hero-highlight' src='/highlight.svg'/>
            <img className='hero-highlight2' src='/highlight1.svg'/>
          </div>
          <div className='hero-description'>
            <p className='description-pri'>I'm here to design for you.</p>
            <p className='description-sec'>Design is about making your product or service look good so you don't scare clients away.
              You need to make them feel they can trust your offer.</p>
          </div>
        </div>
      </section>
      <section id="gallery" className='gallery'>
        <div className='gallery-container'>
          <div className='gallery-main'>
            <p>Below are <span className='gallery-highlight'>some services </span> I can <span className='gallery-highlight'>provide</span></p>
          </div>
          <div className='gallery-slides'>
            <img src='/services-m.svg' className='services'/>
            <img src='/services-d.svg' className='services1'/>
          </div>
        </div>
      </section>
      <section id="contact" className='contact'>
        <div className='contact-container'>
          <div className='contact-main'>Let's talk about your design needs</div>
          <div className='contact-options'>
            <div className='mail-option'>
              <img className='mail-icon' src='/mail-icon.svg' />
              <p className='contact-label'>Send me an email</p>
              <p className='contact-highlight'>residualcode6@gmail.com</p>
            </div>
            <div className='call-option'>
              <img className='call-icon' src='/call-icon.svg' />
              <p className='contact-label'>Let's talk on the phone</p>
              <p className='contact-highlight'>233 547 326 324</p>
            </div>
          </div>
        </div>
      </section>
      <section className='appreciation'>
        <div className='appreciation-container'>
          <div className='appreciation-text'>Your client is one good design away</div>
          <div className='appreciation-thanks'>
            <div className='gift-thanks'>
              <div className='gift-container'>
                <img className='gift-icon' src='gift-icon.svg' />
              </div>
              <div className='thanks-container'>
                <p className='thanks-highlight'>Thank <br/> you</p>
                <p className='thanks-highlight2'>Thank you</p>
                <p className='thanks-emphasis'>For taking the time to scroll through</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      { menuOpen && <section className='menu-overlay'>
        <div className='menu-container'>
          <a className='menu-gallery' href='#gallery'>Services</a>
          <a className='menu-contact' href='#contact'>Contact</a>
        </div>
      </section>}
    </div>
  )
}

export default App
