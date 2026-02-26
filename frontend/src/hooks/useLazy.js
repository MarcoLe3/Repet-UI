import {lazy} from "react";

export function lazyLoad(pageName) {
   return lazy(() => import(`@/pages/${pageName}.jsx`));
}
