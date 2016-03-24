var gulp = require("gulp");
var less = require("gulp-less");
var js = require("gulp-uglify");
var minifycss = require('gulp-minify-css');
 var concat = require('gulp-concat');
 var  rename = require('gulp-rename');
  var   del = require('del');

  gulp.task('minifycss', function() {
     gulp.src('dist/css/**.css')      //压缩的文件         
        .pipe(minifycss())  //执行压缩
        .pipe(gulp.dest('dist/css/')) ; //输出文件夹
});
gulp.task("less",function(){
	gulp.src("src/less/**.less")
	.pipe(less())
	.pipe(gulp.dest("dist/css/"));
})
gulp.task("js",function(){
	gulp.src("dist/js/**.js")
	.pipe(js())
	.pipe(gulp.dest("dist/js/"));
})
gulp.task("auto",function(){
	gulp.watch('src/less/**.less',['less']);
})

gulp.task('default',function() {
    gulp.start('minifycss', 'js');
})