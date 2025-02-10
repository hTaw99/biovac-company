"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { convertToSlug } from "@/common/utils";

function Product(props) {
  const { data } = props;

  return (
    <div className={`product-item ${classNames(props.className)}`}>
      <div className="relative block w-full h-full">
        <div className="relative overflow-hidden border rounded-lg product__thumb border-outline bg-surface">
          <div className="flex items-center justify-center w-full py-10 bg-img">
            <Image
              width={5000}
              height={5000}
              className="sm:w-[147px] w-4/5 h-auto"
              src={data.image}
              alt="Product image"
            />
          </div>
        </div>
        <strong className="flex flex-col mt-4 overflow-hidden product__info">
          {data.name}
        </strong>
        <span className="text-surface2">{data.company}</span>
      </div>
    </div>
  );
}

export default Product;
