var indicator = document.createElement('div');
indicator.className = 'state-indicator';
$('body').append(indicator);

//this function matches the media queries set in _mixins
function getDeviceState() {
    var index = parseInt($('.state-indicator').css('z-index'), 10);
    var states = {
        1: 'phone',
        2: 'tablet',
        3: 'desktop'
    };

    return states[index] || 'desktop';
}

function swapImagesForCircledVideos() {
	$('.circled-tile video.masked-image').addClass('hidden');
	$('.circled-tile img.circled-image').removeClass('hidden');
}

function detectVideoAutoplay(delay) {
    var video = $('<video />').get(0);
	var mp4 = $('<source />').get(0);
    mp4.src = "data:video/mp4;base64,AAAAFGZ0eXBNU05WAAACAE1TTlYAAAOUbW9vdgAAAGxtdmhkAAAAAM9ghv7PYIb+AAACWAAACu8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAnh0cmFrAAAAXHRraGQAAAAHz2CG/s9ghv4AAAABAAAAAAAACu8AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAFAAAAA4AAAAAAHgbWRpYQAAACBtZGhkAAAAAM9ghv7PYIb+AAALuAAANq8AAAAAAAAAIWhkbHIAAAAAbWhscnZpZGVBVlMgAAAAAAABAB4AAAABl21pbmYAAAAUdm1oZAAAAAAAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAVdzdGJsAAAAp3N0c2QAAAAAAAAAAQAAAJdhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAFAAOABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAEmNvbHJuY2xjAAEAAQABAAAAL2F2Y0MBTUAz/+EAGGdNQDOadCk/LgIgAAADACAAAAMA0eMGVAEABGjuPIAAAAAYc3R0cwAAAAAAAAABAAAADgAAA+gAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAADgAAAAEAAABMc3RzegAAAAAAAAAAAAAADgAAAE8AAAAOAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA4AAAAOAAAAFHN0Y28AAAAAAAAAAQAAA7AAAAA0dXVpZFVTTVQh0k/Ou4hpXPrJx0AAAAAcTVREVAABABIAAAAKVcQAAAAAAAEAAAAAAAAAqHV1aWRVU01UIdJPzruIaVz6ycdAAAAAkE1URFQABAAMAAAAC1XEAAACHAAeAAAABBXHAAEAQQBWAFMAIABNAGUAZABpAGEAAAAqAAAAASoOAAEAZABlAHQAZQBjAHQAXwBhAHUAdABvAHAAbABhAHkAAAAyAAAAA1XEAAEAMgAwADAANQBtAGUALwAwADcALwAwADYAMAA2ACAAMwA6ADUAOgAwAAABA21kYXQAAAAYZ01AM5p0KT8uAiAAAAMAIAAAAwDR4wZUAAAABGjuPIAAAAAnZYiAIAAR//eBLT+oL1eA2Nlb/edvwWZflzEVLlhlXtJvSAEGRA3ZAAAACkGaAQCyJ/8AFBAAAAAJQZoCATP/AOmBAAAACUGaAwGz/wDpgAAAAAlBmgQCM/8A6YEAAAAJQZoFArP/AOmBAAAACUGaBgMz/wDpgQAAAAlBmgcDs/8A6YEAAAAJQZoIBDP/AOmAAAAACUGaCQSz/wDpgAAAAAlBmgoFM/8A6YEAAAAJQZoLBbP/AOmAAAAACkGaDAYyJ/8AFBAAAAAKQZoNBrIv/4cMeQ==";

	var webm = $('<source />').get(0);
	webm.src = "data:video/webm;base64,GkXfo49CgoR3ZWJtQoeBAUKFgQEYU4BnAQAAAAAAF60RTZt0vE27jFOrhBVJqWZTrIIQA027jFOrhBZUrmtTrIIQbE27jFOrhBFNm3RTrIIXmU27jFOrhBxTu2tTrIIWs+xPvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFUmpZuQq17GDD0JATYCjbGliZWJtbCB2MC43LjcgKyBsaWJtYXRyb3NrYSB2MC44LjFXQY9BVlNNYXRyb3NrYUZpbGVEiYRFnEAARGGIBc2Lz1QNtgBzpJCy3XZ0KNuKNZS4+fDpFxzUFlSua9iu1teBAXPFhL4G+bmDgQG5gQGIgQFVqoEAnIEAbeeBASMxT4Q/gAAAVe6BAIaFVl9WUDiqgQEj44OEE95DVSK1nIN1bmTgkbCBULqBPJqBAFSwgVBUuoE87EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9DtnVB4eeBAKC4obaBAAAAkAMAnQEqUAA8AABHCIWFiIWEiAICAAamYnoOC6cfJa8f5Zvda4D+/7YOf//nNefQYACgnKGWgQFNANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQKbANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQPoANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQU1ANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQaDANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQfQANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQkdANEBAAEQEBRgAGFgv9AAIiGAAPuC/rOgnKGWgQprANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQu4ANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQ0FANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgQ5TANEBAAEQEAAYABhYL/QACIhgAPuC/rKgnKGWgQ+gANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgRDtANEBAAEQEAAYABhYL/QACIhgAPuC/rOgnKGWgRI7ANEBAAEQEAAYABhYL/QACIhgAPuC/rIcU7trQOC7jLOBALeH94EB8YIUzLuNs4IBTbeH94EB8YIUzLuNs4ICm7eH94EB8YIUzLuNs4ID6LeH94EB8YIUzLuNs4IFNbeH94EB8YIUzLuNs4IGg7eH94EB8YIUzLuNs4IH0LeH94EB8YIUzLuNs4IJHbeH94EB8YIUzLuNs4IKa7eH94EB8YIUzLuNs4ILuLeH94EB8YIUzLuNs4INBbeH94EB8YIUzLuNs4IOU7eH94EB8YIUzLuNs4IPoLeH94EB8YIUzLuNs4IQ7beH94EB8YIUzLuNs4ISO7eH94EB8YIUzBFNm3SPTbuMU6uEH0O2dVOsghTM";

	$(video).append(webm);
	$(video).append(mp4);

    video.volume = 0;
    video.autoplay = true;
    $(video).attr('id', 'base64Video');
    $(video).css({
    	position: 'fixed',
    	left: '99999px'
    });

    $('body').append(video);

    var base64Video = $('#base64Video').get(0);

    setTimeout(function(){
        if(base64Video.paused) { // Since you played the video, if its paused, it didnt autoplay
        	$(document).ready(function() {
				if(!$('body').hasClass('autoplay-capabale')) {
					swapImagesForCircledVideos();
				}
    		});
        } else { // If it's not paused, you're autoplaying!
        	$('body').addClass('autoplay-capabale');
        }

        $(base64Video).remove();
    }, delay);
}

if($('html').hasClass('ie8')) {
	swapImagesForCircledVideos();
} else {
	//alert("else");
	detectVideoAutoplay(300);

}

/* For Video Tagging */
var VideoTagging = VideoTagging || {
	videoListenInterval: {},
	videoQuarter: {},
	tagThumbnailClick: function(videoName){
		// report
		//RPT_AddVariables('wa_lnk', videoName, 'wa_tp', 1);
        //RPT_RecordEvent();
	},
	tagPlayState: function(videoName, videoType){
		// report
		RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "PLA", "wa_vi_tp", videoType, "wa_lob", "rb");
		RPT_RecordEvent();
	},
	tagPauseState: function(videoName, videoType){
		// report
		RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "PAU", "wa_vi_tp", videoType, "wa_lob", "rb");
		RPT_RecordEvent();
	},
	tagVideoEnd: function(videoName, videoType){
		RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "100P", "wa_vi_tp", videoType, "wa_lob", "rb");
		RPT_RecordEvent();
	},
	getVideoType: function(player){
		// return player video type
		return player.currentType();
	},
	getNewVideoPSID: function(){
		var psID = new Date().getTime();
		// setup unique listen interval
		VideoTagging.videoListenInterval[psID] = null;
		// setup video quarters
		VideoTagging.videoQuarter[psID] = {
			second: false,
			third: false,
			fourth: false
		};
		return psID;
	},
	getPercentage: function(player){
		var percentage = 0;

		if(Modernizr.touch){
			percentage = Math.ceil((player.currentTime / player.duration) * 100);
		}else{
			percentage = Math.ceil((player.currentTime() / player.duration()) * 100);
		}
		return percentage;
	},
	tagPercentageSeen: function(videoName, videoType, percentage, psId){
		if(percentage >= 25 && percentage < 50){
			if(!VideoTagging.videoQuarter[psId].second){
				VideoTagging.videoQuarter[psId].second = true;
				// report
				RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "25P", "wa_vi_tp", videoType);
		      	RPT_RecordEvent();
			}
		}

		if(percentage >= 50 && percentage < 75){
			if(!VideoTagging.videoQuarter[psId].third){
				VideoTagging.videoQuarter[psId].third = true;
				// report
				RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "50P", "wa_vi_tp", videoType);
		      	RPT_RecordEvent();
			}
		}

		if(percentage >= 75 && percentage < 100){
			if(!VideoTagging.videoQuarter[psId].fourth){
				VideoTagging.videoQuarter[psId].fourth = true;
				// report
				RPT_AddVariables("wa_tp", "21", "wa_vi_n", videoName, "wa_vi_s", "75P", "wa_vi_tp", videoType);
		      	RPT_RecordEvent();
			}
		}
	}
};



var MyChase = MyChase || {
	closeSearch: function(){
		$('.header-search-icon').removeClass('hide');
		$('.search-bar').removeClass('open');
		$('.search-bar').slideUp(function(){
			$('.search-container').removeClass('active');
		});
	},
	closeSocial: function(){
		$('.social-follow-us').removeClass('hide');
		$('.search-bar').removeClass('open');
		$('.search-bar').slideUp(function(){
			$('.social-container').removeClass('active');
		});
	},
	toggleContainers: function(container){
		if(container === '.search-container'){
			$(container).removeClass('active');
			$('.social-container').addClass('active');
			$('.header-search-icon').removeClass('hide');
		}else{
			$('.social-container').removeClass('active');
			$('.search-container').addClass('active');
			$('.social-follow-us').removeClass('hide');
		}
	},
	searchBarBehaviors: function(){
		// social click
		$('.social-follow-us').click(function(e){
			e.preventDefault();
			$(this).addClass('hide');

			if($('.search-container').hasClass('active')){
				MyChase.toggleContainers('.search-container');
			}else{
				$('.search-bar').addClass('open');
				$('.social-container').addClass('active');
				$('.search-bar').slideDown();
			}
		});

		// search icon click
		$('.header-search-icon').click(function(e){
			e.preventDefault();
			$(this).addClass('hide');

			if($('.social-container').hasClass('active')){
				MyChase.toggleContainers('.social-container');
			}else{
				$('.search-bar').addClass('open');
				$('.search-container').addClass('active');
				$('.search-bar').slideDown();
				$('#search').focus();
			}
		});

		// close click
		$('.close-button').click(function(){
			if($('.search-container').hasClass('active')){
				MyChase.closeSearch();
			}

			if($('.social-container').hasClass('active')){
				MyChase.closeSocial();
			}
		});
	},
	menuBehaviors: function(){
		$('.hamburguer-menu').click(function(e){
			e.preventDefault();
			$('.wrapper').toggleClass('active');
			$('.header').toggleClass('active');
		});

		$('.homepage-bg').click(function(){
			$('.wrapper').removeClass('active');
			$('.header').removeClass('active');
		});

		$('.menu-list-item.has-sub').click(function(e){
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$(this).parent().find('.submenu').slideUp();
			}else{
				$(this).parent().addClass('active');
				$(this).parent().find('.submenu').slideDown();
			}
		});

		$('.menu-list-item.has-tert').click(function(e){
			e.stopPropagation();
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$(this).parent().find('.tertmenu').slideUp();
			}else{
				$(this).parent().addClass('active');
				$(this).parent().find('.tertmenu').slideDown();
			}
		});

		// For the anchors on the page that are reflected in the header, on scroll,
		// figure out which part of the sub nav should be highlighted
		var anchors = $('a.anchor-hover');
		var subnavAnchors = $('.subnav-menu a:visible');
		var subnavAnchorLinks = [];
		$(subnavAnchors).each(function() {
			var href = $(this).attr('href');
			href = href.replace('#','');
			subnavAnchorLinks.push(href);
		});
		var headerOffset = 128;
		$(window).scroll(function() {
			for(var i = 0; i < anchors.length; i++) {
				if($.inArray($(anchors[i]).attr('id'), subnavAnchorLinks) > -1) {
					if($(anchors[i]).offset().top - headerOffset < $(document).scrollTop()) {
						$('.subnav-menu a:visible').parent().removeClass('active');
						$('.subnav-menu a:visible[href=#' + $(anchors[i]).attr('id') + ']').parent().addClass('active');
					}
				}
			}
		});

		if(Modernizr.touch) {
			$('.show-subernav > a').click(function(e) {
				$('.show-subernav').toggleClass('hover');

				$('.content-wrapper').click(function() {
					$('.show-subernav').removeClass('hover');
				    $('.content-wrapper').unbind('click');
				});
			});
		} else {
			$('.show-subernav').hover(function(){
				$(this).addClass('hover');
			}, function() {
				$(this).removeClass('hover');
			});
		}

		$('ul.subernav li.social-container a').click(function(){
			$('.show-subernav').removeClass('hover');
			return false;
		});


		// Intercept subnav click links and manually go to the anchor (Chase cannot have # in the url)
		$('.subnav-content ul.subernav li > a, .subnav-content .subnav-menu ul li > a, .see-more a, a.see-more-btn').click(function() {
			$('.show-subernav').removeClass('hover');
			$('html, body').scrollTop($($(this).attr('href')).offset().top);

			return false;
		});
	},
  desktopVideoSliderBehavior: function(whichVideo){
    var videoContainer = whichVideo;
    var videoId = (whichVideo === '.hero-video-container') ? 'main-video' : 'hpsub-main-video';
    var moveInfo = null;
    $(videoContainer+' .vs-button').click(function(){
      //clear closed captions
      $('.closed-caption-btn').removeClass('active');

      //click up
      if($(this).hasClass('up')){
        moveInfo = MyChase.move(videoContainer, 'up');
        $(videoContainer+' .video-thumbs').animate({
          top: moveInfo.move + 'px'
        }, 500, function(){
          if (moveInfo.buttons === 'both') {
            $(videoContainer + ' .vs-button.down').removeClass('hide');
            $(videoContainer + ' .vs-button.up').removeClass('hide');
          } else {
            $(videoContainer + ' .vs-button.down').removeClass('hide');
            $(videoContainer + ' .vs-button.up').addClass('hide');
          }
        });
      }

      //click down
      if($(this).hasClass('down')){
        moveInfo = MyChase.move(videoContainer, 'down');
        $(videoContainer+' .video-thumbs').animate({
          top:  moveInfo.move + 'px'
        }, 500, function(){
          if (moveInfo.buttons === 'both') {
            $(videoContainer + ' .vs-button.down').removeClass('hide');
            $(videoContainer + ' .vs-button.up').removeClass('hide');
          } else {
            $(videoContainer + ' .vs-button.down').addClass('hide');
            $(videoContainer + ' .vs-button.up').removeClass('hide');
          }
        });
      }
    });
  },
  move: function(videoContainer, dir) {
    var $videoThumbs = $(videoContainer + ' .video-thumbs li');
    var $container = $(videoContainer + ' .video-thumb-container');
    var $videoList = $(videoContainer + ' .video-thumbs');
    var innerTop = parseInt($videoList.css('top'));
    var moveDistance = $videoThumbs.height() * 2 + $container.width() * .18;
    var rem = 0;
    if (dir === 'down') {
      innerTop = (innerTop >= 0) ? innerTop * -1 : innerTop;
      rem = $videoList.height() - (innerTop * -1 + $container.height());

      if (rem < $container.height()) {
        if (rem > moveDistance) {
          return {move: innerTop -= moveDistance, buttons: 'both'};
        } else {
          return {move: innerTop -= rem, buttons: 'top'};
        }
      } else {
        return {move: innerTop -= moveDistance, buttons: 'both'};
      }
    } else {
      if (innerTop * -1 < $container.height()) {
        if (innerTop * -1 > moveDistance) {
          return {move: innerTop += moveDistance, buttons: 'both'};
        } else {
          return {move: 0, buttons: 'down'};
        }
      } else {
        return {move: innerTop += moveDistance, buttons: 'both'};
      }
    }
  },
	resizeVideo: function(){
		$(window).on('resize.videoresize',function(){
			var aspectRatio = 9 / 16,
				width = 0;
			if($('html').hasClass('ie8')){
				$('.main-video-container object').each(function(){
					width = $(this).parents('.main-video-container').width();
					$(this).parent().width(width).height( width * aspectRatio );
				});
			}else{

				$('.main-video-container video').each(function(){
					width = $(this).parent().parent().width();
					$(this).parent().width(width).height( width * aspectRatio );
				});
			}
		}).trigger('resize.videoresize');
	},
	desktopVideoThumbBehavior: function(whichVideo){
		var videoContainer = whichVideo,
			videoId = '';

		if(whichVideo === '.hero-video-container'){
			videoId = 'main-video';
		}else if(whichVideo === '.hpsub-video-container'){
			videoId = 'hpsub-main-video';
		}else if(whichVideo === '.product-video-container'){
			videoId = 'product-main-video';
		}

		$(videoContainer+' .video-thumbs li').click(function(){
			//clear closed captions
			$('.closed-caption-btn').removeClass('active');
			// track thumb click
			VideoTagging.tagThumbnailClick($(this).attr('data-trackingname'));

			if(MyChase.hasVideo($(videoContainer))){
				if($('html').hasClass('ie8')){
					// clear interval
					clearInterval(VideoTagging.videoListenInterval[$(videoContainer).find('object').attr('data-psid')]);
				}else{
					// clear interval
					clearInterval(VideoTagging.videoListenInterval[$(videoContainer).find('video').attr('data-psid')]);
				}
				// hide videojs and then remove
				$(videoContainer).find('.video-js').hide();

				// show poster
				$(videoContainer).find('.init-poster').show();

				// swap vid info
				MyChase.swap($(this), $(videoContainer));

				$(videoContainer).find('.caption-container').animate({
					bottom: '0%'
				}, 1000, function(){
					$(this).removeClass('hidden');
				});

				// try and dispose
				videojs('#'+videoId).dispose();
			}else{
				// swap vid info
				MyChase.swap($(this), $(videoContainer));
			}
		});
	},
	swap: function($elem, $videoContainer){


		//alert("elemnto" + $elem.index());

		if ($('body').hasClass('product-suites-section') && $elem.index() !== 0){
			$(".product-suites-section .hero-description").hide();
			$(".product-suites-section .men-title").hide();
		}else {
			$(".product-suites-section .hero-description").show();
			$(".product-suites-section .men-title").show();
		}
		var poster = $elem.attr('data-poster'),
			altTag = $elem.attr('data-postalttag'),
			videoURL = $elem.attr('data-video'),
			captionTitle = $elem.attr('data-captiontitle'),
			captionDesc = $elem.attr('data-captiondesc'),
			trackingName = $elem.attr('data-trackingname'),
			transcriptLink = $elem.attr('data-transcriptlink');

		// update init poster
		$videoContainer.find('.init-poster').attr('data-video', videoURL);
		$videoContainer.find('.init-poster').attr('src', poster);
		$videoContainer.find('.init-poster').attr('alt', altTag);

		// update captions
        $videoContainer.find('.caption-title').html(captionTitle);
        $videoContainer.find('.caption-desc').html(captionDesc);

        // update tracking
        $videoContainer.attr('data-trackingname', trackingName);

        // update transcript link
        $videoContainer.find('.transcript-link').attr('href', transcriptLink);

        $elem.parent().find('li').removeClass('active');
        $elem.addClass('active');
	},
	productVideoSliderBehavior: function(){
		$('.productvs-button').click(function(){
			var $curItem, $nextItem, $prevItem;
			//clear closed captions
			$('.closed-caption-btn').removeClass('active');

			if($(this).hasClass('right')){
				$curItem = $('.video-thumbs li.active');
				$nextItem = $('.video-thumbs li.active').next();

				if(!$nextItem.length){
					$nextItem = $('.video-thumbs li').first();
				}

				//track click
				VideoTagging.tagThumbnailClick($nextItem.attr('data-trackingname'));

				// check if video already there
				if(MyChase.hasVideo($('.product-video-container'))){
					if($('html').hasClass('ie8')){
						clearInterval(VideoTagging.videoListenInterval[$('.product-video-container').find('object').attr('data-psid')]);
					}else{
						// clear interval
						clearInterval(VideoTagging.videoListenInterval[$('.product-video-container').find('video').attr('data-psid')]);
					}
					// hide videojs and then remove
					$('.product-video-container').find('.video-js').hide();
					// show poster
					$('.product-video-container').find('.init-poster').show();

					// swap vid info
					MyChase.swap($nextItem, $('.product-video-container'));

					$('.product-video-container').find('.caption-container').animate({
						bottom: '0%'
					}, 1000, function(){
						$(this).removeClass('hidden');
					});

					// try and dispose
					videojs('#product-main-video').dispose();
				}else{
					MyChase.swap($nextItem, $('.product-video-container'));
				}
			}

			if($(this).hasClass('left')){
				$curItem = $('.video-thumbs li.active');
				$prevItem = $('.video-thumbs li.active').prev();

				if(!$prevItem.length){
					$prevItem = $('.video-thumbs li').last();
				}

				//track click
				VideoTagging.tagThumbnailClick($prevItem.attr('data-trackingname'));

				if(MyChase.hasVideo($('.product-video-container'))){
					if($('html').hasClass('ie8')){
						clearInterval(VideoTagging.videoListenInterval[$('.product-video-container').find('object').attr('data-psid')]);
					}else{
						// clear interval
						clearInterval(VideoTagging.videoListenInterval[$('.product-video-container').find('video').attr('data-psid')]);
					}
					// hide videojs and then remove
					$('.product-video-container').find('.video-js').hide();
					// show poster
					$('.product-video-container').find('.init-poster').show();

					// swap vid info
					MyChase.swap($prevItem, $('.product-video-container'));

					$('.product-video-container').find('.caption-container').animate({
						bottom: '0%'
					}, 1000, function(){
						$(this).removeClass('hidden');
					});

					// try and dispose
					videojs('#product-main-video').dispose();
				}else{
					// swap vid info
					MyChase.swap($prevItem, $('.product-video-container'));
				}
			}
		});
	},
	toggleMobileVideoSlider: function(player, show, $vC, vTN, psID){

		if(show){
			$vC.find('.slick-slide img').hide();
			$vC.find('.play-container').hide();
			// hide arrows
			$vC.find('.slick-prev').hide();
			$vC.find('.slick-next').hide();
			$vC.find('.vjs-poster').css('display', 'none');
			$vC.find('video').parent().css('position', 'relative');

			player.play();
			player.controlBar.show();

			//track play
			VideoTagging.tagPlayState(vTN, VideoTagging.getVideoType(player));
			// start percentage tracking
			VideoTagging.videoListenInterval[psID] = setInterval(function(){
				VideoTagging.tagPercentageSeen(vTN, VideoTagging.getVideoType(player), VideoTagging.getPercentage(player), psID);
			}, 100);
		}else{
			$vC.find('video').parent().css('position', 'absolute');
			$vC.find('.slick-slide img').show();
			$vC.find('.play-container').show();
			// hide arrows
			$vC.find('.slick-prev').show();
			$vC.find('.slick-next').show();
			$vC.find('.vjs-poster').css('display', 'block');
			// mobile remove class hidden
			$vC.find('.cc-container').removeClass('hidden');
			// clear interval
			clearInterval(VideoTagging.videoListenInterval[$vC.find('.video-js').attr('data-psid')]);
			// remove player
			if(player !== null){
				player.dispose();
			}
		}
	},
	mobileVideoSliderBehavior: function(section){

		if(section == 'home'){
			// after change
			$('.hero-mobile-video-container .slick-container').on('beforeChange', function(event, slick, currentSlide,nextSlide){
				var player = null;
				// only for product-suites section
				if ($('body').hasClass('product-suites-section') && nextSlide !== 0){
					$(".product-suites-section .hero-mobile-video-container .hero-mobile-description").hide();
				}else{
					$(".product-suites-section .hero-mobile-description").show();

				}

				if($('.hero-mobile-video-container video').length){
					player = videojs('#hero-mobile-video');
				}

				MyChase.toggleMobileVideoSlider(player, false, $('.hero-mobile-video-container'));
			});



			$('.hero-mobile-video-container .slick-container').slick({
				dots: true
			});

			// after change
			$('.hpsub-mobile-video-container .slick-container').on('beforeChange', function(event, slick, currentSlide){
				var player = null;
				if($('.hpsub-mobile-video-container video').length){
					player = videojs('#hpsub-mobile-video');
				}
				MyChase.toggleMobileVideoSlider(player, false, $('.hpsub-mobile-video-container'));
			});
			$('.hpsub-mobile-video-container .slick-container').slick({
				dots: true
			});
		}else{
			$('.product-mobile-video-container .slick-container').on('beforeChange', function(event, slick, currentSlide){

				var player = null;
				if($('.product-mobile-video-container video').length){
					player = videojs('#product-mobile-video');
				}
				MyChase.toggleMobileVideoSlider(player, false, $('.product-mobile-video-container'));
			});
			$('.product-mobile-video-container .slick-container').slick({
				dots: true
			});
		}
	},
	injectVideo: function(videoId, poster, videoURL, $videoContainer, mobile){
		var html = '',
			psID = VideoTagging.getNewVideoPSID(),
			videoTrackingName,
			mainVideoPlayer;

		// determine videoTracking Name
		if(mobile){
			videoTrackingName = $videoContainer.find('.slick-slide.slick-active').attr('data-trackingname');
		}else{
			videoTrackingName = $videoContainer.attr('data-trackingname');
		}

		if(!mobile){
			html += '<video id="'+videoId+'" class="video-js vjs-default-skin" data-psid="'+psID+'" controls="controls" poster="'+poster.attr('src')+'" width="640" height="360">';
				html += '<source src="'+videoURL+'.mp4" type="video/mp4" />';
		        html += '<source src="'+videoURL+'.webm" type="video/webm" />';
		        html += '<source src="'+videoURL+'.ogv" type="video/ogg" />';
		        html += '<object type="application/x-shockwave-flash" data="javascript/vendor/video-js.swf" width="640" height="360">';
			        html += '<param name="movie" value="javascript/vendor/video-js.swf" />';
			        html += '<param name="allowFullScreen" value="true" />';
			        html += '<param name="wmode" value="transparent" />';
			        html += '<param name="flashVars" value="config={\'playlist\':[\''+encodeURIComponent(poster.attr('src'))+'\',{\'url\':\''+encodeURIComponent(videoURL+'.mp4')+'\',\'autoPlay\':false}]}" />';
		        html += '</object>';
	        html += '</video>';

	        poster.hide();

	        $videoContainer.find('.main-video-container').prepend(html);

	        // init videojs
	        mainVideoPlayer = videojs('#'+videoId, { }, function(){
				this.ready(function(){
					$videoContainer.find('.caption-container').animate({
						bottom: '-100%'
					}, 1000, function(){
						$(this).addClass('hidden');
					});
					// play video
					this.play();
				});
			});

	        // resize videos
	        MyChase.resizeVideo();

	        // pause event
	        mainVideoPlayer.on('pause', function(){
	        	VideoTagging.tagPauseState(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));
				// pause percentage tracking
				// by clearing the interval
				clearInterval(VideoTagging.videoListenInterval[psID]);

				// check for ie8, because of weird no end event
				if($('html').hasClass('ie8')){
					if(Math.floor(this.currentTime()) === Math.floor(this.duration())){
						VideoTagging.tagVideoEnd(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));
					}
				}
	        });

	        // play event
	        mainVideoPlayer.on('play', function(){
	        	// always hide this if its playing
				mainVideoPlayer.posterImage.hide();
				mainVideoPlayer.controlBar.show();
				if(!$videoContainer.find('.caption-container').hasClass('hidden')){
					$videoContainer.find('.caption-container').animate({
						bottom: '-100%'
					}, 1000, function(){
						$(this).removeClass('hidden');
					});
				}

				//track play
				VideoTagging.tagPlayState(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));
				// start percentage tracking
				VideoTagging.videoListenInterval[psID] = setInterval(function(){
					VideoTagging.tagPercentageSeen(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer), VideoTagging.getPercentage(mainVideoPlayer), psID);
				}, 100);
	        });

			// video ends
			mainVideoPlayer.on('ended', function(){
				// track video end
				VideoTagging.tagVideoEnd(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));

				//clear the interval
				clearInterval(VideoTagging.videoListenInterval[psID]);

				mainVideoPlayer.posterImage.show();
			    mainVideoPlayer.currentTime(0);
			    if($('html').hasClass('ie8')){
			    	mainVideoPlayer.pause();
			    }
			    mainVideoPlayer.controlBar.hide();

				$videoContainer.find('.caption-container').animate({
					bottom: '0%'
				}, 1000, function(){
					$(this).removeClass('hidden');

				});

				// mobile remove class hidden
				$videoContainer.find('.cc-container').removeClass('hidden');
			});
		}else{
			html += '<video id="'+videoId+'" class="video-js vjs-default-skin" data-psid="'+psID+'" controls="controls" poster="'+poster+'" width="640" height="360">';
				html += '<source src="'+videoURL+'.mp4" type="video/mp4" />';
		        html += '<source src="'+videoURL+'.webm" type="video/webm" />';
		        html += '<source src="'+videoURL+'.ogv" type="video/ogg" />';
		        html += '<object type="application/x-shockwave-flash" data="javascript/vendor/video-js.swf" width="640" height="360">';
			        html += '<param name="movie" value="javascript/vendor/video-js.swf" />';
			        html += '<param name="allowFullScreen" value="true" />';
			        html += '<param name="wmode" value="transparent" />';
			        html += '<param name="flashVars" value="config={\'playlist\':[\''+encodeURIComponent(poster)+'\',{\'url\':\''+encodeURIComponent(videoURL+'.mp4')+'\',\'autoPlay\':false}]}" />';
		        html += '</object>';
	        html += '</video>';

	        $videoContainer.find('.main-video-container').prepend(html);

	        mainVideoPlayer = videojs('#'+videoId, { }, function(){
				this.ready(function(){
				});
			});

			// resize videos
	        MyChase.resizeVideo();

	        // Track Play/Pause States
			mainVideoPlayer.on('click', function(){
				if(this.paused()){
					// track pause
					VideoTagging.tagPauseState(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));

					// pause percentage tracking
					// by clearing the interval
					clearInterval(VideoTagging.videoListenInterval[psID]);
				}else{
					// always hide this if its playing
					mainVideoPlayer.posterImage.hide();
					mainVideoPlayer.controlBar.show();

					//track play
					VideoTagging.tagPlayState(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));

					// start percentage tracking
					VideoTagging.videoListenInterval[psID] = setInterval(function(){
						VideoTagging.tagPercentageSeen(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer), VideoTagging.getPercentage(mainVideoPlayer), psID);
					}, 100);
				}
			});

	        // video ends
			mainVideoPlayer.on('ended', function(){
				// track video end
				VideoTagging.tagVideoEnd(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));

				//clear the interval
				clearInterval(VideoTagging.videoListenInterval[psID]);

				// toggle video and slider states for mobile
	        	MyChase.toggleMobileVideoSlider(mainVideoPlayer, false, $videoContainer);
			});

	        // toggle video and slider states for mobile
	        MyChase.toggleMobileVideoSlider(mainVideoPlayer, true, $videoContainer, videoTrackingName, psID);
		}
	},
	hasVideo: function($videoContainer){
		if($('html').hasClass('ie8')){
			if($videoContainer.find('object').length){
				return true;
			}else{
				return false;
			}
		}else{
			if($videoContainer.find('video').length){
				return true;
			}else{
				return false;
			}
		}
	},
	closeModals: function() {
		$('.modal').hide();
  		$('.modal-fade').hide();
	},
	modalBehaviors: function() {
		$(document).ready(function() {
			$('a[data-toggle="modal"], .chaseanalytics-opt-exlnk').click(function() {
				MyChase.closeModals();

				$('.modal-fade').show();
				var modal;

        		if(($(this).hasClass('dl-app-link')) || ($(this).hasClass('chaseanalytics-track-link'))){
					RPT_AddVariables('wa_lnk', $(this).attr('data-pt-name'), 'wa_tp', 1);
	        		RPT_RecordEvent();
        		}

				if($(this).hasClass('chaseanalytics-opt-exlnk')) {
					modal = $('#leaving-chase');
					$(modal).find('a.continue').attr('href', $(this).attr('href'));
				} else {
					modal = $($(this).attr('href'));
				}

				if($(modal).outerHeight() > $(window).height()) {
					$(modal).find('.modal-title, .modal-content').wrapAll('<div class="modal-content-wrapper" />');
				}

				$(modal).css('left', ($(window).width() / 2) - (($(modal).outerWidth() / 2)));
				$(modal).css('top', ($(window).height() / 2) - (($(modal).outerHeight() / 2)));
				$(modal).show();

				if(modal.attr('id') === 'leaving-chase'){
					CHASE.analytics.trackModalLoad("leaving_chase","Youre Now Leaving Chase");
				}else if(modal.attr('id') === 'download-apps'){
					CHASE.analytics.trackModalLoad("download_mobile_app","Download Mobile App");
				}

				return false;
			});

			$('.modal-fade, .modal .modal-close').click(function() {
				MyChase.closeModals();

				return false;
			});
		});

		$(document).keyup(function(e) {
  			// Escape
  			if (e.keyCode == 27) {
  				MyChase.closeModals();
  			}
		});
	},
	leavingChaseBehaviors: function() {
		$(document).ready(function() {
			$('#leaving-chase a.cancel').click(function() {
				MyChase.closeModals();
				// track it
				RPT_AddVariables('wa_lnk', $(this).attr('data-pt-name'), 'wa_tp', 1);
        		RPT_RecordEvent();
				return false;
			});

			$('#leaving-chase a.continue').click(function(){
				// track it
				RPT_AddVariables('wa_exlnk', $(this).attr('data-pt-name'), 'wa_tp', 3);
        		RPT_RecordEvent();
			});
		});

		$(document).keyup(function(e) {
  			// Escape
  			if (e.keyCode == 27) {
  				$('.modal').hide();
  				$('.modal-fade').hide();
  			}
		});
	},
	footerLinkBehaviors: function() {
		$(document).ready(function() {
			$('sup.footer-link').click(function() {
				location.href = "#"; // Need this first for webkit
				location.href = $(this).data('link');
			});
		});
	},
	init: function(){
		MyChase.menuBehaviors();
		MyChase.searchBarBehaviors();
		MyChase.modalBehaviors();
		MyChase.leavingChaseBehaviors();
		MyChase.footerLinkBehaviors();

		// init poster click or play button click
		$('.main-video-container').on('click', '.init-poster', function(){
			var $videoContainer = $(this).parents('.main-video-container').parent(),
				videoURL = $(this).attr('data-video'),
				$videoPoster = $(this),
				videoId = '';

			// determine video id
			if($videoContainer.hasClass('hero-video-container')){
				videoId = 'main-video';
			}else if($videoContainer.hasClass('hpsub-video-container')){
				videoId = 'hpsub-main-video';
			}else if($videoContainer.hasClass('product-video-container')){
				videoId = 'product-main-video';
			}

			MyChase.injectVideo(videoId, $videoPoster, videoURL, $videoContainer);
		});

		$('.play-button').click(function(){
			var $videoContainer = '',
				$initPoster = '',
				videoURL = '',
				$videoPoster = '',
				videoId = '',
				videoTrackingName = '';

			if(!$(this).hasClass('mobile')){

				$videoContainer = $(this).parents('.main-video-container').parent();
				$initPoster = $videoContainer.find('.init-poster');
				videoURL = $initPoster.attr('data-video');
				$videoPoster = $initPoster;
				videoId = '';
				trackingName = $videoContainer.attr('data-trackingname');




				// determine video id
				if($videoContainer.hasClass('hero-video-container')){
					$(".product-suites-section .hero-description").hide(); // Note: only for product suites
					$(".product-suites-section .men-title").hide(); // Note: only for product suites
					$(".product-suites-section .transcription-container").hide(); // Note: only for product suites
					videoId = 'main-video';
				}else if($videoContainer.hasClass('hpsub-video-container')){
					videoId = 'hpsub-main-video';
				}else if($videoContainer.hasClass('product-video-container')){
					videoId = 'product-main-video';
				}

				if(MyChase.hasVideo($videoContainer)){

					$videoContainer.find('.caption-container').animate({
						bottom: '-100%'
					}, 1000, function(){
						$(this).removeClass('hidden');
					});
					$videoContainer.find('.vjs-poster').hide();

					videojs('#'+videoId).play();
					videojs('#'+videoId).controlBar.show();
				}else{
					MyChase.injectVideo(videoId, $videoPoster, videoURL, $videoContainer);
				}

			}else{


				$videoContainer = $(this).parents('.play-container').siblings('.main-video-container').parent();

				videoURL = $videoContainer.find('.slick-slide.slick-active').attr('data-video');
				poster = $videoContainer.find('.slick-slide.slick-active').attr('data-poster');
				videoId = '';


				trackingName = $videoContainer.find('.slick-slide.slick-active').attr('data-trackingname');

				// hide CC
				$videoContainer.find('.cc-container').addClass('hidden');


				// determine video id
				if($videoContainer.hasClass('hero-mobile-video-container')){
					$(".product-suites-section .hero-description").hide(); // Note: only for product suites

					videoId = 'hero-mobile-video';
				}else if($videoContainer.hasClass('hpsub-mobile-video-container')){
					videoId = 'hpsub-mobile-video';
				}else if($videoContainer.hasClass('product-mobile-video-container')){
					videoId = 'product-mobile-video';
				}

				if(MyChase.hasVideo($videoContainer)){
					videojs('#'+videoId).play();
					//track play
					VideoTagging.tagPlayState(videoTrackingName, VideoTagging.getVideoType(mainVideoPlayer));
				}else{
					MyChase.injectVideo(videoId, poster, videoURL, $videoContainer, true);
				}
			}
		});

		// closed caption functionality
		$('.closed-caption-btn').click(function(){
			var $container = $(this).parents('.main-video-container').parent(), curVideoURL, newVideoURL, $mobileElem, videoId;
			if($(this).hasClass('active')){
				$(this).toggleClass('active');
				if($('html').hasClass('ie8')){
					if(MyChase.hasVideo($container)){
						videoId = $container.find('.video-js').attr('id');
						curVideoURL = videojs('#'+videoId).currentSrc().split('.')[0];
						newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);

						// swap the src out
						videojs('#'+videoId).src([
							{ type: "video/mp4", src: newVideoURL+".mp4" },
							{ type: "video/webm", src: newVideoURL+".webm" },
							{ type: "video/ogg", src: newVideoURL+".ogv" }
						]);
					}else{
						curVideoURL = $container.find('.init-poster').attr('data-video');
						newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);
						$container.find('.init-poster').attr('data-video', newVideoURL);
					}
				}else{
					if((getDeviceState() == 'desktop') || (getDeviceState() == 'tablet')){
						if(MyChase.hasVideo($container)){
							videoId = $container.find('.video-js').attr('id');
							curVideoURL = videojs('#'+videoId).currentSrc().split('.')[0];
							newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);

							// swap the src out
							videojs('#'+videoId).src([
								{ type: "video/mp4", src: newVideoURL+".mp4" },
								{ type: "video/webm", src: newVideoURL+".webm" },
								{ type: "video/ogg", src: newVideoURL+".ogv" }
							]);
						}else{
							curVideoURL = $container.find('.init-poster').attr('data-video');
							newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);
							$container.find('.init-poster').attr('data-video', newVideoURL);
						}
					}else{
						// mobile swapping
						if($('body').hasClass('product-suites-section')){
							curVideoURL =  $(".slick-initialized .slick-slide").attr('data-video');
							newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);
							$(".slick-initialized .slick-slide").attr('data-video', newVideoURL);
							//alert(curVideoURL);
						}else{
							$mobileElem = $(this).parents('.slick-container').find('.slick-slide.slick-active');
							curVideoURL = $mobileElem.attr('data-video');
							newVideoURL = curVideoURL.substring(0, curVideoURL.length - 3);
							$mobileElem.attr('data-video', newVideoURL);
						}





					}
				}
			}else{
				$(this).toggleClass('active');
				if($('html').hasClass('ie8')){
					if(MyChase.hasVideo($container)){
						videoId = $container.find('.video-js').attr('id');
						curVideoURL = videojs('#'+videoId).currentSrc().split('.')[0];
						newVideoURL = curVideoURL+'_cc';

						// swap the src out
						videojs('#'+videoId).src([
							{ type: "video/mp4", src: newVideoURL+".mp4" },
							{ type: "video/webm", src: newVideoURL+".webm" },
							{ type: "video/ogg", src: newVideoURL+".ogv" }
						]);
					}else{
						curVideoURL = $container.find('.init-poster').attr('data-video');
						newVideoURL = curVideoURL+'_cc';
						$container.find('.init-poster').attr('data-video', newVideoURL);
					}
				}else{
					if((getDeviceState() == 'desktop') || (getDeviceState() == 'tablet')){
						if(MyChase.hasVideo($container)){
							videoId = $container.find('.video-js').attr('id');
							curVideoURL = videojs('#'+videoId).currentSrc().split('.')[0];
							newVideoURL = curVideoURL+'_cc';

							// swap the src out
							videojs('#'+videoId).src([
								{ type: "video/mp4", src: newVideoURL+".mp4" },
								{ type: "video/webm", src: newVideoURL+".webm" },
								{ type: "video/ogg", src: newVideoURL+".ogv" }
							]);
						}else{
							curVideoURL = $container.find('.init-poster').attr('data-video');
							newVideoURL = curVideoURL+'_cc';
							$container.find('.init-poster').attr('data-video', newVideoURL);

						}
					}else{
						// mobile swapping
						if($('body').hasClass('product-suites-section')){
							curVideoURL =  $(".slick-initialized .slick-slide").attr('data-video');
							newVideoURL = curVideoURL+'_cc';
							$(".slick-initialized .slick-slide").attr('data-video', newVideoURL);
							//alert(curVideoURL);
						}else{
							$mobileElem = $(this).parents('.slick-container').find('.slick-slide.slick-active');
							curVideoURL = $mobileElem.attr('data-video');
							newVideoURL = curVideoURL+'_cc';
							$mobileElem.attr('data-video', newVideoURL);
						}


					}
				}
			}
		});

		if($('body').hasClass('home-section') || $('body').hasClass('business-banking-section') || $('body').hasClass('product-suites-section') ){
			// homepage desktop & tablet
			MyChase.desktopVideoSliderBehavior('.hero-video-container');
			MyChase.desktopVideoSliderBehavior('.hpsub-video-container');
			MyChase.desktopVideoThumbBehavior('.hero-video-container');
			MyChase.desktopVideoThumbBehavior('.hpsub-video-container');
			MyChase.mobileVideoSliderBehavior('home');

		}else if($('body').hasClass('product-page')){
			MyChase.productVideoSliderBehavior();
			MyChase.desktopVideoThumbBehavior('.product-video-container');
			MyChase.mobileVideoSliderBehavior('product-page');
		}
	}
};

MyChase.init();

$(document).ready(function() {
	$("img").unveil();

	// If mobile, make all aria-expanded false since it starts that way by default
	if(getDeviceState()=="phone") {
		$(".category-info.content-toggler").attr('aria-expanded', 'false');
	}

	$(".category-info.content-toggler, .FAQ-section .content-toggler").click(function() {

		if($(this).closest('.FAQ-section').length) {
			// check if it is not already expanded then track open click
			if(!$(this).hasClass('expanded')){
				CHASE.analytics.trackTabSelect("faq", $(this).attr('data-trackingName'));
			}
		}

        var content = $(this).next();
        if($(content).css("display") == "block") {
            $(content).slideUp();
            $(this).attr('aria-expanded', 'false');
        } else {
            $(content).slideDown();
            $(this).attr('aria-expanded', 'true');
        }
        $(this).toggleClass('expanded');
    });

	$(".FAQ-parent-toggler").click(function() {
		var content = $(this).next();
		if($(content).css("display") == "block") {
			$(content).slideUp();
			$(this).attr('aria-expanded', 'false');
		}else {
			$(content).slideDown();
			$(this).attr('aria-expanded', 'true');
		}
		$(this).find("h4").toggleClass('expanded');
	});

	// View All FAQs
	$(".view-all-faqs").click(function() {
		CHASE.analytics.trackModalLoad("view_all_faqs_open", "Frequently asked questions open");

		$(".FAQ-section .container").css("display", "block");
		$(".view-all-faqs").css("display", "none");
	});
	$(".FAQ-section .close-section").click(function() {
		CHASE.analytics.trackModalLoad("view_all_faqs_close", "Frequently asked questions close");

		$(".container").css("display", "none");
		$(".view-all-faqs").css("display", "inline-block");
	});

    // call scroll tagging
    $.fn.scrollTagging();

    // Tile Zooming
    $('.thumb-containter img').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });

    // Query parameter reads
    var showVideo = getParameterByName('showVideo');
    if(showVideo) {
    	$('.video-thumbs li[data-trackingname="' + showVideo + '"]').click();
    }
});

/* Scroll Tagging */
$.fn.scrollTagging = function (options) {

    var checkTags, checkDepth, init, scrollPos, depth, dir, section, lastPos = 0, lastEl = null, pageQueryString, endofpage = false,
    	depthMarkers = { first: false, second: false, third: false, fourth: false, end: false };

    options = $.extend({
        className: "scrollTagMe"
    }, options);

    scrollPos = void 0;

    checkTags = function() {
        var resultEl, tagData;

        scrollPos = $(window).scrollTop();
        depth = Math.round((scrollPos/($(document).height() - $(window).height()))*100);
        resultEl = null;

        if(scrollPos >= lastPos){
            dir = "D";
        }else{
            dir = "U";
        }

        lastPos = scrollPos;

        $("." + options.className).each(function () {
            if ($(this).offset().top + ($(this).height()/2) <= scrollPos + ($(window).height()/2)) {
                resultEl = this;
            }
        });

        if (resultEl !== null && lastEl !== resultEl) {
            lastEl = resultEl;
            resultEl.tagged = true;
            // section manipulation
            section = resultEl.id.split('-');
            section.splice(0,2);
            section = 'da_'+section.join('_');

            pageQueryString = window.location.search;
            RPT_AddVariables("jp_scdp",depth,"jp_scdr",dir,"jp_scrp", window.location.href,"jp_ctg","", "wa_uri", window.location.origin);
            RPT_RecordEvent();
        }

        if(depth === 100){
            RPT_AddVariables("jp_scdp",depth,"jp_scdr",dir,"jp_scrp", window.location.href,"jp_ctg","", "wa_uri", window.location.origin);
            RPT_RecordEvent();
        }
    };

    init = function () {
        $(window).on("scroll touchmove", function () {
            checkTags();
      });
    };

    init();
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
