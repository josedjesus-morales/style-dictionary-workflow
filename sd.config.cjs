const coreAndSemanticTokens = ['color', 'space', 'grid'];
const componentTokens = ['button'];

const tokenFilter = (cat) => (token) => {
  const { category, type } = token.attributes;
  return ['global', 'semantic'].includes(category)
    ? type === cat
    : category === cat;
};

const generateFilesArr = (tokensCategories, ext, format) => {
  return tokensCategories.map((cat) => {
    return {
      filter: tokenFilter(cat),
      destination: `${cat}/src/${cat}.tokens.${ext}`,
      format,
    };
  });
};

module.exports = {
  source: ['sd-input/src/sd-input.json'],
  format: {
    /**
     * Add your custom formats here and
     * use them in the platforms below, e.g.
     *
     * exampleFormat: (opts) => {
     *   const { dictionary, file } = opts;
     *   let output = '';
     *   // do something with the dictionary, file
     *   // and output and return it
     *   return output;
     * }
     */
  },
  platforms: {
    css: {
      transformGroup: 'css',
      // prefix: 'tudn',
      buildPath: '',
      files: generateFilesArr(
        [...coreAndSemanticTokens, ...componentTokens],
        'css',
        'css/variables'
      ),
    },
    scss: {
      transformGroup: 'css',
      // prefix: 'tudn',
      buildPath: '',
      files: generateFilesArr(
        [...coreAndSemanticTokens, ...componentTokens],
        'scss',
        'scss/variables'
      ),
    },
    js: {
      transformGroup: 'js',
      // prefix: 'tudn',
      buildPath: '',
      files: generateFilesArr(
        [...coreAndSemanticTokens, ...componentTokens],
        'js',
        'javascript/es6'
      ),
    },
    'json-flat': {
      transformGroup: 'web',
      // prefix: 'tudn',
      buildPath: '',
      files: generateFilesArr(
        [...coreAndSemanticTokens, ...componentTokens],
        'json',
        'json/flat'
      ),
    },
  },
};
