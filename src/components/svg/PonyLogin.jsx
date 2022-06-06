import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
    <Svg
        width={311}
        height={192}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#a)">
            <G filter="url(#b)">
                <Path
                    d="m196.85 168.642-3.632 10.919 2.079 7.837h-3.883l-1.553-8.907.971-13.202 6.018 3.353Z"
                    fill="#3F3D56"
                />
            </G>
            <Path
                d="M268.866 120.349c-6.56 6.378-7.362 16.183-7.362 16.183s9.836-.536 16.397-6.914c6.561-6.379 7.362-16.183 7.362-16.183s-9.836.536-16.397 6.914Z"
                fill="#FCFFF5"
            />
            <Path
                d="m259.936 192-.395-.411c.062-.059 6.234-6.097 8.585-17.378 2.171-10.42 1.433-27.575-14.408-50.134-12.15-17.301-17.067-32.416-14.614-44.927 2.155-10.99 9.485-15.818 9.558-15.866l.309.479c-.071.046-7.208 4.76-9.31 15.514-2.414 12.35 2.473 27.312 14.524 44.473 7.048 10.036 11.739 19.865 13.945 29.212 1.767 7.49 1.951 14.691.546 21.401-2.394 11.441-8.677 17.576-8.74 17.637Z"
                fill="#FCFFF5"
            />
            <Path
                d="M257.089 77.482c28.356 0 51.344-3.939 51.344-8.797 0-4.858-22.988-8.796-51.344-8.796-28.357 0-51.344 3.938-51.344 8.796 0 4.858 22.987 8.797 51.344 8.797Z"
                fill="#FCFFF5"
            />
            <Path
                d="M247.533 74.918c-35.588 0-63.466-4.88-63.466-11.11 0-6.23 27.878-11.109 63.466-11.109 35.589 0 63.467 4.88 63.467 11.11 0 6.23-27.878 11.109-63.467 11.109Zm0-21.65c-34.093 0-62.896 4.827-62.896 10.54 0 5.714 28.803 10.54 62.896 10.54 34.094 0 62.897-4.826 62.897-10.54 0-5.713-28.803-10.54-62.897-10.54ZM69.384 191.715l-.396-.41c.079-.075 7.86-7.685 10.826-21.905 2.738-13.131 1.813-34.75-18.146-63.173-8.34-11.876-14.027-23.096-16.904-33.349-2.35-8.377-2.848-16.165-1.479-23.147 2.707-13.804 11.906-19.865 11.999-19.924l.309.479c-.09.058-9.098 6.005-11.752 19.572-3.044 15.566 3.11 34.421 18.294 56.042 8.866 12.625 14.768 24.988 17.542 36.745 2.222 9.419 2.453 18.472.688 26.908-3.01 14.378-10.902 22.086-10.981 22.162Z"
                fill="#FCFFF5"
            />
            <Path
                d="M50.232 61.6c12.196 0 22.082-9.872 22.082-22.052 0-12.179-9.886-22.052-22.082-22.052-12.195 0-22.082 9.873-22.082 22.052 0 12.18 9.887 22.053 22.082 22.053Z"
                fill="#FCFFF5"
            />
            <Path
                d="M55.438 60.093a30.116 30.116 0 0 1-16.715-5.064 30.055 30.055 0 0 1-11.081-13.484 30.009 30.009 0 0 1-1.712-17.36A30.032 30.032 0 0 1 34.164 8.8 30.1 30.1 0 0 1 49.569.577a30.124 30.124 0 0 1 17.383 1.71 30.078 30.078 0 0 1 13.503 11.066 30.018 30.018 0 0 1 5.07 16.693 30.06 30.06 0 0 1-8.822 21.236 30.142 30.142 0 0 1-21.265 8.81Zm0-59.523A29.544 29.544 0 0 0 39.04 5.537a29.484 29.484 0 0 0-10.871 13.23 29.439 29.439 0 0 0-1.68 17.03 29.465 29.465 0 0 0 8.078 15.093 29.529 29.529 0 0 0 15.113 8.067 29.554 29.554 0 0 0 17.054-1.678A29.508 29.508 0 0 0 79.98 46.423a29.448 29.448 0 0 0 4.975-16.377A29.49 29.49 0 0 0 76.3 9.213 29.57 29.57 0 0 0 55.438.57ZM72.314 107.856c10.113 0 18.312-8.187 18.312-18.287s-8.199-18.287-18.312-18.287c-10.113 0-18.312 8.188-18.312 18.287 0 10.1 8.199 18.287 18.312 18.287ZM62.979 171.324c10.113 0 18.311-8.188 18.311-18.287 0-10.1-8.198-18.288-18.311-18.288-10.114 0-18.312 8.188-18.312 18.288 0 10.099 8.198 18.287 18.312 18.287ZM262.668 191.955h-62.081s-1.258-18.432 6.187-18.641c7.446-.21 6.607 8.168 15.94-3.352 9.333-11.519 20.659-10.891 22.127-4.084s-2.832 12.253 5.033 10.577c7.865-1.675 19.191 2.723 12.794 15.5Z"
                fill="#FCFFF5"
            />
            <Path
                d="m230.58 191.959-.21-.009c.489-12.135 3.034-19.932 5.083-24.336 2.224-4.781 4.368-6.717 4.389-6.736l.14.156c-.021.019-2.14 1.936-4.347 6.685-2.037 4.385-4.569 12.15-5.055 24.24ZM253.048 191.984l-.201-.059a32.483 32.483 0 0 1 8.191-13.609l.141.155a32.27 32.27 0 0 0-8.131 13.513ZM210.365 191.969l-.208-.029a22.784 22.784 0 0 0-2.054-13.333 18.36 18.36 0 0 0-3.243-4.725l.145-.152a18.582 18.582 0 0 1 3.286 4.784 22.99 22.99 0 0 1 2.074 13.455Z"
                fill="#91AA9D"
            />
            <Path d="M305.211 191.385H0v.57h305.211v-.57Z" fill="#3F3D56" />
            <Path
                d="m31.98 191.895-.143-.294c-.043-.089-4.332-9.042-1.94-17.87 2.39-8.827 10.614-14.4 10.697-14.455l.271-.182.144.294c.043.089 4.332 9.042 1.94 17.87-2.39 8.827-10.614 14.4-10.697 14.455l-.271.182Zm8.655-31.951c-1.44 1.046-8.1 6.228-10.188 13.936-2.09 7.714 1.048 15.538 1.764 17.165 1.44-1.046 8.1-6.228 10.188-13.936 2.09-7.714-1.048-15.538-1.764-17.165Z"
                fill="#3F3D56"
            />
            <Path
                d="M20.923 177.183c2.391 8.827 10.58 14.293 10.58 14.293s4.314-8.844 1.923-17.67c-2.391-8.827-10.58-14.293-10.58-14.293s-4.314 8.844-1.923 17.67Z"
                fill="#3F3D56"
            />
            <Path
                d="m32.11 191.771-.327-.018c-.1-.005-10.018-.615-16.58-6.994-6.561-6.379-7.44-16.265-7.447-16.364l-.027-.325.326.018c.1.005 10.019.616 16.58 6.994 6.562 6.379 7.44 16.265 7.448 16.364l.027.325ZM8.36 168.684c.216 1.765 1.511 10.097 7.241 15.666 5.73 5.571 14.104 6.64 15.877 6.807-.215-1.765-1.51-10.096-7.24-15.666-5.734-5.575-14.106-6.641-15.877-6.807Z"
                fill="#3F3D56"
            />
            <Path
                d="M39.161 175.286c-6.56 6.379-7.362 16.183-7.362 16.183s9.836-.536 16.397-6.914c6.56-6.378 7.362-16.183 7.362-16.183s-9.836.536-16.397 6.914Z"
                fill="#3F3D56"
            />
            <Path
                d="M31.662 158.056a4.276 4.276 0 0 0 4.279-4.273 4.276 4.276 0 0 0-4.279-4.272 4.276 4.276 0 0 0-4.279 4.272 4.276 4.276 0 0 0 4.28 4.273Z"
                fill="#6C63FF"
            />
            <Path
                d="M168.432 95.08c2.519-4.25 7.501-4.448 7.501-4.448s4.855-.62 7.969 5.852c2.903 6.033 6.91 11.857.645 13.269l-1.131-3.517-.701 3.779c-.892.064-1.786.079-2.68.046-6.709-.216-13.098.063-12.892-2.341.273-3.196-1.134-8.552 1.289-12.64Z"
                fill="#F76280"
            />
            <Path
                d="M186.88 141.055s1.907 4.797-1.589 5.329c-3.496.531-2.3-5.069-2.3-5.069l3.889-.26Z"
                fill="#FFB8B8"
            />
            <Path
                d="m181.397 112.189-.159-1.265c.71-.142 1.734.465 1.997 1.14.482 1.238 1.374 4.453 2.276 7.607 1.463 5.115 2.671 13.179 2.595 14.064a42.352 42.352 0 0 1-.455 4.594c-.376 2.285-.867 1.767-.278 2.531a1.394 1.394 0 0 1 .168 1.499s-3.195-1.581-4.874.651a2.931 2.931 0 0 1-.686-1.01c-.245-.615-.859-1.083-.39-1.697.47-.613-1.151-1.821-.508-3.073.643-1.251.815-1.177.35-1.989-.465-.813-1.336-5.801-1.336-5.801l1.3-17.251Z"
                fill="#D0CDE1"
            />
            <Path
                d="M186.244 134.973s11.161 1.11 9.173 5.609c-1.988 4.5-1.988 4.897-1.988 4.897l-9.807 17.469-3.18-3.308s3.578-7.809 3.578-10.323c0-2.515 3.711-6.882 3.711-6.882l-6.494-.529 5.007-6.933Z"
                fill="#FFB8B8"
            />
            <Path
                d="M169.178 140.582s9.011 2.912 14.444 1.853c0 0-1.59-5.029 4.109-7.279l-12.855-1.588M182.827 160.566s3.578-.529 2.651 2.647l-1.856 6.352s2.386 6.485-1.325 5.029c-3.71-1.456-6.096-10.455-6.096-10.455s-1.59-6.882 0-6.882c1.591 0 6.626-1.058 6.096 0-.53 1.059.53 3.309.53 3.309Z"
                fill="#2F2E41"
            />
            <G filter="url(#c)">
                <Path
                    d="m183.965 124.288 4.545-1.539-3.426-.483a26.813 26.813 0 0 1 4.533-5.751l8.347.94-6.301-2.662c13.53-10.03 31.978 1.074 31.978 1.074l-44.263 22.658c1.102-5.818 2.679-10.497 4.587-14.237Z"
                    fill="#6C63FF"
                />
            </G>
            <G filter="url(#d)">
                <Path
                    d="M134.276 138.773s-9.855-7.315-20.244 2.71c-10.388 10.024-18.645 0-18.645 0l-6.66 7.586 2.93 3.251-5.06-.813-5.061 6.773s22.108 11.921 35.959-8.128c13.851-20.048 32.763-1.083 32.763-1.083l-15.982-10.296Z"
                    fill="#6C63FF"
                />
            </G>
            <G filter="url(#e)">
                <Path
                    d="m195.453 186.234 2.562 4.474s-6.53.723-6.53-.723a12.056 12.056 0 0 0-.459-2.974l4.427-.777Z"
                    fill="#2F2E41"
                />
            </G>
            <G filter="url(#f)">
                <Path
                    d="m143.511 167.616 14.801 11.001 2.43 7.617-4.86-1.269-4.971-7.3-15.795-8.145 8.395-1.904Z"
                    fill="#3F3D56"
                />
            </G>
            <G filter="url(#g)">
                <Path
                    d="M160.559 185.989s.73 4.9-.729 4.9-6.077-4.9-6.077-4.9l.851-2.082 5.955 2.082Z"
                    fill="#2F2E41"
                />
            </G>
            <G filter="url(#h)">
                <Path
                    d="m205.455 158.057 11.839 7.468 4.017 17.218-3.806-1.245s-.422-15.973-7.611-16.18c-7.188-.208-17.759-.415-18.816-6.431-1.057-6.016 14.377-.83 14.377-.83Z"
                    fill="#3F3D56"
                />
            </G>
            <Path
                d="m220.24 181.589 1.071 1.626-.535 4.183s-6.96-2.324-6.424-4.183c.535-1.859 2.141-1.626 2.141-1.626h3.747Z"
                fill="#2F2E41"
            />
            <G filter="url(#i)">
                <Path
                    d="M156.082 156.775s-2.824 10.233-21.071 13.281c0 0-10.753-.109-8.798 8.382 1.956 8.49 2.281 9.252 2.281 9.252l-4.561.871-1.63-19.92 10.97-13.825 22.809 1.959Z"
                    fill="#3F3D56"
                />
            </G>
            <G filter="url(#j)">
                <Path
                    d="M128.31 186.234s2.614 3.599 2.073 4.064c-.541.464-5.229 1.161-5.59-.233-.36-1.393 0-3.715 0-3.715l3.517-.116Z"
                    fill="#2F2E41"
                />
            </G>
            <G filter="url(#k)">
                <Path
                    d="M145.746 164.277a15.088 15.088 0 0 0 9.126-3.059 228.106 228.106 0 0 0 10.659 4.293 260.624 260.624 0 0 0 7.277 2.595c2.465.837 5.058 1.67 7.777 2.499.644.195 1.295.39 1.955.582.161.05.323.097.487.144 18.073 5.281 25.92-13.007 28.723-22.534.072-.249.145-.494.211-.739.629-2.346.882-4.78.75-7.207-.274-5.932 2.501-11.846 2.501-11.846a87.176 87.176 0 0 0 3.22 14.923c2.412 7.596 10.729 3.526 9.388 0-1.341-3.528 1.341-11.124 1.341-11.124 4.559-13.838-2.952-15.738-2.952-15.738-23.778-12.676-44.636 19.042-46.53 22.026l-26.636-3.874a15.136 15.136 0 0 0-13.423-.578 15.295 15.295 0 0 0-5.532 4.164 15.546 15.546 0 0 0-3.161 6.199 15.636 15.636 0 0 0-.146 6.973 15.531 15.531 0 0 0 2.897 6.33 15.323 15.323 0 0 0 5.351 4.399 15.153 15.153 0 0 0 6.717 1.572Z"
                    fill="#3F3D56"
                />
            </G>
            <Path
                d="m224.874 121.07 1.096-10.472-4.659 7.616 3.563 2.856Z"
                fill="#3F3D56"
            />
            <Path
                d="m227.203 121.07 1.097-9.309-4.659 6.771 3.562 2.538Z"
                fill="#3F3D56"
            />
            <Path
                d="m155.661 140.318-3.711 8.073s-2.783 2.779-5.831 13.895c-3.048 11.117-3.71 10.72-3.71 10.72l4.638.927s5.168-12.044 6.891-12.97c1.723-.926 3.843-9.396 3.843-9.396l6.096-7.676-1.855-4.103-6.361.53Z"
                fill="#FFB8B8"
            />
            <Path
                d="m174.876 133.568.53-2.779-1.325-2.647-13.915 2.912-5.698 10.587s7.156-3.308 8.216 3.97l6.494-5.029M142.806 171.153s4.638-1.191 5.699.662c1.06 1.853.795 7.941.795 8.073 0 .132-1.591 1.456-2.121 1.456s-3.843 5.955-8.348 3.838c-4.506-2.118 3.975-14.029 3.975-14.029Z"
                fill="#2F2E41"
            />
            <Path
                d="M176.201 106.174a5.165 5.165 0 0 1-5.168-5.162 5.165 5.165 0 0 1 5.168-5.161 5.165 5.165 0 0 1 5.169 5.161 5.165 5.165 0 0 1-5.169 5.162Z"
                fill="#FFB8B8"
            />
            <Path
                d="M171.961 102.071s-1.061 5.558-1.988 6.352c-.928.794 7.023 1.985 7.023 1.985s-1.192-3.837.265-5.823c1.458-1.985-5.3-2.514-5.3-2.514Z"
                fill="#FFB8B8"
            />
            <Path
                d="M158.046 133.568c.903 0 3.201-.373 5.777-.853 2.229-.416 4.668-.91 6.593-1.309 2.06-.429 3.533-.749 3.533-.749s.53 3.308 2.252 2.911c1.485-.341 5.92-15.813 7.119-20.089a1.49 1.49 0 0 0-.658-1.672l-6.092-3.715-1.561.596s-2.637-2.035-4.168-2.076c-1.531-.041-4.181-.439-4.181-.439s-3.048.265-3.578 2.515c-.53 2.25-.795 16.278-2.783 18.793-1.988 2.514-4.771 6.087-2.253 6.087Z"
                fill="#D0CDE1"
            />
            <Path
                d="M167.057 141.509s1.193 6.088 3.711 5.161c2.518-.926 0-6.352 0-6.352l-3.711 1.191Z"
                fill="#FFB8B8"
            />
            <Path
                opacity={0.15}
                d="M161.492 127.084s1.297 3.091 2.331 5.631c2.229-.416 4.668-.909 6.593-1.309a3.798 3.798 0 0 0-.576-1.014c-.927-1.059-.397-1.323-.397-1.323.795-1.588.132-3.706.132-3.706 1.591-4.235-.795-9.529-.795-9.529l-7.288 11.25Z"
                fill="#000"
            />
            <Path
                d="M168.383 115.834s2.385 5.294.795 9.529c0 0 .662 2.118-.133 3.706 0 0-.53.264.398 1.323.927 1.059 1.723 4.764 1.06 5.558-.663.794.928 2.25.53 3.044-.397.794.663 1.853.663 1.853s-3.976.794-4.639 1.985c0 0-.795-.926-.397-1.985.397-1.059.132-1.456-.265-2.117-.398-.662-1.59-2.118-1.723-2.78-.132-.661-3.578-8.866-3.578-8.866l1.616-14.953 5.673 3.703Z"
                fill="#D0CDE1"
            />
            <Path
                d="M175.323 94.251a3.6 3.6 0 0 1-3.602-3.598 3.6 3.6 0 0 1 3.602-3.597 3.6 3.6 0 0 1 3.603 3.597 3.6 3.6 0 0 1-3.603 3.598Z"
                fill="#F76280"
            />
            <Path
                d="M179.305 89.707a3.604 3.604 0 0 0-3.223-3.578 3.604 3.604 0 0 1 3.981 3.578 3.604 3.604 0 0 1-3.981 3.577 3.604 3.604 0 0 0 3.223-3.577Z"
                fill="#F76280"
            />
            <Path
                d="m169.546 94.67 4.922-2.575 6.798 1.053 1.406 6.204-3.501-.135-.978-2.279v2.242l-1.615-.063-.938-3.628-.586 3.863-5.743-.117.235-4.565Z"
                fill="#F76280"
            />
            <Path
                d="M171.166 101.556c-.403 0-.729-.622-.729-1.39 0-.767.326-1.39.729-1.39.402 0 .728.623.728 1.39 0 .768-.326 1.39-.728 1.39Z"
                fill="#FFB8B8"
            />
            <Path
                d="M170.06 167.022c.591.197 1.189.396 1.796.594l5.193-8.146-6.989 7.552ZM164.236 164.65l1.47.639 4.354-8.146-5.824 7.507ZM179.378 169.412c.706.179 1.421.355 2.144.531l6.01-8.145-8.154 7.614Z"
                fill="#6C63FF"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h311v192H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default SvgComponent