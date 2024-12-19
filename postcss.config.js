module.exports = {
plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-google-font'),
    ...(process.env.JEKYLL_ENV == 'production'
        ? [require('cssnano')({ preset: 'default' })]
        : [])
    ]
}