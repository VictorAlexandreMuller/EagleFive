
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/eagle-five/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/eagle-five/login",
    "route": "/eagle-five"
  },
  {
    "renderMode": 2,
    "route": "/eagle-five/login"
  },
  {
    "renderMode": 2,
    "route": "/eagle-five/register"
  },
  {
    "renderMode": 2,
    "route": "/eagle-five/home-page"
  },
  {
    "renderMode": 2,
    "route": "/eagle-five/treino"
  },
  {
    "renderMode": 2,
    "route": "/eagle-five/criar-treino"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4974, hash: 'cf36dbc0df7e211eb05aca1df7cfe3a30bad0b1c4998f2c4a821052e674a104f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'bbdf87e3ea176cbe0d51f3f83c8399d455d6b15d973a4b36bdbb5b77e4eb9f42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13525, hash: '98b2d2e7c4bf128ad6f0ff2d15781c23b2e07b204e231e7975fdea36eb29f7c3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 11791, hash: '4a4e62563949f9795cd1b6fad0fab9d3f80e090723b1bf4a1c61059bc1193d42', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'treino/index.html': {size: 12089, hash: '64f7a9c0b01839e7e1efa550672790aa0c9f2897299899550f054b649a24fed5', text: () => import('./assets-chunks/treino_index_html.mjs').then(m => m.default)},
    'criar-treino/index.html': {size: 8859, hash: 'da6eff8f99b89a5b1b534eaff68c18a22b93c3cd62c63043b0ea582e12dd3fab', text: () => import('./assets-chunks/criar-treino_index_html.mjs').then(m => m.default)},
    'home-page/index.html': {size: 9240, hash: '100553ef1604ded4a75136aeaeeab148c7ca0ecc2df28aec0fae6a036cdf2660', text: () => import('./assets-chunks/home-page_index_html.mjs').then(m => m.default)},
    'styles-EOTMFCGA.css': {size: 231633, hash: 'ZT1tjrXCjtA', text: () => import('./assets-chunks/styles-EOTMFCGA_css.mjs').then(m => m.default)}
  },
};
