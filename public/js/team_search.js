var searchPerformance = function (value){
    $.when(
        $(".resultsList").fadeOut("slow")
    ).done(function(){
        $(".resultsList").empty();
        $.getJSON("/culture/team_search" + "/?query=" + value, function(data, result){
            $(".resultsList").append("<div class='row' id='search_results'>");
            for (var i=0; i < result.length; i++){
                $(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'>" +
                                            "<a href='/culture/profile/" + data[i].id + "' class='card'>" +
                                            "<div class='figure'>" +
                                                "<!--공연자 사진 들어갈것-->" +
                                                "<img src='" + data[i].team_pic.url + "' alt='image' width='200px' height='200px'>" +
                                                "<div class='figView'><span class='icon-eye'></span></div>" +
                                            "</div>" +
                                            "<h2> " + data[i].team_name + " </h2>" +
                                            "<br>" +
                                            "<div class='cardAddress'><span class='glyphicon glyphicon-zoom-in'></span> " + data[i].team_loca + "</div>" +
                                            "<div class='cardAddress'><span class='fa fa-star-o'></span> 장르: " + data[i].team_kind + "</div>" +
                                            "<!--별점-->" +
                                            "<div class='clearfix'></div>" +
                                            "</a>" +
                                        "</div>");
           }
           $(".resultsList").append("</div>");
       });
       $(".resultsList").fadeIn("slow");
    });
}

$(document).ready(function(){
    $("#search_submit").click(
        function (){
            $.when(
                $(".resultsList").fadeOut("slow")
            ).done(function(){
                $(".resultsList").empty();
                $.getJSON("/culture/team_search" + "/?query=" + $("#search_team").val(), function(data, result){
                    $(".resultsList").append("<div class='row' id='search_results'>");
                    for (var i=0; i < result.length; i++){
                        $(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'>" +
                                                    "<a href='/culture/profile/" + data[i].id + "' class='card'>" +
                                                    "<div class='figure'>" +
                                                        "<!--공연자 사진 들어갈것-->" +
                                                        "<img src='" + data[i].team_pic.url + "' alt='image' width='200px' height='200px'>" +
                                                        "<div class='figView'><span class='icon-eye'></span></div>" +
                                                    "</div>" +
                                                    "<h2> " + data[i].team_name + " </h2>" +
                                                    "<br>" +
                                                    "<div class='cardA);ddress'><span class='glyphicon glyphicon-zoom-in'></span> " + data[i].team_loca + "</div>" +
                                                    "<div class='cardAddress'><span class='fa fa-star-o'></span> 장르: " + data[i].team_kind + "</div>" +
                                                    "<!--별점-->" +
                                                    "<div class='clearfix'></div>" +
                                                    "</a>" +
                                                "</div>");
                   }
                   $(".resultsList").append("</div>");
               });
               $(".resultsList").fadeIn("slow");
            });
        });
    $("#search_team").keypress(
        function(e){
        	if (e.which == 13) {/* 13 == enter key@ascii */
                $.when(
                    $(".resultsList").fadeOut("slow")
                ).done(function(){
                    $(".resultsList").empty();
                    $.getJSON("/culture/team_search" + "/?query=" + $("#search_team").val(), function(data, result){
                        $(".resultsList").append("<div class='row' id='search_results'>");
                        for (var i=0; i < result.length; i++){
                            $(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'>" +
                                                        "<a href='/culture/profile/" + data[i].id + "' class='card'>" +
                                                        "<div class='figure'>" +
                                                            "<!--공연자 사진 들어갈것-->" +
                                                            "<img src='" + data[i].team_pic.url + "' alt='image' width='200px' height='200px'>" +
                                                            "<div class='figView'><span class='icon-eye'></span></div>" +
                                                        "</div>" +
                                                        "<h2> " + data[i].team_name + " </h2>" +
                                                        "<br>" +
                                                        "<div class='cardA);ddress'><span class='glyphicon glyphicon-zoom-in'></span> " + data[i].team_loca + "</div>" +
                                                        "<div class='cardAddress'><span class='fa fa-star-o'></span> 장르: " + data[i].team_kind + "</div>" +
                                                        "<!--별점-->" +
                                                        "<div class='clearfix'></div>" +
                                                        "</a>" +
                                                    "</div>");
                       }
                       $(".resultsList").append("</div>");
                   });
                   $(".resultsList").fadeIn("slow");
                });
                
        		e.preventDefault();
        	};
    });
    
    
    $("a[name='aType']").click(function(){
       $.when(
            $(".resultsList").fadeOut("slow")
        ).done(function(){
            $(".resultsList").empty();
            $.getJSON("/culture/category_team" + "/?pType=" + $("input:radio[name='pType']:checked").val(), function(data, result){
                $(".resultsList").append("<div class='row' id='search_results'>");
                for (var i=0; i < result.length; i++){
                    $(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'>" +
                                                "<a href='/culture/profile/" + data[i].id + "' class='card'>" +
                                                "<div class='figure'>" +
                                                    "<!--공연자 사진 들어갈것-->" +
                                                    "<img src='" + data[i].team_pic.url + "' alt='image' width='200px' height='200px'>" +
                                                    "<div class='figView'><span class='icon-eye'></span></div>" +
                                                "</div>" +
                                                "<h2> " + data[i].team_name + " </h2>" +
                                                "<br>" +
                                                "<div class='cardAddress'><span class='glyphicon glyphicon-zoom-in'></span> 최근 공연:" + data[i].team_loca + "</div>" +
                                                "<div class='cardAddress'><span class='glyphicon glyphicon-zoom-in'></span> 주요 장소: " + data[i].team_loca + "</div>" +
                                                "<div class='cardAddress'><span class='fa fa-star-o'></span> 장르: " + data[i].team_kind + "</div>" +
                                                "<!--별점-->" +
                                                "<div class='clearfix'></div>" +
                                                "</a>" +
                                            "</div>");
               }
               $(".resultsList").append("</div>");
           });
           $(".resultsList").fadeIn("slow");
        });
   });
    
});
