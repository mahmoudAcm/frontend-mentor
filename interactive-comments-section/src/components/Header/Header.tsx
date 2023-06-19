import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@/src/icons/Menu';
import UserProfileCard from '@/src/components/Header/UserProfileCard';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const HeaderRoot = styled(AppBar)(({ theme }) => ({
  display: 'none',
  background: 'linear-gradient(90deg, #58B6F3 0%, #AE1FEB 51.19%, rgba(228, 101, 130, 0.77) 100%)',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    paddingTop: '17.24px',
    paddingBottom: '17.24px',
    '& .MuiToolbar-root': {
      minHeight: '29.52px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '10.24px',
    paddingBottom: '10.24px',
    '& .MuiToolbar-root': {
      minHeight: '15.52px'
    }
  }
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(() => theme.breakpoints.down('lg'));

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isMobile) handleClose();
  }, [isMobile]);

  return (
    <>
      <HeaderRoot position='sticky' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <svg width='151' height='52' viewBox='0 0 151 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.08899 37.6531C2.08899 38.5209 2.28182 39.2868 2.66748 39.951C3.06386 40.6152 3.57807 41.1348 4.21013 41.5097C4.84218 41.8847 5.5278 42.0722 6.26698 42.0722C6.80262 42.0722 7.29005 42.0025 7.72928 41.8633C8.17921 41.724 8.5863 41.5312 8.95053 41.2848C9.31477 41.0277 9.62544 40.7331 9.88255 40.401V42.2007C9.41118 42.6185 8.89697 42.9292 8.33991 43.1327C7.78284 43.3363 7.09187 43.438 6.26698 43.438C5.48495 43.438 4.75112 43.2988 4.0655 43.0202C3.3906 42.731 2.79604 42.3293 2.28182 41.815C1.76761 41.2901 1.36588 40.6741 1.07664 39.9671C0.78739 39.26 0.642767 38.4887 0.642767 37.6531C0.642767 36.8175 0.78739 36.0462 1.07664 35.3392C1.36588 34.6321 1.76761 34.0215 2.28182 33.5073C2.79604 32.9824 3.3906 32.5806 4.0655 32.3021C4.75112 32.0128 5.48495 31.8682 6.26698 31.8682C7.09187 31.8682 7.78284 31.97 8.33991 32.1735C8.89697 32.3771 9.41118 32.6878 9.88255 33.1056V34.9053C9.62544 34.5732 9.31477 34.284 8.95053 34.0376C8.5863 33.7805 8.17921 33.5823 7.72928 33.443C7.29005 33.3037 6.80262 33.2341 6.26698 33.2341C5.5278 33.2341 4.84218 33.4216 4.21013 33.7965C3.57807 34.1715 3.06386 34.691 2.66748 35.3552C2.28182 36.0087 2.08899 36.7747 2.08899 37.6531ZM11.5629 39.5814C11.5629 38.8315 11.729 38.1673 12.0611 37.5889C12.4039 37.0104 12.8645 36.5551 13.443 36.223C14.0215 35.8909 14.6696 35.7248 15.3874 35.7248C16.1158 35.7248 16.764 35.8909 17.3317 36.223C17.9102 36.5551 18.3655 37.0104 18.6976 37.5889C19.0404 38.1673 19.2118 38.8315 19.2118 39.5814C19.2118 40.3206 19.0404 40.9848 18.6976 41.574C18.3655 42.1525 17.9102 42.6078 17.3317 42.9399C16.764 43.272 16.1158 43.438 15.3874 43.438C14.6696 43.438 14.0215 43.272 13.443 42.9399C12.8645 42.6078 12.4039 42.1525 12.0611 41.574C11.729 40.9848 11.5629 40.3206 11.5629 39.5814ZM12.8645 39.5814C12.8645 40.0956 12.9716 40.5509 13.1859 40.9473C13.4109 41.3437 13.7108 41.6597 14.0858 41.8954C14.4714 42.1204 14.9053 42.2328 15.3874 42.2328C15.8694 42.2328 16.298 42.1204 16.6729 41.8954C17.0586 41.6597 17.3585 41.3437 17.5728 40.9473C17.7977 40.5509 17.9102 40.0956 17.9102 39.5814C17.9102 39.0672 17.7977 38.6119 17.5728 38.2156C17.3585 37.8085 17.0586 37.4924 16.6729 37.2675C16.298 37.0425 15.8694 36.93 15.3874 36.93C14.9053 36.93 14.4714 37.0425 14.0858 37.2675C13.7108 37.4924 13.4109 37.8085 13.1859 38.2156C12.9716 38.6119 12.8645 39.0672 12.8645 39.5814ZM31.1014 38.6173V43.2773H29.8159V38.778C29.8159 38.1459 29.698 37.6799 29.4623 37.38C29.2374 37.08 28.8839 36.93 28.4018 36.93C28.0483 36.93 27.7429 37.005 27.4858 37.155C27.2287 37.2943 27.0305 37.5032 26.8913 37.7817C26.752 38.0602 26.6824 38.3923 26.6824 38.778V43.2773H25.3968V38.778C25.3968 38.1459 25.279 37.6799 25.0433 37.38C24.8183 37.08 24.4648 36.93 23.9828 36.93C23.6292 36.93 23.3239 37.005 23.0668 37.155C22.8097 37.2943 22.6115 37.5032 22.4722 37.7817C22.333 38.0602 22.2633 38.3923 22.2633 38.778V43.2773H20.9778V35.8855H22.2633V36.9622C22.4883 36.5444 22.7668 36.2337 23.0989 36.0301C23.4418 35.8266 23.8435 35.7248 24.3041 35.7248C24.8183 35.7248 25.2576 35.848 25.6218 36.0944C25.9968 36.3301 26.2699 36.6676 26.4413 37.1068C26.6984 36.6461 27.0198 36.3033 27.4055 36.0784C27.7911 35.8427 28.2304 35.7248 28.7232 35.7248C29.2267 35.7248 29.6552 35.8373 30.0087 36.0623C30.3622 36.2872 30.63 36.6193 30.8122 37.0586C31.005 37.4871 31.1014 38.0067 31.1014 38.6173ZM43.6398 38.6173V43.2773H42.3542V38.778C42.3542 38.1459 42.2364 37.6799 42.0007 37.38C41.7757 37.08 41.4222 36.93 40.9401 36.93C40.5866 36.93 40.2813 37.005 40.0242 37.155C39.7671 37.2943 39.5689 37.5032 39.4296 37.7817C39.2904 38.0602 39.2207 38.3923 39.2207 38.778V43.2773H37.9352V38.778C37.9352 38.1459 37.8174 37.6799 37.5817 37.38C37.3567 37.08 37.0032 36.93 36.5211 36.93C36.1676 36.93 35.8623 37.005 35.6052 37.155C35.3481 37.2943 35.1499 37.5032 35.0106 37.7817C34.8713 38.0602 34.8017 38.3923 34.8017 38.778V43.2773H33.5162V35.8855H34.8017V36.9622C35.0267 36.5444 35.3052 36.2337 35.6373 36.0301C35.9801 35.8266 36.3818 35.7248 36.8425 35.7248C37.3567 35.7248 37.7959 35.848 38.1602 36.0944C38.5351 36.3301 38.8083 36.6676 38.9797 37.1068C39.2368 36.6461 39.5582 36.3033 39.9438 36.0784C40.3295 35.8427 40.7687 35.7248 41.2615 35.7248C41.765 35.7248 42.1935 35.8373 42.5471 36.0623C42.9006 36.2872 43.1684 36.6193 43.3505 37.0586C43.5433 37.4871 43.6398 38.0067 43.6398 38.6173ZM48.9148 43.438C48.2292 43.438 47.6186 43.2773 47.083 42.956C46.558 42.6239 46.1456 42.1686 45.8456 41.5901C45.5564 41.0116 45.4118 40.342 45.4118 39.5814C45.4118 38.8101 45.5617 38.1352 45.8617 37.5567C46.1724 36.9782 46.6009 36.5283 47.1472 36.2069C47.7043 35.8855 48.3471 35.7248 49.0755 35.7248C49.804 35.7248 50.4253 35.8802 50.9396 36.1908C51.4645 36.4908 51.8662 36.9247 52.1447 37.4924C52.4233 38.0602 52.5625 38.7351 52.5625 39.5172C52.5625 39.5921 52.5572 39.6725 52.5465 39.7582C52.5465 39.8332 52.5465 39.8814 52.5465 39.9028H46.2313V38.8101H51.5341L51.0199 39.5493C51.052 39.4957 51.0842 39.4154 51.1163 39.3083C51.1485 39.1904 51.1645 39.094 51.1645 39.019C51.1645 38.5798 51.0735 38.1995 50.8914 37.8781C50.7199 37.5567 50.4789 37.305 50.1682 37.1228C49.8576 36.9407 49.4933 36.8497 49.0755 36.8497C48.5827 36.8497 48.1596 36.9568 47.8061 37.1711C47.4633 37.3746 47.1954 37.6746 47.0026 38.0709C46.8205 38.4566 46.7241 38.9333 46.7134 39.5011C46.7134 40.0796 46.8044 40.5724 46.9865 40.9795C47.1687 41.3865 47.4365 41.6972 47.79 41.9115C48.1435 42.1257 48.572 42.2328 49.0755 42.2328C49.579 42.2328 50.0236 42.1257 50.4093 41.9115C50.7949 41.6865 51.1217 41.349 51.3895 40.8991L52.434 41.5579C52.0483 42.1793 51.5609 42.6506 50.9717 42.972C50.3932 43.2827 49.7076 43.438 48.9148 43.438ZM59.0649 38.778C59.0649 38.1673 58.931 37.7067 58.6632 37.396C58.3954 37.0854 58.0043 36.93 57.4901 36.93C57.1152 36.93 56.7831 37.0104 56.4938 37.1711C56.2153 37.321 55.9957 37.5353 55.835 37.8138C55.685 38.0924 55.61 38.4137 55.61 38.778V43.2773H54.3245V35.8855H55.61V37.0425C55.8564 36.5926 56.1617 36.2605 56.526 36.0462C56.9009 35.832 57.3294 35.7248 57.8115 35.7248C58.5936 35.7248 59.2095 35.9873 59.6595 36.5122C60.1201 37.0264 60.3504 37.7281 60.3504 38.6173V43.2773H59.0649V38.778ZM61.6423 35.8855H65.3382V37.0907H61.6423V35.8855ZM62.8474 33.3145H64.133V43.2773H62.8474V33.3145ZM66.9328 41.0116C67.0828 41.2366 67.2542 41.4455 67.447 41.6383C67.6398 41.8311 67.8594 41.9865 68.1058 42.1043C68.3629 42.2114 68.6415 42.265 68.9414 42.265C69.3057 42.265 69.5896 42.1846 69.7931 42.0239C70.0074 41.8525 70.1145 41.6222 70.1145 41.333C70.1145 41.0759 70.0288 40.8616 69.8574 40.6902C69.6967 40.5081 69.4878 40.3581 69.2307 40.2403C68.9736 40.1117 68.7004 39.9939 68.4112 39.8867C68.0898 39.7582 67.763 39.6082 67.4309 39.4368C67.1096 39.2547 66.8364 39.0244 66.6114 38.7458C66.3972 38.4566 66.29 38.0977 66.29 37.6692C66.29 37.23 66.4025 36.8657 66.6275 36.5765C66.8632 36.2872 67.1631 36.073 67.5273 35.9337C67.9023 35.7945 68.288 35.7248 68.6843 35.7248C69.0807 35.7248 69.4503 35.7891 69.7931 35.9177C70.1466 36.0462 70.4573 36.2176 70.7251 36.4319C70.9929 36.6461 71.2018 36.8925 71.3518 37.1711L70.3234 37.8299C70.1198 37.5514 69.8627 37.321 69.5521 37.1389C69.2521 36.9568 68.9093 36.8657 68.5236 36.8657C68.2558 36.8657 68.0255 36.9247 67.8327 37.0425C67.6398 37.1603 67.5434 37.3425 67.5434 37.5889C67.5434 37.7817 67.6184 37.9531 67.7684 38.1031C67.9184 38.253 68.1112 38.387 68.3469 38.5048C68.5826 38.6226 68.829 38.7351 69.0861 38.8422C69.5146 39.0137 69.9056 39.2011 70.2591 39.4047C70.6126 39.5975 70.8912 39.8332 71.0947 40.1117C71.309 40.3902 71.4161 40.7491 71.4161 41.1883C71.4161 41.8311 71.1804 42.3668 70.709 42.7953C70.2484 43.2238 69.6378 43.438 68.8772 43.438C68.3844 43.438 67.9398 43.3523 67.5434 43.1809C67.147 42.9988 66.8096 42.7685 66.5311 42.49C66.2632 42.2114 66.0597 41.9275 65.9204 41.6383L66.9328 41.0116ZM79.0831 37.3317V36.5765H80.8989C81.2739 36.5765 81.6113 36.5122 81.9113 36.3837C82.2112 36.2551 82.4469 36.0676 82.6183 35.8212C82.7897 35.5748 82.8754 35.2749 82.8754 34.9214C82.8754 34.3857 82.6879 33.9733 82.313 33.684C81.9381 33.3841 81.4667 33.2341 80.8989 33.2341H79.3723V42.0722H81.0596C81.5417 42.0722 81.9648 41.9865 82.3291 41.815C82.704 41.6436 82.9933 41.3972 83.1968 41.0759C83.4111 40.7545 83.5182 40.3635 83.5182 39.9028C83.5182 39.56 83.4593 39.2547 83.3414 38.9869C83.2236 38.7191 83.0522 38.4941 82.8272 38.312C82.613 38.1298 82.3559 37.9959 82.0559 37.9102C81.7559 37.8138 81.4238 37.7656 81.0596 37.7656H79.0831V37.0104H81.0596C81.606 37.0104 82.1095 37.0693 82.5701 37.1871C83.0308 37.305 83.4325 37.4871 83.7753 37.7335C84.1288 37.9692 84.402 38.2745 84.5948 38.6494C84.7877 39.0244 84.8841 39.4689 84.8841 39.9832C84.8841 40.7223 84.7127 41.3383 84.3699 41.8311C84.0378 42.3132 83.5825 42.6774 83.004 42.9238C82.4362 43.1595 81.7881 43.2773 81.0596 43.2773H78.0065V32.0289H80.8989C81.5738 32.0289 82.1577 32.1307 82.6505 32.3342C83.154 32.5378 83.545 32.8484 83.8235 33.2662C84.102 33.6733 84.2413 34.1983 84.2413 34.841C84.2413 35.3659 84.102 35.8159 83.8235 36.1908C83.545 36.5658 83.154 36.8497 82.6505 37.0425C82.1577 37.2353 81.5738 37.3317 80.8989 37.3317H79.0831ZM86.2438 39.5814C86.2438 38.8315 86.4099 38.1673 86.7419 37.5889C87.0848 37.0104 87.5454 36.5551 88.1239 36.223C88.7024 35.8909 89.3505 35.7248 90.0683 35.7248C90.7967 35.7248 91.4449 35.8909 92.0126 36.223C92.5911 36.5551 93.0464 37.0104 93.3785 37.5889C93.7213 38.1673 93.8927 38.8315 93.8927 39.5814C93.8927 40.3206 93.7213 40.9848 93.3785 41.574C93.0464 42.1525 92.5911 42.6078 92.0126 42.9399C91.4449 43.272 90.7967 43.438 90.0683 43.438C89.3505 43.438 88.7024 43.272 88.1239 42.9399C87.5454 42.6078 87.0848 42.1525 86.7419 41.574C86.4099 40.9848 86.2438 40.3206 86.2438 39.5814ZM87.5454 39.5814C87.5454 40.0956 87.6525 40.5509 87.8668 40.9473C88.0918 41.3437 88.3917 41.6597 88.7667 41.8954C89.1523 42.1204 89.5862 42.2328 90.0683 42.2328C90.5503 42.2328 90.9789 42.1204 91.3538 41.8954C91.7395 41.6597 92.0394 41.3437 92.2537 40.9473C92.4786 40.5509 92.5911 40.0956 92.5911 39.5814C92.5911 39.0672 92.4786 38.6119 92.2537 38.2156C92.0394 37.8085 91.7395 37.4924 91.3538 37.2675C90.9789 37.0425 90.5503 36.93 90.0683 36.93C89.5862 36.93 89.1523 37.0425 88.7667 37.2675C88.3917 37.4924 88.0918 37.8085 87.8668 38.2156C87.6525 38.6119 87.5454 39.0672 87.5454 39.5814ZM96.2372 40.9955C96.2372 41.2741 96.3015 41.5151 96.43 41.7186C96.5693 41.9222 96.7568 42.0775 96.9925 42.1846C97.2388 42.2811 97.5174 42.3293 97.828 42.3293C98.2244 42.3293 98.5779 42.2489 98.8886 42.0882C99.21 41.9275 99.4618 41.7026 99.6439 41.4133C99.8367 41.1134 99.9331 40.7706 99.9331 40.3849L100.19 41.349C100.19 41.8204 100.046 42.2114 99.7564 42.5221C99.4778 42.8328 99.1297 43.0631 98.7119 43.2131C98.3048 43.363 97.8977 43.438 97.4906 43.438C97.0407 43.438 96.6175 43.347 96.2211 43.1649C95.8355 42.972 95.5248 42.6989 95.2891 42.3453C95.0534 41.9918 94.9356 41.5633 94.9356 41.0598C94.9356 40.342 95.1873 39.7689 95.6908 39.3404C96.2051 38.9012 96.9175 38.6816 97.828 38.6816C98.3637 38.6816 98.8083 38.7458 99.1618 38.8744C99.526 38.9922 99.8153 39.1315 100.03 39.2922C100.244 39.4422 100.388 39.5654 100.463 39.6618V40.417C100.088 40.1599 99.7028 39.9778 99.3064 39.8707C98.91 39.7528 98.4869 39.6939 98.0369 39.6939C97.6192 39.6939 97.2763 39.7475 97.0085 39.8546C96.7514 39.9617 96.5586 40.1117 96.43 40.3045C96.3015 40.4974 96.2372 40.7277 96.2372 40.9955ZM96.0444 37.5889L95.4177 36.6408C95.6962 36.4372 96.0765 36.2337 96.5586 36.0301C97.0514 35.8266 97.6406 35.7248 98.3262 35.7248C98.9047 35.7248 99.4082 35.8159 99.8367 35.998C100.276 36.1694 100.613 36.4212 100.849 36.7533C101.095 37.0854 101.219 37.4924 101.219 37.9745V43.2773H99.9331V38.1513C99.9331 37.8942 99.8903 37.6853 99.8046 37.5246C99.7189 37.3532 99.5957 37.2193 99.435 37.1228C99.285 37.0264 99.1082 36.9568 98.9047 36.9139C98.7011 36.8711 98.4869 36.8497 98.2619 36.8497C97.8977 36.8497 97.5656 36.8925 97.2656 36.9782C96.9764 37.0639 96.73 37.1657 96.5264 37.2835C96.3229 37.4014 96.1622 37.5032 96.0444 37.5889ZM104.681 35.8855V43.2773H103.395V35.8855H104.681ZM106.914 37.2996C106.743 37.1711 106.588 37.08 106.448 37.0264C106.309 36.9622 106.132 36.93 105.918 36.93C105.597 36.93 105.345 37.0104 105.163 37.1711C104.981 37.3317 104.852 37.5514 104.777 37.8299C104.713 38.1084 104.681 38.4245 104.681 38.778H104.102C104.102 38.1888 104.204 37.6692 104.408 37.2193C104.622 36.7586 104.895 36.3944 105.227 36.1266C105.559 35.8587 105.897 35.7248 106.239 35.7248C106.507 35.7248 106.754 35.7623 106.979 35.8373C107.214 35.9016 107.429 36.0355 107.621 36.239L106.914 37.2996ZM114.447 30.7434H115.733V43.2773H114.447V30.7434ZM108.26 39.5814C108.26 38.778 108.427 38.0924 108.759 37.5246C109.091 36.9461 109.535 36.5015 110.092 36.1908C110.649 35.8802 111.26 35.7248 111.924 35.7248C112.546 35.7248 113.087 35.8802 113.547 36.1908C114.008 36.5015 114.367 36.9461 114.624 37.5246C114.892 38.0924 115.026 38.778 115.026 39.5814C115.026 40.3742 114.892 41.0598 114.624 41.6383C114.367 42.2168 114.008 42.6614 113.547 42.972C113.087 43.2827 112.546 43.438 111.924 43.438C111.26 43.438 110.649 43.2827 110.092 42.972C109.535 42.6614 109.091 42.2168 108.759 41.6383C108.427 41.0598 108.26 40.3742 108.26 39.5814ZM109.562 39.5814C109.562 40.1492 109.675 40.6313 109.9 41.0277C110.135 41.424 110.446 41.724 110.832 41.9275C111.217 42.1311 111.635 42.2328 112.085 42.2328C112.46 42.2328 112.829 42.1311 113.194 41.9275C113.558 41.724 113.858 41.424 114.094 41.0277C114.329 40.6313 114.447 40.1492 114.447 39.5814C114.447 39.0137 114.329 38.5316 114.094 38.1352C113.858 37.7388 113.558 37.4389 113.194 37.2353C112.829 37.0318 112.46 36.93 112.085 36.93C111.635 36.93 111.217 37.0318 110.832 37.2353C110.446 37.4389 110.135 37.7388 109.9 38.1352C109.675 38.5316 109.562 39.0137 109.562 39.5814Z'
              fill='#CFE4FA'
            />
            <path
              d='M3.22366 9.62319V7.11012H8.64843V9.62319H3.22366ZM3.22366 14.372V12.0149H8.47512V14.372H3.22366ZM1.28253 7.11012H4.09024V19.2422H1.28253V7.11012ZM12.8462 11.2697V19.2422H10.2638V11.2697H12.8462ZM15.1513 13.9734C15.0126 13.8348 14.8624 13.725 14.7007 13.6441C14.5504 13.5632 14.3598 13.5228 14.1287 13.5228C13.8745 13.5228 13.6492 13.5921 13.4528 13.7308C13.2564 13.8694 13.1062 14.0716 13.0022 14.3374C12.8982 14.6031 12.8462 14.9266 12.8462 15.3079L12.2222 14.3894C12.2222 13.7539 12.3436 13.1877 12.5862 12.6909C12.8404 12.194 13.1697 11.8012 13.5741 11.5123C13.9785 11.2235 14.4002 11.079 14.8393 11.079C15.1282 11.079 15.4055 11.1368 15.6712 11.2524C15.937 11.3679 16.1392 11.5297 16.2778 11.7376L15.1513 13.9734ZM16.6675 15.2559C16.6675 14.4125 16.8639 13.6788 17.2568 13.0548C17.6496 12.4309 18.1927 11.9456 18.8859 11.599C19.5792 11.2524 20.3591 11.079 21.2257 11.079C22.0923 11.079 22.8664 11.2524 23.5481 11.599C24.2414 11.9456 24.7844 12.4309 25.1773 13.0548C25.5817 13.6788 25.7839 14.4125 25.7839 15.2559C25.7839 16.0878 25.5817 16.8158 25.1773 17.4397C24.7844 18.0636 24.2414 18.5489 23.5481 18.8956C22.8664 19.2422 22.0923 19.4155 21.2257 19.4155C20.3591 19.4155 19.5792 19.2422 18.8859 18.8956C18.1927 18.5489 17.6496 18.0636 17.2568 17.4397C16.8639 16.8158 16.6675 16.0878 16.6675 15.2559ZM19.3539 15.2559C19.3539 15.6719 19.4406 16.0301 19.6139 16.3305C19.7872 16.6193 20.0125 16.8447 20.2898 17.0064C20.5671 17.1682 20.8791 17.2491 21.2257 17.2491C21.5608 17.2491 21.867 17.1682 22.1443 17.0064C22.4331 16.8447 22.6584 16.6193 22.8202 16.3305C22.9935 16.0301 23.0802 15.6719 23.0802 15.2559C23.0802 14.84 22.9935 14.4818 22.8202 14.1814C22.6584 13.881 22.4331 13.6499 22.1443 13.4881C21.867 13.3264 21.5608 13.2455 21.2257 13.2455C20.8791 13.2455 20.5671 13.3264 20.2898 13.4881C20.0125 13.6499 19.7872 13.881 19.6139 14.1814C19.4406 14.4818 19.3539 14.84 19.3539 15.2559ZM32.5405 14.3894C32.5405 13.9156 32.448 13.5517 32.2632 13.2975C32.0899 13.0433 31.7952 12.9162 31.3793 12.9162C31.102 12.9162 30.8593 12.974 30.6513 13.0895C30.4434 13.205 30.2816 13.3726 30.1661 13.5921C30.0505 13.8116 29.9927 14.0774 29.9927 14.3894V19.2422H27.3584V11.2697H29.9927V12.4656C30.2238 12.0265 30.5358 11.6856 30.9286 11.443C31.3331 11.2004 31.8299 11.079 32.4192 11.079C33.4128 11.079 34.135 11.3448 34.5856 11.8763C35.0362 12.4078 35.2615 13.153 35.2615 14.1121V19.2422H32.5405V14.3894ZM36.3915 11.2697H41.7296V13.4361H36.3915V11.2697ZM37.7953 8.49664H40.3084V19.2422H37.7953V8.49664ZM46.9006 19.4155C45.9762 19.4155 45.1732 19.248 44.4915 18.9129C43.8214 18.5663 43.3014 18.081 42.9317 17.457C42.5619 16.8331 42.3771 16.0994 42.3771 15.2559C42.3771 14.4009 42.5562 13.6614 42.9143 13.0375C43.2725 12.4136 43.7867 11.9341 44.4569 11.599C45.1386 11.2639 45.9416 11.0964 46.8659 11.0964C47.7903 11.0964 48.5702 11.2581 49.2057 11.5817C49.8412 11.8936 50.3265 12.35 50.6615 12.9508C50.9966 13.5517 51.1642 14.2796 51.1642 15.1346C51.1642 15.2617 51.1642 15.3888 51.1642 15.5159C51.1642 15.6315 51.1526 15.7297 51.1295 15.8105H43.8502V14.3547H48.7724L48.1485 15.1519C48.2062 15.0711 48.2525 14.9729 48.2871 14.8573C48.3333 14.7302 48.3564 14.6262 48.3564 14.5453C48.3564 14.1987 48.2929 13.8983 48.1658 13.6441C48.0387 13.3899 47.8596 13.1935 47.6285 13.0548C47.3974 12.9162 47.1259 12.8469 46.8139 12.8469C46.4211 12.8469 46.0918 12.9335 45.826 13.1068C45.5603 13.2801 45.3581 13.5459 45.2194 13.9041C45.0923 14.2507 45.023 14.6898 45.0115 15.2213C45.0115 15.7066 45.0808 16.1225 45.2194 16.4691C45.3581 16.8158 45.5661 17.0815 45.8434 17.2664C46.1207 17.4397 46.4615 17.5264 46.8659 17.5264C47.3281 17.5264 47.721 17.4397 48.0445 17.2664C48.3796 17.0931 48.6453 16.8331 48.8417 16.4865L51.1815 17.0584C50.7655 17.8441 50.1994 18.4334 49.483 18.8262C48.7782 19.2191 47.9174 19.4155 46.9006 19.4155ZM57.9623 14.3894C57.9623 13.9156 57.8699 13.5517 57.685 13.2975C57.5117 13.0433 57.2171 12.9162 56.8011 12.9162C56.5238 12.9162 56.2812 12.974 56.0732 13.0895C55.8652 13.205 55.7034 13.3726 55.5879 13.5921C55.4723 13.8116 55.4146 14.0774 55.4146 14.3894V19.2422H52.7802V11.2697H55.4146V12.4656C55.6457 12.0265 55.9576 11.6856 56.3505 11.443C56.7549 11.2004 57.2517 11.079 57.841 11.079C58.8347 11.079 59.5568 11.3448 60.0074 11.8763C60.458 12.4078 60.6834 13.153 60.6834 14.1121V19.2422H57.9623V14.3894ZM68.7979 5.7236H71.415V19.2422H68.7979V5.7236ZM62.2812 15.2559C62.2812 14.3547 62.4603 13.5979 62.8185 12.9855C63.1883 12.3731 63.662 11.9052 64.2397 11.5817C64.8174 11.2581 65.4298 11.0964 66.0768 11.0964C66.747 11.0964 67.3363 11.2639 67.8447 11.599C68.3646 11.9341 68.7748 12.4136 69.0752 13.0375C69.3756 13.6499 69.5258 14.3894 69.5258 15.2559C69.5258 16.111 69.3756 16.8504 69.0752 17.4744C68.7748 18.0983 68.3646 18.5778 67.8447 18.9129C67.3363 19.248 66.747 19.4155 66.0768 19.4155C65.4298 19.4155 64.8174 19.2537 64.2397 18.9302C63.662 18.6067 63.1883 18.1387 62.8185 17.5264C62.4603 16.9024 62.2812 16.1456 62.2812 15.2559ZM65.037 15.2559C65.037 15.6719 65.1236 16.0359 65.2969 16.3478C65.4702 16.6482 65.7013 16.8851 65.9902 17.0584C66.279 17.2202 66.5968 17.3011 66.9434 17.3011C67.2438 17.3011 67.5327 17.2202 67.81 17.0584C68.0989 16.8967 68.3357 16.6656 68.5206 16.3652C68.7055 16.0532 68.7979 15.6834 68.7979 15.2559C68.7979 14.8284 68.7055 14.4645 68.5206 14.1641C68.3357 13.8521 68.0989 13.6152 67.81 13.4535C67.5327 13.2917 67.2438 13.2108 66.9434 13.2108C66.5968 13.2108 66.279 13.2975 65.9902 13.4708C65.7013 13.6326 65.4702 13.8694 65.2969 14.1814C65.1236 14.4818 65.037 14.84 65.037 15.2559ZM82.0217 13.0548L81.2938 19.2422H78.2088L80.1672 6.50352L85.332 13.9041L90.5142 6.50352L92.4726 19.2422H89.3876L88.6597 13.0548L85.332 18.1156L82.0217 13.0548ZM98.1335 19.4155C97.2092 19.4155 96.4062 19.248 95.7245 18.9129C95.0543 18.5663 94.5344 18.081 94.1646 17.457C93.7949 16.8331 93.61 16.0994 93.61 15.2559C93.61 14.4009 93.7891 13.6614 94.1473 13.0375C94.5055 12.4136 95.0196 11.9341 95.6898 11.599C96.3715 11.2639 97.1745 11.0964 98.0989 11.0964C99.0232 11.0964 99.8031 11.2581 100.439 11.5817C101.074 11.8936 101.559 12.35 101.894 12.9508C102.23 13.5517 102.397 14.2796 102.397 15.1346C102.397 15.2617 102.397 15.3888 102.397 15.5159C102.397 15.6315 102.386 15.7297 102.362 15.8105H95.0832V14.3547H100.005L99.3814 15.1519C99.4392 15.0711 99.4854 14.9729 99.5201 14.8573C99.5663 14.7302 99.5894 14.6262 99.5894 14.5453C99.5894 14.1987 99.5258 13.8983 99.3987 13.6441C99.2716 13.3899 99.0925 13.1935 98.8615 13.0548C98.6304 12.9162 98.3588 12.8469 98.0469 12.8469C97.654 12.8469 97.3247 12.9335 97.059 13.1068C96.7932 13.2801 96.591 13.5459 96.4524 13.9041C96.3253 14.2507 96.256 14.6898 96.2444 15.2213C96.2444 15.7066 96.3137 16.1225 96.4524 16.4691C96.591 16.8158 96.799 17.0815 97.0763 17.2664C97.3536 17.4397 97.6945 17.5264 98.0989 17.5264C98.561 17.5264 98.9539 17.4397 99.2774 17.2664C99.6125 17.0931 99.8782 16.8331 100.075 16.4865L102.414 17.0584C101.998 17.8441 101.432 18.4334 100.716 18.8262C100.011 19.2191 99.1503 19.4155 98.1335 19.4155ZM109.195 14.3894C109.195 13.9156 109.103 13.5517 108.918 13.2975C108.745 13.0433 108.45 12.9162 108.034 12.9162C107.757 12.9162 107.514 12.974 107.306 13.0895C107.098 13.205 106.936 13.3726 106.821 13.5921C106.705 13.8116 106.648 14.0774 106.648 14.3894V19.2422H104.013V11.2697H106.648V12.4656C106.879 12.0265 107.191 11.6856 107.583 11.443C107.988 11.2004 108.485 11.079 109.074 11.079C110.068 11.079 110.79 11.3448 111.24 11.8763C111.691 12.4078 111.916 13.153 111.916 14.1121V19.2422H109.195V14.3894ZM113.046 11.2697H118.384V13.4361H113.046V11.2697ZM114.45 8.49664H116.963V19.2422H114.45V8.49664ZM119.032 15.2559C119.032 14.4125 119.228 13.6788 119.621 13.0548C120.014 12.4309 120.557 11.9456 121.25 11.599C121.944 11.2524 122.723 11.079 123.59 11.079C124.457 11.079 125.231 11.2524 125.912 11.599C126.606 11.9456 127.149 12.4309 127.542 13.0548C127.946 13.6788 128.148 14.4125 128.148 15.2559C128.148 16.0878 127.946 16.8158 127.542 17.4397C127.149 18.0636 126.606 18.5489 125.912 18.8956C125.231 19.2422 124.457 19.4155 123.59 19.4155C122.723 19.4155 121.944 19.2422 121.25 18.8956C120.557 18.5489 120.014 18.0636 119.621 17.4397C119.228 16.8158 119.032 16.0878 119.032 15.2559ZM121.718 15.2559C121.718 15.6719 121.805 16.0301 121.978 16.3305C122.152 16.6193 122.377 16.8447 122.654 17.0064C122.931 17.1682 123.243 17.2491 123.59 17.2491C123.925 17.2491 124.231 17.1682 124.509 17.0064C124.797 16.8447 125.023 16.6193 125.185 16.3305C125.358 16.0301 125.444 15.6719 125.444 15.2559C125.444 14.84 125.358 14.4818 125.185 14.1814C125.023 13.881 124.797 13.6499 124.509 13.4881C124.231 13.3264 123.925 13.2455 123.59 13.2455C123.243 13.2455 122.931 13.3264 122.654 13.4881C122.377 13.6499 122.152 13.881 121.978 14.1814C121.805 14.4818 121.718 14.84 121.718 15.2559ZM132.305 11.2697V19.2422H129.723V11.2697H132.305ZM134.61 13.9734C134.472 13.8348 134.321 13.725 134.16 13.6441C134.009 13.5632 133.819 13.5228 133.588 13.5228C133.333 13.5228 133.108 13.5921 132.912 13.7308C132.715 13.8694 132.565 14.0716 132.461 14.3374C132.357 14.6031 132.305 14.9266 132.305 15.3079L131.681 14.3894C131.681 13.7539 131.802 13.1877 132.045 12.6909C132.299 12.194 132.629 11.8012 133.033 11.5123C133.437 11.2235 133.859 11.079 134.298 11.079C134.587 11.079 134.864 11.1368 135.13 11.2524C135.396 11.3679 135.598 11.5297 135.737 11.7376L134.61 13.9734Z'
              fill='white'
            />
          </svg>
          <span
            aria-label='menu button'
            role='button'
            style={{ cursor: 'pointer', height: '20px' }}
            tabIndex={0}
            onClick={() => {
              setOpen(true);
            }}
            onKeyDown={evt => {
              if (evt.key === 'Enter') setOpen(true);
            }}
          >
            <MenuIcon />
          </span>
        </Toolbar>
      </HeaderRoot>
      <Drawer
        open={open && isMobile}
        anchor='right'
        onClose={handleClose}
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: 'blur(5.5px)'
            }
          }
        }}
      >
        <UserProfileCard className='menu' onClose={handleClose} />
      </Drawer>
    </>
  );
}
