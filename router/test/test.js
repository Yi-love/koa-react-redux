function changeBGColor(color){
	document.querySelector('body').style.backgroundColor = color;
}
Router.route('/',function(){
	changeBGColor('pink');
});
Router.route('/blue',function(){
	changeBGColor('blue');
});
Router.route('/green',function(){
	changeBGColor('green');
});

