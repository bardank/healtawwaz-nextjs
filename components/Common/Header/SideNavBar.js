import React, {useRef} from "react";
import Link from 'next/link'
export default function SideNavBar({categories}) {
  const [submenu, setSubMenu] = React.useState(false);
  const mybodyRF = useRef(null);
  const mydivRF = useRef(null);
  const mysidenavRF = useRef(null);
  const mymainRF = useRef(null);
  // const myFunction = () => {
  //   var x = mydivRF.current;
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // };

  const openNav = () => {
    mysidenavRF.current.style.width = "250px";
    mymainRF.current.style.marginLeft = "0";
    // mybodyRF.current.style.backgroundColor = "rgba(0,0,0,0.4)";
  };
  const closeNav = () => {
    mysidenavRF.current.style.width = "0";
    mymainRF.current.style.marginLeft = "0";
    // mybodyRF.current.style.backgroundColor = "white";
  };
  return (
    <React.Fragment>
      <div id='mySidenav' className='sidenav' ref={mysidenavRF}>
        <a onClick={closeNav} className='closebtn '>
          &times;
        </a>
        <ul>
          {categories.map(category => (
            <li key={category.id} className='rd-li'>
              <Link href="/category/[name]" as={`/category/${category.slug}`} passHref>
              <a >
                {category.name}&nbsp;
              </a>
              </Link>
              {category.children.nodes.length !== 0 && (
                <i
                  className='fas fa-sort-down'
                  onClick={() => setSubMenu(!submenu)}></i>
              )}
              {category.children.nodes.length !== 0 && (
                <ul ref={mydivRF}>
                  {category.children.nodes.map(sub => (
                    <li key={sub.id}>
                      {submenu && (
                        <Link href="/category/[name]" as={`/category/${sub.slug}`} passHref>
                          <a >{sub.name}</a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <li ref={mymainRF} onClick={openNav} style={{cousor: "pointer"}}>
        {/* <Link herf='/' passHref>  */}
          {/* <a href='javascript:void(0)'> */}
          <a >
            <i className='fas fa-bars'></i>
          </a>
        {/* </Link> */}
        
      </li>
    </React.Fragment>
  );
}
