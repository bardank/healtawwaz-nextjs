export const MenuItems = data => {
  const categories = data.categories.nodes;
  let mainMenu = {};
  data.menus.nodes.map(x => {
    if (x.menuId === 18) {
      mainMenu = {...x};
    }
  });
  mainMenu = mainMenu.menuItems.edges;
  // console.log(mainMenu[0].node.childItems.nodes.length);
  let myMenus = [];
  // console.log(categories[4].children.nodes.length);
  for (var men = 0; men < mainMenu.length; men++) {
    for (var cat = 0; cat < categories.length; cat++) {
      // for (var men = 0; men < mainMenu.length; men++) {
      if (mainMenu[men].node.label === categories[cat].name) {
        // console.log(mainMenu[men].node.childItems.nodes);
        let slug = categories[cat].slug;
        // let slug = mainMenu[men].node.url.split("category/")[1].split("/")[0];
        let submenu = mainMenu[men].node.childItems.nodes;
        let realsubmenu = categories[cat].children.nodes;
        let data = {};
        let extraMenuData;
        // console.log(mainMenu.MenuCustom);
        // capturing custom made data of menu
        if (mainMenu[men].node.MenuCustom.customTag) {
          extraMenuData = mainMenu[men].node.MenuCustom.customTag;
        }
        if (realsubmenu.length === 0) {
          data = {
            title: categories[cat].name,
            id: categories[cat].id,
            slug: slug,
            extraMenuData,
            submenu: [],
          };
        } else {
          let sub = [];
          for (var r = 0; r < submenu.length; r++) {
            for (var s = 0; s < realsubmenu.length; s++) {
              // s =0 ; s <6 ;s++
              if (submenu[r].label === realsubmenu[s].name) {
                // let subslug = submenu[s].url.split("category/")[1];
                data = {
                  title: realsubmenu[s].name,
                  id: realsubmenu[s].id,
                  slug: realsubmenu[s].slug,
                };
                sub.push(data);
              }
            }
          }
          // console.log(sub);
          // sub.reverse();
          data = {
            title: categories[cat].name,
            id: categories[cat].id,
            slug: slug,
            extraMenuData,
            submenu: sub,
          };
        }

        myMenus.push(data);
      }
    }
  }
  return myMenus;
};
