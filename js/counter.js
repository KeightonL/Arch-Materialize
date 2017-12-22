	$(document).ready(function() {      
                var functionCount = $(window).on('scroll', function() {
                if ($('.counter').last().text() == "0") {
                a = $("#counters").offset().top + $("#counters").height(); //counter position
                b = $(window).scrollTop() + $(window).height(); //window position
                    if(a < b) { //counter enters window view
                        $('.counter').each(function() {
                                var $this = $(this),
                                countTo = $this.attr('data-count'); //count to data- attr
                        
                                $({ countNum: $this.text()}).animate({ //JSON
                                        countNum: countTo
                                },
                                {
                                        duration: 3000,
                                        easing:'linear',
                                        step: function() {
                                        $this.text(Math.floor(this.countNum));
                                        },
                                        complete: function () {
                                        $this.text(this.countNum);
                                        //console.log('finished'); // Old console log (testing)
                                }
                        }); 
                   });
                }
                $(document).trigger('functionCount_complete'); //create trigger complete
            }
       });
       $(document).bind('functionCount_complete', apend); //now trigger complete start function apend
       function apend() {
               setTimeout(function() { 
                        if ($('.counter').last().text() == "40") {
                        $('.count-one').append("<span><br/> Months</span>");
                        $('.count-two').append("<span>+ Websites</span>");
                        $('.count-three').append("<span>+ Projects</span>");
                        }
                }, 4000); //*do not remove - needs timeout 
       } 
    });

