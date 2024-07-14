/** +----------------------------------------------------------------------
 * | ADVC [ 基于Arco Design开箱即用的收银台前端/设计解决方案 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2023~2023 dspurl All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉ADVC相关版权
 * +----------------------------------------------------------------------
 * | Author: dsPurl <383354826@qq.com>
 * +----------------------------------------------------------------------
 */
import axios from 'axios';
import { failResponseWrap, successResponseWrap } from "@/utils/setup-mock";

export interface CommoditySkuProductRecord {
  key: string;
  value: string;
}
export interface CommoditySkuRecord {
  id?: number;
  price?: number;
  img?: string;
  inventory?: number;
  product?: Array<CommoditySkuProductRecord>[];
}
export interface CommodityRecord {
  id: number;
  name?: string;
  price: number;
  img?: string;
  no?: string;
  number: number;
  inventory: number;
  classify_id?: number;
  sku?: Array<CommoditySkuRecord>[];
  specification?: any;
  productSkus?: any;
  ids?: string;
  product?: any;
}

export function commodityList(params: {
  search: {
    categoryId: string;
    materialParam: string;
    color: string;
    materialOther: string;
    weight: string;
    expiryNum: string;
    enabled: string;
    enableSerialNumber: string;
    enableBatchNumber: string;
    position: string;
    remark: string;
    mpList: string;
  };
  currentPage: number;
  pageSize: number;
}) {
  return axios.get<CommodityRecord[]>('/jshERP-boot/material/list', { params });
}

// export function commodityList(params: { classifyId: number; keyword: string }) {
//   return axios.get<CommodityRecord[]>('/api/commodity/list', { params });
// }

export interface ClassifyRecord {
  id: number;
  title: string;
  children: object;
  checked: boolean;
  state: string;
  value: number;
  key: number;
}

export function classifyList() {
  // return axios.get<ClassifyRecord[]>('/api/classify/list');
  return axios.get<ClassifyRecord[]>(
    '/jshERP-boot/materialCategory/getMaterialCategoryTreejsh?id='
  );
}
