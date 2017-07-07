var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var autoprefixerOptions = {
    browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
    ]
};

gulp.task('watchCss', function(){
	gulp.watch('css/**/*.scss', ['sass'])
}); 

gulp.task('sass', function(){
	console.log('updated css');
	return gulp.src('css/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('css/'))
});

gulp.task('default', ['watchCss']);