(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22a5af06"],{"42d4":function(t,e,a){"use strict";a("6e5c")},"6e5c":function(t,e,a){},"8b08":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative",left:"250px",width:"84%"}},[1===t.storeStatus?a("div",[a("h4",{staticStyle:{"text-align":"left"}},[t._v("商品管理")]),a("div",{staticStyle:{height:"30px"}},[a("el-button",{staticStyle:{float:"left","margin-bottom":"20px"},attrs:{type:"primary",round:""},on:{click:t.add}},[t._v(" 添加商品 ")])],1),a("el-table",{staticStyle:{width:"100%","font-size":"16px","border-radius":"15px","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.3)"},attrs:{data:t.singlePageOrdersList,border:"",stripe:"","empty-text":"暂无数据"}},[a("el-table-column",{attrs:{label:"商品 ID",sortable:"",prop:"goodsId"}}),a("el-table-column",{attrs:{label:"商品名称",sortable:"",prop:"name"}}),a("el-table-column",{attrs:{label:"价格",sortable:"",width:"120",prop:"sellPrice"}}),a("el-table-column",{attrs:{label:"分类",sortable:"",prop:"category",width:"150"}}),a("el-table-column",{attrs:{label:"图片",prop:"img"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"right-end","close-delay":0}},[a("img",{attrs:{src:e.row.img,alt:"加载失败"}}),a("div",{staticClass:"name-wrapper",staticStyle:{width:"70px"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v("查看图片")])],1)])]}}],null,!1,440847968)}),a("el-table-column",{attrs:{label:"描述",prop:"description",width:"500"}}),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",round:""},on:{click:function(a){return t.modify(e.row.goodsId)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",round:""},on:{click:function(a){return t.deleteGoods(e.row.goodsId)}}},[t._v("删除")])]}}],null,!1,4030890934)})],1),a("br"),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","page-size":t.pageSize,total:t.totalOrders},on:{"current-change":t.currentChange}}),a("br"),a("div",{staticStyle:{"text-align":"left","margin-top":"25px"}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{staticClass:"form1",attrs:{label:"店铺名称"}},[a("span",{staticStyle:{"font-size":"18px","margin-right":"30px"}},[t._v(t._s(this.storeName))]),a("el-button",{attrs:{type:"primary",round:""}},[t._v("修改")])],1)],1)],1),a("el-dialog",{attrs:{visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.closeDialog}},[a("el-form",{staticStyle:{"text-align":"left"},attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"商品名称","label-width":t.formLabelWidth}},[a("el-input",{staticClass:"inputWidth",attrs:{autocomplete:"off"},model:{value:t.form.productName,callback:function(e){t.$set(t.form,"productName",e)},expression:"form.productName"}})],1),a("el-form-item",{attrs:{label:"商品类别","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择商品类别"},model:{value:t.form.categoryId,callback:function(e){t.$set(t.form,"categoryId",e)},expression:"form.categoryId"}},t._l(this.categories,(function(t){return a("el-option",{key:t.categoryId,attrs:{label:t.categoryName,value:t.categoryId}})})),1)],1),a("el-form-item",{attrs:{label:"商品图片","label-width":t.formLabelWidth}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{width:"300px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/",limit:1,"list-type":"picture","auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("图片比例为1:1")])],1)],1),a("el-form-item",{attrs:{label:"售价","label-width":t.formLabelWidth}},[a("el-input",{staticClass:"inputWidth",attrs:{autocomplete:"off"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),a("el-form-item",{attrs:{label:"描述信息","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入描述信息"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm1}},[t._v("确 定")])],1)],1)],1):a("div",[a("p",{staticStyle:{"margin-top":"38vh"}},[t._v("您已成功申请开店，请等待管理员审核！")])])])},r=[],s=a("b85c"),l=(a("b0c0"),a("a4d3"),a("e01a"),a("fb6a"),{name:"StoreManage",data:function(){return{storeId:null,storeName:"",storeStatus:null,tableData:[],selectedGoodsId:null,dialogFormVisible:!1,dialogType:0,form:{productName:"",categoryId:"",productImg:"",price:null,content:""},categories:[],currentPage:1,totalOrders:0,pageSize:8,singlePageOrdersList:[],formLabelWidth:"120px"}},methods:{add:function(){this.dialogFormVisible=!0,this.dialogType=0},modify:function(t){this.selectedGoodsId=t,this.dialogFormVisible=!0,this.dialogType=1;var e,a=Object(s["a"])(this.tableData);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(this.selectedGoodsId===o.goodsId){this.form.productName=o.name,this.form.categoryId=o.categoryId,this.form.price=o.sellPrice,this.form.content=o.description;break}}}catch(r){a.e(r)}finally{a.f()}},deleteGoods:function(t){alert(t)},closeDialog:function(){this.form={productName:"",categoryId:"",productImg:"",price:null,content:""}},submitForm1:function(){var t=this,e={productName:this.form.productName,categoryId:this.form.categoryId,rootCategoryId:0,content:this.form.content,shopID:this.storeId,productStatus:1,skus:[{sellPrice:this.form.price,status:1}]};1===this.dialogType&&(e.productId=this.selectedGoodsId),this.$http.post(1===this.dialogType?"/shop/updateproduct":"/shop/addproduct",e).then((function(e){1e4===e.code?(t.$message.success("操作成功"),t.getOrders()):t.$message.error("未知错误")})),this.dialogFormVisible=!1},getOrders:function(){var t=this;this.$http.get("shop/list",{shopID:this.storeId}).then((function(e){if(1e4===e.code){t.tableData=[];var a,o=Object(s["a"])(e.data);try{for(o.s();!(a=o.n()).done;){var r,l=a.value,i=void 0,c=Object(s["a"])(t.categories);try{for(c.s();!(r=c.n()).done;){var n=r.value;n.categoryId===l.categoryId&&(i=n.categoryName)}}catch(d){c.e(d)}finally{c.f()}t.tableData.push({goodsId:parseInt(l.productId),name:l.productName,sellPrice:l.skus&&0!==l.skus.length?l.skus[0].sellPrice:null,categoryId:l.categoryId,category:i,description:l.content,img:l.imgs&&0!==l.imgs.length?l.imgs[0].url:null})}}catch(d){o.e(d)}finally{o.f()}t.totalOrders=t.tableData.length,t.currentChange(t.currentPage)}else t.$message.error("获取店铺信息失败")}))},currentChange:function(t){this.currentPage=t;var e=(t-1)*this.pageSize;this.singlePageOrdersList=this.tableData.slice(e,e+this.pageSize)}},created:function(){var t=this;this.$http.get("/shop/listshopsbyuserid",{userId:JSON.parse(localStorage.getItem("userInform")).userId}).then((function(e){1e4===e.code?(t.storeId=e.data[0].shopID,t.storeName=e.data[0].shopName,t.storeStatus=e.data[0].status,1===t.storeStatus&&t.$http.get("/index/category-recommends").then((function(e){if(1e4===e.code){var a,o=Object(s["a"])(e.data);try{for(o.s();!(a=o.n()).done;){var r=a.value;t.categories.push({categoryId:r.categoryId,categoryName:r.categoryName})}}catch(l){o.e(l)}finally{o.f()}t.getOrders()}else t.$message.error(e.msg)}))):t.$message.error(e.msg)}))}}),i=l,c=(a("42d4"),a("2877")),n=Object(c["a"])(i,o,r,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-22a5af06.17469ddb.js.map