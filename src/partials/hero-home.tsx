import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

function HeroHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Logo */}
            <h1 className="flex justify-center h1 mb-2" data-aos="fade-up" aria-label="Open Feature">
              <svg
                className="dark:fill-white fill-gray-700"
                width="522"
                height="77"
                viewBox="0 0 522 77"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53_2)">
                  <path d="M62.0447 0H29.2289C21.4753 0 14.0421 3.0238 8.56263 8.42999C3.08316 13.8209 0 21.1361 0 28.7719C0 36.4078 3.08316 43.7229 8.56263 49.1138C14.0421 54.5048 21.4753 57.5438 29.2289 57.5438H62.0447C69.7984 57.5438 77.2316 54.52 82.7111 49.1138C88.1905 43.7229 91.2737 36.4078 91.2737 28.7719C91.2737 21.1361 88.1905 13.8209 82.7111 8.42999C77.2316 3.03907 69.7984 0 62.0447 0ZM62.1668 49.9538C57.9084 49.9538 53.7416 48.7168 50.2158 46.3802C46.6747 44.0589 43.9121 40.7449 42.2942 36.8659C40.6611 32.9869 40.2337 28.7261 41.0732 24.618C41.8974 20.5099 43.9579 16.7378 46.9647 13.7751C49.9716 10.8124 53.8026 8.79651 57.9847 7.97184C62.1669 7.14716 66.4863 7.57477 70.4242 9.1783C74.3621 10.7818 77.72 13.5002 80.0858 16.9822C82.4516 20.4641 83.7184 24.5569 83.7184 28.7566C83.7184 31.5514 83.169 34.3003 82.0853 36.8812C81.0016 39.4621 79.4142 41.7987 77.4147 43.7687C75.4153 45.7388 73.0342 47.2965 70.409 48.3655C67.799 49.4346 64.9905 49.9691 62.1516 49.9691H62.1974L62.1668 49.9538ZM114.199 15.0274C117.236 13.3169 120.686 12.4617 124.181 12.5381C127.905 12.4923 131.584 13.4544 134.789 15.3023C137.979 17.1501 140.574 19.838 142.283 23.0756C144.161 26.6644 145.107 30.6656 145.015 34.7126C145.092 38.7749 144.161 42.7914 142.283 46.3955C140.604 49.6942 138.009 52.4431 134.804 54.3673C131.599 56.2916 127.921 57.2689 124.181 57.2079C120.716 57.2842 117.297 56.4137 114.291 54.7186C111.619 53.2219 109.361 51.0992 107.758 48.5183V77H100.462V13.2559H107.758V21.2277C109.315 18.6315 111.543 16.4935 114.214 15.0274H114.199ZM135.552 26.1757C134.316 23.8697 132.438 21.9455 130.134 20.6474C127.844 19.3798 125.265 18.7384 122.639 18.7537C120.045 18.7384 117.481 19.4104 115.237 20.6932C112.932 22.0218 111.039 23.9613 109.788 26.2826C108.429 28.9399 107.727 31.8568 107.727 34.8348C107.727 37.8128 108.429 40.7297 109.788 43.387C111.039 45.7083 112.932 47.6478 115.237 48.9764C117.481 50.2592 120.045 50.9312 122.639 50.9159C125.265 50.9312 127.844 50.2745 130.134 48.9764C132.438 47.6478 134.316 45.7083 135.552 43.387C136.941 40.7144 137.628 37.7517 137.552 34.7584C137.628 31.7804 136.941 28.833 135.552 26.191V26.1757ZM191.308 37.5379H156.218C156.218 39.3552 156.6 41.1573 157.317 42.8372C158.035 44.5171 159.103 46.029 160.431 47.2965C161.759 48.5641 163.331 49.5567 165.071 50.2134C166.796 50.8701 168.643 51.1755 170.489 51.1144C173.283 51.2061 176.045 50.4578 178.381 48.9459C180.456 47.5409 182.013 45.5097 182.822 43.1426H190.667C189.553 47.2202 187.065 50.7937 183.616 53.283C179.8 55.9708 175.175 57.3453 170.474 57.1926C166.552 57.2537 162.675 56.2763 159.256 54.3826C155.974 52.55 153.288 49.8316 151.517 46.5482C149.594 42.9135 148.633 38.8513 148.724 34.7584C148.633 30.6809 149.564 26.6339 151.441 22.9992C153.166 19.7311 155.822 17.028 159.088 15.2259C162.568 13.3628 166.475 12.4312 170.428 12.5075C174.29 12.4312 178.106 13.3628 181.479 15.1954C184.608 16.9058 187.187 19.4714 188.897 22.5716C190.667 25.8397 191.568 29.4897 191.507 33.1854C191.507 34.6515 191.461 36.1176 191.308 37.5684V37.5379ZM182.181 24.6486C180.975 22.709 179.251 21.1513 177.175 20.1434C174.992 19.1049 172.596 18.5704 170.169 18.601C166.704 18.5093 163.331 19.7311 160.767 22.0218C158.081 24.5417 156.478 27.9931 156.325 31.643H184.043C184.104 29.1843 183.463 26.756 182.196 24.6333L182.181 24.6486ZM232.412 17.2265C235.724 20.4183 237.373 24.9998 237.373 30.9863V56.4595H230.168V32.0095C230.168 27.7029 229.085 24.4042 226.887 22.1134C225.727 20.9528 224.323 20.0518 222.766 19.4562C221.224 18.8606 219.561 18.601 217.912 18.6926C216.218 18.6162 214.524 18.8911 212.936 19.502C211.349 20.1129 209.929 21.0444 208.739 22.2509C206.419 24.618 205.289 28.0694 205.32 32.5898V56.5206H198.024V13.2559H205.32V19.4104C206.77 17.196 208.8 15.4244 211.212 14.2791C213.776 13.0573 216.584 12.4312 219.423 12.4617C221.804 12.3548 224.17 12.7366 226.398 13.546C228.627 14.3707 230.672 15.6077 232.397 17.2265H232.412ZM277.744 1.49663V7.3457H253.445V25.9008H273.119V31.7499H253.445V56.5054H246.149V1.49663H277.744ZM323.243 37.5379H288.138C288.138 39.3552 288.519 41.1573 289.237 42.8372C289.969 44.5171 291.023 46.029 292.351 47.2965C293.678 48.5641 295.251 49.5567 296.991 50.2134C298.715 50.8701 300.562 51.1755 302.409 51.1144C305.202 51.2061 307.965 50.4578 310.3 48.9459C312.376 47.5409 313.933 45.5097 314.742 43.1426H322.587C321.473 47.2202 319 50.7937 315.535 53.283C311.719 55.9708 307.095 57.3453 302.409 57.1926C298.502 57.2537 294.64 56.3068 291.236 54.4284C287.955 52.5958 285.268 49.8774 283.513 46.594C281.605 42.9593 280.644 38.8971 280.751 34.8042C280.659 30.7267 281.59 26.6797 283.467 23.045C285.192 19.7769 287.848 17.0738 291.114 15.2717C294.594 13.4086 298.502 12.477 302.455 12.5534C306.316 12.477 310.132 13.4086 313.505 15.2412C316.634 16.9669 319.214 19.5173 320.923 22.6174C322.678 25.8856 323.579 29.5355 323.518 33.2313C323.518 34.6821 323.411 36.1329 323.243 37.5684V37.5379ZM314.101 24.6486C312.895 22.7243 311.17 21.1819 309.094 20.1892C306.912 19.1507 304.515 18.6162 302.088 18.6468C298.624 18.5551 295.251 19.7769 292.686 22.0676C290 24.5875 288.397 28.0389 288.229 31.6888H316.008C316.069 29.2148 315.398 26.7713 314.116 24.6333L314.101 24.6486ZM329.959 23.0756C331.668 19.8532 334.263 17.1501 337.453 15.3023C340.674 13.4391 344.352 12.4923 348.076 12.5381C351.572 12.4617 355.036 13.3017 358.089 14.9816C360.73 16.4171 362.927 18.5551 364.423 21.1361V13.2559H371.795V56.4748H364.423V48.4266C362.882 51.0534 360.653 53.2219 357.982 54.7033C354.945 56.3985 351.495 57.2537 348 57.1926C344.291 57.2384 340.643 56.261 337.453 54.3826C334.278 52.4431 331.699 49.6942 330.005 46.4108C328.143 42.8066 327.212 38.7902 327.288 34.7432C327.181 30.6962 328.112 26.695 329.974 23.0908L329.959 23.0756ZM362.363 26.2674C361.126 23.9461 359.249 22.0218 356.959 20.7085C354.67 19.4562 352.106 18.7995 349.496 18.7995C346.886 18.7995 344.306 19.4562 342.032 20.7085C339.743 22.0065 337.881 23.9308 336.66 26.2368C335.271 28.8635 334.584 31.7957 334.66 34.7584C334.584 37.7517 335.271 40.7297 336.66 43.387C337.881 45.7083 339.743 47.6478 342.032 48.9764C344.291 50.2745 346.855 50.9465 349.481 50.9159C352.106 50.9312 354.701 50.2745 356.975 48.9764C359.28 47.6478 361.157 45.7083 362.378 43.387C363.752 40.7449 364.454 37.7975 364.377 34.8348C364.469 31.8568 363.797 28.9094 362.424 26.2674H362.378H362.363ZM389.882 19.166V44.6392C389.806 45.4334 389.882 46.2428 390.111 47.0064C390.34 47.7699 390.737 48.4877 391.241 49.0986C392.141 49.9691 393.728 50.3967 395.972 50.3967H401.33V56.4748H394.766C390.706 56.4748 387.654 55.5585 385.624 53.7106C383.594 51.8628 382.586 48.839 382.586 44.5934V19.166H376.908V13.2559H382.571V2.35184H389.867V13.2406H401.33V19.1507H389.882V19.166ZM445.959 13.2559V56.4748H438.663V50.0912C437.259 52.3209 435.259 54.1077 432.878 55.2531C430.329 56.5054 427.521 57.1315 424.667 57.1162C421.446 57.1773 418.272 56.4595 415.402 55.024C412.655 53.619 410.411 51.4351 408.946 48.7626C407.297 45.6166 406.504 42.1194 406.626 38.5916V13.2559H413.799V37.6295C413.799 41.8903 414.898 45.1585 417.081 47.4492C418.241 48.6099 419.645 49.5109 421.187 50.1065C422.728 50.7021 424.392 50.9617 426.041 50.8701C427.75 50.9617 429.46 50.6868 431.062 50.076C432.665 49.4651 434.1 48.5182 435.305 47.3118C437.534 44.9599 438.663 41.5085 438.663 36.9728V13.2559H445.928H445.959ZM467.953 14.4929C470.609 13.0573 473.616 12.3395 476.638 12.4464V19.8532H474.715C466.534 19.8532 462.443 24.2209 462.443 32.9411V56.4443H455.147V13.2559H462.397V20.2808C463.618 17.8679 465.542 15.852 467.923 14.5081L467.953 14.4929ZM521.741 37.5379H486.651C486.651 39.3552 487.017 41.1573 487.75 42.8372C488.467 44.5171 489.535 46.029 490.863 47.2965C492.191 48.5641 493.763 49.5567 495.503 50.2134C497.228 50.8701 499.075 51.1755 500.922 51.1144C503.715 51.2213 506.477 50.4578 508.813 48.9459C510.904 47.5409 512.461 45.5097 513.254 43.1426H521.115C520.001 47.2049 517.513 50.7785 514.063 53.283C510.232 55.9708 505.623 57.3453 500.922 57.1926C497.014 57.2537 493.168 56.3068 489.749 54.4284C486.467 52.5958 483.781 49.8774 482.026 46.594C480.087 42.9593 479.126 38.8971 479.217 34.8042C479.126 30.7267 480.072 26.6797 481.95 23.045C483.674 19.7769 486.33 17.0738 489.596 15.2717C493.061 13.4086 496.968 12.477 500.922 12.5534C504.783 12.477 508.599 13.4086 511.987 15.2412C515.116 16.9516 517.681 19.5173 519.39 22.6174C521.161 25.8856 522.061 29.5355 522 33.2313C522 34.6821 521.908 36.1329 521.756 37.5684L521.741 37.5379ZM512.613 24.6486C511.407 22.709 509.637 21.1666 507.561 20.1892C505.394 19.1507 503.028 18.6315 500.616 18.6468C497.152 18.5551 493.778 19.7769 491.199 22.0676C488.513 24.5875 486.91 28.0389 486.757 31.6888H514.536C514.582 29.2148 513.926 26.7713 512.628 24.6333L512.613 24.6486Z" />
                </g>
              </svg>
            </h1>
            <p
              className="text-2xl text-semibold dark:fill-white fill-gray-700 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {siteConfig.tagline}
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  to="/docs/reference/intro"
                >
                  Learn more
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link
                  className="btn text-white hover:text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  // TODO change once the Five Minutes to Feature Flags tutorial is ready
                  to="/docs/category/getting-started"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;