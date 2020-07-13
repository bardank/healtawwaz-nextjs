import React from "react";
import Link from 'next/link'

export default function MainMenu({myMenus}) {
  return (
    <React.Fragment>
      {myMenus.map(data => (
        <li key={data.id} className='rd-hide'>
          <Link href="/category/[name]" as={`/category/${data.slug}`} passHref>
            <a >
            {data.extraMenuData && <span clas='rd-info'>LIVE</span>}

            {data.title}
            {data.submenu.length !== 0 && <i className='fas fa-sort-down' />}
            </a>
          </Link>
          {data.submenu.length !== 0 && (
            <ul>
              {data.submenu.map(sub => (
                <li key={sub.id}>
                  <Link href="/category/[name]" as={`/category/${sub.slug}` } passHref>
                    <a>
                    {sub.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </React.Fragment>
  );
}
