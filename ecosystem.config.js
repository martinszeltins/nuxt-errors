module.exports = {
    apps: [
        {
            name: 'LiPost',
            port: '3001',
            exec_mode: 'cluster',
            instances: 3,
            script: './.output/server/index.mjs'
        }
    ]
}  
