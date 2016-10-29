var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// 创建task
// 目的：编辑sass
gulp.task('buildSass',function(){
	//查找sass文件
	gulp.src('./app/sass/*.scss')

		// 把文档流输入出到gulp-sass进行编辑
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(sass({outputStyle:'expanded'}))

		// 输出文件
//		.pipe(concat('style.js'))  //合并js文件
//      .pipe(gulp.dest('./app/js'))
//      .pipe(uglify()) //最小化一下合并后的文件
//      .pipe(rename('style.min.js'))//重命名压缩后的js文件
//		.pipe(gulp.dest('./app/css'))
		.pipe
		
		 
		
});

// 监听sass文件修改，自动编辑
gulp.task('jtSass',function(){
	// 只庶sass文件有修改，就自动执行buildSass任务
	gulp.watch('./app/sass/*.scss',['buildSass'])
});
