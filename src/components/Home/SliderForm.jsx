export default () => {
  return (
    <form>
      <div className="select">
        <label>
          Profession
        </label>
        <span class="iconify" data-icon="uil:angle-down"></span>
      </div>

      <div className="select">
        <label>
          <span class="iconify" data-icon="uil:location-point"></span>
          Location
        </label>
        <span class="iconify" data-icon="uil:angle-down"></span>
      </div>

      <div className="select">
        <label>
          Keywords
        </label>
        <span class="iconify" data-icon="uil:angle-down"></span>
      </div>

      <button type="submit">
        <span class="iconify" data-icon="uil:search"></span>
        Search Jobs
      </button>
    </form>
  )
}