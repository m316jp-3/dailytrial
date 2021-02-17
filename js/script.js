$(function(){

  let mySwiper = new Swiper ('.swiper-container', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView:1.2,  //スライドを3つ（分）表示
    spaceBetween:16,
    effect: 'slide',  //スライドのエフェクトを slide に

    breakpoints: {
      // 画面幅が 768px 以上の場合（window width >= 640px）
      768: {
        slidesPerView: 3,
        
      }
    },
  
 
    //ページネーション表示の設定
    pagination: { 
      el: '.swiper-pagination', //ページネーションの要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
   
    //ナビゲーションボタン（矢印）表示の設定
    navigation: { 
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    }
   
    
  })

  //drawer.js
  $('.drawer').drawer();
  $('.drawer').click(function(){ 
      $('.drawer-hamburger-icon').toggleClass('is-open');
   });
$('.drawer').click(function(){ 
    $('.hamburger-icon-image').toggleClass('is-open');
 });






// アコーディオン（FAQ)
jQuery('.accordion-head').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion-icon').toggleClass('open-clicked');
});


jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 100) {
      jQuery('#page_top').show();
    } else {
      jQuery('#page_top').hide();
    }
  });
  
  jQuery('#page_top').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });



  //smoothscroll
//#から始まるURLがクリックされたとき

$('a[href^="#"]').click(function(){
    //移動距離を指定　（ms）
    let speed = 300;
    //hrefで指定されたidを取得
    let id = $(this).attr("href");
    //idの値が＃のみだったら、ターゲットをhtmlタグにしてトップへ戻る
    let target = $("#" == id ? "html" : id);
    //ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top ;
    //ターゲットの一までspeedの速度で移動
    $("html,body").animate(
        {
            scrollTop: position - $('#js-header').outerHeight()
        },
        speed
    );
    return false;

});


//google form
let $form = $('#js-form')
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown
      }
    } 
  });
  return false; 
}); 


})

