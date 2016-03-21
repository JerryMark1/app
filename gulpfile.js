var gulp = require("gulp");
var less = require("gulp-less");
var js = require("gulp-uglify");
gulp.task("less",function(){
	gulp.src("src/less/**.less")
	.pipe(less())
	.pipe(gulp.dest("dist/css/"));
})
gulp.task("js",function(){
	gulp.src("src/js/**.js")
	.pipe(js())
	.pipe(gulp.dest("dist/js/"));
})
gulp.task("auto",function(){
	gulp.watch('src/less/**.less',['less']);
})