import React from "react";
import { flatten } from "lodash";

import { twoSum, singleNumber } from "./useLeetcode";

const data = {
  city: "sh",
  buildingList: [
    {
      buildingStatus: "OPENING",
      buildingType: "PHYSICAL",
      buildingUuid: "a",
      floorList: [
        {
          floorUuid: "1",
          productType: "WE_WORK",
        },
        {
          floorUuid: "2",
          productType: "NON_WEWORK",
        },
      ],
    },
    {
      buildingStatus: "OPENING",
      buildingType: "PHYSICAL",
      buildingUuid: "a",
      floorList: [
        {
          floorUuid: "3",
          productType: "WE_WORK",
          floorStatus: "OPENING",
        },
        {
          floorUuid: "4",
          productType: "WE_WORK",
          floorStatus: "OPENING",
        },
      ],
    },
    {
      buildingStatus: "OPENING",
      buildingType: "PHYSICAL",
      buildingUuid: "a",
      floorList: [
        {
          floorUuid: "5",
          productType: "WE_WORK",
          floorStatus: "OPENING",
        },
      ],
    },
  ],
};

const filterData = (data: any) => {
  return flatten(
    data.buildingList
      ?.filter(
        (i: any) =>
          i.buildingStatus === "OPENING" && i.buildingType === "PHYSICAL"
      )
      ?.map((b: any) => {
        const floors = b.floorList?.filter(
          (f_item: any) =>
            f_item.floorStatus === "OPENING" &&
            f_item.productType.includes("WE_WORK")
        );
        return {
          key: b.buildingUuid,
          value: b.buildingUuid,
          isLeaf: true,
        };
      })
  );
};

const Leetcode = () => {
  // console.log(twoSum([2, 7, 11, 15], 9))
  // console.log(twoSum([2, 7, 4, 2], 9))
  // console.log(twoSum([3,4,2], 6))
  console.info(filterData(data), "filterData");
  return (
    <div className="content">
      <span>[4,1,2,1,2] 只出现一次的数字: </span>
      <span>{singleNumber([4, 1, 2, 1, 2])}</span>
    </div>
  );
};

export default Leetcode;
