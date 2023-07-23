
/**
 * @roxi/routify 2.18.12
 * File generated Sun Jul 23 2023 13:39:27 GMT+0200 (Central European Summer Time)
 */

export const __version = "2.18.12"
export const __timestamp = "2023-07-23T11:39:27.888Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports
import __fallback from '../app/javascript/svelte/pages/_fallback.svelte'
import _index from '../app/javascript/svelte/pages/index.svelte'
import _login_index from '../app/javascript/svelte/pages/login/index.svelte'
import _login__reset from '../app/javascript/svelte/pages/login/_reset.svelte'
import _register_index from '../app/javascript/svelte/pages/register/index.svelte'
import _register__reset from '../app/javascript/svelte/pages/register/_reset.svelte'
import __layout from '../app/javascript/svelte/pages/_layout.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/_fallback.svelte",
      "importPath": "../app/javascript/svelte/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => __fallback
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/index.svelte",
      "importPath": "../app/javascript/svelte/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => _index
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_reset.svelte",
      "filepath": "/login/_reset.svelte",
      "name": "_reset",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/login/_reset.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/login/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/login/index.svelte",
          "importPath": "../app/javascript/svelte/pages/login/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/login/index",
          "id": "_login_index",
          "component": () => _login_index
        }
      ],
      "isLayout": true,
      "isReset": true,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../app/javascript/svelte/pages/login/_reset.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/login",
      "id": "_login__reset",
      "component": () => _login__reset
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_reset.svelte",
      "filepath": "/register/_reset.svelte",
      "name": "_reset",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/register/_reset.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/register/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/zeus/_/applctns/2023/webdoctor/svelte_on_rails/app/javascript/svelte/pages/register/index.svelte",
          "importPath": "../app/javascript/svelte/pages/register/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/register/index",
          "id": "_register_index",
          "component": () => _register_index
        }
      ],
      "isLayout": true,
      "isReset": true,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../app/javascript/svelte/pages/register/_reset.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/register",
      "id": "_register__reset",
      "component": () => _register__reset
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../app/javascript/svelte/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => __layout
}


export const {tree, routes} = buildClientTree(_tree)

