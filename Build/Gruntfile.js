const sass = require('sass-embedded');
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: {
      root: '../',
      sources: 'Sources/',
      resources: '<%= paths.root %>Resources/',
      resourcesVendor: '<%= paths.resources %>Public/Vendor/'
    },

    // Compile SCSS
    sass: {
      options: {
        implementation: sass,
        outputStyle: 'expanded',
        precision: 8,
        sourceMap: false,
        silenceDeprecations: [
          'legacy-js-api'
        ]
      },
      fa5: {
        files: {
          '<%= paths.resourcesVendor %>fa5/css/fontawesome.css': '<%= paths.sources %>Scss/fa5/fontawesome.scss',
          '<%= paths.resourcesVendor %>fa5/css/brands.css': '<%= paths.sources %>Scss/fa5/brands.scss',
          '<%= paths.resourcesVendor %>fa5/css/regular.css': '<%= paths.sources %>Scss/fa5/regular.scss',
          '<%= paths.resourcesVendor %>fa5/css/solid.css': '<%= paths.sources %>Scss/fa5/solid.scss'
        }
      },
      fa6: {
        files: {
          '<%= paths.resourcesVendor %>fa6/css/fontawesome.css': '<%= paths.sources %>Scss/fa6/fontawesome.scss',
          '<%= paths.resourcesVendor %>fa6/css/brands.css': './node_modules/fa6/scss/brands.scss',
          '<%= paths.resourcesVendor %>fa6/css/regular.css': './node_modules/fa6/scss/regular.scss',
          '<%= paths.resourcesVendor %>fa6/css/solid.css': './node_modules/fa6/scss/solid.scss'
        }
      },
      fa7: {
        files: {
          '<%= paths.resourcesVendor %>fa7/css/fontawesome.css': '<%= paths.sources %>Scss/fa7/fontawesome.scss',
          '<%= paths.resourcesVendor %>fa7/css/brands.css': './node_modules/fa7/scss/brands.scss',
          '<%= paths.resourcesVendor %>fa7/css/regular.css': './node_modules/fa7/scss/regular.scss',
          '<%= paths.resourcesVendor %>fa7/css/solid.css': './node_modules/fa7/scss/solid.scss'
        }
      }
    },

    // Minify CSS
    cssmin: {
      options: {
        keepSpecialComments: '*',
        advanced: false
      },
      fa5: {
        expand: true,
        cwd: '<%= paths.resourcesVendor %>fa5/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= paths.resourcesVendor %>fa5/css/',
        ext: '.min.css'
      },
      fa6: {
        expand: true,
        cwd: '<%= paths.resourcesVendor %>fa6/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= paths.resourcesVendor %>fa6/css/',
        ext: '.min.css'
      },
      fa7: {
        expand: true,
        cwd: '<%= paths.resourcesVendor %>fa7/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= paths.resourcesVendor %>fa7/css/',
        ext: '.min.css'
      }
    },

    // Copy files
    copy: {
      fa5: {
        files: [
          {
            expand: true,
            cwd: './node_modules/fa5/metadata/',
            src: ['categories.yml', 'icons.yml'],
            dest: '<%= paths.resourcesVendor %>fa5/metadata/',
          },
          {
            expand: true,
            cwd: './node_modules/fa5/sprites/',
            src: ['*.svg'],
            dest: '<%= paths.resourcesVendor %>fa5/sprites/',
          },
          {
            expand: true,
            cwd: './node_modules/fa5/svgs/',
            src: ['**/*.svg'],
            dest: '<%= paths.resourcesVendor %>fa5/svgs/',
          },
          {
            expand: true,
            cwd: './node_modules/fa5/webfonts/',
            src: ['*.woff2', '*.woff', '*.ttf', '*.eot'],
            dest: '<%= paths.resourcesVendor %>fa5/webfonts/',
          },
          {
            expand: true,
            cwd: './node_modules/fa5/',
            src: ['LICENSE.txt'],
            dest: '<%= paths.resourcesVendor %>fa5/',
          }
        ]
      },
      fa6: {
        files: [
          {
            expand: true,
            cwd: './node_modules/fa6/metadata/',
            src: ['categories.yml', 'icons.yml'],
            dest: '<%= paths.resourcesVendor %>fa6/metadata/',
          },
          {
            expand: true,
            cwd: './node_modules/fa6/sprites/',
            src: ['*.svg'],
            dest: '<%= paths.resourcesVendor %>fa6/sprites/',
          },
          {
            expand: true,
            cwd: './node_modules/fa6/svgs/',
            src: ['**/*.svg'],
            dest: '<%= paths.resourcesVendor %>fa6/svgs/',
          },
          {
            expand: true,
            cwd: './node_modules/fa6/webfonts/',
            src: ['*.woff2', '*.ttf'],
            dest: '<%= paths.resourcesVendor %>fa6/webfonts/',
          },
          {
            expand: true,
            cwd: './node_modules/fa6/',
            src: ['LICENSE.txt'],
            dest: '<%= paths.resourcesVendor %>fa6/',
          }
        ]
      },
      fa7: {
        files: [
          {
            expand: true,
            cwd: './node_modules/fa7/metadata/',
            src: ['categories.yml', 'icons.yml'],
            dest: '<%= paths.resourcesVendor %>fa7/metadata/',
          },
          {
            expand: true,
            cwd: './node_modules/fa7/sprites/',
            src: ['*.svg'],
            dest: '<%= paths.resourcesVendor %>fa7/sprites/',
          },
          {
            expand: true,
            cwd: './node_modules/fa7/svgs/',
            src: ['**/*.svg'],
            dest: '<%= paths.resourcesVendor %>fa7/svgs/',
          },
          {
            expand: true,
            cwd: './node_modules/fa7/webfonts/',
            src: ['*.woff2'],
            dest: '<%= paths.resourcesVendor %>fa7/webfonts/',
          },
          {
            expand: true,
            cwd: './node_modules/fa7/',
            src: ['LICENSE.txt'],
            dest: '<%= paths.resourcesVendor %>fa7/',
          }
        ]
      },
    },


  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-sass');

  /**
   * Checks whether the current path (as an array) ends with an entry from `allowedPaths`.
   *
   * @param {string[]} curPath
   * @param {Set<string>} allowed
   * @returns {boolean}
   */
  function pathIsAllowed(curPath, allowed) {
    const curStr = curPath.join('.');
    for (const a of allowed) {
      if (curStr.endsWith(a)) return true;
    }
    return false;
  }

  /**
   * Recursive filtering based on whitelist paths (suffix-based).
   *
   * @param {Object|Array} src
   * @param {Set<string>} allowedPaths
   * @param {string[]} curPath
   * @returns {Object|Array|undefined}
   */
  function filterByPaths(src, allowedPaths, curPath = []) {
    // Primitive values (String, Number, Boolean, null)
    if (src === null || typeof src !== 'object') {
      // Only accept if the complete path (or its suffix) is permitted.
      return pathIsAllowed(curPath, allowedPaths) ? src : undefined;
    }

    // Arrays – treat each element separately
    if (Array.isArray(src)) {
      const filtered = src
        .map((item, idx) => filterByPaths(item, allowedPaths, curPath.concat([idx])))
        .filter(v => v !== undefined);
      return filtered.length ? filtered : undefined;
    }

    // Objects – Check by property
    const result = {};
    let keptSomething = false;

    Object.keys(src).forEach(key => {
      const nextPath = curPath.concat([key]);

      // If the path (or its suffix) is in the whitelist → accept the entire value
      if (pathIsAllowed(nextPath, allowedPaths)) {
        result[key] = src[key];
        keptSomething = true;
        return;
      }

      // Otherwise, recursively check whether a subpath is allowed.
      const sub = filterByPaths(src[key], allowedPaths, nextPath);
      if (sub !== undefined) {
        result[key] = sub;
        keptSomething = true;
      }
    });

    return keptSomething ? result : undefined;
  }

  function filterIconsMetadata(iconset) {
    const srcFile = grunt.config('paths.resourcesVendor') + iconset + '/metadata/icons.yml';
    const yamlObj = grunt.file.readYAML(srcFile);

    // Define whitelist of paths to retain
    const whitelist = new Set([
      'label',
      'styles',
      'aliases.names'
    ]);

    // Recursive filtering
    const filtered = filterByPaths(yamlObj, whitelist) || {};

    // Iterate through each icon (top-level key) and replace it if necessary.
    Object.values(filtered).forEach(icon => {
      if (icon && typeof icon === 'object' && icon.aliases && typeof icon.aliases === 'object') {
        // `aliases` is currently an object that only contains `names`.
        if (Array.isArray(icon.aliases.names)) {
          // Replace the entire object with the array
          icon.aliases = icon.aliases.names;
        } else {
          // If for some reason there is no `names` array, remove the empty `aliases` object so that no {} remains.
          delete icon.aliases;
        }
      }
    });

    const yaml = require('js-yaml');
    const yamlString = yaml.dump(filtered, {
      lineWidth: -1,   // no automatic line breaks
      noRefs: true,    // no YAML references
      sortKeys: false  // Keep original order
    });

    grunt.file.write(srcFile, yamlString);
    grunt.log.writeln(`Filtered YAML was written to ${srcFile}.`);
  }



  grunt.registerTask('filter-icons-metadata-fa5', 'Grunt task to minify icon metadata for fa5.', function () {
    filterIconsMetadata('fa5');
  });

  grunt.registerTask('filter-icons-metadata-fa6', 'Grunt task to minify icon metadata for fa6.', function () {
    filterIconsMetadata('fa6');
  });

  grunt.registerTask('filter-icons-metadata-fa7', 'Grunt task to minify icon metadata for fa7.', function () {
    filterIconsMetadata('fa7');
  });

  grunt.registerTask('fa5', ['sass:fa5', 'cssmin:fa5', 'copy:fa5', 'filter-icons-metadata-fa5']);
  grunt.registerTask('fa6', ['sass:fa6', 'cssmin:fa6', 'copy:fa6', 'filter-icons-metadata-fa6']);
  grunt.registerTask('fa7', ['sass:fa7', 'cssmin:fa7', 'copy:fa7', 'filter-icons-metadata-fa7']);

  grunt.registerTask('build', ['fa5', 'fa6', 'fa7']);
  grunt.registerTask('default', ['build']);
};
