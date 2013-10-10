$(document).bind('keydown', 'b', function(e) { 
	tree.branch(0, 0, 0, 250, tree.radians(90))
}); 

$(document).bind('keydown', 'n', function(e) { 
	tree.step()
}); 	

$(document).bind('keydown', 'z', function(e) { 
	tree.setColor(new THREE.Color('#ffffff'))
}); 	

$(document).bind('keydown', 'x', function(e) { 
	tree.setColor(new THREE.Color('#ff00ff'))
}); 

$(document).bind('keydown', 'c', function(e) { 
	tree.setColor(new THREE.Color('#ffff00'))
});

$(document).bind('keydown', 'v', function(e) { 
	tree.setColor(new THREE.Color('#00ffff'))
}); 	

