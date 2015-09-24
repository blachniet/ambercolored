var less = require('gulp-less'),
		path = require('path'),
		gulp = require('gulp');

gulp.task('less', function(){
	return gulp.src('./src/less/ac.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'src', 'less') ]
		}))
		.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function(){
	gulp.watch('./src/less/*.less', ['less']).on('change', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});
