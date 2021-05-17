const studentPic = document.getElementsByClassName("recipient-image");


const picSize = () => {

  this.style.height = "342px";
  this.style.width = "300px";
  this.style.left = '20%';
  this.style.zIndex = '1';
}
const picReturn = () => {
  this.style.height = "";
  this.style.width = "";
  this.style.position = 'relative';
  this.style.left = '';
}

/*studentPic.addEventListener('click', picSize);
studentPic.addEventListener('mouseout', picReturn);
studentPic2.addEventListener('click', picSize);
studentPic2.addEventListener('mouseout', picReturn);*/

for (var i = 0; i < studentPic.length; i++) {
  studentPic[i].addEventListener('click', picSize);

}

for (var i = 0; i < studentPic.length; i++) {
studentPic[i].addEventListener('mouseout', picReturn);

}


