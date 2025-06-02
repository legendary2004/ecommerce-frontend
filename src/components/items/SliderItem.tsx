import { useNavigate } from "react-router-dom"
import { productCard } from "../../interface/objInterfaces"
import { bluebgColor, blueText } from "../../variables/styles/colors"

const SliderItem = (props: productCard) => {
  const navigate = useNavigate()
    return (
        <div style={{backgroundImage: `bg-[url(http://localhost:3000/uploads/products/${props.coverImage})] `}} onClick={() => navigate(`details/${props.id}`)} className={`h-150 flex flex-col bg-cover bg-center bg-no-repeat`}>
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className={`block font-semibold ${blueText}`}>{props.name}</span>
              <span className={`block font-bold text-xl md:text-3xl ${blueText}`}>{props.price}</span>
              <div className="mt-5">
                <a className={`py-2 px-3 text-sm font-medium rounded-xl ${bluebgColor}`} href="#">
                  Visit
                </a>
              </div>
            </div>
        </div>
    )
}

export default SliderItem