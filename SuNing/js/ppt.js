//主函数
var s=function(){
	var interv=2000; //切换时间
	var interv2=10; //切换速速
	var opac1=80; //文字背景的透明度
	var source="fade_focus" //图片容器的id名称
	//获取对象
	function getTag(tag,obj){
		if(obj==null){
			return document.getElementsByTagName(tag)
		}else{
			return obj.getElementsByTagName(tag)
		}
	}
	function getid(id){
		return document.getElementById(id)
	};
	var opac=0,j=0,t=63,num,scton=0,timer,timer2,timer3;
	var id=getid(source);			//捕捉最外层div

	id.removeChild(getTag("div",id)[0]);		//删除loading层

	var li=getTag("li",id);			//获取li节点

	var div=document.createElement("div");			//
	var title=document.createElement("div");		//包含span字幕区
	var span=document.createElement("span");		//交替变换的文字区
	var button=document.createElement("div");		//右下角导航的三个链接方块
	button.className="button";

	for(var i=0;i<li.length;i++){

		var a=document.createElement("a");		//创建超链接，并且设置其中的内容为1，2，3
		a.innerHTML=i+1;

		a.onclick=function(){
			clearTimeout(timer);
			clearTimeout(timer2);
			clearTimeout(timer3);

			j=parseInt(this.innerHTML)-1;		//j=0，1，2
			scton=0;
			t=63;
			opac=0;
			fadeon();
		};

		a.className="b1";
		a.onmouseover=function(){
			this.className="b2"
		};

		a.onmouseout=function(){
			this.className="b1";
			sc(j)
		};

		button.appendChild(a);		//将3个超链接添加到button定义的div中去
	}

	//控制图层透明度
	function alpha(obj,n){
		if(document.all){
			obj.style.filter="alpha(opacity="+n+")";
		}else{
			obj.style.opacity=(n/100);
		}
	}

	//控制焦点按钮
	function sc(n){
		for(var i=0;i<li.length;i++){
			button.childNodes[i].className="b1"
		};
		button.childNodes[n].className="b2";
	}

	title.className="num_list";
	title.appendChild(span);
	alpha(title,opac1);
	id.className="d1";
	div.className="d2";
	id.appendChild(div);
	id.appendChild(title);
	id.appendChild(button);

	//渐显
	var fadeon=function(){
		opac+=5;
		div.innerHTML=li[j].innerHTML;
		span.innerHTML=getTag("img",li[j])[0].alt;
		alpha(div,opac);
		if(scton==0){
			sc(j);
			num=-2;
			scrolltxt();
			scton=1
		};
		if(opac<100){
			timer=setTimeout(fadeon,interv2)
		}else{
			timer2=setTimeout(fadeout,interv);
		};
	}

	//渐隐
	var fadeout=function(){
		opac-=5;
		div.innerHTML=li[j].innerHTML;
		alpha(div,opac);
		if(scton==0){
			num=2;
			scrolltxt();
			scton=1
		};
		if(opac>0){
			timer=setTimeout(fadeout,interv2)
		}else{
			if(j<li.length-1){
				j++
			}else{
				j=0
			};
			fadeon()
		};
	}

	//滚动文字
	var scrolltxt=function(){
		t+=num;
		span.style.marginTop=t+"px";
		if(num<0&&t>3){
			timer3=setTimeout(scrolltxt,interv2)
		}else if(num>0&&t<62){
			timer3=setTimeout(scrolltxt,interv2)
		}else{
			scton=0
		}
	};

	fadeon();
}
//初始化
window.onload=s;