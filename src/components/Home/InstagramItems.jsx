export default () => {
  return (
    <>
    {[...Array(5)].map((el, index) => 
      <div className="item">
        <img src={`/res/instagram/img${index}.jpg`} alt="" />
      </div>
    )}
    
    </>
  )
}