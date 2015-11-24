$(function(){
  $("#fullpage").fullpage({
    anchors:['page1','page2','page3','page4','page5','page6'],
    navigation: true,
    navigationTooltips:['家·温馨','行·旅程','秋·微凉','站·来往','街·相遇','桌·进取'],
    afterLoad: function(link,index){
      switch(index){
        case 1:
          move('.home-desc h1').scale(2).end();
          move('.home-desc h1').set('left','200px').end(function(){
            move('.home-desc p').set('margin-top',0).duration('1s').end();
            });
          break;
        case 2:
          move('.shoes-desc').set('opacity',1).duration('3s').end();
          break;
        case 3:
          move('.yard-desc h1').set('opacity',1).end(function(){
            move('.yard-desc p').set('opacity',1).end();
            move('.yard-desc p').scale(1.2).end();
          });
          break;
        case 4:
          move('.stop-desc').set('opacity',1).duration('3s').end();
          break;
        case 5:
          move('.street-desc h1').set('padding-top','62px').end(function(){
            move('.street-desc h1').scale(2).end(function(){
              move('.street-desc p').set('margin-top','60px').end();
              move('.street-desc p').set('opacity','1').end();
            });
          });
          break;
        case 6:
          move('.office-desc').set('left','0px').end(function(){
            move('.logo2').set('opacity','1').duration('1s').end(function(){
                move('.logo3').set('opacity','1').duration('1s').end();
              });
          });
          break;
        default:
          break;
      }
    },
    onLeave: function(link,index){
      switch(index){
        case 1:
          move('.home-desc h1').scale(1).end();
          move('.home-desc p').set('margin-top','300px').end();
          break;
        case 2:
          move('.shoes-desc').set('opacity',0).end();
          break;
        case 3:
          move('.yard-desc h1').set('opacity',0).end();
          move('.yard-desc p').set('opacity',0).end();
          move('.yard-desc p').scale(1).end();
          break;
        case 4:
          move('.stop-desc').set('opacity',0).end();
          break;
        case 5:
          move('.street-desc h1').scale(1).end();
          move('.street-desc h1').set('padding-top','1px').end();
          move('.street-desc p').set('margin-top','300px').end();
          move('.street-desc p').set('opacity','0').end();
          break;
        case 6:
          move('.office-desc').set('left','400px').end();
          move('.logo2').set('opacity','0').end();
          move('.logo3').set('opacity','0').end();
          break;
        default:
          break;
      }
    },
    afterRender: function(){
    },
  });
});
