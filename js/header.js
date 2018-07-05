
var height = 80;
var speed = 500;
var space = 100;

//$.each($('.hassubmenu'),function()
//{
//    $(this).attr('data', $(this).find('.submenu-container').height() );
//})

$('.hassubmenu').hover(
	function(event)
	{
        var submenucontainer = $(this).find('.submenu-container');
        var submenu = $(this).find('.sub-menu');

        var height = $(this).height() + $(submenucontainer).height() + $(submenu).height() + space;
        $(submenucontainer).css('height',height);
        $(submenucontainer).css('top','-' + $(this).height() + 'px');
        $(submenucontainer).css('display','block');

<<<<<<< HEAD
 		var submenu = $(this).find('.sub-menu');
        var submenuheight = $(submenu).find('li').length * height;

        if ($(this).getMouseSide(event) == 'left')
        {
        	$(submenucontainer).css('height',$(this).find('.sub-menu').height());
        	$(submenucontainer).stop().animate({width:$(this).width()},speed,function()
        	{
        		$(hassubmenu).css('height',height + submenuheight);
        	});
        }
        else if ($(this).getMouseSide(event) == 'right')
        {
        	$(submenucontainer).css('left',$(this).width()).css('height',$(this).find('.sub-menu').height());
        	$(submenucontainer).stop().animate({left:0, width:$(this).width()},speed,function()
        	{
        		$(hassubmenu).css('height',height + submenuheight);
        	});
        }
        else if ($(this).getMouseSide(event) == 'top')
        {
        	$(submenucontainer).css('width',$(this).width()).css('height','0px');
        	$(submenucontainer).stop().animate({height:$(this).find('.sub-menu').height()},speed,function()
        	{
        		$(hassubmenu).css('height',height + submenuheight);
        	});
        }
        else if ($(this).getMouseSide(event) == 'bottom')
        {
        	$(submenucontainer).css('width',$(this).width()).css('height',$(submenu).height());
        	$(submenu).css('top',$(submenu).height());
        	$(submenu).stop().animate({top:0},speed / 2,function()
        	{
        		$(hassubmenu).css('height',height + submenuheight);
        	});
        }        
=======
        $(submenu).css('top',$(submenucontainer).height() - $(submenu).height() );

        $(submenu).stop().animate({top:$(this).height() - 1},speed);
        $(submenucontainer).stop().animate({height:$(this).height() + $(submenu).height()},speed);
>>>>>>> 70810ea216edae26065f19ae95375e1fa9f68bce
	},
	function(event)
	{
	}
);


$('.submenu-container').hover(
    function(event)
    {
    },
    function(event)
    {
        var submenu = $(this).find('.sub-menu');
        $(this).css('height',$(submenu).height()).css('top',0);
        $(submenu).css('top',0);
        $(this).stop().animate({height:0},speed);
    }
);


