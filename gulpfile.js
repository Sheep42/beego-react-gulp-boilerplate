var gulp = require("gulp"),
	source = require("vinyl-source-stream"),
	buffer = require("vinyl-buffer"),
	watch = require("gulp-watch"),
	gutil = require("gulp-util"),
	browserify = require("browserify"),
	browserSync = require("browser-sync"),
	babelify = require("babelify");

/** Transform JSX => Babel => VanillaJS */
const transform = () => {
	return browserify("static/js/src/main.js")
	.transform(
		babelify.configure({
			presets: ["@babel/preset-env", "@babel/react"],
			plugins: ["@babel/plugin-proposal-class-properties"]
		})
	)
	.bundle()
	.on("error", gutil.log)
	.pipe(source("static/js/dist/main.js"))
	.pipe(buffer())
	.pipe(gulp.dest("./"));
};

/** BrowserSync */
const server = browserSync.create();

const reload = done => {
	server.reload();
	done();
};

const serve = done => {
	server.init({
		proxy: "localhost:8080",
		port: 3000,
	});
	done();
}

// Watch for changes
const watchJS = () => gulp.watch("static/js/src/**/*.js", gulp.series(transform, reload));
const watchGo = () => gulp.watch("**/*.go", gulp.series(reload));
const watchTpl = () => gulp.watch("**/*.tpl", gulp.series(reload));

gulp.task("default", gulp.series(transform, serve, gulp.parallel( watchJS, watchGo, watchTpl )));
