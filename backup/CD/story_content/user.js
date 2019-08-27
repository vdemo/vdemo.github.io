function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5p0ihvh8YDR":
        Script1();
        break;
      case "5XR46Zlpk2D":
        Script2();
        break;
  }
}
var a;
function init(val)
{
	
	var player=GetPlayer();
    player.SetVar("dummy_var3", val);
	a= val;
}
alert(a);
function Script1()
{
  // var player = GetPlayer();
//var tokenid = player.GetVar("dummy_var3");
//alert(a);


}

function Script2()
{
 // var player = parent.GetPlayer();
//var tokenid = player.GetVar("dummy_var3");

var passURL = "Assessment/index.html?tokenid ="+a;
window.open(passURL,"_self");
}

