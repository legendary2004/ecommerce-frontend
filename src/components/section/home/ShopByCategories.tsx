import { useContext, useEffect, useState } from "react"
import { grid_4 } from "../../../variables/styles/display/grid"
import { maxScreenXl } from "../../../variables/styles/size"
import { sectionHeader } from "../../../variables/styles/text"
import ProductItem from "../../items/ProductItem"
import CategoryTabs from "../../navigation/tabs/CategoryTabs"
import { ProductContext } from "../../../context/ProductContext"
import { category } from "../../../interface/objInterfaces"
import ToastMessage from "../../toast/Message"

const ShopByCategories = () => {
    const [message, setMessage] = useState("")
    const {categories, addToCart} = useContext(ProductContext)
    const [activeCategory, setActiveCategory] = useState<category>({id: 0, name: "", products: []})

    useEffect(() => {
        if (categories.length > 0) setActiveCategory(categories[0])
    }, [categories.length])

    return (
        <div className={maxScreenXl}>
            <h1 className={sectionHeader}>Shop by categories</h1>
            <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <div className={`mt-5 ${grid_4}`}>
                {activeCategory.id && activeCategory.products.length > 0 && activeCategory.products.map(item => (
                    <ProductItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        coverImage={item?.pictures[0] ? item.pictures[0].src : ""}
                        addToCart={() => addToCart(item.id, 1, "", setMessage)}
                    />
                ))}
            </div>
            {message && <ToastMessage message={message} closeMessage={() => setMessage("")} />}
        </div>
    )
}

export default ShopByCategories