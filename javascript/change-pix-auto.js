
<script type="text/javascript">

var picPaths = ['Pic1.jpg','Pic2.jpg','Pic3.jpg'];
var curPic = -1;
//preload the images for smooth animation
var imgO = new Array();
for(i=0;i<picPaths.length;i++){
	imgO[i] = new Image();
	imgO[i]i.src = picPaths[i];
}
function swapImage(){
	curPic = (++curPic>picPaths.length-1)?0:curPic;
	imgConst.src = imgO[curPic].src;
	setTimeout(swapImage,2000);
}
window.onload=function(){
	imgConst=document.getElementById('slideshowz');
	swapImage();
}
</script>

