import { useNavigate } from "react-router-dom";
import { productCard } from "../../interface/objInterfaces";
import { bluebgColor, itemsBgColrs, primaryTextColors} from "../../variables/styles/colors"
import { flex_between, flex_end } from "../../variables/styles/display/flex"
import { icon_5, size_full } from "../../variables/styles/size";
import { headerText } from "../../variables/styles/text"
import ProductTooltip from "../tooltip/ProductTooltip"
import { IoCart } from "react-icons/io5";
import { BASE_API_URL } from "../../config";

const ProductItem = (props: productCard) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/details/${props.id}`)} className={`cursor-pointer rounded-xl shadow-sm ${itemsBgColrs}`}>
            <div className={`${itemsBgColrs} cursor-pointer h-56 w-full mix-blend-multiply rounded-xl`}>
                <img className={`${size_full} rounded-xl object-center object-fill`} src={`${BASE_API_URL}/uploads/products/${props.coverImage}`} alt={props.name} />
            </div>
            <div className="p-6">
                <div className={`mb-4 ${flex_between} gap-4`}>
                    <span className={`${bluebgColor} cursor-pointer me-2 rounded px-2.5 py-0.5 text-xs font-medium`}> Up to 35% off </span>

                    <div className={`${flex_end} gap-1`}>
                        <ProductTooltip />
                        <ProductTooltip />
                    </div>
                </div>
                <a href="#" className={`text-lg font-semibold leading-tight hover:underline ${primaryTextColors}`}>{props.name}</a>
                <div className={`mt-4 gap-4 ${flex_between}`}>
                    <p className={headerText}>${props.price}</p>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()
                        props.addToCart()
                    }} type="button" className={`cursor-pointer inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium ${bluebgColor} ${primaryTextColors}`}>
                        <IoCart className={`${icon_5} mx-2`} />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem