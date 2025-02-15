import logo from '@/assets/logo.png';
import Button from '@/components/Button';
import Text from '@/components/Text';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/apply');
  };

  return (
    <HomeLayout>
      <Img src={logo} alt="logo" />

      <Text as="h1" size="2xl">
        안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.
      </Text>

      <Text as="h2" size="xl" variant="primary">
        드디어 Prography 10기 모집이 시작되었습니다.
      </Text>

      <Text as="p" size="lg">
        Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)
        총 6개의 파트를 모집합니다.
      </Text>

      <Box>
        <Text as="p">✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</Text>
        <Text as="p">
          ✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
        </Text>
        <Text as="p">
          ✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
        </Text>
      </Box>

      <Box>
        <Text as="h3" size="2xl" variant="primary">
          "프로답게, 재미있게"
        </Text>
        <Text as="p">재미있는 작당을 함께 만들어갈 10기에 합류하세요.</Text>
      </Box>

      <Box>
        <Text as="p">
          📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇🏻
        </Text>

        {linkList.map(({ id, to, children }) => (
          <LinkStyled
            key={id}
            to={to}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </LinkStyled>
        ))}
      </Box>

      <Button size="xl" onClick={handleClick}>
        지원하기
      </Button>
    </HomeLayout>
  );
};

const HomeLayout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 20px;
`;

const Img = styled.img`
  width: 150px;
  height: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary100};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;

const linkList = [
  {
    id: 1,
    to: 'https://prography.org/about',
    children: '프로그라피 10기 모집 자세히 알아보기',
  },
  {
    id: 2,
    to: 'https://prography.org/',
    children: '🏡 공식 홈페이지',
  },
  {
    id: 3,
    to: 'https://www.instagram.com/prography_official/',
    children: '🔗 인스타그램',
  },
];

export default Home;
