export default () => {
  const icons = [
    {
      name: 'Registered Nurse (RN), Manager - Travel',
      icon: 'icon-nurse',
      location: 'Guttenberg, IA',
      data: [
        'Weekly Pay: $5838.30 - $6088.30',
        '4x12 Nights',
        'ASAP | 13 Week(s)',
      ]
    },
    {
      name: 'Advanced Practice Healthcare Provider',
      icon: 'nurse-svgrepo-com',
      location: 'Guttenberg, IA',
      data: [
        'Weekly Pay: $5838.30 - $6088.30',
        '4x12 Nights',
        'ASAP | 13 Week(s)',
      ]
    },
    {
      name: 'Advanced Practice Healthcare Provider',
      icon: 'icon-nurse',
      location: 'Guttenberg, IA',
      data: [
        'Weekly Pay: $5838.30 - $6088.30',
        '4x12 Nights',
        'ASAP | 13 Week(s)',
      ]
    },
    {
      name: 'Advanced Practice Healthcare Provider',
      icon: 'icon-nurse',
      location: 'Guttenberg, IA',
      data: [
        'Weekly Pay: $5838.30 - $6088.30',
        '4x12 Nights',
        'ASAP | 13 Week(s)',
      ]
    },
    {
      name: 'Advanced Practice Healthcare Provider',
      icon: 'icon-nurse',
      location: 'Guttenberg, IA',
      data: [
        'Weekly Pay: $5838.30 - $6088.30',
        '4x12 Nights',
        'ASAP | 13 Week(s)',
      ]
    },
  ]
  
  return (
    <>

    {icons.map((el, index) => 
      <div className="swiper-slide" key={index}>
        <div className="item">
          <div className="name">
            <span>{el.name}</span>
            <img src={`/res/icons-blue/${el.icon}.svg`} alt="" />
          </div>
          <span>{el.location}</span>

          <div className="details">
            {el.data.map((current, i) =>
              <>
                <div className="detail_item">
                  {i == 0 ? 
                  <span class="iconify" data-icon="solar:dollar-linear"></span> 
                  : 
                  <span class="iconify" data-icon="solar:clock-circle-linear"></span>
                  }

                  {current}
                </div>
              </>
            )}
          </div>
          <div className="link">
            <a href="/">
              View Job
              <span class="iconify" data-icon="uil:angle-right-b"></span>
            </a>
          </div>
        </div>
      </div>
    )}
    
    </>
  )
}