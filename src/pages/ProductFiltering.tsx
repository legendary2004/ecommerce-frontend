import { FormEvent, useContext, useEffect, useState } from "react";
import Page from "../classes/Page";
import ProductItem from "../components/items/ProductItem";
import { itemsBgColrs, secondaryTextColor } from "../variables/styles/colors";
import { maxScreenXl } from "../variables/styles/size";
import { extraLargeText, largeText } from "../variables/styles/text";
import { ProductContext } from "../context/ProductContext";
import Checkbox from "../components/input/Checkbox";
import { productFiltering } from "../variables/functions/productsFunctions";
import { handleInputChange } from "../variables/functions/formChange";
import axios from "axios";
import { BASE_API_URL } from "../config";
import Text from "../components/input/Text";
import ToastMessage from "../components/toast/Message";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { pagination } from "../interface/componentsInt";

const ProductFiltering = () => {
  const { filters, updateFilters } = productFiltering();
  const { products, setProducts, categories, addToCart } = useContext(ProductContext);
  const [formProp, setFormProp] = useState({
    name: "",
    category: [],
    minPrice: 0,
    maxPrice: 0,
  });
  const [message, setMessage] = useState("")
  const [paginations, setPaginations] = useState<pagination[]>([])

  useEffect(() => {
    if (products.length > 0) {
      const arr = [];
      const productPerPage = 2;
      for (let i = 0; i < products.length; i += productPerPage) {
        arr.push({page: i / productPerPage + 1, products: products.slice(i, i + productPerPage)})
      }
      setPaginations([...arr])
    }
    else setPaginations([])
  }, [products])

  const applyFilters = () => {
    const newParams = updateFilters({ ...formProp });
    return newParams;
  };

  const handleCategoryChange = (e: FormEvent<HTMLInputElement>) => {
    const { id, checked } = e.currentTarget;
    if (checked)
      setFormProp((prev: any) => {
        return {
          ...prev,
          category: [...prev.category, id],
        };
      });
    else {
      setFormProp((prev: any) => {
        const updatedCat = prev.category.filter((name: string) => name != id);
        return {
          ...prev,
          category: updatedCat,
        };
      });
    }
  };


  useEffect(() => {
    const unsub = async () => {
      if (filters.name || filters.category|| filters.minPrice || filters.maxPrice) {
        const newParams = applyFilters();
        console.log(newParams.toString());
        try {
            if (newParams.toString()) {
            const response = await axios.get(
                `${BASE_API_URL}/products/filters?${newParams.toString()}`
            );
            setProducts(response.data)
            }
        } catch (err) {
            console.log(err);
        }
      }
    };

    unsub();
  }, [
    filters.name,
    filters.category,
    filters.maxPrice,
    filters.minPrice,
    filters.sort
  ]);

  return (
    <Page>
      <div className={maxScreenXl}>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4">
            <div className={`${itemsBgColrs}  p-6 rounded-lg shadow`}>
              <h2 className={`${extraLargeText} font-semibold mb-4`}>
                Filters
              </h2>
              <div className="my-6">
                <Text
                  id="name"
                  label="Product name"
                  type="search"
                  placeholder="Search..."
                  value={formProp.name}
                  isRequired={false}
                  handleChange={(e: FormEvent<HTMLInputElement>) =>
                    handleInputChange(e, setFormProp)
                  }
                />
              </div>
              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>Category</h3>
                <div className="grid grid-cols-1 place-items-start gap-y-2">
                  {categories.length > 0 &&
                    categories.map((item: any) => (
                      <Checkbox
                        key={item.id}
                        id={item.name}
                        label={item.name}
                        isRequired={false}
                        checked={item.isChecked}
                        handleChange={(e: FormEvent<HTMLInputElement>) =>
                          handleCategoryChange(e)
                        }
                      />
                    ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    id="minPrice"
                    onChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                  />
                  <span className={secondaryTextColor}>-</span>
                  <input
                    id="maxPrice"
                    onChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                    type="number"
                    placeholder="Max"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>Offers</h3>
                <Checkbox
                  id="sale"
                  label="On sale"
                  handleChange={() => console.log("hi")}
                  isRequired={false}
                />
              </div>

              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>
                  Availability
                </h3>
                <Checkbox
                  id="stock"
                  label="In stock"
                  handleChange={() => console.log("hi")}
                  isRequired={false}
                />
              </div>
              {/* 
                    <div className="mb-6">
                        <h3 className={`${largeText} font-medium mb-2`}>Brand</h3>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className={secondaryTextColor}>Apple</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className={secondaryTextColor}>Samsung</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className={secondaryTextColor}>Sony</span>
                            </label>
                        </div>
                    </div> */}

              <button
                onClick={applyFilters}
                className="w-full text-white bg-blue-600 hover:bg-white hover:text-blue-600 duration-500 py-2 rounded"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-500 dark:text-gray-400">
                Showing 1-12 of 50 products
              </div>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="sort"
                  className="text-gray-500 dark:text-gray-400"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  onChange={(e: FormEvent<HTMLSelectElement>) => updateFilters({ sort: e.currentTarget.value})}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                >
                  <option value="id,desc">New Arrivals</option>
                  <option value="name,asc">Name</option>
                  <option value="price,asc">Price: Low to High</option>
                  <option value="price,desc">Price: High to Low</option>
                </select>
              </div>
            </div>
              <Swiper 
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => (
                      `<span class="${className} min-h-9.5 min-w-9.5 flex justify-center items-center border 
                          border-neutral-700 dark:border-neutral-100 
                          hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 py-2 px-3 
                          text-sm dark:text-white dark:focus:bg-white/10
                      ">
                        ${paginations[index].page}
                      </span>`
                    )
                }}
                modules={[Pagination]}
                loop
                className="mySwiper swiper4"
            >
                {paginations.length > 0 && paginations.map(item => (
                    <SwiperSlide>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {item.products.length > 0 && item.products.map(item => (
                              <ProductItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                coverImage={item.pictures[0].src}
                                addToCart={() => addToCart(item.id, 1, "", setMessage)}
                              />
                            ))}

                            {/* <ProductItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              coverImage={item.pictures[0].src}
                              addToCart={() => addToCart(item.id, 1, "", setMessage)}
                            />
                            <ProductItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              coverImage={item.pictures[0].src}
                              addToCart={() => addToCart(item.id, 1, "", setMessage)}
                            />
                            <ProductItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              coverImage={item.pictures[0].src}
                              addToCart={() => addToCart(item.id, 1, "", setMessage)}
                            />
                            <ProductItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              coverImage={item.pictures[0].src}
                              addToCart={() => addToCart(item.id, 1, "", setMessage)}
                            /> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="mt-10">
                <MyPagination paginations={paginations} />
              </div> */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePagination && activePagination.products?.length > 0 &&
                activePagination.products.map((item) => (
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    coverImage={item.pictures[0].src}
                    addToCart={() => addToCart(item.id, 1, "", setMessage)}
                  />
                ))}
            </div>
              <div className="mt-10">
                <Pagination paginations={paginations} activePagination={activePagination} setActivePagination={setActivePagination} />
              </div> */}
          </main>
        </div>
      </div>
      {message && <ToastMessage message={message} closeMessage={() => setMessage("")} />}
    </Page>
  );
};

export default ProductFiltering;
