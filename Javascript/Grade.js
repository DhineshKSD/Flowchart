var eng=0,math=0,sci=0,ss=0;
var stud_id=0 ;
var i=0;
var grade=[0,1,2,3,4,5,6,7,8,9,10,11,12];
var pass=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var fail=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var total=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var pp=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var y;
var overall_pass=0,overall_fail=0,overall_pp=0,tot=0;

function validate()
{
	stud_id=parseInt(document.getElementById("stud-id").value);
	y=document.getElementById("gr").value;
    eng=parseInt(document.getElementById("mark1").value);
    math=parseInt(document.getElementById("mark2").value);
    sci=parseInt(document.getElementById("mark3").value);
	ss=parseInt(document.getElementById("mark4").value);

	var g = document.getElementById("gr");
	var strUser = g.options[g.selectedIndex].value;
	var strUser1 = g.options[g.selectedIndex].text;

	var h = document.getElementById("div");
	var strUser2 = h.options[h.selectedIndex].value;
	var strUser3 = h.options[h.selectedIndex].text;
 
	if(isNaN(stud_id))
	{
	alert("Please enter a student id");
	}
	else if(stud_id<0||stud_id>1440)
	{
	alert("Please enter a valid student id")
	}
	else if(strUser==0)
	{
	alert("Please select a grade");
	}
	else if(strUser2==0)
	{
	alert("Please select a Division");
	}
	else if(isNaN(eng))
    {
	alert("Please enter English Marks");
	return false;
	}
	else if(isNaN(math))
    {
	alert("Please enter Maths Marks");
	return false;
	}
	else if(isNaN(sci))
    {
	alert("Please enter Science Marks");
	return false;
	}
	else if(isNaN(ss))
    {
	alert("Please enter Social-Science Marks");
	return false;
    }
	else if(eng<0 || math<0 || sci<0 || ss<0)
	{
	alert("Marks can't be negative");
	return false;
    valcleartext();
	}
	else if(eng>100 || math>100 || sci>100 || ss>100)
	{
	alert("Marks can't be greater than 100");
    valcleartext();
	}
	else{
	calculate();
	}
}
function calculate()
{
	alert("Marks Entered");
    var sum=eng+math+sci+ss;
    var average=(sum/4);
    if (average>=60)
    {
        pass[y]++;
		total[y]++;
		overall_pass++;
		tot++;
    }
    else
    {
        fail[y]++;
		total[y]++;
		overall_fail++;
		tot++;
    }
	pp[y]=(pass[y]/total[y])*100;
	pp[y]=pp[y].toFixed(0);
	if (confirm('Do you wish to continue?')) {
		// Save it!
	} else {
		display_array();	
	}
	cleartext();
	}
	function cleartext()
	{
		document.getElementById("mark1").value="";
		document.getElementById("mark2").value="";
		document.getElementById("mark3").value="";
		document.getElementById("mark4").value="";
		document.getElementById("gr").value ="0";
		document.getElementById("div").value="0";
		document.getElementById("stud-id").value="";
	}
	function valcleartext()
	{
		document.getElementById("mark1").value="";
		document.getElementById("mark2").value="";
		document.getElementById("mark3").value="";
		document.getElementById("mark4").value="";
	}
function display_array()
{   
    var u="<hr align=left width=50%>";
    var d="<pre>";
    var s="Grade     No.of.Students    Pass.Stud     Fail.stud     Avg";
	var f="</pre";
	var o="<br>";
	var m="<br>";
	for(i=1;i<10;i++)
	{
    var l="  "+grade[i]+"            "+total[i]+"               "+pass[i]+"             "+fail[i]+"           "+pp[i];
	o+=l;
	o+=m;
	}
	for(i=10;i<13;i++)
	{
    var l="  "+grade[i]+"           "+total[i]+"               "+pass[i]+"             "+fail[i]+"           "+pp[i];
	o+=l;
	o+=m;
	}
	if(tot!=0)
	{
		var overall_pp=(overall_pass/tot)*100;
	}
	else{
		overall_pp=0;
	}
	overall_pp=overall_pp.toFixed(0);
	var t=" "+"All"+"           "+tot+"               "+overall_pass+"             "+overall_fail+"           "+overall_pp;
    document.getElementById("Result").innerHTML=d+u+s+u+o+u+t+u+f;
}

