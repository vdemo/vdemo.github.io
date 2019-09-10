function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pywMycHduT":
        Script1();
        break;
      case "5zPKau6rKpA":
        Script2();
        break;
  }
}

function Script1()
{
  var a;
function init(val)
{
alert(val);
a=val;
alert(a);

/*dummy_var3.var = val;*/

}
init();
var player=GetPlayer();
player.SetVar("dummy_var3", "hello");
}

function Script2()
{
  var player = parent.GetPlayer();
var id = player.GetVar("dummy_var3");
var result = player.GetVar("myScore");

var tokenid = id + result;

var passURL = "https://dtest.countrydelight.in/api/auth/assessment?tokenid ="+tokenid;
window.open(passURL,"_blank");
}

