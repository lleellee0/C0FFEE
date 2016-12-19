var colorArray = ["red", "#FF0000", 
"crimson", "#DC143C", 
"firebrick", "#B22222", 
"maroon", "#800000", 
"darkred", "#8B0000", 
"brown", "#A52A2A", 
"sienna", "#A0522D", 
"saddlebrown", "#8B4513", 
"indianred", "#CD5C5C", 
"rosybrown", "#BC8F8F", 
"lightcoral", "#F08080", 
"salmon", "#FA8072", 
"darksalmon", "#E9967A", 
"coral", "#FF7F50", 
"tomato", "#FF6347", 
"sandybrown", "#F4A460", 
"lightsalmon", "#FFA07A", 
"peru", "#CD853F", 
"chocolate", "#D2691E", 
"orangered", "#FF4500", 
"orange", "#FFA500", 
"darkorange", "#FF8C00", 
"tan", "#D2B48C", 
"peachpuff", "#FFDAB9", 
"bisque", "#FFE4C4", 
"moccasin", "#FFE4B5", 
"navajowhite", "#FFDEAD", 
"wheat", "#F5DEB3", 
"burlywood", "#DEB887", 
"darkgoldenrod", "#B8860B", 
"goldenrod", "#DAA520", 
"gold", "#FFD700", 
"yellow", "#FFFF00", 
"lightgoldenrodyellow", "#FAFAD2", 
"palegoldenrod", "#EEE8AA", 
"khaki", "#F0E68C", 
"darkkhaki", "#BDB76B", 
"lawngreen", "#7CFC00", 
"greenyellow", "#ADFF2F", 
"chartreuse", "#7FFF00", 
"lime", "#00FF00", 
"limegreen", "#32CD32", 
"yellowgreen", "#9ACD32", 
"olive", "#808000", 
"olivedrab", "#6B8E23", 
"darkolivegreen", "#556B2F", 
"forestgreen", "#228B22", 
"darkgreen", "#006400", 
"green", "#008000", 
"seagreen", "#2E8B57", 
"mediumseagreen", "#3CB371", 
"darkseagreen", "#8FBC8F", 
"lightgreen", "#90EE90", 
"palegreen", "#98FB98", 
"springgreen", "#00FF7F", 
"mediumspringgreen", "#00FA9A", 
"teal", "#008080", 
"darkcyan", "#008B8B", 
"lightseagreen", "#20B2AA", 
"mediumaquamarine", "#66CDAA", 
"cadetblue", "#5F9EA0", 
"steelblue", "#4682B4", 
"aquamarine", "#7FFFD4", 
"powderblue", "#B0E0E6", 
"paleturquoise", "#AFEEEE", 
"lightblue", "#ADD8E6", 
"lightsteelblue", "#B0C4DE", 
"skyblue", "#87CEEB", 
"lightskyblue", "#87CEFA", 
"mediumturquoise", "#48D1CC", 
"turquoise", "#40E0D0", 
"darkturquoise", "#00CED1", 
"aqua", "#00FFFF", 
"cyan", "#00FFFF", 
"deepskyblue", "#00BFFF", 
"dodgerblue", "#1E90FF", 
"cornflowerblue", "#6495ED", 
"royalblue", "#4169E1", 
"blue", "#0000FF", 
"mediumblue", "#0000CD", 
"navy", "#000080", 
"darkblue", "#00008B", 
"midnightblue", "#191970", 
"darkslateblue", "#483D8B", 
"slateblue", "#6A5ACD", 
"mediumslateblue", "#7B68EE", 
"mediumpurple", "#9370DB", 
"darkorchid", "#9932CC", 
"darkviolet", "#9400D3", 
"blueviolet", "#8A2BE2", 
"mediumorchid", "#BA55D3", 
"plum", "#DDA0DD", 
"lavender", "#E6E6FA", 
"thistle", "#D8BFD8", 
"orchid", "#DA70D6", 
"violet", "#EE82EE", 
"indigo", "#4B0082", 
"darkmagenta", "#8B008B", 
"purple", "#800080", 
"mediumvioletred", "#C71585", 
"deeppink", "#FF1493", 
"fuchsia", "#FF00FF", 
"magenta", "#FF00FF", 
"hotpink", "#FF69B4", 
"palevioletred", "#DB7093", 
"lightpink", "#FFB6C1", 
"pink", "#FFC0CB", 
"mistyrose", "#FFE4E1", 
"blanchedalmond", "#FFEBCD", 
"lightyellow", "#FFFFE0", 
"cornsilk", "#FFF8DC", 
"antiquewhite", "#FAEBD7", 
"papayawhip", "#FFEFD5", 
"lemonchiffon", "#FFFACD", 
"beige", "#F5F5DC", 
"linen", "#FAF0E6", 
"oldlace", "#FDF5E6", 
"lightcyan", "#E0FFFF", 
"aliceblue", "#F0F8FF", 
"whitesmoke", "#F5F5F5", 
"lavenderblush", "#FFF0F5", 
"floralwhite", "#FFFAF0", 
"mintcream", "#F5FFFA", 
"ghostwhite", "#F8F8FF", 
"honeydew", "#F0FFF0", 
"seashell", "#FFF5EE", 
"ivory", "#FFFFF0", 
"azure", "#F0FFFF", 
"snow", "#FFFAFA", 
"white", "#FFFFFF", 
"gainsboro", "#DCDCDC", 
"lightgrey", "#D3D3D3", 
"silver", "#C0C0C0", 
"darkgray", "#A9A9A9", 
"lightslategray", "#778899", 
"slategray", "#708090", 
"gray", "#808080", 
"dimgray", "#696969", 
"darkslategray", "#2F4F4F", 
"black", "#000000"];
// colorArray.length는 280


var level = 1;


function hexToRgb(hex) {
    var regArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var rgbString = "rgb(";

    rgbString += parseInt(regArray[1], 16);
    rgbString += ", ";
    rgbString += parseInt(regArray[2], 16);
	rgbString += ", ";
    rgbString += parseInt(regArray[3], 16);
    rgbString += ")";

    return rgbString;
}


function startNormalGame() {

}

function progressNormalGame() {
	var timerSecond = calculateTimerSecond(level++);
	$(".progress-bar").css("animation-duration", timerSecond + "s");	// progress bar 애니메이션 시간 지정

	// 아래 코드는 아래 링크를 보고 해결
	// http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#14382251
	$(".progress-bar").css("display", "none").height();
	$(".progress-bar").css("display", "block");
}
function calculateTimerSecond(level) {
	return (3*level+3)/level + 3;
}


//$(".progress-bar").css("animation-duration", "10s");