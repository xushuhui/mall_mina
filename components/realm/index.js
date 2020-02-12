import { FenceGroup } from "../models/fence-group"
import { Judger } from "../models/judger"
import { Spu } from "../../models/spu"
import { Cell } from "../models/cell"
import { Cart } from "../../models/cart"

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
    discountPrice: null,
    currentSkuCount: Cart.SKU_MIN_COUNT
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
        this.processNoSpec(spu)
      } else {
        this.processHasSpec(spu)
      }

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    processNoSpec(spu) {
      this.setData({
        noSpec: true
      })
      this.bindSkuData(spu.sku_list[0])
      this.setStockStatus(spu.sku_list[0].stock)
    },
    processHasSpec(spu) {
      const fenceGroup = new FenceGroup()
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger
      const defaultSku = fenceGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
        this.setStockStatus(defaultSku.stock)
      } else {
        this.bindSkuData()
      }
      this.bindTipData()
      this.bindFenceGroupData(fenceGroup)
    },
    bindInitData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences,
        skuIntact: this.data.judger.isSkuIntact()
      })
    },
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,
      })
    },
    bindSkuData(sku) {
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
      })
    },
    bindTipData() {
      this.setData({
        skuIntact: this.data.judger.isSkuIntact()
      })
    },
    bindFenceGroupData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences
      })
    },
    setStockStatus(stock) {
      this.setData({
        outStock: this.isOutOfStock(stock, this.data.currentSkuCount)
      })
    },
    isOutOfStock(stock, currentCount) {
      return stock < currentCount
    },
    onSelectCount(event) {
      const currentCount = event.detail.count
      this.data.currentSkuCount = currentCount
      if (this.data.judger.isSkuIntact()) {
        const sku = this.data.judger.getDeterminateSku()
        this.setStockStatus(sku.stock)
      }
    },
    onCellTap(event) {
      const data = event.detail.cell
      const x = event.detail.x
      const y = event.detail.y
      const cell = new Cell(data.spec)
      const judger = this.data.judger
      judger.judge(cell, x, y)
      const skuIntact = judger.isSkuIntact()
      if (skuIntact) {
        const currentSku = judger.getDeterminateSku()
        this.bindSkuData(currentSku)
        this.setStockStatus(currentSku.stock)
      }
      this.bindFenceGroupData(judger.fenceGroup)

    }
  }
})
