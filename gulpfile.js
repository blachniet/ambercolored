var less = require('gulp-less'),
		path = require('path'),
		gulp = require('gulp');

gulp.task('less', function(){
	return gulp.src('./static/less/ac.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'static', 'less') ]
		}))
		.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function(){
	gulp.watch('./static/less/*.less', ['less']).on('change', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});
