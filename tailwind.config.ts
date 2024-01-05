import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                lg: '0px 0.77px 2.717px 0px rgba(0, 0, 0, 0.02), 0px 2.129px 7.513px 0px rgba(0, 0, 0, 0.03), 0px 5.125px 18.088px 0px rgba(0, 0, 0, 0.04), 0px 17px 60px 0px rgba(0, 0, 0, 0.06)'
            }
        },
    },
    plugins: [],
}
export default config
