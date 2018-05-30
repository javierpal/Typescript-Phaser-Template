module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "**/*.d.ts", "!emit/**", "!node_modules/**"],
        watch: ["."],
        out: "bin/js/game.js",
        options: {
            allowJs: true
        }
      },
      build : {
        src: ["**/*.ts", "**/*.d.ts", "!emit/**", "!node_modules/**"],
        out: "bin/js/game.js",
        options: {
            allowJs: true
        }
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['bin/js/game.js', 'index.html','assets/**','phaser.min.js'], dest: 'build/'},
          {expand: true, cwd: 'nwjs/', src: ['**'], dest: 'build/'},
        ],
      },
    },
    clean: ['build/'],
    obfuscator: {
      options: {
        compact: true,
        stringArray: true,
        stringArrayEncoding: 'base64',
      },
      build: {
          options: {},
          files: {
              'bin/js/game.js': ['bin/js/game.js']
          }
      },
      dist: {
        options: {
          debugProtection: true
        },
        files: {
            'bin/js/game.js': ['bin/js/game.js']
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.registerTask("default", ["ts"]);
  grunt.registerTask("build",["ts:build", "clean", "obfuscator:build", "copy"]);
  grunt.registerTask("dist-obfuscated",["ts:build", "clean", "obfuscator:dist", "copy"]);
  grunt.registerTask("dist",["ts:build", "clean", "copy"]);
};