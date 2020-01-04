import { FenceGroup } from "../models/fence-group"
import { Judger } from "../models/judger"
import { Spu } from "../../models/spu"

// components/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    judger: Object,
    previewImg: String,
    title: String,
    price: null,
    discountPrice: null
  },
  lifetimes: {
    attached() {

    },
  },
  observers: {
    'spu': (spu) => {
      if (!spu) {
        return
      }
      if (Spu.isNoSpec(spu)) {
        this.setData({
          noSpec: true,
          
        })
        this.bindSkuData(spu.sku_list[0])
      }
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger
      const defaultSku = fenceGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
      } else {
        this.bindSpuData()
      }
      this.bindInitData(fenceGroup)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindInitData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences,
        skuIntact:this.data.judger.isSkuIntact()
      })
    },
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,
        skuIntact:this.data.judger.isSkuIntact()
      })
    },
    bindSkuData(sku) {
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
        skuIntact:this.data.judger.isSkuIntact()
      })
    },
   
    bindFenceGroupData(fenceGroup){
      this.setData({
        fences:fenceGroup.fences
      })
    },
    onCellTap(event) {
      const cell = event.detail.cell
      const x = event.detail.x
      const y = event.detail.y
      const judger = this.data.judger
      this.data.judger.judge(cell, x, y)
      this.bindFenceGroupData(judger.fenceGroup)
    
    }
  }
})
