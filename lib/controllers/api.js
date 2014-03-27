'use strict';

/**
 * Get awesome things
 */
exports.commands = function (req, res) {
    res.json([
        {
            name: 'cd',
            info: 'Change working directory.',
            synopsis: ''
        },
        {
            name: 'ls',
            info: 'List files of current directory',
            synopsis: ''
        },
        {
            name: 'unzip',
            info: 'Unzip file',
            synopsis: ''
        },
        {
            name: 'zip',
            info: 'Zip files',
            synopsis: ''
        }
    ]);
};