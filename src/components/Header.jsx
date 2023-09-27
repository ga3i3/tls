export default function Header() {
  const menuItems = [
    'Discover TLC',
    'Careers with TLC',
    'Team TLC',
    'Healthcare Staffing',
    'Contact Us',
  ]
  return (
    <>
    <header>
      <div class="wrapper">
        <div className="logo">
          <a href="/">
            <img src="/res/logo.svg" alt="" />
          </a>
        </div>
        <div className="side">
          <div class="rowup">
            <ul>
              <li>
                <span class="iconify" data-icon="uil:phone-volume"></span>
                802-404-0123
              </li>
              <li>
                <span>Follow Us</span>
                <div class="socials">
                  <span class="iconify" data-icon="uil:instagram"></span>
                  <span class="iconify" data-icon="uil:facebook"></span>
                  <span class="iconify" data-icon="uil:linkedin"></span>
                  <span class="iconify" data-icon="ic:baseline-tiktok"></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="rowdown">
            <ul>
              {menuItems.map(el => 
                <li>
                  <a href="/">{el}</a>
                </li>  
              )}
            </ul>
            <div className="actions">
              <a href="/" className="circle">
                <img src="/res/user.png" alt="" />
              </a>
              <a href="/" className="button search">
                Search  Jobs
              </a>
              <a href="/" className="button sign">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="breadcrumbs">
      <div className="wrapper">
        <ul>
          <li>Discover TLC</li>
        </ul>
      </div>
    </div>
    </>
  )
}