import React from 'react';
import Feature from '../../components/feature/Feature';
import './Treatment.css';

const featuresData = [
  {
    title: 'Medications',
    text: 'If lifestyle changes alone do not work, medications may be needed to control heart disease symptoms and to prevent complications. The type of medication used depends on the type of heart disease.',
  },
  {
    title: 'Coronary artery bypass surgery ',
    text: 'This allows blood flow to reach a part of the heart when an artery is blocked. Coronary artery bypass grafting is the most common surgery. A surgeon can use a healthy blood vessel from another part of the body to repair a blocked one.',
  },
  {
    title: 'Coronary angiography',
    text: 'This is a procedure that widens narrow or blocked coronary arteries. It is often combined with the insertion of a stent, which is a wire-mesh tube that allows easier blood flow.',
  },
  {
    title: 'Valve replacement or repair',
    text: 'A surgeon can replace or repair a valve that is not functioning correctly.',
  },
  {
    title: 'Repair surgery',
    text: 'A surgeon can repair congenital heart defects, aneurysms, and other problems.',
  },
  {
    title: 'Device implantation',
    text: 'Pacemakers, balloon catheters, and other devices can help regulate the heartbeat and support blood flow.',
  },
];

const Treatment = () => (
  <div className="ihd__features section__padding" id="features">
    <div className="ihd__features-heading">
      <h1 className="gradient__text">Here are some treatment options for heart diseases.</h1>
      <p>Heart disease treatment depends on the cause and type of heart damage. Healthy lifestyle habits — such as eating a low-fat, low-salt diet, getting regular exercise and good sleep, and not smoking — are an important part of treatment.</p>
    </div>
    <div className="ihd__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Treatment;
