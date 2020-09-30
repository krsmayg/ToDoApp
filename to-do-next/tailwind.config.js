module.exports = {
    purge: ["./pages/**/*.js", "./src/components/**/*.js"],
    theme: {
        extend: {},
          minHeight: {
           '0': '0',
           '1/4': '25%',
           '1/2': '50%',
           '3/4': '75%',
           'full': '100%',
           '400': '400px',
           '600': '600px',
          },
     
      },
      variants: {
        borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        width: ['responsive', 'hover', 'focus'],
        transitionProperty: ['responsive', 'hover', 'focus'],
        transitionDuration: ['responsive', 'hover', 'focus'],
        scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      },
      plugins: [],
      future: {
        removeDeprecatedGapUtilities: true,
      },
}