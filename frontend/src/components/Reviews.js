import React from 'react'
import a from "../assets/line1.png"
const Reviews = () => {
  return (
    <div className='review section-center'>
      <div className='title'>
        <h3>Reviews</h3>
      </div>
      <div className='review-container'>
        <article>
          <h3>premium</h3>
        </article>
        <article className='review-socials'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='102'
              viewBox='0 0 100 102'
              fill='none'
            >
              <g filter='url(#filter0_d_101_53)'>
                <path
                  d='M4 15C4 6.71573 10.7157 0 19 0H81C89.2843 0 96 6.71573 96 15V64C96 80.5685 82.5685 94 66 94H4V15Z'
                  fill='white'
                />
              </g>
              <path
                d='M63.6409 51.6875L65.5077 39.5621H53.8355V31.6935C53.8355 28.3762 55.466 25.1427 60.6936 25.1427H66V14.8192C66 14.8192 61.1846 14 56.5806 14C46.9681 14 40.685 19.8075 40.685 30.3208V39.5621H30V51.6875H40.685V81H53.8355V51.6875H63.6409Z'
                fill='black'
              />
              <defs>
                <filter
                  id='filter0_d_101_53'
                  x='0'
                  y='0'
                  width='100'
                  height='102'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_101_53'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_101_53'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='102'
              viewBox='0 0 100 102'
              fill='none'
            >
              <g filter='url(#filter0_d_101_56)'>
                <path
                  d='M4 15C4 6.71573 10.7157 0 19 0H81C89.2843 0 96 6.71573 96 15V64C96 80.5685 82.5685 94 66 94H4V15Z'
                  fill='#879DEB'
                />
              </g>
              <path
                d='M50.0047 36.2317C44.0455 36.2317 39.2388 41.0395 39.2388 47C39.2388 52.9605 44.0455 57.7683 50.0047 57.7683C55.9639 57.7683 60.7706 52.9605 60.7706 47C60.7706 41.0395 55.9639 36.2317 50.0047 36.2317ZM50.0047 54.0008C46.1537 54.0008 43.0055 50.8612 43.0055 47C43.0055 43.1388 46.1443 39.9992 50.0047 39.9992C53.865 39.9992 57.0039 43.1388 57.0039 47C57.0039 50.8612 53.8557 54.0008 50.0047 54.0008ZM63.722 35.7913C63.722 37.1877 62.5977 38.3029 61.2109 38.3029C59.8148 38.3029 58.6998 37.1783 58.6998 35.7913C58.6998 34.4042 59.8242 33.2796 61.2109 33.2796C62.5977 33.2796 63.722 34.4042 63.722 35.7913ZM70.8524 38.3404C70.6931 34.9759 69.9248 31.9956 67.4606 29.5402C65.0057 27.0848 62.0261 26.3163 58.6624 26.1476C55.1955 25.9508 44.8045 25.9508 41.3376 26.1476C37.9833 26.3069 35.0037 27.0754 32.5394 29.5308C30.0752 31.9863 29.3162 34.9665 29.1476 38.331C28.9508 41.7986 28.9508 52.192 29.1476 55.6596C29.3069 59.0241 30.0752 62.0044 32.5394 64.4598C35.0037 66.9152 37.9739 67.6837 41.3376 67.8524C44.8045 68.0492 55.1955 68.0492 58.6624 67.8524C62.0261 67.6931 65.0057 66.9246 67.4606 64.4598C69.9154 62.0044 70.6838 59.0241 70.8524 55.6596C71.0492 52.192 71.0492 41.808 70.8524 38.3404ZM66.3737 59.3802C65.6428 61.2171 64.228 62.6323 62.3822 63.3726C59.6181 64.4692 53.0592 64.2161 50.0047 64.2161C46.9501 64.2161 40.3819 64.4598 37.6272 63.3726C35.7907 62.6416 34.3759 61.2265 33.6357 59.3802C32.5394 56.6155 32.7924 50.0552 32.7924 47C32.7924 43.9448 32.5488 37.3751 33.6357 34.6198C34.3665 32.7829 35.7814 31.3677 37.6272 30.6274C40.3913 29.5308 46.9501 29.7839 50.0047 29.7839C53.0592 29.7839 59.6274 29.5402 62.3822 30.6274C64.2186 31.3584 65.6335 32.7735 66.3737 34.6198C67.4699 37.3845 67.217 43.9448 67.217 47C67.217 50.0552 67.4699 56.6249 66.3737 59.3802Z'
                fill='white'
              />
              <defs>
                <filter
                  id='filter0_d_101_56'
                  x='0'
                  y='0'
                  width='100'
                  height='102'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_101_56'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_101_56'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='102'
              viewBox='0 0 100 102'
              fill='none'
            >
              <g filter='url(#filter0_d_101_59)'>
                <path
                  d='M4 15C4 6.71573 10.7157 0 19 0H81C89.2843 0 96 6.71573 96 15V64C96 80.5685 82.5685 94 66 94H4V15Z'
                  fill='white'
                />
              </g>
              <path
                d='M67.2717 39.2211C67.3009 39.6257 67.3009 40.0305 67.3009 40.4352C67.3009 52.7781 57.8149 67 40.4772 67C35.1358 67 30.1739 65.4679 26 62.8086C26.7589 62.8953 27.4885 62.9242 28.2766 62.9242C32.684 62.9242 36.7411 61.45 39.981 58.9352C35.8363 58.8484 32.3629 56.1602 31.1662 52.4602C31.75 52.5468 32.3337 52.6047 32.9467 52.6047C33.7932 52.6047 34.6397 52.489 35.4277 52.2867C31.1079 51.4195 27.8679 47.6617 27.8679 43.1234V43.0078C29.123 43.7016 30.5825 44.1352 32.1293 44.1929C29.59 42.5163 27.9263 39.6546 27.9263 36.4171C27.9263 34.6828 28.3933 33.0929 29.2106 31.7054C33.8515 37.371 40.8274 41.071 48.6497 41.4757C48.5038 40.782 48.4162 40.0594 48.4162 39.3367C48.4162 34.1914 52.6193 30 57.8439 30C60.5584 30 63.0101 31.1273 64.7322 32.9484C66.8629 32.5438 68.906 31.7633 70.7158 30.6938C70.0152 32.8618 68.5266 34.6829 66.5711 35.839C68.4683 35.6368 70.3072 35.1164 72 34.3938C70.7159 36.2437 69.1105 37.8913 67.2717 39.2211Z'
                fill='black'
              />
              <defs>
                <filter
                  id='filter0_d_101_59'
                  x='0'
                  y='0'
                  width='100'
                  height='102'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_101_59'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_101_59'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </article>
        <article>
          <img src={a} alt='' />
        </article>
        <article className='next-reviews'>
          <div className='first-next-review'>
            <h3>50k</h3>
          </div>
        </article>
        <article className='next-reviews'>
          <div className='second-next-review'>
            <h3>8k</h3>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Reviews
