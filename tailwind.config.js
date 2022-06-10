module.exports = {
  purge: ["./*.html"],
  mode: 'jit',
  theme: {
    extend: {
      screens:{
        'bp':{'max':'1200px'},
        'bp2':{'max':'1025px'}
      }
    }
  },
  plugins: [],
}