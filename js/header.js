
var height = 80;
var speed = 500;

//$.each($('.hassubmenu'),function()
//{
//    $(this).attr('data', $(this).find('.submenu-container').height() );
//})

$('.hassubmenu').hover(
	function(event)
	{
		//$(this).find('.submenu-container').animate({height:$(this).find('.sub-menu').height()},speed);

		var hassubmenu = $(this);
        var submenucontainer = $(this).find('.submenu-container');
		$(submenucontainer).css('width','0px').css('left','0px').css('top','0px').css('height','0px');

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
	},
	function(event)
	{
		//$(this).find('.submenu-container').animate({height:0},speed);

		var hassubmenu = $(this);
        var submenucontainer = $(this).find('.submenu-container');
        var submenu = $(this).find('.sub-menu');

        if ($(this).getMouseSide(event) == 'left')
        {
        	$(submenucontainer).stop().animate({width:0,left:0},speed / 2,function()
        	{
        		$(hassubmenu).css('height','80px');
				$(submenucontainer).css('width','0px').css('left','0px').css('top','0px').css('height','0px');
        	});
        }
       	else if ($(this).getMouseSide(event) == 'right')
        {
        	$(submenucontainer).stop().animate({width:0,left:$(this).width()},speed / 2,function()
        	{
        		$(hassubmenu).css('height','80px');
				$(submenucontainer).css('width','0px').css('left','0px').css('top','0px').css('height','0px');
        	});
        }
        else if ($(this).getMouseSide(event) == 'top')
        {
			$(submenucontainer).stop().animate({height:0},speed,function()
			{
				$(hassubmenu).css('height','80px');
				$(submenucontainer).css('width','0px').css('left','0px').css('top','0px').css('height','0px');
			});
        }	
       	else if ($(this).getMouseSide(event) == 'bottom')
        {
			$(submenu).animate({top:$(this).find('.sub-menu').height()},speed,function()
			{
				$(hassubmenu).css('height','80px');
				$(submenucontainer).css('width','0px').css('left','0px').css('top','0px').css('height','0px');
				$(submenu).css('top','0px');
			});
        }
	}
);


