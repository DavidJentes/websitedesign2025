module.exports = {
    mode: 'jit',
    content: [
        './_drafts/**/*.{md,html}',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.{md,html}',
        './*.{md,html}',
        './blog/index.html',
        './about/index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'baskerville': ['"Libre Baskerville"'],
                'bevan': ['Bevan'],
                'mplus2': ['"M PLUS 2"'],
            },
            colors: {
                'livingstone': {
                    100: '#8d9bac',
                    200: '#7f9cbb',
                    300: '#6e9ecb',
                    400: '#579fdb',
                    500: '#2da1eb',
                },
            },
        },
    },
    plugins: []
}