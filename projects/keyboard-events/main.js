$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://goboiano.com/wp-content/uploads/2017/02/tumblr_odlj0sgxFa1slo5uzo1_500.gif';
  } else if ( key == 'b' ) {
    img = 'https://66.media.tumblr.com/96c9ab0bc22a2662e312bfdf943b505b/tumblr_p4ci0s4e691uxvvvzo1_500.gif';
  } else if ( key == 'c' ) {
    img = 'https://goboiano.com/wp-content/uploads/2017/02/tumblr_ol25lsTpC11uxvvvzo1_500.gif';
  }  else if ( key == 'd' ) {
    img = 'https://goboiano.com/wp-content/uploads/2017/02/tumblr_og340mJCTP1vj3zbeo1_500.gif';
  } else if ( key == 'e' ) {
    img = 'https://66.media.tumblr.com/af587b5281be5505f36dee6c0fbe9770/tumblr_pjx0rdmwkY1ui7oe1o1_500.gif';
  } else if ( key == 'f' ) {
    img = 'https://66.media.tumblr.com/4bdb414f65bff5eaf5419a396e4e8f8e/tumblr_p7gxvtYxo11u2fblco1_500.gif';
  } else if ( key == 'g' ) {
    img = 'https://66.media.tumblr.com/2bb0f75f5d8c86662f92fe0db90136fd/tumblr_ofot1heebw1vj3zbeo1_500.gif';
  } else if ( key == 'h' ) {
    img = 'https://goboiano.com/wp-content/uploads/2017/02/tumblr_ob72uia7xb1u6xtrco1_500.gif';
  } else if ( key == 'i' ) {
    img = 'https://66.media.tumblr.com/4a5651ac83de451917f538faa1807e20/tumblr_ok8hz5ZsW91vj3zbeo1_500.gif';
  } else if ( key == 'j' ) {
    img = 'https://66.media.tumblr.com/579541d93657a59525c309d6a85984c7/tumblr_otvnxtq8T51vv1g70o1_540.gifv';
  } else if ( key == 'k' ) {
    img = 'https://66.media.tumblr.com/1792979811f5bd032a406d850ab5aef4/tumblr_p3e38hfF3P1qie3w6o9_400.gif';
  } else if ( key == 'l' ) {
    img = 'https://66.media.tumblr.com/bbb056bf17613b2c6832414b6c347bf9/tumblr_p5hodkrEUQ1vd1993o1_500.gif';
  } else if ( key == 'm' ) {
    img = 'https://66.media.tumblr.com/185d89af5526ab7f7584c5b0bda90dd9/tumblr_p6ese9QNBE1x4j4w1o1_500.gif';
  } else if ( key == 'n' ) {
    img = 'https://66.media.tumblr.com/f86d8e00efb3aa33becdc954a59d4918/tumblr_p9222glLNQ1x1tr14o1_500.gif';
  } else if ( key == 'o' ) {
    img = 'https://66.media.tumblr.com/ef7f558ed3288ae33d67661530dca1e2/tumblr_phn5urQarN1u0xd9x_400.gif';
  } else if ( key == 'p' ) {
    img = 'https://66.media.tumblr.com/651b8ebf493dd768df51692bf6e3823d/tumblr_p35qr4IHaR1uxvvvzo1_500.gif';
  } else if ( key == 'q' ) {
    img = 'https://66.media.tumblr.com/7669a3caa2c655aad3c474916637c10b/tumblr_p5yqujS0Kh1vd1993o1_500.gif';
  } else if ( key == 'r' ) {
    img = 'https://66.media.tumblr.com/ddd0214d32f61ab63609390e174c0c0e/tumblr_ozl63vZtSh1rsghfro1_500.gif';
  } else if ( key == 's' ) {
    img = 'https://66.media.tumblr.com/799107172d13e1200707ad4c35e89540/tumblr_pba81bcHu21rsghfro1_500.gif';
  } else if ( key == 't' ) {
    img = 'https://66.media.tumblr.com/b907dfe12b022122e376ada63e67caf4/tumblr_oyfg356zRN1uxvvvzo1_500.gif';
  } else if ( key == 'u' ) {
    img = 'https://66.media.tumblr.com/bf74fd12a283ba220ba27cdc95e348f0/tumblr_p86sr25Yuv1vmiunio1_500.gif';
  } else if ( key == 'v' ) {
    img = 'https://66.media.tumblr.com/f3f5c632b63b09130477b2412630ba84/tumblr_p9icikV25C1xuc4e2o1_500.gif';
  } else if ( key == 'w' ) {
    img = 'https://66.media.tumblr.com/3f92404970abaefa036b6c8c4452171a/tumblr_pba82vlUmR1rsghfro1_500.gif';
  } else if ( key == 'x' ) {
    img = 'https://66.media.tumblr.com/d9950ce458bb1b2273dc308827314b3c/tumblr_ozf927nrAW1tlkklno1_500.gif';
  } else if ( key == 'y' ) {
    img = 'https://66.media.tumblr.com/efa483fb587b2939fafdec385cd6b3e3/tumblr_p9uuyjdwrt1xuc4e2o1_500.gif';
  } else if ( key == 'z' ) {
    img = 'https://66.media.tumblr.com/77857f98c1c36fdd07e07e9ae606ee81/tumblr_pba834MWxT1rsghfro1_500.gif';
  } 

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});

// Include tone.js in the head of your index file, before jQuery
// <script src="https://unpkg.com/tone@13.4.9/build/Tone.js"></script>
// or, load it via jQuery for the sake of testing this demo in dev tools.

/* $.getScript('https://unpkg.com/tone@13.4.9/build/Tone.js', function() {
  console.log('tone.js is loaded');
});

$(document).on('keypress', function(e) {
  var key = e.key;
  var synth = new Tone.Synth().toMaster();

  console.log('keypress:', key);

  if ( key > 0 && key < 10 ) {
    synth.triggerAttackRelease(('C' + key), '8n');
  }

  // etc.
}); */