export default () => {
  const items = [
    {
      label: 'Join Our Family',
      description: 'TLC, a supportive team that values your contribution and makes you feel at home.',
    },
    {
      label: 'Respect and Recognition',
      description: 'A well-respected healthcare staffing organization in our community.',
    },
    {
      label: 'Your Skills Matter',
      description: ' Your training and experience is our asset. You are valued here!',
    },
    {
      label: 'Clinicians Are Key',
      description: 'To us, YOU are the most valuable asset.',
    },
    {
      label: 'Reliability & Consistency',
      description: 'Dependable staffing for our clients is our commitment.',
    },
    {
      label: 'Nurse-Owned',
      description: 'Proud to be a nurse-owned organization understanding your needs',
    },
    {
      label: 'Training & Certification',
      description: 'Offering facility-specific training or certification prior to onboarding.',
    },
    {
      label: 'Empowering Care',
      description: 'Our goal - empower you to deliver the best care possible.',
    },
  ]

  return (
    <>
    {items.map((el) =>
      <div className="item">
        <div className="label">
          <img src="/res/check.svg" alt="" />
          <span>{el.label}</span>
        </div>
        <span>{el.description}</span>
      </div>
    )}
    </>
  );
};