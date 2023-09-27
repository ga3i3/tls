export default () => {

  const items = [
    {
      label: 'Highest pay package in the industry. We will match any compatetive pay packages',
      description: 'TLC Nursing offers unrivaled compensation in the travel healthcare sector.',
      image: 'moneys.png',
      color: '#EEF5FF'
    },
    {
      label: 'Continuing Education available through TLC Academy',
      description: 'Access educational resources through the TLC Academy.',
      image: 'tablet.png',
      color: '#CCD4DF'
    },
    {
      label: 'Medical / Dental / Vision Insurance after 90 days',
      description: 'Enjoy Medical/Dental/Vision coverage after a 90-day period.',
      image: 'cross.png',
      color: '#E1F9F1'
    },
    {
      label: 'Our staff will respect each client’s privacy',
      description: 'We respect our clients\' privacy, offering a secure environment.',
      image: 'scope.png',
      color: '#EEF5FF'
    },
    {
      label: 'Accrued PTO (Paid Time Off) benefits',
      description: 'Benefit from accrued Paid Time Off.',
      image: 'hand.png',
      color: '#FFF2E6'
    },
  ]

  return (
    <>
    {items.map((el) =>
      <div className="swiper-slide">
        <div className="item" style={{
          backgroundColor: el.color
        }}>
          <img src={`/res/${el.image}`} alt="" />
          <div className="content">
            <div className="title">
              {el.label}
            </div>
            <p>{el.description}</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};