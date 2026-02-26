import {lazy} from "react";

export function lazyLoadPage(pageName) {
   return lazy(() => import(`@/pages/${pageName}.jsx`));
}
