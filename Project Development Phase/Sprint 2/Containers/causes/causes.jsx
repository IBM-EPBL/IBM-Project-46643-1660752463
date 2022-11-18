import React from 'react';
import Feature from '../../components/feature/Feature';
import './Causes.css';

const featuresData = [
  {
    title: 'Smoking',
    text: 'Smoking is a major risk factor for coronary heart disease. Both nicotine and carbon monoxide (from the smoke) put a strain on the heart by making it work faster. They also increase your risk of blood clots. Other chemicals in cigarette smoke can damage the lining of your coronary arteries, leading to furring of the arteries. Smoking significantly increases your risk of developing heart disease.',
  },
  {
    title: 'High blood pressure',
    text: 'High blood pressure (hypertension) puts a strain on your heart and can lead to CHD.',
  },
  {
    title: 'High cholesterol',
    text: 'Cholesterol is a fat made by the liver from the saturated fat in your diet. It is essential for healthy cells, but too much in the blood can lead to CHD.',
  },
  {
    title: 'Lack of regular exercise',
    text: 'If you are inactive, fatty deposits can build up in your arteries. If the arteries that supply blood to your heart become blocked, it can lead to a heart attack. If the arteries that supply blood to your brain are affected it can cause a stroke. Read about the physical activity guidelines for adults aged 19 to 64.',
  },
  {
    title: 'Diabetes',
    text: 'A high blood sugar level may lead to diabetes, which can more than double your risk of developing CHD. Diabetes can lead to CHD because it may cause the lining of blood vessels to become thicker, which can restrict blood flow.',
  },
];

const Causes = () => (
  <div className="ihd__features section__padding" id="features">
    <div className="ihd__features-heading">
      <h1 className="gradient__text">Causes of heart diseases.</h1>
    </div>
    <div className="ihd__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Causes;
