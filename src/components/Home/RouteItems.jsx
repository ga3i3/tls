export default () => {
  const icons = [
    {
      icon: 'icon-nurse',
      label: 'Registered Nurses (RNs)'
    },
    {
      icon: 'healthicons',
      label: 'Licensed Practicing Nurses (LPNs)'
    },
    {
      icon: 'icon-license',
      label: 'Certified Nurse Aides (CNAs)​'
    },
    {
      icon: 'nursing-care',
      label: 'Physical Therapist (PT) Occupational Therapist (OT)'
    },
    {
      icon: 'icon-care',
      label: 'Mental Health Clinicians'
    },
    {
      icon: 'nurse-svgrepo-com',
      label: 'Advanced Practice Healthcare Providers'
    },
    {
      icon: 'Iconmedical',
      label: 'Allied Healthcare Professionals-Including All Techs'
    },
    {
      icon: 'talking',
      label: 'Speech Language Pathologist (SLP)Respiratory Therapist (RT)'
    },
  ]
  
  return (
    <>

    {icons.map((el) => 
      <div className="item">
        <img src={`/res/icons/${el.icon}.svg`} alt="" />
        <span>{el.label}</span>
      </div>
    )}
    
    </>
  )
}