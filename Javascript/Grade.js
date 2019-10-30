var Eng=0,Maths=0,Sci=0,Social=0;
var StudentId=0 ;
var i=0;
var Grade=[0,1,2,3,4,5,6,7,8,9,10,11,12];
var Pass=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var Fail=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var Total=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var PassPercentage=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var y;
var OverallPass=0,OverallFail=0,OverallPassPercentage=0,Tot=0;

function Validate()                                            //To Check the validation of fields
{
	StudentId=parseInt(document.getElementById("StudentId").value);
	y=document.getElementById("Grade").value;
    Eng=parseInt(document.getElementById("Mark1").value);
    Maths=parseInt(document.getElementById("Mark2").value);
    Sci=parseInt(document.getElementById("Mark3").value);
	Social=parseInt(document.getElementById("Mark4").value);

	var g = document.getElementById("Grade");
	var strUser = g.options[g.selectedIndex].value;
	var strUser1 = g.options[g.selectedIndex].text;

	var h = document.getElementById("Div");
	var strUser2 = h.options[h.selectedIndex].value;
	var strUser3 = h.options[h.selectedIndex].text;
 
	if(isNaN(StudentId))
	{
	alert("Please enter a student id");
	}
	else if(StudentId<0||StudentId>1440)
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
	else if(isNaN(Eng))
    {
	alert("Please enter English Marks");
	return false;
	}
	else if(isNaN(Maths))
    {
	alert("Please enter Maths Marks");
	return false;
	}
	else if(isNaN(Sci))
    {
	alert("Please enter Science Marks");
	return false;
	}
	else if(isNaN(Social))
    {
	alert("Please enter Social-Science Marks");
	return false;
    }
	else if(Eng<0 || Maths<0 || Sci<0 || Social<0)
	{
	alert("Marks can't be negative");
	return false;
    ValClearText();
	}
	else if(Eng>100 || Maths>100 || Sci>100 || Social>100)
	{
	alert("Marks can't be greater than 100");
    ValClearText();
	}
	else{
	Calculate();
	}
}

function Calculate()
{
	alert("Marks Entered");
    var Sum=Eng+Maths+Sci+Social;
    var Average=(Sum/4);
    if (Average>=60)
    {
        Pass[y]++;
		Total[y]++;
		OverallPass++;
		Tot++;
    }
    else
    {
        Fail[y]++;
		Total[y]++;
		OverallFail++;
		Tot++;
    }
	PassPercentage[y]=(Pass[y]/Total[y])*100;              //calculating pass percentage
	PassPercentage[y]=PassPercentage[y].toFixed(0);
	if (confirm('Do you wish to continue?'))               //boolean method to get the user entry to continue/not?
	{
		// Save it!
	} 
	else 
	{
		DisplayArray();	
	}
	ClearText();
}

function ClearText()                                        //Separate function as a submodule to clear all field entries
{
	document.getElementById("Mark1").value="";
	document.getElementById("Mark2").value="";
	document.getElementById("Mark3").value="";
	document.getElementById("Mark4").value="";
	document.getElementById("Grade").value ="0";
	document.getElementById("Div").value="0";
	document.getElementById("StudentId").value="";
}

function ValClearText()                                     //Separate function as a submodule to clear mark fields alone
{
	document.getElementById("Mark1").value="";
	document.getElementById("Mark2").value="";
	document.getElementById("Mark3").value="";
	document.getElementById("Mark4").value="";
}

function DisplayArray()
{   
    var u="<hr align=left width=50%>";
    var d="<pre>";
    var s="Grade     No.of.Students    Pass.Stud     Fail.stud     Avg";
	var f="</pre";
	var o="<br>";
	var m="<br>";
	for(i=1;i<10;i++)
	{
    var l="  "+Grade[i]+"            "+Total[i]+"               "+Pass[i]+"             "+Fail[i]+"           "+PassPercentage[i];
	o+=l;
	o+=m;
	}
	for(i=10;i<13;i++)
	{
    var l="  "+Grade[i]+"           "+Total[i]+"               "+Pass[i]+"             "+Fail[i]+"           "+PassPercentage[i];
	o+=l;
	o+=m;
	}
	if(Tot!=0)
	{
		var OverallPassPercentage=(OverallPass/Tot)*100;
	}
	else{
		OverallPassPercentage=0;
	}
	OverallPassPercentage=OverallPassPercentage.toFixed(0);
	var t=" "+"All"+"           "+Tot+"               "+OverallPass+"             "+OverallFail+"           "+OverallPassPercentage;
    document.getElementById("Result").innerHTML=d+u+s+u+o+u+t+u+f;
}

