const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const twjit = require("@tailwindcss/jit");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		twjit,
		autoprefixer,
		!dev && cssnano({
			preset: "default",
		}),
	],
};


