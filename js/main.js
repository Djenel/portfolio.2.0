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
        TweenMax.to('#blc-mention',1,{right:'-445px'})
        TweenMax.to('#mentions',1,{right:'-44px'});
        TweenMax.to('#arrow-right-mentions',1,{opacity:'0'});
        });

/*/////////////////////////////
------ANIMATION ACCUEIL-------
////////////////////////////*/

    TweenMax.to('.line-separator',1,{delay:0.5, width:'100%', opacity:1, left:0,  });
    TweenMax.to('#blc-title h1',1.5,{delay:1.5, scale:1.03, opacity:1});
    TweenMax.to('#blc-title h3',1.5,{delay:1.5, scale:1.03, opacity:1});
    /*TweenMax.to('.bg-gradient1',6,{scale:1.5, delay:1, repeat:-1, yoyo:true, rotation:15, ease:Linear.easeOut});*/

/*/////////////////////////////
------ANIMATION PROFIL-------
////////////////////////////*/
   TweenMax.to('#blc-profil',1.7,{delay:0.2, left:'50%', opacity:1, easeIn: Power0.easeNone,});

/*/////////////////////////////
------ANIMATION CONTACT-------
////////////////////////////*/
   TweenMax.to('#contact h2',1.7,{delay:0.2, left:'50px', opacity:1, easeIn: Power0.easeNone,});

   TweenMax.to('#blc-form',1.7,{delay:0.2, right:'50px', opacity:1, easeIn: Power0.easeNone,});

    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            }
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                }
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            }
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }







});
