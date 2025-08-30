module.exports = {
  apps: [{
    name: 'bot-reminder-tugas',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    // Restart otomatis jika crash
    max_restarts: 10,
    min_uptime: '10s',
    // Restart setiap hari jam 07:55 (5 menit sebelum reminder)
    cron_restart: '55 7 * * *',
    // Restart jika memory usage tinggi
    max_memory_restart: '500M'
  }]
};
