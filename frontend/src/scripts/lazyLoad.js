import {lazy} from "react";
const modulePath = import.meta.glob('@/pages/**/*.jsx');

export function lazyLoadPage(pageName) {
    console.log(modulePath);
    let path = `/src/pages/${pageName}.jsx`;
    if (modulePath[path]) {
        return lazy(modulePath[path]);
    } else {
        throw new Error(`Module not found`);
    }
}