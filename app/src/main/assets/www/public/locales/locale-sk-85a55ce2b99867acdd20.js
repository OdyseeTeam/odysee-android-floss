/*! For license information please see locale-sk-85a55ce2b99867acdd20.js.LICENSE.txt */
(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[9971],{41512:function(e,t,o){var n,r,s,a;function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}a=function(e){"use strict";var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),o="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function n(e){return e>1&&e<5}function r(e,t,o,r){var s=e+" ";switch(o){case"s":return t||r?"pár sekúnd":"pár sekundami";case"ss":return t||r?s+(n(e)?"sekundy":"sekúnd"):s+"sekundami";case"m":return t?"minúta":r?"minútu":"minútou";case"mm":return t||r?s+(n(e)?"minúty":"minút"):s+"minútami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?s+(n(e)?"hodiny":"hodín"):s+"hodinami";case"d":return t||r?"deň":"dňom";case"dd":return t||r?s+(n(e)?"dni":"dní"):s+"dňami";case"M":return t||r?"mesiac":"mesiacom";case"MM":return t||r?s+(n(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return t||r?"rok":"rokom";case"yy":return t||r?s+(n(e)?"roky":"rokov"):s+"rokmi"}}return e.defineLocale("sk",{months:t,monthsShort:o,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:case 4:case 5:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})},"object"===u(t)?a(o(22768)):(r=[o(22768)],void 0===(s="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=s))}}]);
//# sourceMappingURL=locale-sk-85a55ce2b99867acdd20.js.map