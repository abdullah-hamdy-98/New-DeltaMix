module.exports = {
    apps: [
        {
            name: 'my-app',
            script: 'server.ts',
            interpreter: 'node',
            interpreter_args: '--loader ts-node/esm',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
        }
    ]
};
