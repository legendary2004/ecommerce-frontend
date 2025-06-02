import { bluebgColor, itemsBgColrs, primaryTextColors } from "../../../variables/styles/colors"
import { flex_center } from "../../../variables/styles/display/flex"
import { sectionHeader, sectionSubheader } from "../../../variables/styles/text"

const BottomSearch = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className={sectionHeader}>Could not find what you were looking for?<br />
                <h2 className={sectionSubheader}>Use the search bar to find anything</h2>
                </h1>
                <div className={`${flex_center} flex-col gap-4 sm:flex-row`}>
                    <input type="search" name="name" className={`${itemsBgColrs} ${primaryTextColors} py-2.5 px-5 h-14 w-full md:max-w-md border border-gray-300 shadow-sm rounded-full text-lg focus:outline-none`} placeholder="Product name" />
                    <button type="button" className={`${bluebgColor} cursor-pointer h-14 py-3.5 px-7 shadow-sm rounded-full font-semibold`}>Search</button>
                </div>
                
            </div>
        </section>                          
    )
}

export default BottomSearch