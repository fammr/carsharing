
export const mapData = {
  // amapInfo:{},
  startAmapInfo:{},   // 起始地址信息
  endAmapInfo:{}      // 终点地址信息
  // LocationFlag: -1 //是否定位标志
}
// export const setMapInfo = (value) => mapData.amapInfo = value
// export const getMapInfo = () => { return mapData.amapInfo }
export const setStartMapInfo = (value) => mapData.startAmapInfo = value
export const getStartMapInfo = () => { return mapData.startAmapInfo }
export const setEndMapInfo = (value) => mapData.endAmapInfo = value
export const getEndMapInfo = () => { return mapData.endAmapInfo }
// export const incLocationFlag = () => mapData.LocationFlag++
// export const getLocationFlag = () => { return mapData.LocationFlag }

/**
 * @exports.default {Mixin}
 */
export default {
  data: () => ({
    mapData
  }),
  methods: {
    // setMapInfo,
    // getMapInfo,
       setStartMapInfo,
       getStartMapInfo,
       setEndMapInfo,
       getEndMapInfo
    // incLocationFlag,
    // getLocationFlag
  }
}