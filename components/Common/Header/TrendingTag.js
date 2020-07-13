import React from "react";
import Link from 'next/link';

export default function TrendingTag() {
  return (
    <div className='rd-trending'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <ul>
              <li>
                <strong>
                <i className="fas fa-chart-line"/>
                ट्रेण्डिङ:
                </strong>
              </li>
              <li>
                <Link href='#'>
                  <a >#कोरोना</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a >#कोरोना भाइरस</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a >#म्युजिक भिडियो</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a >#ओली–प्रचण्ड</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a >#अमेरिका</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
