webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/MenuView.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/FileManager/MenuView.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".MenuView_menuView__p_VbS {\\n  position: absolute;\\n  bottom: 0;\\n  left: 48px;\\n  width: 227px;\\n  height: 300px;\\n  padding-top: 7px;\\n  padding-right: 14px;\\n}\\n.MenuView_menuView__p_VbS li {\\n  padding: 2px;\\n  padding-left: 4px;\\n  color: rgba(225, 225, 225, 0.8);\\n}\\n.MenuView_menuView__p_VbS li figure {\\n  font-size: 12px;\\n  display: flex;\\n  align-items: center;\\n}\\n.MenuView_menuView__p_VbS li figure figcaption {\\n  padding-left: 7px;\\n}\\n.MenuView_menuView__p_VbS li:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.MenuView_menuView__p_VbS li:hover svg {\\n  color: #76b9ed;\\n}\\n.MenuView_menuView__p_VbS li:active {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.MenuView_menuIcon__3lY0F {\\n  width: 32px;\\n  height: 32px;\\n  background-color: #1a7dc9;\\n}\\n.MenuView_menuIcon__3lY0F img {\\n  width: 32px;\\n  height: 32px;\\n  padding: 4px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://MenuView.module.scss\",\"webpack://../../variables.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;AALF;AAOE;EACE,YAAA;EACA,iBAAA;EAEA,+BAAA;AANJ;AAQI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;AAPN;AASM;EACE,iBAAA;AAPR;AAWI;EACE,uCAAA;AATN;AAgBM;EACE,cCzCS;AD2BjB;AAkBI;EACE,wCAAA;AAhBN;;AA8BA;EACE,WAAA;EACA,YAAA;EAEA,yBAAA;AA5BF;AA8BE;EACE,WAAA;EACA,YAAA;EACA,YAAA;AA5BJ\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n// TODO: Dimensions and position should not be part of the MenuView. All View's should be more generic. Pass class along?\\n\\n.menuView {\\n  position: absolute;\\n  bottom: 0;\\n  left: 48px; // TODO: Width of button bar\\n\\n  width: 227px;\\n  height: 300px;\\n  padding-top: 7px;\\n  padding-right: 14px;\\n\\n  li {\\n    padding: 2px;\\n    padding-left: 4px;\\n\\n    color: rgba($offWhite, 0.8);\\n\\n    figure {\\n      font-size: 12px;\\n\\n      display: flex;\\n      align-items: center;\\n\\n      figcaption {\\n        padding-left: 7px;\\n      }\\n    }\\n\\n    &:hover {\\n      background-color: hsla(\\n        0,\\n        0%,\\n        map-get($taskbar, hover-lightness),\\n        map-get($taskbar, opacity)\\n      );\\n\\n      svg {\\n        color: $highlightColor;\\n      }\\n    }\\n\\n    &:active {\\n      background-color: hsla(\\n        0,\\n        0%,\\n        map-get($taskbar, hover-lightness),\\n        map-get($taskbar, opacity) * 1.5\\n      );\\n\\n      // svg {\\n      //   color: $highlightColor;\\n      // }\\n    }\\n  }\\n}\\n\\n.menuIcon {\\n  width: 32px;\\n  height: 32px;\\n\\n  background-color: darken($highlightColor, 25%);\\n\\n  img {\\n    width: 32px;\\n    height: 32px;\\n    padding: 4px;\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: rgb(225, 225, 225);\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"menuView\": \"MenuView_menuView__p_VbS\",\n\t\"menuIcon\": \"MenuView_menuIcon__3lY0F\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9NZW51Vmlldy5tb2R1bGUuc2Nzcz84NWJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4QkFBOEIsdUJBQXVCLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLHNCQUFzQixvQ0FBb0MsR0FBRyx1Q0FBdUMsb0JBQW9CLGtCQUFrQix3QkFBd0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsc0NBQXNDLDRDQUE0QyxHQUFHLDBDQUEwQyxtQkFBbUIsR0FBRyx1Q0FBdUMsNkNBQTZDLEdBQUcsK0JBQStCLGdCQUFnQixpQkFBaUIsOEJBQThCLEdBQUcsaUNBQWlDLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcsT0FBTyxzSEFBc0gsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsa0RBQWtELCtCQUErQiw0SUFBNEksdUJBQXVCLGNBQWMsZUFBZSxnREFBZ0Qsa0JBQWtCLHFCQUFxQix3QkFBd0IsVUFBVSxtQkFBbUIsd0JBQXdCLG9DQUFvQyxnQkFBZ0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLDRCQUE0QixTQUFTLE9BQU8saUJBQWlCLG1KQUFtSixlQUFlLGlDQUFpQyxTQUFTLE9BQU8sa0JBQWtCLHlKQUF5SixrQkFBa0Isb0NBQW9DLFlBQVksT0FBTyxLQUFLLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLHFEQUFxRCxXQUFXLGtCQUFrQixtQkFBbUIsbUJBQW1CLEtBQUssR0FBRyw4QkFBOEIsdUNBQXVDLCtCQUErQixtQkFBbUIsa0NBQWtDLGlDQUFpQyxzQ0FBc0Msa0NBQWtDLDhCQUE4QixxQ0FBcUMsZ0NBQWdDLDJCQUEyQixrQ0FBa0MsOEJBQThCLGdNQUFnTSxvQkFBb0Isc0JBQXNCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsd0dBQXdHLDhCQUE4Qix3QkFBd0IscUJBQXFCO0FBQ2xqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL0ZpbGVNYW5hZ2VyL01lbnVWaWV3Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiUyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA0OHB4O1xcbiAgd2lkdGg6IDIyN3B4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xcbn1cXG4uTWVudVZpZXdfbWVudVZpZXdfX3BfVmJTIGxpIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuLk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiUyBsaSBmaWd1cmUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5NZW51Vmlld19tZW51Vmlld19fcF9WYlMgbGkgZmlndXJlIGZpZ2NhcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XFxufVxcbi5NZW51Vmlld19tZW51Vmlld19fcF9WYlMgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xcbn1cXG4uTWVudVZpZXdfbWVudVZpZXdfX3BfVmJTIGxpOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogIzc2YjllZDtcXG59XFxuLk1lbnVWaWV3X21lbnVWaWV3X19wX1ZiUyBsaTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcXG59XFxuXFxuLk1lbnVWaWV3X21lbnVJY29uX18zbFkwRiB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTdkYzk7XFxufVxcbi5NZW51Vmlld19tZW51SWNvbl9fM2xZMEYgaW1nIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vTWVudVZpZXcubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBRUEsK0JBQUE7QUFOSjtBQVFJO0VBQ0UsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFDRSxpQkFBQTtBQVBSO0FBV0k7RUFDRSx1Q0FBQTtBQVROO0FBZ0JNO0VBQ0UsY0N6Q1M7QUQyQmpCO0FBa0JJO0VBQ0Usd0NBQUE7QUFoQk47O0FBOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtBQTVCRjtBQThCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTVCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi8vIFRPRE86IERpbWVuc2lvbnMgYW5kIHBvc2l0aW9uIHNob3VsZCBub3QgYmUgcGFydCBvZiB0aGUgTWVudVZpZXcuIEFsbCBWaWV3J3Mgc2hvdWxkIGJlIG1vcmUgZ2VuZXJpYy4gUGFzcyBjbGFzcyBhbG9uZz9cXG5cXG4ubWVudVZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNDhweDsgLy8gVE9ETzogV2lkdGggb2YgYnV0dG9uIGJhclxcblxcbiAgd2lkdGg6IDIyN3B4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xcblxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcblxcbiAgICBjb2xvcjogcmdiYSgkb2ZmV2hpdGUsIDAuOCk7XFxuXFxuICAgIGZpZ3VyZSB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBmaWdjYXB0aW9uIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgICAgMCxcXG4gICAgICAgIDAlLFxcbiAgICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICAgKTtcXG5cXG4gICAgICBzdmcge1xcbiAgICAgICAgY29sb3I6ICRoaWdobGlnaHRDb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgICAgICAwLFxcbiAgICAgICAgMCUsXFxuICAgICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLFxcbiAgICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSkgKiAxLjVcXG4gICAgICApO1xcblxcbiAgICAgIC8vIHN2ZyB7XFxuICAgICAgLy8gICBjb2xvcjogJGhpZ2hsaWdodENvbG9yO1xcbiAgICAgIC8vIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWVudUljb24ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGhpZ2hsaWdodENvbG9yLCAyNSUpO1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgfVxcbn1cXG5cIixcIiRoaWdobGlnaHRDb2xvcjogIzc2YjllZDtcXG4kaGlnaGxpZ2h0Q29sb3IyOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuXFxuJHVpQ29sb3IxOiByZ2IoNTUsIDU1LCA1NSk7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6IHJnYigyMjUsIDIyNSwgMjI1KTtcXG5cXG4kbWluaW1pemU6IHJnYigyNTUsIDE5MCwgNDcpO1xcbiRtaW5pbWl6ZV9hY3RpdmU6IHJnYigxOTEsIDE0MiwgMzUpO1xcbiRtaW5pbWl6ZV90ZXh0OiByZ2IoMTUzLCA4NywgMCk7XFxuJG1heGltaXplOiByZ2IoNDAsIDIwMiwgNjUpO1xcbiRtYXhpbWl6ZV9hY3RpdmU6IHJnYigzMSwgMTUzLCA0OSk7XFxuJG1heGltaXplX3RleHQ6IHJnYigwLCA5OSwgMCk7XFxuJGNsb3NlOiByZ2IoMjU1LCA4NSwgNzgpO1xcbiRjbG9zZV9hY3RpdmU6IHJnYigxOTEsIDY0LCA1OSk7XFxuJGNsb3NlX3RleHQ6IHJnYigxNTMsIDAsIDApO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXFxuJGZvbnRTaXplOiAxMi41cHg7XFxuXFxuJGJhc2VaaW5kZXg6IDEwMDA7XFxuJHppbmRleExldmVsU2l6ZTogMTAwO1xcbiRpY29uc1ppbmRleExldmVsOiAxO1xcbiR3aW5kb3dzWmluZGV4TGV2ZWw6IDI7XFxuJHRhc2tiYXJaaW5kZXhMZXZlbDogMztcXG4kZm9yZWdyb3VuZFppbmRleDogKCRiYXNlWmluZGV4ICsgJHdpbmRvd3NaaW5kZXhMZXZlbCAqICR6aW5kZXhMZXZlbFNpemUpICtcXG4gICgkemluZGV4TGV2ZWxTaXplIC8gMik7XFxuXFxuJHRhc2tiYXJFbnRyeVdpZHRoOiAxNjBweDtcXG4kdGl0bGViYXJIZWlnaHQ6IDIycHg7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWVudVZpZXdcIjogXCJNZW51Vmlld19tZW51Vmlld19fcF9WYlNcIixcblx0XCJtZW51SWNvblwiOiBcIk1lbnVWaWV3X21lbnVJY29uX18zbFkwRlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/FileManager/MenuView.module.scss\n");

/***/ })

})