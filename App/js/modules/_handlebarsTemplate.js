var _HandlebarsTemplate = (function(window){

  var _header = function(){
    var data = { title: 'This Form', name: 'Joey' };
      var headerTpl = Cerdelga.templates.header(data); // Without any data being passed
      $('#header').html(headerTpl);
  };

  var _footer = function(){
    var footerTppl = Cerdelga.templates.footer;
    $('#footer').html(footerTppl);
  };
 
  var init = function() {  
    _header();
    _footer();
  } 
   
  return {
    init: init
  }

}(window));