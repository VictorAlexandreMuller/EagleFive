
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/EagleFive-Front/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/EagleFive-Front/login",
    "route": "/EagleFive-Front"
  },
  {
    "renderMode": 2,
    "route": "/EagleFive-Front/login"
  },
  {
    "renderMode": 2,
    "route": "/EagleFive-Front/register"
  },
  {
    "renderMode": 2,
    "route": "/EagleFive-Front/home-page"
  },
  {
    "renderMode": 2,
    "route": "/EagleFive-Front/treino"
  },
  {
    "renderMode": 2,
    "route": "/EagleFive-Front/criar-treino"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4979, hash: '2670e64b5d3137694094c0627c47eed2aedfdf1ae76c0b57dd8471227fc05814', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '3c66bfbfb0b49312149a9c78baf4517efa6b6dbd6e01d8d2679f363a410601ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13530, hash: '5f47078b6794be3db1c062aa49814c8b3acfd1bf00dd1886cb8675df98bd24ee', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 11796, hash: '37e13e3d48e663b70d3036901efed0ae4b54f5b27a7967b30d2656655f071b37', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home-page/index.html': {size: 9245, hash: 'e46a44896da0a4b7c35954abcb79ae3ab83c2f66d9d7e86319e62e6aedbd553e', text: () => import('./assets-chunks/home-page_index_html.mjs').then(m => m.default)},
    'treino/index.html': {size: 12094, hash: 'bf2e395950565ebd07a5fc97ad2d0c540ad12a55ae23f81701e2b7dbf5efda5d', text: () => import('./assets-chunks/treino_index_html.mjs').then(m => m.default)},
    'criar-treino/index.html': {size: 8864, hash: 'f8933d3a7df67e876dfd04529007e1c9c24e75764f4f284d1191fdce5aa86f10', text: () => import('./assets-chunks/criar-treino_index_html.mjs').then(m => m.default)},
    'styles-EOTMFCGA.css': {size: 231633, hash: 'ZT1tjrXCjtA', text: () => import('./assets-chunks/styles-EOTMFCGA_css.mjs').then(m => m.default)}
  },
};
