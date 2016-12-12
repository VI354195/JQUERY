$(function(){
  $('#submit').on('click',function(){
    var val=$('#search').val();
    var link='http://www.omdbapi.com/?s='+val;
    $.ajax({
      type:'GET',
      url:link,
      success:function(view){
        console.log(view);
        view.Search.map(function(item){
          console.log(item.Year);
          console.log(item.Title);
          $("#view").append("<p>"+" Year Of Release :"+item.Year+"</p>")
          $("#view").append("<p>"+" Movie Title :"+item.Title+"</p>")
          $("#view").append('<div class="graphic"><img src='+item.Poster+'></div>');
        });
      }
    });
  });
});
