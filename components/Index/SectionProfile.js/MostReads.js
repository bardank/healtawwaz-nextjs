import React from "react";

export default function MostReads() {
  return (
    <div className='col-md-5 rd-popular'>
      <div className='rd-title text-center'>
        <h2>
          <span>धेरै पढिएका</span>
        </h2>
      </div>
      <div className='rd-wrap'>
        <ul>
          <li className='d-flex align-items-center'>
            <span>१</span>
            <a href='#'>
              खटाएको ठाउँमा चिकित्सक नगएपछि सुदूरपश्चिम स्वास्थ्य निर्देशनालयले
              माग्यो केन्द्रिय मन्त्रालयसँग गुहार
            </a>
          </li>
          <li className='d-flex align-items-center'>
            <span>२</span>
            <a href='#'>
              लकडाउन छिचोल्दैं महोत्तरीबाट १५ जना कोभिड–१९ जाँच्न टेकु अस्पतालमा
            </a>
          </li>
          <li className='d-flex align-items-center'>
            <span>३</span>
            <a href='#'>विद्यार्थीलाई कोभिड—१९ ले दिएको तनाव !</a>
          </li>
          <li className='d-flex align-items-center'>
            <span>४</span>
            <a href='#'>हेल्थ इमर्जेन्सीबीच अब सरकारले के गर्नुपर्छ ?</a>
          </li>
          <li className='d-flex align-items-center'>
            <span>५</span>
            <a href='#'>
              कोभिड—१९ जाँच्न चीनबाट ल्याइएका ५ मध्ये ४ प्रोटेवल पीसीआर थन्किए
            </a>
          </li>
          <li className='d-flex align-items-center'>
            <span>६</span>
            <a href='#'>मेरो सहरमा भाइरस छिरेको छ रे !</a>
          </li>
          <li className='d-flex align-items-center'>
            <span>७</span>
            <a href='#'>मेरो सहरमा भाइरस छिरेको छ रे !</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
