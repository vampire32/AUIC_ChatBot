

$('body').ready(function() {
  res('Hi')
});

function sender() {
  var img=$('<img src="img/person.png" alt="">')
  var msg = $('.txt1').val();
  var api="http://api.brainshop.ai/get?bid=161896&key=pMaJ0cOw64WuADcD&uid=[uid]&msg="+msg

  $('.main').append('<div class="txt-div" ><img class="img" src="img/person.png" alt=""><div class="txt msg">'+msg+'</div><div class="time">'+new Date().toLocaleTimeString()+'</div></div>');
  $('.txt1').val('');
  $('.chat').scrollTop = $('.chat').scrollHeight;
}

function res(msg) {

  $('.main').append('<div class="txt-div2" ><img class="img" src="img/robo.png" alt=""><div class="txt2 msg">'+msg+'</div><div class="time2">'+new Date().toLocaleTimeString()+'</div></div>');
}