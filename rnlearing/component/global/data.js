//模拟司机运行轨迹
var driverLine = [
    { latitude: 23.052617, longitude: 113.396029 },
    { latitude: 23.052652, longitude: 113.39615 }
    , { latitude: 23.052648, longitude: 113.396237 },
    { latitude: 23.052626, longitude: 113.396285 },
    { latitude: 23.052543, longitude: 113.396345 },
    { latitude: 23.052457, longitude: 113.39638 }
    , { latitude: 23.052435, longitude: 113.396376 },
    { latitude: 23.052387, longitude: 113.396311 },
    { latitude: 23.052344, longitude: 113.396163 },
    { latitude: 23.0523, longitude: 113.396098 }
    , { latitude: 23.052148, longitude: 113.395972 },
    { latitude: 23.051927, longitude: 113.395851 },
    { latitude: 23.051875, longitude: 113.395803 },
    { latitude: 23.051701, longitude: 113.395586 },
    { latitude: 23.051654, longitude: 113.39556 }
    , { latitude: 23.051558, longitude: 113.395586 },
    { latitude: 23.051254, longitude: 113.395851 },
    { latitude: 23.051072, longitude: 113.395951 },
    { latitude: 23.050881, longitude: 113.395968 },
    { latitude: 23.050686, longitude: 113.395951 },
    { latitude: 23.050534, longitude: 113.395881 },
    { latitude: 23.050447, longitude: 113.395768 },
    { latitude: 23.050447, longitude: 113.395768 },
    { latitude: 23.050299, longitude: 113.395894 },
    { latitude: 23.050291, longitude: 113.395938 },
    { latitude: 23.050339, longitude: 113.396102 },
    { latitude: 23.050339, longitude: 113.396102 },
    { latitude: 23.050247, longitude: 113.396146 },
    { latitude: 23.050148, longitude: 113.396224 },
    { latitude: 23.050026, longitude: 113.396354 },
    { latitude: 23.049761, longitude: 113.396719 },
    { latitude: 23.049314, longitude: 113.397235 },
    { latitude: 23.048911, longitude: 113.3977 }
    , { latitude: 23.047891, longitude: 113.398902 },
    { latitude: 23.047891, longitude: 113.398902 },
    { latitude: 23.047578, longitude: 113.398655 },
    { latitude: 23.047222, longitude: 113.398316 },
    { latitude: 23.04645, longitude: 113.397418 }
    , { latitude: 23.045647, longitude: 113.396493 },
    { latitude: 23.045503, longitude: 113.396289 },
    { latitude: 23.04533, longitude: 113.395946 }
    , { latitude: 23.045239, longitude: 113.395738 },
    { latitude: 23.045104, longitude: 113.395313 },
    { latitude: 23.045026, longitude: 113.394896 },
    { latitude: 23.045026, longitude: 113.394831 },
    { latitude: 23.045017, longitude: 113.394475 },
    { latitude: 23.045043, longitude: 113.394071 },
    { latitude: 23.045087, longitude: 113.393806 },
    { latitude: 23.045169, longitude: 113.393516 },
    { latitude: 23.045252, longitude: 113.39329 }
    , { latitude: 23.045365, longitude: 113.393038 },
    { latitude: 23.045512, longitude: 113.392804 },
    { latitude: 23.04572, longitude: 113.392509 }
    , { latitude: 23.04582, longitude: 113.392391 }
    , { latitude: 23.046102, longitude: 113.392122 },
    { latitude: 23.046497, longitude: 113.391858 },
    { latitude: 23.046901, longitude: 113.391671 },
    { latitude: 23.047352, longitude: 113.391467 },
    { latitude: 23.047613, longitude: 113.391328 },
    { latitude: 23.048155, longitude: 113.391003 },
    { latitude: 23.048411, longitude: 113.390803 },
    { latitude: 23.04872, longitude: 113.390516 }
    , { latitude: 23.048919, longitude: 113.390308 },
    { latitude: 23.049154, longitude: 113.390017 },
    { latitude: 23.04931, longitude: 113.389805 }
    , { latitude: 23.049314, longitude: 113.389796 },
    { latitude: 23.049488, longitude: 113.389518 },
    { latitude: 23.049674, longitude: 113.389167 },
    { latitude: 23.049948, longitude: 113.388533 },
    { latitude: 23.050061, longitude: 113.388307 },
    { latitude: 23.050313, longitude: 113.387934 },
    { latitude: 23.050278, longitude: 113.387856 },
    { latitude: 23.050048, longitude: 113.387674 },
    { latitude: 23.049878, longitude: 113.387465 },
    { latitude: 23.04974, longitude: 113.387231 },
    { latitude: 23.049657, longitude: 113.387049 },
    { latitude: 23.049605, longitude: 113.386858 },
    { latitude: 23.049557, longitude: 113.386523 },
    { latitude: 23.049566, longitude: 113.385664 },
    { latitude: 23.049514, longitude: 113.385204 },
    { latitude: 23.049444, longitude: 113.384913 },
    { latitude: 23.049314, longitude: 113.384466 },
    { latitude: 23.049275, longitude: 113.384327 },
    { latitude: 23.049219, longitude: 113.384071 },
    { latitude: 23.049149, longitude: 113.383672 },
    { latitude: 23.049106, longitude: 113.38326 }
    , { latitude: 23.049093, longitude: 113.382982 },
    { latitude: 23.04911, longitude: 113.382539 }
    , { latitude: 23.049162, longitude: 113.382101 },
    { latitude: 23.049219, longitude: 113.38184 }
    , { latitude: 23.049314, longitude: 113.381476 },
    { latitude: 23.049314, longitude: 113.381476 },
    { latitude: 23.049306, longitude: 113.381259 },
    { latitude: 23.049106, longitude: 113.381141 },
    { latitude: 23.048772, longitude: 113.380924 },
    { latitude: 23.048494, longitude: 113.380694 },
    { latitude: 23.048286, longitude: 113.380508 },
    { latitude: 23.048021, longitude: 113.380226 },
    { latitude: 23.047817, longitude: 113.379978 },
    { latitude: 23.047639, longitude: 113.37974 }
    , { latitude: 23.047448, longitude: 113.379431 },
    { latitude: 23.047387, longitude: 113.379327 },
    { latitude: 23.047313, longitude: 113.37918 }
    , { latitude: 23.047179, longitude: 113.378906 },
    { latitude: 23.047131, longitude: 113.378785 },
    { latitude: 23.047018, longitude: 113.37849 }
    , { latitude: 23.046927, longitude: 113.378186 },
    { latitude: 23.046671, longitude: 113.377075 },
    { latitude: 23.046654, longitude: 113.376992 },
    { latitude: 23.046541, longitude: 113.376597 },
    { latitude: 23.046428, longitude: 113.376293 },
    { latitude: 23.046207, longitude: 113.375764 },
    { latitude: 23.046207, longitude: 113.375764 },
    { latitude: 23.04651, longitude: 113.375317 }
    , { latitude: 23.046662, longitude: 113.375056 },
    { latitude: 23.046662, longitude: 113.375056 },
    { latitude: 23.046693, longitude: 113.375026 },
    { latitude: 23.046736, longitude: 113.375004 },
    { latitude: 23.046944, longitude: 113.374983 },
    { latitude: 23.047339, longitude: 113.374822 },
    { latitude: 23.047339, longitude: 113.374822 },
    { latitude: 23.047378, longitude: 113.374918 },
    { latitude: 23.047426, longitude: 113.375026 },
    { latitude: 23.04747, longitude: 113.375082 },
    { latitude: 23.047613, longitude: 113.375152 },//
    { latitude: 23.047526, longitude: 113.374375 }
    , { latitude: 23.047413, longitude: 113.374514 }
    , { latitude: 23.047378, longitude: 113.374579 }
    , { latitude: 23.047352, longitude: 113.374661 }
    , { latitude: 23.047339, longitude: 113.374822 }
    , { latitude: 23.047339, longitude: 113.374822 }
    , { latitude: 23.046944, longitude: 113.374983 }
    , { latitude: 23.046736, longitude: 113.375004 }
    , { latitude: 23.046693, longitude: 113.375026 }
    , { latitude: 23.046662, longitude: 113.375056 }
    , { latitude: 23.046662, longitude: 113.375056 }
    , { latitude: 23.04651, longitude: 113.375317 }
    , { latitude: 23.046207, longitude: 113.375764 }
    , { latitude: 23.046207, longitude: 113.375764 }
    , { latitude: 23.046033, longitude: 113.375421 }
    , { latitude: 23.045833, longitude: 113.375104 }
    , { latitude: 23.045634, longitude: 113.374848 }
    , { latitude: 23.04556, longitude: 113.375013 }
    , { latitude: 23.045838, longitude: 113.375434 }
    , { latitude: 23.045977, longitude: 113.375694 }
    , { latitude: 23.046298, longitude: 113.376419 }
    , { latitude: 23.046385, longitude: 113.376662 }
    , { latitude: 23.046497, longitude: 113.37707 }
    , { latitude: 23.046671, longitude: 113.377075 }
    , { latitude: 23.047296, longitude: 113.376875 }
    , { latitude: 23.04763, longitude: 113.376806 }
    , { latitude: 23.047951, longitude: 113.376771 }
    , { latitude: 23.048307, longitude: 113.376753 }
    , { latitude: 23.048589, longitude: 113.376762 }
    , { latitude: 23.049049, longitude: 113.376819 }
    , { latitude: 23.049314, longitude: 113.376849 }
    , { latitude: 23.051194, longitude: 113.377096 }
    , { latitude: 23.051385, longitude: 113.377101 }
    , { latitude: 23.051602, longitude: 113.377079 }
    , { latitude: 23.051858, longitude: 113.37701 }
    , { latitude: 23.052174, longitude: 113.376875 }
    , { latitude: 23.052457, longitude: 113.376671 }
    , { latitude: 23.052639, longitude: 113.376502 }
    , { latitude: 23.052778, longitude: 113.376328 }
    , { latitude: 23.052891, longitude: 113.376163 }
    , { latitude: 23.053034, longitude: 113.375846 }
    , { latitude: 23.053681, longitude: 113.374201 }
    , { latitude: 23.054097, longitude: 113.373207 }
    , { latitude: 23.054319, longitude: 113.372591 }
    , { latitude: 23.053976, longitude: 113.37214 }
    , { latitude: 23.053424, longitude: 113.371823 }
    , { latitude: 23.052943, longitude: 113.371554 }
    , { latitude: 23.05207, longitude: 113.371207 }
    , { latitude: 23.051719, longitude: 113.371098 }
    , { latitude: 23.051194, longitude: 113.370955 }
    , { latitude: 23.050686, longitude: 113.370838 }
    , { latitude: 23.049562, longitude: 113.370569 }
]
export { driverLine }





