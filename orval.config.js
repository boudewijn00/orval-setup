 module.exports = {
    'tapp-api': {
        output: {
            target: 'src/output.ts',
            mode: 'tags-split',
        },
        input: {
          target: '../../../tapp/tapp-open-api/dist/openapi.json',
        },
    },
 };