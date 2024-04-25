function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZXQ9lhqBCu":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player=GetPlayer();

var titreMod = player.GetVar("titreModule");

prepCommentaire(titreMod);
}

};
