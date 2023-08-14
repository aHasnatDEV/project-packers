import logo from '../assets/icon/logo.svg';

export const Logo = ({ textColor, isNav }) => {
    return <>
        {
            isNav ? <>
                <div className="lg:hidden">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hidden lg:block cursor-pointer">
                    <svg width="142" height="44" viewBox="0 0 142 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="72" height="44" rx="22" fill="#F2C852" />
                        <rect x="3" y="3" width="66" height="38" rx="19" fill="#F2C852" />
                        <path d="M21.728 32V14.12H28.4C29.616 14.12 30.688 14.344 31.616 14.792C32.56 15.224 33.296 15.864 33.824 16.712C34.352 17.544 34.616 18.56 34.616 19.76C34.616 20.944 34.344 21.96 33.8 22.808C33.272 23.64 32.544 24.28 31.616 24.728C30.688 25.176 29.616 25.4 28.4 25.4H24.992V32H21.728ZM24.992 22.52H28.448C29.04 22.52 29.552 22.408 29.984 22.184C30.416 21.944 30.752 21.616 30.992 21.2C31.232 20.784 31.352 20.304 31.352 19.76C31.352 19.2 31.232 18.72 30.992 18.32C30.752 17.904 30.416 17.584 29.984 17.36C29.552 17.12 29.04 17 28.448 17H24.992V22.52ZM37.2905 32V14.12H43.9625C45.1785 14.12 46.2505 14.344 47.1785 14.792C48.1225 15.224 48.8585 15.864 49.3865 16.712C49.9145 17.544 50.1785 18.56 50.1785 19.76C50.1785 20.944 49.9065 21.96 49.3625 22.808C48.8345 23.64 48.1065 24.28 47.1785 24.728C46.2505 25.176 45.1785 25.4 43.9625 25.4H40.5545V32H37.2905ZM40.5545 22.52H44.0105C44.6025 22.52 45.1145 22.408 45.5465 22.184C45.9785 21.944 46.3145 21.616 46.5545 21.2C46.7945 20.784 46.9145 20.304 46.9145 19.76C46.9145 19.2 46.7945 18.72 46.5545 18.32C46.3145 17.904 45.9785 17.584 45.5465 17.36C45.1145 17.12 44.6025 17 44.0105 17H40.5545V22.52Z" fill="#124E58" />
                        <rect x="3" y="3" width="66" height="38" rx="19" stroke="#124E58" strokeWidth="2" />
                        <path d="M81.152 21V9.08H85.6C86.4107 9.08 87.1253 9.22933 87.744 9.528C88.3733 9.816 88.864 10.2427 89.216 10.808C89.568 11.3627 89.744 12.04 89.744 12.84C89.744 13.6293 89.5627 14.3067 89.2 14.872C88.848 15.4267 88.3627 15.8533 87.744 16.152C87.1253 16.4507 86.4107 16.6 85.6 16.6H83.328V21H81.152ZM83.328 14.68H85.632C86.0267 14.68 86.368 14.6053 86.656 14.456C86.944 14.296 87.168 14.0773 87.328 13.8C87.488 13.5227 87.568 13.2027 87.568 12.84C87.568 12.4667 87.488 12.1467 87.328 11.88C87.168 11.6027 86.944 11.3893 86.656 11.24C86.368 11.08 86.0267 11 85.632 11H83.328V14.68ZM91.351 21V12.296H93.319V14.232L93.159 13.944C93.3617 13.2933 93.6763 12.84 94.103 12.584C94.5403 12.328 95.063 12.2 95.671 12.2H96.183V14.056H95.431C94.8337 14.056 94.3537 14.2427 93.991 14.616C93.6283 14.9787 93.447 15.4907 93.447 16.152V21H91.351ZM101.591 21.192C100.738 21.192 99.9594 20.9947 99.2554 20.6C98.562 20.2053 98.0074 19.6667 97.5914 18.984C97.186 18.3013 96.9834 17.5227 96.9834 16.648C96.9834 15.7733 97.186 14.9947 97.5914 14.312C98.0074 13.6293 98.562 13.0907 99.2554 12.696C99.9487 12.3013 100.727 12.104 101.591 12.104C102.445 12.104 103.218 12.3013 103.911 12.696C104.605 13.0907 105.154 13.6293 105.559 14.312C105.975 14.984 106.183 15.7627 106.183 16.648C106.183 17.5227 105.975 18.3013 105.559 18.984C105.143 19.6667 104.589 20.2053 103.895 20.6C103.202 20.9947 102.434 21.192 101.591 21.192ZM101.591 19.272C102.061 19.272 102.471 19.16 102.823 18.936C103.186 18.712 103.469 18.4027 103.671 18.008C103.885 17.6027 103.991 17.1493 103.991 16.648C103.991 16.136 103.885 15.688 103.671 15.304C103.469 14.9093 103.186 14.6 102.823 14.376C102.471 14.1413 102.061 14.024 101.591 14.024C101.111 14.024 100.69 14.1413 100.327 14.376C99.9647 14.6 99.6767 14.9093 99.4634 15.304C99.2607 15.688 99.1594 16.136 99.1594 16.648C99.1594 17.1493 99.2607 17.6027 99.4634 18.008C99.6767 18.4027 99.9647 18.712 100.327 18.936C100.69 19.16 101.111 19.272 101.591 19.272ZM106.573 24.536C106.434 24.536 106.29 24.5307 106.141 24.52C105.992 24.5093 105.869 24.4933 105.773 24.472V22.648C105.965 22.68 106.157 22.696 106.349 22.696C106.797 22.696 107.144 22.5893 107.389 22.376C107.645 22.1733 107.773 21.8587 107.773 21.432V12.296H109.869V21.432C109.869 22.0933 109.736 22.6533 109.469 23.112C109.202 23.5813 108.818 23.9333 108.317 24.168C107.826 24.4133 107.245 24.536 106.573 24.536ZM107.773 11.32V9.08H109.869V11.32H107.773ZM115.932 21.192C115.036 21.192 114.252 20.9893 113.58 20.584C112.908 20.1787 112.385 19.6293 112.012 18.936C111.639 18.2427 111.452 17.4747 111.452 16.632C111.452 15.7573 111.639 14.984 112.012 14.312C112.396 13.6293 112.913 13.0907 113.564 12.696C114.225 12.3013 114.961 12.104 115.772 12.104C116.455 12.104 117.052 12.216 117.564 12.44C118.087 12.664 118.529 12.9733 118.892 13.368C119.255 13.7627 119.532 14.216 119.724 14.728C119.916 15.2293 120.012 15.7733 120.012 16.36C120.012 16.5093 120.001 16.664 119.98 16.824C119.969 16.984 119.943 17.1227 119.9 17.24H113.18V15.64H118.716L117.724 16.392C117.82 15.9013 117.793 15.464 117.644 15.08C117.505 14.696 117.271 14.392 116.94 14.168C116.62 13.944 116.231 13.832 115.772 13.832C115.335 13.832 114.945 13.944 114.604 14.168C114.263 14.3813 114.001 14.7013 113.82 15.128C113.649 15.544 113.585 16.0507 113.628 16.648C113.585 17.1813 113.655 17.656 113.836 18.072C114.028 18.4773 114.305 18.792 114.668 19.016C115.041 19.24 115.468 19.352 115.948 19.352C116.428 19.352 116.833 19.2507 117.164 19.048C117.505 18.8453 117.772 18.5733 117.964 18.232L119.66 19.064C119.489 19.48 119.223 19.848 118.86 20.168C118.497 20.488 118.065 20.7387 117.564 20.92C117.073 21.1013 116.529 21.192 115.932 21.192ZM125.793 21.192C124.929 21.192 124.15 20.9947 123.457 20.6C122.774 20.1947 122.236 19.6507 121.841 18.968C121.446 18.2747 121.249 17.496 121.249 16.632C121.249 15.768 121.446 14.9947 121.841 14.312C122.236 13.6293 122.774 13.0907 123.457 12.696C124.15 12.3013 124.929 12.104 125.793 12.104C126.412 12.104 126.988 12.216 127.521 12.44C128.054 12.6533 128.513 12.952 128.897 13.336C129.292 13.7093 129.574 14.1573 129.745 14.68L127.905 15.48C127.745 15.0427 127.473 14.6907 127.089 14.424C126.716 14.1573 126.284 14.024 125.793 14.024C125.334 14.024 124.924 14.136 124.561 14.36C124.209 14.584 123.932 14.8933 123.729 15.288C123.526 15.6827 123.425 16.136 123.425 16.648C123.425 17.16 123.526 17.6133 123.729 18.008C123.932 18.4027 124.209 18.712 124.561 18.936C124.924 19.16 125.334 19.272 125.793 19.272C126.294 19.272 126.732 19.1387 127.105 18.872C127.478 18.6053 127.745 18.248 127.905 17.8L129.745 18.632C129.574 19.1227 129.297 19.5653 128.913 19.96C128.529 20.344 128.07 20.648 127.537 20.872C127.004 21.0853 126.422 21.192 125.793 21.192ZM135.303 21.096C134.322 21.096 133.559 20.8293 133.015 20.296C132.482 19.752 132.215 18.9893 132.215 18.008V14.168H130.711V12.296H130.871C131.298 12.296 131.629 12.184 131.863 11.96C132.098 11.736 132.215 11.4107 132.215 10.984V10.312H134.311V12.296H136.311V14.168H134.311V17.896C134.311 18.184 134.359 18.4293 134.455 18.632C134.562 18.8347 134.722 18.9893 134.935 19.096C135.159 19.2027 135.442 19.256 135.783 19.256C135.858 19.256 135.943 19.2507 136.039 19.24C136.146 19.2293 136.247 19.2187 136.343 19.208V21C136.194 21.0213 136.023 21.0427 135.831 21.064C135.639 21.0853 135.463 21.096 135.303 21.096ZM81.152 37V25.08H85.6C86.4107 25.08 87.1253 25.2293 87.744 25.528C88.3733 25.816 88.864 26.2427 89.216 26.808C89.568 27.3627 89.744 28.04 89.744 28.84C89.744 29.6293 89.5627 30.3067 89.2 30.872C88.848 31.4267 88.3627 31.8533 87.744 32.152C87.1253 32.4507 86.4107 32.6 85.6 32.6H83.328V37H81.152ZM83.328 30.68H85.632C86.0267 30.68 86.368 30.6053 86.656 30.456C86.944 30.296 87.168 30.0773 87.328 29.8C87.488 29.5227 87.568 29.2027 87.568 28.84C87.568 28.4667 87.488 28.1467 87.328 27.88C87.168 27.6027 86.944 27.3893 86.656 27.24C86.368 27.08 86.0267 27 85.632 27H83.328V30.68ZM93.4754 37.192C92.8674 37.192 92.3394 37.0907 91.8914 36.888C91.4434 36.6853 91.0967 36.3973 90.8514 36.024C90.606 35.64 90.4834 35.1973 90.4834 34.696C90.4834 34.216 90.59 33.7893 90.8034 33.416C91.0167 33.032 91.3474 32.712 91.7954 32.456C92.2434 32.2 92.8087 32.0187 93.4914 31.912L96.3394 31.448V33.048L93.8914 33.464C93.4754 33.5387 93.166 33.672 92.9634 33.864C92.7607 34.056 92.6594 34.3067 92.6594 34.616C92.6594 34.9147 92.7714 35.1547 92.9954 35.336C93.23 35.5067 93.518 35.592 93.8594 35.592C94.2967 35.592 94.6807 35.5013 95.0114 35.32C95.3527 35.128 95.614 34.8667 95.7954 34.536C95.9874 34.2053 96.0834 33.8427 96.0834 33.448V31.208C96.0834 30.8347 95.934 30.5253 95.6354 30.28C95.3474 30.024 94.9634 29.896 94.4834 29.896C94.0354 29.896 93.6354 30.0187 93.2834 30.264C92.942 30.4987 92.6914 30.8133 92.5314 31.208L90.8194 30.376C90.99 29.9173 91.2567 29.5227 91.6194 29.192C91.9927 28.8507 92.43 28.584 92.9314 28.392C93.4327 28.2 93.9767 28.104 94.5634 28.104C95.278 28.104 95.9074 28.2373 96.4514 28.504C96.9954 28.76 97.4167 29.1227 97.7154 29.592C98.0247 30.0507 98.1794 30.5893 98.1794 31.208V37H96.1954V35.512L96.6434 35.48C96.4194 35.8533 96.1527 36.168 95.8434 36.424C95.534 36.6693 95.182 36.8613 94.7874 37C94.3927 37.128 93.9554 37.192 93.4754 37.192ZM104.309 37.192C103.445 37.192 102.666 36.9947 101.973 36.6C101.29 36.1947 100.751 35.6507 100.357 34.968C99.962 34.2747 99.7646 33.496 99.7646 32.632C99.7646 31.768 99.962 30.9947 100.357 30.312C100.751 29.6293 101.29 29.0907 101.973 28.696C102.666 28.3013 103.445 28.104 104.309 28.104C104.927 28.104 105.503 28.216 106.037 28.44C106.57 28.6533 107.029 28.952 107.413 29.336C107.807 29.7093 108.09 30.1573 108.261 30.68L106.421 31.48C106.261 31.0427 105.989 30.6907 105.605 30.424C105.231 30.1573 104.799 30.024 104.309 30.024C103.85 30.024 103.439 30.136 103.077 30.36C102.725 30.584 102.447 30.8933 102.245 31.288C102.042 31.6827 101.941 32.136 101.941 32.648C101.941 33.16 102.042 33.6133 102.245 34.008C102.447 34.4027 102.725 34.712 103.077 34.936C103.439 35.16 103.85 35.272 104.309 35.272C104.81 35.272 105.247 35.1387 105.621 34.872C105.994 34.6053 106.261 34.248 106.421 33.8L108.261 34.632C108.09 35.1227 107.813 35.5653 107.429 35.96C107.045 36.344 106.586 36.648 106.053 36.872C105.519 37.0853 104.938 37.192 104.309 37.192ZM109.851 37V24.888H111.947V32.824L111.147 32.584L115.243 28.296H117.851L114.635 31.8L117.915 37H115.515L112.667 32.488L113.915 32.232L111.291 35.048L111.947 33.768V37H109.851ZM123.057 37.192C122.161 37.192 121.377 36.9893 120.705 36.584C120.033 36.1787 119.51 35.6293 119.137 34.936C118.764 34.2427 118.577 33.4747 118.577 32.632C118.577 31.7573 118.764 30.984 119.137 30.312C119.521 29.6293 120.038 29.0907 120.689 28.696C121.35 28.3013 122.086 28.104 122.897 28.104C123.58 28.104 124.177 28.216 124.689 28.44C125.212 28.664 125.654 28.9733 126.017 29.368C126.38 29.7627 126.657 30.216 126.849 30.728C127.041 31.2293 127.137 31.7733 127.137 32.36C127.137 32.5093 127.126 32.664 127.105 32.824C127.094 32.984 127.068 33.1227 127.025 33.24H120.305V31.64H125.841L124.849 32.392C124.945 31.9013 124.918 31.464 124.769 31.08C124.63 30.696 124.396 30.392 124.065 30.168C123.745 29.944 123.356 29.832 122.897 29.832C122.46 29.832 122.07 29.944 121.729 30.168C121.388 30.3813 121.126 30.7013 120.945 31.128C120.774 31.544 120.71 32.0507 120.753 32.648C120.71 33.1813 120.78 33.656 120.961 34.072C121.153 34.4773 121.43 34.792 121.793 35.016C122.166 35.24 122.593 35.352 123.073 35.352C123.553 35.352 123.958 35.2507 124.289 35.048C124.63 34.8453 124.897 34.5733 125.089 34.232L126.785 35.064C126.614 35.48 126.348 35.848 125.985 36.168C125.622 36.488 125.19 36.7387 124.689 36.92C124.198 37.1013 123.654 37.192 123.057 37.192ZM128.726 37V28.296H130.694V30.232L130.534 29.944C130.737 29.2933 131.051 28.84 131.478 28.584C131.915 28.328 132.438 28.2 133.046 28.2H133.558V30.056H132.806C132.209 30.056 131.729 30.2427 131.366 30.616C131.003 30.9787 130.822 31.4907 130.822 32.152V37H128.726ZM138.022 37.192C137.094 37.192 136.284 36.9733 135.59 36.536C134.908 36.088 134.438 35.4853 134.182 34.728L135.75 33.976C135.974 34.4667 136.284 34.8507 136.678 35.128C137.084 35.4053 137.532 35.544 138.022 35.544C138.406 35.544 138.71 35.4587 138.934 35.288C139.158 35.1173 139.27 34.8933 139.27 34.616C139.27 34.4453 139.222 34.3067 139.126 34.2C139.041 34.0827 138.918 33.9867 138.758 33.912C138.609 33.8267 138.444 33.7573 138.262 33.704L136.838 33.304C136.102 33.0907 135.542 32.7653 135.158 32.328C134.785 31.8907 134.598 31.3733 134.598 30.776C134.598 30.2427 134.732 29.7787 134.998 29.384C135.276 28.9787 135.654 28.664 136.134 28.44C136.625 28.216 137.185 28.104 137.814 28.104C138.636 28.104 139.361 28.3013 139.99 28.696C140.62 29.0907 141.068 29.6453 141.334 30.36L139.734 31.112C139.585 30.7173 139.334 30.4027 138.982 30.168C138.63 29.9333 138.236 29.816 137.798 29.816C137.446 29.816 137.169 29.896 136.966 30.056C136.764 30.216 136.662 30.424 136.662 30.68C136.662 30.84 136.705 30.9787 136.79 31.096C136.876 31.2133 136.993 31.3093 137.142 31.384C137.302 31.4587 137.484 31.528 137.686 31.592L139.078 32.008C139.793 32.2213 140.342 32.5413 140.726 32.968C141.121 33.3947 141.318 33.9173 141.318 34.536C141.318 35.0587 141.18 35.5227 140.902 35.928C140.625 36.3227 140.241 36.632 139.75 36.856C139.26 37.08 138.684 37.192 138.022 37.192Z" fill={textColor ? `${textColor}` : '#0D3D4B'} />
                    </svg>
                </div>
            </>
                : <>
                    <div className="cursor-pointer">
                        <svg width="142" height="44" viewBox="0 0 142 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="44" rx="22" fill="#F2C852" />
                            <rect x="3" y="3" width="66" height="38" rx="19" fill="#F2C852" />
                            <path d="M21.728 32V14.12H28.4C29.616 14.12 30.688 14.344 31.616 14.792C32.56 15.224 33.296 15.864 33.824 16.712C34.352 17.544 34.616 18.56 34.616 19.76C34.616 20.944 34.344 21.96 33.8 22.808C33.272 23.64 32.544 24.28 31.616 24.728C30.688 25.176 29.616 25.4 28.4 25.4H24.992V32H21.728ZM24.992 22.52H28.448C29.04 22.52 29.552 22.408 29.984 22.184C30.416 21.944 30.752 21.616 30.992 21.2C31.232 20.784 31.352 20.304 31.352 19.76C31.352 19.2 31.232 18.72 30.992 18.32C30.752 17.904 30.416 17.584 29.984 17.36C29.552 17.12 29.04 17 28.448 17H24.992V22.52ZM37.2905 32V14.12H43.9625C45.1785 14.12 46.2505 14.344 47.1785 14.792C48.1225 15.224 48.8585 15.864 49.3865 16.712C49.9145 17.544 50.1785 18.56 50.1785 19.76C50.1785 20.944 49.9065 21.96 49.3625 22.808C48.8345 23.64 48.1065 24.28 47.1785 24.728C46.2505 25.176 45.1785 25.4 43.9625 25.4H40.5545V32H37.2905ZM40.5545 22.52H44.0105C44.6025 22.52 45.1145 22.408 45.5465 22.184C45.9785 21.944 46.3145 21.616 46.5545 21.2C46.7945 20.784 46.9145 20.304 46.9145 19.76C46.9145 19.2 46.7945 18.72 46.5545 18.32C46.3145 17.904 45.9785 17.584 45.5465 17.36C45.1145 17.12 44.6025 17 44.0105 17H40.5545V22.52Z" fill="#124E58" />
                            <rect x="3" y="3" width="66" height="38" rx="19" stroke="#124E58" strokeWidth="2" />
                            <path d="M81.152 21V9.08H85.6C86.4107 9.08 87.1253 9.22933 87.744 9.528C88.3733 9.816 88.864 10.2427 89.216 10.808C89.568 11.3627 89.744 12.04 89.744 12.84C89.744 13.6293 89.5627 14.3067 89.2 14.872C88.848 15.4267 88.3627 15.8533 87.744 16.152C87.1253 16.4507 86.4107 16.6 85.6 16.6H83.328V21H81.152ZM83.328 14.68H85.632C86.0267 14.68 86.368 14.6053 86.656 14.456C86.944 14.296 87.168 14.0773 87.328 13.8C87.488 13.5227 87.568 13.2027 87.568 12.84C87.568 12.4667 87.488 12.1467 87.328 11.88C87.168 11.6027 86.944 11.3893 86.656 11.24C86.368 11.08 86.0267 11 85.632 11H83.328V14.68ZM91.351 21V12.296H93.319V14.232L93.159 13.944C93.3617 13.2933 93.6763 12.84 94.103 12.584C94.5403 12.328 95.063 12.2 95.671 12.2H96.183V14.056H95.431C94.8337 14.056 94.3537 14.2427 93.991 14.616C93.6283 14.9787 93.447 15.4907 93.447 16.152V21H91.351ZM101.591 21.192C100.738 21.192 99.9594 20.9947 99.2554 20.6C98.562 20.2053 98.0074 19.6667 97.5914 18.984C97.186 18.3013 96.9834 17.5227 96.9834 16.648C96.9834 15.7733 97.186 14.9947 97.5914 14.312C98.0074 13.6293 98.562 13.0907 99.2554 12.696C99.9487 12.3013 100.727 12.104 101.591 12.104C102.445 12.104 103.218 12.3013 103.911 12.696C104.605 13.0907 105.154 13.6293 105.559 14.312C105.975 14.984 106.183 15.7627 106.183 16.648C106.183 17.5227 105.975 18.3013 105.559 18.984C105.143 19.6667 104.589 20.2053 103.895 20.6C103.202 20.9947 102.434 21.192 101.591 21.192ZM101.591 19.272C102.061 19.272 102.471 19.16 102.823 18.936C103.186 18.712 103.469 18.4027 103.671 18.008C103.885 17.6027 103.991 17.1493 103.991 16.648C103.991 16.136 103.885 15.688 103.671 15.304C103.469 14.9093 103.186 14.6 102.823 14.376C102.471 14.1413 102.061 14.024 101.591 14.024C101.111 14.024 100.69 14.1413 100.327 14.376C99.9647 14.6 99.6767 14.9093 99.4634 15.304C99.2607 15.688 99.1594 16.136 99.1594 16.648C99.1594 17.1493 99.2607 17.6027 99.4634 18.008C99.6767 18.4027 99.9647 18.712 100.327 18.936C100.69 19.16 101.111 19.272 101.591 19.272ZM106.573 24.536C106.434 24.536 106.29 24.5307 106.141 24.52C105.992 24.5093 105.869 24.4933 105.773 24.472V22.648C105.965 22.68 106.157 22.696 106.349 22.696C106.797 22.696 107.144 22.5893 107.389 22.376C107.645 22.1733 107.773 21.8587 107.773 21.432V12.296H109.869V21.432C109.869 22.0933 109.736 22.6533 109.469 23.112C109.202 23.5813 108.818 23.9333 108.317 24.168C107.826 24.4133 107.245 24.536 106.573 24.536ZM107.773 11.32V9.08H109.869V11.32H107.773ZM115.932 21.192C115.036 21.192 114.252 20.9893 113.58 20.584C112.908 20.1787 112.385 19.6293 112.012 18.936C111.639 18.2427 111.452 17.4747 111.452 16.632C111.452 15.7573 111.639 14.984 112.012 14.312C112.396 13.6293 112.913 13.0907 113.564 12.696C114.225 12.3013 114.961 12.104 115.772 12.104C116.455 12.104 117.052 12.216 117.564 12.44C118.087 12.664 118.529 12.9733 118.892 13.368C119.255 13.7627 119.532 14.216 119.724 14.728C119.916 15.2293 120.012 15.7733 120.012 16.36C120.012 16.5093 120.001 16.664 119.98 16.824C119.969 16.984 119.943 17.1227 119.9 17.24H113.18V15.64H118.716L117.724 16.392C117.82 15.9013 117.793 15.464 117.644 15.08C117.505 14.696 117.271 14.392 116.94 14.168C116.62 13.944 116.231 13.832 115.772 13.832C115.335 13.832 114.945 13.944 114.604 14.168C114.263 14.3813 114.001 14.7013 113.82 15.128C113.649 15.544 113.585 16.0507 113.628 16.648C113.585 17.1813 113.655 17.656 113.836 18.072C114.028 18.4773 114.305 18.792 114.668 19.016C115.041 19.24 115.468 19.352 115.948 19.352C116.428 19.352 116.833 19.2507 117.164 19.048C117.505 18.8453 117.772 18.5733 117.964 18.232L119.66 19.064C119.489 19.48 119.223 19.848 118.86 20.168C118.497 20.488 118.065 20.7387 117.564 20.92C117.073 21.1013 116.529 21.192 115.932 21.192ZM125.793 21.192C124.929 21.192 124.15 20.9947 123.457 20.6C122.774 20.1947 122.236 19.6507 121.841 18.968C121.446 18.2747 121.249 17.496 121.249 16.632C121.249 15.768 121.446 14.9947 121.841 14.312C122.236 13.6293 122.774 13.0907 123.457 12.696C124.15 12.3013 124.929 12.104 125.793 12.104C126.412 12.104 126.988 12.216 127.521 12.44C128.054 12.6533 128.513 12.952 128.897 13.336C129.292 13.7093 129.574 14.1573 129.745 14.68L127.905 15.48C127.745 15.0427 127.473 14.6907 127.089 14.424C126.716 14.1573 126.284 14.024 125.793 14.024C125.334 14.024 124.924 14.136 124.561 14.36C124.209 14.584 123.932 14.8933 123.729 15.288C123.526 15.6827 123.425 16.136 123.425 16.648C123.425 17.16 123.526 17.6133 123.729 18.008C123.932 18.4027 124.209 18.712 124.561 18.936C124.924 19.16 125.334 19.272 125.793 19.272C126.294 19.272 126.732 19.1387 127.105 18.872C127.478 18.6053 127.745 18.248 127.905 17.8L129.745 18.632C129.574 19.1227 129.297 19.5653 128.913 19.96C128.529 20.344 128.07 20.648 127.537 20.872C127.004 21.0853 126.422 21.192 125.793 21.192ZM135.303 21.096C134.322 21.096 133.559 20.8293 133.015 20.296C132.482 19.752 132.215 18.9893 132.215 18.008V14.168H130.711V12.296H130.871C131.298 12.296 131.629 12.184 131.863 11.96C132.098 11.736 132.215 11.4107 132.215 10.984V10.312H134.311V12.296H136.311V14.168H134.311V17.896C134.311 18.184 134.359 18.4293 134.455 18.632C134.562 18.8347 134.722 18.9893 134.935 19.096C135.159 19.2027 135.442 19.256 135.783 19.256C135.858 19.256 135.943 19.2507 136.039 19.24C136.146 19.2293 136.247 19.2187 136.343 19.208V21C136.194 21.0213 136.023 21.0427 135.831 21.064C135.639 21.0853 135.463 21.096 135.303 21.096ZM81.152 37V25.08H85.6C86.4107 25.08 87.1253 25.2293 87.744 25.528C88.3733 25.816 88.864 26.2427 89.216 26.808C89.568 27.3627 89.744 28.04 89.744 28.84C89.744 29.6293 89.5627 30.3067 89.2 30.872C88.848 31.4267 88.3627 31.8533 87.744 32.152C87.1253 32.4507 86.4107 32.6 85.6 32.6H83.328V37H81.152ZM83.328 30.68H85.632C86.0267 30.68 86.368 30.6053 86.656 30.456C86.944 30.296 87.168 30.0773 87.328 29.8C87.488 29.5227 87.568 29.2027 87.568 28.84C87.568 28.4667 87.488 28.1467 87.328 27.88C87.168 27.6027 86.944 27.3893 86.656 27.24C86.368 27.08 86.0267 27 85.632 27H83.328V30.68ZM93.4754 37.192C92.8674 37.192 92.3394 37.0907 91.8914 36.888C91.4434 36.6853 91.0967 36.3973 90.8514 36.024C90.606 35.64 90.4834 35.1973 90.4834 34.696C90.4834 34.216 90.59 33.7893 90.8034 33.416C91.0167 33.032 91.3474 32.712 91.7954 32.456C92.2434 32.2 92.8087 32.0187 93.4914 31.912L96.3394 31.448V33.048L93.8914 33.464C93.4754 33.5387 93.166 33.672 92.9634 33.864C92.7607 34.056 92.6594 34.3067 92.6594 34.616C92.6594 34.9147 92.7714 35.1547 92.9954 35.336C93.23 35.5067 93.518 35.592 93.8594 35.592C94.2967 35.592 94.6807 35.5013 95.0114 35.32C95.3527 35.128 95.614 34.8667 95.7954 34.536C95.9874 34.2053 96.0834 33.8427 96.0834 33.448V31.208C96.0834 30.8347 95.934 30.5253 95.6354 30.28C95.3474 30.024 94.9634 29.896 94.4834 29.896C94.0354 29.896 93.6354 30.0187 93.2834 30.264C92.942 30.4987 92.6914 30.8133 92.5314 31.208L90.8194 30.376C90.99 29.9173 91.2567 29.5227 91.6194 29.192C91.9927 28.8507 92.43 28.584 92.9314 28.392C93.4327 28.2 93.9767 28.104 94.5634 28.104C95.278 28.104 95.9074 28.2373 96.4514 28.504C96.9954 28.76 97.4167 29.1227 97.7154 29.592C98.0247 30.0507 98.1794 30.5893 98.1794 31.208V37H96.1954V35.512L96.6434 35.48C96.4194 35.8533 96.1527 36.168 95.8434 36.424C95.534 36.6693 95.182 36.8613 94.7874 37C94.3927 37.128 93.9554 37.192 93.4754 37.192ZM104.309 37.192C103.445 37.192 102.666 36.9947 101.973 36.6C101.29 36.1947 100.751 35.6507 100.357 34.968C99.962 34.2747 99.7646 33.496 99.7646 32.632C99.7646 31.768 99.962 30.9947 100.357 30.312C100.751 29.6293 101.29 29.0907 101.973 28.696C102.666 28.3013 103.445 28.104 104.309 28.104C104.927 28.104 105.503 28.216 106.037 28.44C106.57 28.6533 107.029 28.952 107.413 29.336C107.807 29.7093 108.09 30.1573 108.261 30.68L106.421 31.48C106.261 31.0427 105.989 30.6907 105.605 30.424C105.231 30.1573 104.799 30.024 104.309 30.024C103.85 30.024 103.439 30.136 103.077 30.36C102.725 30.584 102.447 30.8933 102.245 31.288C102.042 31.6827 101.941 32.136 101.941 32.648C101.941 33.16 102.042 33.6133 102.245 34.008C102.447 34.4027 102.725 34.712 103.077 34.936C103.439 35.16 103.85 35.272 104.309 35.272C104.81 35.272 105.247 35.1387 105.621 34.872C105.994 34.6053 106.261 34.248 106.421 33.8L108.261 34.632C108.09 35.1227 107.813 35.5653 107.429 35.96C107.045 36.344 106.586 36.648 106.053 36.872C105.519 37.0853 104.938 37.192 104.309 37.192ZM109.851 37V24.888H111.947V32.824L111.147 32.584L115.243 28.296H117.851L114.635 31.8L117.915 37H115.515L112.667 32.488L113.915 32.232L111.291 35.048L111.947 33.768V37H109.851ZM123.057 37.192C122.161 37.192 121.377 36.9893 120.705 36.584C120.033 36.1787 119.51 35.6293 119.137 34.936C118.764 34.2427 118.577 33.4747 118.577 32.632C118.577 31.7573 118.764 30.984 119.137 30.312C119.521 29.6293 120.038 29.0907 120.689 28.696C121.35 28.3013 122.086 28.104 122.897 28.104C123.58 28.104 124.177 28.216 124.689 28.44C125.212 28.664 125.654 28.9733 126.017 29.368C126.38 29.7627 126.657 30.216 126.849 30.728C127.041 31.2293 127.137 31.7733 127.137 32.36C127.137 32.5093 127.126 32.664 127.105 32.824C127.094 32.984 127.068 33.1227 127.025 33.24H120.305V31.64H125.841L124.849 32.392C124.945 31.9013 124.918 31.464 124.769 31.08C124.63 30.696 124.396 30.392 124.065 30.168C123.745 29.944 123.356 29.832 122.897 29.832C122.46 29.832 122.07 29.944 121.729 30.168C121.388 30.3813 121.126 30.7013 120.945 31.128C120.774 31.544 120.71 32.0507 120.753 32.648C120.71 33.1813 120.78 33.656 120.961 34.072C121.153 34.4773 121.43 34.792 121.793 35.016C122.166 35.24 122.593 35.352 123.073 35.352C123.553 35.352 123.958 35.2507 124.289 35.048C124.63 34.8453 124.897 34.5733 125.089 34.232L126.785 35.064C126.614 35.48 126.348 35.848 125.985 36.168C125.622 36.488 125.19 36.7387 124.689 36.92C124.198 37.1013 123.654 37.192 123.057 37.192ZM128.726 37V28.296H130.694V30.232L130.534 29.944C130.737 29.2933 131.051 28.84 131.478 28.584C131.915 28.328 132.438 28.2 133.046 28.2H133.558V30.056H132.806C132.209 30.056 131.729 30.2427 131.366 30.616C131.003 30.9787 130.822 31.4907 130.822 32.152V37H128.726ZM138.022 37.192C137.094 37.192 136.284 36.9733 135.59 36.536C134.908 36.088 134.438 35.4853 134.182 34.728L135.75 33.976C135.974 34.4667 136.284 34.8507 136.678 35.128C137.084 35.4053 137.532 35.544 138.022 35.544C138.406 35.544 138.71 35.4587 138.934 35.288C139.158 35.1173 139.27 34.8933 139.27 34.616C139.27 34.4453 139.222 34.3067 139.126 34.2C139.041 34.0827 138.918 33.9867 138.758 33.912C138.609 33.8267 138.444 33.7573 138.262 33.704L136.838 33.304C136.102 33.0907 135.542 32.7653 135.158 32.328C134.785 31.8907 134.598 31.3733 134.598 30.776C134.598 30.2427 134.732 29.7787 134.998 29.384C135.276 28.9787 135.654 28.664 136.134 28.44C136.625 28.216 137.185 28.104 137.814 28.104C138.636 28.104 139.361 28.3013 139.99 28.696C140.62 29.0907 141.068 29.6453 141.334 30.36L139.734 31.112C139.585 30.7173 139.334 30.4027 138.982 30.168C138.63 29.9333 138.236 29.816 137.798 29.816C137.446 29.816 137.169 29.896 136.966 30.056C136.764 30.216 136.662 30.424 136.662 30.68C136.662 30.84 136.705 30.9787 136.79 31.096C136.876 31.2133 136.993 31.3093 137.142 31.384C137.302 31.4587 137.484 31.528 137.686 31.592L139.078 32.008C139.793 32.2213 140.342 32.5413 140.726 32.968C141.121 33.3947 141.318 33.9173 141.318 34.536C141.318 35.0587 141.18 35.5227 140.902 35.928C140.625 36.3227 140.241 36.632 139.75 36.856C139.26 37.08 138.684 37.192 138.022 37.192Z" fill={textColor ? `${textColor}` : '#0D3D4B'} />
                        </svg>
                    </div>
                </>
        }
    </>
}
