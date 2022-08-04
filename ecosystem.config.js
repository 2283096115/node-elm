module.exports = {
  apps : [{
    name: 'node-elm',
    script: 'index.js',
    instances: 1 ,
    autorestart: true,
    watch: false,
    max_memory_restart: '0.5G',
    output: 'logs/out.log',
    error: 'logs/error.log',
    log: 'logs/combined.outerr.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: 8001,
    }
  }],
  deploy: {
    production: {
      user: 'root',
      host: ['150.158.181.250'],
      port: '22',
      ref : 'origin/master',
      repo: 'git@github.com:2283096115/node-elm.git',
      path: '/data/code/node-elm',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
