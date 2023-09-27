export default () => {
  const icons = [
    {
      name: 'Phyllis Meadows',
      code: 'LPN',
      date: '2/17/2023',
      text: '“I enjoy being here in the Green Mountain State! I love the different weather and the people are nice! I love the TLC brand and their staff has been wonderful every time! I enjoy working in Assisted Living and meeting new clients and their families!”',
    },
    {
      name: 'BethanyRN',
      code: 'RN',
      date: '2/17/2023',
      text: '“Since starting with TLC nursing, the communication has been better than anywhere I’ve worked before. Typically when I start a new job I feel “in the dark” and never know what the next steps are. Sarah and Nina have been wonderful and I always know what to expect.”',
    },
    {
      name: 'Valencia',
      code: 'LNA',
      date: '2/17/2023',
      text: "“I've been with TLC for two years and it's been a positive experience. Brittany, my recruiter, is particularly supportive. I hope for more state options in the future, but I've enjoyed my contracts so far and plan to continue.”",
    },
    {
      name: 'Misty Wolfe',
      code: 'RN',
      date: '2/17/2023',
      text: "“At Maple Ridge Memory Care, I managed both the junction side and countryside. The job has a steady pace, allowing time for thorough work. Patients and staff are welcoming, and the management is exceptional. Working with TLC staff has been rewarding; they're kind and professional.”",
    },
    {
      name: 'Jasmine Brown',
      code: 'LPN',
      date: '2/17/2023',
      text: "“My day at the Rutledge facility was the best in my three years of traveling. The staff was warm, and their genuine care for residents stood out. It's a pleasure to work with such a facility through TLC”",
    },
    {
      name: 'Keith Mulligan',
      code: 'MHT',
      date: '2/17/2023',
      text: '“Brittney and the staff are great to work with. My contract is going exactly as I expected and the process to renew my contract was easy thanks to the TLC staff. I look forward to my next assignment. Additional for today”',
    },
  ]
  
  return (
    <>

    {icons.map((el, index) => 
      <div className="swiper-slide">
        <div className="item">
          <div className="header">
            <img src={`/res/reviews/user-img-${index}.jpg`} alt="" />
            <div className="details">
              <strong>{el.name}</strong>
              <span>{el.code}</span>

              <div className="bottom">
                <div className="stars">
                  {[...Array(5)].map(el => <span class="iconify" data-icon="iconamoon:star-fill"></span>)}
                </div>
                <span>{el.date}</span>
              </div>
            </div>
          </div>
          <p>{el.text}</p>
        </div>
      </div>
    )}
    
    </>
  )
}