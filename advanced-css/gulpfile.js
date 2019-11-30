const gulp = require('gulp'),
      sass = require('gulp-sass'),
      prefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      img = require('img-loader');

const path ={
    dist: {
        img : "dist/",
        self:"./dist/",
        html:"dist/",
        css:"dist/css/style.css"
    },
    src:{
        html:"src/**/*.html",
        scss:"src/**/*main.scss"
    },
    watch:{
        scss: "src/**/*.scss"
    }
};

const buildHTML = () =>(
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dist.html))
);


const buildSCSS = () =>(
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer ({
              cascade:false
        })
        .pipe(gulp.dest(path.dist.css))
));

const watcher=()=> {
    browserSync.init({
        server: {
            baseDir: path.dist.self
        }

    });
    gulp.watch(path.src.html,buildHTML).on('change',browserSync.reload);
    gulp.watch(path.src.scss,buildSCSS).on('change',browserSync.reload);

};
gulp.task('html' , buildHTML);
gulp.task('scss',buildSCSS);
gulp.task('default' , gulp.series(
    buildSCSS,
    buildHTML,
    watcher
));