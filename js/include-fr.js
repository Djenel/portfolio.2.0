$(function(){
    $('main').load('../fr/accueil.html');

    $('#logo').on('click',function(){
                TweenMax.to('main',0.2,{scale:'0.9',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/accueil.html', function(){
                                              TweenMax.to('main',0.1,{opacity:1,scale:'1'});

                                          });
                                       }
                                });
                            });

    $('.menuAccueil').on('click',function(){
                TweenMax.to('main',0.2,{scale:'0.9',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/accueil.html', function(){
                                              TweenMax.to('main',0.1,{opacity:1,scale:'1'});
                                              TweenMax.to('li a',0.1,{color:'white'});
                                              TweenLite.to($('li a .border:after'), 0.1, {css:{borderBottomColor:"white"}});
                                              TweenLite.to($('#slide-accueil'), 0.1, {css:{borderBottom:"solid 2px white"}});
                                              TweenLite.to($('#slide-profil'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-portfolio'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-contact'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenMax.to('#slide-ctn-accueil',0.1,{opacity:1});
                                              TweenMax.to('#slide-ctn-profil',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-portfolio',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-contact',0.1,{opacity:0});
                                          });
                                       }
                                });
                            });

    $('.menuProfil').on('click',function(){
                TweenMax.to('main',0.2,{scale:'0.9',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/profil.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                              TweenMax.to('li a',1,{color:'rgba(74, 74, 74, 0.8392156862745098)'});
                                              TweenLite.to($('#slide-accueil'), 0.1, {css:{borderBottom:"solid 1px rgba(74, 74, 74, 0.8392156862745098)"}});
                                              TweenLite.to($('#slide-profil'), 0.1, {css:{borderBottom:"solid 2px rgba(74, 74, 74, 0.8392156862745098)"}});
                                              TweenLite.to($('#slide-portfolio'), 0.1, {css:{borderBottom:"solid 1px rgba(74, 74, 74, 0.8392156862745098)"}});
                                              TweenLite.to($('#slide-contact'), 0.1, {css:{borderBottom:"solid 1px rgba(74, 74, 74, 0.8392156862745098)"}});


                                              TweenMax.to('#slide-profil',1,{color:'rgba(74, 74, 74, 0.8392156862745098)'});


                                              TweenMax.to('#slide-ctn-accueil',0.1,{opacity:0, });
                                              TweenMax.to('#slide-ctn-profil',0.1,{opacity:1});
                                              TweenMax.to('#slide-ctn-portfolio',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-contact',0.1,{opacity:0});
                                          });
                                       }
                                });
                            });

    $('.menuPortfolio').on('click',function(){
                TweenMax.to('main',0.2,{scale:'0.9',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/portfolio.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                              TweenMax.to('li a',1,{color:'white'});
                                              TweenLite.to($('#slide-accueil'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-profil'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-portfolio'), 0.1, {css:{borderBottom:"solid 2px white"}});
                                              TweenLite.to($('#slide-contact'),0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenMax.to('#slide-ctn-accueil',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-profil',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-portfolio',0.1,{opacity:1});
                                              TweenMax.to('#slide-ctn-contact',0.1,{opacity:0});
                                          });
                                       }
                                });
                            });

    $('.menuContact').on('click',function(){
                TweenMax.to('main',0.2,{scale:'0.9',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/contact.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                              TweenMax.to('li a',1,{color:'white'});
                                              TweenLite.to($('#slide-accueil'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-profil'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-portfolio'), 0.1, {css:{borderBottom:"solid 1px white"}});
                                              TweenLite.to($('#slide-contact'), 0.1, {css:{borderBottom:"solid 2px white"}});
                                              TweenMax.to('#slide-ctn-accueil',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-profil',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-portfolio',0.1,{opacity:0});
                                              TweenMax.to('#slide-ctn-contact',0.1,{opacity:1});
                                          });
                                       }
                                });
                            });






/*/////////////////////////////
------NAVIGATION RESPONSIVE-------
////////////////////////////*/



    $('.burger-menuAccueil').on('click',function(){
                TweenMax.to('main',0.2,{
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/accueil.html', function(){
                                              TweenMax.to('main',0.1,{opacity:1,scale:'1'});
                                          });
                                       }
                                });
                            });

    $('.burger-menuProfil').on('click',function(){
                TweenMax.to('main',0.2,{
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/profil.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                          });
                                       }
                                });
                            });

    $('.burger-menuPortfolio').on('click',function(){
                TweenMax.to('main',0.2,{
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/portfolio.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                          });
                                       }
                                });
                            });

    $('.burger-menuContact').on('click',function(){
                TweenMax.to('main',0.2,{scale:'1.1',
                                        opacity:0.1,
                                        onComplete: function(){
                                          $('main').load('../fr/contact.html', function(){
                                              TweenMax.to('main',1,{opacity:1,scale:'1'});
                                          });
                                       }
                                });
                            });
});

