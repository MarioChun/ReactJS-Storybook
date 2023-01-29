import styled from "styled-components";
import PackButton from "../../components/pack/PackButton";
import PackCheckBox from "../../components/pack/PackCheckBox";
import PackFrame from "../../components/pack/PackFrame";
import Packinput from "../../components/pack/PackInput";
import PackModal from "../../components/pack/PackModal";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Header = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 50px;
    font-weight: 400;
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: solid;
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StoryBookPage = () => {
  return (
    <Container>
      <Header>
        <h1>React + TypeScript + Storybook</h1>
        <h3>Component implementation with Storybook.</h3>
      </Header>

      <Overview>
        <PackFrame text="Button">
          <PackButton />
        </PackFrame>
      </Overview>

      <Overview>
        <PackFrame text="Input">
          <Packinput />
        </PackFrame>
      </Overview>

      <Overview>
        <PackFrame text="Checkbox">
          <PackCheckBox />
        </PackFrame>
      </Overview>

      <Overview>
        <PackFrame text="Modal">
          <PackModal />
        </PackFrame>
      </Overview>
    </Container>
  );
};

export default StoryBookPage;
