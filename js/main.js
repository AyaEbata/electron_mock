$(function() {
	$('.drag').draggable({
		revert: "valid"
	});

	$('#editor').droppable({
		accept : ".drag",
    	drop : function(event, ui){
            console.log("ドロップされました");
            var before = "/* 選択したキャラクターのソースが挿入される */";
            var after = "<strong>core.preload('chara1.png');<br>" 
    						+ "　core.onload = function() {<br>"
					        + "　　var bear = new Sprite(32, 32);<br>"
 						    + "　　bear.image = core.assets['chara1.png'];<br>"
					        + "　　core.rootScene.addChild(bear);<br>"
						    + "　};</strong>";
            var text = $('#editor').html().replace(before, after);
            $('#editor').html(text);
        }
	});
});
