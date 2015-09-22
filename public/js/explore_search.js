var searchPerformance = function (value){
		$.when(
			$(".resultsList").fadeOut("slow")
		).done(function(){
			$(".resultsList").empty();
			$.getJSON("/culture/search" + "/?query=" + value, function(data, result){
				for (var i=0; i < result.length; i++){
				  var time_start = Date.parse(data[i].pf_time_start);
				  var time_end = Date.parse(data[i].pf_time_end);
				  
					$(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>" + 
												"<a href='/culture/single/" + data[i].id + "' class='card'>" +
													"<div class='figure'>" +
														"<img src='" + data[i].pf_image.url + "' alt='image' width='200px' height='200px'>" +
														"<div class='figView'><span class='icon-eye'></span></div>" +
														"<div class='figType'>공연예정</div>" +
													"</div>" +
													"<h2>" + data[i].pf_title + "</h2>" +
													"<br>" +
													"<div class='cardAddress'><span class='fa fa-clock-o'>  </span> 날짜 및 시간 : " + time_start.toLocaleString() + "~" + time_end.toLocaleString() + " </span></div>" +
													"<div class='cardAddress'><span class='icon-pointer'>  </span> 위치 : " + data[i].pf_address_sub + " </div>" +
													"<div class='cardAddress'><span class='fa fa-child'>  </span> 위치 설명 : " + data[i].pf_add_br + " </div>" +
													"<div class='cardAddress'> 장르 : " + data[i].pf_kind + " </div>" +
													"<div class='clearfix'></div>" +
												"</a>" +
											"</div>");
			   }
		   });
		   $(".resultsList").fadeIn("slow");
		});
	}
	
$(document).ready(function(){
	$("#search_pf").keypress(
		function(e){
			if (e.which == 13) {/* 13 == enter key@ascii */
				$.when(
					$(".resultsList").fadeOut("slow")
				).done(function(){
					$(".resultsList").empty();
					$.getJSON("/culture/search" + "/?query=" + $("#search_pf").val(), function(data, result){
						for (var i=0; i < result.length; i++){
						  var time_start = Date.parse(data[i].pf_time_start);
						  var time_end = Date.parse(data[i].pf_time_end);
						  
							$(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>" + 
														"<a href='/culture/single/" + data[i].id + "' class='card'>" +
															"<div class='figure'>" +
																"<img src='" + data[i].pf_image.url + "' alt='image' width='200px' height='200px'>" +
																"<div class='figView'><span class='icon-eye'></span></div>" +
																"<div class='figType'>공연예정</div>" +
															"</div>" +
															"<h2>" + data[i].pf_title + "</h2>" +
															"<br>" +
															"<div class='cardAddress'><span class='fa fa-clock-o'>  </span> 날짜 및 시간 : " + time_start.toLocaleString() + "~" + time_end.toLocaleString() + " </span></div>" +
															"<div class='cardAddress'><span class='icon-pointer'>  </span> 위치 : " + data[i].pf_address_sub + " </div>" +
															"<div class='cardAddress'><span class='fa fa-child'>  </span> 위치 설명 : " + data[i].pf_add_br + " </div>" +
															"<div class='cardAddress'> 장르 : " + data[i].pf_kind + " </div>" +
															"<div class='clearfix'></div>" +
														"</a>" +
													"</div>");
					   }
				   });
				   $(".resultsList").fadeIn("slow");
				});
				e.preventDefault();
			};
		});
	$("#search_submit").click(function (){
		$.when(
			$(".resultsList").fadeOut("slow")
		).done(function(){
			$(".resultsList").empty();
			$.getJSON("/culture/search" + "/?query=" + $("#search_pf").val(), function(data, result){
				for (var i=0; i < result.length; i++){
				  var time_start = Date.parse(data[i].pf_time_start);
				  var time_end = Date.parse(data[i].pf_time_end);
				  
					$(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>" + 
												"<a href='/culture/single/" + data[i].id + "' class='card'>" +
													"<div class='figure'>" +
														"<img src='" + data[i].pf_image.url + "' alt='image' width='200px' height='200px'>" +
														"<div class='figView'><span class='icon-eye'></span></div>" +
														"<div class='figType'>공연예정</div>" +
													"</div>" +
													"<h2>" + data[i].pf_title + "</h2>" +
													"<br>" +
													"<div class='cardAddress'><span class='fa fa-clock-o'>  </span> 날짜 및 시간 : " + time_start.toLocaleString() + "~" + time_end.toLocaleString() + " </span></div>" +
													"<div class='cardAddress'><span class='icon-pointer'>  </span> 위치 : " + data[i].pf_address_sub + " </div>" +
													"<div class='cardAddress'><span class='fa fa-child'>  </span> 위치 설명 : " + data[i].pf_add_br + " </div>" +
													"<div class='cardAddress'> 장르 : " + data[i].pf_kind + " </div>" +
													"<div class='clearfix'></div>" +
												"</a>" +
											"</div>");
			   }
		   });
		   $(".resultsList").fadeIn("slow");
		});
	});
   
   $("a[name='aType']").click(function(){
		   $.when(
				$(".resultsList").fadeOut("slow")
			).done(function(){
				$(".resultsList").empty();
				$.getJSON("/culture/category_newpf" + "/?pType=" + $("input:radio[name='pType']:checked").val(), function(data, result){
					$(".resultsList").append("<div class='row' id='search_results'>");
					for (var i=0; i < data.length; i++){
						var time_start = Date.parse(data[i].pf_time_start);
					  var time_end = Date.parse(data[i].pf_time_end);
					  
						$(".resultsList").append("<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>" + 
													"<a href='/culture/single/" + data[i].id + "' class='card'>" +
														"<div class='figure'>" +
															"<img src='" + data[i].pf_image.url + "' alt='image' width='200px' height='200px'>" +
															"<div class='figView'><span class='icon-eye'></span></div>" +
															"<div class='figType'>공연예정</div>" +
														"</div>" +
														"<h2>" + data[i].pf_title + "</h2>" +
														"<br>" +
														"<div class='cardAddress'><span class='fa fa-clock-o'>  </span> 날짜 및 시간 : " + time_start.toLocaleString() + "~" + time_end.toLocaleString() + " </span></div>" +
														"<div class='cardAddress'><span class='icon-pointer'>  </span> 위치 : " + data[i].pf_address_sub + " </div>" +
														"<div class='cardAddress'><span class='fa fa-child'>  </span> 위치 설명 : " + data[i].pf_add_br + " </div>" +
														"<div class='cardAddress'> 장르 : " + data[i].pf_kind + " </div>" +
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
