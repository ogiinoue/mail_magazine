//ハンバーガーメニュの記述

$('.burger-btn').on('click',function(){ //"burger-btn"をクリックしたら、
  $('.burger-btn').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.header-nav').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
});