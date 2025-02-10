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
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const PRODUCT_STATUS = {
    registered: "REG",
    underRegisteration: "UNDER_REG",
  };

  const mapper = {
    REG: (
      <span className="px-4 py-1 rounded-full bg-[#E6F6F4] text-[#03A78E]">
        Registered
      </span>
    ),
    UNDER_REG: (
      <span className="px-4 py-1 rounded-full bg-[#FFF2E6] text-[#FD8100]">
        Under-Reg
      </span>
    ),
  };

  const items = [
    {
      id: "1",
      name: "PanGraf 0.5 mg Hard Gelatin Capsules",
      ingredient: "Tacrolimus Monohydrate 0.5 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "2",
      name: "PanGraf 1 mg Hard Gelatin Capsules",
      ingredient: "Tacrolimus Monohydrate 1 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "3",
      name: "PanGraf 5 mg Hard Gelatin Capsules",
      ingredient: "Tacrolimus Monohydrate 5 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "4",
      name: "Mycept 250 Tablets",
      ingredient: "Mycophenolate Mofetil 250 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Mycept 500 Tablets",
      ingredient: "Mycophenolate Mofetil 500 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Mycept-S 180 Tablets",
      ingredient: "Mycophenolate Sodium 180 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Mycept-S 360 Tablets",
      ingredient: "Mycophenolate Sodium 360 mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Azapan 100mg/ml",
      ingredient: "Azacitidine 100mg",
      company: "Panacea Biotec Pharma Ltd.",
      type: "Pharmaceutical",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "EasySix PFS",
      ingredient: " ",
      company: "Panacea Biotec Vaccines",
      type: "Vaccine",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "EasySix Single-Dose",
      ingredient: " ",
      company: "Panacea Biotec Vaccines",
      type: "Vaccine",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "EasySix Multi-Dose",
      ingredient: " ",
      company: "Panacea Biotec Vaccines",
      type: "Vaccine",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "EasyFive Vial",
      ingredient: " ",
      company: "Panacea Biotec Vaccines",
      type: "Vaccine",
      status: "REG",
    },
    {
      id: "5",
      name: "EasyFive PFS",
      ingredient: " ",
      company: "Panacea Biotec Vaccines",
      type: "Vaccine",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Bivalent Oral Poliomyelitis Virus Type 1&3",
      ingredient: " ",
      company: "Biofarma Indonesia",
      type: "Vaccine",
      status: "REG",
    },
    {
      id: "5",
      name: "Adsorbed Td Vaccine",
      ingredient: " ",
      company: "Biofarma Indonesia",
      type: "Vaccine",
      status: "REG",
    },
    {
      id: "5",
      name: "TT vaccine",
      ingredient: " ",
      company: "Biofarma Indonesia",
      type: "Vaccine",
      status: "REG",
    },
    {
      id: "5",
      name: "DTP Vaccine (VAKSIN DTP)",
      ingredient: " ",
      company: "Biofarma Indonesia",
      type: "Vaccine",
      status: "REG",
    },
    {
      id: "5",
      name: "GerEpo 4000 IU Vial",
      ingredient: "rh Erythropoietin",
      company: "NCPC Genetech Biotechnology Co.",
      type: "Biological",
      status: "REG",
    },
    {
      id: "5",
      name: "GerEpo 4000 IU PFS",
      ingredient: "rh Erythropoietin",
      company: "NCPC Genetech Biotechnology Co.",
      type: "Biological",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Enoxaparin Sodium 40mg/4ml PFS",
      ingredient: "Enoxaparin Sodium 40mg/4ml",
      company: "Nanjing King-Friend Biopharmaceutical Co.",
      type: "Biological",
      status: "REG",
    },
    {
      id: "5",
      name: "Enoxaparin Sodium 60mg/6ml PFS",
      ingredient: "Enoxaparin Sodium 60mg/6ml",
      company: "Nanjing King-Friend Biopharmaceutical Co.",
      type: "Biological",
      status: "REG",
    },
    {
      id: "5",
      name: "Biovac Ashwaganda",
      ingredient: "Ashwagandha, Vit C, Vit D3",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "REG",
    },
    {
      id: "5",
      name: "Biovac Omega 3,6,9",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "REG",
    },
    {
      id: "5",
      name: "Biovac Pregnant Multivitamin",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "REG",
    },
    {
      id: "5",
      name: "Biovac Man",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "REG",
    },
    {
      id: "5",
      name: "Biovac Biotin",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "REG",
    },
    {
      id: "5",
      name: "Biopea 600",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Neuro B",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Biovacarbon",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Cysta-C",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "UNDER_REG",
    },
    {
      id: "5",
      name: "Amylovac",
      ingredient: " ",
      company: "Biovac Egypt",
      type: "Food Supplement",
      status: "UNDER_REG",
    },
  ];

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
            {/* <div className="list-filter-product flex flex-wrap items-center justify-between gap-y-4 bg-surface lg:py-2.5 py-4 px-5 rounded">
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
            </div> */}
            <div className="list-product xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-5 gap-y-8 lg:mt-10 mt-7">
              {/* {currentData.map((item, index) => (
                <Product data={item} key={index} />
              ))} */}

              <div>
                <Table>
                  <TableHeader className="bg-transparent">
                    <TableRow className="border-[#dbdbdb] font-black hover:bg-transparent">
                      <TableHead>Product Name</TableHead>
                      {/* <TableHead>Active ingredients</TableHead> */}
                      <TableHead>Company</TableHead>
                      <TableHead>Type</TableHead>
                      {/* <TableHead className="text-right">Status</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <tbody aria-hidden="true" className="table-row h-2"></tbody>
                  <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                    {items.map((item) => (
                      <TableRow
                        key={item.id}
                        className="border-none odd:bg-surface/50 hover:bg-transparent odd:hover:bg-surface/50"
                      >
                        <TableCell className="py-2.5 font-medium">
                          {item.name}
                        </TableCell>
                        {/* <TableCell className="py-2.5">
                          {item.ingredient}
                        </TableCell> */}
                        <TableCell className="py-2.5">{item.company}</TableCell>
                        <TableCell className="py-2.5">{item.type}</TableCell>
                        {/* <TableCell className="py-2.5  text-right">
                          {mapper[item.status]}
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                  <tbody aria-hidden="true" className="table-row h-2"></tbody>
                </Table>
              </div>
            </div>
            {/* <div className="list-pagination">
              <Paginator
                pageContainerClass="paginator w-full flex items-center justify-center gap-2 lg:mt-10 mt-7"
                totalRecords={productData.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div> */}
          </div>
        </div>
      </div>
    </LayoutTwo>
  );
}
