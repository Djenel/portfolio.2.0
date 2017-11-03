$(function(){

/*BURGER MENU*/
    var closed=true;
    $('#btn-burger-menu')
    .mouseout(function(){
            TweenMax.to('.hr1',0.2,{width:'50%'});
            TweenMax.to('.hr2',0.2,{width:'80%'});
            TweenMax.to('.hr3',0.2,{width:'100%'});
    })

    .mouseover(function(){
            TweenMax.to('.hr1',0.2,{width:'100%'});
            TweenMax.to('.hr2',0.2,{width:'100%'});
            TweenMax.to('.hr3',0.2,{width:'100%'});
    })
    .on('click', function(){
        if(closed==true){
        TweenMax.to('#menu-responsive',1,{right:'0'});
        TweenMax.to('.line',1,{'background-color': 'black'});
        TweenMax.to('#btn-burger-menu',1.2,{rotation:-90,
                                            right:'180px'});

        closed=false;

        }else{
        TweenMax.to('#menu-responsive',1.5,{right:'-300px'});
        TweenMax.to('.line',1,{'background-color': 'white'});
        TweenMax.to('#btn-burger-menu',1.5,{rotation:0,
                                            right:'15px'});
        closed=true;
        }
    });



/*/////////////////////////////
------MENTION LEGALES-------
////////////////////////////*/

    $('#mentions').on('click', function(){
        TweenMax.to('#blc-mention',1,{right:'-20'});
        TweenMax.to('#mentions',1,{right:'378px'});
        TweenMax.to('#arrow-right-mentions',2,{opacity:'1'});
    });

    $('#arrow-right-mentions').on('click', function(){
        TweenMax.to('#blc-mention',1,{right:'-414px'});
        TweenMax.to('#mentions',1,{right:'-44px'});
        TweenMax.to('#arrow-right-mentions',1,{opacity:'0'});
        });

/*/////////////////////////////
------ANIMATION ACCUEIL-------
////////////////////////////*/

    TweenMax.to('.line-separator',1,{delay:0.5, width:'100%', opacity:1, left:0,  });
    TweenMax.to('#blc-title h1',1.5,{delay:1.5, scale:1.03, opacity:1});
    TweenMax.to('#blc-title h3',1.5,{delay:1.5, scale:1.03, opacity:1});
    TweenMax.to('.bg-gradient1',6,{scale:1.5, delay:1, repeat:-1, yoyo:true, rotation:15, ease:Linear.easeOut});

});
