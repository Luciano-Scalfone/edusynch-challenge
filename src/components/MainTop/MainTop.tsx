import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import Button from "../Button/Button";
import RightArow from "../icons/RightArow/RightArow";
import Waves from "../icons/Waves/Waves";
import MainTopWrapper from "./MainTopStyles";

const MainTop = (): JSX.Element => {
  const { setShowSignIn } = useContext(ModalsContext);

  return (
    <MainTopWrapper>
      <h5 className="main-top-wrapper__title">
        Lorem ipsum dolor sit amet, consectetur
      </h5>
      <p className="main-top-wrapper__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <Button
        type="primary"
        content="SIGN UP NOW"
        callback={() => setShowSignIn(true)}
        icon={<RightArow width={15} height={15} />}
      />
      <div className="main-top-wrapper__buttons-set">
        <Button
          type="secondary"
          content="Cryptos"
          callback={() => console.log("Cryptos")}
        />
        <Button
          type="secondary"
          content="NFTs"
          callback={() => console.log("NFTs")}
        />
        <Button
          type="secondary"
          content="Games"
          callback={() => console.log("Games")}
        />
      </div>
      <Waves />
    </MainTopWrapper>
  );
};

export default MainTop;
