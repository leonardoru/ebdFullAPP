(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["social-networks-Main-vue","social-networks-Pinterest-vue","social-networks-SocialProfiles-vue","social-networks-Twitter-vue"],{"032a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-twitter"},[s("core-card",{attrs:{slug:"twitter","header-text":t.strings.twitterCardSettings}},[s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0))}})]),s("core-settings-row",{attrs:{name:t.strings.enableTwitterCard},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.options.social.twitter.general.enable,callback:function(e){t.$set(t.options.social.twitter.general,"enable",e)},expression:"options.social.twitter.general.enable"}})]},proxy:!0}])}),t.options.social.twitter.general.enable?s("core-settings-row",{staticClass:"default-card-type",attrs:{name:t.strings.defaultCardType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-select",{attrs:{size:"medium",options:t.twitterCards,value:t.getCardOptions(t.options.social.twitter.general.defaultCardType)},on:{input:function(e){return t.options.social.twitter.general.defaultCardType=e.value}}})]},proxy:!0}],null,!1,4142204625)}):t._e(),t.options.social.twitter.general.enable?s("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:t.strings.defaultImageSourcePosts,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-select",{attrs:{size:"medium",options:t.imageSourceOptions,value:t.getImageSourceOption(t.options.social.twitter.general.defaultImageSourcePosts)},on:{input:function(e){return t.options.social.twitter.general.defaultImageSourcePosts=e.value}}})]},proxy:!0}],null,!1,3131312444)}):t._e(),t.options.social.twitter.general.enable&&"custom"===t.options.social.twitter.general.defaultImageSourcePosts?s("core-settings-row",{attrs:{name:t.strings.postCustomFieldName,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"},model:{value:t.options.social.twitter.general.customFieldImagePosts,callback:function(e){t.$set(t.options.social.twitter.general,"customFieldImagePosts",e)},expression:"options.social.twitter.general.customFieldImagePosts"}})]},proxy:!0}],null,!1,3337947198)}):t._e(),t.options.social.twitter.general.enable?s("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.defaultTwitterImagePosts,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"twitter-image-upload"},[s("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.general.defaultImagePosts,callback:function(e){t.$set(t.options.social.twitter.general,"defaultImagePosts",e)},expression:"options.social.twitter.general.defaultImagePosts"}}),s("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(e){return t.openUploadModal("defaultImagePosts",["options","social","twitter","general","defaultImagePosts"])}}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),s("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(e){t.options.social.twitter.general.defaultImagePosts=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),s("div",{staticClass:"aioseo-description"},["summary"===t.options.social.twitter.general.defaultCardType?s("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),"summary_large_image"===t.options.social.twitter.general.defaultCardType?s("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),t.canShowImage(t.options.social.twitter.general.defaultImagePosts)?s("img",{attrs:{src:t.options.social.twitter.general.defaultImagePosts}}):t._e()]},proxy:!0}],null,!1,4207572095)}):t._e(),t.options.social.twitter.general.enable?s("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:t.strings.defaultImageSourceTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t.isUnlicensed?t._e():s("base-select",{attrs:{size:"medium",options:t.getTermImageSourceOptions(),value:t.getImageSourceOption(t.options.social.twitter.general.defaultImageSourceTerms)},on:{input:function(e){return t.options.social.twitter.general.defaultImageSourceTerms=e.value}}}),t.isUnlicensed?s("base-select",{attrs:{size:"medium",options:t.getTermImageSourceOptions(),value:t.getImageSourceOption("default"),disabled:""}}):t._e(),t.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:t._s(t.strings.defaultTermImageSourceUpsell)}})]):t._e()]},proxy:!0}],null,!1,4034726477)}):t._e(),t.options.social.twitter.general.enable&&"custom"===t.options.social.twitter.general.defaultImageSourceTerms&&!t.isUnlicensed?s("core-settings-row",{attrs:{name:t.strings.termsCustomFieldName,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"},model:{value:t.options.social.twitter.general.customFieldImageTerms,callback:function(e){t.$set(t.options.social.twitter.general,"customFieldImageTerms",e)},expression:"options.social.twitter.general.customFieldImageTerms"}})]},proxy:!0}],null,!1,2341435720)}):t._e(),t.options.social.twitter.general.enable&&!t.isUnlicensed?s("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.defaultTwitterImageTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"twitter-image-upload"},[s("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.general.defaultImageTerms,callback:function(e){t.$set(t.options.social.twitter.general,"defaultImageTerms",e)},expression:"options.social.twitter.general.defaultImageTerms"}}),s("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(e){return t.openUploadModal("defaultImageTerms",["options","social","twitter","general","defaultImageTerms"])}}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),s("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(e){t.options.social.twitter.general.defaultImageTerms=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),s("div",{staticClass:"aioseo-description"},["summary"===t.options.social.twitter.general.defaultCardType?s("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),"summary_large_image"===t.options.social.twitter.general.defaultCardType?s("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),t.canShowImage(t.options.social.twitter.general.defaultImageTerms)?s("img",{attrs:{src:t.options.social.twitter.general.defaultImageTerms}}):t._e()]},proxy:!0}],null,!1,496431999)}):t._e(),t.options.social.twitter.general.enable?s("core-settings-row",{attrs:{name:t.strings.showTwitterAuthor,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"showTwitterAuthor",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.options.social.twitter.general.showAuthor,callback:function(e){t.$set(t.options.social.twitter.general,"showAuthor",e)},expression:"options.social.twitter.general.showAuthor"}})]},proxy:!0}],null,!1,536929787)}):t._e(),t.options.social.twitter.general.enable?s("core-settings-row",{attrs:{name:t.strings.additionalData,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"additionalData",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.social.twitter.general.additionalData,callback:function(e){t.$set(t.options.social.twitter.general,"additionalData",e)},expression:"options.social.twitter.general.additionalData"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.additionalDataDescription)+" ")])]},proxy:!0}],null,!1,4194794700)}):t._e()],1),t.options.social.twitter.general.enable?s("core-card",{attrs:{slug:"twitterHomePageSettings","header-text":t.strings.homePageSettings}},[t.$aioseo.data.staticHomePage?s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[s("span",{domProps:{innerHTML:t._s(t.strings.homePageDisabledDescription)}}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0))}})]):t._e(),t.$aioseo.data.staticHomePage?s("br"):t._e(),s("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-twitter-preview",{attrs:{image:t.options.social.twitter.homePage.image,card:t.options.social.twitter.homePage.cardType},scopedSlots:t._u([{key:"site-title",fn:function(){return[t.$aioseo.data.staticHomePage?s("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.$aioseo.data.staticHomePageTwitterTitle||"#site_title"),100))}}):t._e(),t.$aioseo.data.staticHomePage?t._e():s("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.options.social.twitter.homePage.title||"#site_title"),100))}})]},proxy:!0},{key:"site-description",fn:function(){return[t.$aioseo.data.staticHomePage?s("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.$aioseo.data.staticHomePageTwitterDescription||"#tagline")))}}):t._e(),t.$aioseo.data.staticHomePage?t._e():s("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.options.social.twitter.homePage.description||"#tagline")))}})]},proxy:!0}],null,!1,1448835471)})]},proxy:!0}],null,!1,1072122056)}),t.$aioseo.data.staticHomePage?t._e():s("core-settings-row",{staticClass:"default-card-type",attrs:{name:t.strings.cardType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-select",{attrs:{size:"medium",options:t.twitterCards,value:t.getCardOptions(t.options.social.twitter.homePage.cardType)},on:{input:function(e){return t.options.social.twitter.homePage.cardType=e.value}}})]},proxy:!0}],null,!1,3610407505)}),t.$aioseo.data.staticHomePage?t._e():s("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.homePageImage,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"twitter-image-upload"},[s("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.homePage.image,callback:function(e){t.$set(t.options.social.twitter.homePage,"image",e)},expression:"options.social.twitter.homePage.image"}}),s("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(e){return t.openUploadModal("homePageImage",["options","social","twitter","homePage","image"])}}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),s("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(e){t.options.social.twitter.homePage.image=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),s("div",{staticClass:"aioseo-description"},["summary"===t.options.social.twitter.homePage.cardType?s("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),"summary_large_image"===t.options.social.twitter.homePage.cardType?s("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),t.canShowImage(t.options.social.twitter.homePage.image)?s("img",{attrs:{src:t.options.social.twitter.homePage.image}}):t._e()]},proxy:!0}],null,!1,3831545577)}),t.$aioseo.data.staticHomePage?t._e():s("core-settings-row",{attrs:{name:t.strings.homePageTitle},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(e){return t.updateCount(e,"titleCount")}},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddHomePageTitle)+" ")]},proxy:!0}],null,!1,4162175994),model:{value:t.options.social.twitter.homePage.title,callback:function(e){t.$set(t.options.social.twitter.homePage,"title",e)},expression:"options.social.twitter.homePage.title"}}),s("div",{staticClass:"max-recommended-count",domProps:{innerHTML:t._s(t.maxRecommendedCount(t.titleCount,70))}})]},proxy:!0}],null,!1,1897915047)}),t.$aioseo.data.staticHomePage?t._e():s("core-settings-row",{attrs:{name:t.strings.homePageDescription},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(e){return t.updateCount(e,"descriptionCount")}},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddHomePageDescription)+" ")]},proxy:!0}],null,!1,3376949532),model:{value:t.options.social.twitter.homePage.description,callback:function(e){t.$set(t.options.social.twitter.homePage,"description",e)},expression:"options.social.twitter.homePage.description"}}),s("div",{staticClass:"max-recommended-count",domProps:{innerHTML:t._s(t.maxRecommendedCount(t.descriptionCount,200))}})]},proxy:!0}],null,!1,2511677049)})],1):t._e()],1)},a=[],o=(s("7db0"),s("5530")),n=s("9c0e"),r=s("2f62"),l={mixins:[n["a"],n["b"],n["d"],n["f"],n["m"],n["o"]],data:function(){return{titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:this.$t.__("Twitter Card Settings",this.$td),description:this.$t.sprintf(this.$t.__("Enable this feature if you want Twitter to display a preview card with images and a text excerpt when a link to your site is shared.",this.$td),"All in One SEO"),enableTwitterCard:this.$t.__("Enable Twitter Card",this.$td),defaultCardType:this.$t.__("Default Card Type",this.$td),summary:this.$t.__("Summary",this.$td),summaryLarge:this.$t.__("Summary with Large Image",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultTwitterImagePosts:this.$t.__("Default Post Twitter Image",this.$td),defaultTwitterImageTerms:this.$t.__("Default Term Twitter Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSizeSummary:this.$t.__("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),minimumSizeSummaryWithLarge:this.$t.__("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),homePageImage:this.$t.__("Home Page Image",this.$td),homePageTitle:this.$t.__("Home Page Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),remove:this.$t.__("Remove",this.$td),showTwitterAuthor:this.$t.__("Show Twitter Author",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("The home page settings below have been disabled because you are using a static home page. You can %1$sedit your home page settings%2$s directly to change the title, meta and image.",this.$td),'<a href="'.concat(this.$aioseo.urls.staticHomePage,'">'),"</a>"),cardType:this.$t.__("Card Type",this.$td),additionalData:this.$t.__("Additional Data",this.$td),additionalDataDescription:this.$t.__("Enable this option to show additional Twitter data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",this.$td),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>".concat("AIOSEO"," Pro</strong>"),this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0))}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["isUnlicensed"])),Object(r["e"])(["options"])),{},{twitterCards:function(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]}}),methods:{getCardOptions:function(t){return this.twitterCards.find((function(e){return e.value===t}))}}},c=l,u=(s("7b33"),s("2877")),m=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=m.exports},"0ff8":function(t,e,s){},"507a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-main",{attrs:{"page-name":t.strings.pageName}},[s(t.$route.name,{tag:"component"})],1)},a=[],o=s("683d"),n=s("7e6e"),r=s("8f64"),l=s("032a"),c={components:{Facebook:o["default"],Pinterest:n["default"],SocialProfiles:r["default"],Twitter:l["default"]},data:function(){return{strings:{pageName:this.$t.__("Social Networks",this.$td)}}}},u=c,m=s("2877"),g=Object(m["a"])(u,i,a,!1,null,null,null);e["default"]=g.exports},"7b33":function(t,e,s){"use strict";var i=s("0ff8"),a=s.n(i);a.a},"7e6e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-pinterest"},[s("core-card",{attrs:{slug:"pinterest","header-text":t.strings.pinterest}},[s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0))}}),s("br"),s("br"),s("strong",[t._v(t._s(t.strings.skipStep))])]),s("core-settings-row",{attrs:{name:t.strings.pinterestVerificationCode,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"},on:{blur:function(e){return t.maybeUpdateId("pinterest")}},model:{value:t.options.webmasterTools.pinterest,callback:function(e){t.$set(t.options.webmasterTools,"pinterest",e)},expression:"options.webmasterTools.pinterest"}})]},proxy:!0}])})],1)],1)},a=[],o=s("5530"),n=s("2f62"),r=s("9c0e"),l={mixins:[r["h"]],data:function(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.sprintf(this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),"All in One SEO"),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}},computed:Object(o["a"])({},Object(n["e"])(["options"]))},c=l,u=s("2877"),m=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=m.exports},"8f64":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-social-networking-profiles"},[s("core-card",{attrs:{slug:"socialProfiles","header-text":t.strings.socialProfiles}},[s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" ")]),s("core-social-profiles",{attrs:{options:t.options}})],1)],1)},a=[],o=s("5530"),n=s("2f62"),r={data:function(){return{strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.sprintf(this.$t.__("To let search engines know which profiles are associated with this site, enter them below:",this.$td),"All in One SEO")}}},computed:Object(o["a"])({},Object(n["e"])(["options"]))},l=r,c=s("2877"),u=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=u.exports}}]);