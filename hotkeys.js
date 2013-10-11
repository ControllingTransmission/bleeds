$(document).bind('keydown', 'b', function(e) { 
	for(var t=0; t<planets[0].trees.length; t++)
		planets[0].trees[t].makeBranch()
}); 

$(document).bind('keydown', 'n', function(e) { 
	for(var t=0; t<planets[0].trees.length; t++)
		planets[0].trees[t].step()
}); 	

$(document).bind('keydown', 'm', function(e) { 
	for(var p=0; p<planets.length; p++)
		planets[p].growTree()
}); 	



$(document).bind('keydown', 'p', function(e) { 
	new Planet().init()
}); 

$(document).bind('keydown', 'shift+p', function(e) { 
	planets[planets.length-1].close()
}); 	

$(document).bind('keydown', 'z', function(e) { 
	for(var p=0; p<planets.length; p++)
		for(var t=0; t<planets[p].trees.length; t++)
			planets[p].trees[t].setColor(new THREE.Color('#ffffff'))
}); 	

$(document).bind('keydown', 'x', function(e) { 
	for(var p=0; p<planets.length; p++)
		for(var t=0; t<planets[p].trees.length; t++)
			planets[p].trees[t].setColor(new THREE.Color('#ff00ff'))
}); 

$(document).bind('keydown', 'c', function(e) { 
	for(var p=0; p<planets.length; p++)
		for(var t=0; t<planets[p].trees.length; t++)
			planets[p].trees[t].setColor(new THREE.Color('#ffff00'))
});

$(document).bind('keydown', 'v', function(e) { 
	for(var p=0; p<planets.length; p++)
		for(var t=0; t<planets[p].trees.length; t++)
			planets[p].trees[t].setColor(new THREE.Color('#00ffff'))
}); 	

$(document).bind('keydown', 'o', function(e) { 
	planet.rotation.y += .1
}); 

$(document).bind('keydown', 'shift+o', function(e) { 
	for(var p=0; p<planets.length; p++)
		planets[p].rotation.y += .1
}); 