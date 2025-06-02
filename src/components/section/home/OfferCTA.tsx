import { bluebgColor, secondaryTextColor } from "../../../variables/styles/colors"
import { maxScreenXl } from "../../../variables/styles/size"

const OfferCTA = () => {
    return (
        <div className={`${maxScreenXl} grid md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0`}>
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
                <p className={`${secondaryTextColor} mb-4 max-w-2xl md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl`}>Don't Wait - Limited Stock at Unbeatable Prices!</p>
                <a href="#" className={`${bluebgColor} inline-block rounded-lg px-6 py-3.5 text-center font-medium text-white`}>Shop Now</a>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 md:flex">
                <img className="dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" />
                <img className="hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg" alt="shopping illustration" />
            </div>
        </div>
    )
}

export default OfferCTA