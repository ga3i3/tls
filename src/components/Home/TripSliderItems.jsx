export default () => {

  const items = [
    {
      label: 'New York',
      count: 50
    },
    {
      label: 'New Mexico',
      count: 50
    },
    {
      label: 'California',
      count: 50
    },
    {
      label: 'Kansas',
      count: 50
    },
    {
      label: 'New York',
      count: 50
    },
    
  ]

  return (
    <>
    {items.map((el, index) =>
      <div className="swiper-slide">
        <div className="item">
          <img src={`/res/city${index}.jpg`} alt="" />
          <div className="city">
            <span>{el.label}</span>
            <span>{el.count} vacancies</span>
          </div>
        </div>
      </div>
    )}
    </>
  );
};