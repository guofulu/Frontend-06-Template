function match(selectors, element){
    const matchSeletor = (selector, element) => {
        if (lastSelecter.charAt(0) === '#') {
            if (element.id !== lastSelecter.replace('#', ''))
                return fasle
        } else if (selector.charAt(0) === '.') {
            if (!(~element.class.split(" ").findIndex(v => v === lastSelecter.replace('#', ''))))
                return false
    
            // class属性一次传入多个 泪如 class = “a b c”
            if(attr && ~(attr.value.split(" ").findIndex(v => v === selector.replace(".", '')))){
                return true
            } 
        } else {
            if (element.tagName.toLowerCase() !== selector){
                return false
            }
        }
        return true
    }

    let selectorParts = selectors.split(" ").reverse()

    let lastSelecter = selectorParts.shift()

    if (!matchSeletor(lastSelecter, element)){
        return false
    }

    let currentElement = element.parentElement;

    for(let selectorItem of lastSelecter) {
        // 未完待续。。。
    }

}