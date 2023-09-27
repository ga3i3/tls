import SliderForm from "./SliderForm";
export default () => {
  return (
    <>
    {[...Array(5)].map((x, i) =>
      <div className="swiper-slide">
        <img src={`/res/img${i}.jpg`} alt="" />
        <div className="wrapper">
          {i == 0 ?
            (
              <>
                <h1>Empowering Your Career, <br/>Enriching Your Journey</h1>
                <p>PREMIUM TRAVEL HEALTHCARE JOBS ACROSS USA</p>
                <SliderForm />
              </>
            )
          : (
            <></>
          )}
        </div>
      </div>
    )}
    </>
  );
};