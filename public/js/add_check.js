
var input_elements = document.getElementsByTagName("input");
var ckb = [];
$(document).ready(function(){
    for (var i=0; i < input_elements.length; i++){
        if (input_elements[i].type.toLowerCase() === 'checkbox'){
            ckb.push(input_elements[i]);
        }
    }
});

function chkcontrol(j) {
    var total=0;
    for(var i=0; i < ckb.length; i++){
        ckb[i].setAttribute("name", "");
        if(total > 1){
            alert("공연 카테고리는 1개의 장르만 선택가능합니다.") 
            ckb[j].checked = false ;
            return false;
        }
        if(ckb[i].checked){
            total =total +1;
            ckb[i].setAttribute("name", "pf_kind");
        }
    }
} 

function delalert(){
  alert("정말로 삭제하겠습니까?") 
}
