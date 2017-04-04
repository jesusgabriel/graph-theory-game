var pegEdges=[
    [3,5],
    [6,8],
    [7,9],
    [0,5,10,12],
    [11,13],
    [0,3,12,14],
    [1,8],
    [2,9],
    [1,6],
    [2,7],
    [3,12],
    [4,13],
    [3,5,10,14],
    [4,11],
    [5,12]
];
var removeEdges=[
    [1,2],
    [3,4],
    [4,5],
    [1,4,6,7],
    [7,8],
    [2,4,8,9],
    [3,7],
    [4,8],
    [4,7],
    [5,8],
    [6,11],
    [7,12],
    [7,8,11,13],
    [8,12],
    [9,13]
];

var activePiece = null;
$('.dot').click(function(){
  if(activePiece === null){
    if ($(this).hasClass('full')) {
      $(this).addClass('higthlight')
      activePiece = $(this);
}
}
else {
  var StarId = activePiece.attr("id");
  var endId = Number ($( this).attr("id") );
  var verticalAdjancetToStart = pegEdges[StarId];
  var innerGraphIndex = verticalAdjancetToStart.indexOf(endId);

  if (verticalAdjancetToStart.indexOf(endId) != -1 && ! $(this).hasClass('full')) {
    console.log(" legit move !!");
    var IdToRemove = removeEdges[StarId][innerGraphIndex];
    $("#"+IdToRemove).removeClass("full");
    $("#"+StarId).removeClass("full");
    $("#"+endId).addClass("full");
  }

  activePiece.removeClass('higthlight');
  activePiece =null;
}
});
