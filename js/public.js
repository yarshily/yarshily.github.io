// IE10以下浏览器提示
function hiUpgrade() {
    window.AESKey = '';
    // 判断浏览器是否支持placeholder属性
    function isSupportPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    };
    //判断是否是IE浏览器，包括Edge浏览器
    function IEVersion() {
        //取得浏览器的userAgent字符串
        var userAgent = navigator.userAgent;
        //判断是否IE浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if (isIE) {
            // ie10及以下
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion < 10 || !isSupportPlaceholder()) {
                return true;
            }
        } else {
            return false;
        }
    }
    var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE10以下的浏览器，建议您<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';
    if (IEVersion()) {
        document.write(tpl);
    }
}
hiUpgrade();

$('.header .container-head .right .menu-box .top .search').click(function(){
    $('.zz-hsearch-box').addClass('on')
})

$('.zz-hsearch-box .zz-close').click(function(){
    $('.zz-hsearch-box').removeClass('on')
})

// 使用IE浏览器提示
// function hiUpgrade() {
//     window.AESKey = '';
//     // 判断浏览器是否支持placeholder属性
//     function isSupportPlaceholder() {
//         var input = document.createElement('input');
//         return 'placeholder' in input;
//     };
//     //判断是否是IE浏览器，包括Edge浏览器
//     function IEVersion() {
//         //取得浏览器的userAgent字符串
//         var userAgent = navigator.userAgent;
//         //判断是否IE浏览器
//         var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
//         if (isIE) {
//             // ie10及以下
//             var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
//             reIE.test(userAgent);
//             var fIEVersion = parseFloat(RegExp["$1"]);
//             if (fIEVersion <= 10 || !isSupportPlaceholder()) {
//                 return true;
//             }
//         } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
//             // ie11
//             return true;
//         } else {
//             return false;
//         }
//     }
//     var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE浏览器，请<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';
//     if (IEVersion()) {
//         document.write(tpl);
//     }
// }
// hiUpgrade();


// 刷新页面直接回到顶部
// if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';  //auto刷新在当前位置  manual刷新在头部位置
// }

// 设置:root变量
function setRootDefault(name,key){
    document.documentElement.style.setProperty(name,key);
}
function setAllRoot(){
    setRootDefault("--color",'#005CE6');
    setRootDefault("--vh",$(window).height()+'px');
};
setAllRoot();
$(window).resize(function() {
    setAllRoot();
})




// 导航
function headNav() {
    var oBody = $("body");
    var oHead = $(".header");
    var oNav = $("#c-header .c-nav");
    var oBtn = $("#c-header .c-switch");
    var oL = $("#c-header .c-nav>li");
    var oTitle = $("#c-header .c-nav2 li .c-title-box");
    var num = 0;
    var i = 0;
    var oP = $("#c-placeholder");
    var b = true;
    var t = null;

    // 窗口重置隐藏手机端导航
    $(window).resize(function() {
        if ($(window).width()>991) {
            oBody.removeClass('c-open');
        }
    });

    // 手机端导航栏目下拉
    oTitle.click(function() {
        $(this).next().stop().slideToggle();
        $(this).toggleClass("on");
    });

    // 鼠标移入导航样式
    oHead.hover(function() {
        $(this).addClass("hstyle2");
    }, function() {
        if ($(window).scrollTop() <= oHead.outerHeight() && oP.length == 0 && !oBody.hasClass("c-open")) {
            oHead.removeClass("hstyle2");
        } else if ($(window).scrollTop() > oHead.outerHeight()) {
            oHead.addClass("hstyle2");
        } else if ($(window).scrollTop() <= oHead.outerHeight() && oP.length != 0) {
            oHead.addClass("hstyle2");
        }
    });

    // 手机端导航显示
    oBtn.click(function() {
        if (b) {
            b = false;
            // t = $(window).scrollTop();
            oBody.addClass('c-open');
            // oBody.css("top", -t);
        } else {
            b = true;
            oBody.removeClass('c-open');
            // oBody.css("top", "0");
            // $(window).scrollTop(t);
        }
    });

    // 导航显示及样式
    function fn1() {
        if ($(window).scrollTop() - i > 0 && $(window).scrollTop() > oHead.outerHeight() && !oBody.hasClass("c-open")) {
            i = $(window).scrollTop();
            oHead.addClass("head-move");
            oHead.addClass("hstyle2");
        } else if ($(window).scrollTop() - i <= 0) {
            i = $(window).scrollTop();
            oHead.removeClass("head-move");
            if ($(window).scrollTop() <= oHead.outerHeight() && oP.length == 0 && !oBody.hasClass("c-open")) {
                oHead.removeClass("hstyle2");
            } else if ($(window).scrollTop() > oHead.outerHeight()) {
                oHead.addClass("hstyle2");
            } else if ($(window).scrollTop() <= oHead.outerHeight() && oP.length != 0) {
                oHead.addClass("hstyle2");
            }
        }
    }
    fn1();
    $(window).scroll(function() {
        fn1();
    });

    // pc导航动画
    oL.each(function() {
        if ($(this).hasClass("on")) {
            num = $(this).index();
        }
        $(this).hover(function() {
                oL.eq(num).removeClass("on");
                $(this).children("ul").stop().slideDown();
            },
            function() {
                oL.eq(num).addClass("on");
                $(this).children("ul").stop().slideUp();
            });
    });
}
headNav();
$(window).ready(function(){
    $('.header .container-head .close').on('click',function(){
        $(this).toggleClass('on');
        $('.header .container-head .right').stop().slideToggle();
    })
})
function erji(){
    if($(window).width() > 1200){
        $('.header .container-head .right .menu-box .down .menu ul li').on('mouseover',function(){
            $(this).children('.s-menu').stop().slideDown();
        })
        $('.header .container-head .right .menu-box .down .menu ul li').on('mouseout',function(){
            $(this).children('.s-menu').stop().slideUp();
        })
    } else {
        $('.header .container-head .right .menu-box .down .menu ul li .link i').on('click',function(){
            $(this).toggleClass('on');
            $(this).parent().next().stop().slideToggle();
        })
    }
}
$(document).ready(function(){
    erji()
})
$(window).resize(function(){
    erji()
})


// 顶部搜索
function headSearch() {
    var obj = $("#c-header form");
    var oBox = obj.find(".c-box");
    obj.hover(function() {
        oBox.stop().fadeIn();
    }, function() {
        oBox.stop().fadeOut();
    });
    obj.submit(function(){
        if(!$(this).find("input").val()){
            layer.msg('请输入搜索的关键词！', {
                icon: 7
            });
            return false;
        }
    });
}
headSearch();

// 首页轮播
function homeBanner() {
    var swiper = new Swiper(".banner .swiper-container", {
        effect : 'fade',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
        },
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
        on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
        // breakpoints: {
        //     767: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     }
        // }
    });
    
}
homeBanner();

// 设置全屏
HiSetClientHeight($(".banner"));

// 可视化数据滚动
function visualData(obj) {
    $(window).load(function() {
        obj.each(function() {
            var h = Number($(this).html());
            var t = "";
            var n = Math.ceil(h / 20);
            var a = true;
            var This = $(this);
            if ($(this).length != 0) {
                t = $(this).offset().top;
            }
            This.html(0);
            fn1();
            $(window).scroll(function() {
                fn1();
            });

            function fn1() {
                var wT = $(window).scrollTop();
                if (wT > t - $(window).height() + 50 && wT < t - 50 && a == true) {
                    a = false;
                    var y = 0;
                    var timer2 = setInterval(function() {
                        if (y >= h) {
                            y = h;
                            clearInterval(timer2);
                        }
                        This.html(y);
                        y += n;
                    }, 100);
                }
            }
        });
    });
}
visualData($(".c-num-move"));


// 侧边栏显示隐藏
function sidePop() {
    var obj = $("#c-go-top");
    function fn1() {
        if ($(window).scrollTop() > $(window).height()) {
            obj.fadeIn();
        } else {
            obj.fadeOut();
        }
    }
    fn1();
    $(window).scroll(function() {
        fn1();
    });
}
sidePop();

// 页面回到顶部
function goTop() {
    $("html,body").animate({ scrollTop: 0 }, 500);
}

// 底部导航
function footerNav() {
    var aList = $("#c-footer .c-list-box");
    aList.each(function() {
        var This = $(this);
        $(this).find(".c-title-box").click(function() {
            if ($(window).width() < 768) {
                This.toggleClass("on");
                This.find(".c-list").stop().slideToggle();
            }
        });
    });
}
footerNav();

// 二维码弹窗
function codePop() {
    var b = $("#c-footer .c-code-btn");
    var w = $("#c-code-pop");
    var c = w.find(".c-close");
    var d = w.find(".c-img-box");
    var oImg = w.find(".c-img-box>img");
    b.click(function() {
        oImg.attr("src",$(this).data("img-src"));
        w.stop().fadeToggle();
        
    });
    d.click(function() {
        return false;
    });
    w.click(function() {
        w.stop().fadeToggle();
    });
    c.click(function() {
        w.stop().fadeToggle();
    });
}
codePop();

// banner全屏
// HiSetClientHeight($(".banner"));



// 公共头底部引入
$(function () {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
})


// 头部占位标签
function headH(){
    var hHeight = $('.header').outerHeight();
    $('.placeholder').css('height',hHeight)
}
$(window).load(function(){
    headH();
})
$(window).resize(function(){
    headH();
})








