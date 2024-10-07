"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Breadcrumb } from "@/components/Other/Breadcrumb";
import Paginator from "react-hooks-paginator";
import Product from "@/components/Product";
import productData from "@/data/products.json";
import { getProductbyFilter } from "@/common/productSelect";
import { shop } from "@/common/variables";
import LayoutTwo from "@/components/Layout/LayoutTwo";

export default function OurShop() {
  const pageLimit = 12;
  const [offset, setOffset] = useState(0);
  const [currentSort, setCurrentSort] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    let sortedProduct = getProductbyFilter(productData, currentSort);
    setCurrentData(sortedProduct.slice(offset, offset + pageLimit));
  }, [offset, currentSort]);

  return (
    <LayoutTwo className="-style-1">
      <Breadcrumb nav2={"Products"} />
      <div className="py-10 border-b list-product-block lg:py-20 sm:py-14 border-outline">
        <div className="container">
          <h3 className="text-center heading3">Our Products</h3>
          <p className="mt-4 text-center desc body2 text-surface1">
            Empowering Your Success Through Comprehensive Solutions
          </p>
          <div className="list lg:mt-[60px] sm:mt-12 mt-8">
            <div className="list-filter-product flex flex-wrap items-center justify-between gap-y-4 bg-surface lg:py-2.5 py-4 px-5 rounded">
              <div className="left">
                <strong className="text-button">25</strong>
                <span> Products Recommended for You</span>
              </div>
              <div className="flex items-center gap-2 right">
                <span className="caption1 text-surface1">Sort by:</span>
                <div className="bg-white border rounded select-block border-outline">
                  <select
                    className="w-full py-2 pl-4 pr-10 border rounded border-outline"
                    name="sort"
                    onChange={(e) => setCurrentSort(e.target.value)}
                  >
                    {shop.SORT_TYPES.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <Icon.CaretDown />
                </div>
              </div>
            </div>
            <div className="list-product grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-5 gap-y-8 lg:mt-10 mt-7">
              {currentData.map((item, index) => (
                <Product data={item} key={index} />
              ))}
            </div>
            <div className="list-pagination">
              <Paginator
                pageContainerClass="paginator w-full flex items-center justify-center gap-2 lg:mt-10 mt-7"
                totalRecords={productData.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutTwo>
  );
}
