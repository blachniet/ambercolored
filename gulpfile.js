var less = require('gulp-less'),
		path = require('path'),
		gulp = require('gulp'),
		imagemin = require('gulp-imagemin');

gulp.task('less', function(){
	return gulp.src('./src/less/ac.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'src', 'less') ]
		}))
		.pipe(gulp.dest('./static/css'));
});

gulp.task('imagemin', function(){
	return gulp.src('./src/img/**/*.jpg')
		.pipe(imagemin({
			progressive: true,
		}))
		.pipe(gulp.dest('./static/img'))
});

gulp.task('watch', function(){
	gulp.watch('./src/img/**/*.jpg', ['imagemin']);
	gulp.watch('./src/less/*.less', ['less']);
});

gulp.task('default', ['less', 'imagemin']);
