function Hash(str) {
  var hashValue = 0;
  for (var i =0; i < str.length; i++)
    hashValue+=Math.pow(str.charCodeAt(i), 2);
  return hashValue;
}

function BruteForce(tempStr) {
  var flag = 1;
  for(var i =0; i< template.length; i++){
    if (template.charAt(i) != tempStr.charAt(i)){
		flag = 0;
	}
  }
  return flag;
}

function FindEntrances (result){
	for (i=0, j=template.length; j<str.length; i++, j++)
	{
		tempStrHash -= Math.pow(str.charCodeAt(i),2);
		tempStrHash += Math.pow(str.charCodeAt(j),2);
			if (templateHash == tempStrHash){
				tempStr = str.substring(i+1,j+1);
				flag = BruteForce(tempStr);
				if (flag == 1) 
					result.push(i);
				else 
					continue;
			}
			else 
				continue;
	}
	
}

function GetTime(func){
	var start = new Date();
	for (var i=0; i<100; i++) func(result);
	var end = new Date();
	return end-start;
}
var fso = new ActiveXObject("Scripting.FileSystemObject");
var ts  = fso.OpenTextFile(WSH.Arguments(0));
var str="1";
while(!ts.AtEndOfStream)
	str+=ts.ReadLine();
ts.Close();
WSH.echo("Wrile a subline");
var template = WSH.StdIn.ReadLine();
if (template == ''){
	WSH.echo('You don\'t enter line');
	WSH.Quit();
}
var templateHash = Hash(template);
var tempStr = str.substring(0,template.length);
var tempStrHash =Hash(tempStr);
var result = new Array();
var flag = 1;
var time = 0;

for (var i=0; i<100; i++){
	time+= GetTime(FindEntrances);
}
WSH.echo(time/100, " ms");

