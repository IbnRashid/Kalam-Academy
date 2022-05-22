import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

const MainHeroImg = () => {
	const { width } = useWindowDimensions();

	if (width <= 630)
		return (
			<svg
				width="375"
				height="667"
				viewBox="0 0 375 667"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="375" height="667" fill="#E5E5E5" />
				<g clip-path="url(#clip0_0_1)">
					<path
						d="M374.82 296.645V0H-110.354C-21.495 27.8878 -8.05406 45.9115 14.672 168.021C56.4758 392.648 303.463 332.768 374.82 296.645Z"
						fill="url(#paint0_linear_0_1)"
					/>
					<path
						d="M147.254 372.381C231.704 372.381 300.164 303.921 300.164 219.471C300.164 135.021 231.704 66.5608 147.254 66.5608C62.8045 66.5608 -5.65601 135.021 -5.65601 219.471C-5.65601 303.921 62.8045 372.381 147.254 372.381Z"
						fill="url(#paint1_radial_0_1)"
					/>
					<path
						d="M281.275 218.751C281.275 292.558 220.802 352.413 146.175 352.413C71.5472 352.413 11.074 292.558 11.074 218.751C11.074 144.945 71.5472 85.0898 146.175 85.0898C220.802 85.0898 281.275 144.945 281.275 218.751Z"
						fill="#805EF3"
						stroke="url(#paint2_linear_0_1)"
						stroke-width="7"
					/>
					<path
						d="M242.598 224.328C242.598 277.478 199.351 320.571 145.995 320.571C92.6382 320.571 49.3916 277.478 49.3916 224.328C49.3916 171.178 92.6382 128.084 145.995 128.084C199.351 128.084 242.598 171.178 242.598 224.328Z"
						fill="url(#paint3_linear_0_1)"
						stroke="#9677B6"
						stroke-width="6"
					/>
					<g filter="url(#filter0_d_0_1)">
						<path
							d="M196.905 49.8306C203.057 45.5808 205.828 41.5648 209.138 31.3015C213.095 41.2644 215.599 45.8895 221.37 49.8306C215.139 54.6025 212.494 58.9854 209.138 69.2592C207.191 60.3832 204.845 55.9808 196.905 49.8306Z"
							fill="#796DF3"
						/>
					</g>
					<path
						d="M215.254 332.085C232.164 320.751 253.032 309.598 272.46 264.625C253.748 242.784 222.986 223.707 194.566 219.291C166.146 214.875 136.705 218.059 112.25 233.193C87.7952 248.327 69.5576 271.707 60.8291 299.111L175.677 335.683L215.254 332.085Z"
						fill="url(#paint4_linear_0_1)"
					/>
					<path
						d="M147.254 271.82C176.562 271.82 200.323 248.06 200.323 218.751C200.323 189.442 176.562 165.682 147.254 165.682C117.945 165.682 94.1851 189.442 94.1851 218.751C94.1851 248.06 117.945 271.82 147.254 271.82Z"
						fill="url(#paint5_radial_0_1)"
						stroke="#A28AB9"
						stroke-width="5"
					/>
					<g filter="url(#filter1_dd_0_1)">
						<path
							d="M323.55 140.317C369.254 140.317 406.301 103.268 406.301 57.566C406.301 11.8637 369.254 -25.1853 323.55 -25.1853C277.846 -25.1853 240.799 11.8637 240.799 57.566C240.799 103.268 277.846 140.317 323.55 140.317Z"
							fill="url(#paint6_radial_0_1)"
						/>
					</g>
					<g filter="url(#filter2_d_0_1)">
						<path
							d="M303.434 80.0053C318.013 90.3284 336.79 96.5779 362.083 79.1976C350.908 104.867 327.598 115.703 299.883 108.396C255.266 92.6328 253.492 33.4724 295.846 14.3652C275.173 41.2407 289.316 70.0093 303.434 80.0053Z"
							fill="url(#paint7_linear_0_1)"
						/>
					</g>
					<g filter="url(#filter3_d_0_1)">
						<path
							d="M313.527 197.164C323.086 191.016 326.781 184.59 331.415 169.46C336.603 184.848 340.32 191.45 349.326 197.164C339.6 204.162 335.6 209.96 331.876 224.508C327.576 210.226 323.385 204.44 313.527 197.164Z"
							fill="#796DF3"
						/>
					</g>
					<path
						d="M274.799 202.201C274.799 255.35 231.552 298.444 178.196 298.444C124.839 298.444 81.5925 255.35 81.5925 202.201C81.5925 149.052 124.839 105.958 178.196 105.958C231.552 105.958 274.799 149.052 274.799 202.201Z"
						stroke="url(#paint8_linear_0_1)"
						stroke-width="7"
					/>
					<path
						d="M269.942 202.201C269.942 252.871 228.865 293.947 178.196 293.947C127.527 293.947 86.4497 252.871 86.4497 202.201C86.4497 151.531 127.527 110.455 178.196 110.455C228.865 110.455 269.942 151.531 269.942 202.201ZM114.312 202.201C114.312 237.484 142.911 266.086 178.196 266.086C213.48 266.086 242.08 237.484 242.08 202.201C242.08 166.918 213.48 138.316 178.196 138.316C142.911 138.316 114.312 166.918 114.312 202.201Z"
						fill="url(#paint9_linear_0_1)"
						stroke="url(#paint10_linear_0_1)"
						stroke-width="9"
					/>
					<path
						d="M164.344 224.508C164.344 233.648 156.932 241.058 147.794 241.058C138.651 241.058 131.243 233.648 131.243 224.508C131.243 215.367 138.651 207.958 147.794 207.958C156.932 207.958 164.344 215.367 164.344 224.508ZM139.389 224.508C139.389 229.149 143.152 232.911 147.794 232.911C152.435 232.911 156.198 229.149 156.198 224.508C156.198 219.867 152.435 216.104 147.794 216.104C143.152 216.104 139.389 219.867 139.389 224.508Z"
						fill="url(#paint11_linear_0_1)"
					/>
					<path
						d="M147.074 223.788L75.2964 221.45L95.0847 227.386L147.074 225.407V223.788Z"
						fill="#FEF8B9"
					/>
					<path
						d="M95.8043 216.772L75.2964 221.45L147.074 223.788L146.894 222.709L95.8043 216.772Z"
						fill="#FF8A9A"
					/>
					<path
						d="M228.746 163.524L243.497 150.032L226.227 161.005C217.733 166.246 213.106 169.759 205 176.836L147.074 223.788L147.973 225.048L208.238 180.434C217.927 173.714 221.899 170.049 228.746 163.524Z"
						fill="url(#paint12_linear_0_1)"
					/>
					<path
						d="M113.973 112.794L108.936 107.217L108.577 114.592L144.376 220.37L146.894 219.471L113.973 112.794Z"
						fill="url(#paint13_linear_0_1)"
					/>
					<path
						d="M109.836 130.963L106.958 125.566L112.354 128.265L111.095 121.608L115.772 126.645L116.312 120.529L118.831 126.106L121.709 120.889L122.428 127.005L126.926 123.407L125.487 128.624L131.063 127.005L127.465 131.682L133.582 132.042L128.905 134.921L135.021 137.439L128.545 138.878L133.582 142.656L126.926 141.936L130.524 147.693L124.767 144.635L126.206 150.571L122.069 146.614L120.989 152.73L118.291 147.333L115.053 152.011L114.513 146.614L110.376 149.852L111.455 144.635L105.878 146.254L109.476 141.397H103.36L108.217 137.799L102.46 135.64L108.936 134.561L103.54 130.243L109.836 130.963Z"
						fill="#FFF7B1"
					/>
					<path
						d="M147.794 230.624C151.172 230.624 153.91 227.886 153.91 224.508C153.91 221.13 151.172 218.391 147.794 218.391C144.415 218.391 141.677 221.13 141.677 224.508C141.677 227.886 144.415 230.624 147.794 230.624Z"
						fill="url(#paint14_radial_0_1)"
					/>
					<path
						d="M118.651 142.116C121.63 142.116 124.048 139.7 124.048 136.72C124.048 133.739 121.63 131.323 118.651 131.323C115.672 131.323 113.254 133.739 113.254 136.72C113.254 139.7 115.672 142.116 118.651 142.116Z"
						fill="#FEFFF6"
					/>
					<g filter="url(#filter4_d_0_1)">
						<path
							d="M-22.9259 35.0216C-32.8043 23.4366 -38.9275 21.4237 -50.6296 24.048L16.1111 198.006C26.8666 191.388 29.5945 186.385 26.1852 174.26C37.92 167.416 45.5861 165.655 48.3122 141.519C47.6969 125.561 43.0506 118.542 29.7831 109.318C32.8089 90.7508 29.1506 82.417 17.0106 69.7413C15.8132 59.3639 14.051 53.5774 4.59788 43.4767C-5.76762 35.7922 -11.8466 34.5791 -22.9259 35.0216Z"
							fill="url(#paint15_linear_0_1)"
						/>
					</g>
					<path
						d="M192.587 329.206C181.495 328.929 175.141 328.85 167.402 326.688C160.206 308.339 167.442 296.719 183.413 276.138C188.018 268.401 189.274 262.226 189.889 248.974L190.069 225.407C191.792 199.701 195.217 191.66 203.921 187.27C203.198 210.11 202.719 221.948 204.64 234.402C211.142 210.272 214.779 196.501 221.37 174.138C226.609 163.732 230.412 159.888 238.46 155.788C234.902 166.824 233.258 173.115 230.725 184.751C228.081 196.862 227.552 201.107 227.847 205.079C235.999 194.295 240.86 188.774 249.974 180.254C259.066 174.536 262.663 173.923 267.603 175.397C254.719 187.279 234.506 226.552 197.984 297.725C193.714 307.146 192.195 313.608 192.587 329.206Z"
						fill="url(#paint16_linear_0_1)"
					/>
					<path
						d="M143.296 289.79C145.671 311.552 148.319 319.761 156.249 324.869C160.609 327.279 163.103 327.535 167.582 326.668C164.686 318.513 164.146 314.406 165.243 307.959C167.589 298.5 171.097 293.009 178.376 283.134C187.806 271.547 189.256 263.674 189.889 248.954L189.799 249.064C186.467 253.144 184.568 255.468 178.735 262.086C170.151 269.666 166.924 272.471 163.085 274.499C160.383 276.385 158.936 276.578 157.148 275.578C155.191 273.856 154.122 272.045 152.471 266.763C149.467 253.757 147.732 247.816 144.376 243.557C140.342 238.651 137.367 237.098 129.984 237.8C138.284 264.965 142.116 278.356 143.296 289.79Z"
						fill="url(#paint17_linear_0_1)"
					/>
					<path
						d="M92.5661 296.466C182.013 346.525 246.354 340.394 374.82 296.466V343.598H-305V0H-109.815C-60.0626 8.82791 -43.4339 18.3492 -21.4868 46.0529C-0.0552854 75.9445 9.09521 104.698 17.0106 147.333C36.7244 238.949 48.1099 264.411 92.5661 296.466Z"
						fill="#080055"
					/>
				</g>
				<rect y="343" width="374.82" height="324" fill="#080055" />
				<defs>
					<filter
						id="filter0_d_0_1"
						x="191.905"
						y="22.3015"
						width="54.4656"
						height="67.9578"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="6" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_0_1"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_dd_0_1"
						x="223.799"
						y="-43.1853"
						width="205.503"
						height="205.503"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="3" dy="2" />
						<feGaussianBlur stdDeviation="10" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_0_1"
							result="effect2_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_0_1"
							result="shape"
						/>
					</filter>
					<filter
						id="filter2_d_0_1"
						x="260.214"
						y="9.36523"
						width="146.869"
						height="146.266"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="20" dy="20" />
						<feGaussianBlur stdDeviation="12.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_0_1"
							result="shape"
						/>
					</filter>
					<filter
						id="filter3_d_0_1"
						x="308.527"
						y="160.46"
						width="65.7988"
						height="85.0476"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="6" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_0_1"
							result="shape"
						/>
					</filter>
					<filter
						id="filter4_d_0_1"
						x="-55.6296"
						y="18.0264"
						width="128.942"
						height="204.979"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="10" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_0_1"
							result="shape"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_0_1"
						x1="71.8783"
						y1="16.0106"
						x2="288.831"
						y2="323.989"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#741CF2" />
						<stop offset="1" stop-color="#181398" />
					</linearGradient>
					<radialGradient
						id="paint1_radial_0_1"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(147.254 219.471) rotate(90) scale(152.91 146.383)"
					>
						<stop offset="0.940625" stop-color="#24057E" />
						<stop offset="1" stop-color="#1A016C" />
					</radialGradient>
					<linearGradient
						id="paint2_linear_0_1"
						x1="87.3491"
						y1="176.656"
						x2="268.143"
						y2="145.894"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FEE1B7" />
						<stop offset="1" stop-color="#865E82" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_0_1"
						x1="58.6238"
						y1="206.485"
						x2="223.929"
						y2="179.075"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#5E4BDB" />
						<stop offset="1" stop-color="#2C2293" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_0_1"
						x1="65.7618"
						y1="294.667"
						x2="286.312"
						y2="322.371"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#828BED" />
						<stop offset="1" stop-color="#4A46B5" />
					</linearGradient>
					<radialGradient
						id="paint5_radial_0_1"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(154.809 178.275) rotate(107.496) scale(52.0592)"
					>
						<stop stop-color="#6841F2" />
						<stop offset="1" stop-color="#24109F" />
					</radialGradient>
					<radialGradient
						id="paint6_radial_0_1"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(323.55 57.566) rotate(90) scale(82.7513)"
					>
						<stop stop-color="#28058A" />
						<stop offset="0.534375" stop-color="#260D7F" />
						<stop offset="1" stop-color="#17026B" />
					</radialGradient>
					<linearGradient
						id="paint7_linear_0_1"
						x1="303.528"
						y1="74.7291"
						x2="282.167"
						y2="98.533"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3D4ECF" />
						<stop offset="1" stop-color="#6764E8" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_0_1"
						x1="178.196"
						y1="104.698"
						x2="178.196"
						y2="299.704"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FCDBB0" />
						<stop offset="1" stop-color="#CB8FC0" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_0_1"
						x1="117.931"
						y1="137.079"
						x2="246.196"
						y2="262.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EE7779" />
						<stop offset="1" stop-color="#6C35C4" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_0_1"
						x1="116.672"
						y1="136"
						x2="243.138"
						y2="267.323"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FBCDAE" />
						<stop offset="1" stop-color="#C58ABE" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_0_1"
						x1="135.921"
						y1="213.534"
						x2="157.508"
						y2="236.741"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#E762CF" />
						<stop offset="1" stop-color="#AE44B2" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_0_1"
						x1="195.286"
						y1="150.032"
						x2="195.286"
						y2="225.048"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFF6BF" />
						<stop offset="1" stop-color="#FE9CBF" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_0_1"
						x1="109.836"
						y1="110.095"
						x2="145.275"
						y2="219.291"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FC869B" />
						<stop offset="1" stop-color="#FEB382" />
					</linearGradient>
					<radialGradient
						id="paint14_radial_0_1"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(146.534 221.989) rotate(81.7029) scale(8.72627)"
					>
						<stop stop-color="#FEFEFD" />
						<stop offset="1" stop-color="#FFEBBE" />
					</radialGradient>
					<linearGradient
						id="paint15_linear_0_1"
						x1="-1.15873"
						y1="23.0264"
						x2="-1.15873"
						y2="198.006"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#AC98FB" />
						<stop offset="1" stop-color="#5554BC" />
					</linearGradient>
					<linearGradient
						id="paint16_linear_0_1"
						x1="213.455"
						y1="251.852"
						x2="216.236"
						y2="329.206"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFFDFF" />
						<stop offset="1" stop-color="#FFCCC6" />
					</linearGradient>
					<linearGradient
						id="paint17_linear_0_1"
						x1="159.847"
						y1="239.079"
						x2="159.937"
						y2="327.123"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFD5BF" />
						<stop offset="1" stop-color="#FFA5C0" />
					</linearGradient>
					<clipPath id="clip0_0_1">
						<rect
							width="680"
							height="343.598"
							fill="white"
							transform="translate(-305)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	if (width <= 768)
		return (
			<svg
				width="1485"
				height="954"
				viewBox="0 0 1485 954"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_822_101)">
					<path
						d="M1687.5 824.5V0H339C585.977 77.5118 623.335 127.607 686.5 467C802.69 1091.33 1489.17 924.9 1687.5 824.5Z"
						fill="url(#paint0_linear_822_101)"
					/>
					<path
						d="M1055 1035C1289.72 1035 1480 844.721 1480 610C1480 375.279 1289.72 185 1055 185C820.28 185 630 375.279 630 610C630 844.721 820.28 1035 1055 1035Z"
						fill="url(#paint1_radial_822_101)"
					/>
					<path
						d="M1427.5 608C1427.5 813.139 1259.42 979.5 1052 979.5C844.58 979.5 676.5 813.139 676.5 608C676.5 402.861 844.58 236.5 1052 236.5C1259.42 236.5 1427.5 402.861 1427.5 608Z"
						fill="#805EF3"
						stroke="url(#paint2_linear_822_101)"
						stroke-width="7"
					/>
					<path
						d="M1320 623.5C1320 771.226 1199.8 891 1051.5 891C903.2 891 783 771.226 783 623.5C783 475.774 903.2 356 1051.5 356C1199.8 356 1320 475.774 1320 623.5Z"
						fill="url(#paint3_linear_822_101)"
						stroke="#9677B6"
						stroke-width="6"
					/>
					<g filter="url(#filter0_d_822_101)">
						<path
							d="M1193 138.5C1210.1 126.688 1217.8 115.526 1227 87C1238 114.691 1244.96 127.546 1261 138.5C1243.68 151.763 1236.33 163.945 1227 192.5C1221.59 167.83 1215.07 155.594 1193 138.5Z"
							fill="#796DF3"
						/>
					</g>
					<path
						d="M1244 923.001C1291 891.5 1349 860.5 1403 735.501C1350.99 674.796 1265.49 621.773 1186.5 609.5C1107.51 597.227 1025.68 606.075 957.71 648.14C889.74 690.204 839.05 755.187 814.79 831.352L1134 933.002L1244 923.001Z"
						fill="url(#paint4_linear_822_101)"
					/>
					<path
						d="M1055 755.5C1136.46 755.5 1202.5 689.462 1202.5 608C1202.5 526.538 1136.46 460.5 1055 460.5C973.54 460.5 907.5 526.538 907.5 608C907.5 689.462 973.54 755.5 1055 755.5Z"
						fill="url(#paint5_radial_822_101)"
						stroke="#A28AB9"
						stroke-width="5"
					/>
					<g filter="url(#filter1_dd_822_101)">
						<path
							d="M1545 390C1672.03 390 1775 287.025 1775 160C1775 32.9745 1672.03 -70 1545 -70C1417.97 -70 1315 32.9745 1315 160C1315 287.025 1417.97 390 1545 390Z"
							fill="url(#paint6_radial_822_101)"
						/>
					</g>
					<g filter="url(#filter2_d_822_101)">
						<path
							d="M1458.4 180.45C1467.06 229.338 1491.99 278.371 1575.95 293.404C1503.71 322.337 1436.45 298.235 1395.92 229.655C1338.48 111.34 1450.52 -9.11121 1571.6 35.8297C1478.22 48.5962 1450 133.109 1458.4 180.45Z"
							fill="url(#paint7_linear_822_101)"
						/>
					</g>
					<path
						d="M1409.5 562C1409.5 709.724 1289.3 829.5 1141 829.5C992.7 829.5 872.5 709.724 872.5 562C872.5 414.276 992.7 294.5 1141 294.5C1289.3 294.5 1409.5 414.276 1409.5 562Z"
						stroke="url(#paint8_linear_822_101)"
						stroke-width="7"
					/>
					<path
						d="M1396 562C1396 702.833 1281.83 817 1141 817C1000.17 817 886 702.833 886 562C886 421.167 1000.17 307 1141 307C1281.83 307 1396 421.167 1396 562ZM963.44 562C963.44 660.065 1042.93 739.562 1141 739.562C1239.07 739.562 1318.56 660.065 1318.56 562C1318.56 463.935 1239.07 384.438 1141 384.438C1042.93 384.438 963.44 463.935 963.44 562Z"
						fill="url(#paint9_linear_822_101)"
						stroke="url(#paint10_linear_822_101)"
						stroke-width="9"
					/>
					<path
						d="M1102.5 624C1102.5 649.405 1081.9 670 1056.5 670C1031.09 670 1010.5 649.405 1010.5 624C1010.5 598.595 1031.09 578 1056.5 578C1081.9 578 1102.5 598.595 1102.5 624ZM1033.14 624C1033.14 636.9 1043.6 647.357 1056.5 647.357C1069.4 647.357 1079.86 636.9 1079.86 624C1079.86 611.1 1069.4 600.643 1056.5 600.643C1043.6 600.643 1033.14 611.1 1033.14 624Z"
						fill="url(#paint11_linear_822_101)"
					/>
					<path
						d="M1054.5 622L855 615.5L910 632L1054.5 626.5V622Z"
						fill="#FEF8B9"
					/>
					<path
						d="M912 602.5L855 615.5L1054.5 622L1054 619L912 602.5Z"
						fill="#FF8A9A"
					/>
					<path
						d="M1281.5 454.5L1322.5 417L1274.5 447.5C1250.89 462.067 1238.03 471.83 1215.5 491.5L1054.5 622L1057 625.5L1224.5 501.5C1251.43 482.824 1262.47 472.637 1281.5 454.5Z"
						fill="url(#paint12_linear_822_101)"
					/>
					<path
						d="M962.5 313.5L948.5 298L947.5 318.5L1047 612.5L1054 610L962.5 313.5Z"
						fill="url(#paint13_linear_822_101)"
					/>
					<path
						d="M951 364L943 349L958 356.5L954.5 338L967.5 352L969 335L976 350.5L984 336L986 353L998.5 343L994.5 357.5L1010 353L1000 366L1017 367L1004 375L1021 382L1003 386L1017 396.5L998.5 394.5L1008.5 410.5L992.5 402L996.5 418.5L985 407.5L982 424.5L974.5 409.5L965.5 422.5L964 407.5L952.5 416.5L955.5 402L940 406.5L950 393H933L946.5 383L930.5 377L948.5 374L933.5 362L951 364Z"
						fill="#FFF7B1"
					/>
					<path
						d="M1056.5 641C1065.89 641 1073.5 633.389 1073.5 624C1073.5 614.611 1065.89 607 1056.5 607C1047.11 607 1039.5 614.611 1039.5 624C1039.5 633.389 1047.11 641 1056.5 641Z"
						fill="url(#paint14_radial_822_101)"
					/>
					<path
						d="M975.5 395C983.78 395 990.5 388.284 990.5 380C990.5 371.716 983.78 365 975.5 365C967.22 365 960.5 371.716 960.5 380C960.5 388.284 967.22 395 975.5 395Z"
						fill="#FEFFF6"
					/>
					<g filter="url(#filter3_d_822_101)">
						<path
							d="M582 97.3396C554.544 65.1402 537.525 59.5455 505 66.8396L690.5 550.34C720.394 531.946 727.976 518.041 718.5 484.34C751.116 465.317 772.423 460.425 780 393.34C778.29 348.985 765.376 329.478 728.5 303.84C736.91 252.234 726.742 229.071 693 193.84C689.672 164.997 684.774 148.914 658.5 120.84C629.69 99.4816 612.794 96.1099 582 97.3396Z"
							fill="url(#paint15_linear_822_101)"
						/>
					</g>
					<path
						d="M1181 915C1150.17 914.228 1132.51 914.01 1111 908C1091 857 1111.11 824.703 1155.5 767.5C1168.3 745.997 1171.79 728.835 1173.5 692L1174 626.5C1178.79 555.051 1188.31 532.701 1212.5 520.5C1210.49 583.981 1209.16 616.884 1214.5 651.5C1232.57 584.432 1242.68 546.156 1261 484C1275.56 455.078 1286.13 444.396 1308.5 433C1298.61 463.673 1294.04 481.158 1287 513.5C1279.65 547.162 1278.18 558.959 1279 570C1301.66 540.025 1315.17 524.682 1340.5 501C1365.77 485.108 1375.77 483.405 1389.5 487.5C1353.69 520.526 1297.51 629.682 1196 827.5C1184.13 853.685 1179.91 871.645 1181 915Z"
						fill="url(#paint16_linear_822_101)"
					/>
					<path
						d="M1044 805.445C1050.6 865.932 1057.96 888.749 1080 902.945C1092.12 909.644 1099.05 910.355 1111.5 907.945C1103.45 885.28 1101.95 873.864 1105 855.945C1111.52 829.656 1121.27 814.392 1141.5 786.945C1167.71 754.74 1171.74 732.859 1173.5 691.945L1173.25 692.253C1163.99 703.591 1158.71 710.052 1142.5 728.445C1118.64 749.513 1109.67 757.309 1099 762.945C1091.49 768.189 1087.47 768.723 1082.5 765.945C1077.06 761.159 1074.09 756.124 1069.5 741.445C1061.15 705.295 1056.33 688.783 1047 676.945C1035.79 663.309 1027.52 658.992 1007 660.945C1030.07 736.447 1040.72 773.665 1044 805.445Z"
						fill="url(#paint17_linear_822_101)"
					/>
					<path
						d="M903 824C1151.61 963.137 1330.44 946.096 1687.5 824V955H-202V0H340.5C478.782 24.5364 525 51 586 128C645.567 211.081 671 291 693 409.5C747.793 664.138 779.438 734.908 903 824Z"
						fill="#080055"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_822_101"
						x="1188"
						y="78"
						width="98"
						height="135.5"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="6" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_822_101"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_822_101"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_dd_822_101"
						x="1298"
						y="-88"
						width="500"
						height="500"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_822_101"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="3" dy="2" />
						<feGaussianBlur stdDeviation="10" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_822_101"
							result="effect2_dropShadow_822_101"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_822_101"
							result="shape"
						/>
					</filter>
					<filter
						id="filter2_d_822_101"
						x="1375.43"
						y="21.2004"
						width="245.521"
						height="329.221"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="20" dy="20" />
						<feGaussianBlur stdDeviation="12.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_822_101"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_822_101"
							result="shape"
						/>
					</filter>
					<filter
						id="filter3_d_822_101"
						x="500"
						y="59"
						width="305"
						height="516.34"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="10" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_822_101"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_822_101"
							result="shape"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_822_101"
						x1="845.5"
						y1="44.5"
						x2="1448.5"
						y2="900.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#741CF2" />
						<stop offset="1" stop-color="#181398" />
					</linearGradient>
					<radialGradient
						id="paint1_radial_822_101"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1055 610) rotate(90) scale(425 406.859)"
					>
						<stop offset="0.940625" stop-color="#24057E" />
						<stop offset="1" stop-color="#1A016C" />
					</radialGradient>
					<linearGradient
						id="paint2_linear_822_101"
						x1="888.5"
						y1="491"
						x2="1391"
						y2="405.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FEE1B7" />
						<stop offset="1" stop-color="#865E82" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_822_101"
						x1="808.66"
						y1="573.908"
						x2="1268.11"
						y2="497.723"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#5E4BDB" />
						<stop offset="1" stop-color="#2C2293" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_822_101"
						x1="828.5"
						y1="819.001"
						x2="1441.5"
						y2="896.001"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#828BED" />
						<stop offset="1" stop-color="#4A46B5" />
					</linearGradient>
					<radialGradient
						id="paint5_radial_822_101"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1076 495.5) rotate(107.496) scale(144.694)"
					>
						<stop stop-color="#6841F2" />
						<stop offset="1" stop-color="#24109F" />
					</radialGradient>
					<radialGradient
						id="paint6_radial_822_101"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1545 160) rotate(90) scale(230)"
					>
						<stop stop-color="#28058A" />
						<stop offset="0.534375" stop-color="#260D7F" />
						<stop offset="1" stop-color="#17026B" />
					</radialGradient>
					<linearGradient
						id="paint7_linear_822_101"
						x1="1468.89"
						y1="170.199"
						x2="1380.15"
						y2="175.55"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3D4ECF" />
						<stop offset="1" stop-color="#6764E8" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_822_101"
						x1="1141"
						y1="291"
						x2="1141"
						y2="833"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FCDBB0" />
						<stop offset="1" stop-color="#CB8FC0" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_822_101"
						x1="973.5"
						y1="381"
						x2="1330"
						y2="730"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EE7779" />
						<stop offset="1" stop-color="#6C35C4" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_822_101"
						x1="970"
						y1="378"
						x2="1321.5"
						y2="743"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FBCDAE" />
						<stop offset="1" stop-color="#C58ABE" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_822_101"
						x1="1023.5"
						y1="593.5"
						x2="1083.5"
						y2="658"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#E762CF" />
						<stop offset="1" stop-color="#AE44B2" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_822_101"
						x1="1188.5"
						y1="417"
						x2="1188.5"
						y2="625.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFF6BF" />
						<stop offset="1" stop-color="#FE9CBF" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_822_101"
						x1="951"
						y1="306"
						x2="1049.5"
						y2="609.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FC869B" />
						<stop offset="1" stop-color="#FEB382" />
					</linearGradient>
					<radialGradient
						id="paint14_radial_822_101"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1053 617) rotate(81.7029) scale(24.2539)"
					>
						<stop stop-color="#FEFEFD" />
						<stop offset="1" stop-color="#FFEBBE" />
					</radialGradient>
					<linearGradient
						id="paint15_linear_822_101"
						x1="642.5"
						y1="64"
						x2="642.5"
						y2="550.34"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#AC98FB" />
						<stop offset="1" stop-color="#5554BC" />
					</linearGradient>
					<linearGradient
						id="paint16_linear_822_101"
						x1="1239"
						y1="700"
						x2="1246.73"
						y2="915"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFFDFF" />
						<stop offset="1" stop-color="#FFCCC6" />
					</linearGradient>
					<linearGradient
						id="paint17_linear_822_101"
						x1="1090"
						y1="664.5"
						x2="1090.25"
						y2="909.209"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFD5BF" />
						<stop offset="1" stop-color="#FFA5C0" />
					</linearGradient>
					<clipPath id="clip0_822_101">
						<rect width="1485" height="954" fill="white" />
					</clipPath>
				</defs>
			</svg>
		);
	else
		return (
			<svg
				width="1890"
				height="955"
				viewBox="0 0 1890 955"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_1110_6)">
					<path
						d="M1889.5 824.5V0H541C787.977 77.5118 825.335 127.607 888.5 467C1004.69 1091.33 1691.17 924.9 1889.5 824.5Z"
						fill="url(#paint0_linear_1110_6)"
					/>
					<path
						d="M1257 1035C1491.72 1035 1682 844.721 1682 610C1682 375.279 1491.72 185 1257 185C1022.28 185 832 375.279 832 610C832 844.721 1022.28 1035 1257 1035Z"
						fill="url(#paint1_radial_1110_6)"
					/>
					<path
						d="M1629.5 608C1629.5 813.139 1461.42 979.5 1254 979.5C1046.58 979.5 878.5 813.139 878.5 608C878.5 402.861 1046.58 236.5 1254 236.5C1461.42 236.5 1629.5 402.861 1629.5 608Z"
						fill="#805EF3"
						stroke="url(#paint2_linear_1110_6)"
						stroke-width="7"
					/>
					<path
						d="M1522 623.5C1522 771.226 1401.8 891 1253.5 891C1105.2 891 985 771.226 985 623.5C985 475.774 1105.2 356 1253.5 356C1401.8 356 1522 475.774 1522 623.5Z"
						fill="url(#paint3_linear_1110_6)"
						stroke="#9677B6"
						stroke-width="6"
					/>
					<g filter="url(#filter0_d_1110_6)">
						<path
							d="M1395 138.5C1412.1 126.688 1419.8 115.526 1429 87C1440 114.691 1446.96 127.546 1463 138.5C1445.68 151.763 1438.33 163.945 1429 192.5C1423.59 167.83 1417.07 155.594 1395 138.5Z"
							fill="#796DF3"
						/>
					</g>
					<path
						d="M1446 923.001C1493 891.5 1551 860.5 1605 735.501C1552.99 674.796 1467.49 621.773 1388.5 609.5C1309.51 597.227 1227.68 606.075 1159.71 648.14C1091.74 690.204 1041.05 755.187 1016.79 831.352L1336 933.002L1446 923.001Z"
						fill="url(#paint4_linear_1110_6)"
					/>
					<path
						d="M1257 755.5C1338.46 755.5 1404.5 689.462 1404.5 608C1404.5 526.538 1338.46 460.5 1257 460.5C1175.54 460.5 1109.5 526.538 1109.5 608C1109.5 689.462 1175.54 755.5 1257 755.5Z"
						fill="url(#paint5_radial_1110_6)"
						stroke="#A28AB9"
						stroke-width="5"
					/>
					<g filter="url(#filter1_dd_1110_6)">
						<path
							d="M1747 390C1874.03 390 1977 287.025 1977 160C1977 32.9745 1874.03 -70 1747 -70C1619.97 -70 1517 32.9745 1517 160C1517 287.025 1619.97 390 1747 390Z"
							fill="url(#paint6_radial_1110_6)"
						/>
					</g>
					<g filter="url(#filter2_d_1110_6)">
						<path
							d="M1691.09 222.368C1731.61 251.06 1783.8 268.43 1854.1 220.123C1823.04 291.469 1758.25 321.586 1681.22 301.277C1557.21 257.465 1552.28 93.0338 1670 39.9271C1612.54 114.625 1651.85 194.585 1691.09 222.368Z"
							fill="url(#paint7_linear_1110_6)"
						/>
					</g>
					<g filter="url(#filter3_d_1110_6)">
						<path
							d="M1719.14 548C1745.71 530.913 1755.98 513.052 1768.86 471C1783.28 513.77 1793.61 532.119 1818.64 548C1791.61 567.45 1780.49 583.567 1770.14 624C1758.19 584.305 1746.54 568.223 1719.14 548Z"
							fill="#796DF3"
						/>
					</g>
					<path
						d="M1611.5 562C1611.5 709.724 1491.3 829.5 1343 829.5C1194.7 829.5 1074.5 709.724 1074.5 562C1074.5 414.276 1194.7 294.5 1343 294.5C1491.3 294.5 1611.5 414.276 1611.5 562Z"
						stroke="url(#paint8_linear_1110_6)"
						stroke-width="7"
					/>
					<path
						d="M1598 562C1598 702.833 1483.83 817 1343 817C1202.17 817 1088 702.833 1088 562C1088 421.167 1202.17 307 1343 307C1483.83 307 1598 421.167 1598 562ZM1165.44 562C1165.44 660.065 1244.93 739.562 1343 739.562C1441.07 739.562 1520.56 660.065 1520.56 562C1520.56 463.935 1441.07 384.438 1343 384.438C1244.93 384.438 1165.44 463.935 1165.44 562Z"
						fill="url(#paint9_linear_1110_6)"
						stroke="url(#paint10_linear_1110_6)"
						stroke-width="9"
					/>
					<path
						d="M1304.5 624C1304.5 649.405 1283.9 670 1258.5 670C1233.09 670 1212.5 649.405 1212.5 624C1212.5 598.595 1233.09 578 1258.5 578C1283.9 578 1304.5 598.595 1304.5 624ZM1235.14 624C1235.14 636.9 1245.6 647.357 1258.5 647.357C1271.4 647.357 1281.86 636.9 1281.86 624C1281.86 611.1 1271.4 600.643 1258.5 600.643C1245.6 600.643 1235.14 611.1 1235.14 624Z"
						fill="url(#paint11_linear_1110_6)"
					/>
					<path
						d="M1256.5 622L1057 615.5L1112 632L1256.5 626.5V622Z"
						fill="#FEF8B9"
					/>
					<path
						d="M1114 602.5L1057 615.5L1256.5 622L1256 619L1114 602.5Z"
						fill="#FF8A9A"
					/>
					<path
						d="M1483.5 454.5L1524.5 417L1476.5 447.5C1452.89 462.067 1440.03 471.83 1417.5 491.5L1256.5 622L1259 625.5L1426.5 501.5C1453.43 482.824 1464.47 472.637 1483.5 454.5Z"
						fill="url(#paint12_linear_1110_6)"
					/>
					<path
						d="M1164.5 313.5L1150.5 298L1149.5 318.5L1249 612.5L1256 610L1164.5 313.5Z"
						fill="url(#paint13_linear_1110_6)"
					/>
					<path
						d="M1153 364L1145 349L1160 356.5L1156.5 338L1169.5 352L1171 335L1178 350.5L1186 336L1188 353L1200.5 343L1196.5 357.5L1212 353L1202 366L1219 367L1206 375L1223 382L1205 386L1219 396.5L1200.5 394.5L1210.5 410.5L1194.5 402L1198.5 418.5L1187 407.5L1184 424.5L1176.5 409.5L1167.5 422.5L1166 407.5L1154.5 416.5L1157.5 402L1142 406.5L1152 393H1135L1148.5 383L1132.5 377L1150.5 374L1135.5 362L1153 364Z"
						fill="#FFF7B1"
					/>
					<path
						d="M1258.5 641C1267.89 641 1275.5 633.389 1275.5 624C1275.5 614.611 1267.89 607 1258.5 607C1249.11 607 1241.5 614.611 1241.5 624C1241.5 633.389 1249.11 641 1258.5 641Z"
						fill="url(#paint14_radial_1110_6)"
					/>
					<path
						d="M1177.5 395C1185.78 395 1192.5 388.284 1192.5 380C1192.5 371.716 1185.78 365 1177.5 365C1169.22 365 1162.5 371.716 1162.5 380C1162.5 388.284 1169.22 395 1177.5 395Z"
						fill="#FEFFF6"
					/>
					<g filter="url(#filter4_d_1110_6)">
						<path
							d="M784 97.3396C756.544 65.1402 739.525 59.5455 707 66.8396L892.5 550.34C922.394 531.946 929.976 518.041 920.5 484.34C953.116 465.317 974.423 460.425 982 393.34C980.29 348.985 967.376 329.478 930.5 303.84C938.91 252.234 928.742 229.071 895 193.84C891.672 164.997 886.774 148.914 860.5 120.84C831.69 99.4816 814.794 96.1099 784 97.3396Z"
							fill="url(#paint15_linear_1110_6)"
						/>
					</g>
					<path
						d="M1383 915C1352.17 914.228 1334.51 914.01 1313 908C1293 857 1313.11 824.703 1357.5 767.5C1370.3 745.997 1373.79 728.835 1375.5 692L1376 626.5C1380.79 555.051 1390.31 532.701 1414.5 520.5C1412.49 583.981 1411.16 616.884 1416.5 651.5C1434.57 584.432 1444.68 546.156 1463 484C1477.56 455.078 1488.13 444.396 1510.5 433C1500.61 463.673 1496.04 481.158 1489 513.5C1481.65 547.162 1480.18 558.959 1481 570C1503.66 540.025 1517.17 524.682 1542.5 501C1567.77 485.108 1577.77 483.405 1591.5 487.5C1555.69 520.526 1499.51 629.682 1398 827.5C1386.13 853.685 1381.91 871.645 1383 915Z"
						fill="url(#paint16_linear_1110_6)"
					/>
					<path
						d="M1246 805.445C1252.6 865.932 1259.96 888.749 1282 902.945C1294.12 909.644 1301.05 910.355 1313.5 907.945C1305.45 885.28 1303.95 873.864 1307 855.945C1313.52 829.656 1323.27 814.392 1343.5 786.945C1369.71 754.74 1373.74 732.859 1375.5 691.945L1375.25 692.253C1365.99 703.591 1360.71 710.052 1344.5 728.445C1320.64 749.513 1311.67 757.309 1301 762.945C1293.49 768.189 1289.47 768.723 1284.5 765.945C1279.06 761.159 1276.09 756.124 1271.5 741.445C1263.15 705.295 1258.33 688.783 1249 676.945C1237.79 663.309 1229.52 658.992 1209 660.945C1232.07 736.447 1242.72 773.665 1246 805.445Z"
						fill="url(#paint17_linear_1110_6)"
					/>
				</g>
				<path
					d="M1105 824C1353.61 963.137 1532.44 946.096 1889.5 824V955H0V0H542.5C680.782 24.5364 727 51 788 128C847.567 211.081 873 291 895 409.5C949.793 664.138 981.438 734.908 1105 824Z"
					fill="#080055"
				/>
				<defs>
					<filter
						id="filter0_d_1110_6"
						x="1390"
						y="78"
						width="98"
						height="135.5"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="6" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1110_6"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_1110_6"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_dd_1110_6"
						x="1500"
						y="-88"
						width="500"
						height="500"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1110_6"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="3" dy="2" />
						<feGaussianBlur stdDeviation="10" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_1110_6"
							result="effect2_dropShadow_1110_6"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_1110_6"
							result="shape"
						/>
					</filter>
					<filter
						id="filter2_d_1110_6"
						x="1579.86"
						y="34.9277"
						width="319.246"
						height="317.561"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="20" dy="20" />
						<feGaussianBlur stdDeviation="12.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1110_6"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_1110_6"
							result="shape"
						/>
					</filter>
					<filter
						id="filter3_d_1110_6"
						x="1714.14"
						y="462"
						width="129.5"
						height="183"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="6" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1110_6"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_1110_6"
							result="shape"
						/>
					</filter>
					<filter
						id="filter4_d_1110_6"
						x="702"
						y="59"
						width="305"
						height="516.34"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="10" dy="10" />
						<feGaussianBlur stdDeviation="7.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1110_6"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_1110_6"
							result="shape"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_1110_6"
						x1="1047.5"
						y1="44.5"
						x2="1650.5"
						y2="900.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#741CF2" />
						<stop offset="1" stop-color="#181398" />
					</linearGradient>
					<radialGradient
						id="paint1_radial_1110_6"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1257 610) rotate(90) scale(425 406.859)"
					>
						<stop offset="0.940625" stop-color="#24057E" />
						<stop offset="1" stop-color="#1A016C" />
					</radialGradient>
					<linearGradient
						id="paint2_linear_1110_6"
						x1="1090.5"
						y1="491"
						x2="1593"
						y2="405.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FEE1B7" />
						<stop offset="1" stop-color="#865E82" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_1110_6"
						x1="1010.66"
						y1="573.908"
						x2="1470.11"
						y2="497.723"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#5E4BDB" />
						<stop offset="1" stop-color="#2C2293" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_1110_6"
						x1="1030.5"
						y1="819.001"
						x2="1643.5"
						y2="896.001"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#828BED" />
						<stop offset="1" stop-color="#4A46B5" />
					</linearGradient>
					<radialGradient
						id="paint5_radial_1110_6"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1278 495.5) rotate(107.496) scale(144.694)"
					>
						<stop stop-color="#6841F2" />
						<stop offset="1" stop-color="#24109F" />
					</radialGradient>
					<radialGradient
						id="paint6_radial_1110_6"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1747 160) rotate(90) scale(230)"
					>
						<stop stop-color="#28058A" />
						<stop offset="0.534375" stop-color="#260D7F" />
						<stop offset="1" stop-color="#17026B" />
					</radialGradient>
					<linearGradient
						id="paint7_linear_1110_6"
						x1="1691.35"
						y1="207.703"
						x2="1631.98"
						y2="273.864"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3D4ECF" />
						<stop offset="1" stop-color="#6764E8" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_1110_6"
						x1="1343"
						y1="291"
						x2="1343"
						y2="833"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FCDBB0" />
						<stop offset="1" stop-color="#CB8FC0" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_1110_6"
						x1="1175.5"
						y1="381"
						x2="1532"
						y2="730"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#EE7779" />
						<stop offset="1" stop-color="#6C35C4" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_1110_6"
						x1="1172"
						y1="378"
						x2="1523.5"
						y2="743"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FBCDAE" />
						<stop offset="1" stop-color="#C58ABE" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_1110_6"
						x1="1225.5"
						y1="593.5"
						x2="1285.5"
						y2="658"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#E762CF" />
						<stop offset="1" stop-color="#AE44B2" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_1110_6"
						x1="1390.5"
						y1="417"
						x2="1390.5"
						y2="625.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFF6BF" />
						<stop offset="1" stop-color="#FE9CBF" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_1110_6"
						x1="1153"
						y1="306"
						x2="1251.5"
						y2="609.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FC869B" />
						<stop offset="1" stop-color="#FEB382" />
					</linearGradient>
					<radialGradient
						id="paint14_radial_1110_6"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(1255 617) rotate(81.7029) scale(24.2539)"
					>
						<stop stop-color="#FEFEFD" />
						<stop offset="1" stop-color="#FFEBBE" />
					</radialGradient>
					<linearGradient
						id="paint15_linear_1110_6"
						x1="844.5"
						y1="64"
						x2="844.5"
						y2="550.34"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#AC98FB" />
						<stop offset="1" stop-color="#5554BC" />
					</linearGradient>
					<linearGradient
						id="paint16_linear_1110_6"
						x1="1441"
						y1="700"
						x2="1448.73"
						y2="915"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFFDFF" />
						<stop offset="1" stop-color="#FFCCC6" />
					</linearGradient>
					<linearGradient
						id="paint17_linear_1110_6"
						x1="1292"
						y1="664.5"
						x2="1292.25"
						y2="909.209"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FFD5BF" />
						<stop offset="1" stop-color="#FFA5C0" />
					</linearGradient>
					<clipPath id="clip0_1110_6">
						<rect
							width="1349"
							height="933"
							fill="white"
							transform="translate(541)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
};

export default MainHeroImg;
