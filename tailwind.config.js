module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo', 'serif'],
      },
      colors: {
        background: '#f3ffff',
        black: '#333333',
        primary1: '#13E6CF',
        primary2: '#56C0FE',
        secondary1: '#F9BA00',
        secondary2: '#FF968D',

        /* Notion Color */
        'orange-n': '#d4680f',
        'yellow-n': '#daa104',
        'blue-n': '#0e638e',
        'red-n': '#db3636',
        'green-n': '#117061',
        'gray-n': '#83827f',
        'brown-n': '#593e33',
        'pink-n': '#a31967',
        'purple-n': '#5e389b',

        'orange-bg-n': '#f9e8d8cc',
        'blue-bg-n': '#d8e8efcc',
        'red-bg-n': '#fae0e0cc',
        'green-bg-n': '#d8eae7cc',
        'yellow-bg-n': '#faf1d6cc',
        'gray-bg-n': '#e8e9eacc',
        'pink-bg-n': '#f2dae8cc',
        'purple-bg-n': '#e7e0f0cc',
        'brown-bg-n': '#e6e1dfcc',
      },
    },
  },
  corePlugins: {
    preflight: false, // TailWindCSSのResetCSSとMantineの競合を防ぐために無効化
  },
  // important: '#__next', // TailwindCSSで優先的にスタイルを上書きできるようにする
  // https://zenn.dev/cti1650/articles/c90439cc01d139
  plugins: [],
  safelist: [],
};
