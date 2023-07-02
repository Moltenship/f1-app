/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async()=> {
    return [
      {
        source: '/',
        destination: '/next',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
