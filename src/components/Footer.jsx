export default () => {
  const aboutLinks = [
    'Healthcare staffing',
    'Joint Commission',
    'Staffing Request',
    'Team TLC',
    'LEAP',
    'TLC Academy',
    'Referral Program',
    'Timesheet',
    'Paycheck',
    'Careers with TLC',
    'LNP/RN Licensing',
    'CNA/LNA Licensing',
    'Staff testimonials',
    'Why TLC',
    'Benefits',
    'Awards',
    'Blog',
    'FAQ',
  ]

  const jobsLinks = [
    'Travel Nursing Jobs by Speciality',
    'Travel Nursing Jobs by State',
    'Travel Job by state',
    'Travel nursing Jobs by profession',
    'Search by Job type',
  ]

  return (
    <>
    
      <footer>
        <div className="wrapper">
          <div className="logo">
            <img src="/res/logo.svg" alt="" />
          </div>

          <div className="contacts">
            <span>Contact Us</span>

            <ul>
              <li>
                <a href="/">
                  <span class="iconify" data-icon="uil:phone-volume"></span>
                  802-404-0123
                </a>
              </li>
              <li>
                <a href="mailto:Info@TLCNursing.Com">
                  Info@TLCNursing.Com
                </a>
              </li>
            </ul>

            <div class="socials">
              <span class="iconify" data-icon="uil:instagram"></span>
              <span class="iconify" data-icon="uil:facebook"></span>
              <span class="iconify" data-icon="uil:linkedin"></span>
              <span class="iconify" data-icon="ic:baseline-tiktok"></span>
            </div>
          </div>
          <div className="company b-right">
            <span>About company</span>

            <ul>
              {aboutLinks.map(el =>
                <li>
                  <a href="/">{el}</a>
                </li>
              )}
            </ul>
          </div>
          <div className="jobs b-right">
            <span>Jobs</span>

            <ul>
              {jobsLinks.map(el =>
                <li>
                  <a href="/">{el}</a>
                </li>
              )}
            </ul>
          </div>
          <div className="form b-left">
            <div className="message">
              <div className="content">
                <h4>Best Travel Nursing Jobs In USA</h4>
                <p>Certified by The Joint Commission <br/>To Report a Concern, Click Here</p>
              </div>
              <img src="/res/coin.png" alt="" />
            </div>
            <div className="request">
              <div className="title">Get In Touch</div>

              <form>
                <div className="line">
                  <input type="text" placeholder="First name & last name *" />
                  <input type="text" placeholder="Email *" />
                </div>
                <input type="text" placeholder="Speciality" />
                <input type="text" placeholder="Message" />

                <div className="line">
                  <button>Submit</button>
                  <span>* - required field</span>
                </div>
              </form>
            </div>
          </div>
          <div className="copyright">
            <div className="text">© 2023 TLC Nursing Associates, Inc. All Rights Reserved.</div>
            <div className="link">
              <a href="/">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    
    </>
  )
}