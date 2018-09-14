window.onload=function (){
    let icon1=document.querySelectorAll(".icon-gouwudai");
    console.log(icon1);
    let container_hide=document.querySelector(".container_hide");
    console.log(container_hide);
    let list_santiaogang=document.querySelector(".container .list_santiaogang");
    console.log(list_santiaogang);
    let container_big_hide=document.querySelector(".container_big_hide");
    console.log(container_big_hide);
    let nav_icon2=document.querySelector(".container_big_hide_head_nav_icon1 i");
    console.log(nav_icon2);
    let time=0;
    for (let i=0;i<icon1.length;i++){
        icon1[i].onclick=function () {
            time++;
            if (time%2!==0){
                container_hide.style.display="block";
            }else if(time%2==0){
                container_hide.style.display="none";
            }
        }
    }

    list_santiaogang.onclick=function () {
        container_big_hide.style.height="1000px";
    }
        nav_icon2.onclick=function () {
        container_big_hide.style.height="0";
    }
    let big_list=document.querySelectorAll(".big_list");
    console.log(big_list);
    let footer1_hide=document.querySelectorAll(".footer1_hide");
    console.log(footer1_hide);
    let big_list_wz1=document.querySelectorAll(".big_list_wz1");
    console.log(big_list_wz1);
    let times=0;
    for (let i=0;i<big_list.length;i++){
        big_list[i].onclick=function () {
            times++;
            if (times%2!==0){
                footer1_hide[i].style.display="block";
                big_list_wz1[i].style.transform="rotate(45deg)";
            }else if(times%2==0){
                footer1_hide[i].style.display="none";
                big_list_wz1[i].style.transform="rotate(0deg)";
            }
        }
    }


}