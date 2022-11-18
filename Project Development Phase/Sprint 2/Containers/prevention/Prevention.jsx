import React from 'react';
import Feature from '../../components/feature/Feature';
import './Prevention.css';

const featuresData = [
  {
    title: 'Eat a healthy, balanced diet',
    text: 'A low-fat, high-fibre diet is recommended, which should include plenty of fresh fruit and vegetables (5 portions a day) and whole grains. You should limit the amount of salt you eat to no more than 6g (0.2oz) a day as too much salt will increase your blood pressure. 6g of salt is about 1 teaspoonful.',
  },
  {
    title: 'Be more physically active',
    text: 'Combining a healthy diet with regular exercise is the best way of maintaining a healthy weight. Having a healthy weight reduces your chances of developing high blood pressure. Regular exercise will make your heart and blood circulatory system more efficient, lower your cholesterol level, and also keep your blood pressure at a healthy level. Exercising regularly reduces your risk of having a heart attack. The heart is a muscle and, like any other muscle, benefits from exercise.',
  },
  {
    title: 'Keep to a healthy weight',
    text: 'A GP or practice nurse can tell you what your ideal weight is in relation to your height and build. Alternatively, find out what your body mass index (BMI) is by using our BMI calculator.',
  },
  {
    title: 'Keep your blood pressure under control',
    text: 'You can keep your blood pressure under control by eating a healthy diet low in saturated fat, exercising regularly and, if needed, taking medicine to lower your blood pressure. Your target blood pressure should be below 140/90mmHg. If you have high blood pressure, ask a GP to check your blood pressure regularly.',
  },
  {
    title: 'Keep your diabetes under control',
    text: 'You have a greater chance of developing CHD if you have diabetes. Being physically active and controlling your weight and blood pressure will help manage your blood sugar level. If you have diabetes, your target blood pressure level should be below 130/80mmHg.',
  },
];

const Prevention = () => (
  <div className="ihd__features section__padding" id="features">
    <div className="ihd__features-heading">
      <h1 className="gradient__text">Prevention tips</h1>
      <p>The same lifestyle changes used to manage heart disease may also help prevent it. Try these heart-healthy tips:</p>
    </div>
    <div className="ihd__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Prevention;
