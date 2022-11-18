import React from 'react';
import Feature from '../../components/feature/Feature';
import './Faqs.css';

const featuresData = [
  {
    title: 'Is the tool free of cost?',
    text: 'Yes. The tool is free to use.',
  },
  {
    title: 'I took the test but I am not sure if its accurate. ',
    text: 'Our tool is very accurate but we can understand why you may be having doubts. Please try the tool for a couple of times to see if you get the same result again and again.',
  },
  {
    title: 'Can I save the results?',
    text: 'Yes. You can choose to email the results for later use.',
  },
];

const Faqs = () => (
  <div className="ihd__features section__padding" id="features">
    <div className="ihd__features-heading">
      <h1 className="gradient__text">Frequently Asked Questions.</h1>
      <p>You may be having a lot of questions on your mind. We have answered some of the frequently asked questions. Please go through them to clear any doubts.</p>
    </div>
    <div className="ihd__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Faqs;
