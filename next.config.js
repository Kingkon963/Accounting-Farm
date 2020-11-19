module.exports = {
    async headers() {
      return [
        {
          source: '/:path*',
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