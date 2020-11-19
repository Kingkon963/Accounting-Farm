module.exports = {
    async headers() {
      return [
        {
          source: '/api/*',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/json',
            },
          ],
        },
      ]
    },
  }