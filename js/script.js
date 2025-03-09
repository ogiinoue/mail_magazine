//ハンバーガーメニュの記述

$('.hamburger_menu').on('click',function(){ //"hamburger_menu"をクリックしたら、
  $('.hamburger_menu').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.header__block').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
  $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
});